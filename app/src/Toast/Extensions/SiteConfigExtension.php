<?php

namespace Toast\Extensions;

use RyanPotter\SilverStripeColorField\Forms\ColorField;
use Sheadawson\Linkable\Forms\LinkField;
use Sheadawson\Linkable\Models\Link;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Assets\File;
use SilverStripe\Assets\Image;
use SilverStripe\Dev\Debug;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\Forms\TabSet;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\HeaderField;
use SilverStripe\Forms\TextField;
use SilverStripe\Control\Email\Email;
use SilverStripe\Forms\LiteralField;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Forms\TreeMultiselectField;
use SilverStripe\ORM\FieldType\DBField;
use SilverStripe\ORM\FieldType\DBVarchar;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\ORM\DataExtension;
use StevieMayhew\SilverStripeSVG\SVGTemplate;


class SiteConfigExtension extends DataExtension
{
    private static $db = [
        'Phone' => 'Varchar(255)',
        'Email' => 'Varchar(255)',
        'ContactFormEmail' => 'Varchar(255)',
        'Address' => 'Text',
        'PostalAddress' => 'Text',
        'SubscribeContent' => 'HTMLText',
        'FacebookLink' => 'Varchar(255)',
        'LinkedInLink' => 'Varchar(255)',
        'PinterestLink' => 'Varchar(255)',
        'InstagramLink' => 'Varchar(255)',
        'YouTubeLink' => 'Varchar(255)',
        'TwitterLink' => 'Varchar(255)',
        'VimeoLink' => 'Varchar(255)',
        'MailChimpAPI' => 'Varchar(255)',
        'MailChimpListID' => 'Varchar(255)',
        'MailChimpSuccessMessage' => 'Text',
        'GoogleMapsApiKey' => 'Varchar(100)',
        'GoogleTrackingID' => 'Varchar(100)',
        'GoogleTagManagerID' => 'Varchar(100)',
        'BHProjectKey' => 'Varchar(100)',
        'EnableBugherd' => 'Boolean',
        'SidebarColor' => DBVarchar::class . '(7)',
        'FooterContent' => 'HTMLText'
    ];

    private static $has_one = [
        'TermsLink' => Link::class,
        'PrivacyLink' => Link::class,
        'DefaultImage' => Image::class,
        'TollFreeNumber' => Link::class,
        'DarkLogo'       => File::class,
        'LightLogo'      => File::class,
    ];

    private static $owns = [
        'DefaultImage',
        'DarkLogo',
        'LightLogo'
    ];

    public static $defaults = [
        'MailChimpSuccessMessage' => 'Your subscription has been received, you will be sent a confirmation email shortly.'
    ];

