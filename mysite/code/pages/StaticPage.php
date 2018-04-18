<?php

namespace QuickStatic;

use SilverStripe\Control\Director;

/**
 * Class StaticPage
 */
class StaticPage extends \Page
{
    public function getIsLive()
    {
        return Director::isLive();
    }
}

/**
 * Class StaticPageController
 */
class StaticPageController extends \PageController
{

}
