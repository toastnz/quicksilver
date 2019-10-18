<section class="blogPost contentBlock">
	<div class="blogPost__wrap row">
     <% if $Categories || $RecentPosts.Count %>
        <aside class="blogPost__wrap__aside column xmd-3">
             <% if $Categories %>
                <% include Toast\Includes\BlogPost__Filters %>
                <hr>
             <% end_if %>
             <% if $RecentPosts %>
                <% include Toast\Includes\BlogPost__Recent %>
             <% end_if %>
        </aside>
    <% end_if %>
        <div class="blogPost__wrap__main column xmd-10 lg-9">

            <div class="blogPost__wrap__main__header">
                <h1>$Title</h1>
                <% include SilverStripe\\Blog\\EntryMeta %>
            </div>

            <% if $FeaturedImage %>
                $FeaturedImage
                <p>$ImageCaption</p>
            <% end_if %>

            $Content

            $Form
            $CommentsForm

        </div>
	</div>
</section>

<% loop $ContentBlocks.Sort('SortOrder') %>
	$ForTemplate
<% end_loop %>


