<section class="holderFilters contentBlock">
	<div class="holderFilters__wrap row">
		<div class="column">
			<div class="xmd-up-alignContent xmd-up-alignContent--fixed [ js-stagger-in-all ] pageTheme--link-hover">
				<div class="holderFilters__wrap__item verticalAlign">
					<a href="$URLSegment/" class="holderFilters__wrap__item__link js-active [ js-filters-link ]" data-filter-id="0">All</a>
				</div>
				 <% loop $Categories %>
					<div class="holderFilters__wrap__item verticalAlign">
						<a href="$Up.URLSegment/category/$URLSegment/" class="holderFilters__wrap__item__link  [ js-filters-link ]" data-filter-id="$ID">$Title</a>
					</div>
				 <% end_loop %>
			</div>
		</div>
	</div>
</section>