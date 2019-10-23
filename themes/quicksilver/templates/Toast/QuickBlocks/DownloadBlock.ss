<section class="downloadBlock contentBlock" data-equalize>
    <% if $Heading || $Summary %>
        <% include Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="downloadBlock__wrap row">
        <div class="column">
            <% loop $Files %>
                <%-- <div class=""> --%>
                    <a href="{$DownloadLink}" download class="column downloadBlock__wrap__item">
                        <div class="downloadBlock__wrap__item__heading" data-equalize-watch>
                            <h5 class="downloadBlock__wrap__item__heading__title title">$Title</h5>
                            <div class="icon">$SVG('download')</div>
                        </div>
                    </a>
                <%-- </div> --%>
            <% end_loop %>
        </div>
    </div>
</section>
