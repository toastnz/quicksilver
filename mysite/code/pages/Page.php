<?php

/**
 * Class Page
 *
 */
class Page extends SiteTree
{
    public function getCMSFields()
    {
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
            [
                'mysite/dist/js/app.js',
            ]
        );
    }


    public function StyleguideForm()
    {
        $fields = new FieldList(
            TextField::create('SimpleText', 'Text Field')->addExtraClass('input-wrap--half'),
            EmailField::create('Email', "Email Field")->addExtraClass('input-wrap--half input-wrap--half--last'),
            NumericField::create('Number', 'Number Field')->addExtraClass('input-wrap--half'),
            DropdownField::create('Dropdown', 'Normal dropdown', [
                '1' => 'One option',
                '2' => 'Two option',
                '3' => 'Three option',
                '4' => 'Four option',
            ])->addExtraClass('input-wrap--half input-wrap--half--last'),
            TextField::create('SimpleText2', 'Text Field Third')->addExtraClass('input-wrap--third'),
            TextField::create('SimpleText3', 'Text Field Third')->addExtraClass('input-wrap--third'),
            TextField::create('SimpleText4', 'Text Field Third')->addExtraClass('input-wrap--third input-wrap--third--last'),
            TextField::create('SimpleText5', 'Text Field Quarter')->addExtraClass('input-wrap--quarter'),
            TextField::create('SimpleText6', 'Text Field Quarter')->addExtraClass('input-wrap--quarter'),
            TextField::create('SimpleText7', 'Text Field Quarter')->addExtraClass('input-wrap--quarter'),
            TextField::create('SimpleText8', 'Text Field Quarter')->addExtraClass('input-wrap--quarter input-wrap--quarter--last'),
            TextareaField::create('Textarea', 'Text Area')->setDescription('This is a description')
        );

        $actions = new FieldList(
            new FormAction('doForm', 'Submit')
        );

        $required = new RequiredFields();

        $form = new Form($this, 'TestForm', $fields, $actions, $required);
        $form->setMessage('This is a form wide message. See the alerts component for site wide messages.', 'good');

        return $form;
    }

}
