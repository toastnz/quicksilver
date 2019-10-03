<section class="videoBlock contentBlock">
    <% if $Heading || $Summary %>
        <% include Heading Heading=$Heading, Summary=$Summary %>
    <% end_if %>
    <div class="videoBlock__wrap row">
        <div class="column">
            <a href="#" data-video="https://www.youtube.com/watch?v=xl96OgXwUBk" style="background-image: url('https://via.placeholder.com/1080x640');" class="videoBlock__wrap__media [ js-embed ]">
            	$SVG('play')
            </a>
        </div>
    </div>
</section>