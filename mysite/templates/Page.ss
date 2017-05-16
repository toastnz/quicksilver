<!doctype html>
<html lang="en">
<head>
    <% include Meta %>
</head>
<body class="$Classname $URLSegment"
      data-classname="$Classname"
      data-title="$Title"
      data-url-segment="$URLSegment">

    <% if $URLSegment != 'Security' %>
        <% include Header %>
    <% end_if %>

    $Layout

    <% if $URLSegment != 'Security' %>
        <% include Footer %>
    <% end_if %>

    <% if $SiteConfig.GoogleTagManagerID %>
    <!-- Google Tag Manager (noscript) -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id={$SiteConfig.GoogleTagManagerID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
    <% end_if %>
</body>
</html>
