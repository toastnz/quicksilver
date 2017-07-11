<?php

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
                ->setTitle('SUBMIT')
        );

        /** -----------------------------------------
         * Validation
         * ----------------------------------------*/

        $required = RequiredFields::create([
            'FirstName',
            'Email',
            'Message'
        ]);

        /** -----------------------------------------
         * Form
         * ----------------------------------------*/

        $form = Form::create($this, $name, $fields, $actions, $required);

        if ($arguments) {
            $form->loadDataFrom($arguments);
        }

        if ($formData = Session::get('FormInfo.Form_' . $name . '.data')) {
            $form->loadDataFrom($formData);
        }

        parent::__construct($controller, $name, $fields, $actions, $required);

        $this->setAttribute('data-parsley-validate', true);
        $this->setAttribute('autocomplete', 'on');
        $this->addExtraClass('form');

        $this->enableSpamProtection();
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
                ->setAttribute('placeholder', 'First Name')
                ->addExtraClass('input-wrap__half'),
            TextField::create('Surname', 'Last Name')
                ->setAttribute('placeholder', 'Last Name')
                ->addExtraClass('input-wrap__half input-wrap__half--last'),
            EmailField::create('Email', 'Email')
                ->setAttribute('placeholder', 'Email')
                ->addExtraClass('input-wrap__half'),
            TextField::create('Phone', 'Phone')
                ->setAttribute('placeholder', 'Phone')
                ->addExtraClass('input-wrap__half input-wrap__half--last'),
            TextareaField::create('Message', 'Message')
                ->setAttribute('placeholder', 'Message')
        ]);

        return $fields;
    }

    public function Submit($data, $form)
    {
        /** =========================================
         * @var Form            $form
         * @var QuickSiteConfig $siteConfig
         * @var Email           $email
        ===========================================*/

        $data       = $form->getData();
        $siteConfig = SiteConfig::current_site_config();

        // Save data to session
        Session::set('FormInfo.Form_' . $this->name . '.data', $data);

        /** -----------------------------------------
         * Email
         * ----------------------------------------*/

        $to = $siteConfig->Email ?: Config::inst()->get('Email', 'admin_email');

        $from = $data['Email'];

        $email = Email::create($from, $to, 'Enquiry received');

        $email->setTemplate('ContactEmail')
            ->populateTemplate($data)
            ->send();

        /** -----------------------------------------
         * Record
         * ----------------------------------------*/

        $record = ContactMessage::create($data);
        $record->write();

        /** -----------------------------------------
         * Finish
         * ----------------------------------------*/

        Session::clear('FormInfo.Form_' . $this->name . '.data');

        $message = 'Your enquiry has been received.';

        $form->sessionMessage($message, 'success');

        if ($this->request->isAjax()) {
            return json_encode([
                'success' => true,
                'message' => $message
            ]);
        } else {
            return $this->controller->redirect($this->controller->data()->Link('?success=1'));
        }
    }

    public function getSuccess()
    {
        return isset($_REQUEST['success']) && $_REQUEST['success'] == "1";
    }
}
