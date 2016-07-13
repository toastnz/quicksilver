<style id="typeStyles">
        $SiteConfig.TypeSettingsCSS
</style>

<% if $CurrentMember %>

    <div id="typeSettings" class="type-settings" data-save-type-settings="$Link('SaveTypeSettings')" data-load-type-settings="$Link('LoadTypeSettings')" data-save-css="$Link('SaveCSS')">
        <!--Header-->
        <div class="type-settings__header">
            <h5>TYPE SETTINGS</h5>
            <div class="js-close-type-settings"></div>
        </div>

        <div class="scroll-wrap">
            <!--Heading 1 Settings-->
            <div class="headingWrap">
                <div class="innerWrap">
                    <h6 class="js-collapsible" data-colapsible-target="#Heading_1">HEADING 1
                        <i class="fa fa-angle-down" aria-hidden="true"></i></h6>
                    <div id="Heading_1" class="collapsible js-type-setting" data-selector="h1">

                        <%--Font Size--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_1_font-size" placeholder="45" data-default="45" min="0" max="100" step="0.1" value="4.5">
                            <label for="Heading_1_font-size">FONT SIZE</label>
                            <span class="rightLabel">rem</span>
                        </div>

                        <%--Font Weight--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_1_font-weight">
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                                <option value="400">400</option>
                                <option value="500">500</option>
                                <option value="600">600</option>
                                <option value="700">700</option>
                                <option value="800">800</option>
                                <option value="900">900</option>
                            </select>
                            <label for="Heading_1_font-weight">FONT WEIGHT</label>
                        </div>

                        <%--Font Style--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_1_font-style">
                                <option value="normal">Normal</option>
                                <option value="italic">Italic</option>
                            </select>
                            <label for="Heading_1_font-style">FONT STYLE</label>
                        </div>

                        <%--Font Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <label for="Heading_1_fontcolour">FONT COLOUR</label>
                            <input type="text" id="Heading_1_fontcolour">
                            <span></span>
                        </div>

                        <%--Font Background Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <input type="text" id="Heading_1_fontbackgroundcolour">
                            <label for="Heading_1_fontbackgroundcolour">BACKGROUND COLOUR</label>
                            <span></span>
                        </div>

                        <%--Font Align--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_1_text-align">
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>
                            <label for="Heading_1_text-align">TEXT ALIGN</label>
                        </div>

                        <%--Line Height--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_1_line-height" placeholder="1.2" data-default="1.2" min="0" max="5" step="0.1" value="1.2">
                            <label for="Heading_1_line-height">LINE HEIGHT</label>
                            <span></span>
                        </div>

                        <%--Letter Spacing--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_1_letter-spacing" placeholder="0" data-default="0" min="0" max="10" step="0.1" value="0">
                            <label for="Heading_1_letter-spacing">LETTER SPACING</label>
                            <span>px</span>
                        </div>

                    </div>
                </div>
            </div>

            <div class="clearfix"></div>

            <!--Heading 2 Settings-->
            <div class="headingWrap">
                <div class="innerWrap">
                    <h6 class="js-collapsible" data-colapsible-target="#Heading_2">HEADING 2
                        <i class="fa fa-angle-down" aria-hidden="true"></i></h6>
                    <div id="Heading_2" class="collapsible js-type-setting" data-selector="h2">

                        <%--Font Size--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_2_font-size" placeholder="45" data-default="45" min="0" max="100" step="0.1" value="3.6">
                            <label for="Heading_2_font-size">FONT SIZE</label>
                            <span class="rightLabel">rem</span>
                        </div>

                        <%--Font Weight--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_2_font-weight">
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                                <option value="400">400</option>
                                <option value="500">500</option>
                                <option value="600">600</option>
                                <option value="700">700</option>
                                <option value="800">800</option>
                                <option value="900">900</option>
                            </select>
                            <label for="Heading_2_font-weight">FONT WEIGHT</label>
                        </div>

                        <%--Font Style--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_2_font-style">
                                <option value="normal">Normal</option>
                                <option value="italic">Italic</option>
                            </select>
                            <label for="Heading_2_font-style">FONT STYLE</label>
                        </div>

                        <%--Font Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <label for="Heading_2_fontcolour">FONT COLOUR</label>
                            <input type="text" id="Heading_2_fontcolour">
                            <span></span>
                        </div>

                        <%--Font Background Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <input type="text" id="Heading_2_fontbackgroundcolour">
                            <label for="Heading_2_fontbackgroundcolour">BACKGROUND COLOUR</label>
                            <span></span>
                        </div>

                        <%--Font Align--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_2_text-align">
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>
                            <label for="Heading_2_text-align">TEXT ALIGN</label>
                        </div>

                        <%--Line Height--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_2_line-height" placeholder="1.2" data-default="1.2" min="0" max="5" step="0.1" value="1.2">
                            <label for="Heading_2_line-height">LINE HEIGHT</label>
                            <span></span>
                        </div>

                        <%--Letter Spacing--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_2_letter-spacing" placeholder="0" data-default="0" min="0" max="10" step="0.1" value="0">
                            <label for="Heading_2_letter-spacing">LETTER SPACING</label>
                            <span>px</span>
                        </div>

                    </div>
                </div>
            </div>

            <div class="clearfix"></div>

            <!--Heading 2 Settings-->
            <div class="headingWrap">
                <div class="innerWrap">
                    <h6 class="js-collapsible" data-colapsible-target="#Heading_3">HEADING 3
                        <i class="fa fa-angle-down" aria-hidden="true"></i></h6>
                    <div id="Heading_3" class="collapsible js-type-setting" data-selector="h3">

                        <%--Font Size--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_3_font-size" placeholder="45" data-default="45" min="0" max="100" step="0.1" value="3.2">
                            <label for="Heading_3_font-size">FONT SIZE</label>
                            <span class="rightLabel">rem</span>
                        </div>

                        <%--Font Weight--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_3_font-weight">
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                                <option value="400">400</option>
                                <option value="500">500</option>
                                <option value="600">600</option>
                                <option value="700">700</option>
                                <option value="800">800</option>
                                <option value="900">900</option>
                            </select>
                            <label for="Heading_3_font-weight">FONT WEIGHT</label>
                        </div>

                        <%--Font Style--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_3_font-style">
                                <option value="normal">Normal</option>
                                <option value="italic">Italic</option>
                            </select>
                            <label for="Heading_3_font-style">FONT STYLE</label>
                        </div>

                        <%--Font Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <label for="Heading_3_fontcolour">FONT COLOUR</label>
                            <input type="text" id="Heading_3_fontcolour">
                            <span></span>
                        </div>

                        <%--Font Background Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <input type="text" id="Heading_3_fontbackgroundcolour">
                            <label for="Heading_3_fontbackgroundcolour">BACKGROUND COLOUR</label>
                            <span></span>
                        </div>

                        <%--Font Align--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_3_text-align">
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>
                            <label for="Heading_3_text-align">TEXT ALIGN</label>
                        </div>

                        <%--Line Height--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_3_line-height" placeholder="1.2" data-default="1.2" min="0" max="5" step="0.1" value="1.2">
                            <label for="Heading_3_line-height">LINE HEIGHT</label>
                            <span></span>
                        </div>

                        <%--Letter Spacing--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_3_letter-spacing" placeholder="0" data-default="0" min="0" max="10" step="0.1" value="0">
                            <label for="Heading_3_letter-spacing">LETTER SPACING</label>
                            <span>px</span>
                        </div>

                    </div>
                </div>
            </div>

            <div class="clearfix"></div>

            <!--Heading 4 Settings-->
            <div class="headingWrap">
                <div class="innerWrap">
                    <h6 class="js-collapsible" data-colapsible-target="#Heading_4">HEADING 4
                        <i class="fa fa-angle-down" aria-hidden="true"></i></h6>
                    <div id="Heading_4" class="collapsible js-type-setting" data-selector="h4">

                        <%--Font Size--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_4_font-size" placeholder="45" data-default="45" min="0" max="100" step="0.1" value="2.8">
                            <label for="Heading_4_font-size">FONT SIZE</label>
                            <span class="rightLabel">rem</span>
                        </div>

                        <%--Font Weight--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_4_font-weight">
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                                <option value="400">400</option>
                                <option value="500">500</option>
                                <option value="600">600</option>
                                <option value="700">700</option>
                                <option value="800">800</option>
                                <option value="900">900</option>
                            </select>
                            <label for="Heading_4_font-weight">FONT WEIGHT</label>
                        </div>

                        <%--Font Style--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_4_font-style">
                                <option value="normal">Normal</option>
                                <option value="italic">Italic</option>
                            </select>
                            <label for="Heading_4_font-style">FONT STYLE</label>
                        </div>

                        <%--Font Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <label for="Heading_4_fontcolour">FONT COLOUR</label>
                            <input type="text" id="Heading_4_fontcolour">
                            <span></span>
                        </div>

                        <%--Font Background Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <input type="text" id="Heading_4_fontbackgroundcolour">
                            <label for="Heading_4_fontbackgroundcolour">BACKGROUND COLOUR</label>
                            <span></span>
                        </div>

                        <%--Font Align--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_4_text-align">
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>
                            <label for="Heading_4_text-align">TEXT ALIGN</label>
                        </div>

                        <%--Line Height--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_4_line-height" placeholder="1.2" data-default="1.2" min="0" max="5" step="0.1" value="1.2">
                            <label for="Heading_4_line-height">LINE HEIGHT</label>
                            <span></span>
                        </div>

                        <%--Letter Spacing--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_4_letter-spacing" placeholder="0" data-default="0" min="0" max="10" step="0.1" value="0">
                            <label for="Heading_4_letter-spacing">LETTER SPACING</label>
                            <span>px</span>
                        </div>

                    </div>
                </div>
            </div>

            <div class="clearfix"></div>

            <!--Heading 5 Settings-->
            <div class="headingWrap">
                <div class="innerWrap">
                    <h6 class="js-collapsible" data-colapsible-target="#Heading_5">HEADING 5
                        <i class="fa fa-angle-down" aria-hidden="true"></i></h6>
                    <div id="Heading_5" class="collapsible js-type-setting" data-selector="h5">

                        <%--Font Size--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_5_font-size" placeholder="45" data-default="45" min="0" max="100" step="0.1" value="2.4">
                            <label for="Heading_5_font-size">FONT SIZE</label>
                            <span class="rightLabel">rem</span>
                        </div>

                        <%--Font Weight--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_5_font-weight">
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                                <option value="400">400</option>
                                <option value="500">500</option>
                                <option value="600">600</option>
                                <option value="700">700</option>
                                <option value="800">800</option>
                                <option value="900">900</option>
                            </select>
                            <label for="Heading_5_font-weight">FONT WEIGHT</label>
                        </div>

                        <%--Font Style--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_5_font-style">
                                <option value="normal">Normal</option>
                                <option value="italic">Italic</option>
                            </select>
                            <label for="Heading_5_font-style">FONT STYLE</label>
                        </div>

                        <%--Font Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <label for="Heading_5_fontcolour">FONT COLOUR</label>
                            <input type="text" id="Heading_5_fontcolour">
                            <span></span>
                        </div>

                        <%--Font Background Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <input type="text" id="Heading_5_fontbackgroundcolour">
                            <label for="Heading_5_fontbackgroundcolour">BACKGROUND COLOUR</label>
                            <span></span>
                        </div>

                        <%--Font Align--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_5_text-align">
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>
                            <label for="Heading_5_text-align">TEXT ALIGN</label>
                        </div>

                        <%--Line Height--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_5_line-height" placeholder="1.2" data-default="1.2" min="0" max="5" step="0.1" value="1.2">
                            <label for="Heading_5_line-height">LINE HEIGHT</label>
                            <span></span>
                        </div>

                        <%--Letter Spacing--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_5_letter-spacing" placeholder="0" data-default="0" min="0" max="10" step="0.1" value="0">
                            <label for="Heading_5_letter-spacing">LETTER SPACING</label>
                            <span>px</span>
                        </div>

                    </div>
                </div>
            </div>

            <div class="clearfix"></div>

            <!--Heading 6 Settings-->
            <div class="headingWrap">
                <div class="innerWrap">
                    <h6 class="js-collapsible" data-colapsible-target="#Heading_6">HEADING 6
                        <i class="fa fa-angle-down" aria-hidden="true"></i></h6>
                    <div id="Heading_6" class="collapsible js-type-setting" data-selector="h6">

                        <%--Font Size--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_6_font-size" placeholder="45" data-default="45" min="0" max="100" step="0.1" value="2">
                            <label for="Heading_6_font-size">FONT SIZE</label>
                            <span class="rightLabel">rem</span>
                        </div>

                        <%--Font Weight--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_6_font-weight">
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                                <option value="400">400</option>
                                <option value="500">500</option>
                                <option value="600">600</option>
                                <option value="700">700</option>
                                <option value="800">800</option>
                                <option value="900">900</option>
                            </select>
                            <label for="Heading_6_font-weight">FONT WEIGHT</label>
                        </div>

                        <%--Font Style--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_6_font-style">
                                <option value="normal">Normal</option>
                                <option value="italic">Italic</option>
                            </select>
                            <label for="Heading_6_font-style">FONT STYLE</label>
                        </div>

                        <%--Font Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <label for="Heading_6_fontcolour">FONT COLOUR</label>
                            <input type="text" id="Heading_6_fontcolour">
                            <span></span>
                        </div>

                        <%--Font Background Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <input type="text" id="Heading_6_fontbackgroundcolour">
                            <label for="Heading_6_fontbackgroundcolour">BACKGROUND COLOUR</label>
                            <span></span>
                        </div>

                        <%--Font Align--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Heading_6_text-align">
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>
                            <label for="Heading_6_text-align">TEXT ALIGN</label>
                        </div>

                        <%--Line Height--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_6_line-height" placeholder="1.2" data-default="1.2" min="0" max="5" step="0.1" value="1.2">
                            <label for="Heading_6_line-height">LINE HEIGHT</label>
                            <span></span>
                        </div>

                        <%--Letter Spacing--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Heading_6_letter-spacing" placeholder="0" data-default="0" min="0" max="10" step="0.1" value="0">
                            <label for="Heading_6_letter-spacing">LETTER SPACING</label>
                            <span>px</span>
                        </div>

                    </div>
                </div>
            </div>


            <div class="clearfix"></div>

            <!--Heading 4 Settings-->
            <div class="headingWrap">
                <div class="innerWrap">
                    <h6 class="js-collapsible" data-colapsible-target="#Paragraph">PARAGRAPH
                        <i class="fa fa-angle-down" aria-hidden="true"></i></h6>
                    <div id="Paragraph" class="collapsible js-type-setting" data-selector="p">

                        <%--Font Size--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Paragraph_font-size" placeholder="16" data-default="16" min="0" max="100" step="0.1" value="1.6">
                            <label for="Paragraph_font-size">FONT SIZE</label>
                            <span class="rightLabel">rem</span>
                        </div>

                        <%--Font Weight--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Paragraph_font-weight">
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                                <option value="400">400</option>
                                <option value="500">500</option>
                                <option value="600">600</option>
                                <option value="700">700</option>
                                <option value="800">800</option>
                                <option value="900">900</option>
                            </select>
                            <label for="Paragraph_font-weight">FONT WEIGHT</label>
                        </div>

                        <%--Font Style--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Paragraph_font-style">
                                <option value="normal">Normal</option>
                                <option value="italic">Italic</option>
                            </select>
                            <label for="Paragraph_font-style">FONT STYLE</label>
                        </div>

                        <%--Font Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <label for="Paragraph_fontcolour">FONT COLOUR</label>
                            <input type="text" id="Paragraph_fontcolour">
                            <span></span>
                        </div>

                        <%--Font Background Colour--%>
                        <div class="input-wrap input-wrap__colour">
                            <input type="text" id="Paragraph_fontbackgroundcolour">
                            <label for="Paragraph_fontbackgroundcolour">BACKGROUND COLOUR</label>
                            <span></span>
                        </div>

                        <%--Font Align--%>
                        <div class="input-wrap input-wrap__select">
                            <select id="Paragraph_text-align">
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>
                            <label for="Paragraph_text-align">TEXT ALIGN</label>
                        </div>

                        <%--Line Height--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Paragraph_line-height" placeholder="1.2" data-default="1.2" min="0" max="5" step="0.1" value="1.2">
                            <label for="Paragraph_line-height">LINE HEIGHT</label>
                            <span></span>
                        </div>

                        <%--Letter Spacing--%>
                        <div class="input-wrap input-wrap__number">
                            <input type="number" id="Paragraph_letter-spacing" placeholder="0" data-default="0" min="0" max="10" step="0.1" value="0">
                            <label for="Paragraph_letter-spacing">LETTER SPACING</label>
                            <span>px</span>
                        </div>

                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <button class="button js-save-type-settings">SAVE SETTINGS</button>
        </div>


    </div>
<% end_if %>