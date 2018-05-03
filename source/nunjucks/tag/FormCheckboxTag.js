'use strict';

/**
 * Requirements
 * @ignore
 */
const HtmlTag = require('./HtmlTag.js').HtmlTag;


/**
 * @memberOf nunjucks.tag
 */
class FormCheckboxTag extends HtmlTag
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
        return 'nunjucks.tag/FormCheckboxTag';
    }


    /**
     * @type {Array}
     */
    get name()
    {
        return ['checkbox'];
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
module.exports.FormCheckboxTag = FormCheckboxTag;
