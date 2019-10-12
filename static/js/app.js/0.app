/*!
 * 
 * 						Name: silent-concept version: 0.0.1
 * 											Author:  Han Wang
 * 											LICENSE Apache-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var svg_namespaceObject = {};
__webpack_require__.r(svg_namespaceObject);
__webpack_require__.d(svg_namespaceObject, "ArrowDown", function() { return anonymous; });
__webpack_require__.d(svg_namespaceObject, "ArrowLeft", function() { return arrowLeft_anonymous; });
__webpack_require__.d(svg_namespaceObject, "ArrowRight", function() { return arrowRight_anonymous; });
__webpack_require__.d(svg_namespaceObject, "ArrowUp", function() { return arrowUp_anonymous; });
__webpack_require__.d(svg_namespaceObject, "Cross", function() { return cross_anonymous; });
__webpack_require__.d(svg_namespaceObject, "Info", function() { return info_anonymous; });
__webpack_require__.d(svg_namespaceObject, "Notice", function() { return notice_anonymous; });
__webpack_require__.d(svg_namespaceObject, "Tick", function() { return tick_anonymous; });
__webpack_require__.d(svg_namespaceObject, "TinyArrowDown", function() { return tinyArrowDown_anonymous; });
__webpack_require__.d(svg_namespaceObject, "TinyArrowLeft", function() { return tinyArrowLeft_anonymous; });
__webpack_require__.d(svg_namespaceObject, "TinyArrowRight", function() { return tinyArrowRight_anonymous; });
__webpack_require__.d(svg_namespaceObject, "TinyArrowUp", function() { return tinyArrowUp_anonymous; });
__webpack_require__.d(svg_namespaceObject, "Warn", function() { return warn_anonymous; });

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(87);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./app/index.scss
var app = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(120);

// CONCATENATED MODULE: ./lib/Silent/index.tsx
var Silent=function Silent(props){return props.children||null;};/* harmony default export */ var lib_Silent = (Silent);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(78);

// CONCATENATED MODULE: ./lib/helper/helper.tsx
var is={type:function type(obj,str){return Object.prototype.toString.call(obj)==="[object "+str+"]";},string:function string(obj){return this.type(obj,'String');},object:function object(obj){return this.type(obj,'Object');},"function":function _function(obj){return this.type(obj,'Function');},"null":function _null(obj){return this.type(obj,'Null');},undefined:function undefined(obj){return this.type(obj,'Undefined');},number:function number(obj){return this.type(obj,'Number');}};var accordType=function accordType(a,b,c){return is.type(a,b)?a:c;};var randomNumber=function randomNumber(min,max){return min+Math.floor(Math.random()*(max-min))+1;};var randomAlphabet=function randomAlphabet(from,to){return String.fromCharCode(randomNumber(from,to));};var randomGradients=function randomGradients(arr){return arr[randomNumber(0,arr.length-1)];};var generateToken=function generateToken(){return(Math.round(Math.random()*0x1000000000)+new Date().getTime()).toString(36);};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(125);

// CONCATENATED MODULE: ./lib/helper/silentDash.tsx
var silentDash_handleSize=function handleSize(size){return Array.isArray(size)?1===size.length?{width:accordType(size[0],'String',size[0]+'px')}:{width:accordType(size[0],'String',size[0]+'px'),height:accordType(size[1],'String',size[1]+'px')}:size;};var splitJsxProps=function splitJsxProps(receiveProps,useProps){var nativeTempProps={};var customTempProps={};for(var prop in receiveProps){useProps.indexOf(prop)>=0?customTempProps[prop]=receiveProps[prop]:nativeTempProps[prop]=receiveProps[prop];}return{nativeProps:nativeTempProps,customProps:customTempProps};};var silentDash_generateStyleContent=function generateStyleContent(prefix,styles,ssList){for(var prop in styles){var content='';var propVal=styles[prop];var currentProp=prop.trim();for(var key in propVal){var styleVal=propVal[key];if(is.string(styleVal)){content+=key+':'+styleVal+';';}}var insertValue='.'+prefix+' '+currentProp+'{'+content+'}';ssList.insertRule(insertValue);}};var completeStyle=function completeStyle(prefix,complete){var list=document.styleSheets[document.styleSheets.length-1];if(!!list){silentDash_generateStyleContent(prefix,complete,list);}else{console.warn('Warning: document does not contain StyleSheetList, so auto add the style element');var style=document.createElement('style');document.getElementsByTagName('head')[0].appendChild(style);style.appendChild(document.createTextNode(''));var ssList=document.styleSheets[document.styleSheets.length-1];silentDash_generateStyleContent(prefix,complete,ssList);}};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(133);

// CONCATENATED MODULE: ./lib/helper/colorOperator.tsx
var hexToRgb=function hexToRgb(str){var literal=str.replace('#','');return literal.length===3?literal.match(/./g).map(function(val){return Math.pow(parseInt(val,16),2);}):literal.match(/../g).map(function(val){return parseInt(val,16);});};var rgbToHex=function rgbToHex(a,b,c){var hex=[a.toString(16),b.toString(16),c.toString(16)];for(var i=0;i<3;i++){if(hex[i].length==1)hex[i]='0'+hex[i];}return'#'+hex.join('');};var makeColorDarker=function makeColorDarker(color,level){return'rgb('+color.slice(4,color.length-1).split(',').map(function(v){return Math.ceil(parseInt(v)*level);}).join(',')+')';};var makeColorLighter=function makeColorLighter(color,level){return'rgb('+color.slice(4,color.length-1).split(',').map(function(v){return Math.ceil((255-parseInt(v))*level+parseInt(v));}).join(',')+')';};
// CONCATENATED MODULE: ./lib/helper/index.tsx

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(20);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./lib/core/Loading/style/hoop.scss
var hoop = __webpack_require__(136);

