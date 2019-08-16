/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/

import tingle from 'tingle.js';
import * as template from './Templates'

/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/

const buttons = document.querySelectorAll('.js-video-modal');

buttons.forEach(button => (button.addEventListener('click', e => createModal(e.currentTarget))));

/** 
 * 
 * @param {*} e 
 */
const createModal = (e) => {
    let modal = new tingle.modal({ onClose() { modal.destroy() } });
    setContent(modal, e.dataset.videoType, e.dataset.videoId);
    modal.open();
};

/**
 * 
 * @param {*} modal 
 * @param {*} video_id 
 * @param {*} video_source 
 */
const setContent = (modal, video_id, video_source) => {
    modal.setContent(template.videoModal(video_id, video_source));
};


