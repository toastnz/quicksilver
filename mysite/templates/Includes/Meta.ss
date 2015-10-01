<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
<title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> | $SiteConfig.Title</title>
$MetaTags(false)
<% base_tag %>
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800,700,300,600" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="$Themedir/dist/styles/style.css"/>
<!--[if (gte IE 6)&(lte IE 9)]>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
<link rel="stylesheet" href=$Themedir/dist/styles/style.ie.css"/>
<![endif]-->
<% with $SiteConfig %>
    <% if $FavIcon %>
        <link rel="shortcut icon" href="$FavIcon.AbsoluteURL"/>
    <% else %>
        <link rel="shortcut icon" href="{$ThemeDir}/ico/favicon.ico"/>
    <% end_if %>
    <% if $AppleTouchIcon144 %>
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="$AppleTouchIcon144.AbsoluteURL">
        <meta name="msapplication-TileImage" content="$AppleTouchIcon144.AbsoluteURL"/>
    <% else %>
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="{$ThemeDir}/ico/apple-touch-icon-144-precomposed.png">
        <meta name="msapplication-TileImage" content="{$ThemeDir}/ico/apple-touch-icon-144-precomposed.png"/>
    <% end_if %>
    <% if $AppleTouchIcon114 %>
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="$AppleTouchIcon114.AbsoluteURL">
    <% else %>
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="{$ThemeDir}/ico/apple-touch-icon-144-precomposed.png">
    <% end_if %>
    <% if $AppleTouchIcon72 %>
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="$AppleTouchIcon72.AbsoluteURL">
    <% else %>
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="{$ThemeDir}/ico/apple-touch-icon-72-precomposed.png">
    <% end_if %>
    <% if $AppleTouchIcon57 %>
        <link rel="apple-touch-icon-precomposed" href="$AppleTouchIcon57.AbsoluteURL">
    <% else %>
        <link rel="apple-touch-icon-precomposed" href="{$ThemeDir}/ico/apple-touch-icon-57-precomposed.png">
    <% end_if %>
<% end_with %>
