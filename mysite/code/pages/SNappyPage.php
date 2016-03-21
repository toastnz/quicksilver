<?php

/**
 * Class SnappyPage
 */
class SnappyPage extends Page {

	static $db = array(
		'wysiwyg' => 'HTMLText'
	);
	
	private static $has_one = array(
		'BackgroundImage' => 'Image'
	);

	/**
	 * @return FieldList
	 */
	public function getCMSFields() {


		/** =========================================
		 * @var FieldList $fields
		 * ========================================*/

		$fields = parent::getCMSFields();

		/** -----------------------------------------
		 * Content
		 * ----------------------------------------*/
		$fields->addFieldsToTab('Root.WYSIWYG', array(
			HtmlEditorField::create('wysiwyg', 'Page Content')
		));

		$fields->removeFieldFromTab("Root.Main", "Content");

		return $fields;
	}

}

class SnappyPage_Controller extends Page_Controller {

	public static $allowed_actions = array(
		'saveSnappy',
		'getSnappy',
		'upload',
		'publishSnappy',
		'snappyUploadForm',
		'snappyUploadSubmit'
	);

	public function snappyUpload() {
		$fields = FieldList::create(
			FileAttachmentField::create('BackgroundImage', '')->setView('grid')->setMultiple(false)
		);
		$actions = FieldList::create(
			FormAction::create('snappyUploadSubmit')
		);
		$required = RequiredFields::create();
		$form = Form::create($this, 'snappyUploadForm', $fields, $actions, $required);
		return $form->renderWith('snappyUploadForm');
	}

	public function getSnappy(SS_HTTPRequest $request) {
		$member = Member::currentUser();
		if ($member) {
			if (Director::is_ajax()) {
				$data = $request->requestVars();
				if ($data['version'] == 'Discard') {
					$record = DataObject::get_by_id('SiteTree', $this->data()->ID);
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


	public function upload(SS_HTTPRequest $request) {


//        if ($this->isDisabled() || $this->isReadonly() || !$this->CanUpload()) {
//            return $this->httpError(403);
//        }

//        if ($this->getForm()) {
//            $token = $this->getForm()->getSecurityToken();
//            if (!$token->checkRequest($request)) {
//                return $this->httpError(400);
//            }
//        }
//
//        $name = $this->getSetting('paramName');
//        $files = $_FILES[$name];
		$files = $request->requestVar('file');
		$tmpFiles = array();

		// Sort the files out into a list of arrays containing each property
		if (!empty($files['tmp_name']) && is_array($files['tmp_name'])) {
			for ($i = 0; $i < count($files['tmp_name']); $i ++) {
				if (empty($files['tmp_name'][$i])) {
					continue;
				}
				$tmpFile = array();
				foreach (array('name', 'type', 'tmp_name', 'error', 'size') as $field) {
					$tmpFile[$field] = $files[$field][$i];
				}
				$tmpFiles[] = $tmpFile;
			}
		} elseif (!empty($files['tmp_name'])) {
			$tmpFiles[] = $files;
		}

		$ids = array();
		$filenames = array();
		$fileString = '';
		foreach ($tmpFiles as $tmpFile) {
			if ($tmpFile['error']) {
				return $this->httpError(400, $tmpFile['error']);
			}

			/** @var Image $fileObject */
			$fileObject = Object::create('Image');

			$upload = new Upload();

			try {
				$upload->loadIntoFile($tmpFile, $fileObject, 'Uploads/snappy');
				$ids[] = $fileObject->ID;
			} catch (Exception $e) {
				return $this->httpError(400, $e->getMessage());
			}

			if ($upload->isError()) {
				return $this->httpError(400, implode(' ' . PHP_EOL, $upload->getErrors()));
			}

			$filenames[] = $fileObject->Filename;
			$fileString = $fileObject->Filename;
		}

		return new SS_HTTPResponse(json_encode($fileString, true), 200);
	}

}