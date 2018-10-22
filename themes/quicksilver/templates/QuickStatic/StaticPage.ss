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

    <% if not $IsLive %>
        <div class="navigator">
            <div class="navigator__toggle">+</div>
            <div class="navigator__items">
                <% loop $AllStaticPages %>
                    <a href="$Link" class="navigator__items__link">$MenuTitle</a>
                <% end_loop %>
            </div>
        </div>
    <% end_if %>

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
