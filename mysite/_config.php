<?php

global $project;
$project = 'mysite';

/** Use the _ss_environment.php file for configuration */
require_once('conf/ConfigureFromEnv.php');

/** Remove the auto generated SS_ prefix that gets added if database is auto detected */
global $databaseConfig;
$databaseConfig['database'] = str_replace('SS_', '', $databaseConfig['database']);

/** Set default language */
i18n::set_locale('en_US');

/** Force redirect to www */
//Director::forceWWW();

define('PROJECT_THIRDPARTY_DIR', project() . '/thirdparty');
define('PROJECT_THIRDPARTY_PATH', project() . '/' . PROJECT_THIRDPARTY_DIR);

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
