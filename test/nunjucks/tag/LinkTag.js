'use strict';

/**
 * Requirements
 */
const LinkTag = require(TEMPLATETAGS_SOURCE + '/nunjucks/tag/LinkTag.js').LinkTag;
const tagSpec = require('entoj-system/test').nunjucks.TagShared;


/**
 * Spec
 */
describe(LinkTag.className, function()
{
    /**
     * Tag Test
     */
    const tests = 
    [ 
        {
            name: 'should render a input',
            input: '{% link %}{% link %}',
            expected: '<a></a><a></a>'
        },
        {
            name: 'should render the given attributes',
            input: '{% link href="loremIpsum" %}',
            expected: '<a href="loremIpsum"/>'
        }        
    ];
    tagSpec(LinkTag, 'nunjucks.tag/LinkTag', tests); 
});
