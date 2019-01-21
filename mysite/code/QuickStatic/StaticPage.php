<?php

namespace QuickStatic;

use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Control\Director;
use SilverStripe\View\ArrayData;

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

    public function fauxTestimonialBlock()
    {
        $arrayData = new ArrayData([
            'Testimonial' => 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
            'Attribution' => 'First name, Last Name',
            'Location'    => 'Location'
        ]);
        echo $arrayData->renderWith('Toast\QuickBlocks\TestimonialBlock');
    }

    public function fauxVideoBlock()
    {
        $arrayData = new ArrayData([
            'VideoType'   => 'youtube',
            'Testimonial' => '9xwazD5SyVg',
            'Caption'     => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        ]);
        echo $arrayData->renderWith('Toast\QuickBlocks\VideoBlock');
    }
}

/**
 * Class StaticPageController
 */
class StaticPageController extends ContentController
{

}
