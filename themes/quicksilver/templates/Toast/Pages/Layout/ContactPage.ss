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
                <div class="column">
                    $Content
                </div>
            </div>
        </section>

        <section class="contactMap contentBlock">
            <div class="row <% if $FullWidth %>explode collapse<% end_if %>">
                <div class="column">
                    <div class="contactMap__media [ js-map ]" data-map="1,1"></div>
                </div>
            </div>
        </section>
            
    </section>
</article>
