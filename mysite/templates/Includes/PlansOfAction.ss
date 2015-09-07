<!--===================================================================================-->
<!-- Plans of action || Have been populated using the inbuilt quicklinks system -->
<!--===================================================================================-->
<div class="plans-of-action" style="background-image: url('$getThemefolder/mysite/dist/images/standard/plans-of-action-bg.jpg');">

    <div class="plans-of-action__wrap">

        <h3 class="plans-of-action__heading">Our Plans of Action</h3>

		<% loop Quicklinks %>

            <a href="$Link" class="plans-of-action__item plans-of-action__item--blue">
                <div class="plans-of-action__item__wrap">
                    <div class="plans-of-action__item__image" style="background-image:url('http://placehold.it/375x224');"></div>
                    <div class="plans-of-action__item__text"><h5>$Name</h5></div>
                </div>
            </a>

		<% end_loop %>

    </div>

</div>

