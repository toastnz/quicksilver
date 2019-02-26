<?php


use Sheadawson\Linkable\Models\Link;
use SilverStripe\Assets\File;
use SilverStripe\Control\Controller;
use SilverStripe\ORM\ArrayList;
use SilverStripe\Security\Security;
use SilverStripe\View\ArrayData;
use SilverStripe\View\Requirements;
use SilverStripe\Assets\Image;
use SilverStripe\Versioned\Versioned;

class StyleGuideController extends Controller
{

    private static $allowed_actions = [
        'index'
    ];

    public function init()
    {

        $image = File::find('styleguide_placeholder.jpg');

        if (!$image) {
            $file = Image::create();
            $file->setFromLocalFile('themes/quicksilver/dist/images/standard/_styleguide_placeholder.jpg', 'styleguide_placeholder.jpg');
            $file->write();
            if (class_exists(Versioned::class)) {
                $file->copyVersionToStage(Versioned::DRAFT, Versioned::LIVE);
            }
        }


        parent::init();

        Requirements::backend()->setWriteHeaderComment(false);
        Requirements::combine_files('app.js', ['themes/quicksilver/dist/scripts/bundle.js']);
        Requirements::process_combined_files();

    }

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
        return $arrayData->renderWith('Toast\QuickBlocks\TestimonialBlock');
    }

    public function fauxVideoBlock()
    {
        $arrayData = new ArrayData([
            'VideoType' => 'youtube',
            'VideoID'   => 'ScMzIvxBSi4',
            'Caption'   => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            'Thumbnail' => Image::find('styleguide_placeholder.jpg')
        ]);
        return $arrayData->renderWith('Toast\QuickBlocks\VideoBlock');
    }

    public function fauxImageBlock()
    {
        $arrayData = new ArrayData([
            'Image' => Image::find('styleguide_placeholder.jpg')
        ]);
        return $arrayData->renderWith('Toast\QuickBlocks\ImageBlock');
    }

    public function fauxAccordionBlock()
    {

        $accordionItems = new ArrayList([
            new ArrayData([
                'DisplayTitle' => 'Accordion Heading 1',
                'Content'      => 'Accordion Content 1'
            ]),
            new ArrayData([
                'DisplayTitle' => 'Accordion Heading 2',
                'Content'      => 'Accordion Content 2'
            ]),
            new ArrayData([
                'DisplayTitle' => 'Accordion Heading 3',
                'Content'      => 'Accordion Content 3'
            ]),
        ]);

        $arrayData = new ArrayData([
            'accordionItems' => $accordionItems
        ]);

        return $arrayData->renderWith('Toast\QuickBlocks\AccordionBlock');
    }

    public function fauxQuickBlock()
    {
        $arrayData = new ArrayData([
            'Content' => 'This is body copy Lorem Ipsum is simply dummy text of the printing and This is body copy Lorem Ipsum is simply dummy text of the printing and This is body copy Lorem Ipsum is simply dummy text of the printing and This is body copy Lorem Ipsum is simply dummy text of the printing and This is body copy Lorem Ipsum is simply dummy text of the printing and'
        ]);
        return $arrayData->renderWith('Toast\QuickBlocks\QuickBlock');
    }

    public function fauxDownloadBlock()
    {
        $files     = new ArrayList([
            Image::find('styleguide_placeholder.jpg'),
            Image::find('styleguide_placeholder.jpg'),
        ]);
        $arrayData = new ArrayData([
            'Files' => $files
        ]);
        return $arrayData->renderWith('Toast\QuickBlocks\DownloadBlock');
    }

    public function fauxSplitBlock()
    {
        $arrayData = new ArrayData([
            'LeftContent'  => 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
            'RightContent' => 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
            'LeftWidth'    => '200px',
            'RightWidth'   => '200px'
        ]);
        return $arrayData->renderWith('Toast\QuickBlocks\SplitBlock');
    }
}

