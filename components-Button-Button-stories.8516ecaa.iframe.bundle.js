"use strict";(self.webpackChunk_jahia_moonstone=self.webpackChunk_jahia_moonstone||[]).push([[7721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Ghost:()=>Ghost,IconAndLabel:()=>IconAndLabel,OnlyIcon:()=>OnlyIcon,OnlyLabel:()=>OnlyLabel,Outlined:()=>Outlined,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var react=__webpack_require__("./node_modules/react/index.js"),Button=(__webpack_require__("./src/__storybook__/storybook.scss"),__webpack_require__("./src/components/Button/Button.tsx")),Love=__webpack_require__("./src/icons/components/Love.tsx"),OpenInNew=__webpack_require__("./src/icons/components/OpenInNew.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Button_stories={title:"Components/Button",component:Button.$,parameters:{layout:"centered",actions:{argTypesRegex:"^on.*"},notes:{markdown:'## Goals:\nCreate a basic button component\n\n[Mockup](https://www.figma.com/file/939bW74C3TLW5VAzK23uox/moonstone-components?node-id=70%3A287)\n\n## Specifications:\nA disabled button cannot be clickable.\n\nText label should use component typography, with variant "button"\n\nWe need design specs for each props and states (hover, focus, disables; active ...\n'}}},Template=(args,globals)=>{const theme=globals.theme;return react.createElement(Button.$,_extends({isReversed:"dark"===theme},args))},Overview={render:args=>react.createElement(react.Fragment,null,react.createElement("section",{className:"storyGrid"},react.createElement(Button.$,_extends({label:"default"},args,{variant:"default"})),react.createElement(Button.$,_extends({label:"outlined"},args,{variant:"outlined"})),react.createElement(Button.$,_extends({label:"ghost"},args,{variant:"ghost"}))),react.createElement("section",{className:"storyGrid",style:{backgroundColor:"var(--color-gray_dark)"}},react.createElement(Button.$,_extends({isReversed:!0,label:"default"},args,{variant:"default"})),react.createElement(Button.$,_extends({isReversed:!0,label:"outlined"},args,{variant:"outlined"})),react.createElement(Button.$,_extends({isReversed:!0,label:"ghost"},args,{variant:"ghost"}))))},Default={args:{icon:react.createElement(Love.A,null),label:"Button"},render:Template},Ghost={args:{variant:"ghost",icon:react.createElement(Love.A,null),label:"Button"},render:Template},Outlined={args:{variant:"outlined",icon:react.createElement(Love.A,null),label:"Button"},render:Template},IconAndLabel={args:{icon:react.createElement(Love.A,null),iconEnd:react.createElement(OpenInNew.A,null)},parameters:{controls:{exclude:["variant","label"]}},render:(args,globals)=>{const theme=globals.theme;return react.createElement("section",{className:"storyGrid"},react.createElement(Button.$,_extends({label:"default",isReversed:"dark"===theme},args,{variant:"default"})),react.createElement(Button.$,_extends({label:"ghost",isReversed:"dark"===theme},args,{variant:"ghost"})),react.createElement(Button.$,_extends({label:"outlined",isReversed:"dark"===theme},args,{variant:"outlined"})))}},OnlyLabel={render:(args,globals)=>{const theme=globals.theme;return react.createElement("section",{className:"storyGrid"},react.createElement(Button.$,_extends({label:"default",isReversed:"dark"===theme},args,{variant:"default"})),react.createElement(Button.$,_extends({label:"ghost",isReversed:"dark"===theme},args,{variant:"ghost"})),react.createElement(Button.$,_extends({label:"outlined",isReversed:"dark"===theme},args,{variant:"outlined"})))},parameters:{controls:{exclude:["variant","label"]}}},OnlyIcon={render:(args,globals)=>{const theme=globals.theme;return react.createElement("section",{className:"storyGrid"},react.createElement(Button.$,_extends({},args,{isReversed:"dark"===theme,variant:"default"})),react.createElement(Button.$,_extends({},args,{isReversed:"dark"===theme,variant:"ghost"})),react.createElement(Button.$,_extends({},args,{isReversed:"dark"===theme,variant:"outlined"})))},args:{icon:react.createElement(Love.A,null)},parameters:{controls:{exclude:["variant","label"]}}},Disabled={render:(args,globals)=>{const theme=globals.theme;return react.createElement("section",{className:"storyGrid"},react.createElement(Button.$,_extends({label:"default",isReversed:"dark"===theme},args,{variant:"default"})),react.createElement(Button.$,_extends({label:"ghost",isReversed:"dark"===theme},args,{variant:"ghost"})),react.createElement(Button.$,_extends({label:"outlined",isReversed:"dark"===theme},args,{variant:"outlined"})))},args:{icon:react.createElement(Love.A,null),isDisabled:!0},parameters:{controls:{exclude:["variant","label"]}}},__namedExportsOrder=["Overview","Default","Ghost","Outlined","IconAndLabel","OnlyLabel","OnlyIcon","Disabled"];Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: args => <>\n            <section className="storyGrid">\n                <Button label="default" {...args} variant="default" />\n                <Button label="outlined" {...args} variant="outlined" />\n                <Button label="ghost" {...args} variant="ghost" />\n            </section>\n            <section className="storyGrid" style={{\n      backgroundColor: \'var(--color-gray_dark)\'\n    }}>\n                <Button isReversed label="default" {...args} variant="default" />\n                <Button isReversed label="outlined" {...args} variant="outlined" />\n                <Button isReversed label="ghost" {...args} variant="ghost" />\n            </section>\n        </>\n}',...Overview.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <Love />,\n    label: 'Button'\n  },\n  render: Template\n}",...Default.parameters?.docs?.source}}},Ghost.parameters={...Ghost.parameters,docs:{...Ghost.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'ghost',\n    icon: <Love />,\n    label: 'Button'\n  },\n  render: Template\n}",...Ghost.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'outlined',\n    icon: <Love />,\n    label: 'Button'\n  },\n  render: Template\n}",...Outlined.parameters?.docs?.source}}},IconAndLabel.parameters={...IconAndLabel.parameters,docs:{...IconAndLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <Love />,\n    iconEnd: <OpenInNew />\n  },\n  parameters: {\n    controls: {\n      exclude: ['variant', 'label']\n    }\n  },\n  render: IconAndLabelTemplate\n}",...IconAndLabel.parameters?.docs?.source}}},OnlyLabel.parameters={...OnlyLabel.parameters,docs:{...OnlyLabel.parameters?.docs,source:{originalSource:'{\n  render: (args: ButtonProps, globals: StoryContext) => {\n    const theme = globals.theme;\n    return <section className="storyGrid">\n                <Button label="default" isReversed={theme === \'dark\'} {...args} variant="default" />\n                <Button label="ghost" isReversed={theme === \'dark\'} {...args} variant="ghost" />\n                <Button label="outlined" isReversed={theme === \'dark\'} {...args} variant="outlined" />\n            </section>;\n  },\n  parameters: {\n    controls: {\n      exclude: [\'variant\', \'label\']\n    }\n  }\n}',...OnlyLabel.parameters?.docs?.source}}},OnlyIcon.parameters={...OnlyIcon.parameters,docs:{...OnlyIcon.parameters?.docs,source:{originalSource:"{\n  render: (args: ButtonProps, globals: StoryContext) => {\n    const theme = globals.theme;\n    return <section className=\"storyGrid\">\n                <Button {...args} isReversed={theme === 'dark'} variant=\"default\" />\n                <Button {...args} isReversed={theme === 'dark'} variant=\"ghost\" />\n                <Button {...args} isReversed={theme === 'dark'} variant=\"outlined\" />\n            </section>;\n  },\n  args: {\n    icon: <Love />\n  },\n  parameters: {\n    controls: {\n      exclude: ['variant', 'label']\n    }\n  }\n}",...OnlyIcon.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: (args: ButtonProps, globals: StoryContext) => {\n    const theme = globals.theme;\n    return <section className="storyGrid">\n                <Button label="default" isReversed={theme === \'dark\'} {...args} variant="default" />\n                <Button label="ghost" isReversed={theme === \'dark\'} {...args} variant="ghost" />\n                <Button label="outlined" isReversed={theme === \'dark\'} {...args} variant="outlined" />\n            </section>;\n  },\n  args: {\n    icon: <Love />,\n    isDisabled: true\n  },\n  parameters: {\n    controls: {\n      exclude: [\'variant\', \'label\']\n    }\n  }\n}',...Disabled.parameters?.docs?.source}}}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_Typography__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/components/Button/Button.scss"),__webpack_require__("./src/components/Typography/Typography.tsx")),_Loader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Loader/Loader.tsx"),_excluded=["label","size","isReversed","isDisabled","isLoading","icon","iconEnd","variant","color","className","onClick"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Button=function Button(_ref){var _ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,_ref$isReversed=_ref.isReversed,isReversed=void 0!==_ref$isReversed&&_ref$isReversed,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,_ref$icon=_ref.icon,icon=void 0===_ref$icon?null:_ref$icon,_ref$iconEnd=_ref.iconEnd,iconEnd=void 0===_ref$iconEnd?null:_ref$iconEnd,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,_ref$color=_ref.color,color=void 0===_ref$color?"default":_ref$color,_ref$className=_ref.className,className=void 0===_ref$className?null:_ref$className,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?function(){}:_ref$onClick,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),typoWeight="default",ButtonEl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);"small"===size&&(typoWeight="light"),"big"===size&&(typoWeight="semiBold");var handleOnClick=function handleOnClick(e){onClick(e),ButtonEl.current.blur()},LoaderReversed=Boolean("default"===variant&&("accent"===color||"danger"===color));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({ref:ButtonEl,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("moonstone-button","moonstone-size_".concat(size),"moonstone-variant_".concat(variant),"moonstone-color_".concat(color),{"moonstone-icon":label&&(icon||iconEnd)},{"moonstone-icon-button":!label},{"moonstone-reverse":isReversed},{"moonstone-button_loading":isLoading},className),type:"button",disabled:isDisabled||isLoading,onClick:function onClick(e){return handleOnClick(e)}},props),icon&&!isLoading&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(icon.type,_extends({},icon.props,{size:"big"===size?"default":size})),isLoading&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_3__.a,{size:"small",isReversed:LoaderReversed,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)({"moonstone-button_loaderOverlay":!icon})}),label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_4__.o,{isNowrap:!0,component:"span",variant:"button",isUpperCase:"big"===size,weight:typoWeight,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("flexFluid")},label),label&&iconEnd&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(iconEnd.type,_extends({},iconEnd.props,{size:"big"===size?"default":size})))};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},label:{defaultValue:{value:""},description:"Text displays inside the button",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"default"},description:"Size of the button",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"default"'}]}},icon:{defaultValue:{value:"null"},description:"Icon component displays before the label",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconEnd:{defaultValue:{value:"null"},description:"Icon component displays after the label",name:"iconEnd",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},variant:{defaultValue:{value:"default"},description:"Style of the button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outlined"'},{value:'"ghost"'}]}},color:{defaultValue:{value:"default"},description:"Color of the button",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"accent"'},{value:'"danger"'}]}},isDisabled:{defaultValue:{value:"false"},description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReversed:{defaultValue:{value:"false"},description:"Whether the component should use reversed colors, it useful with dark background",name:"isReversed",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"Whether the button is loading",name:"isLoading",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:"null"},description:"Additional classname",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:{value:"() => undefined"},description:"Function triggered on click",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/components/Love.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["size","className","color"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const __WEBPACK_DEFAULT_EXPORT__=function SvgLove(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,color=_ref.color,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),props=Object.assign({},function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({size,className},otherProps)),classNameColor=color?" moonstone-icon_"+color:"";return props.className=className+" moonstone-icon moonstone-icon_"+size+classNameColor,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"}))};try{Love.displayName="Love",Love.__docgenInfo={description:"",displayName:"Love",props:{size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"default"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"darkBlue"'},{value:'"purple"'},{value:'"gray"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/components/Love.tsx#Love"]={docgenInfo:Love.__docgenInfo,name:"Love",path:"src/icons/components/Love.tsx#Love"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/components/OpenInNew.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["size","className","color"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const __WEBPACK_DEFAULT_EXPORT__=function SvgOpenInNew(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,color=_ref.color,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),props=Object.assign({},function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({size,className},otherProps)),classNameColor=color?" moonstone-icon_"+color:"";return props.className=className+" moonstone-icon moonstone-icon_"+size+classNameColor,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z"}))};try{OpenInNew.displayName="OpenInNew",OpenInNew.__docgenInfo={description:"",displayName:"OpenInNew",props:{size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"default"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"darkBlue"'},{value:'"purple"'},{value:'"gray"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/components/OpenInNew.tsx#OpenInNew"]={docgenInfo:OpenInNew.__docgenInfo,name:"OpenInNew",path:"src/icons/components/OpenInNew.tsx#OpenInNew"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/__storybook__/storybook.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".storyWrapper{display:flex;flex-flow:column wrap;min-width:600px;max-width:100%;margin:0 auto;padding:var(--spacing-huge)}.storyWrapper.dark{background-color:var(--color-dark)}.storyItem{position:relative;display:flex;justify-content:space-between;align-items:center;min-width:500px;min-height:80px}.storyItem+.storyItem{margin-top:var(--spacing-medium)}.storyGrid{display:flex;flex-wrap:wrap;gap:2rem;justify-content:center;padding:1rem}.storyGridItem{position:relative;display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:130px;height:72px;margin:var(--spacing-big)}.storyColumn{display:flex;flex-direction:column;align-items:flex-start}.storyColumn>*{margin:10px}.storyCode{font-family:monospace}","",{version:3,sources:["webpack://./src/__storybook__/storybook.scss"],names:[],mappings:"AAAA,cACI,YAAA,CACA,qBAAA,CACA,eAAA,CACA,cAAA,CACA,aAAA,CACA,2BAAA,CAEA,mBACI,kCAAA,CAIR,WACI,iBAAA,CAEA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,eAAA,CACA,eAAA,CAEA,sBACI,gCAAA,CAIR,WACI,YAAA,CACA,cAAA,CACA,QAAA,CACA,sBAAA,CACA,YAAA,CAGJ,eACI,iBAAA,CAEA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,kBAAA,CACA,WAAA,CACA,WAAA,CACA,yBAAA,CAGJ,aACI,YAAA,CACA,qBAAA,CACA,sBAAA,CAEA,eACI,WAAA,CAIR,WACI,qBAAA",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/__storybook__/storybook.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_node_modules_sass_loader_dist_cjs_js_storybook_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/__storybook__/storybook.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_node_modules_sass_loader_dist_cjs_js_storybook_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_node_modules_sass_loader_dist_cjs_js_storybook_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_node_modules_sass_loader_dist_cjs_js_storybook_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_node_modules_sass_loader_dist_cjs_js_storybook_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);