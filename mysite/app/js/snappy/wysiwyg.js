const ColorPicker = require('simple-color-picker');
const alertify = require('alertify.js');

let colorPicker;
let selectedText;
let sel;

$('#wysiwyg').on('click', 'button', function (e) {
    e.preventDefault();
    let action = $(this).attr('data-action');
    log('action => ' + action);
    switch (action) {
        case 'insert_link':
        selectedText = saveSelection();
        createLink();
        break;
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
        chooseColour('foreColor');
        break;
        case 'backColor':
        chooseColour('backColor');
        break;
        default:
        document.execCommand(action, false, null);
        break;
    }
    update_output();
});


function chooseColour(type) {
    colorPicker = new ColorPicker({
        color     : '#333333',
        background: '#e1e1e1',
        el        : document.getElementById('wysiwyg'),
        width     : 200,
        height    : 200
    }).onChange(function () {
        if (colorPicker !== undefined) {
            if(type === 'foreColor'){
                document.execCommand('foreColor', false, colorPicker.getHexString());
            }else if(type === 'backColor'){
                document.execCommand('backColor', false, colorPicker.getHexString());
            }
        }
    });
}

$('body').mouseup(function (e) {
    let container = $('.Scp');
    if (!container.is(e.target) && container.has(e.target).length === 0 && colorPicker !== undefined) {
        log('created new colour picker');
        colorPicker.remove();
    }
});


$('.contentModule').bind('blur keyup paste copy cut mouseup', function (e) {
    update_output($(this));
});

function update_output($el) {
    if ($el) {
        let content = $el[0].outerHTML;
        $('#output').text(content);
    }
}

function saveSelection() {
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            let ranges = [];
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                ranges.push(sel.getRangeAt(i));
            }
            return ranges;
        }
    } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
    }
    return null;
}

function restoreSelection(savedSel) {
    if (savedSel) {
        if (window.getSelection) {
            sel = window.getSelection();
            sel.removeAllRanges();
            for (var i = 0, len = savedSel.length; i < len; ++i) {
                sel.addRange(savedSel[i]);
            }
        } else if (document.selection && savedSel.select) {
            savedSel.select();
        }
    }
}


function createLink() {
    alertify.prompt("Enter a URL to link to", function (url) {
        restoreSelection(selectedText);
        document.execCommand("CreateLink", false, url);
    }, function () {
        return false;
    });
}


