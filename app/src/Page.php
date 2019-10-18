<?php

use SilverStripe\Control\Director;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\CMS\Controllers\ContentController;

class Page extends SiteTree
{
    private static $db = [];

    private static $has_one = [];


    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
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
