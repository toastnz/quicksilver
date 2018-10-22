<?php

namespace QuickStatic;

use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Control\Director;

/**
 * Class StaticPage
 */
class StaticPage extends SiteTree
{
    public function getIsLive()
    {
        return Director::isLive();
    }

    public function getAllStaticPages()
    {
        return StaticPage::get();

    }
}

/**
 * Class StaticPageController
 */
class StaticPageController extends ContentController
{

}
