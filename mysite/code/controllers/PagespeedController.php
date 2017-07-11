<?php

class PageSpeedController extends Controller
{

    private static $allowed_actions = [
        'index',
        'getPageSpeed'
    ];


    public function getPageSpeed(SS_HTTPRequest $request)
    {

        $pageSpeed = new \PageSpeed\Insights\Service();

        if (0 === preg_match('#http(s)?://.*#i', $request->getVar('url'))) {
            return json_encode('Will not work on local URLs');
        }

        return json_encode($pageSpeed->getResults($request->getVar('url')));
    }

    /**
     * Runs the permissiion checks, and setup of the controller view.
     */
    public function index()
    {
        if (!Director::isDev() || !Permission::check('ADMIN')) {
            return Security::permissionFailure();
        }

        /** @var Page $page */
        $page       = Page::get()->first();
        $controller = ModelAsController::controller_for($page);
        $controller->init();
        $siteConfig = SiteConfig::current_site_config();

        $data = new ArrayData([
            'Title' => 'PageSpeed',
            'Pages' => $siteConfig->PageSpeedPages()
        ]);


        return $controller->customise($data)->renderWith(['PageSpeed', 'Page']);
    }


}
