<!doctype html>
<html lang="en">
<head>
    <% include Meta %>
</head>
<body class="$Classname"
      <% if $GoogleMapsApiKey %>data-maps-api-key="$GoogleMapsApiKey"<% end_if %>
      data-classname="$Classname"
      data-title="$Title"
      data-url-segment="$URLSegment">
<div class="tingle-content-wrapper">

    <% include QuickStatic\Header %>

    $Layout

    <% include QuickStatic\Footer %>

    <% if $SiteConfig.GoogleTagManagerID %>
        <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id={$SiteConfig.GoogleTagManagerID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
    <% end_if %>
</div>
</body>
</html>
