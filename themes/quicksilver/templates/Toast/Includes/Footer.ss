<%-- <% include Toast\Includes\ContactBlock %> --%>

<footer class="footer contentBlock--padding">
	<div class="footer__wrap row" data-equalize>
		<div class="column md-6 lg-4 float-right">
			<div class="footer__wrap__content content logo" data-equalize-watch>
				<div class="footer__wrap__content__alignment md-up-alignContent">
					<div class="contentRow">
						<div class="verticalAlign verticalAlign--top">
							<div class="footer__wrap__content__alignment__details">
                                <% with $SiteConfig %>
                                	<% if $TollFreeNumber %>
										<h6 class="footer__wrap__content__alignment__details__phone">
											<a href="$TollFreeNumber.LinkURL">$TollFreeNumber.Title| <span class="colour--primary">$TollFreeNumber.Title</span></a>
										</h6>
                                	<% end_if %>
                                	<% if $FooterContent %>
                                		{$FooterContent}
                                	<% end_if %>
                                	<ul class="socialIcons unstyled">
										<% include Toast\Includes\SocialIcons %>
									</ul>
                                <% end_with %>
							</div>
						</div>
					</div>
					<div class="contentRow">
						<div class="verticalAlign verticalAlign--bottom">
							<div class="footer__wrap__content__alignment__logo">
                                <% with $SiteConfig %>
                                    <% if $LightLogo %>
                                    	<img src="$LightLogo.URL" alt="$LightLogo.ALT"/>
                                    <% end_if %>
                                <% end_with %>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="column md-6 lg-8">
			<div class="footer__wrap__content content" data-equalize-watch>
				<% include Toast\Nav %>
				<div class="footer__wrap__content__copyright">
					<p>&copy;{$Now.Year} {$SiteConfig.Title}. All Rights Reserved.</p>
				</div>
			</div>
		</div>
	</div>
</footer>
