<%----------------------------------------------------------------
Image Block
----------------------------------------------------------------%>
<div class="contentBlock imageBlock">
    <div class="imageBlock__wrap row">
        <div class="column">

            <% with $Image %>
                <img class="imageBlock__wrap__image" src="{$Fit(1280,800).URL}" alt="{$Title}">
            <% end_with %>
        </div>

    </div>
</div>
