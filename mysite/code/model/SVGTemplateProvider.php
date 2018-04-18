<?php
use SilverStripe\View\TemplateGlobalProvider;

/*
 * Author: Ryan Potter
 * https://github.com/Rhym
 */

/**
 * Class SVGTemplateProvider
 */
class SVGTemplateProvider implements TemplateGlobalProvider {
    /**
     * @return array
     */
    public static function get_template_global_variables() {
        return array(
            'SVG'
        );
    }

    /**
     * @param $path
     * @param $id
     * @return SVGTemplate
     */
    public static function SVG($path, $id = false) {
        return new SVGTemplate($path, $id);
    }
}
