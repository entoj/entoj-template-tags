'use strict';

/**
 * Requirements
 */
const ButtonTag = require(TEMPLATETAGS_SOURCE + '/nunjucks/tag/ButtonTag.js').ButtonTag;
const tagSpec = require('entoj-system/test').nunjucks.TagShared;


/**
 * Spec
 */
describe(ButtonTag.className, function()
{
    /**
     * Tag Test
     */
    const tests = 
    [ 
        {
            name: 'should render a button with body',
            input: '{% button %}text{% endbutton %}',
            expected: '<button>text</button>'
        },
        {
            name: 'should render the given attributes',
            input: '{% button name=\'yes_no\' %}text{% endbutton %}',
            expected: '<button name="yes_no">text</button>'
        },
        {
            name: 'should render a disabled button',
            input: '{% button name=\'yes_no\', disabled=true %}text{% endbutton %}',
            expected: '<button name="yes_no" disabled>text</button>'
        }
    ];
    tagSpec(ButtonTag, 'nunjucks.tag/ButtonTag', tests); 
});