"use strict";(self.webpackChunk_jahia_moonstone=self.webpackChunk_jahia_moonstone||[]).push([[5334],{"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Checkbox/Checkbox.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".moonstone-checkbox{position:relative}.moonstone-checkbox_sizeDefault{display:block;width:16px;height:16px}.moonstone-checkbox_sizeBig{display:block;width:20px;height:20px}.moonstone-checkbox_icon{position:absolute;top:0;left:0;fill:none;stroke:var(--color-light);transform:scale(0) translateZ(0);pointer-events:none;stroke-width:2px}.moonstone-checkbox_input{--shadow-size: 1px;--shadow-color: var(--color-gray);position:relative;margin:0;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;border-radius:var(--radius_small);outline:none;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px var(--shadow-color);box-shadow:inset 0 0 0 var(--shadow-size) var(--shadow-color);cursor:pointer;transition:box-shadow .1s}.moonstone-checkbox_input:hover{--shadow-color: var(--color-gray60);--shadow-size: 2px}.moonstone-checkbox_input:focus-visible{border:2px solid var(--color-accent_dark_contrast)}.moonstone-checkbox_input[aria-checked=true],.moonstone-checkbox_input[aria-checked=mixed]{--shadow-size: 12px;--shadow-color: var(--color-accent)}.moonstone-checkbox_input[aria-checked=true]:hover,.moonstone-checkbox_input[aria-checked=mixed]:hover{border:2px solid var(--color-accent_dark)}.moonstone-checkbox_input[aria-checked=true]~.moonstone-checkbox_icon,.moonstone-checkbox_input[aria-checked=mixed]~.moonstone-checkbox_icon{animation:checkboxBounce .1s linear forwards .05s}.moonstone-checkbox_input[disabled],.moonstone-checkbox_input[aria-readonly=true]{cursor:default;opacity:.4;pointer-events:none}.moonstone-checkbox_input[disabled]:hover,.moonstone-checkbox_input[aria-readonly=true]:hover{--shadow-color: var(--color-gray);--shadow-size: 1px}.moonstone-checkbox_input[disabled][aria-checked=true]:hover,.moonstone-checkbox_input[disabled][aria-checked=mixed]:hover,.moonstone-checkbox_input[aria-readonly=true][aria-checked=true]:hover,.moonstone-checkbox_input[aria-readonly=true][aria-checked=mixed]:hover{--shadow-color: var(--color-accent);--shadow-size: 12px;border:none}@keyframes checkboxBounce{50%{transform:scale(1.2)}75%{transform:scale(0.9)}100%{transform:scale(1)}}","",{version:3,sources:["webpack://./src/components/Checkbox/Checkbox.scss"],names:[],mappings:"AAGA,oBACI,iBAAA,CAGJ,gCACI,aAAA,CACA,UATmB,CAUnB,WAVmB,CAavB,4BACI,aAAA,CACA,UAde,CAef,WAfe,CAkBnB,yBACI,iBAAA,CACA,KAAA,CACA,MAAA,CAEA,SAAA,CACA,yBAAA,CAEA,gCAAA,CAEA,mBAAA,CACA,gBAAA,CAGJ,0BACI,kBAAA,CACA,iCAAA,CAEA,iBAAA,CAEA,QAAA,CACA,SAAA,CAEA,uBAAA,CAAA,oBAAA,CAAA,eAAA,CAEA,WAAA,CACA,iCAAA,CACA,YAAA,CACA,wBAAA,CAEA,8CAAA,CAAA,6DAAA,CACA,cAAA,CAEA,yBAAA,CAEA,gCACI,mCAAA,CACA,kBAAA,CAIJ,wCACI,kDAAA,CAGJ,2FAEI,mBAAA,CACA,mCAAA,CAEA,uGACI,yCAAA,CAGJ,6IACI,iDAAA,CAIR,kFAEI,cAAA,CACA,UAAA,CAGA,mBAAA,CAGA,8FACI,iCAAA,CACA,kBAAA,CAGJ,0QAEI,mCAAA,CACA,mBAAA,CAEA,WAAA,CAKZ,0BACI,IACI,oBAAA,CAGJ,IACI,oBAAA,CAGJ,KACI,kBAAA,CAAA",sourcesContent:['$checkbox-sizeDefault: 16px;\n$checkbox-sizeBig: 20px;\n\n.moonstone-checkbox {\n    position: relative;\n}\n\n.moonstone-checkbox_sizeDefault {\n    display: block;\n    width: $checkbox-sizeDefault;\n    height: $checkbox-sizeDefault;\n}\n\n.moonstone-checkbox_sizeBig {\n    display: block;\n    width: $checkbox-sizeBig;\n    height: $checkbox-sizeBig;\n}\n\n.moonstone-checkbox_icon {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    fill: none;\n    stroke: var(--color-light);\n\n    transform: scale(0) translateZ(0);\n\n    pointer-events: none;\n    stroke-width: 2px;\n}\n\n.moonstone-checkbox_input {\n    --shadow-size: 1px;\n    --shadow-color: var(--color-gray);\n\n    position: relative;\n\n    margin: 0;\n    padding: 0;\n\n    appearance: none;\n\n    border: none;\n    border-radius: var(--radius_small);\n    outline: none;\n    background: transparent;\n\n    box-shadow: inset 0 0 0 var(--shadow-size) var(--shadow-color);\n    cursor: pointer;\n\n    transition: box-shadow 0.1s;\n\n    &:hover {\n        --shadow-color: var(--color-gray60);\n        --shadow-size: 2px;\n    }\n\n    // Only triggered when the input is focus with tab\n    &:focus-visible {\n        border: 2px solid var(--color-accent_dark_contrast);\n    }\n\n    &[aria-checked="true"],\n    &[aria-checked="mixed"] {\n        --shadow-size: 12px;\n        --shadow-color: var(--color-accent);\n\n        &:hover {\n            border: 2px solid var(--color-accent_dark);\n        }\n\n        & ~ .moonstone-checkbox_icon {\n            animation: checkboxBounce 0.1s linear forwards 0.05s;\n        }\n    }\n\n    &[disabled],\n    &[aria-readonly="true"] {\n        cursor: default;\n        opacity: 0.4;\n\n        // Prevent :hover on disabled and read-only\n        pointer-events: none;\n\n        // Reset :hover style for disabled and readonly state\n        &:hover {\n            --shadow-color: var(--color-gray);\n            --shadow-size: 1px;\n        }\n\n        &[aria-checked="true"]:hover,\n        &[aria-checked="mixed"]:hover {\n            --shadow-color: var(--color-accent);\n            --shadow-size: 12px;\n\n            border: none;\n        }\n    }\n}\n\n@keyframes checkboxBounce {\n    50% {\n        transform: scale(1.2);\n    }\n\n    75% {\n        transform: scale(0.9);\n    }\n\n    100% {\n        transform: scale(1);\n    }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/CheckboxGroup/CheckboxItem/CheckboxItem.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".moonstone-checkboxItem[aria-disabled=true],.moonstone-checkboxItem[aria-readonly=true]{cursor:default;opacity:.4;pointer-events:none}.moonstone-checkboxItem{cursor:pointer}.moonstone-checkboxItem+.moonstone-checkboxItem{margin-top:var(--spacing-medium)}.moonstone-checkboxItem_label{margin-left:var(--spacing-small);color:var(--color-gray-dark)}.moonstone-checkboxItem_description{margin-left:var(--spacing-large);color:var(--color-gray60)}","",{version:3,sources:["webpack://./src/components/CheckboxGroup/CheckboxItem/CheckboxItem.scss"],names:[],mappings:"AAAA,wFAEI,cAAA,CACA,UAAA,CAEA,mBAAA,CAGJ,wBACI,cAAA,CAEA,gDACI,gCAAA,CAIR,8BACI,gCAAA,CAEA,4BAAA,CAGJ,oCACI,gCAAA,CAEA,yBAAA",sourcesContent:['.moonstone-checkboxItem[aria-disabled="true"],\n.moonstone-checkboxItem[aria-readonly="true"] {\n    cursor: default;\n    opacity: 0.4;\n\n    pointer-events: none;\n}\n\n.moonstone-checkboxItem {\n    cursor: pointer;\n\n    & + .moonstone-checkboxItem {\n        margin-top: var(--spacing-medium);\n    }\n}\n\n.moonstone-checkboxItem_label {\n    margin-left: var(--spacing-small);\n\n    color: var(--color-gray-dark);\n}\n\n.moonstone-checkboxItem_description {\n    margin-left: var(--spacing-large);\n\n    color: var(--color-gray60);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox_Checkbox_Checkbox});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Checkbox=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Checkbox/Checkbox.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Checkbox.A,options);Checkbox.A&&Checkbox.A.locals&&Checkbox.A.locals;var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),helpers=__webpack_require__("./src/utils/helpers.ts"),_excluded=["className","checked","indeterminate","size","isDisabled","isReadOnly","onChange","value"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var ControlledCheckbox=function ControlledCheckbox(_ref){var className=_ref.className,_ref$checked=_ref.checked,checked=void 0!==_ref$checked&&_ref$checked,_ref$indeterminate=_ref.indeterminate,indeterminate=void 0!==_ref$indeterminate&&_ref$indeterminate,_ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,isDisabled=_ref.isDisabled,isReadOnly=_ref.isReadOnly,_onChange=_ref.onChange,value=_ref.value,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),inputRef=(0,react.useRef)(null);return react.createElement("div",{className:(0,clsx.A)("moonstone-checkbox",className)},react.createElement("input",_extends({},props,{ref:inputRef,className:(0,clsx.A)("moonstone-checkbox_input","moonstone-checkbox_size".concat((0,helpers.Z)(size))),type:"checkbox",value,checked,disabled:isDisabled,"aria-readonly":isReadOnly,"aria-checked":indeterminate?"mixed":checked,onChange:function onChange(ev){var _inputRef$current;return"function"==typeof _onChange&&_onChange(ev,value,null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current?void 0:_inputRef$current.checked)}})),react.createElement("svg",{className:(0,clsx.A)("moonstone-checkbox_icon","moonstone-checkbox_size".concat((0,helpers.Z)(size))),viewBox:"0 0 21 21"},indeterminate?react.createElement("path",{d:"M4.5 10.5L16.5 10.5",strokeLinecap:"round"}):react.createElement("path",{d:"M5 10.75L8.5 14.25L16 6",strokeLinecap:"round"})))};ControlledCheckbox.displayName="ControlledCheckbox";try{ControlledCheckbox.displayName="ControlledCheckbox",ControlledCheckbox.__docgenInfo={description:"",displayName:"ControlledCheckbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},value:{defaultValue:null,description:"The value of the input element, used when submitting an HTML form",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the checkbox can be selected but not changed by the user",name:"isReadOnly",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Function triggered on change of the checkbox value",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void"}},onFocus:{defaultValue:null,description:"Function triggered on focus of the checkbox value",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"Function triggered when the checkbox value loses focus",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},checked:{defaultValue:{value:"false"},description:"Whether the checkbox should be checked. Must be used in conjunction with onChange. Define the component as controlled when it set (controlled)",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"Whether the checkbox should be indeterminate (controlled)",name:"indeterminate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/ControlledCheckbox.tsx#ControlledCheckbox"]={docgenInfo:ControlledCheckbox.__docgenInfo,name:"ControlledCheckbox",path:"src/components/Checkbox/ControlledCheckbox.tsx#ControlledCheckbox"})}catch(__react_docgen_typescript_loader_error){}var UncontrolledCheckbox_excluded=["defaultChecked","onChange","value"];function UncontrolledCheckbox_extends(){return UncontrolledCheckbox_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},UncontrolledCheckbox_extends.apply(null,arguments)}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var UncontrolledCheckbox=function UncontrolledCheckbox(_ref){var _ref$defaultChecked=_ref.defaultChecked,defaultChecked=void 0!==_ref$defaultChecked&&_ref$defaultChecked,_onChange=_ref.onChange,value=_ref.value,props=function UncontrolledCheckbox_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function UncontrolledCheckbox_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,UncontrolledCheckbox_excluded),_useState2=_slicedToArray((0,react.useState)(defaultChecked),2),checked=_useState2[0],setChecked=_useState2[1];return react.createElement(ControlledCheckbox,UncontrolledCheckbox_extends({},props,{value,checked,onChange:function onChange(event){var toggleChecked=!checked;setChecked(toggleChecked),"function"==typeof _onChange&&_onChange(event,value,toggleChecked)}}))};UncontrolledCheckbox.displayName="UncontrolledCheckbox";try{UncontrolledCheckbox.displayName="UncontrolledCheckbox",UncontrolledCheckbox.__docgenInfo={description:"",displayName:"UncontrolledCheckbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},value:{defaultValue:null,description:"The value of the input element, used when submitting an HTML form",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the checkbox can be selected but not changed by the user",name:"isReadOnly",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Function triggered on change of the checkbox value",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void"}},onFocus:{defaultValue:null,description:"Function triggered on focus of the checkbox value",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"Function triggered when the checkbox value loses focus",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/UncontrolledCheckbox.tsx#UncontrolledCheckbox"]={docgenInfo:UncontrolledCheckbox.__docgenInfo,name:"UncontrolledCheckbox",path:"src/components/Checkbox/UncontrolledCheckbox.tsx#UncontrolledCheckbox"})}catch(__react_docgen_typescript_loader_error){}var Checkbox_excluded=["checked"];function Checkbox_extends(){return Checkbox_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Checkbox_extends.apply(null,arguments)}var Checkbox_Checkbox_Checkbox=function Checkbox(_ref){var checked=_ref.checked,props=function Checkbox_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function Checkbox_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,Checkbox_excluded);return void 0===checked?react.createElement(UncontrolledCheckbox,props):react.createElement(ControlledCheckbox,Checkbox_extends({checked},props))};Checkbox_Checkbox_Checkbox.displayName="Checkbox";try{Checkbox_Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},value:{defaultValue:null,description:"The value of the input element, used when submitting an HTML form",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the checkbox can be selected but not changed by the user",name:"isReadOnly",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Function triggered on change of the checkbox value",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void"}},onFocus:{defaultValue:null,description:"Function triggered on focus of the checkbox value",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"Function triggered when the checkbox value loses focus",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},checked:{defaultValue:null,description:"Whether the checkbox should be checked. Must be used in conjunction with onChange. Define the component as controlled when it set (controlled)",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"Whether the checkbox should be indeterminate (controlled)",name:"indeterminate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CheckboxGroup/CheckboxGroup.context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>CheckboxGroupContext});var CheckboxGroupContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)(void 0)},"./src/components/CheckboxGroup/CheckboxItem/CheckboxItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CheckboxItem_CheckboxItem_CheckboxItem});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CheckboxItem=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/CheckboxGroup/CheckboxItem/CheckboxItem.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CheckboxItem.A,options);CheckboxItem.A&&CheckboxItem.A.locals&&CheckboxItem.A.locals;var Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),Checkbox=__webpack_require__("./src/components/Checkbox/Checkbox.tsx"),CheckboxGroup_context=__webpack_require__("./src/components/CheckboxGroup/CheckboxGroup.context.ts"),_excluded=["className","id","value","label","description","isDisabled","isReadOnly","onChange","name"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var ControlledCheckboxItem=function ControlledCheckboxItem(_ref){var className=_ref.className,id=_ref.id,value=_ref.value,label=_ref.label,description=_ref.description,isDisabled=_ref.isDisabled,isReadOnly=_ref.isReadOnly,_onChange=_ref.onChange,name=_ref.name,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),context=react.useContext(CheckboxGroup_context.I),isDisabledItem=void 0===context?isDisabled:context.isDisabled,isReadOnlyItem=void 0===context?isReadOnly:context.isReadOnly,nameItem=void 0===context?name:context.name;return react.createElement(Typography.o,{className:(0,clsx.A)("moonstone-checkboxItem flexCol",className),"aria-readonly":isReadOnlyItem,"aria-disabled":isDisabledItem,variant:"body",weight:"default",component:"label"},react.createElement("div",{className:(0,clsx.A)("flexRow alignCenter")},react.createElement(Checkbox.S,_extends({"aria-labelledby":"".concat(id,"-label"),"aria-describedby":description?"".concat(id,"-description"):null,value,isReadOnly:isReadOnlyItem,isDisabled:isDisabledItem,name:nameItem,onChange:function onChange(event,val,checked){"function"==typeof(null==context?void 0:context.onChange)&&context.onChange(event,val,checked),"function"==typeof _onChange&&_onChange(event,val,checked)}},props)),react.createElement(Typography.o,{id:"".concat(id,"-label"),variant:"body",component:"span",className:(0,clsx.A)("moonstone-checkboxItem_label")},label)),description&&react.createElement(Typography.o,{id:"".concat(id,"-description"),variant:"caption",weight:"default",component:"span",className:(0,clsx.A)("moonstone-checkboxItem_description flexRow")},description))};ControlledCheckboxItem.displayName="ControlledCheckboxItem";try{ControlledCheckboxItem.displayName="ControlledCheckboxItem",ControlledCheckboxItem.__docgenInfo={description:"",displayName:"ControlledCheckboxItem",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"Function triggered on focus of the checkbox value",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"Function triggered when the checkbox value loses focus",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},onChange:{defaultValue:null,description:"Function triggered on change of the checkbox value",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void"}},value:{defaultValue:null,description:"The value of the input element, used when submitting an HTML form",name:"value",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the checkbox can be selected but not changed by the user",name:"isReadOnly",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Identifier added to the input element",name:"id",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Checkbox description",name:"description",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Checkbox label",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"Whether the checkbox should be checked. Must be used with onChange function to update the checked state (controlled)",name:"checked",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxItem/ControlledCheckboxItem.tsx#ControlledCheckboxItem"]={docgenInfo:ControlledCheckboxItem.__docgenInfo,name:"ControlledCheckboxItem",path:"src/components/CheckboxGroup/CheckboxItem/ControlledCheckboxItem.tsx#ControlledCheckboxItem"})}catch(__react_docgen_typescript_loader_error){}var UncontrolledCheckboxItem_excluded=["defaultChecked","onChange"];function UncontrolledCheckboxItem_extends(){return UncontrolledCheckboxItem_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},UncontrolledCheckboxItem_extends.apply(null,arguments)}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var UncontrolledCheckboxItem=function UncontrolledCheckboxItem(_ref){var _ref$defaultChecked=_ref.defaultChecked,defaultChecked=void 0!==_ref$defaultChecked&&_ref$defaultChecked,_onChange=_ref.onChange,props=function UncontrolledCheckboxItem_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function UncontrolledCheckboxItem_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,UncontrolledCheckboxItem_excluded),_useState2=_slicedToArray((0,react.useState)(defaultChecked),2),checked=_useState2[0],setChecked=_useState2[1];return react.createElement(ControlledCheckboxItem,UncontrolledCheckboxItem_extends({},props,{checked,onChange:function onChange(event,value){var toggleChecked=!checked;setChecked(toggleChecked),"function"==typeof _onChange&&_onChange(event,value,toggleChecked)}}))};UncontrolledCheckboxItem.displayName="UncontrolledCheckboxItem";try{UncontrolledCheckboxItem.displayName="UncontrolledCheckboxItem",UncontrolledCheckboxItem.__docgenInfo={description:"",displayName:"UncontrolledCheckboxItem",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"Function triggered on focus of the checkbox value",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"Function triggered when the checkbox value loses focus",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},onChange:{defaultValue:null,description:"Function triggered on change of the checkbox value",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void"}},value:{defaultValue:null,description:"The value of the input element, used when submitting an HTML form",name:"value",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the checkbox can be selected but not changed by the user",name:"isReadOnly",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Identifier added to the input element",name:"id",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Checkbox description",name:"description",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Checkbox label",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxItem/UncontrolledCheckboxItem.tsx#UncontrolledCheckboxItem"]={docgenInfo:UncontrolledCheckboxItem.__docgenInfo,name:"UncontrolledCheckboxItem",path:"src/components/CheckboxGroup/CheckboxItem/UncontrolledCheckboxItem.tsx#UncontrolledCheckboxItem"})}catch(__react_docgen_typescript_loader_error){}var CheckboxItem_excluded=["checked"];function CheckboxItem_extends(){return CheckboxItem_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},CheckboxItem_extends.apply(null,arguments)}var CheckboxItem_CheckboxItem_CheckboxItem=function CheckboxItem(_ref){var checked=_ref.checked,props=function CheckboxItem_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function CheckboxItem_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,CheckboxItem_excluded);return void 0===checked?react.createElement(UncontrolledCheckboxItem,props):react.createElement(ControlledCheckboxItem,CheckboxItem_extends({checked},props))};CheckboxItem_CheckboxItem_CheckboxItem.displayName="CheckboxItem";try{CheckboxItem_CheckboxItem_CheckboxItem.displayName="CheckboxItem",CheckboxItem_CheckboxItem_CheckboxItem.__docgenInfo={description:"",displayName:"CheckboxItem",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"Function triggered on focus of the checkbox value",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"Function triggered when the checkbox value loses focus",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},onChange:{defaultValue:null,description:"Function triggered on change of the checkbox value",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void"}},value:{defaultValue:null,description:"The value of the input element, used when submitting an HTML form",name:"value",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the checkbox can be selected but not changed by the user",name:"isReadOnly",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Identifier added to the input element",name:"id",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Checkbox description",name:"description",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Checkbox label",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"Whether the checkbox should be checked. Must be used with onChange function to update the checked state (controlled)",name:"checked",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxItem/CheckboxItem.tsx#CheckboxItem"]={docgenInfo:CheckboxItem_CheckboxItem_CheckboxItem.__docgenInfo,name:"CheckboxItem",path:"src/components/CheckboxGroup/CheckboxItem/CheckboxItem.tsx#CheckboxItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>capitalize});var capitalize=function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1)}}}]);