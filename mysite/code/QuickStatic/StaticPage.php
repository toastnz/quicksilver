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
            'Placeholder' => '//placehold.it/1920x1080',
            'VideoType'   => 'youtube',
            'VideoID'     => 'ScMzIvxBSi4',
            'Caption'     => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        ]);
        echo $arrayData->renderWith('Toast\QuickBlocks\VideoBlock');
    }

    public function fauxImageBlock()
    {
        $arrayData = new ArrayData([
            'Placeholder' => '//placehold.it/1920x1080',
        ]);
        echo $arrayData->renderWith('Toast\QuickBlocks\ImageBlock');
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
        Requirements::combine_files('app.js', ['themes/quicksilver/dist/scripts/bundle.js']);
        Requirements::process_combined_files();

    }

}
