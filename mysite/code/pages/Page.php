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
        if (!DataObject::get_one('StaticBlocks')) {
            $page = StaticBlocks::create([
                'Title'        => 'Static Blocks',
                'URLSegment'   => 'blocks',
                'ShowInMenus'  => 0,
                'ShowInSearch' => 0,
                'CanViewType'  => 'LoggedInUsers'
            ]);
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
