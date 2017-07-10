<?php

/**
 * Class Page
 */
class Page extends SiteTree
{
}

/**
 * Class Page_Controller
 */
class Page_Controller extends ContentController
{
    private static $allowed_actions = [
        'StyleguideForm',
        'SubscriptionForm'
    ];

    public function init()
    {
        parent::init();
        Requirements::css('mysite/dist/styles/style.css');
        Requirements::combine_files(
            'output.js',
            [
                'mysite/dist/js/app.js',
            ]
        );
    }

    public function SubscriptionForm()
    {
        return SubscriptionForm::create($this, 'SubscriptionForm');
    }

}
