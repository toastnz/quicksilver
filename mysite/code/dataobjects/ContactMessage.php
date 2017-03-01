<?php

/**
 * Class ContactMessage
 *
 * @property string $FirstName
 * @property string $Surname
 * @property string $Email
 * @property string $Phone
 * @property string $Message
 */
class ContactMessage extends DataObject
{
    private static $db = [
        'FirstName' => 'Varchar(500)',
        'Surname'   => 'Varchar(500)',
        'Email'     => 'Varchar(500)',
        'Phone'     => 'Varchar(255)',
        'Message'   => 'Text'
    ];

    private static $summary_fields = [
        'Created.Nice' => 'Created',
        'Title'        => 'Name',
        'Email'        => 'Email',
        'Phone'        => 'Phone',
        'Message'      => 'Message'
    ];

    private static $default_sort = 'Created DESC';

    /**
     * @return FieldList
     */
    public function getCMSFields()
    {
        /** =========================================
         * @var FieldList $fields
         * ========================================*/

        $fields = parent::getCMSFields();

        $fields->removeByName(['PageID']);

        /** -----------------------------------------
         * Fields
         * ----------------------------------------*/

        $fields->addFieldsToTab('Root.Main', [
            ReadonlyField::create('Name', 'Name'),
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

    /* ==========================================
     * CRUD
     * ========================================*/

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

    public function canCreate($member = null)
    {
        return Permission::check('CMS_ACCESS_CMSMain', 'any', $member);
    }
}
