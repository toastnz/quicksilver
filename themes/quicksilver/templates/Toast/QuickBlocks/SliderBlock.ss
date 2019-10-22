<section class="sliderBlock contentBlock [ js-sliderGallery ]" data-block-id="{$ID}">
    <div class="sliderBlock__wrap row">
        <div class="column">
            <div class="sliderBlock__wrap__slider [ js-sliderGallery--main ]">
                <% loop $GalleryImages %>
                    <div class="sliderBlock__wrap__nav__item column">
                        <% if $GalleryImage %>
                            <img class="sliderBlock__wrap__nav__item__media" src="{$GalleryImage.URL}" alt="$Title" title="$Title">
                        <% else %>
                            <img class="sliderBlock__wrap__nav__item__media" src="https://via.placeholder.com/1920x1080" alt="$Title" title="$Title">
                        <% end_if %>
                    </div>
                <% end_loop %>
            </div>
            
            <div class="sliderBlock__wrap__nav row sm-up-3 md-up-4 xmd-up-5 lg-up-6 [ js-sliderGallery--nav ]">
                <% loop $GalleryImages %>
                    <div class="sliderBlock__wrap__nav__item column">
                        <% if $GalleryImage %>
                            <img class="sliderBlock__wrap__nav__item__media" src="{$GalleryImage.Fill(200,200).URL}" alt="$Title" title="$Title">
                        <% else %>
                            <img class="sliderBlock__wrap__nav__item__media" src="https://via.placeholder.com/200x200" alt="$Title" title="$Title">
                        <% end_if %>
                    </div>
                <% end_loop %>
            </div>
        </div>
    </div>
</section>
