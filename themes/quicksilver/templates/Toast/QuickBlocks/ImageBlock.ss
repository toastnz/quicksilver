<% if $Image %>
    <section class="imageBlock contentBlock">
        <div class="imageBlock__wrap row <% if not $ContentWidth %>explode<% end_if %>">
            <div class="column">
            <% if $Image %>
                <% with $Image %>
                    <img src="{$Fit(1100,600).URL}" alt="$Title" class="imageBlock__wrap__media">
                <% end_with %>
            <% else %>
                <img src="https://via.placeholder.com/1920x1000" alt="$Title" class="imageBlock__wrap__media">
            <% end_if %>
            </div>
        </div>
    </section>
<% end_if %>
