<div class="headerPush" data-equalize-watch="header"></div>
<header class="header" data-equalize-watch="header" data-breakpoint>
    <div class="header__wrap row max">
        <div class="header__wrap__inner column alignContent">
            <div class="header__wrap__inner__logo navLogo verticalAlign" data-breakpoint-watch>
                <a href="{$BaseURL}" class="header__wrap__inner__logo__link">
                    <% with $SiteConfig %>
                        <% if $DarkLogo %>
                            <img src="$DarkLogo.URL" alt="$DarkLogo.ALT"/>
                        <% end_if %>
                    <% end_with %>
                </a>
            </div>
            <nav class="header__wrap__inner__nav navLinks mainNav verticalAlign" data-breakpoint-watch>
                <div class="headerNav">
                    <% include Toast\Nav Dropdown=$DropdownNav %>
                </div>
            </nav>
            <div class="header__wrap__inner__actions verticalAlign" data-breakpoint-watch>
                <div class="headerActions">
                    <ul class="socialIcons unstyled">
                        <% include Toast\Includes\SocialIcons %>
                    </ul>
                    <% with $SiteConfig %>
                        <div class="header__wrap__inner__actions__button headerAction">
                            <% if $TollFreeNumber %>
                                <a href="$TollFreeNumber.LinkURL"
                                   class="button button--bordered--primary">$TollFreeNumber.Title</a>
                            <% end_if %>
                        </div>
                    <% end_with %>
                </div>
                <button id="hamburger" data-modal-toggle="mobile-nav" role="button" aria-label="open site navigation" title="open site navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</header>

<section class="mobileNav" data-modal="mobile-nav">
    <button class="mobileNav__close" data-modal-toggle="mobile-nav"></button>
    <% include Toast\Nav %>
</section>
