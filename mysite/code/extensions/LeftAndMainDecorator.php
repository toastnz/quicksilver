<?php

class LeftAndMainDecorator extends Extension
{
    public function onAfterInit()
    {
        CMSMenu::remove_menu_item('Help');
    }
}