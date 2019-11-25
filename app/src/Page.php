<?php

use Toast\Pages\ContactPage;
use SilverStripe\Assets\Image;
use SilverStripe\Control\Director;
use Toast\Model\BannerSliderImage;
use SilverStripe\Forms\HeaderField;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;

class Page extends SiteTree
{

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->removeByName(["Content"]);


        return $fields;
    }

    public function getSettingsFields()
    {
        $fields = parent::getSettingsFields();

        return $fields;
    }

    public function getIsLive()
    {
        return Director::isLive();
    }

    public function getContact()
    {
        return ContactPage::get();
    }

    public function getClassNameForTemplate()
    {
        $reflect = new ReflectionClass($this);

        return $reflect->getShortName() ?: $this->ClassName;
    }

    public function getImage()
    {
        return $this->Thumbnail();
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
