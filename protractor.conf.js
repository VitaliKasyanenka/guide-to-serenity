const crew = require('serenity-js/lib/stage_crew');

exports.config = {
    // Framework definition - tells Protractor to use Serenity/JS
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    specs: [                    // load specs defined in:
        'spec/**/*.spec.ts',    // - TypeScript
        'spec/**/*.spec.js'     // - JavaScript
    ],

    mochaOpts: {
        ui:       'bdd',
        compiler: 'ts:ts-node/register'   // interpret step definitions as TypeScript
    },

    serenity: {
        crew:    [
            crew.serenityBDDReporter(),
            crew.photographer()
        ],
        dialect: 'mocha',
        stageCueTimeout: 30 * 1000   // up to 30 seconds by default
    }
}