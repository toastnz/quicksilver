<!--==================================================================-->
<!-- Header -->
<!--==================================================================-->

<header class="navigation">

    <div class="navigation__wrap">

        <div class="navigation__secondary">
			<% if SiteConfig.FacebookURL %>
                <a target="_blank" href="http://www.facebook.com/$SiteConfig.FacebookURL" class="navigation__secondary__social navigation__secondary__social--facebook"><span class="icon-facebook"></span></a>
			<% end_if %>
			<% if SiteConfig.TwitterUsername %>
                <a target="_blank" href="http://www.twitter.com/$SiteConfig.TwitterUsername" class="navigation__secondary__social navigation__secondary__social--twitter"><span class="icon-twitter"></span></a>
			<% end_if %>
            <div class="navigation__secondary__search">
				$SearchForm
                <span class="icon-search search-trigger"></span>
            </div>
            <div class="navigation__secondary__menu">
                <span class="icon-navburger menu-trigger"></span>
            </div>
        </div>

        <a href="$BaseHref" class="icon-logo-large"></a>

        <ul class="menu">
            <div class="menu-close"><span class="icon-closeburger"></span></div>
			<% loop Menu(1) %>
                <li class="menu__list-item <% if $LinkingMode = current %>menu__list-item--current<% end_if %>">
                    <a href="$Link" class="menu__list-item__link">
						$MenuTitle.XML
						<% if Children %>
                            <div class="children-trigger"><span class="icon-arrow-small-down"></span>
                            </div><% end_if %>
                    </a>
					<% if Children %>
                        <ul class="menu__list-item__sub-nav">
							<% loop Children %>
                                <li class="menu__list-item__sub-nav__list-item">
                                    <a class="menu__list-item__sub-nav__list-item__link" href="$Link">$MenuTitle.XML</a>
                                </li>
							<% end_loop %>
                        </ul>
					<% end_if %>
                </li>
			<% end_loop %>
        </ul>

    </div>

</header>

<!--==================================================================-->
<!-- Slider -->
<!--==================================================================-->

<% include Carousel %>
