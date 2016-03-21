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
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800,700,300,600" rel="stylesheet" type="text/css">
    <% with $SiteConfig %>
        <link rel="shortcut icon" href="$FavIcon.AbsoluteURL"/>
    <% end_with %>
    <% include ToastSEO %>
    <% include OpenGraphMeta %>
    <% include TwitterCardMeta %>
</head>

<body class="$Classname $URLSegment" data-classname="$Classname" data-title="$Title" data-url-segment="$URLSegment">

    <% include Header %>
    $Layout
    $Form
    <% include Footer %>

<script type="text/javascript" src="$Themedir/dist/js/output.js"></script>

</body>
</html>
