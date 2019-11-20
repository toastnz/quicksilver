<?php

<<<<<<< .merge_file_Z8NADJ
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Assets\Image;
use SilverStripe\Control\Director;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use SilverStripe\Forms\HeaderField;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use Toast\Model\BannerSliderImage;
use Toast\Pages\ContactPage;
=======
use Toast\Pages\ContactPage;
use SilverStripe\Assets\Image;
use SilverStripe\Control\Director;
use Toast\Model\BannerSliderImage;
use SilverStripe\Forms\HeaderField;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\Forms\GridField\GridFieldDeleteAction;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;
>>>>>>> .merge_file_cWutOC

class Page extends SiteTree
{
    private static $db = [
        'DropdownNav' => 'Boolean',
        'Sidebar'     => 'Boolean',
<<<<<<< .merge_file_Z8NADJ
=======
        'Summary'     => 'Text',
>>>>>>> .merge_file_cWutOC
    ];

    private static $has_one = [
        'Thumbnail' => Image::class
    ];

    private static $has_many = [
        'BannerImages' => BannerSliderImage::class,
    ];

    private static $owns = [
        'Thumbnail'
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->removeByName(["Content"]);
        // Banner Slider Images
        $config = GridFieldConfig_RelationEditor::create(10);
        $config->addComponent(GridFieldOrderableRows::create('SortOrder'))
               ->removeComponentsByType(GridFieldDeleteAction::class)
               ->addComponent(new GridFieldDeleteAction(false));
        $imagesGridField = GridField::create(
            'BannerImages',
            '',
            $this->owner->BannerImages(),
            $config
        );

        $fields->addFieldsToTab('Root.Banner', [
            $imagesGridField
        ]);
<<<<<<< .merge_file_Z8NADJ
        $fields->addFieldsToTab('Root.Share', [
            UploadField::create('Thumbnail', 'Thumbnail')
                ->setFolderName('Uploads/banners/images')
        ]);
=======
        $fields->addFieldsToTab('Root.Main', [
            TextareaField::create('Summary', 'Summary'),
            UploadField::create('Thumbnail', 'Thumbnail')
                ->setFolderName('Uploads/banners/images')
            
        ], 'SEOHealthAnalysis');
>>>>>>> .merge_file_cWutOC

        return $fields;
    }

    public function getSettingsFields() {
        $fields = parent::getSettingsFields();
        $fields->insertAfter(
            'ShowInSearch',
            CheckboxField::create('Sidebar', 'Show Sidebar')
        );
        $fields->insertAfter(
            'Sidebar',
            CheckboxField::create('DropdownNav', 'Show Dropdown Nav')
        );
        return $fields;
    }

    public function getIsLive()
    {
        return Director::isLive();
    }

    public function getContact()
    {

        return ContactPage::get();
    }

    public function getClassNameForTemplate()
    {
        $reflect = new ReflectionClass($this);

        return $reflect->getShortName() ?: $this->ClassName;
    }

<<<<<<< .merge_file_Z8NADJ
=======
    public function getImage()
    {

        return $this->Thumbnail();
    }

>>>>>>> .merge_file_cWutOC
}


class PageController extends ContentController
{
    private static $allowed_actions = [];

    protected function init()
    {
        parent::init();
    }

}
