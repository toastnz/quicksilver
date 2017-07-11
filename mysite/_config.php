<?php

global $project;
$project = 'mysite';

/** Use the _ss_environment.php file for configuration */
require_once('conf/ConfigureFromEnv.php');

/** Set default language */
i18n::set_locale('en_US');

/** Uncomment to control SSL and www  */
if (!Director::is_cli() && Director::isLive()) {
//    Director::forceWWW();
//    Director::forceSSL();
}

FulltextSearchable::enable(['SiteTree']);

/**
 * it is suggested to set SS_ERROR_LOG in _ss_environment.php to enable logging,
 * alternatively you can use the line below for your custom logging settings
 * SS_Log::add_writer(new SS_LogFileWriter('../silverstripe-errors.log'), SS_Log::ERR);
 */
if (!Director::isLive()) {
    /**
     * set settings that should only be in dev and test
     */
} else {

}

/** -----------------------------------------
 * HTMLEditorField
 *
 * Adding styles, and buttons
 * to the HTMLEditorField
 * -------------------------------------------*/

$formats = [
    [
        'title'          => 'Colour - Primary',
        'inline'         => 'span',
        'classes'        => 'colour--primary',
        'styles'         => ['color' => '#000000'],
        'wrapper'        => true,
        'merge_siblings' => false
    ],
    [
        'title'          => 'Colour - Secondary',
        'inline'         => 'span',
        'classes'        => 'colour--secondary',
        'styles'         => ['color' => '#666666'],
        'wrapper'        => true,
        'merge_siblings' => false
    ],
    [
        'title'          => 'Colour - Tertiary',
        'inline'         => 'span',
        'classes'        => 'colour--tertiary',
        'styles'         => ['color' => '#999999'],
        'wrapper'        => true,
        'merge_siblings' => false
    ],
    [
        'title'    => 'Button - Default',
        'selector' => 'a, button',
        'classes'  => 'button',
        'styles'   => ['background' => '#ebebeb'],
        'wrapper'  => false,
    ],
    [
        'title'    => 'Button - Bordered',
        'selector' => 'a, button',
        'classes'  => 'button button--bordered',
        'styles'   => ['background' => '#ebebeb'],
        'wrapper'  => false,
    ],
    [
        'title'    => 'Button - Bordered - Light',
        'selector' => 'a, button',
        'classes'  => 'button button--bordered--light',
        'styles'   => ['background' => '#ebebeb'],
        'wrapper'  => false,
    ],
    [
        'title'    => 'Button - Default - Round',
        'selector' => 'a, button',
        'classes'  => 'button button--round',
        'styles'   => ['background' => '#d2d5d8'],
        'wrapper'  => false,
    ],
    [
        'title'    => 'Button - Bordered - Round',
        'selector' => 'a, button',
        'classes'  => 'button button--bordered button--round',
        'styles'   => ['background' => '#d2d5d8'],
        'wrapper'  => false,
    ],
    [
        'title'    => 'Button - Bordered - Light - Round',
        'selector' => 'a, button',
        'classes'  => 'button button--bordered--light button--round',
        'styles'   => ['background' => '#d2d5d8'],
        'wrapper'  => false,
    ]
];

HtmlEditorConfig::get('cms')->setOption('style_formats', $formats);
HtmlEditorConfig::get('cms')->setOption('theme_advanced_blockformats', 'h1,h2,h3,h4,h5,h6,p');
HtmlEditorConfig::get('cms')->setButtonsForLine(1, 'styleselect', 'formatselect', 'separator', 'bullist', 'numlist', 'separator', 'justifyleft', 'justifycenter', 'justifyright', 'separator', 'image', 'separator', 'sslink', 'unlink', 'anchor', 'separator', 'bold', 'italic', 'underline', 'blockquote', 'hr');
HtmlEditorConfig::get('cms')->setButtonsForLine(2, 'undo', 'redo', 'cut', 'copy', 'paste', 'table', 'row_props', 'cell_props', 'code', 'video', 'removeformat');
HtmlEditorConfig::get('cms')->setButtonsForLine(3);


