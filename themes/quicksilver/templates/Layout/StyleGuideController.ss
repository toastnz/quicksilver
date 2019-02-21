<%--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.0/themes/prism.min.css">--%>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-tomorrow.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.0/prism.min.js"></script>
<style>
    /**
 * atom-dark theme for `prism.js`
 * Based on Atom's `atom-dark` theme: https://github.com/atom/atom-dark-syntax
 * @author Joe Gibson (@gibsjose)
 */

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

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }

    /* Code blocks */
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

    /* Inline code */
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
        <a href="#">Buttons</a>
        <a href="#">Colours</a>
        <a href="#">Text</a>
        <a href="#">Dropdowns</a>
        <a href="#">Checkbox</a>
        <a href="#">Radio</a>
        <a href="#">Text Input</a>
        <h6>BLOCKS</h6>
        <a href="#">Text</a>
        <a href="#">Testimonial</a>
        <a href="#">Image</a>
        <a href="#">Video</a>
        <a href="#">Accordion</a>
        <a href="#">Download</a>
        <a href="#">Split</a>

    </div>
    <div class="styleguide__content">
        <div class="styleguide__content__section">
            <h3 class="styleguide__content__section__heading">Buttons</h3>
            <p class="styleguide__content__section__paragraph">A simple Button component.</p>

            <h5 class="styleguide__content__section__subtitle">Usage</h5>
            <pre><code class="language-html">&lt;a href="#" class="button">Normal Button&lt;/a>
