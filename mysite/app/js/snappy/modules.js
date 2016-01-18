/**
 * Constants
 */
const _ = require('underscore');
const alertify = require('alertify.js');
const $snappy = $('#snappy');

const SwiftVideos = ['e-ORhEE9VVg'];
const modules = {};
const text = {
    heading        : `Collaboratively administrate markets`,
    paragraph      : `Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.`,
    short_paragraph: `Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.`,
};

export function moduleEdit(showSettings) {
    let settings = (!showSettings) ? `` : `<span class="grey js-edit-settings"><i class="material-icons">settings</i></span><span class="blue js-edit-data"><i class="material-icons">code</i></span>`;
    return `<div class="moduleEdit">
                <span class="green"><div class="js-drag"></div><i class="material-icons">drag_handle</i></span>
                ${settings}
                <span class="red js-delete-module"><i class="material-icons">delete</i></span>
            </div>`;

};

let templates = {

    divider: function () {
        return `<div class="contentModule divider">
                    ${moduleEdit(false)}
                    <div class="wrap">
                        <hr>
                    </div>                    
                </div>`;
    },

    blockquote: function () {
        return `<div class="module contentModule blockquote">
                    ${moduleEdit(true)}
                    <div class="wrap">
                        <blockquote class="data" contenteditable="true">
                            <h6>${text.short_paragraph}</h6>
                            <span class="attribution" contenteditable="true">Joan of Ark</span>
                        </blockquote>
                    </div>
                </div>`;
    },

    text: function () {
        return `<div class="module contentModule text">
                    ${moduleEdit(true)}
                    <div class="wrap">
                            <div class="data" contenteditable="true">
                                <h3>${text.heading}</h3>
                                <p>${text.paragraph}</p>
                                <p>${text.paragraph}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
    },

    video: function () {
        return `<div class="module contentModule video">
                    ${moduleEdit(true)}
                    <div class="wrap">
                            <div class="image" style="background-image:url('http://img.youtube.com/vi/${_.sample(SwiftVideos)}/maxresdefault.jpg');">
                                <a href="#" class="material-icons">play_circle_outline</a>
                            </div>
                        <div class="data" contenteditable="true">
                        </div>
                    </div>
                </div>`;
    },

    image: function () {
        return `<div class="module contentModule image">
                    ${moduleEdit(true)}
                    <div class="wrap">
                        <div class="data">
                            <img style="width:100%;height:auto;" src="http://placehold.it/1440x760?text=Image">
                            <p contenteditable="true">${text.heading}</p>
                        </div>
                    </div>
                </div>`;
    }


}

export function create(type) {
    if (templates[type] !== undefined) {
        return templates[type]();
    } else {
        alertify.error('That template doe not exist yet');
    }
}

const $dataModal = $('.dataModal');

/**
 * Enter Edit HTML Mode
 */
let $oldHTML;
let $newHTML;


export function enterHTMLMode($el) {
    $oldHTML = $el;
    $dataModal.addClass('active');
    let $newHTML = $oldHTML.find('.data')[0].outerHTML;
    $dataModal.find('.html').val($newHTML);
}

$snappy.on('click', '.js-save-data', function () {
    saveHTML($oldHTML, $newHTML);
});


export function exitHTMLMode() {
    $('.dataModal.active').removeClass('active');
}

export function saveHTML($el, html) {
    let newHTML = $dataModal.find('.html').val();
    $el.find('.data').replaceWith(newHTML);
    exitHTMLMode();
}

/**
 * Activate editMode for the curreent contentModule
 */
export function enterEditMode($el) {
    if ($el.hasClass('editMode')) {
        return false;
    } else {
        exitEditMode();
        $('body').addClass('textEditor');
        $el.addClass('editMode');
        log('enterEditMode() => Entering edit mode');
    }
}

/**
 * Remove all active editMode elements
 */
export function exitEditMode() {
    $('.editMode').removeClass('editMode');
    $('body').removeClass('textEditor');
}

/**
 *
 * INTERACTIONS
 *
 */
$snappy.on('click', '.contentModule', function (e) {
    e.preventDefault();
    enterEditMode($(this));
});

$snappy.on('click', '.js-edit-data', function (e) {
    e.preventDefault();
    enterHTMLMode($(this).closest('.contentModule'));
});

$snappy.on('click', '.js-cancel-save-data', function (e) {
    e.preventDefault();
    exitHTMLMode();
});

$('body').on('click', '.js-close-textEditor', function (e) {
    e.preventDefault();
    exitEditMode();
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        exitHTMLMode();
        closeDeleteModal();
    }
});

$snappy.mousedown(function (e) {
    var container = $('[contenteditable=true]');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.blur();
    }
});

let $modalToDelete;
let $deleteModal = $('.deleteModal');

export function openDeleteModal() {
    $deleteModal.addClass('active');
}

export function closeDeleteModal() {
    $deleteModal.removeClass('active');
}

export function deleteModule() {
    $modalToDelete.remove();
    $modalToDelete = '';
    saveSnappyContent();
}

$snappy.on('click', '.js-delete-module', function (e) {
    e.preventDefault();
    $modalToDelete = $(this).closest('.contentModule')
    openDeleteModal();
});

$snappy.on('click', '.js-cancel-delete', function (e) {
    e.preventDefault();
    closeDeleteModal();
    $modalToDelete = '';
});

$snappy.on('click', '.js-confirm-delete', function (e) {
    e.preventDefault();
    deleteModule();
    closeDeleteModal();
});


export function saveSnappyContent() {
    $.ajax({
        url     : $('#snappy').attr('data-post-url'),
        type    : 'POST',
        dataType: 'json',
        data    : {
            data: $('#snappyContent').html()
        }
    }).done(function () {
        alertify.maxLogItems(1).success('Content Saved');
    });
}

