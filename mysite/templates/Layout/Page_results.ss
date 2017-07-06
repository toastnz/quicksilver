<div class="wysiwyg">
    <div class="innerWrap center">
        <h1>$Title</h1>
        <% if $Query %>
            <h2>You searched for <span class="colour--primary">‘{$Query}’</span></h2>
        <% end_if %>
        <p>There are $Results.TotalItems results.<% if $Results.MoreThanOnePage %> You are on page {$Results.CurrentPage} of {$Results.TotalPages}.<% end_if %>
        </p>
    </div>
</div>


<div class="searchResults wysiwyg">
    <div class="innerWrap">
        <% if $Results %>
            <% loop $Results %>
                <% if $File %>
                <a href="{$File.AbsoluteLink}" target="_blank" class="searchResults__item searchResults__item--text" data-aos-offset="50" data-aos="fade-up" data-aos-duration="600">
                <% else_if $PropTitle %>
                <a href="/properties?propId={$ID}" class="searchResults__item searchResults__item--text" data-aos-offset="50" data-aos="fade-up" data-aos-duration="600">
                <% else %>
                <a href="$Link" class="searchResults__item searchResults__item--text" data-aos-offset="50" data-aos="fade-up" data-aos-duration="600">
                <% end_if %>
                <div class="searchResults__item__text">
                    <h6>$MenuTitle</h6>
                    <% if $Summary%>
                        <p>$Summary</p>
                    <% end_if %>
                </div>
            </a>
            <% end_loop %>
        <% end_if %>
    </div>
</div>

<% if $Results.MoreThanOnePage %>
    <div class="pagination wysiwyg">
        <div class="innerWrap">
            <% loop $Results.Pages %>
                <% if $CurrentBool %>
                    <span class="pagination__item pagination__item--current">$PageNum</span>
                <% else %>
                    <a href="$Link" class="pagination__item pagination__item--link">$PageNum</a>
                <% end_if %>
            <% end_loop %>
        </div>
    </div>
<% end_if %>

</div>


