
<article class="[ js-filters ]" data-api-url="{$Link}ajaxBlogPosts" data-category-id="$CategoryID" data-posts-per-page="$PostsPerPage">

	<% include Silverstripe\\Blog\\HolderFilters %>

	<section class="blogHolder contentBlock">
		<div class="blogHolder__wrap row sm-up-2 lg-up-3 [ js-ajax-content js-stagger-in-all ]" data-equalize>
			<% if $PaginatedList.Exists %>
				<% loop $PaginatedList %>
					<% include SilverStripe\\Blog\\PostSummary %>
				<% end_loop %>
			<% else %>
			    <div class="text-center">
                    <div class="column">
                        <h3 class="colour--primary">Unfortunately there are no items found for the current filter.</h3>
                    </div>
                </div>
			<% end_if %>
		</div>
		<div class="holderFilters__actions row">
			<div class="column">
				<button class="holderFilters__actions__button button [ js-load-more-button ]">Load More</button>
			</div>
		</div>
	</section>
</article>

<% loop $ContentBlocks.Sort('SortOrder') %>
	$ForTemplate
<% end_loop %>

