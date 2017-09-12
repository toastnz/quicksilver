<nav class="offCanvas">
    $SVG('logo')
    <ul class="offCanvas__menu">
        <% loop $Menu(1) %>
            <li class="offCanvas__menu__item">
                <a href="$Link" class="offCanvas__menu__item__link $LinkingMode">
                    $MenuTitle <% if $Children %><span class="[ js-toggle-nav ]">$SVG('arrow-right')</span> <% end_if %>
                </a>
                <% if $Children %>
                    <ul class="offCanvas__submenu">
                        <% loop $Children %>
                            <li class="offCanvas__submenu__item">
                                <a href="$Link" class="offCanvas__submenu__item__link $LinkingMode">
                                    $MenuTitle
                                </a>
                            </li>
                        <% end_loop %>
                    </ul>
                <% end_if %>
            </li>
        <% end_loop %>
    </ul>

    <div class="offCanvas__search">
        $SearchForm
    </div>
</nav>
