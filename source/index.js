
/**
 * Registers with default configurations
 */
function register(configuration, options)
{
    // Nunjucks filter & tags
    configuration.mappings.add(require('entoj-system').nunjucks.Environment,
        {
            '!tags': configuration.clean(
                [
                    {
                        type: require('./nunjucks/index.js').tag.FormInputTag
                    },
                    {
                        type: require('./nunjucks/index.js').tag.FormSelectTag
                    },
                    {
                        type: require('./nunjucks/index.js').tag.FormRadioTag
                    },
                    {
                        type: require('./nunjucks/index.js').tag.FormTextareaTag
                    },
                    {
                        type: require('./nunjucks/index.js').tag.LinkTag
                    },
                    {
                        type: require('./nunjucks/index.js').tag.ButtonTag
                    }
                ])
        });

    // Parser tags
    configuration.mappings.add(require('entoj-system').export.parser.JinjaParser,
        {
            '!tags': configuration.clean(
                [
                    {
                        type: require('./nunjucks/index.js').tag.FormInputTag
                    },
                    {
                        type: require('./nunjucks/index.js').tag.FormSelectTag
                    },
                    {
                        type: require('./nunjucks/index.js').tag.FormRadioTag
                    },
                    {
                        type: require('./nunjucks/index.js').tag.FormTextareaTag
                    },
                    {
                        type: require('./nunjucks/index.js').tag.LinkTag
                    },
                    {
                        type: require('./nunjucks/index.js').tag.ButtonTag
                    }
                ])
        });        
}


/**
 * Exports
 * @ignore
 */
module.exports =
{
    register: register,
    nunjucks: require('./nunjucks/index.js')
};
