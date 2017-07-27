<?php

/**
 * Class SiteConfigExtension
 *
 * @property SiteConfig $owner
 */
class SiteConfigExtension extends DataExtension
{
    private static $db = [
        'Phone'                   => 'Varchar(255)',
        'Email'                   => 'Varchar(255)',
        'ContactFormEmail'        => 'Varchar(255)',
        'Address'                 => 'Text',
        'PostalAddress'           => 'Text',
        'FacebookPage'            => 'Varchar(255)',
        'LinkedInPage'            => 'Varchar(255)',
        'PinterestPage'           => 'Varchar(255)',
        'InstagramPage'           => 'Varchar(255)',
        'YoutubePage'             => 'Varchar(255)',
        'TwitterPage'             => 'Varchar(255)',
        'MailChimpAPI'            => 'Varchar(255)',
        'MailChimpListID'         => 'Varchar(255)',
        'MailChimpSuccessMessage' => 'Text',
        'GoogleMapsApiKey'        => 'Varchar(100)',
        'GoogleTrackingID'        => 'Varchar(100)',
        'GoogleTagManagerID'      => 'Varchar(100)',
        'BHProjectKey'            => 'Varchar(100)',
        'EnableBugherd'           => 'Boolean'
    ];

    /**
     * @var array
     */
    public static $defaults = [
        'MailChimpSuccessMessage' => 'Your subscription has been received, you will be sent a confirmation email shortly.'
    ];

    private static $many_many = [
        'PageSpeedPages' => 'Page'
    ];

    /**
     * @param FieldList $fields
     */
    public function updateCMSFields(FieldList $fields)
    {
        /** =========================================
         * @var TextareaField $address
         * @var TextareaField $postalAddress
         * @var TextField     $mailChimpAPI
         * @var TextareaField $mailChimpSuccessMessage
        ===========================================*/

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
            HeaderField::create('', 'Company Details'),
            TextField::create('Phone', 'Phone Number')
                ->addExtraClass('input-wrap--half'),
            TextField::create('Email', 'Public Email Address')
                ->addExtraClass('input-wrap--half input-wrap--half--last'),
            $address,
            $postalAddress,
            HeaderField::create('', 'Social Media Pages'),
            TextField::create('FacebookPage', '<img src="mysite/dist/images/cms/social/Facebook.png" class="inlineIconSocial"> Facebook')
                ->addExtraClass('input-wrap--half'),
            TextField::create('LinkedInPage', '<img src="mysite/dist/images/cms/social/LinkedIn.png" class="inlineIconSocial"> LinkedIn')
                ->addExtraClass('input-wrap--half input-wrap--half--last'),
            TextField::create('YoutubePage', '<img src="mysite/dist/images/cms/social/Youtube.png" class="inlineIconSocial"> Youtube')
                ->addExtraClass('input-wrap--half'),
            TextField::create('InstagramPage', '<img src="mysite/dist/images/cms/social/Instagram.png" class="inlineIconSocial"> Instagram')
                ->addExtraClass('input-wrap--half input-wrap--half--last'),
            TextField::create('PinterestPage', '<img src="mysite/dist/images/cms/social/Pinterest.png" class="inlineIconSocial"> Pinterest')
                ->addExtraClass('input-wrap--half'),
            TextField::create('TwitterPage', '<img src="mysite/dist/images/cms/social/Twitter.png" class="inlineIconSocial"> Twitter')
                ->addExtraClass('input-wrap--half input-wrap--half--last')
        ]);

        /** -----------------------------------------
         * Integrations
         * ----------------------------------------*/

        $fields->findOrMakeTab('Root.Settings.Integrations');

        $fields->addFieldsToTab('Root.Settings.Integrations', [
            // Mailchimp
            HeaderField::create('', 'Newsletter Subscription'),
            LiteralField::create('', '<p>The API key and list ID are necessary for the Newsletter Subscription form to function. <a href="https://us9.admin.mailchimp.com/account/api-key-popup/" target="_blank"><i>How do I get my MailChimp API Key?</i></a></p>'),
            TextField::create('MailChimpAPI', 'API Key')
                ->addExtraClass('input-wrap--half'),
            TextField::create('MailChimpListID', 'List ID')
                ->addExtraClass('input-wrap--half input-wrap--half--last'),
            TextareaField::create('MailChimpSuccessMessage', 'Success Message')->setRows(2)
                ->setRightTitle('Message displayed when a user has successfully subscribed to a list.'),

            // BugHerd
            HeaderField::create('', 'Bugherd'),
            CheckboxField::create('EnableBugherd', 'Enable bugherd?'),
            TextField::create('BHProjectKey', 'Bugherd Project Key')
                ->setRightTitle('<a href="https://support.bugherd.com/hc/en-us/articles/204171450-Installing-the-Script" target="_blank"><i>How do I get my BugHerd Project Key?</i></a>'),

            // Google
            HeaderField::create('', 'Google Tracking'),
            TextField::create('GoogleTrackingID', 'Tracking ID')
                ->addExtraClass('input-wrap--half')
                ->setAttribute('placeholder', 'UA-XXXXXXXX-X'),
            TextField::create('GoogleTagManagerID', 'Tag Manager ID')
                ->setAttribute('placeholder', 'GTM-XXXXXX')
                ->addExtraClass('input-wrap--half input-wrap--half--last'),

            // Google Maps
            HeaderField::create('', 'Google Maps'),
            TextField::create('GoogleMapsApiKey', 'Google Maps API Key'),

            // Pagespeed
            HeaderField::create('', 'Google Page Speed'),
            TreeMultiselectField::create('PageSpeedPages', 'Select pages to test against', 'SiteTree')

        ]);
    }

    /**
     * @return bool|mixed
     */
    public function getFormattedPhone()
    {
        if ($phone = (string)SiteConfig::current_site_config()->Phone) {
            return preg_replace('/\s+/', '', $phone);
        }
        return false;
    }
}
