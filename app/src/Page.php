<?php

use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Assets\Image;
use SilverStripe\Control\Director;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use SilverStripe\Forms\HeaderField;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use Toast\Model\BannerSliderImage;

class Page extends SiteTree
{
    private static $db = [
        'DropdownNav' => 'Boolean',
        'Sidebar'     => 'Boolean',
    ];

    private static $has_one = [
        'Thumbnail' => Image::class
    ];

    private static $has_many = [
        'BannerImages' => BannerSliderImage::class,
    ];

    private static $owns = [
        'Thumbnail'
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->removeByName(["Content"]);
        // Banner Slider Images
        $config = GridFieldConfig_RelationEditor::create(10);
        $config->addComponent(GridFieldOrderableRows::create('SortOrder'))
               ->removeComponentsByType(GridFieldDeleteAction::class)
               ->addComponent(new GridFieldDeleteAction(false));
        $imagesGridField = GridField::create(
            'BannerImages',
            '',
            $this->owner->BannerImages(),
            $config
        );

        $fields->addFieldsToTab('Root.Banner', [
            $imagesGridField
        ]);
        $fields->addFieldsToTab('Root.Share', [
            UploadField::create('Thumbnail', 'Thumbnail')
                ->setFolderName('Uploads/banners/images')
        ]);

        return $fields;
    }

    public function getSettingsFields() {
        $fields = parent::getSettingsFields();
        $fields->insertAfter(
            'ShowInSearch',
            CheckboxField::create('Sidebar', 'Show Sidebar')
        );
        $fields->insertAfter(
            'Sidebar',
            CheckboxField::create('DropdownNav', 'Show Dropdown Nav')
        );
        return $fields;
    }

    public function getIsLive()
    {
        return Director::isLive();
    }

    public function getClassNameForTemplate()
    {
        $reflect = new ReflectionClass($this);

        return $reflect->getShortName() ?: $this->ClassName;
    }

}


class PageController extends ContentController
{
    private static $allowed_actions = [];

    protected function init()
    {
        parent::init();
    }

}
