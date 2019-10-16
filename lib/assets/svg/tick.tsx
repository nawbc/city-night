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
    d: 'M416 797.2L97.8 479.1l60.4-60.3L416 676.6l449.8-449.8 60.4 60.3z',
    fill: evalColor('fill', '#2c2c2c')
}));;
}