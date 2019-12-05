<?php

namespace Toast\Pages;

use BetterBrief\GoogleMapField;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\EmailField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\Forms\HeaderField;
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
        'Map'      => 'Boolean',
        'Latitude' => 'Varchar',
        'Longitude' => 'Varchar',
        'FullWidth' => 'Boolean',
        'ContactContent' => 'HTMLText',
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldsToTab('Root.Map', [
            CheckboxField::create('Map', 'Turn on map'),
            CheckboxField::create('FullWidth', 'Show FullWidth')
        ]);

        $fields->addFieldsToTab('Root.Main', [
            HTMLEditorField::create('ContactContent', 'Contact Content')
        ]);


        $fields->addFieldToTab('Root.Map', new GoogleMapField(
            $this,
            'Location'
        ));

        $fields->removeFieldsFromTab('Root.Main', ['Latitude', 'Longitude']);
        return $fields;
    }
    public function mapApiKey()
    {
        return GoogleMapField::config()->default_options['api_key'];
    }
}

class ContactPageController extends \PageController
{
}
