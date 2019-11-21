<!doctype html>
<html lang="en">
<head>
    <% include Toast/Meta %>
</head>
<body class="$Classname" <% if $GoogleMapsApiKey %>data-maps-api-key="$GoogleMapsApiKey"<% end_if %> data-classname="$Classname" data-title="$Title" data-url-segment="$URLSegment">
    
   
    <%------------------------------------------------------------------
    Type Settings Inclusion
    ------------------------------------------------------------------%>
    
    <% include Type %>

    <%------------------------------------------------------------------
    Type Wrapper
    ------------------------------------------------------------------%>

    <div class="type">

        $Layout

    </div>

    <% if $SiteConfig.GoogleTagManagerID %>
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id={$SiteConfig.GoogleTagManagerID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
    <% end_if %>

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


 <canvas class="animation" id="animation"></canvas>
</body>
</html>
