<%----------------------------------------------------------------
Download Block
----------------------------------------------------------------%>
<div class="contentBlock downloadBlock <% if $Fullwidth %>downloadBlock--fullwidth<% end_if %>">
    <div class="contentBlock__wrap downloadBlock__wrap row">
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
                            <a href="{$DownloadLink}" title="{$Title}" download="$Title" class="downloadBlock__wrap__list__item__link">

                                <div class="downloadBlock__wrap__list__item__link__icon">
                                    $SVG('download')
                                </div>

                                <p class="downloadBlock__wrap__list__item__link__details">
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