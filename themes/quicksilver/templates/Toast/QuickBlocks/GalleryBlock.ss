<section class="galleryBlock contentBlock">
    <% if $Heading || $Summary %>
        <% include Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="galleryBlock__wrap row md-up-2 xmd-up-3 lg-up-4 centered">
        <% loop $GalleryImages %>
            <div class="column">
                <a href="#Title" class="galleryBlock__wrap__item">
                    <img src="{$GalleryImage.Fill(200,200).URL}" alt="$Title" class="galleryBlock__wrap__item__media">
                </a>
                <h4>$Title</h4>
            </div>
        <% end_loop %>
    </div>
</section>
