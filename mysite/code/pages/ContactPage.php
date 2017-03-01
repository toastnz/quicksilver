<?php

/**
 * Class ContactPage
 */
class ContactPage extends Page
{
    private static $singular_name = 'Contact Page';
    private static $plural_name = 'Contact Pages';
    private static $description = 'Displays a contact form which receives enquiries from the end user';
    private static $icon = 'mysite/dist/images/cms/envelope-at-sign.png';
}

class ContactPage_Controller extends Page_Controller
{
    private static $allowed_actions = [
        'ContactForm'
    ];

    public function ContactForm()
    {
        /** =========================================
         * @var ContactForm $form
        ===========================================*/

        $form = ContactForm::create($this, 'ContactForm');

        return $form;
    }
}
