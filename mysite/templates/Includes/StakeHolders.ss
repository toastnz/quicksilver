<!--==================================================================-->
<!-- Stakeholders -->
<!--==================================================================-->

<div class="stakeholders">

    <h3>Our Stakeholders</h3>

    <div class="stakeholders__wrap">

		<% loop StakeholderItems %>
            <div class="stakeholders__item">
                <img src="$Image.CroppedImage(200, 75).URL" alt="$Title"/>
            </div>
		<% end_loop %>

    </div>

</div>
