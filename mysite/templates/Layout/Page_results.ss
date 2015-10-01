<div class="row">
    <div id="main" class="span12 resultsList" role="main">

        <!--==================================================================-->
        <!-- Page Title -->
        <!--==================================================================-->

        <div class="page-title page-title--blue">
            <div class="page-title__wrap">
                <h2 class="page-title__heading">Search results</h2>
                <div class="page-title__triangle"></div>
            </div>
        </div>


		<% if Results %>
            <div class="resultsHeader">
                <h2 class="pull-left">Results for &quot;{$Query}&quot;</h2>
                <p class="pull-right">Displaying Page $Results.CurrentPage of $Results.TotalPages</p>
            </div>
		<% end_if %>

		<% if Results %>
            <ol id="SearchResults">
				<% loop Results %>
                    <li>
                        <article class="$EvenOdd">
                            <header>
                                <h3>
                                    <a class="searchResultHeader" href="$Link">
										$Title
                                    </a>
                                </h3>
                            </header>
                            <p>
								<% if $FileContent %>
									$FileContent.ContextSummary.RAW
								<% else_if Abstract %>
									$Abstract.XML
								<% else %>
									$Content.ContextSummary
								<% end_if %>
                            </p>
                        </article>
                    </li>
				<% end_loop %>
            </ol>
		<% else %>
            <p>Sorry, your search query did not return any results.</p>
		<% end_if %>

		<% with Results %>
			<% include Pagination %>
		<% end_with %>
		<% include PrintShare %>
    </div>
</div>
