<?php

use SilverStripe\Control\Director;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use SilverStripe\Forms\HeaderField;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use Toast\Model\BannerSliderImage;

class Page extends SiteTree
{
    private static $db = [];

    private static $has_one = [];

    private static $has_many = [
        'BannerImages' => BannerSliderImage::class
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

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
