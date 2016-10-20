<?php

/**
 * Class Page
 *
 */
class Page extends SiteTree
{
    /**
     * @return FieldList
     */
    public function getCMSFields()
    {
        /** =========================================
         * @var FieldList $fields
         * ========================================*/

        $fields = parent::getCMSFields();

        return $fields;
    }

    public function getIsLive()
    {
        return Director::isLive();
    }

}

class Page_Controller extends ContentController
{
    public function init()
    {
        parent::init();
        Requirements::combine_files(
            'output.js',
            array(
                'mysite/dist/js/app.js',
            )
        );
    }

}
