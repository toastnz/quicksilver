<% if $ClassNameForTemplate !=  'HomePage' %>
    <% if $Pages %>
        <div class="breadcrumbs">
            <div class="row">
                <div class="column">
                    <ul class="breadcrumbs__list">
                        <li class="breadcrumbs__list__item">
                            <a class="breadcrumbs__list__item__link" href="$BaseURL">$SVG('home')</a>
                        </li>
                        <% loop $Pages %>
                            <li class="breadcrumbs__list__item">
                                $SVG('chevron')
                                <% if $Last %>
                                    <span class="breadcrumbs__list__item__link">{$MenuTitle.XML}</span>
                                <% else %>
                                    <a class="breadcrumbs__list__item__link" href="{$Link}">{$MenuTitle.XML}</a>
                                <% end_if %>
                            </li>
                        <% end_loop %>
                    </ul>
                </div>
            </div>
        </div>
    <% end_if %>
<% end_if %>