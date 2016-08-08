"use strict";

/*------------------------------------------------------------------
 Type setting Templates
 ------------------------------------------------------------------*/

/* Select Template */
export function selectTemplate(data) {
    return `
    <div class="input-wrap input-wrap__select">
        <select id="${createID(data.tag)}">
            ${createOptions(data.type)}
        </select>
        <label for="${createID(data.tag)}">${createLabel(data.label)}</label>
    </div>`
}

/* Number Template */
export function numberTemplate(data) {
    return `
    <div class="input-wrap input-wrap__number">
        <input type="number" id="${createID(data.tag)}" placeholder="${data.default}" data-default="${data.default}" min="0" max="100" step="0.1" value="data.default">
        <label for="${createID(data.tag)}">${createLabel(data.label)}</label>
        ${createLabelRight(data.unit)}
    </div>`
}

/* Number Template */
export function colorTemplate(data) {
    return `
    <div class="input-wrap input-wrap__colour">
        <label for="${createID(data.tag)}">${createLabel(data.label)}</label>
        <input type="text" id="${createID(data.tag)}">
        <span></span>
    </div>`
}

/*------------------------------------------------------------------
 Type setting Templates
 ------------------------------------------------------------------*/

export const elementTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

export const typeDefinitions = {
    fontStyle: ['normal', 'italic', 'oblique'],
    fontWeight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    textAlign: ['left', 'center', 'right', 'justify'],
    textDecoration: ['none', 'underline', 'overline', 'line-through'],
    textTransform: ['none', 'capitalize', 'uppercase', 'lowercase']
};

/*------------------------------------------------------------------
 Default Values for element tags
 ------------------------------------------------------------------*/

