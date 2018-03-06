'use strict';

/**
 * Requirements
 */
const FormRadioTag = require(TEMPLATETAGS_SOURCE + '/nunjucks/tag/FormRadioTag.js').FormRadioTag;
const tagSpec = require('entoj-system/test').nunjucks.TagShared;


/**
 * Spec
 */
describe(FormRadioTag.className, function()
{
    /**
     * Tag Test
     */
    const tests = 
    [ 
        {
            name: 'should render a radio button',
            input: '{% radio type=\'radio\', name=\'yes_no\' %}',
            expected: '<input type="radio" name="yes_no"/>'
        },
        {
            name: 'should render a disabled radio button',
            input: '{% radio type=\'radio\', name=\'yes_no\', disabled=true %}',
            expected: '<input type="radio" name="yes_no" disabled/>'
        }
    ];
    tagSpec(FormRadioTag, 'nunjucks.tag/FormRadioTag', tests); 
});