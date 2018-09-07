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


/**
 * Class PageController
 */
class PageController extends ContentController
{
    private static $allowed_actions = [
        'SubscriptionForm',
        'SearchForm',
        'LoginForm',
        'results'
    ];

    protected function init()
    {
        parent::init();

        Requirements::backend()->setWriteHeaderComment(false);
        Requirements::combine_files('app.js', ['themes/quicksilver/dist/js/app.js']);
        Requirements::process_combined_files();

    }

    public function SubscriptionForm()
    {
        return SubscriptionForm::create($this, 'SubscriptionForm');
    }

    /**
     * @param array       $data
     * @param SearchForm  $form
     * @param HTTPRequest $request
     * @return mixed
     */
    public function getSearchResults($data, $form, $request)
    {
        if (!$form) {
            return null;
        }

        /** @var PaginatedList $results */
        $results = $form->getResults();

        $results = $results->setPageLength(6);

        $data = [
            'InPageSearchForm' => $this->InPageSearchForm(),
            'Results'          => $results,
            'Query'            => DBField::create_field('Text', $form->getSearchQuery()),
            'Title'            => _t('SearchForm.SearchResults', 'Search Results')
        ];

        return $this->customise($data)->renderWith(['SearchResultsPage', 'Page']);
    }

    public function results($data = [], $form = null, $request = null)
    {
        return $this->getSearchResults($data, $form, $request);
    }

    public function createSearchForm($name = 'SearchForm', $searchText = '')
    {
        if ($this->getRequest() && $this->getRequest()->getVar('Search')) {
            $searchText = $this->getRequest()->getVar('Search');
        }

        $fields  = new FieldList(
            new TextField('Search', null, $searchText)
        );
        $actions = new FieldList(
            new FormAction('results', _t('SilverStripe\\CMS\\Search\\SearchForm.GO', 'Go'))
        );

        // Set a new controller
        $searchPage = SearchResultsPage::get()->first();

        if ($searchPage && $searchPage->exists()) {
            $request = ContentController::create($searchPage);
        } else {
            $request = $this;
        }

        /** @skipUpgrade */
        $form = SearchForm::create($request, 'SearchForm', $fields, $actions);
        $form->classesToSearch(FulltextSearchable::get_searchable_classes());
        $form->setPageLength(6);
//        $form->setHTMLID('SearchForm_' . $name);

        return $form;
    }

    public function InPageSearchForm()
    {
        $searchText = '';

        $request = $this->getRequest();

        if ($request && $request->getVar('Search')) {
            $searchText = $this->getRequest()->getVar('Search');
        }

        $fields  = new FieldList(
            new TextField('Search', null, $searchText)
        );
        $actions = new FieldList(
            new FormAction('results', _t('SilverStripe\\CMS\\Search\\SearchForm.GO', 'Go'))
        );

        /** @skipUpgrade */
        $form = SearchForm::create($this, 'SearchForm', $fields, $actions);
        $form->classesToSearch(FulltextSearchable::get_searchable_classes());
        $form->setPageLength(6);
        $form->setHTMLID('SearchForm_InPageSearchForm');

        return $form;
    }

    /**
     * Site search form
     *
     * @return SearchForm
     */
    public function SearchForm()
    {
        return $this->createSearchForm('SearchForm');
    }
}
