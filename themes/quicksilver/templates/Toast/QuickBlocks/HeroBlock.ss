<section class="heroBlock contentBlock" data-equalize>
    <% if $ContentWidth %><div class="row"><div class="column"><% end_if %>
    <div class="heroBlock__item" data-parallax>

        <% if $BackgroundImage %>
            <div class="heroBlock__item__background" data-parallax-watch style="background-image: url('{$BackgroundImage.URL}');"></div>
        <% end_if %>

        <% if $Content || $Title %>
            <div class="heroBlock__item__wrap height alignContent">
                <div class="verticalAlign">
                    <div class="row">
                        <div class="heroBlock__item__wrap__content column heroContent" data-equalize-watch>
                        <% if $Content %>
                            $Content
                        <% end_if %>
                        <% if $BlockLink %>
                            <% with $BlockLink %>
                                <p><a href="{$LinkURL}" {$TargetAttr} class="heroBlock__copy__wrap__link">$SVG('read-more') {$Title.UpperCase}</a></p>
                            <% end_with %>
                        <% end_if %>
                        </div>
                    </div>
                </div>
            </div>
        <% end_if %>
    </div>
    <% if $ContentWidth %></div></div><% end_if %>
</section>
