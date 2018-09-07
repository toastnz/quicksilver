

<div class="header">
    <div class="innerWrap">

        <a href="$BaseURL" class="header__logo">
            $SVG('logo')
        </a>

        <nav>
            <ul class="header__menu">
                <% loop $Menu(1) %>
                    <li class="header__menu__item">
                        <a href="$Link" class="$LinkingMode header__menu__item__link">$MenuTitle</a>
                        <% if $Children %>
                            <ul class="header__menu__item__child">
                                <% loop $Children %>
                                    <li class="header__menu__item__child__item">
                                        <a href="$Link" class="$LinkingMode header__menu__item__child__item__link">$MenuTitle</a>
                                    </li>
                                <% end_loop %>
                            </ul>
                        <% end_if %>
                    </li>
                <% end_loop %>
            </ul>
        </nav>

        <% include QuickStatic\OffCanvas %>

        <div class="header__navburger [ js-mobile-nav ]">
            <b></b>
            <b></b>
            <b></b>
            Menu
        </div>

    </div>
</div>

