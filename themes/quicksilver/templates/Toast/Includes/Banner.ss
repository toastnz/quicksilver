<% if $BannerImages %>
    <section class="banner" data-equalize>
        <div class="[ js-slider--hero ]">
            <% loop $BannerImages %>
                <div class="banner__item" data-parallax>
                    <% if $SliderImage %>
                        <div class="banner__item__background" data-parallax-watch style="background-image: url('{$SliderImage.URL}');"></div>
                    <% end_if %>

                    <% if $Content || $Title %>
                        <div class="banner__item__wrap height alignContent">
                            <div class="verticalAlign">
                                <div class="row">
                                    <div class="banner__item__wrap__content column xmd-7 heroContent" data-equalize-watch>
                                    <% if $Title %>
                                        <h1>$Title</h1>
                                    <% end_if %>
                                    <% if $Content %>
                                        $Content
                                    <% end_if %>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <% end_if %>
                </div>
            <% end_loop %>
        </div>
    </section>
<% end_if %>
