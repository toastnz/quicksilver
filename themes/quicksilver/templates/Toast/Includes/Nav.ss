<ul class="nav unstyled">
    <% loop $MenuSet('Main').MenuItems %>
        <li class="nav__item">
            <a href="{$Link}" class="{$LinkingMode} nav__item__link link">{$MenuTitle}</a>
<<<<<<< .merge_file_X7s6yg
            <% if $Children %>
=======
            <% if $Page.DropdownNav && $Children %>
>>>>>>> .merge_file_dKHUKl
                <ul class="nav__item__children navChildren unstyled">
                    <% loop $Children %>
                        <li class="nav__item__children__item">
                            <a href="$Link" class="$LinkingMode nav__item__children__item__link">$MenuTitle</a>
                        </li>
                    <% end_loop %>
                </ul>
            <% end_if %>
        </li>
    <% end_loop %>
</ul>