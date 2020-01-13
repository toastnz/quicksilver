<?php

use SilverStripe\Admin\CMSMenu;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\i18n\i18n;
use SilverStripe\ORM\Search\FulltextSearchable;
use SilverStripe\View\Requirements;
use SilverStripe\Forms\HTMLEditor\TinyMCEConfig;

i18n::set_locale('en_US');

Requirements::set_force_js_to_bottom(true);

try {
    FulltextSearchable::enable([SiteTree::class]);
} catch (Exception $e) {
    user_error($e->getMessage(), E_USER_NOTICE);
}

CMSMenu::remove_menu_item('SilverStripe-CampaignAdmin-CampaignAdmin');


$colors = [
    "000000", "Black",
    "ffffff", "White",
    "222222", "Dark Grey",
    "333333", "Grey",
    "666666", "Light Grey",
]; 

TinyMCEConfig::get('cms')
    ->enablePlugins(['hr'])
    ->enablePlugins(['textcolor'])
    // ->enablePlugins(['colorpicker'])
    ->setOptions(['textcolor_map' => $colors])
    ->addButtonsToLine(2, 'styleselect')
    ->addButtonsToLine(1, 'hr')
    ->addButtonsToLine(2, 'forecolor')
    ->setOptions(['importcss_append' => true]);
