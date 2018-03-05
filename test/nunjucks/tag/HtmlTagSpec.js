'use strict';

/**
 * Requirements
 */
const HtmlTag = require(TEMPLATETAGS_SOURCE + '/nunjucks/tag/HtmlTag.js').HtmlTag;
const tagSpec = require('entoj-system/test').nunjucks.TagShared;


/**
 * Spec
 */
describe(HtmlTag.className, function()
{
    /**
     * Tag Test
     */
    const tests = 
    [
        {
            name: 'should render a div tag',
            input: '{% html %}{% endhtml %}',
            expected: '<div/>'
        },        
        {
            name: 'should render a div tag with all parameters as attributes',
            input: '{% html class=\'a_class\', id=10 %}{% endhtml %}',
            expected: '<div class="a_class" id="10"/>'
        },
        {
            name: 'should render all children of the tag',
            input: '{% html %}Children{% endhtml %}',
            expected: '<div>Children</div>'
        }        
    ];
    tagSpec(HtmlTag, 'nunjucks.tag/HtmlTag', tests); 
});
