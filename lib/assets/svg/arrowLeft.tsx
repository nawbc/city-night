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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 225 200' }), React.createElement('path', {
    d: 'M70.403 0L54.691 15.725l84.388 84.281-84.388 84.269L70.403 200l99.906-99.994L70.403 0z',
    fill: evalColor('fill', '#2c2c2c')
}));;
}