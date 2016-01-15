<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
    <% base_tag %>
    <link rel="stylesheet" href="$Themedir/dist/styles/style.css"/>
    <!--[if (gte IE 6)&(lte IE 9)]>
    <link rel="stylesheet" href=$Themedir>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <![endif]-->
    <%-- Custom type to be inserted here --%>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800,700,300,600|Lora:400,400italic,700,700italic" rel="stylesheet" type="text/css">
    <%--<link href='https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic' rel='stylesheet' type='text/css'>--%>

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
                <li>
                    <button data-action="h1">Heading 1</button>
                </li>
                <li>
                    <button data-action="h2">Heading 2</button>
                </li>
                <li>
                    <button data-action="h3">Heading 3</button>
                </li>
                <li>
                    <button data-action="h4">Heading 4</button>
                </li>
                <li>
                    <button data-action="h5">Heading 5</button>
                </li>
                <li>
                    <button data-action="h6">Heading 6</button>
                </li>
                <li>
                    <button data-action="p">Paragraph</button>
                </li>
            </ul>
        </a>
        <button data-action="foreColor"><i class="material-icons">format_color_text</i></button>
        <button data-action="insert_link"><i class="material-icons">insert_link</i></button>
    </div>

    <%--<pre><code id="output" class="html"></code></pre>--%>

    <div id="snappySidebar">
        <div class="js-toggle-sidebar sidebar-handle">
            <i class="material-icons">keyboard_arrow_right</i>
        </div>
        <div id="modules">
            <div class="module sidebarModule" data-module-type="blockquote">
                <div class="js-drag"></div>
                <h5 class="vertical uppercase center">blockquote</h5>
            </div>

            <div class="module sidebarModule" data-module-type="text">
                <div class="js-drag"></div>
                <h5 class="vertical uppercase center">text</h5>
            </div>

            <div class="module sidebarModule" data-module-type="divider">
                <div class="js-drag"></div>
                <h5 class="vertical uppercase center">divider</h5>
            </div>

            <div class="module sidebarModule" data-module-type="image">
                <div class="js-drag"></div>
                <h5 class="vertical uppercase center">image</h5>
            </div>

            <div class="module sidebarModule" data-module-type="imagetext">
                <div class="js-drag"></div>
                <h5 class="vertical uppercase center">Image & Text</h5>
            </div>

            <div class="module sidebarModule" data-module-type="video">
                <div class="js-drag"></div>
                <h5 class="vertical uppercase center">video</h5>
            </div>

            <div class="module sidebarModule" data-module-type="accordian">
                <div class="js-drag"></div>
                <h5 class="vertical uppercase center">Accordian</h5>
            </div>
        </div>
    </div>

    <div id="snappyContent">

    </div>

    <div class="dataModal">
        <div class="wrap">
            <textarea spellcheck="false" class="html"></textarea>
            <button class="js-cancel-save-data destructive">Cancel</button>
            <button class="js-save-data constructive">Save</button>
        </div>
    </div>

</div>

<!--Javascript Includes-->
<script type="text/javascript" src="$Themedir/dist/js/output.js"></script>

</body>
</html>
