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

define('PROJECT_THIRDPARTY_DIR', project() . '/thirdparty');
define('PROJECT_THIRDPARTY_PATH', project() . '/' . PROJECT_THIRDPARTY_DIR);

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
    /**
     * we are in live mode, send errors per email
     */
    SS_Log::add_writer(new SS_LogEmailWriter('myEmail@mysite.com'), SS_Log::ERR);
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
        'title'    => 'Button - Bordered',
        'selector' => 'a, button',
        'classes'  => 'button button--bordered',
        'wrapper'  => false,
    ]
];

HtmlEditorConfig::get('cms')->setOption('style_formats', $formats);
HtmlEditorConfig::get('cms')->setOption('theme_advanced_blockformats', 'h1,h2,h3,h4,h5,h6,p');
HtmlEditorConfig::get('cms')->enablePlugins(['youtube' => '../../../mysite/code/tinymce/youtube.js']);
HtmlEditorConfig::get('cms')->setButtonsForLine(1, 'styleselect', 'formatselect', 'separator', 'bullist', 'numlist',
    'separator', 'justifyleft', 'justifycenter', 'justifyright', 'separator', 'image', 'separator', 'sslink', 'unlink',
    'separator', 'bold', 'italic', 'underline', 'blockquote');
HtmlEditorConfig::get('cms')->setButtonsForLine(2, 'undo', 'redo', 'cut', 'copy', 'paste', 'table', 'code', 'youtube');
HtmlEditorConfig::get('cms')->setButtonsForLine(3, '');
HtmlEditorConfig::get('cms')->disablePlugins('table', 'contextmenu');
