<!doctype html>
<html lang="en">
<head>
    <% include Meta %>
</head>

<body class="$Classname $URLSegment" data-classname="$Classname" data-title="$Title" data-url-segment="$URLSegment">

    <% include TypeSettings %>

<div class="pageWrap">
    <% include Header %>
    <div class="">
        <% include StyleGuide %>
        $Layout
    </div>
    <% include Footer %>
</div>

</body>
</html>
