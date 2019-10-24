<div class="percentageBlock__wrap__item column xmd-{$Width} verticalAlign verticalAlign--top">
    <div class="percentageBlock__wrap__item__media $Position media <% if not $ContentWidth %>full-width<% end_if %> " style="background-image:url('{$Media}')"></div>
    
    <div class="percentageBlock__wrap__item__content">
        <div class="percentageBlock__wrap__item__content__heading" data-equalize-watch="heading">
            <% if $Heading %>
                <h4 class="colour--white">$Heading</h4>
            <% end_if %>
        </div>

        <div class="percentageBlock__wrap__item__content__body" data-equalize-watch="content">
            $Content
        </div>

        <% if $Link %>
            <% with $Link %>
                <a href="{$LinkURL}" {$TargetAttr} class="button button--bordered--primary percentageBlock__wrap__item__link">{$Title}</a>
            <% end_with %>
        <% end_if %>
    </div>
</div>