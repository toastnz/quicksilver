<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-tomorrow.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.0/prism.min.js"></script>
<style>
    code[class*="language-"],
    pre[class*="language-"] {
        color: #c5c8c6;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        line-height: 1.5;
        tab-size: 4;
        hyphens: none;
    }

    pre[class*="language-"] {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
        border-radius: 0.3em;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
        background: #1d1f21;
    }

    :not(pre) > code[class*="language-"] {
        padding: .1em;
        border-radius: .3em;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #7C7C7C;
    }

    .token.punctuation {
        color: #c5c8c6;
    }

    .namespace {
        opacity: .7;
    }

    .token.property,
    .token.keyword,
    .token.tag {
        color: #96CBFE;
    }

    .token.class-name {
        color: #FFFFB6;
        text-decoration: underline;
    }

    .token.boolean,
    .token.constant {
        color: #99CC99;
    }

    .token.symbol,
    .token.deleted {
        color: #f92672;
    }

    .token.number {
        color: #FF73FD;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #A8FF60;
    }

    .token.variable {
        color: #C6C5FE;
    }

    .token.operator {
        color: #EDEDED;
    }

    .token.entity {
        color: #FFFFB6;
        /* text-decoration: underline; */
    }

    .token.url {
        color: #96CBFE;
    }

    .language-css .token.string,
    .style .token.string {
        color: #87C38A;
    }

    .token.atrule,
    .token.attr-value {
        color: #F9EE98;
    }

    .token.function {
        color: #DAD085;
    }

    .token.regex {
        color: #E9C062;
    }

    .token.important {
        color: #fd971f;
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }

    .token.italic {
        font-style: italic;
    }

    .token.entity {
        cursor: help;
    }
</style>

<div class="styleguide">
    <div class="styleguide__aside">
        <h6>COMPONENTS</h6>
        <a href="#Buttons">Buttons</a>
        <a href="#Tables">Tables</a>
        <a href="#Lists">Lists</a>
        <a href="#Typograhpy">Typograhpy</a>

        <%--<a href="#Colours">Colours</a>--%>
        <%--<a href="#Dropdowns">Dropdowns</a>--%>
        <%--<a href="#Checkbox">Checkbox</a>--%>
        <%--<a href="#Radio">Radio</a>--%>
        <%--<a href="#Text-Input">Text Input</a>--%>

        <h6>BLOCKS</h6>
        <a href="#Text">Text</a>
        <a href="#Video">Video</a>
        <a href="#Testimonial">Testimonial</a>
        <a href="#Image">Image</a>
        <a href="#Download">Download</a>

        <%--<a href="#Accordion">Accordion</a>--%>
        <%--<a href="#Split">Split</a>--%>

    </div>
    <div class="styleguide__content">

        <%----------------------------------------------------------------
        Section
        ----------------------------------------------------------------%>

        <div class="styleguide__content__section" id="Buttons">
            <h3 class="styleguide__content__section__heading">Buttons</h3>
            <p class="styleguide__content__section__paragraph">A simple Button component.</p>
<%----------------------------------------------------------------
            <h5 class="styleguide__content__section__subtitle">Usage</h5>
            <pre><code class="language-html">&lt;a href="#" class="button">Normal Button&lt;/a>
&lt;a href="#" class="button button--outline--primary">Outline Mode&lt;/a></code></pre>
  
            <h5 class="styleguide__content__section__subtitle">Demonstration</h5>
            ----------------------------------------------------------------%>
            <div class="styleguide__content__section__sandbox">
                <a href="#" class="button">Normal Button</a>
                <a href="#" class="button button--secondary">Secondary Button</a>
                <a href="#" class="button button--outline--primary">Outline Mode</a>
                <a href="#" class="button button--disabled">Disabled</a>
            </div>
        </div>

        <%----------------------------------------------------------------
        Section
        ----------------------------------------------------------------%>

        <div class="styleguide__content__section" id="Tables">
            <h3 class="styleguide__content__section__heading">Tables</h3>
            <p class="styleguide__content__section__paragraph">Table styles for the entire site.</p>
   <%----------------------------------------------------------------
            <h5 class="styleguide__content__section__subtitle">Usage</h5>
            <pre><code class="language-html">&lt;table>
    &lt;tr>
        &lt;th>Table head th&lt;/th>
        &lt;th>Table head th&lt;/th>
        &lt;th>Table head th&lt;/th>
    &lt;/tr>
    &lt;tbody>
        &lt;tr>
             &lt;td>Table body td&lt;/td>
             &lt;td>Table body td&lt;/td>
             &lt;td>Table body td&lt;/td>
        &lt;/tr>
        &lt;tr>
             &lt;td>Table body td&lt;/td>
             &lt;td>Table body td&lt;/td>
             &lt;td>Table body td&lt;/td>
        &lt;/tr>
    &lt;/tbody>
&lt;/table></code></pre>
    
            <h5 class="styleguide__content__section__subtitle">Demonstration</h5>
