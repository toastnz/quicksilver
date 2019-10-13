<!doctype html>
<html lang="en">
  <head>
    <% include Meta %>
  </head>
  <body class="$Classname" <% if $GoogleMapsApiKey %>data-maps-api-key="$GoogleMapsApiKey"<% end_if %> data-classname="$Classname" data-title="$Title" data-url-segment="$URLSegment" data-page-template="$Classname" data-equalize="header">

    <% include Header %>
    <% include Banner %>

    <%-- <% include Toast\QuickBlocks\AccordionBlock %>
    <% include Toast\QuickBlocks\DownloadBlock %>
    <% include Toast\QuickBlocks\ImageBlock %>
    <% include Toast\QuickBlocks\HeroBlock %>
    <% include Toast\QuickBlocks\GalleryBlock %>
    <% include Toast\QuickBlocks\TabBlock %>
    <% include Toast\QuickBlocks\SplitBlock %>
    <% include Toast\QuickBlocks\VideoBlock %> --%>

    <%-- <% include Toast\QuickBlocks\ColumnBlock %>     --%>

    $Layout

    <% include Footer %>

    <% if $SiteConfig.GoogleTagManagerID %>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id={$SiteConfig.GoogleTagManagerID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>
    <% end_if %>
    
    <% require javascript("themes/quicksilver/dist/scripts/app.js") %>
  </body>
</html>
