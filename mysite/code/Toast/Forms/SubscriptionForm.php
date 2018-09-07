<?php

namespace Toast\Forms;

use DrewM\MailChimp\MailChimp;
use SilverStripe\Control\Controller;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Dev\Debug;
use SilverStripe\Forms\EmailField;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\FormAction;
use SilverStripe\Forms\RequiredFields;
use SilverStripe\Forms\Form;
use SilverStripe\Control\Session;
use SilverStripe\SiteConfig\SiteConfig;
use Toast\Extensions\SiteConfigExtension;


/**
 * Class SubscriptionForm
 */
class SubscriptionForm extends Form
{
    /**
     * @param Controller $controller
     * @param String     $name
     * @param array      $arguments
     */
    public function __construct($controller, $name, $arguments = [])
    {
        /** =========================================
         * @var EmailField $emailField
         * @var TextField  $nameField
         * @var FormAction $submit
         * @var Form       $form
        ===========================================*/

        /** -----------------------------------------
         * Fields
         * ----------------------------------------*/

        $emailField = EmailField::create('Email', 'Email Address');

        $emailField->addExtraClass('form-control')
            ->setAttribute('placeholder', 'Email')
            ->setAttribute('data-parsley-required-message', 'Please enter your <strong>Email</strong>')
            ->setCustomValidationMessage('Please enter your <strong>Email</strong>');

        $nameField = TextField::create('Name', 'Name');
        $nameField->setAttribute('placeholder', 'Name')
            ->setAttribute('data-parsley-required-message', 'Please enter your <strong>Name</strong>')
            ->setCustomValidationMessage('Please enter your <strong>Name</strong>');;

        $fields = FieldList::create(
            $nameField,
            $emailField
        );

        /** -----------------------------------------
         * Actions
         * ----------------------------------------*/

        $submit = FormAction::create('Subscribe');
        $submit->setTitle('SIGN UP')->addExtraClass('button');

        $actions = FieldList::create(
            $submit
        );

        /** -----------------------------------------
         * Validation
         * ----------------------------------------*/

        $required = RequiredFields::create(
            'Name',
            'Email'
        );

        $form = Form::create($controller, $name, $fields, $actions, $required);

        if ($formData = $this->getRequest()->getSession()->get('FormInfo.Form_' . $name . '.data')) {
            $form->loadDataFrom($formData);
        }

        parent::__construct($controller, $name, $fields, $actions, $required);

        $this->setAttribute('data-parsley-validate', true);
        $this->addExtraClass('form');
    }

    /**
     * Submit the form
     *
     * @param $data
     * @param $form
     * @return bool|HTTPResponse
     */
    public function Subscribe($data, $form)
    {
        /** =========================================
         * @var SiteConfigExtension $siteConfig
         * @var Form                $form
        ===========================================*/

        /** Set the form data to session */
        $data = $form->getData();

        $this->getRequest()->getSession()->set('FormInfo.Form_' . $this->name . '.data', $data);

        $siteConfig = SiteConfig::current_site_config();

        /** Get the list id */
        $listID = $siteConfig->MailChimpListID;

        /** Check if the API key, and List ID have been set. */
        if ($siteConfig->MailChimpAPI && $listID) {
            try {
                $mailChimp = new MailChimp($siteConfig->MailChimpAPI);
            } catch (Exception $e) {
                return Controller::curr()->getStandardJsonResponse([], 'Subscribe', $e->getMessage(), 500, 'error');
            }

            // create merge vars
            $mergeVars = [];

            $mergeVars['FNAME'] = $data['Name'];

            $result = $mailChimp->post("lists/$listID/members", [
                'email_address' => $data['Email'],
                'status'        => 'subscribed',
                'merge_fields'  => $mergeVars
            ]);

        } else {
            /** If not, redirect back and display an error. */
//            $this->setMessage('Missing API key, or List ID', 'danger');

            if ($this->request->isAjax()) {
                return Controller::curr()->getStandardJsonResponse([], 'Subscribe', 'Missing API key, or List ID', 500, 'error');
            } else {
                return $this->controller->redirectBack();
            }
        }

        /**
         * If the status of the request returns an error,
         * display the error
         */

        if (isset($result['status'])) {
            if ($result['status'] != 'subscribed') {

                $message = $result['title'];

                if ($this->request->isAjax()) {
                    if ($message == 'Member Exists') {
                        $message = "Looks like you've already signed up to receive info about the Pilot Programme!";
                    }

                    return Controller::curr()->getStandardJsonResponse($result, 'Subscribe', $message, 500, 'error');
                } else {
                    return $this->controller->redirectBack();
                }
            }
        }

        /** Clear the form state */
        $this->getRequest()->getSession()->clear('FormInfo.Form_' . $this->name . '.data');

        $message = $siteConfig->MailChimpSuccessMessage ?: 'Your subscription has been received, you will be sent a confirmation email shortly.';

        $form->sessionMessage($message, 'success');

        if ($this->request->isAjax()) {
            return Controller::curr()->getStandardJsonResponse([], 'Subscribe',  $message);
        } else {
            return $this->controller->redirectBack();
        }
    }

}
