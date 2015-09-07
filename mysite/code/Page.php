<?php

class Page extends BasePage
{

	private static $db = array();

	private static $has_one = array();

	/**
	 * @return FieldList
	 */
	public function getCMSFields()
	{
	    /** =========================================
	     * @var FieldList $fields
	     * ========================================*/

	    $fields = parent::getCMSFields();

	    /** -----------------------------------------
	     * Fields
	     * ----------------------------------------*/

	    return $fields;
	}

}

class Page_Controller extends BasePage_Controller
{
	/**
	 * Remove all of the CWP included js & css files
	 */
	public function init() {
		parent::init();
		$themeDir = SSViewer::get_theme_folder();
	}

	public function getThemeFolder() {
		return BASE_URL;
	}

}

