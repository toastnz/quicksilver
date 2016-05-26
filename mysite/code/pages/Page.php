<?php

/**
 * Class Page
 *
 * @method Image Thumbnail
 */
class Page extends SiteTree
{
    private static $has_one = array(
        'Thumbnail' => 'Image'
    );

    /**
     * @return FieldList
     */
    public function getCMSFields()
    {
        /** =========================================
         * @var FieldList $fields
         * @var UploadField $thumbnail
         * ========================================*/

        $fields = parent::getCMSFields();

        /** -----------------------------------------
         * Thumbnail
         * ----------------------------------------*/

        $thumbnail = UploadField::create('Thumbnail', 'Thumbnail');
        $thumbnail->setFolderName('Uploads/thumbnails');

        $fields->addFieldsToTab('Root.Main', array(
            $thumbnail
        ), 'Content');

        return $fields;
    }

    public function getIsLive()
    {
        return Director::isLive();
    }
}

class Page_Controller extends ContentController
{
    private static $allowed_actions = array(
        'SubscriptionForm'
    );

    public function SubscriptionForm()
    {
        return SubscriptionForm::create($this, 'SubscriptionForm');
    }
}
