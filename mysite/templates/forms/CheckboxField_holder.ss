<div id="$Name" class="input-wrap input-wrap__<% if $extraClass %> $extraClass<% end_if %> field <% if $extraClass %> $extraClass<% end_if %>">
    $Field
    <label class="right" for="$ID">$Title</label>
    <% if $Message %><span class="message $MessageType">$Message</span><% end_if %>
    <% if $Description %><span class="description">$Description</span><% end_if %>
</div>
