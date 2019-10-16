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
    d: 'M926.2 158.2l-60.4-60.4L512 451.7 158.2 97.8l-60.4 60.4L451.7 512 97.8 865.8l60.4 60.4L512 572.3l353.8 353.9 60.4-60.4L572.3 512z',
    fill: evalColor('fill', '#2c2c2c')
}));;
}