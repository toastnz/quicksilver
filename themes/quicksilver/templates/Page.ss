<!doctype html>
<html lang="en">
  <head>
    <% include Toast\Meta %>
  </head>
  <body class="$Classname" <% if $GoogleMapsApiKey %>data-maps-api-key="$GoogleMapsApiKey"<% end_if %> data-classname="$Classname" data-title="$Title" data-url-segment="$URLSegment" data-page-template="$Classname" data-equalize="header">

    <%------------------------------------------------------------------
    Type Settings Inclusion
    ------------------------------------------------------------------%>
    
    <%-- <% include Type %> --%>

    <%------------------------------------------------------------------
    Type Wrapper
    ------------------------------------------------------------------%>

    <div class="body type page">

      <% include Toast\Header %>
      <% include Toast\Banner %>

      $Breadcrumbs

      <% if $Sidebar %>
        <% include Toast\Includes\Sidebar %>
      <% end_if %>

      <section class="contentBlocks">
        $Layout
      </section>

      <% include Toast\Footer %>
    </div>


    <% if $SiteConfig.GoogleTagManagerID %>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id={$SiteConfig.GoogleTagManagerID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>
    <% end_if %>

    <% require javascript("themes/quicksilver/dist/scripts/main.js") %>
  </body>
</html>
