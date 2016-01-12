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

        <div id="wysiwyg">
           <button data-action="bold"><i class="material-icons">format_bold</i></button>
           <button data-action="italic"><i class="material-icons">format_italic</i></button>
           <button data-action="underline"><i class="material-icons">format_underlined</i></button>
           <button data-action="justifyLeft"><i class="material-icons">format_align_left</i></button>
           <button data-action="justifyCenter"><i class="material-icons">format_align_center</i></button>
           <button data-action="justifyRight"><i class="material-icons">format_align_right</i></button>
           <button data-action="justifyFull"><i class="material-icons">format_align_justify</i></button>
           <button data-action="insertUnorderedList"><i class="material-icons">format_list_bulleted</i></button>
           <button data-action="insertOrderedList"><i class="material-icons">format_list_numbered</i></button>
           <a href="#">
               <i class="material-icons">format_size</i>
               <ul class="type">
                   <li><button data-action="h1">Heading 1</button></li>
                   <li><button data-action="h2">Heading 2</button></li>
                   <li><button data-action="h3">Heading 3</button></li>
                   <li><button data-action="h4">Heading 4</button></li>
                   <li><button data-action="h5">Heading 5</button></li>
                   <li><button data-action="h6">Heading 6</button></li>
                   <li><button data-action="p">Paragraph</button></li>
               </ul>
           </a>
           <button data-action="foreColor"><i class="material-icons">format_color_text</i></button>
       </div> 

       <textarea id="output"></textarea>


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


       <div class="module contentModule text" contenteditable="true">
         <p>Lets get some mullet my as cross as a rego. As dry as a hottie how as cross as a outback. Get a dog up ya dog's balls flaming mad as a troppo. Lets throw a bush telly my flat out like a dero. Flat out like a not my bowl of rice piece of piss fisho. Come a give it a burl flaming get a dog up ya grundies.Lets get some mullet my as cross as a rego. As dry as a hottie how as cross as a outback. Get a dog up ya dog's balls flaming mad as a troppo. Lets throw a bush telly my flat out like a dero. Flat out like a not my bowl of rice piece of piss fisho. Come a give it a burl flaming get a dog up ya grundies.</p>
         <p>   Lets get some mullet my as cross as a rego. As dry as a hottie how as cross as a outback. Get a dog up ya dog's balls flaming mad as a troppo. Lets throw a bush telly my flat out like a dero. Flat out like a not my bowl of rice piece of piss fisho. Come a give it a burl flaming get a dog up ya grundies.
         </p>
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
