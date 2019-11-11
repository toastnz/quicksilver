<article class="page">
	<% if $SiteConfig.Sidebar %>
		<% include Toast\Includes\Sidebar %>
	<% end_if %>

	<section class="contentBlocks">
		
		<% loop $ContentBlocks.Sort('SortOrder') %>
		    $ForTemplate
		<% end_loop %>

		<% if $ClassNameFortemplate == 'ContactPage' || $ClassNameFortemplate == 'UserDefinedForm' %>
		    <section class="quickBlock contentBlock">
            	<div class="quickBlock__wrap row">
	                <div class="column">
	                    $Content
	                </div>
	            </div>
	        </section>
		<% end_if %>
	</section>
</article>
