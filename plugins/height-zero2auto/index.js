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
var TempAutoHeight = function (props, ref) {
    var transitionDuration = props.transitionDuration, transitionFunc = props.transitionFunc, height = props.height, style = props.style, children = props.children, className = props.className;
    var innerRef = react_1.useRef(null);
    var _a = react_1.useState(height), dyHeight = _a[0], setDyHeight = _a[1];
    var timer = null;
    var autoSetHeight = function (ele, h, d, timer) {
        clearTimeout(timer);
        setDyHeight(computed_style_1.default(ele, 'height'));
        timer = setTimeout(function () {
            setDyHeight(h);
        }, d);
    };
    react_1.useLayoutEffect(function () {
        var innerEle = innerRef.current;
        height === 'auto' ?
            autoSetHeight(innerEle, 'auto', transitionDuration, timer) :
            autoSetHeight(innerEle, height, 0, timer);
    }, [height, transitionDuration, timer]);
    return (react_1.default.createElement("div", { ref: ref, className: className, style: __assign({
            transitionProperty: 'height',
            overflow: 'hidden',
            transitionDuration: transitionDuration + 'ms',
            transitionTimingFunction: transitionFunc,
            height: dyHeight,
            willChange: 'height',
            transform: 'translateZ(0px)'
        }, style) },
        react_1.default.createElement("div", { ref: innerRef, style: { height: 'auto' } }, children)));
};
exports.AutoHeight = react_1.default.forwardRef(TempAutoHeight);
//# sourceMappingURL=index.js.map