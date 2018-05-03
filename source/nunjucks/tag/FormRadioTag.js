'use strict';

/**
 * Requirements
 * @ignore
 */
const HtmlTag = require('./HtmlTag.js').HtmlTag;


/**
 * @memberOf nunjucks.tag
 */
class FormRadioTag extends HtmlTag
{
    /**
     */
    constructor()
    {
        super();

        // Assign options
        this._hasBody = false;
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'nunjucks.tag/FormRadioTag';
    }


    /**
     * @type {Array}
     */
    get name()
    {
        return ['radio'];
    }


    /**
     * @type {String}
     */
    getTagName()
    {
        return 'input';
    }


    parseAttributes(params)
    {
        const attributes = super.parseAttributes(params);

        attributes['type'] = this.name.shift();

        return attributes;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FormRadioTag = FormRadioTag;
