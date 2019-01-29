<?php


use Sheadawson\Linkable\Models\Link;
use SilverStripe\Assets\File;
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

        $accordionItems = new ArrayList(array(
            new ArrayData(array(
                'DisplayTitle' => 'Accordion Heading 1',
                'Content' => 'Accordion Content 1'
            )),
            new ArrayData(array(
                'DisplayTitle' => 'Accordion Heading 2',
                'Content' => 'Accordion Content 2'
            )),
            new ArrayData(array(
                'DisplayTitle' => 'Accordion Heading 3',
                'Content' => 'Accordion Content 3'
            )),
        ));

        $arrayData = new ArrayData([
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

    public function fauxDownloadBlock()
    {
//        $files = new ArrayList([]);
//        $files->push([
//            'Title' => 'File Title',
//            'Files' => File::class,
//        ]);
        $files = new ArrayList(array(
            new ArrayData(array(
                'Title' => 'File Title 1',
                'FileContent' => 'themes/quicksilver/dist/pdf/sample.pdf',
            )),
            new ArrayData(array(
                'Title' => 'File Title 2',
                'FileContent' => 'themes/quicksilver/dist/pdf/sample.pdf',
            )),
        ));
        $arrayData = new ArrayData([
            'Files' => $files
        ]);
        echo $arrayData->renderWith('Toast\QuickBlocks\DownloadBlock');
    }
}

