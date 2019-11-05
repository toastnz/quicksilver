<section class="columnBlock contentBlock--padding">
    <div class="columnBlock__header row">
        <div class="column">
            <h4 class="columnBlock__header__title">$Heading</h4>
        </div>
    </div>
    <div class="columnBlock__wrap row xmd-up-alignContent xmd-up-$getColumns()">
        <% include Toast\Includes\ColumnBlock__Content Content=$ContentLeft %>
        <% include Toast\Includes\ColumnBlock__Content Content=$ContentMiddle %>
        <% include Toast\Includes\ColumnBlock__Content Content=$ContentRight %>
    </div>
</section>
