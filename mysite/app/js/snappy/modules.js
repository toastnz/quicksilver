/**
 * Constants
 */
 const $snappy = $('#snappy'); 

 const modules = {};

 modules.blockquote = `
 <div class="module contentModule blockquote">
 <blockquote>
 <p contenteditable="true">
 Lets get some mullet my as cross as a rego. As dry as a hottie how as cross as a outback. Get a dog up ya dog's balls flaming mad as a troppo. Lets throw a bush telly my flat out like a dero. Flat out like a not my bowl of rice piece of piss fisho. Come a give it a burl flaming get a dog up ya grundies.
 </p>
 <span class="attribution" contenteditable="true">
 Joan of Ark
 </span>
 </blockquote>
 </div>

 `;
 modules.text = `
 <div class="module contentModule">
 <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
 </div>
 `;

 export function create(type){
 	return modules[type];
 }


 export function updateOrder(){
 	log('updateOrder() => Updating the order of the modules');
 }

/**
 * Close the sidebar
 */ 
 export function exitEditMode(){
 	$('.editMode').removeClass('editMode');
 	log('exitEditMode() => Exiting edit mode');
 }

/**
 * Open the sidebar 
 */
 export function enterEditMode($el){
 	exitEditMode();
 	$el.addClass('editMode');
 	log('enterEditMode() => Entering edit mode');
 }

/**
 *
 * INTERACTIONS
 * 
 */
 $snappy.on('click', '.contentModule', function(){
 	enterEditMode($(this));
 });

 $snappy.mouseup(function (e) {
 	var container = $('.contentModule');
 	if (!container.is(e.target) && container.has(e.target).length === 0){
 		exitEditMode();
 	}
 });
