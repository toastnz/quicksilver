
const ColorPicker = require('simple-color-picker');

let colorPicker;

$('#wysiwyg').on('click', 'button', function(e) {
  let action= $(this).attr('data-action');
  log('action=> ' + action);
  switch(action) {
    case 'h1':
    case 'h2':
    case 'h3': 
    case 'h4':
    case 'h5':
    case 'h6':
    case 'p':
    document.execCommand('formatBlock', false, action);
    break;
    case 'foreColor':
    chooseColour();
    default:
    document.execCommand(action, false, null);
    break;
  }
  update_output();
})

function chooseColour(){
  colorPicker = new ColorPicker({
    color: '#333333',
    background: '#e1e1e1',
    el: document.getElementById('wysiwyg'),
    width: 200,
    height: 200
  }).onChange(function(){ 
    if(colorPicker !== undefined){
      log(colorPicker.getHexString());
    }
  });
}

$('body').mouseup(function (e) {
  let container = $('.Scp');
  if (!container.is(e.target) && container.has(e.target).length === 0 && colorPicker !== undefined){
    log(colorPicker)
    colorPicker.remove();
  }
});


$('.contentModule').bind('blur keyup paste copy cut mouseup', function(e) {
  update_output($(this));
}) 

function update_output($el) {
  if($el){
    let content = $el[0].outerHTML; 
    $('#output').text(content);
  }
}
