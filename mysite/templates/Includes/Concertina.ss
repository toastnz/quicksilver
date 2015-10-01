<!--==================================================================-->
<!-- Concertina -->
<!--==================================================================-->

<div class="concertina">

    <div class="concertina__wrap">

		<% loop ConcertinaItems %>
            <div class="concertina__item concertina__item--{$Color}" data-id="$Pos">
                <div class="concertina__item__heading">
                    <h2>$Title<span class="icon-arrow-medium-down"></span></h2>
                    <div class="concertina__item__triangle"></div>
                </div>
                <div class="concertina__item__copy">
                    <h4>$Caption</h4>
                </div>
            </div>
		<% end_loop %>

    </div>

</div>

<div class="copies">

	<% loop ConcertinaItems %>
        <div class="outer $Color" data-id="$Pos">
            <div class="inner">
                <h4>$Caption</h4>
            </div>
        </div>
	<% end_loop %>

</div>
