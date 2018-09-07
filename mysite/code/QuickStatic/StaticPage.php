<?php

namespace QuickStatic;

use SilverStripe\Control\Director;
use SilverStripe\Forms\FieldList;

/**
 * Class StaticPage
 */
class StaticPage extends \Page
{
    public function getIsLive()
    {
        return Director::isLive();
    }

    private static $defaults = [
        'ShowInMenus'  => 0,
        'ShowInSearch' => 0
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

        $fields->removeByName(['Content', 'Summary', 'Blocks']);


        return $fields;
    }
}

/**
 * Class StaticPageController
 */
class StaticPageController extends \PageController
{

}
