"use strict";(self.webpackChunk_jahia_moonstone=self.webpackChunk_jahia_moonstone||[]).push([[5931],{"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Collapsible/Collapsible.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,":root{--spacing-pico: 2px;--spacing-nano: 4px;--spacing-small: 8px;--spacing-medium: 16px;--spacing-large: 24px;--spacing-big: 40px;--spacing-huge: 56px}.moonstone-collapsible{position:relative}.moonstone-collapsible+.moonstone-collapsible{margin-top:24px;margin-top:var(--spacing-large)}.moonstone-collapsible_button{width:100%;padding:8px;padding:var(--spacing-small);color:var(--color-dark);border:0;background:none;cursor:pointer}.moonstone-collapsible_button:hover{color:var(--color-gray_dark)}.moonstone-collapsible_topdiv{position:absolute;height:1px}.moonstone-collapsible_button_expanded{position:sticky;top:0;z-index:10;background:var(--color-white);transition:box-shadow .2s ease-in-out 0s}.moonstone-collapsible_button_sticky{box-shadow:-4px 4px 4px -4px var(--color-gray60)}.moonstone-collapsible_icon{margin-right:4px;margin-right:var(--spacing-nano);transform:rotate(0);transition:transform .2s ease-in-out}.moonstone-collapsible_icon_expanded{transform:rotate(90deg)}.moonstone-collapsible_content_collapsed{height:0;padding:0 24px;padding:0 var(--spacing-large);overflow:hidden;pointer-events:none}.moonstone-collapsible_content_expanded{padding:16px 40px;padding:var(--spacing-medium) var(--spacing-big)}","",{version:3,sources:["webpack://./src/tokens/spacings/spacings.scss","webpack://./src/components/Collapsible/Collapsible.scss"],names:[],mappings:"AAGA,MACI,mBAAA,CACA,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,qBAAA,CACA,mBAAA,CACA,oBAAA,CCRJ,uBACI,iBAAA,CAEA,8CACI,eAAA,CAAA,+BAAA,CAIR,8BACI,UAAA,CACA,WAAA,CAAA,4BAAA,CAEA,uBAAA,CAEA,QAAA,CACA,eAAA,CACA,cAAA,CAEA,oCACI,4BAAA,CAIR,8BACI,iBAAA,CAEA,UAAA,CAGJ,uCACI,eAAA,CACA,KAAA,CACA,UAAA,CAEA,6BAAA,CAEA,wCAAA,CAGJ,qCACI,gDAAA,CAIJ,4BACI,gBD9Ce,CC8Cf,gCD9Ce,CCgDf,mBAAA,CAEA,oCAAA,CAGJ,qCACI,uBAAA,CAIJ,yCACI,QAAA,CACA,cAAA,CAAA,8BAAA,CACA,eAAA,CAEA,mBAAA,CAGJ,wCACI,iBAAA,CAAA,gDAAA",sourcesContent:["$spacing-icon: var(--spacing-pico);\n$spacing-icon_big: var(--spacing-nano);\n\n:root {\n    --spacing-pico: 2px;\n    --spacing-nano: 4px;\n    --spacing-small: 8px;\n    --spacing-medium: 16px;\n    --spacing-large: 24px;\n    --spacing-big: 40px;\n    --spacing-huge: 56px;\n}\n",'@use "../../tokens/spacings/spacings" as *;\n\n.moonstone-collapsible {\n    position: relative;\n\n    & + .moonstone-collapsible {\n        margin-top: var(--spacing-large);\n    }\n}\n\n.moonstone-collapsible_button {\n    width: 100%;\n    padding: var(--spacing-small);\n\n    color: var(--color-dark);\n\n    border: 0;\n    background: none;\n    cursor: pointer;\n\n    &:hover {\n        color: var(--color-gray_dark);\n    }\n}\n\n.moonstone-collapsible_topdiv {\n    position: absolute;\n\n    height: 1px;\n}\n\n.moonstone-collapsible_button_expanded {\n    position: sticky;\n    top: 0;\n    z-index: 10;\n\n    background: var(--color-white);\n\n    transition: box-shadow 0.2s ease-in-out 0s;\n}\n\n.moonstone-collapsible_button_sticky {\n    box-shadow: -4px 4px 4px -4px var(--color-gray60);\n}\n\n// Chevron icon animation\n.moonstone-collapsible_icon {\n    margin-right: $spacing-icon_big;\n\n    transform: rotate(0);\n\n    transition: transform 0.2s ease-in-out;\n}\n\n.moonstone-collapsible_icon_expanded {\n    transform: rotate(90deg);\n}\n\n// Collapsible content\n.moonstone-collapsible_content_collapsed {\n    height: 0;\n    padding: 0 var(--spacing-large);\n    overflow: hidden;\n\n    pointer-events: none;\n}\n\n.moonstone-collapsible_content_expanded {\n    padding: var(--spacing-medium) var(--spacing-big);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.moonstone-typography.moonstone-variant_title{font-weight:300;font-size:1.75rem;font-feature-settings:"ordn" on,"liga" off;line-height:2rem}.moonstone-typography.moonstone-variant_title::first-letter{text-transform:capitalize}.moonstone-typography.moonstone-variant_heading{font-weight:600;font-size:1.25rem;line-height:1.5rem}.moonstone-typography.moonstone-variant_subheading{font-size:1rem;line-height:1.125rem}.moonstone-typography.moonstone-variant_body{font-size:.875rem;line-height:1.1875rem}.moonstone-typography.moonstone-variant_caption{font-size:.75rem;line-height:1rem}.moonstone-typography.moonstone-variant_button{font-size:.75rem;line-height:1rem}.moonstone-typography.moonstone-weight_bold{font-weight:bold}.moonstone-typography.moonstone-weight_semiBold{font-weight:500}.moonstone-typography.moonstone-weight_light{font-weight:300}.moonstone-typography.moonstone-nowrap{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.moonstone-typography.moonstone-italic{font-style:italic}.moonstone-typography.moonstone-lineThrough{text-decoration-line:line-through}.moonstone-typography.moonstone-upperCase{text-transform:uppercase}',"",{version:3,sources:["webpack://./src/utils/_typography.scss","webpack://./src/utils/_mixins.scss"],names:[],mappings:"AAMA,8CACI,eAAA,CACA,iBAAA,CACA,0CAAA,CAEA,gBAAA,CAEA,4DACI,yBAAA,CAIR,gDACI,eAAA,CACA,iBAAA,CACA,kBAAA,CAGJ,mDACI,cAAA,CACA,oBAAA,CAGJ,6CACI,iBAAA,CACA,qBAAA,CAGJ,gDACI,gBAAA,CACA,gBAAA,CAGJ,+CACI,gBAAA,CACA,gBAAA,CAGJ,4CACI,gBAAA,CAGJ,gDACI,eAAA,CAGJ,6CACI,eAAA,CAGJ,uCCnDI,cDoDyB,CClDzB,kBAAA,CACA,eAAA,CAEA,sBAAA,CDkDJ,uCACI,iBAAA,CAGJ,4CACI,iCAAA,CAGJ,0CACI,wBAAA",sourcesContent:["@use 'mixins';\n\n// ---\n// Typography Styles\n// ---\n\n%variant-title {\n    font-weight: 300;\n    font-size: 1.75rem; // 28px\n    font-feature-settings: 'ordn' on, 'liga' off;\n\n    line-height: 2rem; // 32px;\n\n    &::first-letter {\n        text-transform: capitalize;\n    }\n}\n\n%variant-heading {\n    font-weight: 600;\n    font-size: 1.25rem; // 20px;\n    line-height: 1.5rem; // 24px;\n}\n\n%variant-subheading {\n    font-size: 1rem; // 16px;\n    line-height: 1.125rem; // 18px;\n}\n\n%variant-body {\n    font-size: 0.875rem; // 14px;\n    line-height: 1.1875rem; // 19px;\n}\n\n%variant-caption {\n    font-size: 0.75rem; // 12px;\n    line-height: 1rem; // 16px;\n}\n\n%variant-button {\n    font-size: 0.75rem; // 12px;\n    line-height: 1rem; // 16px;\n}\n\n%weight-bold {\n    font-weight: bold;\n}\n\n%weight-semiBold {\n    font-weight: 500;\n}\n\n%weight-light {\n    font-weight: 300;\n}\n\n%nowrap {\n    @include mixins.truncate(100%);\n}\n\n%italic {\n    font-style: italic;\n}\n\n%lineThrough {\n    text-decoration-line: line-through;\n}\n\n%upperCase {\n    text-transform: uppercase;\n}\n","@mixin truncate($maxWidth: 100%, $display: null) {\n    @if ($display) {\n        display: $display;\n    }\n\n    max-width: $maxWidth;\n\n    white-space: nowrap;\n    overflow: hidden;\n\n    text-overflow: ellipsis;\n}\n\n%is-disabled {\n    color: var(--color-gray);\n\n    background-color: var(--color-gray_light40);\n\n    cursor: not-allowed;\n    opacity: 0.6;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Collapsible/Collapsible.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,StickyCollapsibles:()=>StickyCollapsibles,Uncontrolled:()=>Uncontrolled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Collapsible_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Collapsible=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Collapsible/Collapsible.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Collapsible.A,options);Collapsible.A&&Collapsible.A.locals&&Collapsible.A.locals;var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),ChevronRight=__webpack_require__("./src/icons/components/ChevronRight.tsx"),_excluded=["label","className","children","onClick","id","isExpanded"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var ControlledCollapsibleForwardRef=function ControlledCollapsibleForwardRef(_ref,ref){var label=_ref.label,className=_ref.className,children=_ref.children,_onClick=_ref.onClick,_ref$id=_ref.id,id=void 0===_ref$id?null:_ref$id,_ref$isExpanded=_ref.isExpanded,isExpanded=void 0!==_ref$isExpanded&&_ref$isExpanded,other=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),classNameProps=(0,clsx.A)("moonstone-collapsible",className),topDivRef=(0,react.useRef)(),buttonRef=(0,react.useRef)();return(0,react.useEffect)((function(){var observer=new IntersectionObserver((function(entries){buttonRef.current&&(0===entries[0].intersectionRatio?buttonRef.current.classList.add("moonstone-collapsible_button_sticky"):1===entries[0].intersectionRatio&&buttonRef.current.classList.remove("moonstone-collapsible_button_sticky"))}),{threshold:[0,1]});if(isExpanded){var htmlDivElement=topDivRef.current;return observer.observe(htmlDivElement),function(){buttonRef.current&&buttonRef.current.classList.remove("moonstone-collapsible_button_sticky"),observer.unobserve(htmlDivElement)}}}),[isExpanded]),react.createElement("div",_extends({ref,className:classNameProps},other),react.createElement("div",{ref:topDivRef,className:"moonstone-collapsible_topdiv"}),react.createElement("button",{ref:buttonRef,type:"button",className:(0,clsx.A)("moonstone-collapsible_button",{"moonstone-collapsible_button_expanded":isExpanded},"flexRow","alignCenter"),"aria-expanded":isExpanded,"aria-controls":id,onClick:function onClick(e){return _onClick(e)}},react.createElement(ChevronRight.A,{className:(0,clsx.A)("moonstone-collapsible_icon",{"moonstone-collapsible_icon_expanded":isExpanded}),size:"big"}),react.createElement(Typography.o,{isNowrap:!0,isUpperCase:!0,component:"span",variant:"heading"},label)),react.createElement("div",{id,className:(0,clsx.A)([isExpanded?"moonstone-collapsible_content_expanded":"moonstone-collapsible_content_collapsed"]),hidden:!isExpanded},children))},ControlledCollapsible=react.forwardRef(ControlledCollapsibleForwardRef);ControlledCollapsible.displayName="ControlledCollapsible";try{ControlledCollapsible.displayName="ControlledCollapsible",ControlledCollapsible.__docgenInfo={description:"",displayName:"ControlledCollapsible",props:{label:{defaultValue:null,description:"Label of collapse section",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content of the collapsible",name:"children",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Function trigger on click",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},isExpanded:{defaultValue:{value:"false"},description:"The controlled open state of the collapsible. Must be used in conjunction with onClick. Define the component as controlled when it set",name:"isExpanded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible/ControlledCollapsible.tsx#ControlledCollapsible"]={docgenInfo:ControlledCollapsible.__docgenInfo,name:"ControlledCollapsible",path:"src/components/Collapsible/ControlledCollapsible.tsx#ControlledCollapsible"})}catch(__react_docgen_typescript_loader_error){}var UncontrolledCollapsible_excluded=["children","onClick","isDefaultExpanded"];function UncontrolledCollapsible_extends(){return UncontrolledCollapsible_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},UncontrolledCollapsible_extends.apply(null,arguments)}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var UncontrolledCollapsibleForwardRef=function UncontrolledCollapsibleForwardRef(_ref,ref){var children=_ref.children,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?function(){}:_ref$onClick,_ref$isDefaultExpande=_ref.isDefaultExpanded,isDefaultExpanded=void 0!==_ref$isDefaultExpande&&_ref$isDefaultExpande,other=function UncontrolledCollapsible_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function UncontrolledCollapsible_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,UncontrolledCollapsible_excluded),_useState2=_slicedToArray((0,react.useState)(isDefaultExpanded),2),isExpanded=_useState2[0],setIsExpanded=_useState2[1],handleOnClick=function handleOnClick(e){setIsExpanded(!isExpanded),onClick(e)};return react.createElement(ControlledCollapsible,UncontrolledCollapsible_extends({ref,isExpanded,onClick:function onClick(e){return handleOnClick(e)}},other),children)},UncontrolledCollapsible=react.forwardRef(UncontrolledCollapsibleForwardRef);UncontrolledCollapsible.displayName="UncontrolledCollapsible";try{UncontrolledCollapsible.displayName="UncontrolledCollapsible",UncontrolledCollapsible.__docgenInfo={description:"",displayName:"UncontrolledCollapsible",props:{label:{defaultValue:null,description:"Label of collapse section",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content of the collapsible",name:"children",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:{value:"() => undefined"},description:"Function trigger on click",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},isDefaultExpanded:{defaultValue:{value:"false"},description:"The expanded state of the collapsible when it is initially rendered. (uncontrolled)",name:"isDefaultExpanded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible/UncontrolledCollapsible.tsx#UncontrolledCollapsible"]={docgenInfo:UncontrolledCollapsible.__docgenInfo,name:"UncontrolledCollapsible",path:"src/components/Collapsible/UncontrolledCollapsible.tsx#UncontrolledCollapsible"})}catch(__react_docgen_typescript_loader_error){}var Collapsible_excluded=["isExpanded"];function Collapsible_extends(){return Collapsible_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Collapsible_extends.apply(null,arguments)}var CollapsibleForwardRef=function CollapsibleForwardRef(_ref,ref){var isExpanded=_ref.isExpanded,props=function Collapsible_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function Collapsible_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,Collapsible_excluded);return void 0===isExpanded?react.createElement(UncontrolledCollapsible,Collapsible_extends({ref},props)):react.createElement(ControlledCollapsible,Collapsible_extends({ref,isExpanded},props))},Collapsible_Collapsible_Collapsible=react.forwardRef(CollapsibleForwardRef);Collapsible_Collapsible_Collapsible.displayName="Collapsible";try{Collapsible_Collapsible_Collapsible.displayName="Collapsible",Collapsible_Collapsible_Collapsible.__docgenInfo={description:"",displayName:"Collapsible",props:{label:{defaultValue:null,description:"Label of collapse section",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content of the collapsible",name:"children",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Function trigger on click",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},isExpanded:{defaultValue:null,description:"The controlled open state of the collapsible. Must be used in conjunction with onClick. Define the component as controlled when it set",name:"isExpanded",required:!1,type:{name:"boolean"}},isDefaultExpanded:{defaultValue:null,description:"The expanded state of the collapsible when it is initially rendered. (uncontrolled)",name:"isDefaultExpanded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible/Collapsible.tsx#Collapsible"]={docgenInfo:Collapsible_Collapsible_Collapsible.__docgenInfo,name:"Collapsible",path:"src/components/Collapsible/Collapsible.tsx#Collapsible"})}catch(__react_docgen_typescript_loader_error){}function Collapsible_stories_extends(){return Collapsible_stories_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Collapsible_stories_extends.apply(null,arguments)}const Collapsible_stories={title:"Components/Collapsible",component:Collapsible_Collapsible_Collapsible,parameters:{actions:{argTypesRegex:"^on.*"}}},BodyCollapsible=()=>react.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Sit amet facilisis magna etiam. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Nunc sed augue lacus viverra vitae congue. Ut ornare lectus sit amet est. Id faucibus nisl tincidunt eget nullam non nisi. Arcu dictum varius duis at consectetur lorem. Libero nunc consequat interdum varius sit amet. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Mauris sit amet massa vitae tortor condimentum lacinia quis. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Sit amet risus nullam eget felis eget nunc. Et odio pellentesque diam volutpat commodo. Ac turpis egestas sed tempus urna et pharetra. Pretium lectus quam id leo in vitae turpis massa. Lorem ipsum dolor sit amet.Eu volutpat odio facilisis mauris. Ac felis donec et odio pellentesque diam volutpat. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. At varius vel pharetra vel turpis. Id faucibus nisl tincidunt eget nullam non. Ut porttitor leo a diam. Pellentesque massa placerat duis ultricies lacus. Id cursus metus aliquam eleifend mi in. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Massa id neque aliquam vestibulum morbi blandit cursus. Mauris vitae ultricies leo integer. Ut sem nulla pharetra diam sit amet. Volutpat odio facilisis mauris sit amet massa vitae tortor. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Euismod in pellentesque massa placerat duis ultricies. Posuere sollicitudin aliquam ultrices sagittis orci a. Ac tortor vitae purus faucibus ornare suspendisse. Viverra nibh cras pulvinar mattis nunc sed. Nisl pretium fusce id velit ut tortor pretium. Id porta nibh venenatis cras sed felis eget velit. Vestibulum sed arcu non odio euismod lacinia at. Turpis cursus in hac habitasse platea. Non tellus orci ac auctor augue mauris augue neque. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Vel turpis nunc eget lorem dolor sed. Ut consequat semper viverra nam. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Malesuada nunc vel risus commodo viverra maecenas. Non nisi est sit amet facilisis magna etiam tempor orci. Ut venenatis tellus in metus vulputate eu scelerisque felis. Diam maecenas sed enim ut sem viverra aliquet eget sit. Nunc sed id semper risus in hendrerit. Et malesuada fames ac turpis. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Id aliquet risus feugiat in ante. Nunc consequat interdum varius sit amet mattis vulputate. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Feugiat in ante metus dictum at tempor. Aliquam eleifend mi in nulla. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Odio tempor orci dapibus ultrices in iaculis.Nibh tortor id aliquet lectus proin. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Tincidunt ornare massa eget egestas purus viverra. Quam elementum pulvinar etiam non quam lacus. Vulputate eu scelerisque felis imperdiet proin fermentum. Lorem sed risus ultricies tristique nulla. Cursus in hac habitasse platea dictumst quisque sagittis. Sem nulla pharetra diam sit. Sed cras ornare arcu dui vivamus. Mi bibendum neque egestas congue quisque egestas diam."),Uncontrolled={args:{label:"Collapsible label",children:react.createElement(BodyCollapsible,null),isDefaultExpanded:!1}},Controlled={render:args=>{const[isExpanded,setIsExpanded]=(0,react.useState)(!1);return react.createElement(Collapsible_Collapsible_Collapsible,Collapsible_stories_extends({},args,{isExpanded,onClick:()=>{setIsExpanded(!isExpanded)}}),react.createElement(BodyCollapsible,null))},args:{label:"Collapsible label"}},StickyCollapsibles=()=>react.createElement(react.Fragment,null,react.createElement(Collapsible_Collapsible_Collapsible,{label:"Collapsible 1"},react.createElement(BodyCollapsible,null)),react.createElement(Collapsible_Collapsible_Collapsible,{label:"Collapsible 2"},react.createElement(BodyCollapsible,null)),react.createElement(Collapsible_Collapsible_Collapsible,{label:"Collapsible 3"},react.createElement(BodyCollapsible,null)),react.createElement(Collapsible_Collapsible_Collapsible,{label:"Collapsible 4"},react.createElement(BodyCollapsible,null))),__namedExportsOrder=["Uncontrolled","Controlled","StickyCollapsibles"];Uncontrolled.parameters={...Uncontrolled.parameters,docs:{...Uncontrolled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Collapsible label',\n    children: <BodyCollapsible />,\n    isDefaultExpanded: false\n  }\n}",...Uncontrolled.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const [isExpanded, setIsExpanded] = useState(false);\n    const handleOnClick = () => {\n      setIsExpanded(!isExpanded);\n    };\n    return <Collapsible {...args} isExpanded={isExpanded} onClick={() => handleOnClick()}>\n                <BodyCollapsible />\n            </Collapsible>;\n  },\n  args: {\n    label: 'Collapsible label'\n  }\n}",...Controlled.parameters?.docs?.source}}},StickyCollapsibles.parameters={...StickyCollapsibles.parameters,docs:{...StickyCollapsibles.parameters?.docs,source:{originalSource:'() => {\n  return <>\n            <Collapsible label="Collapsible 1">\n                <BodyCollapsible />\n            </Collapsible>\n            <Collapsible label="Collapsible 2">\n                <BodyCollapsible />\n            </Collapsible>\n            <Collapsible label="Collapsible 3">\n                <BodyCollapsible />\n            </Collapsible>\n            <Collapsible label="Collapsible 4">\n                <BodyCollapsible />\n            </Collapsible>\n        </>;\n}',...StickyCollapsibles.parameters?.docs?.source}}}},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography_Typography_Typography});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Typography=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Typography.A,options);Typography.A&&Typography.A.locals&&Typography.A.locals;var _excluded=["children","component","variant","weight","className","hasLineThrough","isItalic","isUpperCase","isNowrap"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Typography_Typography_Typography=function Typography(_ref){var _ref$children=_ref.children,children=void 0===_ref$children?"":_ref$children,component=_ref.component,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"body":_ref$variant,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"default":_ref$weight,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$hasLineThrough=_ref.hasLineThrough,hasLineThrough=void 0!==_ref$hasLineThrough&&_ref$hasLineThrough,_ref$isItalic=_ref.isItalic,isItalic=void 0!==_ref$isItalic&&_ref$isItalic,_ref$isUpperCase=_ref.isUpperCase,isUpperCase=void 0!==_ref$isUpperCase&&_ref$isUpperCase,_ref$isNowrap=_ref.isNowrap,isNowrap=void 0!==_ref$isNowrap&&_ref$isNowrap,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);if(!children)return null;var Component=component||"p";return react.createElement(Component,_extends({className:(0,clsx.A)("moonstone-typography","moonstone-variant_".concat(variant),"moonstone-weight_".concat(weight),className,{"moonstone-nowrap":isNowrap},{"moonstone-italic":isItalic},{"moonstone-upperCase":isUpperCase},{"moonstone-lineThrough":hasLineThrough})},props),children)};Typography_Typography_Typography.displayName="Typography";try{Typography_Typography_Typography.displayName="Typography",Typography_Typography_Typography.__docgenInfo={description:"",displayName:"Typography",props:{className:{defaultValue:{value:""},description:"Additional classname",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"body"},description:"Variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"button"'},{value:'"caption"'},{value:'"title"'},{value:'"heading"'},{value:'"subheading"'}]}},weight:{defaultValue:{value:"default"},description:"The weight of the font to use",name:"weight",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bold"'},{value:'"semiBold"'},{value:'"light"'}]}},isItalic:{defaultValue:{value:"false"},description:"Should the text be displayed in italic",name:"isItalic",required:!1,type:{name:"boolean"}},isUpperCase:{defaultValue:{value:"false"},description:"Should the text be displayed in upper case",name:"isUpperCase",required:!1,type:{name:"boolean"}},hasLineThrough:{defaultValue:{value:"false"},description:"Should the text be displayed with a line-through",name:"hasLineThrough",required:!1,type:{name:"boolean"}},isNowrap:{defaultValue:{value:"false"},description:"No wrapping for text",name:"isNowrap",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"The HTML tag used to render the component",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography_Typography_Typography.__docgenInfo,name:"Typography",path:"src/components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/components/ChevronRight.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["size","className","color"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const __WEBPACK_DEFAULT_EXPORT__=function SvgChevronRight(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,color=_ref.color,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),props=Object.assign({},function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({size,className},otherProps)),classNameColor=color?" moonstone-icon_"+color:"";return props.className=className+" moonstone-icon moonstone-icon_"+size+classNameColor,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M8.59009 16.59L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.59Z"}))};try{ChevronRight.displayName="ChevronRight",ChevronRight.__docgenInfo={description:"",displayName:"ChevronRight",props:{size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"default"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"darkBlue"'},{value:'"purple"'},{value:'"gray"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/components/ChevronRight.tsx#ChevronRight"]={docgenInfo:ChevronRight.__docgenInfo,name:"ChevronRight",path:"src/icons/components/ChevronRight.tsx#ChevronRight"})}catch(__react_docgen_typescript_loader_error){}}}]);