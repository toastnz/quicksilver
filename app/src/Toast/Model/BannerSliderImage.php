<?php

namespace Toast\Model;

use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataObject;
use Toast\Pages\HomePage;


class BannerSliderImage extends DataObject
{
    private static $singular_name = 'Banner Image';
    private static $plural_name   = 'Banner Images';
    private static $table_name    = 'SliderImage';
    private static $default_sort  = 'SortOrder';

    private static $db = [
        'Title'     => 'Text',
        'Content'   => 'HTMLText',
        'SortOrder' => 'Int'
    ];

    private static $has_one = [
        'SliderImage' => Image::class,
        'Page'        => \Page::class
    ];

    private static $owns = [
        'SliderImage'
    ];

    private static $summary_fields = [
        'SliderImage.CMSThumbnail' => 'Image',
        'Title.Summary'            => 'Title'
    ];

    public function getCMSFields()
    {
        /** =========================================
         * @var FieldList $fields
         * ========================================*/
        $fields = parent::getCMSFields();

        $fields->removeByName([
            'SortOrder',
            'Title',
            'Content',
            'SliderImage'
        ]);

        $fields->addFieldsToTab('Root.Main', [
            TextField::create('Title', 'Title'),
            HTMLEditorField::create('Content', 'Content')->setRows(5),
            UploadField::create('SliderImage', 'Slider Image')
                       ->setFolderName('Uploads/banners/slides')
        ]);

        return $fields;
    }
}


