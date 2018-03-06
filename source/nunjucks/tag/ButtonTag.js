'use strict';

/**
 * Requirements
 * @ignore
 */
const HtmlTag = require('./HtmlTag.js').HtmlTag;


/**
 * @memberOf nunjucks.tag
 */
class ButtonTag extends HtmlTag
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
        return 'nunjucks.tag/ButtonTag';
    }


    /**
     * @type {Array}
     */
    get name()
    {
        return ['button'];
    }


    /**
     * @type {String}
     */
    getTagName()
    {
        return 'button';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.ButtonTag = ButtonTag;
