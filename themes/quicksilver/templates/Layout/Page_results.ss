<div class="searchResultsHeader wysiwyg">
    <div class="innerWrap center">
        <h1>$Title</h1>
        <% if $Query %>
            <p>You searched for <span class="colour--primary">‘{$Query}’</span></p>
        <% end_if %>
        <% if $Results %>
            <% if $Results.Count == 1 %>
                <p>There is 1 result.</p>
            <% else %>
                <p>There are $Results.TotalItems results.<% if $Results.MoreThanOnePage %> You are on page {$Results.CurrentPage} of {$Results.TotalPages}.<% end_if %></p>
            <% end_if %>
        <% end_if %>
        <hr>
    </div>
</div>

<div class="searchResults wysiwyg">
    <div class="innerWrap">
        <div class="flex">
            <% if $Results %>
                <% loop $Results %>
                    <div class="searchResults__item">
                        <h6><a href="$Link">$MenuTitle</a></h6>
                        <% if $Summary%>
                            <p>$Summary</p>
                        <% else %>
                            <p>{$Content.Summary}</p>
                        <% end_if %>
                        <a href="$Link" class="button">READ MORE</a>
                    </div>
                <% end_loop %>
            <% else %>
                <h5>Sorry there are no results for that query</h5>
            <% end_if %>
        </div>
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



