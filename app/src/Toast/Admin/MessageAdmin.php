<?php

namespace Toast\Admin;

use SilverStripe\Admin\ModelAdmin;
use Toast\Model\ContactMessage;

class MessageAdmin extends ModelAdmin
{
    private static $url_segment = 'messages';
    private static $menu_title = 'Messages';
    private static $icon = 'message';

    private static $managed_models = [
        ContactMessage::class => [
            'title' => 'Messages'
        ]
    ];
}
