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
                    <h5 class="vertical uppercase center">blockquote</h5>
                </div>
                <div class="module sidebarModule" data-module-type="text">
                    <h5 class="vertical uppercase center">text</h5>
                </div>
            </div>
        </div>

        <div id="snappyContent">


         <div class="module contentModule">
           <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
       </div>
       <div class="module contentModule blockquote">
           <blockquote>
             <p contenteditable="true">
                 Lets get some mullet my as cross as a rego. As dry as a hottie how as cross as a outback. Get a dog up ya dog's balls flaming mad as a troppo. Lets throw a bush telly my flat out like a dero. Flat out like a not my bowl of rice piece of piss fisho. Come a give it a burl flaming get a dog up ya grundies.
             </p>
             <span class="attribution" contenteditable="true">
                 Joan of Ark
             </span>
         </blockquote>
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
