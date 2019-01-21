<%----------------------------------------------------------------
Split Block
----------------------------------------------------------------%>
<div class="contentBlock splitBlock">
    <div class="splitBlock__wrap row">

        <%----------------------------------------------------------------
        Left Split Block
        ----------------------------------------------------------------%>
        <div class="column xmd-{$LeftWidth}">
            <div class="splitBlock__wrap__content">
                {$LeftContent}
            </div>
        </div>

        <%----------------------------------------------------------------
        Right Split Block
        ----------------------------------------------------------------%>
        <div class="column xmd-{$RightWidth}">
            <div class="splitBlock__wrap__content">
                {$RightContent}
            </div>
        </div>

    </div>
</div>
