<?php

/**
 * Class SnappyPage
 */
class SnappyPage extends Page {

}

class SnappyPage_Controller extends Page_Controller {

	public static $allowed_actions = array(
		'getSnappy',
		'saveSnappy'
	);

	public function getSnappy() {
		$member = Member::currentUser();
		if ($member) {
			if (Director::is_ajax()) {
				return json_encode($this->Content, true);
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
				$this->Content = $data['data'];
				$this->data()->setField('Content', $data['data']);
				$this->data()->write();
				return json_encode('Success', true);
			} else {
				return 'This action is only allowed via AJAX';
			}
		} else {
			return json_encode('You must be logged in to perform this action', true);
		}
	}

}