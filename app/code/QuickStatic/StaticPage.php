<?php

namespace QuickStatic;

use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Control\Director;
use SilverStripe\View\ArrayData;
use SilverStripe\View\Requirements;

/**
 * Class StaticPage
 */
class StaticPage extends SiteTree
{
    private static $icon = 'mysite/dist/images/cms/svg/home.svg';

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
    public function init()
    {
        parent::init();

        Requirements::backend()->setWriteHeaderComment(false);
        Requirements::combine_files('app.js', ['themes/quicksilver/dist/scripts/main.js']);
        Requirements::process_combined_files();
    }
}
