'use strict';

/**
 * Requirements
 */
const FormTextareaTag = require(TEMPLATETAGS_SOURCE + '/nunjucks/tag/FormTextareaTag.js').FormTextareaTag;
const tagSpec = require('entoj-system/test').nunjucks.TagShared;


/**
 * Spec
 */
describe(FormTextareaTag.className, function()
{
    /**
     * Tag Test
     */
    const tests =
    [
        {
            name: 'should render a textarea',
            input: '{% form_textarea %}{% endform_textarea %}{% textarea %}{% endtextarea %}',
            expected: '<textarea/><textarea/>'
        },
        {
            name: 'should render the given attributes',
            input: '{% textarea name=\'yes_no\' %}{% endtextarea %}',
            expected: '<textarea name="yes_no"/>'
        },
        {
            name: 'should render all children',
            input: '{% textarea name=\'yes_no\' %}Hey, children!{% endtextarea %}',
            expected: '<textarea name="yes_no">Hey, children!</textarea>'
        }
    ];
    tagSpec(FormTextareaTag, 'nunjucks.tag/FormTextareaTag', tests);
});
