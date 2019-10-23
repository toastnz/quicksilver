<section class="splitBlock contentBlock">
    <% if $Heading || $Summary %>
        <% include Toast\Includes\Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="splitBlock__wrap row xmd-up-2 xmd-up-alignContent">
        <% include SplitBlock__Content BackgroundImage=$LeftBackgroundImage, Content=$LeftContent %>
        <% include SplitBlock__Content BackgroundImage=$RightBackgroundImage, Content=$RightContent %>
    </div>
</section>