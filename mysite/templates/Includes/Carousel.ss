<!--==================================================================-->
<!-- Slider -->
<!--==================================================================-->
<% if $VisibleCarouselItems %>
	<% loop $VisibleCarouselItems %>
        <div class="slider slider--homepage">
            <div class="slider__item">
                <div class="slider__item__image" style="background-image: url('$Image.CroppedImage(1920, 1025).URL');"></div>
                <div class="slider__item__caption">
                    <h2>$Title</h2>
                    <h1><a href="#"><span class="pink"><i class="icon-arrow-small-right"></i></span>EAT WELL</a></h1>
                    <h1><a href="#"><span class="green"><i class="icon-arrow-small-right"></i></span>MOVE MORE</a></h1>
                    <h1><a href="#"><span class="blue"><i class="icon-arrow-small-right"></i></span>KEEP HEALTHY</a>
                    </h1>
                </div>
            </div>
	<% end_loop %>
    </div>
<% end_if %>
