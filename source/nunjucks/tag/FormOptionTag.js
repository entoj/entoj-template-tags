'use strict';

/**
 * Requirements
 * @ignore
 */
const HtmlTag = require('./HtmlTag.js').HtmlTag;


/**
 * @memberOf nunjucks.tag
 */
class FormOptionTag extends HtmlTag
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
        return 'nunjucks.tag/FormOptionTag';
    }


    /**
     * @type {Array}
     */
    get name()
    {
        return ['option'];
    }


    /**
     * @type {String}
     */
    getTagName(params)
    {
        return 'option';
    }

}


/**
 * Exports
 * @ignore
 */
module.exports.FormOptionTag = FormOptionTag;
