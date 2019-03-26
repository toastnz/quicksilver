<?php


use SilverStripe\Assets\File;
use SilverStripe\Control\Controller;
use SilverStripe\ORM\ArrayList;
use SilverStripe\Security\Security;
use SilverStripe\View\ArrayData;
use SilverStripe\View\Requirements;
use SilverStripe\Assets\Image;
use SilverStripe\Versioned\Versioned;
use SilverStripe\ORM\FieldType\DBField;
use SilverStripe\ORM\FieldType\DBHTMLText;

class StyleGuideController extends Controller
{

    private static $url_segment = '_styleguide';

    private static $allowed_actions = ['index'];

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
            'Caption'   => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ipsum dolor sit amet.',
            'Thumbnail' => Image::find('styleguide_placeholder.jpg')
        ]);
        return $arrayData->renderWith('Toast\QuickBlocks\VideoBlock');
    }

    public function fauxImageBlock()
    {
        $arrayData = new ArrayData([
            'Image'   => Image::find('styleguide_placeholder.jpg'),
            'Caption' => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ipsum dolor sit amet.',
        ]);
        return $arrayData->renderWith('Toast\QuickBlocks\ImageBlock');
    }

    public function fauxAccordionBlock()
    {

        $accordionItems = new ArrayList([
            new ArrayData([
                'DisplayTitle' => 'Accordion Heading 1',
                'Content'      => DBField::create_field(DBHTMLText::class, '<p>Yes. As a Stramit account holder you have that option. Your rep or local Stramit office will be able to confirm product availability or suitable alternatives available in other states. They’ll also tell you about expected lead times and delivery charges that may apply if you go with these options.</p><p>Yes. As a Stramit account holder you have that option. Your rep or local Stramit office will be able to confirm product availability or suitable alternatives available in other states. They’ll also tell you about expected lead times and delivery charges that may apply if you go with these options.</p><p>Yes. As a Stramit account holder you have that option. Your rep or local Stramit office will be able to confirm product availability or suitable alternatives available in other states. They’ll also tell you about expected lead times and delivery charges that may apply if you go with these options.</p>')
            ]),
            new ArrayData([
                'DisplayTitle' => 'Accordion Heading 2',
                'Content'      => DBField::create_field(DBHTMLText::class, '<p>Yes. As a Stramit account holder you have that option. Your rep or local Stramit office will be able to confirm product availability or suitable alternatives available in other states. They’ll also tell you about expected lead times and delivery charges that may apply if you go with these options.</p>')
            ]),
            new ArrayData([
                'DisplayTitle' => 'Accordion Heading 3',
                'Content'      => DBField::create_field(DBHTMLText::class, '<p>Yes. As a Stramit account holder you have that option. Your rep or local Stramit office will be able to confirm product availability or suitable alternatives available in other states. They’ll also tell you about expected lead times and delivery charges that may apply if you go with these options.</p>')
            ]),
        ]);

        $arrayData = new ArrayData([
            'Children' => $accordionItems
        ]);

        return $arrayData->renderWith('Toast\QuickBlocks\AccordionBlock');
    }

    public function fauxQuickBlock()
    {
        $arrayData = new ArrayData([
            'Content' => DBField::create_field(DBHTMLText::class, '<h5 class="colour--primary"><b>BUSINESS OVERVIEW</b></h5><h1 class="h2">We are a major Australian manufacturer of roll-formed steel building products.</h1><h6>Including roof and wall cladding, guttering, fascia, purlins, flooring and structural formwork.</h6><p>These products, along with complementary products and services, are delivered through a nationwide network of manufacturing and distribution centres, strategically located to ensure coverage of major metropolitan and regional markets.</p>')
        ]);
        return $arrayData->renderWith('Toast\QuickBlocks\QuickBlock');
    }

    public function fauxDownloadBlock()
    {
        $files     = new ArrayList([
            Image::find('styleguide_placeholder.jpg'),
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


    public function getTags()
    {
        return  new ArrayList([
            new ArrayData(['Selector' => 'h1', 'Name' => 'Heading 1']),
            new ArrayData(['Selector' => 'h2', 'Name' => 'Heading 2']),
            new ArrayData(['Selector' => 'h3', 'Name' => 'Heading 3']),
            new ArrayData(['Selector' => 'h4', 'Name' => 'Heading 4']),
            new ArrayData(['Selector' => 'h5', 'Name' => 'Heading 5']),
            new ArrayData(['Selector' => 'h6', 'Name' => 'Heading 6']),
            new ArrayData(['Selector' => 'p', 'Name' => 'Paragraph'])
        ]);
    }
}
