"use strict";(self.webpackChunk_jahia_moonstone=self.webpackChunk_jahia_moonstone||[]).push([[8483],{"./src/components/SecondaryNav/SecondaryNav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextTitle:()=>TextTitle,WithHeaderComponent:()=>WithHeaderComponent,WithHeaderImage:()=>WithHeaderImage,WithTextInHeaderComponent:()=>WithTextInHeaderComponent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SecondaryNav_stories});var react=__webpack_require__("./node_modules/react/index.js"),SecondaryNav=__webpack_require__("./src/components/SecondaryNav/SecondaryNav.tsx"),SecondaryNavHeader=__webpack_require__("./src/components/SecondaryNav/SecondaryNavHeader/SecondaryNavHeader.tsx");var Love=__webpack_require__("./src/icons/components/Love.tsx");const SecondaryNav_stories={title:"Components/SecondaryNav",component:SecondaryNav._,decorators:[StoryCmp=>react.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100vh"}},react.createElement(StoryCmp,null))],parameters:{notes:{markdown:""}}},Template=args=>react.createElement(SecondaryNav._,args,"My content here"),TextTitle={render:Template,args:{header:"Header here"}},WithHeaderImage={render:Template,args:{header:react.createElement(Love.A,{size:"big"})}},WithTextInHeaderComponent={render:Template,args:{header:react.createElement(SecondaryNavHeader.V,null,"Secondary Header")}},WithHeaderComponent={render:Template,args:{header:react.createElement(SecondaryNavHeader.V,null,react.createElement(Love.A,{size:"big"}))}},__namedExportsOrder=["TextTitle","WithHeaderImage","WithTextInHeaderComponent","WithHeaderComponent"];TextTitle.parameters={...TextTitle.parameters,docs:{...TextTitle.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    header: 'Header here'\n  }\n}",...TextTitle.parameters?.docs?.source}}},WithHeaderImage.parameters={...WithHeaderImage.parameters,docs:{...WithHeaderImage.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    header: <Love size="big" />\n  }\n}',...WithHeaderImage.parameters?.docs?.source}}},WithTextInHeaderComponent.parameters={...WithTextInHeaderComponent.parameters,docs:{...WithTextInHeaderComponent.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    header: <SecondaryNavHeader>Secondary Header</SecondaryNavHeader>\n  }\n}",...WithTextInHeaderComponent.parameters?.docs?.source}}},WithHeaderComponent.parameters={...WithHeaderComponent.parameters,docs:{...WithHeaderComponent.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    header: <SecondaryNavHeader>\n                <Love size="big" />\n            </SecondaryNavHeader>\n  }\n}',...WithHeaderComponent.parameters?.docs?.source}}}},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography_Typography_Typography});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Typography=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Typography.A,options);Typography.A&&Typography.A.locals&&Typography.A.locals;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","component","variant","weight","className","hasLineThrough","isItalic","isUpperCase","isNowrap"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Typography_Typography_Typography=function Typography(_ref){var _ref$children=_ref.children,children=void 0===_ref$children?"":_ref$children,_ref$component=_ref.component,component=void 0===_ref$component?"p":_ref$component,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"body":_ref$variant,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"default":_ref$weight,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$hasLineThrough=_ref.hasLineThrough,hasLineThrough=void 0!==_ref$hasLineThrough&&_ref$hasLineThrough,_ref$isItalic=_ref.isItalic,isItalic=void 0!==_ref$isItalic&&_ref$isItalic,_ref$isUpperCase=_ref.isUpperCase,isUpperCase=void 0!==_ref$isUpperCase&&_ref$isUpperCase,_ref$isNowrap=_ref.isNowrap,isNowrap=void 0!==_ref$isNowrap&&_ref$isNowrap,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return children?react.createElement(component,_objectSpread(_objectSpread({},props),{},{className:(0,clsx.A)("moonstone-typography","moonstone-variant_".concat(variant),"moonstone-weight_".concat(weight),className,{"moonstone-nowrap":isNowrap},{"moonstone-italic":isItalic},{"moonstone-upperCase":isUpperCase},{"moonstone-lineThrough":hasLineThrough})}),children):null};Typography_Typography_Typography.displayName="Typography",Typography_Typography_Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the component",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom classname to use",defaultValue:{value:"''",computed:!1}},component:{required:!1,tsType:{name:"string"},description:"The component used for the root node",defaultValue:{value:"'p'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'title' | 'heading' | 'subheading' | 'body' | 'caption' | 'button'",elements:[{name:"literal",value:"'title'"},{name:"literal",value:"'heading'"},{name:"literal",value:"'subheading'"},{name:"literal",value:"'body'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'button'"}]},description:"Variant to use",defaultValue:{value:"'body'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'default' | 'bold' | 'semiBold' | 'light'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'semiBold'"},{name:"literal",value:"'light'"}]},description:"The weight of the font to use",defaultValue:{value:"'default'",computed:!1}},isItalic:{required:!1,tsType:{name:"boolean"},description:"Should the text be displayed in italic",defaultValue:{value:"false",computed:!1}},isUpperCase:{required:!1,tsType:{name:"boolean"},description:"Should the text be displayed in upper case",defaultValue:{value:"false",computed:!1}},hasLineThrough:{required:!1,tsType:{name:"boolean"},description:"Should the text be displayed with a line-through",defaultValue:{value:"false",computed:!1}},isNowrap:{required:!1,tsType:{name:"boolean"},description:"No wrapping for text",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom CSS style"}}}},"./src/icons/components/ChevronDoubleLeft.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["size","className","color"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var SvgChevronDoubleLeft=function SvgChevronDoubleLeft(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,color=_ref.color,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),props=Object.assign({},function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({size,className},otherProps)),classNameColor=color?" moonstone-icon_"+color:"";return props.className=className+" moonstone-icon moonstone-icon_"+size+classNameColor,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11 6L12.41 7.41L7.83 12L12.41 16.59L11 18L5 12L11 6Z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M18 6L19.41 7.41L14.83 12L19.41 16.59L18 18L12 12L18 6Z"}))};const __WEBPACK_DEFAULT_EXPORT__=SvgChevronDoubleLeft;SvgChevronDoubleLeft.__docgenInfo={description:"",methods:[],displayName:"SvgChevronDoubleLeft",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'big'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'big'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray'",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'green'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'darkBlue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'gray'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}},composes:["SVGProps"]}},"./src/icons/components/ChevronDoubleRight.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["size","className","color"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var SvgChevronDoubleRight=function SvgChevronDoubleRight(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,color=_ref.color,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),props=Object.assign({},function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({size,className},otherProps)),classNameColor=color?" moonstone-icon_"+color:"";return props.className=className+" moonstone-icon moonstone-icon_"+size+classNameColor,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9.58 12L5 16.59L6.41 18L12.41 12L6.41 6L5 7.41L9.58 12Z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16.9899 12L12.4099 16.59L13.8199 18L19.8199 12L13.8199 6L12.4099 7.41L16.9899 12Z"}))};const __WEBPACK_DEFAULT_EXPORT__=SvgChevronDoubleRight;SvgChevronDoubleRight.__docgenInfo={description:"",methods:[],displayName:"SvgChevronDoubleRight",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'big'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'big'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray'",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'green'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'darkBlue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'gray'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}},composes:["SVGProps"]}},"./src/icons/components/HandleResize.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["size","className","color"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var SvgHandleResize=function SvgHandleResize(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,color=_ref.color,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),props=Object.assign({},function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({size,className},otherProps)),classNameColor=color?" moonstone-icon_"+color:"";return props.className=className+" moonstone-icon moonstone-icon_"+size+classNameColor,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9.75 18V6H11.25L11.25 18H9.75Z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M14.25 6L14.25 18H12.75L12.75 6H14.25Z"}))};const __WEBPACK_DEFAULT_EXPORT__=SvgHandleResize;SvgHandleResize.__docgenInfo={description:"",methods:[],displayName:"SvgHandleResize",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'big'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'big'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray'",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'green'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'darkBlue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'gray'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}},composes:["SVGProps"]}},"./src/icons/components/Love.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["size","className","color"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var SvgLove=function SvgLove(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,color=_ref.color,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),props=Object.assign({},function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({size,className},otherProps)),classNameColor=color?" moonstone-icon_"+color:"";return props.className=className+" moonstone-icon moonstone-icon_"+size+classNameColor,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"}))};const __WEBPACK_DEFAULT_EXPORT__=SvgLove;SvgLove.__docgenInfo={description:"",methods:[],displayName:"SvgLove",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'big'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'big'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray'",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'green'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'darkBlue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'gray'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}},composes:["SVGProps"]}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.moonstone-typography.moonstone-variant_title{font-weight:300;font-size:1.75rem;font-feature-settings:"ordn" on,"liga" off;line-height:2rem}.moonstone-typography.moonstone-variant_title::first-letter{text-transform:capitalize}.moonstone-typography.moonstone-variant_heading{font-weight:600;font-size:1.25rem;line-height:1.5rem}.moonstone-typography.moonstone-variant_subheading{font-size:1rem;line-height:1.125rem}.moonstone-typography.moonstone-variant_body{font-size:.875rem;line-height:1.1875rem}.moonstone-typography.moonstone-variant_caption{font-size:.75rem;line-height:1rem}.moonstone-typography.moonstone-variant_button{font-size:.75rem;line-height:1rem}.moonstone-typography.moonstone-weight_bold{font-weight:bold}.moonstone-typography.moonstone-weight_semiBold{font-weight:500}.moonstone-typography.moonstone-weight_light{font-weight:300}.moonstone-typography.moonstone-nowrap{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.moonstone-typography.moonstone-italic{font-style:italic}.moonstone-typography.moonstone-lineThrough{text-decoration-line:line-through}.moonstone-typography.moonstone-upperCase{text-transform:uppercase}',"",{version:3,sources:["webpack://./src/utils/_typography.scss","webpack://./src/utils/_mixins.scss"],names:[],mappings:"AAMA,8CACI,eAAA,CACA,iBAAA,CACA,0CAAA,CAEA,gBAAA,CAEA,4DACI,yBAAA,CAIR,gDACI,eAAA,CACA,iBAAA,CACA,kBAAA,CAGJ,mDACI,cAAA,CACA,oBAAA,CAGJ,6CACI,iBAAA,CACA,qBAAA,CAGJ,gDACI,gBAAA,CACA,gBAAA,CAGJ,+CACI,gBAAA,CACA,gBAAA,CAGJ,4CACI,gBAAA,CAGJ,gDACI,eAAA,CAGJ,6CACI,eAAA,CAGJ,uCCnDI,cDoDyB,CClDzB,kBAAA,CACA,eAAA,CAEA,sBAAA,CDkDJ,uCACI,iBAAA,CAGJ,4CACI,iCAAA,CAGJ,0CACI,wBAAA",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);