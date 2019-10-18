<%----------------------------------------------------------------
Static Header
----------------------------------------------------------------%>

<div class="innerWrap">
    $Content
    $ContactForm
            $UserDefinedForm
            $Form
</div>

<div class="innerWrap">
    <% if $ContactForm.Message %>
        <% with $ContactForm %>
            <p id="{$FormName}_error" class="message $MessageType">$Message</p>
        <% end_with %>
    <% else %>
        $ContactForm
        $UserDefinedForm
        $Form
    <% end_if %>
</div>
