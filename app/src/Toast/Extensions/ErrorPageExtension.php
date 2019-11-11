<?php

namespace Toast\Extensions;

use SilverStripe\ORM\DB;
use SilverStripe\ORM\DataExtension;
use SilverStripe\ErrorPage\ErrorPage;
use SilverStripe\Versioned\Versioned;


class ErrorPageExtension extends DataExtension
{

    public function requireDefaultRecords()
    {
        parent::requireDefaultRecords();

        $codes = [
            429 => 'Too many requests'
        ];

        foreach($codes as $code => $title) {
            if (!ErrorPage::get()->filter('ErrorCode', $code)->first()) {
                $errorPage = ErrorPage::create([
                    'Title' => $title,
                    'ErrorCode' => $code,
                    'ShowInMenus'  => false,
                    'ShowInSearch' => false,
                ]);
                $errorPage->write();
                $errorPage->copyVersionToStage(Versioned::DRAFT, Versioned::LIVE);
                $errorPage->flushCache();
                DB::alteration_message($code . ' Error page created', 'created');
            }
        }
    }

}
