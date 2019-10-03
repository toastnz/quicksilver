<section class="galleryBlock contentBlock [ js-gallery ]">
    <% if $Heading || $Summary %>
    <% include Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="galleryBlock__wrap row md-up-2 xmd-up-3 lg-up-4 centered">
        <% loop $GalleryImages %>
        <div class="column">
            <a href="#Title" class="galleryBlock__wrap__item">
                <img src="{$GalleryImage.Fill(200,200).URL}" alt="$Title" class="galleryBlock__wrap__item__media [ js-gallery--item ]">
            </a>
            <h4>$Title</h4>
        </div>
        <% end_loop %>
    </div>

    <%-- Modal --%>
    <div class="galleryModal">
        <button class="js-close"></button>
        <div class="alignContent">
            <div class="verticalAlign">
                <div class="galleryModal__wrap row [ js-slider--gallery ]">
                    <% loop $GalleryImages %>
                        <div class="galleryModal__wrap__content column">
                            <div class="galleryModal__wrap__content__item" style="background-image: url('{$GalleryImage.URL}');"></div>
                        </div>
                    <% end_loop %>
                </div>
            </div>
        </div>
    </div>
</section>
