<aside class="sidebar">
    <nav class="sidebar__nav row">
        <ul class="sidebar__nav__list column unstyled">

            <% loop $Parent.Children %>
                <li class="sidebar__nav__list__item">
                    <% if $LinkingMode == 'current' %>
                        <span class="sidebar__nav__list__item__link $LinkingMode">$Title</span>
                        <% if $Children %>
                            <ul class="sidebar__nav__list__item__children children unstyled">
                                <% loop $Children %>
                                    <li class="sidebar__nav__list__item__children__item">
                                        <a href="$Link" class="sidebar__nav__list__item__children__item__link $LinkingMode">$Title</a>
                                    </li>
                                <% end_loop %>
                            </ul>
                        <% end_if %>
                    <% else %>
                        <a href="$Link" class="sidebar__nav__list__item__link $LinkingMode">$Title</a>
                    <% end_if %>
                </li>
            <% end_loop %>
        </ul>
    </nav>
</aside>