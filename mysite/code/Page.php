<?php

use SilverStripe\Control\Director;
use SilverStripe\CMS\Model\SiteTree;

/**
 * Class Page
 *
 * @property string Theme
 */
class Page extends SiteTree
{
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
