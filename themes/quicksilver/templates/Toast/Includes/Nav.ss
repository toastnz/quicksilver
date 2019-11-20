<ul class="nav unstyled">
    <% loop $MenuSet('Main').MenuItems %>
        <li class="nav__item">
            <a href="{$Link}" class="{$LinkingMode} nav__item__link link">{$MenuTitle}</a>
            <% if $Page.DropdownNav && $Children %>
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