<?php


use SilverStripe\Control\Controller;
use SilverStripe\Security\Security;

class StyleGuideController extends Controller
{

    private static $allowed_actions = array(
        'index'
    );

    public function index()
    {
        $member = Security::getCurrentUser();
       // var_dump($member);die;
        if (is_null($member)) {
            $backUrl = $this->owner->getRequest()->getVar('BackURL');
                if (Controller::curr()->class != 'Account') {
                    $link = 'Security/login' . '?BackURL=' . urlencode($backUrl);
                    return $this->owner->redirect($link);
                }
        } else {
            //return $this->owner->renderWith (['StyleGuide', 'Page']);
            return $this->customise($member)->renderWith(
                ['StyleGuideController', 'Page']
            );
       //     $this->redirect('StyleGuide');
//            return $this->owner->renderWith(
//                ['StyleGuide', 'Page']
//            );
          //  $this->owner->template['index'] = array('StyleGuide', 'Page');
          //  return $this->renderWith('StyleGuide','Page');
        }
    }
//    function Template()
//    {
//        return $this->owner->renderWith([$this->owner->ClassName, 'Includes/StyleGuide']);
//    }
}