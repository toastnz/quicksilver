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

    public function init() {
        parent::init();
        Requirements::combine_files(
            'foobar.js',
            array(
                'mysite/dist/js/output.js',
            )
        );
    }

    private static $allowed_actions = array(
        'SubscriptionForm',
        'SaveCSS',
        'SaveTypeSettings',
        'LoadTypeSettings'
    );

    public function SubscriptionForm() {
        return SubscriptionForm::create($this, 'SubscriptionForm');
    }

    public function LoadTypeSettings(SS_HTTPRequest $request) {
        $data = [];
        $siteConfig = SiteConfig::current_site_config();
        $tags = array('h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p');
        $styles = array('font-size', 'font-weight', 'font-style', 'text-align', 'line-height', 'letter-spacing');
        foreach ($tags as $tag) {
            foreach ($styles as $style) {
                $field = $tag . preg_replace('/-/', '', $style);
                $data[$tag]['attributes'][$style] = $siteConfig->getField($field);
            }
        }
        return json_encode($data, true);
    }

    public function SaveCSS(SS_HTTPRequest $request) {
        $data = $request->postVars();
        $siteConfig = SiteConfig::current_site_config();
        $siteConfig->setField('TypeSettingsCSS', $data['css']);
        $siteConfig->write();
        return json_encode($data['css'], true);
    }

    public function SaveTypeSettings(SS_HTTPRequest $request) {
        $data = $request->postVars();

        $tags = array('h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p');
        $styles = array('font-size', 'font-weight', 'font-style', 'text-align', 'line-height', 'letter-spacing');

        $siteConfig = SiteConfig::current_site_config();

        foreach ($tags as $tag) {
            foreach ($styles as $style) {
                $field = $tag . preg_replace('/-/', '', $style);
                $value = $data['styles'][$tag]['attributes'][$style];
                $siteConfig->setField($field, preg_replace(['/px/', '/rem/'], '', $value));
            }
        }
        $siteConfig->write();
        return json_encode($siteConfig->getField('h1fontweight'), true);
    }


}
