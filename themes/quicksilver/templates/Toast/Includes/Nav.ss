<ul class="nav unstyled">
    <% loop $MenuSet('Main').MenuItems %>
        <li class="nav__item">
            <a href="{$Link}" class="{$LinkingMode} nav__item__link link">{$MenuTitle}</a>
            <%-- <% if $Children %>
                <ul class="header__menu__item__child">
                    <% loop $Children %>
                        <li class="header__menu__item__child__item">
                            <a href="$Link" class="$LinkingMode header__menu__item__child__item__link">$MenuTitle</a>
                        </li>
                    <% end_loop %>
                </ul>
            <% end_if %> --%>
        </li>
    <% end_loop %>
</ul>