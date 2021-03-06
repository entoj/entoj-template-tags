'use strict';

/**
 * Requirements
 * @ignore
 */
const Tag = require('entoj-system').nunjucks.tag.Tag;
const isPlainObject = require('lodash.isplainobject');


/**
 * @memberOf nunjucks.tag
 */
class HtmlTag extends Tag
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'nunjucks.tag/HtmlTag';
    }


    /**
     * @type {Array}
     */
    get name()
    {
        return ['html'];
    }    


    /**
     * @type {String}
     */
    getTagName(params)
    {
        return 'div';
    }     


    /**
     * @type {String}
     */
    getAttributeName(name)
    {
        if (!name || name.startsWith('__'))
        {
            return false;
        }
        return name;
    }  
    
    
    /**
     * @type {String}
     */
    getAttributeValue(name, value)
    {
        return value;
    }  


    /**
     * @type {String}
     */
    getBody(params, caller)
    {
        const body = typeof caller === 'function'
            ? caller()
            : '';  
        return body;
    }


    /**
     * 
     * @param {String} name 
     * @return {Boolean}
     */
    isBooleanAttribute(name)
    {
        const hashTable = [
            'disabled',
            'required'
        ];

        return hashTable.includes(name);
    }


    /**
     * 
     * @param {Object} params 
     * @return {Object} attributes
     */
    parseAttributes(params) 
    {
        const attributes = {};
        for (const name in params)
        {
            // remove uneeded attributes
            if (!this.getAttributeName(name))
            {
                continue;
            }
            // add objects as key value pairs
            if (isPlainObject(params[name]))
            {
                for (const subName in params[name])
                {
                    attributes[subName] = params[name][subName];
                }
            }
            else
            {
                attributes[name] = params[name];
            }
        }
        return attributes;
    }


    /**
     * 
     * @param {String} key 
     * @param {String} value 
     * @param {Boolean} isBooleanAttribute 
     * @return {String}
     */
    generateAttribute(key, value, isBooleanAttribute)
    {
        if(isBooleanAttribute && value === true)
        {
            return ' ' + key;
        }
        else if(!isBooleanAttribute && value != '' && value != undefined)
        {
            return ' ' + key + '="' + value + '"';
        }

        return '';
    }


    /**
     * 
     * @param {String} body 
     * @param {String} tagName 
     * @param {Object} attributes 
     * @return {String} result
     */
    render(body, tagName, attributes)
    {
        let result = '<' + tagName;
        for (const name in attributes)
        {
            const key = this.getAttributeName(name);
            if (key)
            {
                const value = this.getAttributeValue(key, attributes[name]);

                result+= this.generateAttribute(key, value, this.isBooleanAttribute(key));
            }
        }
        if (body.trim() === '')
        {
            result+= '/>';
        }
        else
        {
            result+= '>';
            result+= body;
            result+= '</' + tagName + '>';
        }

        return result;
    }


    /**
     * Runs the tag
     */
    generate(context, params, caller)
    {
        // Prepare
        const tagName = this.getTagName(params);
        const attributes = this.parseAttributes(params);
        
        const body = this.getBody(params, caller);

        // Render
        const result = this.render(body, tagName, attributes);
        return result;
    }    
}


/**
 * Exports
 * @ignore
 */
module.exports.HtmlTag = HtmlTag;
