<nav class="offCanvas">

    <ul class="offCanvas__menu">
        <% loop $Menu(1) %>
            <li class="offCanvas__menu__item">
                <a href="$Link" class="offCanvas__menu__item__link">
                    $MenuTitle <% if $Children %><span>$SVG('arrow-right')</span> <% end_if %>
                </a>
                <%--<% if $Children %>--%>
                <%--<ul class="offCanvas__menu">--%>
                <%--<% loop $Children %>--%>
                <%--<li>--%>
                <%--<a href="$Link" class="js-menu-2 no-children">--%>
                <%--About Us--%>
                <%--</a>--%>
                <%--</li>--%>
                <%--<% end_loop %>--%>
                <%--</ul>--%>
                <%--<% end_if %>--%>
            </li>
        <% end_loop %>
    </ul>

    <div class="offCanvas__search">
        $SearchForm
    </div>
</nav>
