<section class="heroBlock contentBlock [ js-slider--hero ]" data-equalize>
    <%-- <% loop $Slides %> --%>
        <div class="heroBlock__item" data-parallax>
            <div class="heroBlock__item__background" data-parallax-watch style="background-image: url('https://via.placeholder.com/1920x1000');"></div>

            <% if $Content || $Heading %>
                <div class="heroBlock__item__wrap height alignContent">
                    <div class="verticalAlign">
                        <div class="row">
                            <div class="heroBlock__item__wrap__content column xmd-7 heroContent" data-equalize-watch>
                                <%-- <% if $Heading %>
                                    <h1>$Heading</h1>
                                <% end_if %> --%>

                                $Content
                            </div>
                        </div>
                    </div>
                </div>
            <% end_if %>
        </div>
    <%-- <% end_loop %> --%>
</section>
