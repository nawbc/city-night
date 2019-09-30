"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var computed_style_1 = __importDefault(require("computed-style"));
var HeightZeroToAuto = react_1.default.memo(function (props) {
    var transitionDuration = props.transitionDuration, transitionFunc = props.transitionFunc, height = props.height, style = props.style, children = props.children, className = props.className;
    var innerRef = react_1.useRef(null);
    var _a = react_1.useState(height), dyHeight = _a[0], setDyHeight = _a[1];
    var _b = react_1.useState(0), state = _b[0], setState = _b[1];
    var autoSetHeight = function (ele, h, d, state) {
        (state !== 0) && setDyHeight(computed_style_1.default(ele, 'height'));
        setTimeout(function () {
            (state === 0) && setState(state + 1);
            setDyHeight(h);
        }, d);
    };
    react_1.useLayoutEffect(function () {
        var innerEle = innerRef.current;
        height === 'auto' ?
            autoSetHeight(innerEle, 'auto', transitionDuration, state) :
            autoSetHeight(innerEle, height, 0, state);
    }, [height, transitionDuration, state]);
    return (react_1.default.createElement("div", { className: className, style: __assign({
            transitionProperty: 'height',
            overflow: 'hidden',
            transitionDuration: transitionDuration + 'ms',
            transitionTimingFunction: transitionFunc,
            height: dyHeight,
            willChange: 'height',
            transform: 'translateZ(0px)'
        }, style) },
        react_1.default.createElement("div", { ref: innerRef, style: { height: 'auto' } }, children)));
});
exports.HeightZeroToAuto = HeightZeroToAuto;
//# sourceMappingURL=index.js.map