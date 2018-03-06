'use strict';

/**
 * Requirements
 * @ignore
 */
const HtmlTag = require('./HtmlTag.js').HtmlTag;


/**
 * @memberOf nunjucks.tag
 */
class FormSelectTag extends HtmlTag
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
        return 'nunjucks.tag/FormSelectTag';
    }


    /**
     * @type {Array}
     */
    get name()
    {
        return ['form_select', 'select'];
    }


    /**
     * @type {String}
     */
    getTagName(params)
    {
        return 'select';
    }


    /**
     * @type {String}
     */
    getAttributeName(name)
    {
        let result = super.getAttributeName(name);
        if (result === 'options')
        {
            result = false;
        }
        return result;
    } 


    /**
     * @type {String}
     */
    getBody(params, caller)
    {
        let body = super.getBody(params, caller);
        if (params.options)
        {
            body = '';
            if (Array.isArray(params.options))
            {
                for (let key = 0; key < params.options.length; key++)
                {
                    body+= '<option value="' + key + '">' + params.options[key] + '</option>';
                }
            }
            else
            {
                for (const key in params.options)
                {
                    body+= '<option value="' + key + '">' + params.options[key] + '</option>';
                }
            }
        }
        return body;
    }    
}


/**
 * Exports
 * @ignore
 */
module.exports.FormSelectTag = FormSelectTag;
