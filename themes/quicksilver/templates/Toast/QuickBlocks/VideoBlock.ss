<%----------------------------------------------------------------
Video Block
----------------------------------------------------------------%>
<div class="contentBlock videoBlock">
    <div class="contentBlock__wrap videoBlock__wrap row">
        <div class="column">

            <%----------------------------------------------------------------
            Video Thumbnail
            ----------------------------------------------------------------%>
            <div class="videoBlock__wrap__thumbnail [ js-video-modal ]" data-video-type="$VideoType" data-video-id="$VideoID">

                <% if $Placeholder%>
                    <img src="{$Placeholder}" alt="placeholder" title="placeholder image">
                <% else_if $Thumbnail %>
                    {$Thumbnail.FocusFill(1280,720)}
                <% end_if %>

                <%----------------------------------------------------------------
                Play Icon
                ----------------------------------------------------------------%>
                <div class="videoBlock__wrap__thumbnail__icon">
                    $SVG('play')
                </div>

            </div>

            <%----------------------------------------------------------------
            Video Caption
            ----------------------------------------------------------------%>
            <% if $Caption %>
                <div class="videoBlock__wrap__caption">
                    <p>{$Caption}</p>
                </div>
            <% end_if %>

        </div>
    </div>
</div>







