<% if $Tabs %>
    <section class="tabBlock contentBlock [ js-tabs ]">
        <div class="tabBlock__wrap row">
            <ul class="tabBlock__wrap__tabs unstyled column xmd-4 lg-3">
            	<% loop $Tabs %>
    	        	<li class="tabBlock__wrap__tabs__option">
    	        		<a href="#" class="tabBlock__wrap__tabs__option__link [ js-tabs--link <% if $First %>js-active<% end_if %> ]">$Title</a>
    	        	</li>
            	<% end_loop %>
            </ul>
            <div class="tabBlock__wrap__content column xmd-8 lg-9">
            	<% loop $Tabs %>
            	    <div class="tabBlock__wrap__content__item [ js-tabs--item <% if $First %>js-active<% end_if %> ]">
            	    	$Content
            	    </div>
            	<% end_loop %>
            </div>
        </div>
    </section>
<% end_if %>