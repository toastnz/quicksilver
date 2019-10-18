<section class="contentBlock">
    <div class="innerWrap">
        $Content
    </div>
</section>

<% loop $ContentBlocks.Sort('SortOrder') %>
    $ForTemplate
<% end_loop %>
