'use strict';

/**
 * Requirements
 * @ignore
 */
const HtmlTag = require('./HtmlTag.js').HtmlTag;


/**
 * @memberOf nunjucks.tag
 */
class FormTextareaTag extends HtmlTag
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
        return 'nunjucks.tag/FormTextareaTag';
    }


    /**
     * @type {Array}
     */
    get name()
    {
        return ['form_textarea', 'textarea'];
    }    


    /**
     * @type {String}
     */
    getTagName(params)
    {
        return 'textarea';
    }    
}


/**
 * Exports
 * @ignore
 */
module.exports.FormTextareaTag = FormTextareaTag;
