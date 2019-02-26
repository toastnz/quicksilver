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

$formats = [
    [
        'title'          => 'Colour - Primary',
        'inline'         => 'span',
        'classes'        => 'colour--primary',
        'wrapper'        => true,
        'merge_siblings' => false
    ],
    [
        'title'          => 'Colour - Secondary',
        'inline'         => 'span',
        'classes'        => 'colour--secondary',
        'wrapper'        => true,
        'merge_siblings' => false
    ],
    [
        'title'    => 'Button - Default',
        'selector' => 'a, button',
        'classes'  => 'button',
        'wrapper'  => false,
    ],
    [
        'title'    => 'Button - Secondary',
        'selector' => 'a, button',
        'classes'  => 'button button--secondary',
        'wrapper'  => false,
    ],
    [
        'title'    => 'Button - Outline',
        'selector' => 'a, button',
        'classes'  => 'button button--outline--primary',
        'wrapper'  => false,
    ],
];

//HtmlEditorConfig::get('cms')->setOption('style_formats', $formats);
//TinyMCEConfig::get('cms')->setOption('theme_advanced_blockformats','h1,h2,h3,h4,h5,h6,p,subtitle');

TinyMCEConfig::get('cms')
    ->addButtonsToLine(2, 'styleselect')
    ->setOptions([
        'importcss_append' => true,
        'style_formats'    => $formats,
    ]);



