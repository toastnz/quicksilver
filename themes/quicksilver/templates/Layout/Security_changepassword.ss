<div class="type">
	<section class="login alignContent">
		<div class="login__wrap verticalAlign">
			<div class="login__wrap__content">
				<div class="login__wrap__content__header">
					<% with $SiteConfig %>
                        <% if $LightLogo %>
                            <img src="$LightLogo.URL" alt="$LightLogo.ALT"/>
                        <% end_if %>
                    <% end_with %>
				</div>
				<div class="login__wrap__content__text">
					<h5 class="login__wrap__content__text__heading">Reset your password</h5>
				</div>
				<div class="login__wrap__content__form">
					$Form
				</div>
			</div>
		</div>
	</section>
</div>