<%----------------------------------------------------------------
Image Block
----------------------------------------------------------------%>
<div class="contentBlock imageBlock">
    <div class="contentBlock__wrap imageBlock__wrap row">
        <div class="column">

            <%----------------------------------------------------------------
            Image Block
            ----------------------------------------------------------------%>
            <picture>
                <source media="(min-width: 1200px)" srcset="$Image.FocusFill(1920,1080).URL">
                <source media="(min-width: 800px)" srcset="$Image.FocusFill(960,540).URL">
                <source media="(min-width: 320px)" srcset="$Image.FocusFill(480,270).URL">
                <img src="$Image.FocusFill(1920,1080).URL" alt="$Image.Title">
            </picture>
        </div>

    </div>
</div>
