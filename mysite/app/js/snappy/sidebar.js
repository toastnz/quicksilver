/**
 * Our Main Snappy sidebar
 * @type {Object}
 */
 const $sidebar = $('#sidebar');

/**
 * Check the current state of the sidebar
 * @return {String} Current sidebar state
 */ 
 export function state(){
 	if($sidebar.hasClass('sidebarOpen')){
 		log('sidebarState() => sidebar is open');
 		return 'open'; 
 	}else{
 		log('sidebarState() => sidebar is closed');
 		return 'closed';
 	}
 } 

/**
 * Close the sidebar
 */ 
 export function close(){
 	$sidebar.removeClass('sidebarOpen');
 	log('openSideBar() => closing sidebar');
 }

/**
 * Open the sidebar 
 */
 export function open(){
 	$sidebar.addClass('sidebarOpen');
 	log('openSideBar() => opening sidebar');
 }

 /**
  *
  * INTERACTIONS
  * 
  */

  $sidebar.on('click', '.toggle',function(e){
  	e.preventDefault();
  	if(sidebar.state() === 'open'){
  		sidebar.close();
  	}else{
  		sidebar.open();
  	}  
  });


