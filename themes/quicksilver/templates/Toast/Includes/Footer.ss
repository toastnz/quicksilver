<%-- <% include Toast\Includes\ContactBlock %> --%>

<footer class="footer contentBlock--padding">
	<div class="footer__wrap row" data-equalize>
		<div class="column lg-3">
			<div class="footer__wrap__content social content" data-equalize-watch>
				<ul class="socialIcons unstyled">
					<% include Toast\Includes\SocialIcons %>
				</ul>

				<div class="footer__wrap__content__copyright">
					<p>&copy;{$Now.Year} {$SiteConfig.Title}. All Rights Reserved.</p>
				</div>
			</div>
		</div>
		<div class="column lg-3 float-right">
			<div class="footer__wrap__content content" data-equalize-watch>
				<div class="footer__wrap__content__alignment md-up-alignContent">
					<div class="contentRow">
						<div class="verticalAlign verticalAlign--top">
							<div class="footer__wrap__content__alignment__details">
                                <% with $SiteConfig %>
                                <% if $TollFreeNumber %>
								<h6 class="footer__wrap__content__alignment__details__phone"><a href="$TollFreeNumber.LinkURL">$TollFreeNumber.Title| <span class="colour--primary">$TollFreeNumber.Title</span></a></h6>
                                <% end_if %>
                                <% end_with %>
                                <p><b>{$SiteConfig.FooterContent}</b></p>
							</div>
						</div>
					</div>
					<div class="contentRow">
						<div class="verticalAlign verticalAlign--bottom">
							<div class="footer__wrap__content__alignment__logo">
                                <% with $SiteConfig %>
                                    <% if $DarkLogo %><% end_if %>
                                    <img src="$DarkLogo.URL" alt="$DarkLogo.ALT"/>
                                <% end_with %>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="column md-6 lg-3">
			<div class="footer__wrap__content content" data-equalize-watch>
				<h6 class="footer__wrap__content__heading">Products</h6>

				<ul class="footer__wrap__content__nav unstyled">
					<li class="footer__wrap__content__nav__item">
						<a href="#" class="footer__wrap__content__nav__item__link">Link Title</a>
					</li>
					<li class="footer__wrap__content__nav__item">
						<a href="#" class="footer__wrap__content__nav__item__link">Link Title</a>
					</li>
					<li class="footer__wrap__content__nav__item">
						<a href="#" class="footer__wrap__content__nav__item__link">Link Title</a>
					</li>
					<li class="footer__wrap__content__nav__item">
						<a href="#" class="footer__wrap__content__nav__item__link">Link Title</a>
					</li>
					<li class="footer__wrap__content__nav__item">
						<a href="#" class="footer__wrap__content__nav__item__link">Link Title</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="column md-6 lg-3">
			<div class="footer__wrap__content content" data-equalize-watch>
				<h6 class="footer__wrap__content__heading">Contact</h6>
				<ul class="footer__wrap__content__nav unstyled">
                    <% loop $Contact %>
                        <% loop $Children %>
                            <li class="footer__wrap__content__nav__item">
                                <a href="$Link" class="footer__wrap__content__nav__item__link">$Title</a>
                            </li>
                        <% end_loop %>
                    <% end_loop %>
				</ul>
			</div>
		</div>
	</div>
</footer>
