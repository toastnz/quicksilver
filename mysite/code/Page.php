<?php

use SilverStripe\Control\Director;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Forms\FieldList;
use SilverStripe\ORM\FieldType\DBField;
use SilverStripe\View\Requirements;
use SilverStripe\CMS\Controllers\ContentController;

use SilverStripe\CMS\Search\SearchForm;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Forms\FormAction;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\PaginatedList;
use SilverStripe\ORM\Search\FulltextSearchable;
use Toast\Forms\SubscriptionForm;
use Toast\Pages\SearchResultsPage;

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

    public function getClassNameForTemplate()
    {
        $reflect = new ReflectionClass($this);

        return $reflect->getShortName() ?: $this->ClassName;
    }
}
