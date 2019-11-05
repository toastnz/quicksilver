<% if $Items %>
    <section class="linkBlock contentBlock" data-equalize>
        <div class="linkBlock__wrap row md-up-2 xmd-up-$Columns">
        	<% loop $Items %>
        		<a href="$Link.LinkURL" class="linkBlock__wrap__item column">
                    <% if $Image %>
                        <div class="linkBlock__wrap__item__media" style="background-image: url('{$Image.fill(640,640).URL}');"></div>
                    <% else %>
                        <div class="linkBlock__wrap__item__media" style="background-image: url('https://via.placeholder.com/640x640');"></div>
                    <% end_if %>
        			<div class="linkBlock__wrap__item__details" data-equalize-watch>
            			<h5>$Title</h5>
            			$Content
        			</div>
        			<span class="linkBlock__wrap__item__link link">Read more</span>
        		</a>
        	<% end_loop %>
    	</div>
    </section>
<% end_if %>