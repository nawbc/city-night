import * as React from 'react';
			export default function anonymous(params
) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1024 1024' }), React.createElement('defs', null, React.createElement('style', null)), React.createElement('path', {
    d: 'M512 690.8c-117.1 0-227.4-57.5-274.5-143l74.8-41.2c32.5 59.1 112.8 98.8 199.7 98.8v85.4z',
    fill: evalColor('fill', '#2c2c2c')
}), React.createElement('path', {
    d: 'M298.7 930.5V770C166.4 705.4 85.3 587.3 85.3 456.1c0-200 191.4-362.7 426.7-362.7s426.7 162.7 426.7 362.7c0 197-185.9 357.9-416.4 362.6L298.7 930.5zM512 178.8c-188.2 0-341.3 124.4-341.3 277.3 0 104.5 71.7 199.1 187 246.9l26.3 11v78.5l117.9-59H512c188.2 0 341.3-124.4 341.3-277.3S700.2 178.8 512 178.8z',
    fill: evalColor('fill', '#2c2c2c')
}));;
}