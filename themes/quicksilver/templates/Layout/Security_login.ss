<div class="type">
	<section class="login">
		<div class="login__background"></div>
		<div class="loginHeight alignContent">
			<div class="login__wrap verticalAlign">
				<div class="login__wrap__content">
					<div class="login__wrap__content__header">
						<% if $Light %>
	                    	<img src="$Light.URL" alt="$Light.ALT"/>
	                    <% end_if %>
					</div>
					<div class="login__wrap__content__text">
						<h5 class="login__wrap__content__text__heading">Login to your account</h5>
					</div>
					<div class="login__wrap__content__form">
						$Form
					</div>
				</div>
			</div>
		</div>
	</section>
</div>