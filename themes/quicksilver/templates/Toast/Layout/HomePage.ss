<div class="innerWrap">
    $Content
</div>

<% loop $ContentBlocks.Sort('SortOrder') %>
    $ForTemplate
<% end_loop %>
