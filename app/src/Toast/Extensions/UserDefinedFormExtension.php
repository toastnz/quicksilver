<?php

namespace Toast\Extensions;

use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\FieldList;
use SilverStripe\ORM\DataExtension;

class UserDefinedFormExtension extends DataExtension
{
    private static $singular_name = 'UserDefinedForm';
    private static $plural_name = 'UserDefinedForma';
    private static $table_name = 'UserDefinedFormExtension';

    private static $db = [
        'Map'      => 'Boolean'
    ];

    public function updateCMSFields(FieldList $fields)
    {
//        $fields->addFieldsToTab('Root.Main', [
//            CheckboxField::create('Map','Turn on map'),
//        ]);
        $fields->insertAfter(
            'MenuTitle',
            CheckboxField::create('Map', 'Turn on map')
        );
        return $fields;
    }
}
