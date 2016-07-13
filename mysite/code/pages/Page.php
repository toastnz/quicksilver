<?php

/**
 * Class Page
 *
 */
class Page extends SiteTree {

    /**
     * @return FieldList
     */
    public function getCMSFields() {
        /** =========================================
         * @var FieldList $fields
         * ========================================*/

        $fields = parent::getCMSFields();

        return $fields;
    }

    public function getIsLive() {
        return Director::isLive();
    }

    public function getVariables() {
        $variables = file(BASE_PATH . '/mysite/app/styles/00-Utilities/_02-Colours.scss');
        $template = '';
        foreach ($variables as $variable) {
            $var = str_replace(array('', ':', ';'), '', $variable);
            preg_match('/#(?:[0-9a-fA-F]{6})/', $var, $matches);
            $template .= '<div class="swatch" style="background-color:' . $matches[0] . ';"><p>' . $matches[0] . '</p><span>' . strstr($var, '#', true) . '</span></div>';
        }
        return $template;
    }

}

class Page_Controller extends ContentController {
    private static $allowed_actions = array(
        'SubscriptionForm'
    );

    public function SubscriptionForm() {
        return SubscriptionForm::create($this, 'SubscriptionForm');
    }
}
