/**
 * Constants
 */
 const $snappy = $('#snappy'); 

 const modules = {};

 modules.blockquote = `
 <div class="module contentModule">
 blockquote
 </div>
 `;
 modules.text = `
 <div class="module contentModule">
 text
 </div>
 `;
 modules.video = `
 <div class="module contentModule">
 video
 </div>
 `;
 modules.image = `
 <div class="module contentModule">
 image
 </div>
 `;
 modules.faq = `
 <div class="module contentModule">
 faq
 </div>
 `;


 export function create(type){
 	return modules[type];
 }


 export function updateOrder(){
 	log('updateOrder() => Updating the order of the modules')
 }