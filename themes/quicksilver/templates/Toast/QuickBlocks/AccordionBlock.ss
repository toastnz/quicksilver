<%----------------------------------------------------------------
Accordion Block
----------------------------------------------------------------%>
<div class="contentBlock accordionBlock [ js-accordion ]">
    <div class="accordionBlock__wrap row">

        <%----------------------------------------------------------------
        Accordion Block Items
        ----------------------------------------------------------------%>
        <% loop $GroupedItems.GroupedBy('GroupNumber') %>
            <% loop $Children %>

                <div class="accordionBlock__wrap__item column [ js-accordion-item ]">
                    <div class="accordionBlock__wrap__item__header [ js-accordion-trigger ]">
                        <h4>{$DisplayTitle}</h4>
                    </div>

                    <div class="accordionBlock__wrap__item__content [ js-accordion-target ]">
                        <div class="accordionBlock__wrap__item__content__wrap">
                            {$Content}
                        </div>
                    </div>
                </div>

            <% end_loop %>
        <% end_loop %>

    </div>
</div>