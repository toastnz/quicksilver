<?php

use Sheadawson\Linkable\Forms\LinkField;
use Sheadawson\Linkable\Models\Link;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Assets\Image;
use SilverStripe\Control\Director;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\TextField;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;

/**
 * Class Page
 *
 * @property string Theme
 */


class Page extends SiteTree
{
    private static $db = [
        'BannerTitle'        => 'Text',
    ];
    private static $has_one = [
        'BannerImage' => Image::class,
        'BannerLink'  => Link::class,
    ];
    private static $has_many = [
        'BannerSliders' => BannerSlider::class
    ];

    private static $owns = [
        'BannerImage',
    ];

    public function getCMSFields()
    {
        $sliderConfig = GridFieldConfig_RelationEditor::create(10);
        $sliderConfig->addComponent(GridFieldOrderableRows::create('SortOrder'))
            ->removeComponentsByType(GridFieldDeleteAction::class)
            ->addComponent(new GridFieldDeleteAction(false));
        $sliderGridfield = GridField::create(
            'BannerSliders',
            'Banner',
            $this->BannerSliders(),
            $sliderConfig
        );
        $fields = parent::getCMSFields();
        /** -----------------------------------------
         * Banner
         * ----------------------------------------*/
        $fields->addFieldsToTab('Root.Banner', [
            TextField::create('BannerTitle', 'Banner Title'),
            LinkField::create('BannerLinkID', 'Banner Link')
        ]);
        if ($this->ClassName == \Toast\Pages\HomePage::class) {
            $fields->removeByName(['BannerImage']);
            $fields->addFieldsToTab('Root.Banner', [
                $sliderGridfield
            ]);
        } else {
            $fields->removeByName(['BannerSliders']);
            $fields->addFieldsToTab('Root.Banner', [
                UploadField::create('BannerImage', 'Banner Image')
                    ->setFolderName('Uploads/BannerImage')
                    ->setDescription('Displays Banner Image (jpeg,jpg,png)')
            ]);
        }
        return $fields;
    }
    public function getIsLive()
    {
        return Director::isLive();
    }

//    public function getContentBlockLoop()
//    {
//        return $this->ContentBlocks()->sort('SortOrder');
//    }

    /**
     * @return mixed
     * @throws ReflectionException
     */
    public function getClassNameForTemplate()
    {
        $reflect = new ReflectionClass($this);

        return $reflect->getShortName() ?: $this->ClassName;
    }
}
