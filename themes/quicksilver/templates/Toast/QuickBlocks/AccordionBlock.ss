<div class="contentBlock accordionBlock <% if $Fullwidth %>accordionBlock--fullwidth<% end_if %> [ js-accordion ]">
        <div class="accordionBlock__wrap row">
            <% loop $Children %>
                <div class="accordionBlock__wrap__item column [ js-accordion-item ]">
                    <div class="accordionBlock__wrap__item__header [ js-accordion-trigger ]">
                        <h5><b>$DisplayTitle.UpperCase</b></h5>
                    </div>
                    <div class="accordionBlock__wrap__item__content [ js-accordion-target ]" style="display: none;">
                        <div class="accordionBlock__wrap__item__content__wrap">
                            $Content
                        </div>
                    </div>
                </div>

            <% end_loop %>
        </div>
</div>