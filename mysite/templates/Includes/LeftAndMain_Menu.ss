<div class="cms-menu cms-panel cms-panel-layout west" id="cms-menu" data-layout-type="border">
    <div class="cms-logo-header north">
        <div class="cms-logo">
            <% if $SiteConfig.CustomCMSLogo %>
                <% if $SiteConfig.CustomCMSLogo.is_a('DataObject') %>
                    <div class="logo">
                        <a class="front-end-link" href="{$BaseHref}" target="_blank">{$SiteConfig.CustomCMSLogo}</a>
                    </div>
                <% else %>
                    <div class="logo">
                        <a class="front-end-link" href="{$BaseHref}" target="_blank"><img src="{$SiteConfig.CustomCMSLogo}" alt="$SiteConfig.Title CMS Logo"></a>
                    </div>
                <% end_if %>
            <% else %>
                <div class="logo">
                    <a class="front-end-link" href="{$BaseHref}" target="_blank"><img style="width:60%;float:left;" src="flat-cms/images/toast-logo.png"></a>
                </div>
                <%--<span><% if $SiteConfig %>$SiteConfig.Title<% else %>$ApplicationName<% end_if %></span>--%>
            <% end_if %>
        </div>

        <div class="cms-login-status">

            <% with $CurrentMember %>
                <span>

                    <a href="{$AbsoluteBaseURL}admin/myprofile" class="profile-link">
                        <% if $FirstName && $Surname %>$FirstName $Surname<% else_if $FirstName %>$FirstName<% else %>$Email<% end_if %>
                    </a>
				</span>
            <% end_with %>
        </div>

        <% if $ListSubsites %>
            <% include SubsiteList %>
        <% end_if %>
    </div>

    <div class="cms-panel-content center">
        <ul class="cms-menu-list">
            <% loop $MainMenu %>
                <li class="$LinkingMode $FirstLast <% if $LinkingMode == 'link' %><% else %>opened<% end_if %>" id="Menu-$Code" title="$Title.ATT">
                    <a href="$Link" $AttributesHTML>
                        <span class="icon icon-16 icon-$Code.LowerCase">&nbsp;</span>
                        <span class="text">$Title</span>
                    </a>
                </li>
            <% end_loop %>
        </ul>
    </div>

    <div class="cms-panel-toggle south">
        <a class="toggle-expand" href="#"><span>&raquo;</span></a>
        <a class="toggle-collapse" href="#"><span>&laquo;</span></a>
    </div>

    <a href="Security/logout" class="logout-link" title="<% _t('LeftAndMain_Menu_ss.LOGOUT','Log out') %>"><i class="material-icons">input</i></a>
</div>