----------------------------------------------------------------%>
            <div class="styleguide__content__section__sandbox">
                <table>
                    <tr>
                        <th>Table head th</th>
                        <th>Table head th</th>
                        <th>Table head th</th>
                    </tr>
                    <tbody>
                    <tr>
                        <td>Table body td</td>
                        <td>Table body td</td>
                        <td>Table body td</td>
                    </tr>
                    <tr>
                        <td>Table body td</td>
                        <td>Table body td</td>
                        <td>Table body td</td>
                    </tr>
                    <tr>
                        <td>Table body td</td>
                        <td>Table body td</td>
                        <td>Table body td</td>
                    </tr>
                    <tr>
                        <td>Table body td</td>
                        <td>Table body td</td>
                        <td>Table body td</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <%----------------------------------------------------------------
        Section
        ----------------------------------------------------------------%>

        <div class="styleguide__content__section" id="Lists">
            <h3 class="styleguide__content__section__heading">Lists</h3>
            <p class="styleguide__content__section__paragraph">Ordered and unordered list components.</p>
                  <%----------------------------------------------------------------
            <h5 class="styleguide__content__section__subtitle">Usage</h5>
            <pre><code class="language-html">&lt;ul>&lt;!--Change to  ol for numbered lists-->
    &lt;li>This is an unordered list item&lt;/li>
    &lt;li>This is an unordered list item
        &lt;ul>
            &lt;li>This is a nested unordered list item&lt;/li>
        &lt;/ul>
    &lt;/li>
&lt;/ul>
            </code></pre>
            <h5 class="styleguide__content__section__subtitle">Demonstration</h5>
            ----------------------------------------------------------------%>
            <div class="styleguide__content__section__sandbox">
                <ul>
                    <li>This is an unordered list item</li>
                    <li>This is an unordered list item that has a slightly longer amount of text that may run over more than one line</li>
                    <li>This is an unordered list item
                        <ul>
                            <li>This is an unordered list item</li>
                            <li>This is an unordered list item that has a slightly longer amount of text that may run over more than one line</li>
                            <li>This is an unordered list item</li>
                            <li>This is an unordered list item</li>
                        </ul>
                    </li>
                    <li>This is an unordered list item</li>
                </ul>

                <ol>
                    <li>This is an unordered list item</li>
                    <li>This is an unordered list item that has a slightly longer amount of text that may run over more than one line</li>
                    <li>This is an unordered list item
                        <ol>
                            <li>This is an unordered list item</li>
                            <li>This is an unordered list item that has a slightly longer amount of text that may run over more than one line</li>
                            <li>This is an unordered list item</li>
                            <li>This is an unordered list item</li>
                        </ol>
                    </li>
                    <li>This is an unordered list item</li>
                </ol>
            </div>
        </div>

        <div class="styleguide__content__section" id="Typograhpy">
            <h3 class="styleguide__content__section__heading">Typograhpy</h3>
            <p class="styleguide__content__section__paragraph">Heading components without overrides</p>
   <%----------------------------------------------------------------
            <h5 class="styleguide__content__section__subtitle">Demonstration</h5>
             ----------------------------------------------------------------%>
            <div class="styleguide__content__section__sandbox">
                <div class="contentBlock">
                    <h1>This is an H1, the most important heading on a page</h1>
                    <h2>This is an H2, the second most important heading on a page</h2>
                    <h3>This is an H3, the third most important heading on a page</h3>
                    <h4>This is an H4, the fourth most important heading on a page</h4>
                    <h5>This is an H5, the fifth most important heading on a page</h5>
                    <h6>This is an H6, the sixth most important heading on a page</h6>
                    <p>
                        <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                        <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
                        <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
                        <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
                </div>
            </div>
        </div>

        <div class="styleguide__content__section" id="Text">
            <h3 class="styleguide__content__section__heading">Text Block</h3>
   <%----------------------------------------------------------------
            <h5 class="styleguide__content__section__subtitle">Demonstration</h5>
             ----------------------------------------------------------------%>
            <div class="styleguide__content__section__sandbox">
                <div class="contentBlock">
                    $fauxQuickBlock
                </div>
            </div>
        </div>

        <div class="styleguide__content__section" id="Video">
            <h3 class="styleguide__content__section__heading">Video Block</h3>
              <%----------------------------------------------------------------
            <h5 class="styleguide__content__section__subtitle">Demonstration</h5>
             ----------------------------------------------------------------%>
            <div class="styleguide__content__section__sandbox">
                <div class="contentBlock">
                    $fauxVideoBlock
                </div>
            </div>
        </div>

        <div class="styleguide__content__section" id="Testimonial">
            <h3 class="styleguide__content__section__heading">Testimonial Block</h3>
   <%----------------------------------------------------------------
            <h5 class="styleguide__content__section__subtitle">Demonstration</h5>
             ----------------------------------------------------------------%>
                         <div class="styleguide__content__section__sandbox">
                <div class="contentBlock">
                    $fauxTestimonialBlock
                </div>
            </div>
        </div>

        <div class="styleguide__content__section" id="Image">
            <h3 class="styleguide__content__section__heading">Image Block</h3>
   <%----------------------------------------------------------------
            <h5 class="styleguide__content__section__subtitle">Demonstration</h5>
             ----------------------------------------------------------------%>
            <div class="styleguide__content__section__sandbox">
                <div class="contentBlock">
                    $fauxImageBlock
                </div>
            </div>
        </div>

        <div class="styleguide__content__section" id="Download">
            <h3 class="styleguide__content__section__heading">Image Block</h3>
            <h5 class="styleguide__content__section__subtitle">Demonstration</h5>
            <div class="styleguide__content__section__sandbox">
                <div class="contentBlock">
                    $fauxDownloadBlock
                </div>
            </div>
        </div>

        <%--$fauxImageBlock--%>
        <%--$fauxAccordionBlock--%>
        <%--$fauxQuickBlock--%>
        <%--$fauxDownloadBlock--%>
        <%--$fauxSplitBlock--%>

    </div>
</div>
