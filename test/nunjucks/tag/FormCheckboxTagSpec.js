'use strict';

/**
 * Requirements
 */
const FormCheckboxTag = require(TEMPLATETAGS_SOURCE + '/nunjucks/tag/FormCheckboxTag.js').FormCheckboxTag;
const tagSpec = require('entoj-system/test').nunjucks.TagShared;


/**
 * Spec
 */
describe(FormCheckboxTag.className, function()
{
    /**
     * Tag Test
     */
    const tests = 
    [ 
        {
            name: 'should render a checkbox',
            input: '{% checkbox type=\'checkbox\', name=\'yes_no\' %}',
            expected: '<input type="checkbox" name="yes_no"/>'
        },
        {
            name: 'should render a disabled checkbox',
            input: '{% checkbox type=\'checkbox\', name=\'yes_no\', disabled=true %}',
            expected: '<input type="checkbox" name="yes_no" disabled/>'
        },
        {
            name: 'should render an enabled checkbox',
            input: '{% checkbox type=\'checkbox\', name=\'yes_no\', disabled=false %}',
            expected: '<input type="checkbox" name="yes_no"/>'
        },
        {
            name: 'should render a required checkbox',
            input: '{% checkbox type=\'checkbox\', name=\'yes_no\', required=true %}',
            expected: '<input type="checkbox" name="yes_no" required/>'
        },
        {
            name: 'should render a not required checkbox',
            input: '{% checkbox type=\'checkbox\', name=\'yes_no\', required=false %}',
            expected: '<input type="checkbox" name="yes_no"/>'
        }
    ];
    tagSpec(FormCheckboxTag, 'nunjucks.tag/FormCheckboxTag', tests);
});