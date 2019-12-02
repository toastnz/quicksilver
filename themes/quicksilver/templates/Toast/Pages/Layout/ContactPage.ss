<article class="page">
    <% if $SiteConfig.Sidebar %>
        <% include Toast\Includes\Sidebar %>
    <% end_if %>

    <section class="contentBlocks">

        <% loop $ContentBlocks.Sort('SortOrder') %>
            $ForTemplate
        <% end_loop %>

        <section class="quickBlock contentBlock">
            <div class="quickBlock__wrap row">
                <% if $ContactContent %>
                    <div class="column xmd-6 lg-4">
                        $ContactContent
                    </div>
                <% else %>
                    <div class="column">
                        $Content
                    </div>
                <% end_if %>
            </div>
        </section>
        
        <% if $SiteConfig.GoogleMapsApiKey && $Map %>
            <section class="contactMap contentBlock">
                <div class="row <% if $FullWidth %>explode collapse<% end_if %>">
                    <div class="column">
                        <div class="contactMap__media [ js-map ]" data-map="$Latitude,$Longitude"></div>
                    </div>
                </div>
            </section>
        <% end_if %>

    </section>
</article>
