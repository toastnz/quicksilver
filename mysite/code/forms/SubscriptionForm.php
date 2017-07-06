<?php

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

        $form = Form::create($this, $name, $fields, $actions, $required);
        if ($formData = Session::get('FormInfo.Form_' . $name . '.data')) {
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
     * @return bool|SS_HTTPResponse
     */
    public function Subscribe($data, $form)
    {
        /** =========================================
         * @var QuickSiteConfig $siteConfig
         * @var Form            $form
        ===========================================*/

        /** Set the form data to session */
        $data = $form->getData();
        Session::set('FormInfo.Form_' . $this->name . '.data', $data);

        $siteConfig = SiteConfig::current_site_config();

        /** Get the list id */
        $listID = $siteConfig->MailChimpListID;

        /** Check if the API key, and List ID have been set. */
        if ($siteConfig->MailChimpAPI && $listID) {
            $mailChimp = new \Drewm\MailChimp($siteConfig->MailChimpAPI);

            // create merge vars
            $mergeVars = [];

            $mergeVars['FNAME'] = $data['Name'];

            $result = $mailChimp->call('lists/subscribe', [
                'id'         => $listID,
                'email'      => [
                    'email' => $data['Email']
                ],
                'merge_vars' => $mergeVars
            ]);

        } else {
            /** If not, redirect back and display an error. */
            $this->setMessage('Missing API key, or List ID', 'danger');

            if ($this->request->isAjax()) {
                return json_encode([
                    'error'   => true,
                    'message' => 'Missing API key, or List ID'
                ]);
            } else {
                return $this->controller->redirectBack();
            }
        }

        /**
         * If the status of the request returns an error,
         * display the error
         */
        if (isset($result['status'])) {
            if ($result['status'] == 'error') {
                $this->setMessage($result['error'], 'danger');

                if ($this->request->isAjax()) {
                    return json_encode([
                        'error'   => true,
                        'message' => $result['error']
                    ]);
                } else {
                    return $this->controller->redirectBack();
                }
            }
        }

        /** Clear the form state */
        Session::clear('FormInfo.Form_' . $this->name . '.data');

        $message = $siteConfig->MailChimpSuccessMessage ?: 'Your subscription has been received, you will be sent a confirmation email shortly.';

        $this->setMessage($message, 'success');

        if ($this->request->isAjax()) {
            return json_encode([
                'success' => true,
                'message' => $message
            ]);
        } else {
            return $this->controller->redirect($this->controller->Link('?success=1'));
        }
    }

}
