<div class="blogSummary">
	<div class="md-up-alignContent">
	    <% if $FeaturedImage %>
		    <div class="blogSummary__media verticalAlign">
		    	<a href="$Link" title="<%t SilverStripe\\Blog\\Model\\Blog.ReadMoreAbout "Read more about '{title}'..." title=$Title %>" class="blogSummary__media__image" style="background-image: url('$FeaturedImage.ScaleWidth(795).URL');"></a>
		    </div>
		<% end_if %>

		<div class="blogSummary__wrap verticalAlign">

			<h4 class="blogSummary__wrap__heading">
				<a href="$Link" title="<%t SilverStripe\\Blog\\Model\\Blog.ReadMoreAbout "Read more about '{title}'..." title=$Title %>">
				    <% if $MenuTitle %>$MenuTitle<% else %>$Title<% end_if %>
				</a>
			</h4>

			<% if $Summary %>
				<p>$Summary</p>
			<% else %>
				<p>$Excerpt</p>
			<% end_if %>
			
			<% include SilverStripe\\Blog\\EntryMeta %>

			<p><a href="$Link" class="redirect--arrow">Read more</a></p>
		</div>
	</div>
</div>