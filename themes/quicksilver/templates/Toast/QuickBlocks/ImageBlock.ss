<%----------------------------------------------------------------
Image Block
----------------------------------------------------------------%>
<div class="contentBlock imageBlock">
    <div class="contentBlock__wrap imageBlock__wrap row">
        <div class="column">

            <%----------------------------------------------------------------
            Image Block
            ----------------------------------------------------------------%>
            <% if $Placeholder %>
                <img class="imageBlock__wrap__image" src="{$Placeholder}" alt="Placeholder Image" title="Placeholder Image">
            <% else %>
                <% with $Image %>
                    <img class="imageBlock__wrap__image" src="{$Fit(1280,800).URL}" alt="{$Title}">
                <% end_with %>
            <% end_if %>
        </div>

    </div>
</div>
