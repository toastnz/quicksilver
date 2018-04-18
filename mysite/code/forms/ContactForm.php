<?php

use SilverStripe\Control\Controller;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\FormAction;
use SilverStripe\Forms\FieldList;
use SilverStripe\Control\Email\Email;
use SilverStripe\Forms\RequiredFields;
use SilverStripe\Forms\Form;
use SilverStripe\Control\Session;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\EmailField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Core\Config\Config;
use Toast\Extensions\SiteConfigExtension;

/**
 * Class Contact
 */
class ContactForm extends Form
{
    public function __construct($controller, $name, $arguments = [])
    {
        /** =========================================
         * @var Form $form
        ===========================================*/

        /** -----------------------------------------
         * Fields
         * ----------------------------------------*/

        $fields = $this->createFields($arguments);

        /** -----------------------------------------
         * Actions
         * ----------------------------------------*/

        $actions = FieldList::create(
            FormAction::create('Submit')
                ->addExtraClass('button button--primary')
                ->setTitle('SUBMIT')
        );

        /** -----------------------------------------
         * Validation
         * ----------------------------------------*/

        $required = RequiredFields::create([
            'FirstName',
            'Surname',
            'Email',
            'Message'
        ]);

        /** -----------------------------------------
         * Form
         * ----------------------------------------*/

        $form = Form::create($controller, $name, $fields, $actions, $required);

        if ($arguments) {
            $form->loadDataFrom($arguments);
        }

        if ($formData = $this->getRequest()->getSession()->get('FormInfo.Form_' . $name . '.data')) {
            $form->loadDataFrom($formData);
        }

        parent::__construct($controller, $name, $fields, $actions, $required);

        $this->setAttribute('data-parsley-validate', true);
        $this->setAttribute('autocomplete', 'on');
        $this->addExtraClass('form');

//        $this->enableSpamProtection();
    }

    /**
     * @param $arguments
     * @return FieldList
     */
    private function createFields($arguments)
    {
        /** =========================================
         * @var FieldList $fields
        ===========================================*/

        /** -----------------------------------------
         * Fields
         * ----------------------------------------*/

        $fields = FieldList::create([
            TextField::create('FirstName', 'First Name')
                ->setAttribute('data-parsley-error-message', 'Please enter your first name')
                ->addExtraClass('input-wrap--half'),
            TextField::create('Surname', 'Last Name')
                ->setAttribute('data-parsley-error-message', 'Please enter your last name')
                ->addExtraClass('input-wrap--half input-wrap--half--last'),
            TextField::create('Phone', 'Phone')
                ->setAttribute('placeholder', 'e.g; 021 123 4567')
                ->addExtraClass('input-wrap--half'),
            EmailField::create('Email', 'Email Address')
                ->setAttribute('data-parsley-error-message', 'Please enter your email address')
                ->addExtraClass('input-wrap--half input-wrap--half--last'),
            TextareaField::create('Message', 'Message')
                ->setAttribute('data-parsley-error-message', 'Please enter a message')
        ]);

        return $fields;
    }

    public function Submit($data, $form)
    {
        /** =========================================
         * @var Form                $form
         * @var SiteConfigExtension $siteConfig
         * @var Email               $email
        ===========================================*/

        $data = $form->getData();

        /** @var ContactPage $page */
        $page = $this->getController()->data();

        if ($page) {
            $data['PageID'] = $page->ID;
        }

        $siteConfig = SiteConfig::current_site_config();

        // Save data to session
        $this->getRequest()->getSession()->set('FormInfo.Form_' . $this->name . '.data', $data);

        /** -----------------------------------------
         * Email
         * ----------------------------------------*/

        $to = $page->NotificationEmail ? : $siteConfig->Email ?: Config::inst()->get('Email', 'admin_email');

        $from = $data['Email'];

        $email = Email::create($from, $to, 'Enquiry received');

        $email->setHTMLTemplate('email/ContactEmail')
            ->setData($data)
            ->send();

        /** -----------------------------------------
         * Record
         * ----------------------------------------*/

        $record   = ContactMessage::create($data);
        $recordID = $record->write();

        /** -----------------------------------------
         * Finish
         * ----------------------------------------*/

        $this->getRequest()->getSession()->clear('FormInfo.Form_' . $this->name . '.data');

        $message = $page->SuccessMessage ? : 'Your enquiry has been received.';

        $form->sessionMessage($message, 'success');

        if ($this->request->isAjax()) {
            return Controller::curr()->getStandardJsonResponse(['message_id' => $recordID], 'doSubmit', $message);
        } else {
            return $this->controller->redirectBack();
        }
    }
}
