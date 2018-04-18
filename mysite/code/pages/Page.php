<?php
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
}

/**
 * Class Page_Controller
 */
class PageController extends ContentController
{
    private static $allowed_actions = [
        'SubscriptionForm'
    ];

    public function init()
    {
        parent::init();
        Requirements::combine_files(
            'output.js',
            [
                $this->ThemeDir() . '/dist/js/app.js',
            ]
        );
    }

    public function SubscriptionForm()
    {
        return SubscriptionForm::create($this, 'SubscriptionForm');
    }


}
