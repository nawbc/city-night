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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 200 200' }), React.createElement('path', {
    d: 'M61.996 100l64.225 64.225 11.783-11.783L85.563 100l52.442-52.442-11.783-11.783L61.996 100z',
    fill: evalColor('fill', '#2c2c2c')
}));;
}