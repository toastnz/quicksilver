<?php

/**
 * Class Page
 *
 */
class Page extends SiteTree
{

    /**
     * @return FieldList
     */
    public function getCMSFields()
    {
        /** =========================================
         * @var FieldList $fields
         * ========================================*/

        $fields = parent::getCMSFields();

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
