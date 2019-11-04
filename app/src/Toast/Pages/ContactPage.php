<?php

namespace Toast\Pages;

use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\EmailField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\HeaderField;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\ORM\FieldType\DBField;
use SilverStripe\ORM\FieldType\DBHTMLText;
use SilverStripe\UserForms\Model\UserDefinedForm;
use Toast\Forms\ContactForm;

class ContactPage extends UserDefinedForm
{
    private static $singular_name = 'Contact Page';
    private static $plural_name = 'Contact Pages';
    private static $description = 'Displays a contact form which receives enquiries from the end user';
    private static $icon = 'app/dist/images/cms/envelope-at-sign.png';
    private static $table_name = 'ContactPage';

    private static $db = [
        'NotificationEmail' => 'Varchar(100)',
        'SuccessMessage' => 'Text',
        'Map'      => 'Boolean',
        //'FormContent'  => 'HTMLText'
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldsToTab('Root.Form', [
            HeaderField::create('FormHeader', 'Form'),
            EmailField::create('NotificationEmail', 'Notification Email'),
            TextareaField::create('SuccessMessage', 'Success Message'),
            //HTMLEditorField::create('Content', 'Content')
        ]);
        $fields->addFieldsToTab('Root.Main', [

            $fields->insertAfter(
                'MenuTitle',
                CheckboxField::create('Map', 'Turn on map'))
        ]);
        return $fields;
    }
    public function getUser()
    {
        return DBField::create_field(DBHTMLText::class, '$UserDefinedForm' );
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
