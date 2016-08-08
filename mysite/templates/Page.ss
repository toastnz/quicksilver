<!doctype html>
<html lang="en">
<head>
    <% include Meta %>
</head>

<body class="$Classname $URLSegment" data-classname="$Classname" data-title="$Title" data-url-segment="$URLSegment">

    <% include TypeSettings %>

<div class="pageWrap">
    <% include Header %>
    <% include StyleGuide %>
    <div class="layout">
        $Layout
    </div>
    <% include Footer %>
</div>

    <%--<% require javascript('mysite/dist/js/output.js') %>--%>


</body>
</html>
