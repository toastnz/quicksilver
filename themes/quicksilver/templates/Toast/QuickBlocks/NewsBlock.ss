<section class="newsBlock contentBlock" data-equalize>
    <div class="newsBlock__wrap row sm-up-2 md-up-3">
    	<% loop $Items %>
    		<a href="$Link.LinkURL" class="newsBlock__wrap__item column">
    			<div class="newsBlock__wrap__item__media" style="background-image: url('{$Image.fill(640,640).URL}');"></div>
    			<div class="newsBlock__wrap__item__details" data-equalize-watch>
        			<h5>$Title</h5>
        			$Content
    			</div>

    			<span class="newsBlock__wrap__item__link link">Read more</span>
    		</a>
    	<% end_loop %>
	</div>
</section>
