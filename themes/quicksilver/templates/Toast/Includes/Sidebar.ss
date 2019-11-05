<aside class="sidebar">
    <nav class="sidebar__nav row">
        <ul class="sidebar__nav__list column unstyled">

            <% loop $Parent.Children %>
                <li class="sidebar__nav__list__item">
                    <a href="$Link" class="sidebar__nav__list__item__link $LinkingMode">$Title </a>
                    <% if $LinkingMode == 'current' %>
                        <% if $Children %>
                            <% loop $Children %>
                                <li class="sidebar__nav__list__item">
                                    <a href="$Link" class="sidebar__nav__list__item__link $LinkingMode">$Title</a>
                                </li>
                            <% end_loop %>
                        <% end_if %>
                    <% end_if %>
                </li>
            <% end_loop %>
        </ul>
    </nav>
</aside>