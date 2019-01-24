<?php


use SilverStripe\Control\Controller;
use SilverStripe\Security\Security;
use SilverStripe\View\ArrayData;

class StyleGuideController extends Controller
{

    private static $allowed_actions = [
        'index'
    ];

    public function index()
    {
        if (is_null(Security::getCurrentUser())) {
            return $this->redirect('Security/login?BackURL=_styleguide');
        } else {
            return $this->renderWith(['StyleGuideController', 'Page']);
        }
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
            'Placeholder' => 'themes/quicksilver/dist/images/standard/placeholder.png',
            'VideoType'   => 'youtube',
            'VideoID'     => 'ScMzIvxBSi4',
            'Caption'     => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        ]);
        echo $arrayData->renderWith('Toast\QuickBlocks\VideoBlock');
    }

    public function fauxImageBlock()
    {
        $arrayData = new ArrayData([
            'Placeholder' => 'themes/quicksilver/dist/images/standard/placeholder.png',
        ]);
        echo $arrayData->renderWith('Toast\QuickBlocks\ImageBlock');
    }

}