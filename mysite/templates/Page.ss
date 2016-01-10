<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
    <% base_tag %>
    <link rel="stylesheet" href="$Themedir/dist/styles/style.css"/>
    <!--[if (gte IE 6)&(lte IE 9)]>
    <link rel="stylesheet" href=$Themedir/dist/styles/style.ie.css"/>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <![endif]-->
    <%-- Custom type to be inserted here --%>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800,700,300,600" rel="stylesheet" type="text/css">

    <% with $SiteConfig %>
    <link rel="shortcut icon" href="$FavIcon.AbsoluteURL"/>
    <% end_with %>

    <% include ToastSEO %>
    <% include OpenGraphMeta %>
    <% include TwitterCardMeta %>

</head>

<body class="$Classname" data-classname="$Classname" data-title="$Title" data-url-segment="$URLSegment">

    <div id="snappy">
        <div id="snappySidebar">
            <div id="modules">
                <div class="module sidebarModule" data-module-type="blockquote">
                    <p class="vertical uppercase center">blockquote</p>
                </div>
                <div class="module sidebarModule" data-module-type="text">
                    <p class="vertical uppercase center">text</p>
                </div>
                <div class="module sidebarModule" data-module-type="video">
                    <p class="vertical uppercase center">video</p>
                </div>
                <div class="module sidebarModule" data-module-type="image">
                    <p class="vertical uppercase center">image</p>
                </div>
                <div class="module sidebarModule" data-module-type="faq">
                    <p class="vertical uppercase center">faq</p>
                </div>
            </div>
        </div>

        <div id="snappyContent">
         <div class="module contentModule">
             <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>
         </div>
         <div class="module contentModule">
             <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
         </div>
         <div class="module contentModule">
             <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
         </div>
     </div>

     <div class="functions">
        <button class="[ js-close-sidebar ]">closeSidebar</button>
        <button class="[ js-open-sidebar ]">openSidebar</button>
        <button class="[ js-toggle-sidebar ]">toggleSidebar</button>
    </div>

</div>

<!--Javascript Includes-->
<script type="text/javascript" src="$Themedir/dist/js/output.js"></script>

</body>
</html>
