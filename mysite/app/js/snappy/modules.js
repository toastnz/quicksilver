/**
 * Constants
 */
 const $snappy = $('#snappy'); 

 const modules = {};

 modules.blockquote = `
 <div class="module contentModule blockquote">
 <div class="wrap">
 <blockquote>
 <p contenteditable="true">
 Lets get some mullet my as cross as a rego. As dry as a hottie how as cross as a outback. Get a dog up ya dog's balls flaming mad as a troppo. Lets throw a bush telly my flat out like a dero. Flat out like a not my bowl of rice piece of piss fisho. Come a give it a burl flaming get a dog up ya grundies.
 </p>
 <span class="attribution" contenteditable="true">
 Joan of Ark
 </span>
 </blockquote>
 </div>
 </div>
 `;

 modules.text = `
 <div class="module contentModule text">
 <div class="wrap" contenteditable="true">
 <p>Lets get some mullet my as cross as a rego. As dry as a hottie how as cross as a outback. Get a dog up ya dog's balls flaming mad as a troppo. Lets throw a bush telly my flat out like a dero. Flat out like a not my bowl of rice piece of piss fisho. Come a give it a burl flaming get a dog up ya grundies.Lets get some mullet my as cross as a rego. As dry as a hottie how as cross as a outback. Get a dog up ya dog's balls flaming mad as a troppo. Lets throw a bush telly my flat out like a dero. Flat out like a not my bowl of rice piece of piss fisho. Come a give it a burl flaming get a dog up ya grundies.</p>
 <p>Lets get some mullet my as cross as a rego. As dry as a hottie how as cross as a outback. Get a dog up ya dog's balls flaming mad as a troppo. Lets throw a bush telly my flat out like a dero. Flat out like a not my bowl of rice piece of piss fisho. Come a give it a burl flaming get a dog up ya grundies.</p>
 </div>
 </div>
 `;

 modules.video = `
 <div class="module contentModule video">
 <img style="width:100%;height:auto;" src="http://img.youtube.com/vi/e-ORhEE9VVg/maxresdefault.jpg">
 
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
 	// log('exitEditMode() => Exiting edit mode');
 }

 /**
 * Open the sidebar 
 */
 export function enterEditMode($el){
 	if($el.hasClass('editMode')){
 		return false;
 	}else{
 		exitEditMode();
 		$el.addClass('editMode');
 		log('enterEditMode() => Entering edit mode');
 	}
 }

 /**
 *
 * INTERACTIONS
 * 
 */
 $snappy.on('click', '.contentModule', function(){
 	enterEditMode($(this));
 });

 // $snappy.mouseup(function (e) {
 // 	var container = $('.contentModule');
 // 	if (!container.is(e.target) && container.has(e.target).length === 0){
 // 		exitEditMode();
 // 	}
 // });