// CONCATENATED MODULE: ./lib/core/Loading/Hoop.tsx
var Hoop_prefix='s-loading-hoop';var HoopAttrs=['size','style','speed','pigment','innerStyle','className'];var Hoop_presetClassName=function presetClassName(cProps){var _classNames,_classNames2;var size=cProps.size,pigment=cProps.pigment;return{containerCN:classnames_default()(Hoop_prefix,(_classNames={},_classNames[Hoop_prefix+"-"+size]=accordType(size,'String',false),_classNames)),innerCN:classnames_default()((_classNames2={inner:true},_classNames2["inner-"+size]=accordType(size,'String',false),_classNames2[""+pigment]=accordType(pigment,'String',false),_classNames2))};};var Hoop_presetProps=function presetProps(props){var sProps=splitJsxProps(props,HoopAttrs);sProps.customProps.size=silentDash_handleSize(sProps.customProps.size);return sProps;};var Hoop_Hoop=function Hoop(props){var _presetProps=Hoop_presetProps(props),nativeProps=_presetProps.nativeProps,customProps=_presetProps.customProps;var _presetClassName=Hoop_presetClassName(customProps),containerCN=_presetClassName.containerCN,innerCN=_presetClassName.innerCN;var containerStyle=Object.assign({},accordType(customProps.size,'Object',{}),{},customProps.style);return react_default.a.createElement("div",extends_default()({},nativeProps,{className:containerCN,style:containerStyle}),react_default.a.createElement("div",{className:innerCN,style:Object.assign({animationDuration:customProps.speed},accordType(customProps.innerStyle,'Object',{}))}));};Hoop_Hoop.defaultProps={pigment:'white',size:'normal',speed:'1s'};/* harmony default export */ var Loading_Hoop = (react_default.a.memo(Hoop_Hoop));
// EXTERNAL MODULE: ./lib/core/Loading/style/breath.scss
var breath = __webpack_require__(137);

// CONCATENATED MODULE: ./lib/core/Loading/Breath.tsx
var Breath_prefix='s-loading-breath';var BreathAttrs=['size','style','pigment','className'];var Breath_presetClassName=function presetClassName(cProps){var _classNames,_classNames2;var size=cProps.size,pigment=cProps.pigment;return{containerCN:classnames_default()(Breath_prefix,(_classNames={},_classNames[Breath_prefix+"-"+size]=accordType(size,'String',false),_classNames[Breath_prefix+"-"+pigment]=pigment,_classNames)),innerCN:classnames_default()(Breath_prefix+"-inner",(_classNames2={},_classNames2[Breath_prefix+"-inner-"+pigment]=pigment,_classNames2))};};var Breath_presetProps=function presetProps(props){var sProps=splitJsxProps(props,BreathAttrs);sProps.customProps.size=silentDash_handleSize(sProps.customProps.size);return sProps;};var Breath_Breath=function Breath(props){var _presetProps=Breath_presetProps(props),nativeProps=_presetProps.nativeProps,customProps=_presetProps.customProps;var _presetClassName=Breath_presetClassName(customProps),containerCN=_presetClassName.containerCN,innerCN=_presetClassName.innerCN;var containerStyle=Object.assign({},accordType(customProps.size,'Object',{}),{},customProps.style);return react_default.a.createElement("div",extends_default()({},nativeProps,{style:containerStyle,className:containerCN}),react_default.a.createElement("div",{className:innerCN}));};Breath_Breath.defaultProps={pigment:'white',size:'normal'};/* harmony default export */ var Loading_Breath = (react_default.a.memo(Breath_Breath));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(139);

// EXTERNAL MODULE: ./lib/core/Loading/style/font.scss
var font = __webpack_require__(141);

// CONCATENATED MODULE: ./lib/core/Loading/Font.tsx
var Font_prefix='s-loading-font';var FontAttrs=['size','style','pigment','className','children','endWith','duration','max'];var Font_presetClassName=function presetClassName(cProps){var _classNames;var size=cProps.size,pigment=cProps.pigment;return classnames_default()(Font_prefix,(_classNames={},_classNames[Font_prefix+"-"+size]=accordType(size,'String',false),_classNames[Font_prefix+"-"+pigment]=pigment,_classNames));};var Font_presetProps=function presetProps(props){var sProps=splitJsxProps(props,FontAttrs);sProps.customProps.size=silentDash_handleSize(sProps.customProps.size);return sProps;};var Font_MultiEndWith=function MultiEndWith(props){var ref=Object(react["useRef"])(null);var endWith=props.endWith,duration=props.duration,max=props.max;var isEndWithEle=react_default.a.isValidElement(endWith);var _useState=Object(react["useState"])({key:0,elements:[]}),endWithSym=_useState[0],setEndWithSym=_useState[1];Object(react["useLayoutEffect"])(function(){var timeSaver=setInterval(function(){var eleKey=endWithSym.key;clearInterval(timeSaver);var endEle=isEndWithEle?react_default.a.cloneElement(endWith,{key:eleKey}):endWith;if(endWithSym.elements.length===max){setEndWithSym({key:0,elements:[endEle]});}else{setEndWithSym({key:eleKey+1,elements:[].concat(endWithSym.elements,[endEle])});}},duration);},[endWithSym,endWith,duration,isEndWithEle,max]);return react_default.a.createElement("span",{ref:ref},endWithSym.elements);};var Font_Font=function Font(props){var _presetProps=Font_presetProps(props),nativeProps=_presetProps.nativeProps,customProps=_presetProps.customProps;var className=Font_presetClassName(customProps);var size=customProps.size,style=customProps.style,children=customProps.children;var containerStyle=Object.assign({},accordType(size,'Object',{}),{},style);return react_default.a.createElement("span",extends_default()({},nativeProps,{style:containerStyle,className:className}),children,react_default.a.createElement(Font_MultiEndWith,customProps));};Font_Font.defaultProps={size:'normal',pigment:'black',endWith:'.',children:'Loading',duration:800,max:6};/* harmony default export */ var Loading_Font = (react_default.a.memo(Font_Font));
// CONCATENATED MODULE: ./lib/core/Loading/index.tsx
var Loading_Loading=function(_React$Component){inheritsLoose_default()(Loading,_React$Component);function Loading(){return _React$Component.apply(this,arguments)||this;}var _proto=Loading.prototype;_proto.render=function render(){return react["createElement"](Loading_Hoop,this.props);};return Loading;}(react["Component"]);Loading_Loading.Hoop=Loading_Hoop;Loading_Loading.Breath=Loading_Breath;Loading_Loading.Font=Loading_Font;
// EXTERNAL MODULE: ./lib/core/Picture/style/picture.scss
var picture = __webpack_require__(142);

