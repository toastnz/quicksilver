<section class="downloadsBlock contentBlock">
    <% if $Heading || $Summary %>
        <% include Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="downloadsBlock__wrap row md-up-2 lg-up-3 centered">
        <div class="column">
            <% loop $Files %>
                <a href="{$DownloadLink}" download class="downloadsBlock__wrap__item">
                    <div class="downloadsBlock__wrap__item__media" style="background-image: url('https://via.placeholder.com/640x480');"></div>
                    <div class="downloadsBlock__wrap__item__heading">
                        <h5 class="downloadsBlock__wrap__item__heading__title">$Title</h5>
                        <div class="icon">$SVG('download')</div>
                    </div>
                </a>
            <% end_loop %>
        </div>
    </div>
</section>
