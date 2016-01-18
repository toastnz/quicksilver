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
    paragraph      : `Although it meant courting more run-ins at school, John decided to indulge her son's passion. By age 12, Richard was attending science camps during the summer and private school during the school year. When a teacher recommended her son engage in the Columbia Science Honours Program, a post-Sputnik program designed for gifted middle- and high-school students in New York City, Stallman added to his extracurriculars and was soon commuting uptown to the Columbia University campus on Saturdays.`,
    short_paragraph: `Although it meant courting more run-ins at school, John decided to indulge her son's passion. By age 12, Richard was attending science camps during the summer and private school during the school year.`,
};

export function moduleEdit(showSettings) {
    let settings = (!showSettings) ? `` : `<span class="purple js-edit-settings"><i class="material-icons">settings</i></span><span class="blue js-edit-data"><i class="material-icons">code</i></span>`;
    return `<div class="moduleEdit">
                <span class="brown"><div class="js-drag"></div><i class="material-icons">drag_handle</i></span>
                ${settings}
                <span class="green js-save-module"><i class="material-icons">save</i></span>
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

    padding: function () {
        return `<div class="contentModule padding">
                    ${moduleEdit(false)}
                    <div class="wrap">
                        <br>
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
                                <p>${text.paragraph}</p>
                                <p>${text.paragraph}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
    },

    heading: function () {
        return `<div class="module contentModule text">
                    ${moduleEdit(true)}
                    <div class="wrap">
                            <div class="data" contenteditable="true">
                                <h3>${text.heading}</h3>
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
                            <img src="http://img.youtube.com/vi/${_.sample(SwiftVideos)}/maxresdefault.jpg">
                            <p contenteditable="true">${text.heading}</p>
                        </div>
                    </div>
                </div>`;
    },

    imageText: function () {
        return `<div class="module contentModule imageText">
                    ${moduleEdit(true)}
                    <div class="wrap">
                        <div class="data">
                            <img src="http://img.youtube.com/vi/${_.sample(SwiftVideos)}/maxresdefault.jpg">
                            <h5>${text.heading}</h5>
                            <p contenteditable="true">${text.paragraph}</p>
                            <p contenteditable="true">${text.paragraph}</p>
                        </div>
                    </div>
                </div>`;
    },

    list: function () {
        return `<div class="module contentModule text">
                    ${moduleEdit(true)}
                    <div class="wrap">
                        <div class="data">
                           <ul>
                              <li>${text.heading}</li>
                              <li>${text.heading}</li>
                              <li>${text.heading}</li>
                              <li>${text.heading}</li>
                           </ul>
                        </div>
                    </div>
                </div>`;
    },

    trippleImage: function () {
        return `<div class="module contentModule trippleImage">
                    ${moduleEdit(true)}
                    <div class="data wrap">
                        <div class="wrapExpander">
                            <div class="column">
                                <img src="http://img.youtube.com/vi/${_.sample(SwiftVideos)}/maxresdefault.jpg">
                                <p contenteditable="true">${text.heading}</p>
                            </div>
                            <div class="column">
                                <img src="http://img.youtube.com/vi/${_.sample(SwiftVideos)}/maxresdefault.jpg">
                                <p contenteditable="true">${text.heading}</p>
                            </div>
                            <div class="column last">
                                <img src="http://img.youtube.com/vi/${_.sample(SwiftVideos)}/maxresdefault.jpg">
                                <p contenteditable="true">${text.heading}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
    },

    columnText: function () {
        return `<div class="module contentModule columnText">
                    ${moduleEdit(true)}
                    <div class="wrap" class="data">
                            <div class="column" contenteditable="true">
                                <h5>${text.heading}</h5>
                                <p>${text.paragraph.substring(0, 440)}</p>
                            </div>
                            <div class="column" contenteditable="true">
                                <h5>${text.heading}</h5>
                                <p>${text.paragraph.substring(0, 220)}</p>
                            </div>
                            <div class="column last" contenteditable="true">
                                <h5>${text.heading}</h5>
                                <p>${text.paragraph.substring(0, 400)}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
    },


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

$snappy.on('click', '.js-save-module', function (e) {
    e.preventDefault();
    saveSnappyContent();
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


export function saveSnappyContent(clear) {
    let content;
    if (clear) {
        content = '';
    }
    else {
        content = $('#snappyContent').html();
    }

    $.ajax({
        url     : $('#snappy').attr('data-post-url'),
        type    : 'POST',
        dataType: 'json',
        data    : {
            data: content
        }
    }).done(function () {
        alertify.logPosition("bottom right").maxLogItems(1).success('Content Saved');
    });
}

