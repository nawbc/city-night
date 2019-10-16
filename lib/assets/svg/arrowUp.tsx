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
    d: 'M12.5 142.097l15.725 15.712 84.281-84.388 84.269 84.388 15.725-15.712-99.994-99.906L12.5 142.097z',
    fill: evalColor('fill', '#2c2c2c')
}));;
}