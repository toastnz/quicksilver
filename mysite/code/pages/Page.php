<?php

/**
 * Class Page
 */
class Page extends SiteTree
{


    public function getIsLive()
    {
        return Director::isLive();
    }

    function requireDefaultRecords()
    {
        if (class_exists('StaticBlocks') && !DataObject::get_one('StaticBlocks')) {
            $page               = StaticBlocks::create();
            $page->Title        = 'Static Blocks';
            $page->URLSegment   = 'blocks';
            $page->ShowInMenus  = 0;
            $page->ShowInSearch = 0;
            $page->CanViewType  = 'LoggedInUsers';
            $page->Status       = 'Published';
            $page->write();
            $page->publish('Stage', 'Live');
            $page->flushCache();
            DB::alteration_message('Blocks Page created.', 'created');
        }
    }
}

/**
 * Class Page_Controller
 */
class Page_Controller extends ContentController
{
    private static $allowed_actions = [
        'StyleguideForm',
        'SubscriptionForm'
    ];

    public function init()
    {
        parent::init();
        Requirements::combine_files(
            'output.js',
            [
                'mysite/dist/js/app.js',
            ]
        );
    }

    public function SubscriptionForm()
    {
        return SubscriptionForm::create($this, 'SubscriptionForm');
    }

}
