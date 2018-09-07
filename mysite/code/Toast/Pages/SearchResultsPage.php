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
    private static $icon = 'mysite/dist/images/cms/document-search-result.png';
    private static $can_be_root = true;
    private static $table_name = 'SearchResultsPage';

    private static $defaults = [
        "ShowInMenus"  => 0,
        "ShowInSearch" => 0,
    ];


    /**
     * Add default records to database.
     *
     * This function is called whenever the database is built, after the
     * database tables have all been created.
     */
    public function requireDefaultRecords()
    {
        parent::requireDefaultRecords();

        // If there are no search pages
        $searchResultsPages = SearchResultsPage::get();

        if (!$searchResultsPages->count()) {
            /** @var SearchResultsPage $searchResultsPage */
            $searchResultsPage = SearchResultsPage::create([
                'Title'        => 'Search Results',
                'ShowInMenus'  => 0,
                'ShowInSearch' => 0
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