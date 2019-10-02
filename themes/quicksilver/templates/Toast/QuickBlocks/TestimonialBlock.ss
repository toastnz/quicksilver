<section class="testimonialBlock contentBlock">
    <div class="testimonialBlock__wrap row [ js-slider--testimonials ]">
    	<%-- <% loop Testimonials %> --%>
	    	<div class="testimonialBlock__wrap__item column">
	    		<h4 class="testimonialBlock__wrap__item__icon">&quot;</h4>
	    		<div class="testimonialBlock__wrap__item__quote">
	    			<p>{$Testimonial}</p>
	    		</div>
				<div class="testimonialBlock__wrap__item__credit">
					<% if $Attribution %>
						<p><span>{$Attribution}<% if $Location %>,<% end_if %></span> {$Location}</p>
					<% end_if %>
				</div>
	    	</div>
    	<%-- <% end_loop %> --%>
    </div>
</section>