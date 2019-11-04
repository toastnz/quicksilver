<?php

namespace Toast\Extensions;

use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\ORM\DataExtension;

class UserDefinedFormExtension extends DataExtension
{
    private static $singular_name = 'UserDefinedForm';
    private static $plural_name = 'UserDefinedForm';
    private static $table_name = 'UserDefinedFormExtension';

    private static $db = [

    ];

    public function updateCMSFields(FieldList $fields)
    {

    }
}

