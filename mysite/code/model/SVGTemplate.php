<?php
/*
 * Author: Ryan Potter
 * https://github.com/Rhym
 */

/**
 * Class SVGTemplate
 */
class SVGTemplate extends ViewableData {
    /**
     * The base path to your SVG location
     *
     * @config
     * @var string
     */
    private static $base_path = 'mysite/dist/images/svg/';

    /**
     * @config
     * @var string
     */
    private static $extension = 'svg';

    /**
     * @config
     * @var array
     */
    private static $default_extra_classes = array();

    protected $extra_classes = array();

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    protected $path;

    /**
     * @var string
     */
    private $fill;

    /**
     * @var string
     */
    private $width;

    /**
     * @var string
     */
    private $height;

    protected $out;

    /**
     * @var array
     */
    private $extraClasses;

    /**
     * @param string $name
     * @param string $id
     * @param string $basePath
     */
    public function __construct($name, $id = '', $basePath = '') {
        $this->setName($name);
        $this->id = $id;
        $this->setExtraClasses([]);
        $this->setPath($basePath);
        $this->out = new DOMDocument();
        $this->out->formatOutput = true;
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    public function setPath($path)
    {
        if (!empty($path)) {
            $this->path = $path;
        } else {
            $this->path = $this->stat('base_path');
        }
    }

    public function getPath()
    {
        return $this->path;
    }

    public function setExtraClasses($extraClasses = array())
    {
        $classes = $this->stat('default_extra_classes');
        $classes[] = 'svg-' . $this->name;
        if (!empty($extraClasses)) {
            $classes = array_merge($classes, $extraClasses);
        }
        $this->extra_classes = $classes;
    }

    public function getExtraClasses()
    {
        return $this->extra_classes;
    }

    /**
     * @param $color
     * @return $this
     */
    public function fill($color) {
        $this->fill = $color;
        return $this;
    }

    /**
     * @param $width
     * @return $this
     */
    public function width($width) {
        $this->width = $width;
        return $this;
    }

    /**
     * @param $height
     * @return $this
     */
    public function height($height) {
        $this->height = $height;
        return $this;
    }

    /**
     * @param $width
     * @param $height
     * @return $this
     */
    public function size($width, $height) {
        $this->width($width);
        $this->height($height);
        return $this;
    }

    /**
     * @param $class
     * @return $this
     */
    public function extraClass($class) {
        $this->extra_classes[] = $class;
        return $this;
    }

    /**
     * @param $filePath
     * @return string
     */
    private function process($filePath) {
        if (file_exists($filePath)) {
            $out = $this->out;
            $out->load($filePath);
            $root = $out->documentElement;
            if ($this->fill) {
                $root->setAttribute('fill', $this->fill);
            }
            if ($this->width) {
                $root->setAttribute('width', $this->width . 'px');
            }
            if ($this->height) {
                $root->setAttribute('height', $this->height . 'px');
            }
            if ($this->getExtraClasses()) {
                $root->setAttribute('class', implode(' ', $this->getExtraClasses()));
            }
            foreach ($out->getElementsByTagName('svg') as $element) {
                if ($this->id) {
                    $element->setAttribute('id', $this->id);
                } else {
                    if ($element->hasAttribute('id')) {
                        $element->removeAttribute('id');
                    }
                }
            }
            $out->normalizeDocument();
            return $out->saveHTML();
        }

        return '';
    }

    /**
     * @return string
     */
    public function forTemplate() {
        $path = BASE_PATH . DIRECTORY_SEPARATOR .
                $this->getPath() . DIRECTORY_SEPARATOR .
                $this->name .
                '.' . $this->stat('extension');

        return $this->process($path);
    }
}
