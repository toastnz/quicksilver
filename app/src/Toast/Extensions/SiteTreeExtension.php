<?php

namespace Toast\Extensions;

use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\FieldList;
use SilverStripe\ORM\DataExtension;


class SiteTreeExtension extends DataExtension
{

    private static $db = [
        'DropdownNav' => 'Boolean',
        'Sidebar'     => 'Boolean',
    ];

    public function updateCMSFields(FieldList $fields)
    {
        $fields->addFieldsToTab('Root.Settings', [
        $fields->insertAfter(
            'ShowInSearch',
            CheckboxField::create('Sidebar', 'Show Sidebar')
        ),
        $fields->insertAfter(
            'Sidebar',
            CheckboxField::create('DropdownNav', 'Show Dropdown Nav')
        )
            ]);

    }

}

