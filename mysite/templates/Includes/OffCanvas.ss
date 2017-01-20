<nav id="nav">

    <%----------------------------------------------------------------------%>
    <%--                            Menu 1                                --%>
    <%----------------------------------------------------------------------%>

    <ul>
        <% loop $Menu(1) %>
            <li data-target-menu="1" class="js-menu-1">
                <a href="#">
                    $MenuTitle <% if $Children %><span>$SVG('arrow-right')</span> <% end_if %>
                </a>
                <% if $Children %>
                    <ul data-menu-id="1">
                        <% loop $Children %>
                            <li>
                                <a href="#" class="js-menu-2 no-children">
                                    About Us
                                </a>
                            </li>
                        <% end_loop %>
                    </ul>
                <% end_if %>
            </li>
        <% end_loop %>
    </ul>
</nav>
