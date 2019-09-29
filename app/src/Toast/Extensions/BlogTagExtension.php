<?php

namespace Toast\Extensions;

use SilverStripe\ORM\DataExtension;

class BlogTagExtension extends DataExtension
{
    private static $db = [
        'Sort' => 'Int'
    ];

}