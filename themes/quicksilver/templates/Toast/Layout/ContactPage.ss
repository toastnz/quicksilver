<article class="page">
	<% if $SiteConfig.Sidebar %>
		<% include Toast\Includes\Sidebar %>
	<% end_if %>

	<section class="contentBlocks">
    <%--		<div class="contactBlock contentBlock">--%>
    <%--			<div class="contactBlock__wrap row">--%>
    <%--				<div class="contactBlock__wrap__form column">--%>
    <%--				    <% if $ContactForm.Message %>--%>
    <%--				        <% with $ContactForm %>--%>
    <%--				            <p id="{$FormName}_error" class="message $MessageType">$Message</p>--%>
    <%--				        <% end_with %>--%>
    <%--				    <% else %>--%>
    <%--				        $Content--%>
    <%--				    <% end_if %>--%>
    <%--				</div>--%>
    <%--			</div>--%>
    <%--		</div>--%>

<%--         $FormContent
        $getUser()--%>
<%--        $getUserFormContent--%> 



		<% loop $ContentBlocks.Sort('SortOrder') %>
		    $ForTemplate
		<% end_loop %>


        <section class="quickBlock contentBlock">
            <div class="quickBlock__wrap row">
                <div class="column">
                    $Content
                </div>
            </div>
        </section>

        
	</section>
</article>
