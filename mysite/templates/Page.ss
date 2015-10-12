<!doctype html>
<!--
Author: Jaydn de Graaf
Email: jd@pinc.nz
-->
<html lang="en">
<head>
    <% include Meta %>
</head>

<body class="$Classname <% if $URLSegment == 'Security' %> login-page<% end_if %>">

<div id="container">

    <% include Header %>

    $Layout

    <% include Footer %>

</div>

<!--Javascript Includes-->
<script type="text/javascript" src="$Themedir/dist/js/output.js"></script>

</body>
</html>
