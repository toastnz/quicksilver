<?php


use SilverStripe\Control\Controller;
use SilverStripe\Security\Security;

class StyleGuideController extends Controller
{

    private static $allowed_actions = [
        'index'
    ];

    public function index()
    {
        if (is_null(Security::getCurrentUser())) {
            return $this->redirect('Security/login?BackURL=_styleguide');
        } else {
            return $this->renderWith(['StyleGuideController', 'Page']);
        }
    }

}