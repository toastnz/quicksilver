/**
 * Constants
 */
 const $snappy = $('#snappy'); 

 const modules = {};

 modules.blockquote = `
 <div class="module contentModule">
 <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>
 </div>
 `;
 modules.text = `
 <div class="module contentModule">
 <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
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
 	log('updateOrder() => Updating the order of the modules');
 }