export const defaultValues = {
    h1: {
        tag: 'h1',
        attributes: {
            fontSize: {
                label: 'Font Size',
                css: 'font-size',
                value: 7,
                unit: 'rem'
            },
            fontWeight: {
                label: 'Font Weight',
                css: 'font-weight',
                value: 100,
            },
            fontStyle: {
                label: 'Font Style',
                css: 'font-style',
                value: 'normal',
            },
            textAlign: {
                label: 'Text Align',
                css: 'text-align',
                value: 'left',
            },
            lineHeight: {
                label: 'Line Height',
                css: 'line-height',
                value: 1.2,
            },
            letterSpacing: {
                label: 'Letter Spacing',
                css: 'letter-spacing',
                value: 0,
                unit: 'px'
            },
            colour: {
                label: 'Colour',
                css: 'color',
                value: '#333333'
            },
            background: {
                label: 'Background',
                css: 'background',
                value: 'transparent'
            }
        }
    },
    h2: {
        tag: 'h2',
        attributes: {
            fontSize: {
                label: 'Font Size',
                css: 'font-size',
                value: 6,
                unit: 'rem'
            },
            fontWeight: {
                label: 'Font Weight',
                css: 'font-weight',
                value: 100,
            },
            fontStyle: {
                label: 'Font Style',
                css: 'font-style',
                value: 'normal',
            },
            textAlign: {
                label: 'Text Align',
                css: 'text-align',
                value: 'left',
            },
            lineHeight: {
                label: 'Line Height',
                css: 'line-height',
                value: 1.2,
            },
            letterSpacing: {
                label: 'Letter Spacing',
                css: 'letter-spacing',
                value: 0,
                unit: 'px'
            },
            colour: {
                label: 'Colour',
                css: 'color',
                value: '#333333'
            },
            background: {
                label: 'Background',
                css: 'background',
                value: 'transparent'
            }
        }
    },
    h3: {
        tag: 'h3',
        attributes: {
            fontSize: {
                label: 'Font Size',
                css: 'font-size',
                value: 5,
                unit: 'rem'
            },
            fontWeight: {
                label: 'Font Weight',
                css: 'font-weight',
                value: 100,
            },
            fontStyle: {
                label: 'Font Style',
                css: 'font-style',
                value: 'normal',
            },
            textAlign: {
                label: 'Text Align',
                css: 'text-align',
                value: 'left',
            },
            lineHeight: {
                label: 'Line Height',
                css: 'line-height',
                value: 1.2,
            },
            letterSpacing: {
                label: 'Letter Spacing',
                css: 'letter-spacing',
                value: 0,
                unit: 'px'
            },
            colour: {
                label: 'Colour',
                css: 'color',
                value: '#333333'
            },
            background: {
                label: 'Background',
                css: 'background',
                value: 'transparent'
            }
        }
    },
    h4: {
        tag: 'h4',
        attributes: {
            fontSize: {
                label: 'Font Size',
                css: 'font-size',
                value: 4,
                unit: 'rem'
            },
            fontWeight: {
                label: 'Font Weight',
                css: 'font-weight',
                value: 100,
            },
            fontStyle: {
                label: 'Font Style',
                css: 'font-style',
                value: 'normal',
            },
            textAlign: {
                label: 'Text Align',
                css: 'text-align',
                value: 'left',
            },
            lineHeight: {
                label: 'Line Height',
                css: 'line-height',
                value: 1.2,
            },
            letterSpacing: {
                label: 'Letter Spacing',
                css: 'letter-spacing',
                value: 0,
                unit: 'px'
            },
            colour: {
                label: 'Colour',
                css: 'color',
                value: '#333333'
            },
            background: {
                label: 'Background',
                css: 'background',
                value: 'transparent'
            }
        }
    },
    h5: {
        tag: 'h5',
        attributes: {
            fontSize: {
                label: 'Font Size',
                css: 'font-size',
                value: 3,
                unit: 'rem'
            },
            fontWeight: {
                label: 'Font Weight',
                css: 'font-weight',
                value: 100,
            },
            fontStyle: {
                label: 'Font Style',
                css: 'font-style',
                value: 'normal',
            },
            textAlign: {
                label: 'Text Align',
                css: 'text-align',
                value: 'left',
            },
            lineHeight: {
                label: 'Line Height',
                css: 'line-height',
                value: 1.2,
            },
            letterSpacing: {
                label: 'Letter Spacing',
                css: 'letter-spacing',
                value: 0,
                unit: 'px'
            },
            colour: {
                label: 'Colour',
                css: 'color',
                value: '#333333'
            },
            background: {
                label: 'Background',
                css: 'background',
                value: 'transparent'
            }
        }
    },
    h6: {
        tag: 'h6',
        attributes: {
            fontSize: {
                label: 'Font Size',
                css: 'font-size',
                value: 2,
                unit: 'rem'
            },
            fontWeight: {
                label: 'Font Weight',
                css: 'font-weight',
                value: 100,
            },
            fontStyle: {
                label: 'Font Style',
                css: 'font-style',
                value: 'normal',
            },
            textAlign: {
                label: 'Text Align',
                css: 'text-align',
                value: 'left',
            },
            lineHeight: {
                label: 'Line Height',
                css: 'line-height',
                value: 1.2,
            },
            letterSpacing: {
                label: 'Letter Spacing',
                css: 'letter-spacing',
                value: 0,
                unit: 'px'
            },
            colour: {
                label: 'Colour',
                css: 'color',
                value: '#333333'
            },
            background: {
                label: 'Background',
                css: 'background',
                value: 'transparent'
            }
        }
    },
    p: {
        tag: 'p',
        attributes: {
            fontSize: {
                label: 'Font Size',
                css: 'font-size',
                value: 1.6,
                unit: 'rem'
            },
            fontWeight: {
                label: 'Font Weight',
                css: 'font-weight',
                value: 100,
            },
            fontStyle: {
                label: 'Font Style',
                css: 'font-style',
                value: 'normal',
            },
            textAlign: {
                label: 'Text Align',
                css: 'text-align',
                value: 'left',
            },
            lineHeight: {
                label: 'Line Height',
                css: 'line-height',
                value: 1.4,
            },
            letterSpacing: {
                label: 'Letter Spacing',
                css: 'letter-spacing',
                value: 0,
                unit: 'px'
            },
            colour: {
                label: 'Colour',
                css: 'color',
                value: '#333333'
            },
            background: {
                label: 'Background',
                css: 'background',
                value: 'transparent'
            }
        }
    }
};
