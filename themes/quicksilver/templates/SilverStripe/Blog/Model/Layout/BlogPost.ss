<section class="blogPost contentBlock">
    <div class="blogPost__wrap">
        <div class="blogPost__wrap__main">

            <div class="blogPost__header row">
                <div class="column">
                    <h3 class="blogPost__header__title">$Title</h3>
                    <% if $FeaturedImage %>
                        <%-- <div class="blogPost__header__media" style="background-image: url('$FeaturedImage.URL');"></div> --%>
                        $FeaturedImage
                        <% if $ImageCaption %>
                            <p>$ImageCaption</p>
                        <% end_if %>
                    <% end_if %>

                    $Content

                    $Form
                    $CommentsForm
                </div>
            </div>


            <% loop $ContentBlocks.Sort('SortOrder') %>
                $ForTemplate
            <% end_loop %>

            <div class="row">
                <div class="column">
                    <% include SilverStripe\\Blog\\EntryMeta %>
                </div>
            </div>
        </div>
    </div>
</section>




 <%-- <% if $Categories || $RecentPosts.Count %>
    <aside class="blogPost__wrap__aside column xmd-3">
         <% if $Categories %>
            <% include Toast\Includes\BlogPost__Filters %>
            <hr>
         <% end_if %>
         <% if $RecentPosts %>
            <% include Toast\Includes\BlogPost__Recent %>
         <% end_if %>
    </aside>
<% end_if %> --%>