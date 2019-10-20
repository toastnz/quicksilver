<section class="heroBlock contentBlock" data-equalize>
    <div class="[ js-slider--hero ]">
         <% loop $SlideImages %>
            <div class="heroBlock__item" data-parallax>

                <% if $SliderImage %>
                    <div class="heroBlock__item__background" data-parallax-watch style="background-image: url('{$SliderImage.URL}');"></div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                <% end_if %>
            </div>

         <% end_loop %>
    </div>
</section>
