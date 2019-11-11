<article class="page">
	<% if $SiteConfig.Sidebar %>
		<% include Toast\Includes\Sidebar %>
	<% end_if %>

	<section class="contentBlocks">
		<% loop $ContentBlocks.Sort('SortOrder') %>
		    $ForTemplate
		<% end_loop %>
	</section>
</article>