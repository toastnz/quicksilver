<?php


use SilverStripe\Control\Controller;
use SilverStripe\ORM\ArrayList;
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
    public function fauxAccordionBlock()
    {

        $accordionItems = new ArrayList([]);
        $accordionItems->push([
            'DisplayTitle' => 'Accordion Heading',
            'Content' => 'Accordion Content',

        ]);

        $arrayData = new ArrayData([
            'DisplayTitle'   => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            'Content'        => 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
           'AccordionItems' => $accordionItems
        ]);

        echo $arrayData->renderWith('Toast\QuickBlocks\AccordionBlock');
    }

    public function fauxQuickBlock()
    {
        $arrayData = new ArrayData([

            'Content'=>'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
        ]);
        echo $arrayData->renderWith('Toast\QuickBlocks\QuickBlock');
    }

//    public function fauxDownloadBlock()
//    {
//        $arrayData = new ArrayData([
//
//            'Files'=>'themes/quicksilver/dist/images/standard/placeholder.png'
//        ]);
//        echo $arrayData->renderWith('Toast\QuickBlocks\DownloadBlock');
//    }
}

