<?php

global $project;
$project = 'mysite';

/** Use the _ss_environment.php file for configuration */
require_once('conf/ConfigureFromEnv.php');

/** Remove the auto generated SS_ prefix that gets added if database is auto detected */
global $databaseConfig;

if(defined('SS_DATABASE_NAME') && SS_DATABASE_NAME) {
    $database = SS_DATABASE_NAME;
} else {
    $database = $databaseConfig['database'] = str_replace('SS_', '', $databaseConfig['database']);
}


/** Set default language */
i18n::set_locale('en_US');

/** Uncomment to control SSL and www  */
if (!Director::is_cli() && Director::isLive()){
//    Director::forceWWW();
//    Director::forceSSL();
}

define('PROJECT_THIRDPARTY_DIR', project() . '/thirdparty');
define('PROJECT_THIRDPARTY_PATH', project() . '/' . PROJECT_THIRDPARTY_DIR);

FulltextSearchable::enable(array('SiteTree'));

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

$formats = array(
    array(
        'title' => 'Colour - Primary',
        'inline' => 'span',
        'classes' => 'colour--primary',
        'wrapper' => true,
        'merge_siblings' => false
    ),
    array(
        'title' => 'Colour - Secondary',
        'inline' => 'span',
        'classes' => 'colour--secondary',
        'wrapper' => true,
        'merge_siblings' => false
    ),
    array(
        'title' => 'Button - Default',
        'selector' => 'a, button',
        'classes' => 'btn--default',
        'wrapper' => false,
    ),
    array(
        'title' => 'Button - Bordered',
        'selector' => 'a, button',
        'classes' => 'btn--bordered',
        'wrapper' => false,
    )
);

HtmlEditorConfig::get('cms')->setOption('style_formats', $formats);
HtmlEditorConfig::get('cms')->setOption('theme_advanced_blockformats', 'h1,h2,h3,h4,h5,h6,p');

/**
 * Remove buttons from TinyMCE
 *
 * ====== List of available buttons ======
 *
 * bold
 * italic
 * underline
 * strikethrough
 * justifyleft
 * justifycenter
 * justifyright
 * justifyfull
 * bullist
 * numlist
 * outdent
 * indent
 * cut
 * copy
 * paste
 * undo
 * redo
 * link
 * unlink
 * image
 * cleanup
 * help
 * code
 * hr
 * removeformat
 * formatselect
 * fontselect
 * fontsizeselect
 * styleselect
 * sub
 * sup
 * forecolor
 * backcolor
 * forecolorpicker
 * backcolorpicker
 * charmap
 * visualaid
 * anchor
 * newdocument
 * blockquote
 * separator ( | is possible as separator, too)
 *
 * ====== Plugins with the button name same as plugin name ======
 *
 * advhr
 * emotions
 * fullpage
 * fullscreen
 * iespell
 * media
 * nonbreaking
 * pagebreak
 * preview
 * print
 * spellchecker
 * visualchars
 *
 * ====== Plugins with custom buttons ======
 *
 * advlink
 *      Will override the "link" button
 * advimage
 *      Will override the "image" button
 * paste
 *      pastetext
 *      pasteword
 *      selectall
 * searchreplace
 *      search
 *      replace
 * insertdatetime
 *      insertdate
 *      inserttime
 * table
 *      tablecontrols
 *      table
 *      row_props
 *      cell_props
 *      delete_col
 *      delete_row
 *      col_after
 *      col_before
 *      row_after
 *      row_before
 *      split_cells
 *      merge_cells
 * directionality
 *      ltr
 *      rtl
 * layer
 *      moveforward
 *      movebackward
 *      absolute
 *      insertlayer
 * save
 *      save
 *      cancel
 * style
 *      styleprops
 * xhtmlxtras
 *      cite
 *      abbr
 *      acronym
 *      ins
 *      del
 *      attribs
 * template
 *      template
 *
 */


HtmlEditorConfig::get('cms')->enablePlugins(array('youtube' => '../../../mysite/code/tinymce/youtube.js'));

HtmlEditorConfig::get('cms')->setButtonsForLine(1, 'styleselect', 'formatselect', 'separator', 'bullist', 'numlist',
    'separator', 'justifyleft', 'justifycenter', 'justifyright', 'separator', 'image', 'separator', 'sslink', 'unlink',
    'separator', 'bold', 'italic', 'underline', 'blockquote');
HtmlEditorConfig::get('cms')->setButtonsForLine(2, 'undo', 'redo', 'cut', 'copy', 'paste', 'table', 'code','youtube');
HtmlEditorConfig::get('cms')->setButtonsForLine(3, '');
HtmlEditorConfig::get('cms')->disablePlugins('table', 'contextmenu');
