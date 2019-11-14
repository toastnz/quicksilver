<div class="type">
    <section class="login alignContent">
        <div class="login__wrap verticalAlign">
            <div class="login__wrap__content">
                <div class="login__wrap__content__header">
                    <% if $Light %>
                        <img src="$Light.URL" alt="$Light.ALT"/>
                    <% end_if %>
                </div>
                <div class="login__wrap__content__text">
                    <h5 class="login__wrap__content__text__heading">Lost your password</h5>
                </div>
                <div class="login__wrap__content__form">
                    $Form
                    <p id="BackToLogin">
                        <a href="{$BaseURL}Security/login">Back to login</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>