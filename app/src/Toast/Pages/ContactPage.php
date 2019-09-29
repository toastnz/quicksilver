<?php

namespace Toast\Pages;

use SilverStripe\Forms\EmailField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\HeaderField;
use SilverStripe\Forms\TextareaField;
use Toast\Forms\ContactForm;

class ContactPage extends \Page
{
    private static $singular_name = 'Contact Page';
    private static $plural_name = 'Contact Pages';
    private static $description = 'Displays a contact form which receives enquiries from the end user';
    private static $icon = 'app/dist/images/cms/envelope-at-sign.png';
    private static $table_name = 'ContactPage';

    private static $db = [
        'NotificationEmail' => 'Varchar(100)',
        'SuccessMessage' => 'Text'
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldsToTab('Root.Form', [
            HeaderField::create('FormHeader', 'Form'),
            EmailField::create('NotificationEmail', 'Notification Email'),
            TextareaField::create('SuccessMessage', 'Success Message')
        ]);

        return $fields;
    }
}

class ContactPageController extends \PageController
{
    private static $allowed_actions = [
        'ContactForm'
    ];

    public function ContactForm()
    {
        $form = ContactForm::create($this, 'ContactForm');
        return $form;
    }
}
