'use strict';

/**
 * Requirements
 * @ignore
 */
const HtmlTag = require('./HtmlTag.js').HtmlTag;


/**
 * @memberOf nunjucks.tag
 */
class FormInputTag extends HtmlTag
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
        return 'nunjucks.tag/FormInputTag';
    }


    /**
     * @type {Array}
     */
    get name()
    {
        return ['form_input', 'input'];
    }    


    /**
     * @type {String}
     */
    getTagName(params)
    {
        return 'input';
    }    
}


/**
 * Exports
 * @ignore
 */
module.exports.FormInputTag = FormInputTag;
