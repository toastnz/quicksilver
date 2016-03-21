<?php

/**
 * Class Page
 */
class Page extends SiteTree {

    /**
     * @return FieldList
     */
    public function getCMSFields() {
        static $db = array(
            'wysiwyg' => 'HTMLText'
        );

        /** =========================================
         * @var FieldList $fields
         * ========================================*/

        $fields = parent::getCMSFields();

        /** -----------------------------------------
         * Content
         * ----------------------------------------*/
        $fields->addFieldsToTab('Root.WYSIWYG', array(
            HtmlEditorField::create('wysiwyg', 'Page Content')
        ));

        $fields->removeFieldFromTab("Root.Main", "Content");

        return $fields;
    }
}

class Page_Controller extends ContentController {

}
