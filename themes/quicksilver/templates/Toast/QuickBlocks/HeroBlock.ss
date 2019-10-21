<section class="heroBlock contentBlock" data-equalize>

    <div class="heroBlock__item<% if $ContentWidth %> row<% end_if %>" data-parallax>
        <% if $BackgroundImage %>
            <div class="heroBlock__item__background" data-parallax-watch style="background-image: url('{$BackgroundImage.URL}');"></div>
        <% else %>
            <div class="heroBlock__item__background" data-parallax-watch style="background-image: url('https://via.placeholder.com/1920x1000');"></div>
        <% end_if %>

        <% if $Content || $Title %>
            <div class="heroBlock__item__wrap height alignContent">
                <div class="verticalAlign">
                    <div class="row">
                        <div class="heroBlock__item__wrap__content column xmd-7 heroContent" data-equalize-watch>
                        <% if $Title %>
                            <h1>$Title</h1>
                        <% end_if %>
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

</section>
