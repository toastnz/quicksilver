<!--==================================================================-->
<!-- Footer -->
<!--==================================================================-->

<footer>
    <div class="wrap">
        <nav>
            <ul>
                <% loop $Menu(1) %>
                    <li>
                        <a href="$Link">$Title</a> <%if $FirstLast != 'last' %>/<% end_if %>
                    </li>
                <% end_loop %>
            </ul>
        </nav>
    </div>
</footer>
