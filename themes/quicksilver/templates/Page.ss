<!doctype html>
<html lang="en">
  <head>
    <% include Toast\Meta %>
  </head>
  <body class="$Classname" <% if $GoogleMapsApiKey %>data-maps-api-key="$GoogleMapsApiKey"<% end_if %> data-classname="$Classname" data-title="$Title" data-url-segment="$URLSegment" data-page-template="$Classname" data-equalize="header">

    <% include Toast\Header %>

    <%-- <div data-equalize-watch="body"></div> --%>

    <%-- <div data-smooth-scroll> --%>
      <%-- <div data-smooth-scroll--content> --%>
        <% include Toast\Banner %>

        $Breadcrumbs

        $Layout

        <% include Toast\Footer %>
      <%-- </div> --%>
    <%-- </div> --%>

    <% if $SiteConfig.GoogleTagManagerID %>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id={$SiteConfig.GoogleTagManagerID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>
    <% end_if %>

    <% require javascript("themes/quicksilver/dist/scripts/app.js") %>
  </body>
</html>