// CONCATENATED MODULE: ./lib/core/Picture/LazyPicture.tsx
var LazyPicture_prefix='s-picture-lazy';var LazyPicture_LazyPicture=function LazyPicture(_ref){var nativeProps=_ref.nativeProps,customProps=_ref.customProps;var _ref2=customProps,className=_ref2.className,size=_ref2.size,src=_ref2.src,style=_ref2.style,beforeLoad=_ref2.beforeLoad;var lazyPicContainerRef=Object(react["useRef"])(null);var _useState=Object(react["useState"])(true),beforeLoadElement=_useState[0],setBeforeLoadElement=_useState[1];Object(react["useLayoutEffect"])(function(){var imgContainer=lazyPicContainerRef.current;if(imgContainer.offsetTop<window.innerHeight){var img=new Image();img.src=src;img.onload=function(){!!beforeLoad&&setBeforeLoadElement(false);console.log(beforeLoad);var finalWidth,finalHeight;var width=img.width,height=img.height;if(!!size){if(!!size['width']&&!!size['height']){finalWidth=size['width'];finalHeight=size['height'];}else{var tmpWidth=parseInt(size['width']);finalWidth=tmpWidth+'px';finalHeight=height/(width/tmpWidth)+'px';}}else{finalWidth=width+'px';finalHeight=height+'px';}img.style.width=finalWidth;img.style.height=finalHeight;imgContainer.appendChild(img);return function(){imgContainer.removeChild(img);};};}},[size,src,beforeLoad]);return react_default.a.createElement("div",extends_default()({ref:lazyPicContainerRef,style:style},nativeProps,{cla:true,ssName:classnames_default()(className,LazyPicture_prefix)}),beforeLoadElement&&beforeLoad);};/* harmony default export */ var Picture_LazyPicture = (react_default.a.memo(LazyPicture_LazyPicture));
// CONCATENATED MODULE: ./lib/core/Picture/index.tsx
var Picture_prefix='s-picture';var PictureAttrs=['src','size','lazy','style','autSize','beforeLoad','className'];var Picture_presetClassName=function presetClassName(cProps){var _classNames;var size=cProps.size;return classnames_default()(Picture_prefix,(_classNames={},_classNames[Picture_prefix+"-"+size]=accordType(size,'String',false),_classNames));};var Picture_presetProps=function presetProps(props){var sProps=splitJsxProps(props,PictureAttrs);sProps.customProps.size=silentDash_handleSize(sProps.customProps.size);return sProps;};var Picture_Picture=function Picture(props){var _presetProps=Picture_presetProps(props),nativeProps=_presetProps.nativeProps,customProps=_presetProps.customProps;var className=Picture_presetClassName(customProps);var src=customProps.src,lazy=customProps.lazy,size=customProps.size,style=customProps.style;var finalElement;if(lazy){finalElement=react_default.a.createElement(Picture_LazyPicture,{nativeProps:nativeProps,customProps:customProps});}else{var customStyle=Object.assign({backgroundSize:'cover',backgroundImage:"url("+src+")",backgroundRepeat:'no-repeat'},accordType(size,'Object',{}),{},style);finalElement=react_default.a.createElement("div",extends_default()({},nativeProps,{style:customStyle,className:className}));}return finalElement;};Picture_Picture.defaultProps={beforeLoad:react_default.a.createElement(Loading_Loading.Breath,{style:{margin:'0px'}}),lazy:false};/* harmony default export */ var core_Picture = (Picture_Picture);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__(85);

