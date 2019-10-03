<section class="downloadBlock contentBlock" data-equalize>
    <% if $Heading || $Summary %>
        <% include Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="downloadBlock__wrap row md-up-2 lg-up-3 centered">
        <% loop $Files %>
            <div class="column">
                <a href="{$DownloadLink}" download class="downloadBlock__wrap__item">
                    <div class="downloadBlock__wrap__item__media" style="background-image: url('https://via.placeholder.com/640x480');"></div>
                    <div class="downloadBlock__wrap__item__heading" data-equalize-watch>
                        <h5 class="downloadBlock__wrap__item__heading__title">$Title</h5>
                        <div class="icon">$SVG('download')</div>
                    </div>
                </a>
            </div>
        <% end_loop %>
    </div>
</section>
