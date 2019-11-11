<?php

namespace Toast\Pages;

use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\ORM\DB;
use SilverStripe\Versioned\Versioned;

class SearchResultsPage extends \Page
{
    private static $singular_name = 'Search Results';
    private static $plural_name = 'Search Results Pages';
    private static $description = 'Displays search results';
    private static $icon = 'app/dist/images/cms/document-search-result.png';
    private static $can_be_root = true;
    private static $table_name = 'SearchResultsPage';

    private static $defaults = [
        "ShowInMenus" => false,
        "ShowInSearch" => false
    ];

    public function requireDefaultRecords()
    {
        parent::requireDefaultRecords();
        $searchResultsPages = SearchResultsPage::get();
        if (!$searchResultsPages->count()) {
            $searchResultsPage = SearchResultsPage::create([
                'Title' => 'Search Results',
                'ShowInMenus'  => false,
                'ShowInSearch' => false
            ]);
            $searchResultsPage->write();
            $searchResultsPage->copyVersionToStage(Versioned::DRAFT, Versioned::LIVE);
            $searchResultsPage->flushCache();
            DB::alteration_message('Search results page created', 'created');
        }

    }

    public function getFoldColour()
    {
        return 'head--navy';
    }
}

class SearchResultsPageController extends \PageController
{

}