    public function updateCMSFields(FieldList $fields)
    {
        if (!$fields->fieldByName('Root.Settings')) {
            $fields->addFieldToTab('Root', TabSet::create('Settings'));
        }

        $fields->removeByName(['Theme']);

        /** -----------------------------------------
         * Details
         * ----------------------------------------*/

        $address = TextareaField::create('Address', 'Address');
        $address->setRows(8)->addExtraClass('input-wrap--half');
        $postalAddress = TextareaField::create('PostalAddress', 'Postal Address');
        $postalAddress->setRows(8)->addExtraClass('input-wrap--half input-wrap--half--last');

        $fields->findOrMakeTab('Root.Settings.Details');
        $fields->addFieldsToTab('Root.Settings.Details', [
            HeaderField::create('DetailsHeader', 'Company Details'),
            TextField::create('Phone', 'Phone Number'),
            LinkField::create('TollFreeNumberID', 'Toll Free Number'),
            TextField::create('Email', 'Public Email Address')
                ->addExtraClass('input-wrap--half input-wrap--half--last'),
            UploadField::create('DefaultImage', 'Default Image')
                ->setFolderName('Uploads/page-images'),
            $address,
            $postalAddress,
            ColorField::create('SidebarColor'),
            UploadField::create('DarkLogo', 'Dark Logo')
                ->setFolderName('Uploads/page-images'),
            UploadField::create('LightLogo', 'LightLogo')
                ->setFolderName('Uploads/page-images'),
            HTMLEditorField::create('FooterContent', 'Footer Content')
                ->setRows(10)
        ]);

        /** -----------------------------------------
         * Social
         * ----------------------------------------*/

        $fields->findOrMakeTab('Root.Settings.Social');

        $fields->addFieldsToTab('Root.Settings.Social', [
            HeaderField::create('SocialHeading', 'Social'),
            TextField::create('FacebookLink', 'Facebook'),
            TextField::create('LinkedInLink', 'LinkedIn'),
            TextField::create('PinterestLink', 'Pinterest'),
            TextField::create('InstagramLink', 'Instagram'),
            TextField::create('TwitterLink', 'Twitter'),
            TextField::create('YouTubeLink', 'YouTube'),
            TextField::create('VimeoLink', 'Vimeo')
        ]);

        /** -----------------------------------------
         * Links
         * ----------------------------------------*/

        $fields->findOrMakeTab('Root.Settings.Links');

        $fields->addFieldsToTab('Root.Settings.Links', [
            // Links
            HeaderField::create('LinksHeading', 'Links'),
            LinkField::create('TermsLinkID', 'Terms and Conditions Page'),
            LinkField::create('PrivacyLinkID', 'Privacy Policy Page'),
            LinkField::create('RegisterLinkID', 'Registration Link')

        ]);

        /** -----------------------------------------
         * Footer
         * ----------------------------------------*/

        $fields->findOrMakeTab('Root.Settings.Subscription');

        $fields->addFieldsToTab('Root.Settings.Subscription', [
            // Mailchimp
            HeaderField::create('NewsletterHeading', 'Newsletter Subscription'),
            LiteralField::create('MailchimpTooltip', '<p>The API key and list ID are necessary for the Newsletter Subscription form to function. <a href="https://us9.admin.mailchimp.com/account/api-key-popup/" target="_blank"><i>How do I get my MailChimp API Key?</i></a></p>'),
            TextField::create('MailChimpAPI', 'API Key'),
            TextField::create('MailChimpListID', 'List ID'),
            HTMLEditorField::create('SubscribeContent', 'Content')
                ->setRows(10)
                ->setDescription('Displays in the footer above the subscription form'),
            TextareaField::create('MailChimpSuccessMessage', 'Success Message')
                ->setRows(2)
                ->setDescription('Message displayed when a user has successfully subscribed to a list.')
        ]);

        /** -----------------------------------------
         * Integrations
         * ----------------------------------------*/

        $fields->findOrMakeTab('Root.Settings.Integrations');

        $fields->addFieldsToTab('Root.Settings.Integrations', [

            // BugHerd
            HeaderField::create('BugherdHeading', 'Bugherd'),
            CheckboxField::create('EnableBugherd', 'Enable bugherd?'),
            TextField::create('BHProjectKey', 'Bugherd Project Key'),
            LiteralField::create('BHTooltip', '<p><a href="https://support.bugherd.com/hc/en-us/articles/204171450-Installing-the-Script" target="_blank"><i>How do I get my BugHerd Project Key?</i></a></p>'),

            // Google
            HeaderField::create('GoogleHeading', 'Google Tracking'),
            TextField::create('GoogleTrackingID', 'Tracking ID')
                ->addExtraClass('input-wrap--half')
                ->setAttribute('placeholder', 'UA-XXXXXXXX-X'),
            TextField::create('GoogleTagManagerID', 'Tag Manager ID')
                ->setAttribute('placeholder', 'GTM-XXXXXX')
                ->addExtraClass('input-wrap--half input-wrap--half--last'),

            // Google Maps
            HeaderField::create('GoogleMapsHeading', 'Google Maps'),
            TextField::create('GoogleMapsApiKey', 'Google Maps API Key'),

        ]);
    }
}
