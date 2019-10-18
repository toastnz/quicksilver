<div class="post-summary">

	<h2>
		<a href="$Link" title="<%t SilverStripe\\Blog\\Model\\Blog.ReadMoreAbout "Read more about '{title}'..." title=$Title %>">
		    <% if $MenuTitle %>$MenuTitle<% else %>$Title<% end_if %>
		</a>
	</h2>

    <% if $FeaturedImage %>
	<p class="post-image">
		<a href="$Link" title="<%t SilverStripe\\Blog\\Model\\Blog.ReadMoreAbout "Read more about '{title}'..." title=$Title %>">
			$FeaturedImage.ScaleWidth(795)
		</a>
	</p>
	<% end_if %>

	<% if $Summary %>
		$Summary
	<% else %>
		<p>$Excerpt</p>
	<% end_if %>
	    <p>
			<a href="$Link">
				<%t SilverStripe\\Blog\\Model\\Blog.ReadMoreAbout "Read more about '{title}'..." title=$Title %>
			</a>
		</p>

	<% include SilverStripe\\Blog\\EntryMeta %>
</div>
