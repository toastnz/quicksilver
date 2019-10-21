<section class="imageBlock contentBlock">
    <% if $Heading || $Summary %>
        <% include Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="imageBlock__wrap row">
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
