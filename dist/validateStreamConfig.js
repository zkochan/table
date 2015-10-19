'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _schemasStreamConfigJson = require('./schemas/streamConfig.json');

var _schemasStreamConfigJson2 = _interopRequireDefault(_schemasStreamConfigJson);

var _tv4 = require('tv4');

var _tv42 = _interopRequireDefault(_tv4);

/**
 * @typedef {string} cell
 */

/**
 * @typedef {cell[]} validateData~column
 */

/**
 * @param {formatData~config} config
 * @returns {undefined}
 */

exports['default'] = function () {
    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var result = undefined;

    result = _tv42['default'].validateResult(config, _schemasStreamConfigJson2['default']);

    if (!result.valid) {
        console.log('config', config);
        console.log('error', {
            message: result.error.message,
            params: result.error.params,
            dataPath: result.error.dataPath,
            schemaPath: result.error.schemaPath
        });

        throw new Error('Invalid config.');
    }
};

module.exports = exports['default'];
//# sourceMappingURL=validateStreamConfig.js.map