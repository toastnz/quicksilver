<section class="columnBlock paddingBlock" <% if $Columns >= 2 %>data-equalize<% end_if %>>
    <% if $Heading || $Summary %>
        <% include Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="columnBlock__wrap row <% if $Items.Count() >= 2 %>xmd-up-2 lg-up-{$Columns}<% end_if %>" >
        <% loop $Items %>
            <div class="columnBlock__wrap__item column">
                <div class="columnBlock__wrap__item__content">
                	<div data-equalize-watch>
	                    <% if $Title %>
	                        <h6 class="columnBlock__wrap__item__content__heading">{$Title}</h6>
	                    <% end_if %>

	                    <p>$Summary</p>

	                    <% if $Link %>
	                        <a href="$Link.LinkURL" class="button button--bordered">$Link.Title</a>
	                    <% end_if %>
                	</div>
                </div>
            </div>
        <% end_loop %>
    </div>
</section>