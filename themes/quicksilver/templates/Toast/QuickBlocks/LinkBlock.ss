<section class="linkBlock contentBlock" data-equalize>
    <div class="linkBlock__wrap row md-up-2 xmd-up-3">
    	<% loop $Items %>
    		<a href="$Link.LinkURL" class="linkBlock__wrap__item column">
    			<div class="linkBlock__wrap__item__media" style="background-image: url('{$Image.fill(640,640).URL}');"></div>
    			<div class="linkBlock__wrap__item__details" data-equalize-watch>
        			<h5>$Title</h5>
        			$Content
    			</div>

    			<span class="linkBlock__wrap__item__link link">Read more</span>
    		</a>
    	<% end_loop %>
	</div>
</div>


$Title
$Content

<% loop $Items %>
    $Title
    $Image
<% end_loop %>