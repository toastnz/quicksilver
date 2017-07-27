<?php

/**
 * Class StaticBlocks
 */
class StaticBlocks extends Page
{
    private static $description = 'Static Blocks Page';
    private static $icon = 'mysite/dist/images/cms/blocks.png';

    public function requireDefaultRecords()
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

class StaticBlocks_Controller extends Page_Controller
{

}
