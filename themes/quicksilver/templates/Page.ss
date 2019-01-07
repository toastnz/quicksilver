<!doctype html>
<html lang="en">
<head>
    <% include Meta %>
</head>
<body class="$Classname"
      <% if $GoogleMapsApiKey %>data-maps-api-key="$GoogleMapsApiKey"<% end_if %>
      data-classname="$Classname"
      data-title="$Title"
      data-url-segment="$URLSegment">
<div class="tingle-content-wrapper">

    <% include Header %>

    $Layout
    
    <div class="row" style=" padding:8rem;">
        <div class="column">
            <div class="wysiwyg">
                <div class="">
                    <i class="icon icon-checkbox-checked"></i>
                    <h1>This is the primary heading and there should only be one of these per page</h1>
                    <h2>This is an h2, it is slightly smaller</h2>
                    <h3>This is an h3, it is slightly smaller</h3>
                    <h4>This is an h4, it is slightly smaller</h4>
                    <h5>This is an h5, it is slightly smaller</h5>
                    <h6>This is an h6, it is slightly smaller</h6>
                    <p>A small paragraph to <em>emphasis</em> and show <strong>important</strong> bits.</p>
                    <small>A &lt;small&gt; tag is used for very small text</small>
                    <br>
                    <br>
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
                        <footer>
                            — <cite><a href="http://www.thegatesnotes.com">Bill Gates</a></cite>
                        </footer>
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

                    <pre>
          <code>
          #header h1 a {
            display: block;
            width: 300px;
            height: 80px;
          }
          </code>
          </pre>

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
                    <h1 class="colour--success">
                        Level 1 heading class="colour--successl"
                    </h1>
                    <h1 class="colour--warning">
                        Level 1 heading class="colour--warning"
                    </h1>
                    <h1 class="colour--error">
                        Level 1 heading class="colour--error"
                    </h1>
                    <p>
                        Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo, vehicula in, suscipit nec, molestie sed, tellus.
                    </p>

                    <p>
                        <a href="" class="button button--primary">BUTTON PRIMARY</a>
                        <a href="" class="button button--primary button--round">BUTTON PRIMARY ROUND</a>
                        <a href="" class="button button--bordered--primary button--round">BUTTON BORDERED PRIMARY</a>
                        <a href="" class="button button--bordered--primary">BUTTON BORDERED PRIMARY</a>
                    </p>
                    <p>
                        <a href="" class="button button--secondary">BUTTON SECONDARY</a>
                        <a href="" class="button button--secondary button--round">BUTTON SECONDARY ROUND</a>
                        <a href="" class="button button--bordered--secondary button--round">BUTTON BORDERED SECONDARY</a>
                        <a href="" class="button button--bordered--secondary">BUTTON BORDERED SECONDARY</a>
                    </p>
                    <p>
                        <a href="" class="button button--tertiary">BUTTON TERTIARY</a>
                        <a href="" class="button button--tertiary button--round">BUTTON TERTIARY ROUND</a>
                        <a href="" class="button button--bordered--tertiary button--round">BUTTON BORDERED TERTIARY</a>
                        <a href="" class="button button--bordered--tertiary">BUTTON BORDERED TERTIARY</a>
                    </p>
                    <p>
                        <a href="" class="button button--success">BUTTON SUCCESS</a>
                        <a href="" class="button button--success button--round">BUTTON SUCCESS ROUND</a>
                        <a href="" class="button button--bordered--success button--round">BUTTON BORDERED SUCCESS</a>
                        <a href="" class="button button--bordered--success">BUTTON BORDERED SUCCESS</a>
                    </p>
                    <p>
                        <a href="" class="button button--warning">BUTTON WARNING</a>
                        <a href="" class="button button--warning button--round">BUTTON WARNING ROUND</a>
                        <a href="" class="button button--bordered--warning button--round">BUTTON BORDERED WARNING</a>
                        <a href="" class="button button--bordered--warning">BUTTON BORDERED WARNING</a>
                    </p>
                    <p>
                        <a href="" class="button button--error">BUTTON ERROR</a>
                        <a href="" class="button button--error button--round">BUTTON ERROR ROUND</a>
                        <a href="" class="button button--bordered--error button--round">BUTTON BORDERED ERROR</a>
                        <a href="" class="button button--bordered--error">BUTTON BORDERED ERROR</a>
                    </p>

                    <p>
                        <a href="" class="button button--disabled">BUTTON DISABLED</a>
                        <a href="" class="button button--disabled button--round">BUTTON DISABLED ROUND</a>
                    </p>

                    <blockquote>
                        <p>
                            Paragraph inside Blockquote: Nam libero leo, elementum in, dapibus a, suscipit vitae, purus. Duis arcu. Integer dignissim fermentum enim. Morbi convallis felis vel nibh. Sed scelerisque sagittis lorem.
                        </p>
                    </blockquote>

                    <blockquote class="blockquote--secondary">
                        <p>
                            Paragraph inside Blockquote class="blockquote--secondary": Nam libero leo, elementum in, dapibus a, suscipit vitae, purus. Duis arcu. Integer dignissim fermentum enim. Morbi convallis felis vel nibh. Sed scelerisque sagittis lorem.
                        </p>
                    </blockquote>

                    <blockquote class="blockquote--tertiary">
                        <p>
                            Paragraph inside Blockquote class="blockquote--tertiary": Nam libero leo, elementum in, dapibus a, suscipit vitae, purus. Duis arcu. Integer dignissim fermentum enim. Morbi convallis felis vel nibh. Sed scelerisque sagittis lorem.
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


    <% include Footer %>

    <% if $SiteConfig.GoogleTagManagerID %>
        <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id={$SiteConfig.GoogleTagManagerID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
    <% end_if %>
</div>
</body>
</html>
