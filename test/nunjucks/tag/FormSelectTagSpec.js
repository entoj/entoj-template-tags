'use strict';

/**
 * Requirements
 */
const FormSelectTag = require(TEMPLATETAGS_SOURCE + '/nunjucks/tag/FormSelectTag.js').FormSelectTag;
const tagSpec = require('entoj-system/test').nunjucks.TagShared;


/**
 * Spec
 */
describe(FormSelectTag.className, function()
{
    /**
     * Tag Test
     */
    const tests = 
    [ 
        {
            name: 'should render a select',
            input: '{% form_select %}{% endform_select %}{% select %}{% endselect %}',
            expected: '<select/><select/>'
        },
        {
            name: 'should render the given attributes',
            input: '{% select name=\'yes_no\' %}{% endselect %}',
            expected: '<select name="yes_no"/>'
        },
        {
            name: 'should render all children',
            input: '{% select name=\'yes_no\' %}Hey, children!{% endselect %}',
            expected: '<select name="yes_no">Hey, children!</select>'
        },
        {
            name: 'should render <options> based on the options parameter',
            input: '{% select options={ one: \'One\', two: \'Two\' } %}{% endselect %}',
            expected: '<select><option value="one">One</option><option value="two">Two</option></select>'
        }                   
    ];
    tagSpec(FormSelectTag, 'nunjucks.tag/FormSelectTag', tests); 
});
