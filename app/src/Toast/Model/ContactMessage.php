<?php

namespace Toast\Model;

use Toast\Pages\ContactPage;
use SilverStripe\ORM\DataObject;
use SilverStripe\Forms\FieldList;
use SilverStripe\Control\Email\Email;
use SilverStripe\Forms\ReadonlyField;
use SilverStripe\Security\Permission;

class ContactMessage extends DataObject
{
    private static $table_name = 'ContactMessage';

    private static $db = [
        'FirstName' => 'Varchar(500)',
        'Surname' => 'Varchar(500)',
        'Email' => 'Varchar(500)',
        'Phone' => 'Varchar(255)',
        'Message' => 'Text'
    ];

    private static $summary_fields = [
        'Created.Nice' => 'Created',
        'Title' => 'Name',
        'Email' => 'Email',
        'Phone' => 'Phone',
        'Message' => 'Message'
    ];

    private static $default_sort = 'Created DESC';

    private static $has_one = [
        'Page' => ContactPage::class
    ];

    public function getCMSFields()
    {
        $fields = FieldList::create([
            ReadonlyField::create('FirstName', 'FirstName'),
            ReadonlyField::create('Surname', 'Surname'),
            ReadonlyField::create('Email', 'Email'),
            ReadonlyField::create('Phone', 'Phone'),
            ReadonlyField::create('Message', 'Message')
        ]);

        return $fields;
    }

    public function getTitle()
    {
        return $this->FirstName . ' ' . $this->Surname;
    }

    public function canView($member = null)
    {
        return Permission::check('CMS_ACCESS_CMSMain', 'any', $member);
    }

    public function canEdit($member = null)
    {
        return Permission::check('CMS_ACCESS_CMSMain', 'any', $member);
    }

    public function canDelete($member = null)
    {
        return Permission::check('CMS_ACCESS_CMSMain', 'any', $member);
    }

    public function canCreate($member = null, $context = [])
    {
        return Permission::check('CMS_ACCESS_CMSMain', 'any', $member);
    }
}
