<%----------------------------------------------------------------
Static Percentage Block
Modifiers :
width: --25 --33 --50 --66 --75 --100
type: --image --text
colour: --red --light-grey --dark-grey
----------------------------------------------------------------%>

<section class="contentBlock percentageBlock">

    <div class="contentBlock__wrap percentageBlock__wrap<% if $ContentWidth %> row<% end_if %>">

        <div class="percentageBlock__wrap__item percentageBlock__wrap__item--{$getColour('left')} percentageBlock__wrap__item--text percentageBlock__wrap__item--{$getWidth('left')}">
            <div class="percentageBlock__wrap__item__pattern" style="background-image:url('{$LeftBackgroundImageURL}')"></div>
            <div data-aos="fade-up" data-aos-duration="800">
            <% if $LeftHeading %>
                <h4 class="colour--white"><b>$LeftHeading</b></h4>
            <% end_if %>

                $LeftContent

            <% if $LeftLink %>
                <% with $LeftLink %>
                    <p><a href="{$LinkURL}" {$TargetAttr} class="heroBlock__copy__wrap__link">$SVG('read-more') {$Title.UpperCase}</a></p>
                <% end_with %>
            <% end_if %>

            </div>
        </div>

        <div class="percentageBlock__wrap__item percentageBlock__wrap__item--{$getColour('right')} percentageBlock__wrap__item--text percentageBlock__wrap__item--{$getWidth('right')}">
            <div class="percentageBlock__wrap__item__pattern" style="background-image:url('{$RightBackgroundImageURL}')"></div>
            <div data-aos="fade-up" data-aos-duration="800">
            <% if $RightHeading %>
                <h4 class="colour--white"><b>$RightHeading</b></h4>
            <% end_if %>

                $RightContent

            <% if $RightLink %>
                <% with $RightLink %>
                    <p><a href="{$LinkURL}" {$TargetAttr} class="heroBlock__copy__wrap__link">$SVG('read-more') {$Title.UpperCase}</a></p>
                <% end_with %>
            <% end_if %>

            </div>
        </div>

    </div>

</section>