&lt;a href="#" class="button button--outline--primary">Outline Mode&lt;/a></code></pre>

            <h5 class="styleguide__content__section__subtitle">Demonstration</h5>
            <div class="styleguide__content__section__sandbox">
                <a href="#" class="button">Normal Button</a>
                <a href="#" class="button button--secondary">Secondary Button</a>
                <a href="#" class="button button--outline--primary">Outline Mode</a>
                <a href="#" class="button button--disabled">Disabled</a>
            </div>
        </div>


        <%--$fauxTestimonialBlock--%>

        <%--$fauxVideoBlock--%>

        <%--$fauxImageBlock--%>

        <%--$fauxAccordionBlock--%>
        <%--$fauxQuickBlock--%>
        <%--$fauxDownloadBlock--%>
        <%--$fauxSplitBlock--%>


        <div class="wysiwyg">
            <div class="">
                <h1>This is the primary heading and there should only be one of these per page</h1>
                <h2>This is an h2, it is slightly smaller</h2>
                <h3>This is an h3, it is slightly smaller</h3>
                <h4>This is an h4, it is slightly smaller</h4>
                <h5>This is an h5, it is slightly smaller</h5>
                <h6>This is an h6, it is slightly smaller</h6>
                <p>A small paragraph to <em>emphasis</em> and show <strong>important</strong> bits.</p>
                <ul>
                    <li>This is a list item</li>
                    <li>So is this - there could be more</li>
                    <li>Make sure to style list items to:
                        <ul>
                            <li>Not forgetting child list items</li>
                            <li>Not forgetting child list items</li>
                            <li>Not forgetting child list items</li>
                            <li>Not forgetting child list items</li>
                        </ul>
                    </li>
                    <li>A couple more</li>
                    <li>top level list items</li>
                </ul>
                <p>Don't forget <strong>Ordered lists</strong>:</p>
                <ol>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                    <li>Aliquam tincidunt mauris eu risus.
                        <ol>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                        </ol>
                    </li>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                    <li>Aliquam tincidunt mauris eu risus.</li>
                </ol>
                <h2>A sub heading which is not as important as the first, but is quite imporant overall</h2>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>

                <table class="t1" summary="Top 10 downloaded movies in 2011 using BitTorrent, in descending order, listing number of downloads and worldwide cinema grosses">
                    <caption>
                        Most Downloaded Movies on BitTorrent, 2011
                    </caption>
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Movie</th>
                        <th>Downloads</th>
                        <th>Grosses</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th colspan="4">torrentfreak.com</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>Fast Five</td>
                        <td>9,260,000</td>
                        <td>$626,137,675</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>The Hangover II</td>
                        <td>8,840,000</td>
                        <td>$581,464,305</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Thor</td>
                        <td>8,330,000</td>
                        <td>$449,326,618</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>Source Code</td>
                        <td>7,910,000</td>
                        <td>$123,278,618</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>I Am Number Four</td>
                        <td>7,670,000</td>
                        <td>$144,500,437</td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>Sucker Punch</td>
                        <td>7,200,000</td>
                        <td>$89,792,502</td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>127 Hours</td>
                        <td>6,910,000</td>
                        <td>$60,738,797</td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>Rango</td>
                        <td>6,480,000</td>
                        <td>$245,155,348</td>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>The King’s Speech</td>
                        <td>6,250,000</td>
                        <td>$414,211,549</td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>Harry Potter and the Deathly Hallows Part 2</td>
                        <td>6,030,000</td>
                        <td>$1,328,111,219</td>
                    </tr>
                    </tbody>
                </table>

                <table>
                    <tr>
                        <th>
                            Table Heading
                        </th>
                        <th>
                            Table Heading
                        </th>
                    </tr>
                    <tr>
                        <td>
                            table data
                        </td>
                        <td>
                            table data
                        </td>
                    </tr>
                    <tr>
                        <td>
                            table data
                        </td>
                        <td>
                            table data
                        </td>
                    </tr>
                    <tr>
                        <td>
                            table data
                        </td>
                        <td>
                            table data
                        </td>
                    </tr>
                    <tr>
                        <td>
                            table data
                        </td>
                        <td>
                            table data
                        </td>
                    </tr>
                </table>

                <h3>A sub heading which is not as important as the second, but should be used with consideration</h3>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>

                <blockquote>
                    <p><em>This is a properly formatted blockquote, btw.</em> Measuring programming progress by lines of code is like measuring aircraft building progress by weight.</p>
                    <cite><a href="http://www.thegatesnotes.com">Bill Gates</a></cite>
                </blockquote>

                <h4>A sub heading which is not as important as the second, but should be used with consideration</h4>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>
                <blockquote>
                    <p>
                        “Ooh - a blockquote! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.”
                    </p>
                </blockquote>

                <h5>A sub heading which is not as important as the second, but should be used with consideration</h5>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>

                <dl>
                    <dt>Definition list</dt>
                    <dd>
                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </dd>
                    <dt>Lorem ipsum dolor sit amet</dt>
                    <dd>
                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </dd>
                </dl>

                <h6>This heading plays a relatively small bit part role, if you use it at all</h6>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>
                <h1>
                    Level 1 heading
                </h1>
                <p>
                    Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo, vehicula in, suscipit nec, molestie sed, tellus.
                </p>
                <h1 class="colour--primary">
                    Level 1 heading class="colour--primary"
                </h1>
                <h1 class="colour--secondary">
                    Level 1 heading class="colour--secondary"
                </h1>
                <h1 class="colour--tertiary">
                    Level 1 heading class="colour--tertiary"
                </h1>
                <p>
                    Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo, vehicula in, suscipit nec, molestie sed, tellus.
                </p>

                <p>
                    <a href="" class="button button--primary">BUTTON PRIMARY</a>
                    <a href="" class="button button--primary button--round">BUTTON PRIMARY ROUND</a>
                    <a href="" class="button button--primary button--outline">BUTTON PRIMARY ROUND</a>
                </p>
                <p>
                    <a href="" class="button button--secondary">BUTTON SECONDARY</a>
                    <a href="" class="button button--secondary button--round">BUTTON SECONDARY ROUND</a>
                    <a href="" class="button button--secondary button--outline">BUTTON SECONDARY ROUND</a>
                </p>
                <p>
                    <a href="" class="button button--tertiary">BUTTON TERTIARY</a>
                    <a href="" class="button button--tertiary button--round">BUTTON TERTIARY ROUND</a>
                    <a href="" class="button button--tertiary button--outline">BUTTON TERTIARY ROUND</a>
                </p>
                <p>
                    <a href="" class="button button--success">BUTTON SUCCESS</a>
                    <a href="" class="button button--success button--round">BUTTON SUCCESS ROUND</a>
                    <a href="" class="button button--success button--outline">BUTTON SUCCESS ROUND</a>
                </p>
                <p>
                    <a href="" class="button button--warning">BUTTON WARNING</a>
                    <a href="" class="button button--warning button--round">BUTTON WARNING ROUND</a>
                    <a href="" class="button button--warning button--outline">BUTTON WARNING ROUND</a>
                </p>
                <p>
                    <a href="" class="button button--error">BUTTON ERROR</a>
                    <a href="" class="button button--error button--round">BUTTON ERROR ROUND</a>
                    <a href="" class="button button--error button--outline">BUTTON ERROR ROUND</a>
                </p>

                <p>
                    <a href="" class="button button--disabled">BUTTON DISABLED</a>
                    <a href="" class="button button--disabled button--round">BUTTON DISABLED ROUND</a>
                    <a href="" class="button button--disabled button--outline">BUTTON DISABLED ROUND</a>
                </p>

                <blockquote>
                    <p>
                        Paragraph inside Blockquote: Nam libero leo, elementum in, dapibus a, suscipit vitae, purus. Duis arcu. Integer dignissim fermentum enim. Morbi convallis felis vel nibh. Sed scelerisque sagittis lorem.
                    </p>
                </blockquote>


                <hr>

                <ul>
                    <li>Unordered list 01</li>
                    <li>Unordered list 02</li>
                    <li>Unordered list 03
                        <ul>
                            <li>Unordered list inside list level 2</li>
                            <li>Unordered list inside list level 2
                                <ul>
                                    <li>Unordered list inside list level 3</li>
                                    <li>Unordered list inside list level 3</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ol>
                    <li>Ordered list 01</li>
                    <li>Ordered list 02</li>
                    <li>Ordered list 03
                        <ol>
                            <li>Ordered list inside list level 2</li>
                            <li>Ordered list inside list level 2
                                <ol>
                                    <li>Ordered list inside list level 3</li>
                                    <li>Ordered list inside list level 3</li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>

                <dl>
                    <dt>
                        Description list title 01
                    </dt>
                    <dd>
                        Description list description 01
                    </dd>
                    <dt>
                        Description list title 02
                    </dt>
                    <dd>
                        Description list description 02
                    </dd>
                    <dd>
                        Description list description 03
                    </dd>
                </dl>

                <table>
                    <caption>
                        Table Caption
                    </caption>
                    <thead>
                    <tr>
                        <th>
                            Table head th
                        </th>
                        <td>
                            Table head td
                        </td>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>
                            Table foot th
                        </th>
                        <td>
                            Table foot td
                        </td>
                    </tr>
                    </tfoot>
                    <tbody>
                    <tr>
                        <th>
                            Table body th
                        </th>
                        <td>
                            Table body td
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Table body td
                        </td>
                        <td>
                            Table body td
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>


    </div>
</div>
