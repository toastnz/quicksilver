<section class="imageBlock contentBlock">
    <% if $Heading || $Summary %>
        <% include Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="imageBlock__wrap row">
        <div class="column">
            <img src="https://via.placeholder.com/1080x480" alt="$Title" class="imageBlock__wrap__media">
        </div>
    </div>
</section>