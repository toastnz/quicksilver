<section class="accordionBlock contentBlock [ js-accordion ]">
    <% if $Heading || $Summary %>
        <% include Toast\Includes\Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="accordionBlock__wrap row">
        <div class="column">
            <%-- <% loop $AccordionItems %> --%>
                <div class="accordionBlock__wrap__item">
                    <a href="#" class="accordionBlock__wrap__item__heading [ js-accordion--trigger ]">
                        <h5 class="accordionBlock__wrap__item__heading__title">Heading Here</h5>
                        <div class="plus"></div>
                        <div class="plus"></div>
                    </a>
                    <div class="accordionBlock__wrap__item__content [ js-accordion--target ]">
                        {$Content}
                    </div>
                </div>
            <%-- <% end_loop %> --%>
        </div>
    </div>
</section>