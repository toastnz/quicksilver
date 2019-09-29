<?php

namespace Toast\Extensions;

use SilverStripe\Core\Extension;

class ControllerExtension extends Extension
{
    public function getStandardJsonResponse($data, $method = 'json', $message = '', $code = 200, $status = 'success')
    {
        $elapsed = microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"];
        $response = [
            'request' => $this->owner->getRequest()->httpMethod(),
            'status'  => $status,
            'method'  => $method,
            'elapsed' => number_format($elapsed * 1000, 0) . 'ms',
            'message' => $message,
            'code'    => $code,
            'data'    => $data
        ];
        return json_encode($response, JSON_HEX_QUOT | JSON_HEX_TAG);
    }
}