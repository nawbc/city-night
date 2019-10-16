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
    d: 'M512 938.7C276.7 938.7 85.3 747.2 85.3 512S276.7 85.3 512 85.3 938.7 276.7 938.7 512 747.3 938.7 512 938.7zm0-768c-188.2 0-341.3 153.1-341.3 341.3S323.8 853.3 512 853.3 853.3 700.2 853.3 512 700.2 170.7 512 170.7z',
    fill: evalColor('fill', '#2c2c2c')
}), React.createElement('path', {
    d: 'M554.7 341.3c0-23.6-19.1-42.7-42.7-42.7s-42.7 19.1-42.7 42.7v256h85.3v-256zM469.3 682.7a42.7 42.7 0 1085.4 0 42.7 42.7 0 10-85.4 0z',
    fill: evalColor('fill', '#2c2c2c')
}));;
}