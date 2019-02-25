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

                <picture>
                    <source media="(min-width: 1200px)" srcset="$Thumbnail.FocusFill(1920,1080).URL">
                    <source media="(min-width: 800px)" srcset="$Thumbnail.FocusFill(960,540).URL">
                    <source media="(min-width: 320px)" srcset="$Thumbnail.FocusFill(480,270).URL">
                    <img src="$Thumbnail.FocusFill(1920,1080).URL" alt="$Thumbnail.Title">
                </picture>

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







