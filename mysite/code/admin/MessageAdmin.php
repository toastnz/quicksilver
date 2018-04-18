<?php
use SilverStripe\Admin\ModelAdmin;


/**
 * Class MessageAdmin
 */
class MessageAdmin extends ModelAdmin
{
    private static $url_segment = 'messages';
    private static $menu_title = 'Messages';
    private static $icon = 'message';

    private static $managed_models = [
        'ContactMessage' => [
            'title' => 'Messages'
        ]
    ];
}
