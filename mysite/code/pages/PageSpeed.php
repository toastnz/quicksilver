<?php

/**
 * Class PageSpeedPage
 */
class PageSpeedPage extends Page
{


}

/**
 * Class PageSpeedPage_Controller
 */
class PageSpeedPage_Controller extends Page_Controller
{
    private static $allowed_actions = [
        'getPageSpeed'
    ];


    public function getPageSpeed()
    {
        $pageSpeed = new \PageSpeed\Insights\Service();
        return json_encode($pageSpeed->getResults('http://argcorp-staging.developedbyinsight.com/'));
    }

}

