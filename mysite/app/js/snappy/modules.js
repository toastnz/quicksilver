/**
 * Constants
 */
const _ = require('underscore');
const alertify = require('alertify.js');
const $snappy = $('#snappy');

const SwiftVideos = ['QcIy9NiNbmo', 'IdneKLhsWOQ', '-CmadmM5cOk', '8xg3vE8Ie_E', 'jYa1eI1hpDE', 'e-ORhEE9VVg'];
const modules = {};
const text = {
    heading  : `Lets get some mullet grundies.`,
    paragraph: `Lets get some mullet my as cross as a rego. As dry as a hottie how as cross as a outback. Get a dog up ya dog's balls flaming mad as a troppo. Lets throw a bush telly my flat out like a dero. Flat out like a not my bowl of rice piece of piss fisho. Come a give it a burl flaming get a dog up ya grundies.Lets get some mullet my as cross as a rego. As dry as a hottie how as cross as a outback. Get a dog up ya dog's balls flaming mad as a troppo. Lets throw a bush telly my flat out like a dero. Flat out like a not my bowl of rice piece of piss fisho. Come a give it a burl flaming get a dog up ya grundies.`,
};

let templates = {

    blockquote: function () {
        return `<div class="module contentModule blockquote">
                    <div class="wrap">
                        <blockquote>
                            <p contenteditable="true">${text.paragraph}</p>
                            <span class="attribution" contenteditable="true">Joan of Ark</span>
                        </blockquote>
                    </div>
                </div>`;
    },

    text: function () {
        return `<div class="module contentModule text">
                    <div class="wrap" contenteditable="true">
                        <h4>${text.heading}</h4>
                        <p>${text.paragraph}</p>
                        <p>${text.paragraph}</p>
                    </div>
                </div>`;
    },

    video: function () {
        return `<div class="module contentModule video">
                    <img style="width:100%;height:auto;" src="http://img.youtube.com/vi/${_.sample(SwiftVideos)}/maxresdefault.jpg">
                </div>`;
    },

    image: function () {
        return `<div class="module contentModule image">
                    <img style="width:100%;height:auto;" src="http://placehold.it/1440x760?text=Image">
                    <p contenteditable="true">${text.heading}</p>
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


export function updateOrder() {
    alertify.maxLogItems(1).success('Row order updated')
    log('updateOrder() => Updating the order of the modules');
}

/**
 * Close the sidebar
 */
export function exitEditMode() {
    $('.editMode').removeClass('editMode');
    // log('exitEditMode() => Exiting edit mode');
}

/**
 * Open the sidebar
 */
export function enterEditMode($el) {
    if ($el.hasClass('editMode')) {
        return false;
    } else {
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
$snappy.on('click', '.contentModule', function () {
    enterEditMode($(this));
});

// $snappy.mouseup(function (e) {
// 	var container = $('.contentModule');
// 	if (!container.is(e.target) && container.has(e.target).length === 0){
// 		exitEditMode();
// 	}
// });
