<?php

/**
 * Created by PhpStorm.
 * User: staff
 * Date: 2/08/18
 * Time: 3:49 PM
 */


use Sheadawson\Linkable\Forms\LinkField;
use Sheadawson\Linkable\Models\Link;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataObject;


class BannerSlider extends DataObject
{
    private static $singular_name = 'Banner Slide';
    private static $plural_name   = 'Banner Slides';
    private static $default_sort  = 'SortOrder';

    private static $db            = [
        'SortOrder'       => 'Int',
        'BannerTitle'     => 'Text',
        'BannerSummary'   => 'HTMLText',
    ];

    private static $has_one       = [
        'Page'        => Page::class,
        'BannerImage' => Image::class,
        'BannerLink'  => Link::class
    ];

    private static $owns = [
        'BannerImage'
    ];


    public function getCMSFields()
    {

        $fields = parent::getCMSFields();
        $fields->removeByName([
            'SortOrder',
            'PageID',
            'FileTracking',
            'LinkTracking',
        ]);
        $fields->addFieldsToTab('Root.Main', [
            TextField::create('BannerTitle', 'Banner Title'),
            LinkField::create('BannerLinkID','Banner Link'),
            HTMLEditorField::create('BannerSummary', 'Summary')
                ->setRows(15),
            UploadField::create('BannerImage', 'Banner Image')
                       ->setFolderName('Uploads/BannerImage')
                       ->setDescription('Displays Banner Image (jpeg,jpg,png),Ideal size 1920x800'),
        ]);
        return $fields;
    }

    private static $summary_fields = [
        'BannerImage.CMSThumbnail' => 'Thumbnail'
    ];

}
