<?php

/**
 * Class SnappyPage
 */
class SnappyPage extends Page {

}

class SnappyPage_Controller extends Page_Controller {

    public static $allowed_actions = array(
        'saveSnappy',
        'getSnappy',
        'publishSnappy'
    );

    public function getSnappy(SS_HTTPRequest $request) {
        $member = Member::currentUser();
        if ($member) {
            if (Director::is_ajax()) {
                $data = $request->requestVars();

                if ($data['version'] == 'Discard') {
//                    $record = Versioned::get_by_stage('SiteTree', 'Live')->byID($this->data()->ID);
//                    $content = $record->Content;
//                    $draftRecord = Versioned::get_by_stage('SiteTree', 'Stage')->byID($this->data()->ID);


                    $record = DataObject::get_by_id('SiteTree', $this->data()->ID);


//                    $draftRecord->setField('Content', $content);
                    $record->doRollBackTo('Live');
                } else {
                    $record = Versioned::get_by_stage('SiteTree', $data['version'])->byID($this->data()->ID);
                    $content = $record->Content;
                }

                return json_encode($content, true);
            } else {
                return 'This action is only allowed via AJAX';
            }
        } else {
            return json_encode('You must be logged in to perform this action', true);
        }
    }

    public function saveSnappy(SS_HTTPRequest $request) {
        $member = Member::currentUser();
        if ($member) {
            if (Director::is_ajax()) {
                $data = $request->requestVars();
                $this->data()->setField('Content', $data['data']);
                $this->data()->writeToStage('Stage');
                return json_encode('Success', true);
            } else {
                return 'This action is only allowed via AJAX';
            }
        } else {
            return json_encode('You must be logged in to perform this action', true);
        }
    }

    public function publishSnappy(SS_HTTPRequest $request) {
        $member = Member::currentUser();
        if ($member) {
            if (Director::is_ajax()) {
                $this->data()->write();
                $this->data()->publish('Stage', 'Live');
                return json_encode('Success', true);
            } else {
                return 'This action is only allowed via AJAX';
            }
        } else {
            return json_encode('You must be logged in to perform this action', true);
        }
    }

}