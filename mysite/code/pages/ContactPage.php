<?php

use SilverStripe\Forms\EmailField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\HeaderField;
use SilverStripe\Forms\TextareaField;

/**
 * Class ContactPage
 *
 * @property string NotificationEmail
 * @property string SuccessMessage
 */
class ContactPage extends \Page
{
    private static $singular_name = 'Contact Page';
    private static $plural_name = 'Contact Pages';
    private static $description = 'Displays a contact form which receives enquiries from the end user';
    private static $icon = 'mysite/dist/images/cms/envelope-at-sign.png';

    private static $db = [
        'NotificationEmail' => 'Varchar(100)',
        'SuccessMessage'    => 'Text'
    ];

    /**
     * @return FieldList
     */
    public function getCMSFields()
    {
        /** =========================================
         * @var FieldList $fields
         * ========================================*/

        $fields = parent::getCMSFields();

        /** -----------------------------------------
         * Form
         * ----------------------------------------*/

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
        /** =========================================
         * @var ContactForm $form
        ===========================================*/

        $form = ContactForm::create($this, 'ContactForm');

        return $form;
    }
}
