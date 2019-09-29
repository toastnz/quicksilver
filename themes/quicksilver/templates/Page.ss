<!doctype html>
<html lang="en">
<head>
    <% include Toast\Meta %>
</head>
<body class="$Classname"
      <% if $GoogleMapsApiKey %>data-maps-api-key="$GoogleMapsApiKey"<% end_if %>
      data-classname="$Classname"
      data-title="$Title"
      data-url-segment="$URLSegment">
<div class="tingle-content-wrapper">

    <% include Toast\Header %>

    $Layout

    <% include Toast\Footer %>

    <% if $SiteConfig.GoogleTagManagerID %>
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id={$SiteConfig.GoogleTagManagerID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
    <% end_if %>
</div>
</body>
</html>
