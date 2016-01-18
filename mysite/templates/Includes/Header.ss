<!--==================================================================-->
<!-- Header -->
<!--==================================================================-->

<header>
    <div class="navburger">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>
    </div>

    $SVG('snappy')
    <nav>
        <ul>
            <% loop $Menu(1) %>
                <li>
                    <a href="$Link">$Title</a> <% if $FirstLast != 'last' %><b>/</b><% end_if %>
                    <% if $Children %>
                        <ul>
                            <% loop $Children %>
                                <li>
                                    <a href="$Link">$Title</a>
                                </li>
                            <% end_loop %>
                        </ul>
                    <% end_if %>
                </li>
            <% end_loop %>
        </ul>
    </nav>
</header>

<div class="off-canvas">
    <ul>
        <% loop $Menu(1) %>
            <li>
                <a href="$Link">$Title</a> <%if $FirstLast != 'last' %><% end_if %>
                <% if $Children %>
                    <ul>
                        <% loop $Children %>
                            <li>
                                <a href="$Link">$Title</a>
                            </li>
                        <% end_loop %>
                    </ul>
                <% end_if %>
            </li>
        <% end_loop %>
    </ul>
</div>



