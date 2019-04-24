<div class="innerWrap">
    $Content
</div>

<div class="innerWrap">
    <% if $ContactForm.Message %>
        <% with $ContactForm %>
            <p id="{$FormName}_error" class="message $MessageType">$Message</p>
            $MessageClear
        <% end_with %>
    <% else %>
        $ContactForm
    <% end_if %>
</div>
