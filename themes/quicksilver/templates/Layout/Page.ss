<section class="contentBlock">
    <div class="innerWrap">
        <div class="row">
            $Content
        </div>
    </div>
</section>

<% loop $ContentBlocks.Sort('SortOrder') %>
    $ForTemplate
<% end_loop %>
