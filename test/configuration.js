'use strict';

/**
 * Configure path
 */
const path = require('path');
global.TEMPLATETAGS_SOURCE = path.resolve(__dirname + '/../source');
global.TEMPLATETAGS_FIXTURES = path.resolve(__dirname + '/__fixtures__');
global.TEMPLATETAGS_TEST = __dirname;

/**
 * Configure chai
 */
const chai = require('chai');
chai.config.includeStack = true;
global.expect = chai.expect;
