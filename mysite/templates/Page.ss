<!doctype html>
<html lang="en">
<head>
    <% include Meta %>
</head>

<body class="$Classname $URLSegment" data-classname="$Classname" data-title="$Title" data-url-segment="$URLSegment">
    <%--<% include TypeSettings %>--%>

    <% include Header %>
    <% include StyleGuide %>
<div class="layout">
    $Layout
</div>
    <% include Footer %>

<script type="text/javascript" src="$Themedir/dist/js/output.js"></script>

</body>
</html>
