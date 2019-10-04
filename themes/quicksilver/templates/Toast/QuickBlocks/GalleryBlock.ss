<section class="galleryBlock contentBlock [ js-gallery ]" data-block-id="{$ID}">
    <% if $Heading || $Summary %>
    <% include Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="galleryBlock__wrap row md-up-2 xmd-up-3 lg-up-4 centered">
        <% loop $GalleryImages %>
        <div class="column">
            <a href="#Title" class="galleryBlock__wrap__item">
                <img class="galleryBlock__wrap__item__media [ js-gallery--thumbnail ]" src="{$GalleryImage.Fill(200,200).URL}" alt="$Title">
            </a>
            <%-- <h4>$Title</h4> --%>
        </div>
        <% end_loop %>
    </div>
</section>
<%-- Modal --%>
<section class="galleryModal [ js-gallery--modal ]" data-block-id="{$ID}">
    <button class="js-close"></button>
    <div class="galleryModal__wrap row alignContent">
        <div class="galleryModal__wrap__content column verticalAlign">
            <div class="galleryModal__wrap__content__slider row [ js-slider--gallery ]">
                <% loop $GalleryImages %>
                    <div class="galleryModal__wrap__content__slider__item column [ js-gallery--item ]">
                        <div class="galleryModal__wrap__content__slider__item__media [ js-gallery--media ]" style="background-image: url('{$GalleryImage.URL}');"></div>
                    </div>
                <% end_loop %>
            </div>
        </div>
    </div>
</section>
