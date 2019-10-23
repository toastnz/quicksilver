<section class="quickBlock contentBlock">
    <% if $Heading || $Summary %>
        <% include Toast\Includes\Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="quickBlock__wrap row">
        <div class="column">
            {$Content}
        </div>
    </div>
</section>