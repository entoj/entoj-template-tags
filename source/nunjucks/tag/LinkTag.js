'use strict';

/**
 * Requirements
 * @ignore
 */
const HtmlTag = require('./HtmlTag.js').HtmlTag;


/**
 * @memberOf nunjucks.tag
 */
class LinkTag extends HtmlTag
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
        return 'nunjucks.tag/LinkTag';
    }


    /**
     * @type {Array}
     */
    get name()
    {
        return ['link'];
    }


    /**
     * @type {String}
     */
    getTagName()
    {
        return 'a';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.LinkTag = LinkTag;
