<?php

use QuickStatic\StaticPage;
use SilverStripe\Control\Director;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\View\Requirements;
use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\SiteConfig\SiteConfig;

/**
 * Class Page
 */
class Page extends SiteTree
{

    private static $icon = 'mysite/dist/images/cms/svg/page.svg';

    public function getIsLive()
    {
        return Director::isLive();
    }

    public function getAllStaticPages()
    {
        return StaticPage::get();
    }

    public function getCSS()
    {
        $siteConfig = SiteConfig::current_site_config();
        $css = json_decode($siteConfig->getField('typeJSON'));
        $data = '';
        foreach ($css as $tag => $rules) {
            $data .= $tag . '{';
            foreach ($rules as $rule => $value) {
                $data .= $rule . ':' . $value . ';';
            }
            $data .= '}';
        }
        return $data;
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
