<% with $SiteConfig %>
    <% if $FacebookLink %>
        <li class="socialIcons__item">
            <a href="$Facebook" class="socialIcons__item__link">$SVG('social/facebook')</a>
        </li>
    <% end_if %>

    <% if $TwitterLink %>
        <li class="socialIcons__item">
            <a href="$Twitter" class="socialIcons__item__link">$SVG('social/twitter')</a>
        </li>
    <% end_if %>

    <% if $LinkedInLink %>
        <li class="socialIcons__item">
            <a href="$LinkedIn" class="socialIcons__item__link">$SVG('social/linkedin')</a>
        </li>
    <% end_if %>

    <% if $InstagramLink %>
        <li class="socialIcons__item">
            <a href="$Instagram" class="socialIcons__item__link">$SVG('social/instagram')</a>
        </li>
    <% end_if %>

    <% if $PinterestLink %>
        <li class="socialIcons__item">
            <a href="$Pinterest" class="socialIcons__item__link">$SVG('social/pinterest')</a>
        </li>
    <% end_if %>

    <% if $YouTubeLink %>
        <li class="socialIcons__item">
            <a href="$YouTube" class="socialIcons__item__link">$SVG('social/youtube')</a>
        </li>
    <% end_if %>

    <% if $VimeoLink %>
        <li class="socialIcons__item">
            <a href="$Vimeo" class="socialIcons__item__link">$SVG('social/vimeo')</a>
        </li>
    <% end_if %>
<% end_with %>
