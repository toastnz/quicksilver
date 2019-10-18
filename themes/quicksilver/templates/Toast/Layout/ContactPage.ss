<%----------------------------------------------------------------
Static Header
----------------------------------------------------------------%>

<div class="innerWrap">
    <% if $ContactForm.Message %>
        <% with $ContactForm %>
            <p id="{$FormName}_error" class="message $MessageType">$Message</p>
        <% end_with %>
    <% else %>
        $Content
    <% end_if %>
</div>
