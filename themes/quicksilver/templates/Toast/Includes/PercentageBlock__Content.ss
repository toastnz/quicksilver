<div class="percentageBlock__wrap__item column xmd-{$Width} verticalAlign verticalAlign--top">
    <% if $Media %>
        <div class="percentageBlock__wrap__item__media media {$Position} <% if not $ContentWidth %>full-width<% end_if %> " style="background-image:url('{$Media}')"></div>
    <% end_if %>
    
    <div class="percentageBlock__wrap__item__content content">
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