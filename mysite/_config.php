<?php

use SilverStripe\Admin\CMSMenu;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\i18n\i18n;
use SilverStripe\ORM\Search\FulltextSearchable;
use SilverStripe\View\Requirements;
use SilverStripe\Forms\HTMLEditor\TinyMCEConfig;

/** Set default language */
i18n::set_locale('en_US');

Requirements::set_force_js_to_bottom(true);

try {
    FulltextSearchable::enable([SiteTree::class]);
} catch (Exception $e) {
    user_error($e->getMessage(), E_USER_NOTICE);
}

//CMSMenu::remove_menu_item('SilverStripe-CampaignAdmin-CampaignAdmin');


TinyMCEConfig::get('cms')->enablePlugins(['hr']);

TinyMCEConfig::get('cms')
    ->addButtonsToLine(2, 'styleselect')
    ->addButtonsToLine(1, 'hr')
    ->setOptions([
        'importcss_append' => true
    ]);