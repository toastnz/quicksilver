<?php

class TypeSettings extends DataExtension
{

    public function updateCMSFields(FieldList $fields)
    {
        $fields->addFieldsToTab('Root.TypeSettings', array(
            ToggleCompositeField::create('h1Settings', 'H1', array(
                NumericField::create('Heading_1_font-size', 'Heading 1 font-size'),
                NumericField::create('Heading_1_font-weight', 'Heading 1 font-weight'),
                TextField::create('Heading_1_font-style', 'Heading 1 font-style'),
                TextField::create('Heading_1_text-align', 'Heading 1 text-align'),
                NumericField::create('Heading_1_line-height', 'Heading 1 line-height'),
                NumericField::create('Heading_1_letter-spacing', 'Heading 1 letter-spacing'),
            )),
            ToggleCompositeField::create('h2Settings', 'H2', array(
                NumericField::create('Heading_2_font-size', 'Heading 2 font-size'),
                NumericField::create('Heading_2_font-weight', 'Heading 2 font-weight'),
                TextField::create('Heading_2_font-style', 'Heading 2 font-style'),
                TextField::create('Heading_2_text-align', 'Heading 2 text-align'),
                NumericField::create('Heading_2_line-height', 'Heading 2 line-height'),
                NumericField::create('Heading_2_letter-spacing', 'Heading 2 letter-spacing'),
            )),
            ToggleCompositeField::create('h3Settings', 'H3', array(
                NumericField::create('Heading_3_font-size', 'Heading 3 font-size'),
                NumericField::create('Heading_3_font-weight', 'Heading 3 font-weight'),
                TextField::create('Heading_3_font-style', 'Heading 3 font-style'),
                TextField::create('Heading_3_text-align', 'Heading 3 text-align'),
                NumericField::create('Heading_3_line-height', 'Heading 3 line-height'),
                NumericField::create('Heading_3_letter-spacing', 'Heading 3 letter-spacing'),
            )),
            ToggleCompositeField::create('h4Settings', 'H4', array(
                NumericField::create('Heading_4_font-size', 'Heading 4 font-size'),
                NumericField::create('Heading_4_font-weight', 'Heading 4 font-weight'),
                TextField::create('Heading_4_font-style', 'Heading 4 font-style'),
                TextField::create('Heading_4_text-align', 'Heading 4 text-align'),
                NumericField::create('Heading_4_line-height', 'Heading 4 line-height'),
                NumericField::create('Heading_4_letter-spacing', 'Heading 4 letter-spacing'),
            )),
            ToggleCompositeField::create('h5Settings', 'H5', array(
                NumericField::create('Heading_5_font-size', 'Heading 5 font-size'),
                NumericField::create('Heading_5_font-weight', 'Heading 5 font-weight'),
                TextField::create('Heading_5_font-style', 'Heading 5 font-style'),
                TextField::create('Heading_5_text-align', 'Heading 5 text-align'),
                NumericField::create('Heading_5_line-height', 'Heading 5 line-height'),
                NumericField::create('Heading_5_letter-spacing', 'Heading 5 letter-spacing'),
            )),
            ToggleCompositeField::create('h6Settings', 'H6', array(
                NumericField::create('Heading_6_font-size', 'Heading 6 font-size'),
                NumericField::create('Heading_6_font-weight', 'Heading 6 font-weight'),
                TextField::create('Heading_6_font-style', 'Heading 6 font-style'),
                TextField::create('Heading_6_text-align', 'Heading 6 text-align'),
                NumericField::create('Heading_6_line-height', 'Heading 6 line-height'),
                NumericField::create('Heading_6_letter-spacing', 'Heading 6 letter-spacing'),
            )),
            ToggleCompositeField::create('p_Settings', 'P', array(
                NumericField::create('Paragraph_font-size', 'Paragraph font-size'),
                NumericField::create('Paragraph_font-weight', 'Paragraph font-weight'),
                TextField::create('Paragraph_font-style', 'Paragraph font-style'),
                TextField::create('Paragraph_text-align', 'Paragraph text-align'),
                NumericField::create('Paragraph_line-height', 'Paragraph line-height'),
                NumericField::create('Paragraph_letter-spacing', 'Paragraph letter-spacing'),
            )),
        ));
    }

}