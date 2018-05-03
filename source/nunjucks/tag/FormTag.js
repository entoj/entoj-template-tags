'use strict';

/**
 * Requirements
 * @ignore
 */
const HtmlTag = require('./HtmlTag.js').HtmlTag;


/**
 * @memberOf nunjucks.tag
 */
class FormTag extends HtmlTag
{
    /**
     */
    constructor()
    {
        super();

        // Assign options
        this._hasBody = true;
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'nunjucks.tag/FormTag';
    }


    /**
     * @type {Array}
     */
    get name()
    {
        return ['form'];
    }


    /**
     * @type {String}
     */
    getTagName()
    {
        return 'form';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FormTag = FormTag;
