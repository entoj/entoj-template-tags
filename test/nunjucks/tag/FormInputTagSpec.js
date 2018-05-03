'use strict';

/**
 * Requirements
 */
const FormInputTag = require(TEMPLATETAGS_SOURCE + '/nunjucks/tag/FormInputTag.js').FormInputTag;
const tagSpec = require('entoj-system/test').nunjucks.TagShared;


/**
 * Spec
 */
describe(FormInputTag.className, function()
{
    /**
     * Tag Test
     */
    const tests = 
    [ 
        // {
        //     name: 'should render a input',
        //     input: '{% form_input %}{% input %}',
        //     expected: '<input/><input/>'
        // }
        // ,
        {
            name: 'should render the given attributes',
            input: '{% input name=\'yes_no\' %}',
            expected: '<input name="yes_no"/>'
        }
    ];
    tagSpec(FormInputTag, 'nunjucks.tag/FormInputTag', tests); 
});
