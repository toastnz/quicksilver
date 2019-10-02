<section class="galleryBlock marginBlock">
    <% if $Heading || $Summary %>
        <% include Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="galleryBlock__wrap row md-up-2 xmd-up-3 lg-up-4 centered">
        <%-- <% loop $GalleryImages %> --%>
            <div class="column">
                <a href="#Title" class="galleryBlock__wrap__item">
                    <img src="https://via.placeholder.com/640x480" alt="$Title" class="galleryBlock__wrap__item__media">
                </a>
            </div>
            <div class="column">
                <a href="#Title" class="galleryBlock__wrap__item">
                    <img src="https://via.placeholder.com/640x480" alt="$Title" class="galleryBlock__wrap__item__media">
                </a>
            </div>
            <div class="column">
                <a href="#Title" class="galleryBlock__wrap__item">
                    <img src="https://via.placeholder.com/640x480" alt="$Title" class="galleryBlock__wrap__item__media">
                </a>
            </div>
            <div class="column">
                <a href="#Title" class="galleryBlock__wrap__item">
                    <img src="https://via.placeholder.com/640x480" alt="$Title" class="galleryBlock__wrap__item__media">
                </a>
            </div>
            <div class="column">
                <a href="#Title" class="galleryBlock__wrap__item">
                    <img src="https://via.placeholder.com/640x480" alt="$Title" class="galleryBlock__wrap__item__media">
                </a>
            </div>
            <div class="column">
                <a href="#Title" class="galleryBlock__wrap__item">
                    <img src="https://via.placeholder.com/640x480" alt="$Title" class="galleryBlock__wrap__item__media">
                </a>
            </div>
            <div class="column">
                <a href="#Title" class="galleryBlock__wrap__item">
                    <img src="https://via.placeholder.com/640x480" alt="$Title" class="galleryBlock__wrap__item__media">
                </a>
            </div>
        <%-- <% end_loop %> --%>
    </div>
</section>