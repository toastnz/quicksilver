<% if $GalleryImages %>
    <section class="sliderBlock contentBlock [ js-sliderGallery ]" data-block-id="{$ID}">
        <div class="sliderBlock__wrap row">
            <div class="column">
                <div class="sliderBlock__wrap__slider row">
                    <div class="[ js-sliderGallery--main ]">
                        <% loop $GalleryImages %>
                            <div class="sliderBlock__wrap__slider__item column">
                                <% if $GalleryImage %>
                                    <div class="sliderBlock__wrap__slider__item__media" style="background-image: url('{$GalleryImage.URL}');"></div>
                                <% else %>
                                    <img class="sliderBlock__wrap__slider__item__media" src="https://via.placeholder.com/1920x1080" alt="$Title" title="$Title">
                                <% end_if %>
                            </div>
                        <% end_loop %>
                    </div>
                </div>
                <% if $GalleryImages.Count() >= 2 %>
                    <div class="sliderBlock__wrap__nav">
                        <div class="[ js-sliderGallery--nav init-up-3 sm-up-4 xmd-up-5 lg-up-6 xl-up-7 ]">
                            <% loop $GalleryImages %>
                                <div class="sliderBlock__wrap__nav__item [ js-sliderGallery--nav-item ]">
                                    <% if $GalleryImage %>
                                        <div class="sliderBlock__wrap__nav__item__media" style="background-image: url('{$GalleryImage.Fill(200,200).URL}');"></div>
                                    <% else %>
                                        <div class="sliderBlock__wrap__nav__item__media" style="background-image: url('https://via.placeholder.com/200x200');"></div>
                                    <% end_if %>
                                </div>
                            <% end_loop %>
                        </div>
                    </div>
                <% end_if %>
            </div>
        </div>
    </section>
<% end_if %>


<%-- <section class="galleryBlock contentBlock [ js-gallery ]" data-block-id="{$ID}"> --%>
<%--     <% if $Heading || $Summary %>
        <% include Toast\Includes\Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="galleryBlock__wrap row md-up-2 xmd-up-3 lg-up-4 centered">
        <% loop $GalleryImages %>
        <div class="column">
            <a href="#Title" class="galleryBlock__wrap__item">
            <% if $GalleryImage %>
                <img class="galleryBlock__wrap__item__media [ js-gallery--thumbnail ]" src="{$GalleryImage.Fill(200,200).URL}" alt="$Title" title="$Title">
            <% else %>
                <img class="galleryBlock__wrap__item__media [ js-gallery--thumbnail ]" src="https://via.placeholder.com/200x200" alt="$Title" title="$Title">
            <% end_if %>
            </a>
            <h6>$Title</h6>
        </div>
        <% end_loop %>
    </div>
</section>
<section class="galleryModal [ js-gallery--modal ]" data-block-id="{$ID}">
    <button class="js-close"></button>
    <div class="galleryModal__wrap row alignContent">
        <div class="galleryModal__wrap__content column verticalAlign">
            <div class="galleryModal__wrap__content__slider row">
                <div class="column [ js-slider--gallery ]">
                    <% loop $GalleryImages %> --%>
                        <%-- <% if $Video %>
                            <div class="galleryModal__wrap__content__slider__item">
                                <a href="#" class="galleryModal__wrap__content__slider__item__media [ js-embed ]" data-video="https://www.youtube.com/watch?v=xl96OgXwUBk" style="background-image: url('{$GalleryImage.URL}');">
                                    $SVG('play')
                                </a>
                            </div>
                        <% else %> --%>
<%--                             <div class="galleryModal__wrap__content__slider__item">
                                <% if $GalleryImage %>
                                    <div class="galleryModal__wrap__content__slider__item__media" style="background-image: url('{$GalleryImage.URL}');"></div>
                                <% else %>
                                    <div class="galleryModal__wrap__content__slider__item__media" style="background-image: url('https://via.placeholder.com/1920x1000');"></div>
                                <% end_if %>
                            </div> --%>
                        <%-- <% end_if %> --%>
<%--                     <% end_loop %>
                </div>
            </div>
        </div>
    </div>
</section>
 --%>