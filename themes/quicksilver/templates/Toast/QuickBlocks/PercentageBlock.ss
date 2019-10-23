<%----------------------------------------------------------------
Modifiers :
width: --25 --33 --50 --66 --75 --100
----------------------------------------------------------------%>

<section class="percentageBlock contentBlock">

    <div class="percentageBlock__wrap row <% if not $ContentWidth %>explode<% end_if %> xmd-up-alignContent" data-equalize="heading,content">
        <% include Toast\Includes\PercentageBlock__Content Width=$getWidth('left'), Media=$LeftBackgroundImageURL, Heading=$LeftHeading, Content=$LeftContent, Link=$LeftLink %>
        <% include Toast\Includes\PercentageBlock__Content Width=$getWidth('right'), Media=$RightBackgroundImageURL, Heading=$RightHeading, Content=$RightContent, Link=$RightLink %>
    </div>
</section>
