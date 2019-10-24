<section class="downloadBlock contentBlock" data-equalize>
    <div class="downloadBlock__wrap row">
        <div class="column">
            <% loop $Files %>
                <a href="{$DownloadLink}" download class="column downloadBlock__wrap__item">
                    <div class="downloadBlock__wrap__item__heading" data-equalize-watch>
                        <h5 class="downloadBlock__wrap__item__heading__title title">$Title</h5>
                        <div class="icon">$SVG('download')</div>
                    </div>
                </a>
            <% end_loop %>
        </div>
    </div>
</section>
