
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
