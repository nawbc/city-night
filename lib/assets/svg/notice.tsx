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
    d: 'M341.3 448h85.3v213.3h-85.3z',
    fill: evalColor('fill', '#2c2c2c')
}), React.createElement('path', {
    d: 'M896 704h-85.3V405.3c0-164.7-134-298.7-298.7-298.7s-298.7 134-298.7 298.7V704H128v85.3h236.2c10.4 72.3 72.7 128 147.8 128s137.4-55.7 147.8-128H896V704zM298.7 405.3C298.7 287.7 394.4 192 512 192s213.3 95.7 213.3 213.3V704H298.7V405.3zM512 832c-27.8 0-51.5-17.8-60.3-42.7h120.7c-8.9 24.9-32.6 42.7-60.4 42.7z',
    fill: evalColor('fill', '#2c2c2c')
}));;
}