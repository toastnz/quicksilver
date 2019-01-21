<%----------------------------------------------------------------
Download Block
----------------------------------------------------------------%>
<div class="contentBlock downloadBlock">
    <div class="downloadBlock__wrap row">
        <div class="column">

            <%----------------------------------------------------------------
            Download Block Files
            ----------------------------------------------------------------%>
            <% if $Files %>

                <ul class="downloadBlock__wrap__list unstyled">
                    <% loop $Files %>

                        <%----------------------------------------------------------------
                        Download Block Item
                        ----------------------------------------------------------------%>
                        <li class="downloadBlock__wrap__list__item">
                            <a href="{$DownloadLink}" title="{$Title}" download="$Title">

                                <div class="downloadBlock__wrap__item__icon">
                                    $SVG('download')
                                </div>

                                <p class="downloadBlock__wrap__list__item__details">
                                    <strong>{$Title}</strong>{$FileInfo}
                                </p>
                            </a>

                        </li>

                    <% end_loop %>

                </ul>
            <% end_if %>

        </div>
    </div>
</div>
