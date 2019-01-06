<?php

use QuickStatic\StaticPage;
use SilverStripe\Control\Director;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\View\Requirements;
use SilverStripe\CMS\Controllers\ContentController;


/**
 * Class Page
 */
class Page extends SiteTree
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
 * Class PageController
 */
class PageController extends ContentController
{
    private static $allowed_actions = [
        'SubscriptionForm'
    ];

    public function init()
    {
        parent::init();

        Requirements::backend()->setWriteHeaderComment(false);
        Requirements::combine_files('app.js', ['themes/quicksilver/dist/scripts/bundle.js']);
        Requirements::process_combined_files();

    }

    public function SubscriptionForm()
    {
        return SubscriptionForm::create($this, 'SubscriptionForm');
    }
}