// CONCATENATED MODULE: ./lib/assets/svg/arrowDown.tsx
function anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 225 200'}),react["createElement"]('path',{d:'M212.5 57.903L196.775 42.19l-84.281 84.388-84.269-84.387L12.5 57.903l99.994 99.906L212.5 57.903z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/arrowLeft.tsx
function arrowLeft_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 225 200'}),react["createElement"]('path',{d:'M70.403 0L54.691 15.725l84.388 84.281-84.388 84.269L70.403 200l99.906-99.994L70.403 0z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/arrowRight.tsx
function arrowRight_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 225 200'}),react["createElement"]('path',{d:'M70.403 0L54.691 15.725l84.388 84.281-84.388 84.269L70.403 200l99.906-99.994L70.403 0z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/arrowUp.tsx
function arrowUp_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 225 200'}),react["createElement"]('path',{d:'M12.5 142.097l15.725 15.712 84.281-84.388 84.269 84.388 15.725-15.712-99.994-99.906L12.5 142.097z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/cross.tsx
function cross_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 1024 1024'}),react["createElement"]('defs',null,react["createElement"]('style',null)),react["createElement"]('path',{d:'M926.2 158.2l-60.4-60.4L512 451.7 158.2 97.8l-60.4 60.4L451.7 512 97.8 865.8l60.4 60.4L512 572.3l353.8 353.9 60.4-60.4L572.3 512z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/info.tsx
function info_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 1024 1024'}),react["createElement"]('defs',null,react["createElement"]('style',null)),react["createElement"]('path',{d:'M512 690.8c-117.1 0-227.4-57.5-274.5-143l74.8-41.2c32.5 59.1 112.8 98.8 199.7 98.8v85.4z',fill:evalColor('fill','#2c2c2c')}),react["createElement"]('path',{d:'M298.7 930.5V770C166.4 705.4 85.3 587.3 85.3 456.1c0-200 191.4-362.7 426.7-362.7s426.7 162.7 426.7 362.7c0 197-185.9 357.9-416.4 362.6L298.7 930.5zM512 178.8c-188.2 0-341.3 124.4-341.3 277.3 0 104.5 71.7 199.1 187 246.9l26.3 11v78.5l117.9-59H512c188.2 0 341.3-124.4 341.3-277.3S700.2 178.8 512 178.8z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/notice.tsx
function notice_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 1024 1024'}),react["createElement"]('defs',null,react["createElement"]('style',null)),react["createElement"]('path',{d:'M341.3 448h85.3v213.3h-85.3z',fill:evalColor('fill','#2c2c2c')}),react["createElement"]('path',{d:'M896 704h-85.3V405.3c0-164.7-134-298.7-298.7-298.7s-298.7 134-298.7 298.7V704H128v85.3h236.2c10.4 72.3 72.7 128 147.8 128s137.4-55.7 147.8-128H896V704zM298.7 405.3C298.7 287.7 394.4 192 512 192s213.3 95.7 213.3 213.3V704H298.7V405.3zM512 832c-27.8 0-51.5-17.8-60.3-42.7h120.7c-8.9 24.9-32.6 42.7-60.4 42.7z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/tick.tsx
function tick_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 1024 1024'}),react["createElement"]('defs',null,react["createElement"]('style',null)),react["createElement"]('path',{d:'M416 797.2L97.8 479.1l60.4-60.3L416 676.6l449.8-449.8 60.4 60.3z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/tinyArrowDown.tsx
function tinyArrowDown_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 200 200'}),react["createElement"]('path',{d:'M100 138.004l64.225-64.225-11.783-11.783L100 114.437 47.558 61.996 35.775 73.779 100 138.004z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/tinyArrowLeft.tsx
function tinyArrowLeft_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 200 200'}),react["createElement"]('path',{d:'M61.996 100l64.225 64.225 11.783-11.783L85.563 100l52.442-52.442-11.783-11.783L61.996 100z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/tinyArrowRight.tsx
function tinyArrowRight_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 200 200'}),react["createElement"]('path',{d:'M138 100L73.8 35.8 62 47.6l52.4 52.4L62 152.4l11.8 11.8L138 100z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/tinyArrowUp.tsx
function tinyArrowUp_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 200 200'}),react["createElement"]('path',{d:'M100 61.996l-64.225 64.225 11.783 11.783L100 85.563l52.442 52.442 11.783-11.783L100 61.996z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/warn.tsx
function warn_anonymous(params){var evalColor=function(){if(typeof params.color==='function'){return params.color;}else{return function(){return params.color;};}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return react["createElement"]('svg',_extends({},params,{viewBox:'0 0 1024 1024'}),react["createElement"]('defs',null,react["createElement"]('style',null)),react["createElement"]('path',{d:'M512 938.7C276.7 938.7 85.3 747.2 85.3 512S276.7 85.3 512 85.3 938.7 276.7 938.7 512 747.3 938.7 512 938.7zm0-768c-188.2 0-341.3 153.1-341.3 341.3S323.8 853.3 512 853.3 853.3 700.2 853.3 512 700.2 170.7 512 170.7z',fill:evalColor('fill','#2c2c2c')}),react["createElement"]('path',{d:'M554.7 341.3c0-23.6-19.1-42.7-42.7-42.7s-42.7 19.1-42.7 42.7v256h85.3v-256zM469.3 682.7a42.7 42.7 0 1085.4 0 42.7 42.7 0 10-85.4 0z',fill:evalColor('fill','#2c2c2c')}));;}
// CONCATENATED MODULE: ./lib/assets/svg/index.tsx

// EXTERNAL MODULE: ./lib/core/Icon/style/icon.scss
var style_icon = __webpack_require__(144);

// CONCATENATED MODULE: ./lib/core/Icon/index.tsx
var Icon_prefix='s-icon';var IconAttrs=['src','type','size','style','beforeLoad','className','pigment','style','lazy','effect','iconNotRotate'];var Icon_presetClassName=function presetClassName(cProps){var _classNames;var size=cProps.size,effect=cProps.effect,className=cProps.className;return classnames_default()(Icon_prefix,className,(_classNames={},_classNames[Icon_prefix+"-"+size]=accordType(size,'String',false),_classNames[Icon_prefix+"-"+effect]=!!effect,_classNames));};var Icon_presetProps=function presetProps(props){var sProps=splitJsxProps(props,IconAttrs);sProps.customProps.size=silentDash_handleSize(sProps.customProps.size);return sProps;};var Icon_Icon=function Icon(props){var _presetProps=Icon_presetProps(props),nativeProps=_presetProps.nativeProps,customProps=_presetProps.customProps;var className=Icon_presetClassName(customProps);var src=customProps.src,lazy=customProps.lazy,beforeLoad=customProps.beforeLoad,type=customProps.type,pigment=customProps.pigment,size=customProps.size,style=customProps.style;var DefaultIcon=svg_namespaceObject[type];var refEle=Object(react["useRef"])(null);var customStyle=Object.assign({},accordType(size,'Object',{}),{},style);Object(react["useLayoutEffect"])(function(){var container=refEle.current;var firstEle=container.firstChild;if(firstEle&&firstEle.tagName==='svg'){firstEle.style.fill=""+pigment;}});return react_default.a.createElement("i",extends_default()({},nativeProps,{className:className,style:customStyle,ref:refEle}),!!type?react_default.a.createElement(DefaultIcon,null):!!props.children?props.children:react_default.a.createElement(core_Picture,{size:['100%','100%'],src:src,lazy:lazy,beforeLoad:beforeLoad}));};Icon_Icon.defaultProps={size:'normal',lazy:false};/* harmony default export */ var core_Icon = (react_default.a.memo(Icon_Icon));
// EXTERNAL MODULE: ./lib/core/Button/style/button.scss
var style_button = __webpack_require__(145);

// CONCATENATED MODULE: ./lib/core/Button/index.tsx
var Button_prefix='s-button';var ButtonAttrs=['size','style','pigment','className','readOnly','mode','effect','target','children','shape','icon','hoverStyle','onClick','onMouseEnter','onMouseLeave','onMouseDown','onMouseUp','iconStyle','contentStyle','value'];var buttonIconDefaultStyle=function buttonIconDefaultStyle(shape){return{marginRight:shape==='circle'?0:'10px',marginTop:0};};var Button_setHoverStyle=function setHoverStyle(hoverStyle,_onMouseLeave,_onMouseEnter){return{onMouseEnter:function onMouseEnter(e){var targetElement=e.target;for(var prop in hoverStyle){targetElement.style[prop]=hoverStyle[prop];}is["function"](_onMouseEnter)&&_onMouseEnter(e);},onMouseLeave:function onMouseLeave(e){var targetElement=e.target;for(var prop in hoverStyle){targetElement.style[prop]='unset';}is["function"](_onMouseLeave)&&_onMouseLeave(e);}};};var Button_handleReloadMode=function handleReloadMode(event,onClick,mode){var e=event||window.event;'reload'===mode&&window.location.reload();is["function"](onClick)&&onClick(e);};var Button_ButtonWithLink=function ButtonWithLink(_ref){var nativeProps=_ref.nativeProps,mode=_ref.mode,children=_ref.children,target=_ref.target,readOnly=_ref.readOnly;return mode==='link'&&!readOnly?react_default.a.createElement("a",extends_default()({},nativeProps,{target:target}),children):children;};var Button_presetClassName=function presetClassName(cProps){var _classNames;var mode=cProps.mode,readOnly=cProps.readOnly,size=cProps.size,effect=cProps.effect,pigment=cProps.pigment,shape=cProps.shape,className=cProps.className;return classnames_default()(Button_prefix,className,(_classNames={},_classNames[Button_prefix+"-"+size]=accordType(size,'String',false),_classNames[Button_prefix+"-fill"]=is.object(size),_classNames[Button_prefix+"-"+effect]=!!effect,_classNames[Button_prefix+"-"+mode]=mode,_classNames[Button_prefix+"-"+shape]=shape,_classNames[Button_prefix+"-readOnly"]=readOnly,_classNames[Button_prefix+"-"+pigment]=pigment&&mode!=='link',_classNames));};var Button_presetProps=function presetProps(props){var sProps=splitJsxProps(props,ButtonAttrs);sProps.customProps.size=silentDash_handleSize(sProps.customProps.size);sProps.customProps.target='_'+sProps.customProps.target;return sProps;};var Button_Button=function Button(props){var _presetProps=Button_presetProps(props),nativeProps=_presetProps.nativeProps,customProps=_presetProps.customProps;var style=customProps.style,size=customProps.size,children=customProps.children,mode=customProps.mode,target=customProps.target,readOnly=customProps.readOnly,hoverStyle=customProps.hoverStyle,icon=customProps.icon,_onClick=customProps.onClick,contentStyle=customProps.contentStyle,iconStyle=customProps.iconStyle,value=customProps.value,onMouseEnter=customProps.onMouseEnter,onMouseLeave=customProps.onMouseLeave,shape=customProps.shape;var ref=Object(react["useRef"])(null);var classNames=Button_presetClassName(customProps);var containerStyle=Object.assign({},accordType(size,'Object',{}),{},style);var setIconStyle=Object.assign({},iconStyle,{},buttonIconDefaultStyle(shape));return react_default.a.createElement(Button_ButtonWithLink,{nativeProps:nativeProps,mode:mode,target:target,readOnly:readOnly},react_default.a.createElement("button",extends_default()({ref:ref,id:Button_prefix},Button_setHoverStyle(hoverStyle,onMouseLeave,onMouseEnter),{type:mode,style:containerStyle,disabled:readOnly,className:classNames,onClick:function onClick(e){Button_handleReloadMode(e,_onClick,mode);}}),icon&&(react_default.a.isValidElement(icon)?react_default.a.cloneElement(icon,{style:setIconStyle}):react_default.a.createElement(core_Icon,{style:setIconStyle,src:icon})),react_default.a.createElement("span",{style:Object.assign({position:'relative'},contentStyle)},children||value)));};Button_Button.defaultProps={size:'normal',readOnly:false,mode:'button',target:'blank',pigment:'grey',shape:'rect'};/* harmony default export */ var core_Button = (Button_Button);
// CONCATENATED MODULE: ./lib/core/Fold/Fold.tsx
var Fold_prefix='s-fold';var FoldAttrs=['size','style','className','mode','duration','fillet','children','isFold','addStyle'];var FoldContext=react_default.a.createContext({});var Fold_presetProps=function presetProps(props){var sProps=splitJsxProps(props,FoldAttrs);sProps.customProps.size=silentDash_handleSize(sProps.customProps.size);return sProps;};var Fold_Fold=function Fold(props){var _presetProps=Fold_presetProps(props),nativeProps=_presetProps.nativeProps,customProps=_presetProps.customProps;var addStyle=customProps.addStyle;var foldContext=Object(react["useContext"])(FoldContext);var containerStyle=Object.assign({},accordType(customProps.size,'Object',{}),{},customProps.style);for(var prop in customProps){foldContext[prop]=customProps[prop];}Object(react["useEffect"])(function(){!!addStyle&&completeStyle(Fold_prefix,addStyle);},[addStyle]);return react_default.a.createElement("div",extends_default()({},nativeProps,{className:classnames_default()(Fold_prefix,customProps.className),style:containerStyle}),props.children);};/* harmony default export */ var core_Fold_Fold = (Fold_Fold);
// EXTERNAL MODULE: ./node_modules/height-zero2auto/index.js
var height_zero2auto = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/computed-style/dist/computedStyle.commonjs.js
var computedStyle_commonjs = __webpack_require__(10);
var computedStyle_commonjs_default = /*#__PURE__*/__webpack_require__.n(computedStyle_commonjs);

// EXTERNAL MODULE: ./lib/core/Fold/style/panel.scss
var panel = __webpack_require__(146);

// CONCATENATED MODULE: ./lib/core/Fold/Panel.tsx
var Panel_prefix='s-panel';var PanelAttrs=['size','style','className','mode','duration','fillet','children','isFold','onClick','icon','timingFunction','duration','headline','headlineStyle','innerStyle','onDelete','readOnly'];var PanelContext=react_default.a.createContext({});var Panel_presetProps=function presetProps(props){var sProps=splitJsxProps(props,PanelAttrs);sProps.customProps.size=silentDash_handleSize(sProps.customProps.size);return sProps;};var Panel_presetClassName=function presetClassName(cProps,useFold,mode,fillet,readOnly){var _classNames,_classNames2,_classNames3;var className=cProps.className;var isSimpleFillet=mode==='simple'&&fillet;return{containerCN:classnames_default()(Panel_prefix,className),headlineCN:classnames_default()((_classNames={headline:true},_classNames["headline-"+mode]=true,_classNames['headline-simple-fillet']=isSimpleFillet,_classNames['headline-readonly']=readOnly,_classNames)),innerCN:classnames_default()((_classNames2={inner:true},_classNames2["inner-"+mode]=true,_classNames2['inner-simple-fillet']=isSimpleFillet,_classNames2)),iconCN:classnames_default()((_classNames3={icon:true},_classNames3["icon-"+(useFold?'fold':'unFold')]=true,_classNames3))};};var Panel_Panel=function Panel(props){var _presetProps=Panel_presetProps(props),nativeProps=_presetProps.nativeProps,customProps=_presetProps.customProps;var headline=customProps.headline,children=customProps.children,icon=customProps.icon,_onClick=customProps.onClick,onDelete=customProps.onDelete,headlineStyle=customProps.headlineStyle,innerStyle=customProps.innerStyle,timingFunction=customProps.timingFunction,readOnly=customProps.readOnly;var context=Object(react["useContext"])(FoldContext);var mode=context.mode||customProps.mode;var fillet=context.fillet||customProps.fillet;var duration=context.duration||customProps.duration;var iconEle=react_default.a.isValidElement(icon)&&react_default.a.cloneElement(icon,{size:'small'});var isFold=is.undefined(context.isFold)?is.undefined(customProps.isFold)?undefined:customProps.isFold:context.isFold;var _useState=Object(react["useState"])(!!!isFold),selfFold=_useState[0],setSelfFold=_useState[1];var useFold=is.undefined(isFold)?selfFold:isFold;var _presetClassName=Panel_presetClassName(customProps,useFold,mode,fillet,!!readOnly),headlineCN=_presetClassName.headlineCN,containerCN=_presetClassName.containerCN,innerCN=_presetClassName.innerCN,iconCN=_presetClassName.iconCN;var panelRef=Object(react["useRef"])(null);var headlineRef=Object(react["useRef"])(null);var innerRef=Object(react["useRef"])(null);var containerStyle=Object.assign({},accordType(customProps.size,'Object',{}),{},customProps.style);Object(react["useLayoutEffect"])(function(){var ref=panelRef.current;var headline=headlineRef.current;var inner=innerRef.current;var nextEle=ref.nextSibling;var preEle=ref.previousSibling;var setLastPanelCN=function setLastPanelCN(){var _classNames4;var lastPanelCN=classnames_default()(ref.className,(_classNames4={},_classNames4[Panel_prefix+"-last"]=true,_classNames4[Panel_prefix+"-last-fillet"]=fillet,_classNames4));var lastHeadlineCN=classnames_default()(headline.className,{'headline-normal-fillet':fillet});var innerCN=classnames_default()(inner.className,{'inner-fillet':fillet});ref.setAttribute('class',lastPanelCN);headline.setAttribute('class',lastHeadlineCN);inner.setAttribute('class',innerCN);};var setFirstPanelCN=function setFirstPanelCN(){var firstPanelCN=classnames_default()(headline.className,{'first-fillet':true});headline.setAttribute('class',firstPanelCN);};if(!!fillet&&mode==='normal'){if(!!preEle){var className=preEle.getAttribute('class');className!==Panel_prefix&&setFirstPanelCN();}else if(preEle===null){setFirstPanelCN();}}if(mode==='normal')nextEle===null&&setLastPanelCN();var bgColor=computedStyle_commonjs_default()(headline,'background-color');if(readOnly){headline.style.backgroundColor=makeColorDarker(bgColor,0.95);}},[fillet,mode,readOnly]);return react_default.a.createElement("div",extends_default()({ref:panelRef},nativeProps,{className:containerCN,style:containerStyle}),react_default.a.createElement("div",{className:headlineCN,style:headlineStyle,ref:headlineRef,onClick:function onClick(e){if(!readOnly){e.stopPropagation();!is["function"](_onClick)&&setSelfFold(!selfFold);is["function"](_onClick)&&_onClick(e);}}},icon==='unset'?null:react_default.a.createElement("div",{className:iconCN},!!icon?is.string(icon)?react_default.a.createElement(core_Icon,{src:icon,size:"small"}):iconEle:react_default.a.createElement(core_Icon,{type:"TinyArrowRight",size:"small"})),react_default.a.createElement("div",{className:"headline-content"},headline),is["function"](onDelete)?react_default.a.createElement("div",{className:"cancel"},react_default.a.createElement(core_Icon,{type:"Cross",size:[12,12],onClick:function onClick(e){e.stopPropagation();if(onDelete()){var panelEle=panelRef.current;var parentNode=panelEle.parentNode;parentNode.removeChild(panelEle);}}})):null),react_default.a.createElement(height_zero2auto["HeightZeroToAuto"],{transitionDuration:duration,transitionFunc:timingFunction,height:useFold?'0px':'auto'},react_default.a.createElement("div",{className:innerCN,ref:innerRef,style:innerStyle},children)));};Panel_Panel.defaultProps={mode:'normal',fillet:false,duration:400,readOnly:false,timingFunction:'ease'};/* harmony default export */ var Fold_Panel = (Panel_Panel);
// CONCATENATED MODULE: ./lib/core/Fold/index.tsx

// EXTERNAL MODULE: ./lib/core/ArticleOccupy/style/letter.scss
var letter = __webpack_require__(147);

// CONCATENATED MODULE: ./lib/core/ArticleOccupy/Letter.tsx
var Letter_prefix='s-articleOccupy-letter';var LetterAttrs=['style','className','size','flash'];var Letter_presetProps=function presetProps(props){var sProps=splitJsxProps(props,LetterAttrs);sProps.customProps.size=silentDash_handleSize(sProps.customProps.size);return sProps;};var Letter_Letter=function Letter(props){var _presetProps=Letter_presetProps(props),nativeProps=_presetProps.nativeProps,customProps=_presetProps.customProps;var size=customProps.size,style=customProps.style,className=customProps.className,flash=customProps.flash;var containerStyle=Object.assign({},accordType(size,'Object',{}),{},style);return react_default.a.createElement("div",{className:classnames_default()(Letter_prefix,className),style:containerStyle},Array(4).fill('').map(function(ele,index){return react_default.a.createElement("div",extends_default()({},nativeProps,{className:classnames_default()({isFlash:flash}),key:index}));}));};Letter_Letter.defaultProps={flash:false};/* harmony default export */ var ArticleOccupy_Letter = (react_default.a.memo(Letter_Letter));
// CONCATENATED MODULE: ./lib/core/ArticleOccupy/index.tsx
var ArticleOccupy_prefix='s-articleOccupy';var ArticleOccupy_ArticleOccupy=function(_React$PureComponent){inheritsLoose_default()(ArticleOccupy,_React$PureComponent);function ArticleOccupy(){return _React$PureComponent.apply(this,arguments)||this;}var _proto=ArticleOccupy.prototype;_proto.render=function render(){return react_default.a.createElement("div",{className:classnames_default()(ArticleOccupy_prefix,this.props.className)},this.props.children);};return ArticleOccupy;}(react_default.a.PureComponent);ArticleOccupy_ArticleOccupy.Letter=ArticleOccupy_Letter;
// EXTERNAL MODULE: ./lib/core/Layout/Flex/style/average.scss
var average = __webpack_require__(148);

// CONCATENATED MODULE: ./lib/core/Layout/Flex/Average.tsx
var Average_prefix='s-flex-average';var AverageAttrs=['size','className','style','wrap','inline','children'];var Average_presetProps=function presetProps(props){var sProps=splitJsxProps(props,AverageAttrs);sProps.customProps.size=silentDash_handleSize(sProps.customProps.size);return sProps;};var Average_Average=function Average(props){var _classNames;var _presetProps=Average_presetProps(props),nativeProps=_presetProps.nativeProps,customProps=_presetProps.customProps;var size=customProps.size,style=customProps.style,children=customProps.children,className=customProps.className,wrap=customProps.wrap,inline=customProps.inline;var containerStyle=Object.assign({},accordType(size,'Object',{}),{},style);return react_default.a.createElement("div",extends_default()({},nativeProps,{style:containerStyle,className:classnames_default()(Average_prefix,className,(_classNames={},_classNames[Average_prefix+"-no-wrap"]=!wrap,_classNames[Average_prefix+"-no-inline"]=!inline,_classNames))}),children);};Average_Average.defaultProps={wrap:true,inline:true};/* harmony default export */ var Flex_Average = (react_default.a.memo(Average_Average));
// EXTERNAL MODULE: ./lib/core/Layout/Flex/style/vertical.scss
var vertical = __webpack_require__(149);

// CONCATENATED MODULE: ./lib/core/Layout/Flex/Vertical.tsx
var Vertical_prefix='s-flex-vertical';var VerticalAttrs=['size','className','style','wrap','inline','center','start','end','reserve','children'];var Vertical_presetProps=function presetProps(props){var sProps=splitJsxProps(props,VerticalAttrs);sProps.customProps.size=silentDash_handleSize(sProps.customProps.size);return sProps;};var Vertical_Vertical=function Vertical(props){var _classNames;var _presetProps=Vertical_presetProps(props),nativeProps=_presetProps.nativeProps,customProps=_presetProps.customProps;var size=customProps.size,style=customProps.style,children=customProps.children,className=customProps.className,wrap=customProps.wrap,inline=customProps.inline,center=customProps.center,start=customProps.start,end=customProps.end,reserve=customProps.reserve;var containerStyle=Object.assign({},accordType(size,'Object',{}),{},style);return react_default.a.createElement("div",extends_default()({},nativeProps,{style:containerStyle,className:classnames_default()(Vertical_prefix,className,(_classNames={},_classNames[Vertical_prefix+"-no-wrap"]=!wrap,_classNames[Vertical_prefix+"-no-inline"]=!inline,_classNames[Vertical_prefix+"-center"]=center,_classNames[Vertical_prefix+"-start"]=start,_classNames[Vertical_prefix+"-end"]=end,_classNames[Vertical_prefix+"-reserve"]=reserve,_classNames))}),children);};Vertical_Vertical.defaultProps={wrap:false,inline:true,center:true};/* harmony default export */ var Flex_Vertical = (react_default.a.memo(Vertical_Vertical));
// CONCATENATED MODULE: ./lib/core/Layout/Flex/index.tsx
var Flex_Flex=function(_React$Component){inheritsLoose_default()(Flex,_React$Component);function Flex(){return _React$Component.apply(this,arguments)||this;}var _proto=Flex.prototype;_proto.render=function render(){return react["createElement"](Flex_Average,this.props,this.props.children);};return Flex;}(react["Component"]);Flex_Flex.Average=Flex_Average;Flex_Flex.Vertical=Flex_Vertical;
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.every.js
var es_array_every = __webpack_require__(150);

// CONCATENATED MODULE: ./lib/core/Layout/CalcPos/Edge.tsx
var Edge_Edge=function Edge(props){var style=props.style,children=props.children,className=props.className,edgePosition=props.edgePosition;var ref=Object(react["useRef"])(null);var containerStyle=Object.assign({position:'absolute',top:'0px',left:'0px'},style);Object(react["useLayoutEffect"])(function(){var edgeEle=ref.current;var parentEle=edgeEle.parentElement;var onlyOneChild=edgeEle.childNodes[0];var fitRange=edgePosition&&edgePosition.every(function(num){return num>=0&&num<=1;});if(fitRange){if(!!onlyOneChild){var height=computedStyle_commonjs_default()(onlyOneChild,'height');var width=computedStyle_commonjs_default()(onlyOneChild,'width');var parentHeight=computedStyle_commonjs_default()(parentEle,'height');var parentWidth=computedStyle_commonjs_default()(parentEle,'width');parentEle.style.position='relative';edgeEle.style.left=parseInt(parentHeight)*edgePosition[0]-parseInt(height)/2+'px';edgeEle.style.top=parseInt(parentWidth)*edgePosition[1]-parseInt(width)/2+'px';}else{throw new Error('Warn: <Edge/> only accepts one Child');}}else{console.warn('Warn: edgePosition value needs to between 0 ~ 1');}});return react_default.a.createElement("div",{ref:ref,style:containerStyle,className:classnames_default()(className)},children);};Edge_Edge.defaultProps={edgePosition:[0,0]};/* harmony default export */ var CalcPos_Edge = (react_default.a.memo(Edge_Edge));
// CONCATENATED MODULE: ./lib/core/Layout/CalcPos/Center.tsx
var Center_Center=function Center(props){var style=props.style,children=props.children,className=props.className;var ref=Object(react["useRef"])(null);var containerStyle=Object.assign({position:'absolute',top:'50%',left:'50%',wordBreak:'keep-all'},style);Object(react["useLayoutEffect"])(function(){var centerEle=ref.current;var onlyOneChild=centerEle.childNodes[0];if(!!onlyOneChild){var height=computedStyle_commonjs_default()(centerEle,'height');var width=computedStyle_commonjs_default()(centerEle,'width');centerEle.style.height=parseInt(height)+'px';centerEle.style.width=parseInt(width)+'px';centerEle.style.marginTop=-parseInt(height)/2+'px';centerEle.style.marginLeft=-parseInt(width)/2+'px';}else{console.warn('Warn: <Center/> only accepts one Child');}});return react_default.a.createElement("div",{ref:ref,style:containerStyle,className:classnames_default()(className)},children);};/* harmony default export */ var CalcPos_Center = (react_default.a.memo(Center_Center));
// CONCATENATED MODULE: ./lib/core/Layout/CalcPos/index.tsx

// EXTERNAL MODULE: ./node_modules/react-flexbox-grid/lib/index.js
var lib = __webpack_require__(33);

// CONCATENATED MODULE: ./lib/core/Layout/Grid/index.tsx

// CONCATENATED MODULE: ./lib/core/Layout/index.tsx

// CONCATENATED MODULE: ./lib/core/Tools/Map/index.tsx
var Map_Map=function Map(props){var children=props.children,repeatCount=props.repeatCount,data=props.data;var mapElement=null;var mapEleArray=[];if(is.number(repeatCount)&&data===void 0){for(var i=0;i<repeatCount;i++){mapEleArray.push(react_default.a.cloneElement(children,{key:i}));mapElement=mapEleArray;}}else if(repeatCount===void 0&&is["function"](children)){var tmpCounter=0;for(var prop in data){tmpCounter++;var clonedElement=react_default.a.cloneElement(children(data[prop]),{key:tmpCounter});mapEleArray.push(clonedElement);mapElement=mapEleArray;}}return react_default.a.createElement(react_default.a.Fragment,null,mapElement);};/* harmony default export */ var Tools_Map = (Map_Map);
// CONCATENATED MODULE: ./lib/core/Tools/index.tsx

// CONCATENATED MODULE: ./lib/index.tsx

// CONCATENATED MODULE: ./app/index.tsx
function App(){return react_default.a.createElement("div",null,react_default.a.createElement(Fold_Panel,{headline:"fuck"},"fuck"));}react_dom_default.a.render(react_default.a.createElement(App,null),document.getElementById('root'));

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(157);


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[89,1,2]]]);
});