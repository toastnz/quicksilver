/**
 * NPM Requirements
 */
 const $   		 = require('jquery');
 const dragula   = require('dragula');
 const _         = require('underscore');
 /**
 * Local Requirements
 */
 import logging from './logging';
 import * as sidebar from './sidebar'; 
 import * as module from './modules'; 

 const $modules = $('#modules'); 
 const $snappyContent = $('#snappyContent');


 dragula([$modules[0], $snappyContent[0]], {
 	copy:function (el, target){
 		(el.className.indexOf('sidebarModule') > 1)?true:false;
 	},
 	accepts: function (el, target) {
 		return target === $snappyContent[0];
 	}
 }).on('drop', function (el, target) {
 	if (target === $snappyContent[0]) {
 		log('drop() => Dragula item has been dropped');
 		$snappyContent.find('.sidebarModule').remove();
 		$snappyContent.append(module.create($(el).attr('data-module-type'))); 
 		module.updateOrder();
 	}
 });


 sidebar.open();