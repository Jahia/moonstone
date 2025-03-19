"use strict";(self.webpackChunk_jahia_moonstone=self.webpackChunk_jahia_moonstone||[]).push([[7819],{"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.moonstone-typography.moonstone-variant_title{font-weight:300;font-size:1.75rem;font-feature-settings:"ordn" on,"liga" off;line-height:2rem}.moonstone-typography.moonstone-variant_title::first-letter{text-transform:capitalize}.moonstone-typography.moonstone-variant_heading{font-weight:600;font-size:1.25rem;line-height:1.5rem}.moonstone-typography.moonstone-variant_subheading{font-size:1rem;line-height:1.125rem}.moonstone-typography.moonstone-variant_body{font-size:.875rem;line-height:1.1875rem}.moonstone-typography.moonstone-variant_caption{font-size:.75rem;line-height:1rem}.moonstone-typography.moonstone-variant_button{font-size:.75rem;line-height:1rem}.moonstone-typography.moonstone-weight_bold{font-weight:bold}.moonstone-typography.moonstone-weight_semiBold{font-weight:500}.moonstone-typography.moonstone-weight_light{font-weight:300}.moonstone-typography.moonstone-nowrap{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.moonstone-typography.moonstone-italic{font-style:italic}.moonstone-typography.moonstone-lineThrough{text-decoration-line:line-through}.moonstone-typography.moonstone-upperCase{text-transform:uppercase}',"",{version:3,sources:["webpack://./src/utils/_typography.scss","webpack://./src/utils/_mixins.scss"],names:[],mappings:"AAMA,8CACI,eAAA,CACA,iBAAA,CACA,0CAAA,CAEA,gBAAA,CAEA,4DACI,yBAAA,CAIR,gDACI,eAAA,CACA,iBAAA,CACA,kBAAA,CAGJ,mDACI,cAAA,CACA,oBAAA,CAGJ,6CACI,iBAAA,CACA,qBAAA,CAGJ,gDACI,gBAAA,CACA,gBAAA,CAGJ,+CACI,gBAAA,CACA,gBAAA,CAGJ,4CACI,gBAAA,CAGJ,gDACI,eAAA,CAGJ,6CACI,eAAA,CAGJ,uCCnDI,cDoDyB,CClDzB,kBAAA,CACA,eAAA,CAEA,sBAAA,CDkDJ,uCACI,iBAAA,CAGJ,4CACI,iCAAA,CAGJ,0CACI,wBAAA",sourcesContent:["@use 'mixins';\n\n// ---\n// Typography Styles\n// ---\n\n%variant-title {\n    font-weight: 300;\n    font-size: 1.75rem; // 28px\n    font-feature-settings: 'ordn' on, 'liga' off;\n\n    line-height: 2rem; // 32px;\n\n    &::first-letter {\n        text-transform: capitalize;\n    }\n}\n\n%variant-heading {\n    font-weight: 600;\n    font-size: 1.25rem; // 20px;\n    line-height: 1.5rem; // 24px;\n}\n\n%variant-subheading {\n    font-size: 1rem; // 16px;\n    line-height: 1.125rem; // 18px;\n}\n\n%variant-body {\n    font-size: 0.875rem; // 14px;\n    line-height: 1.1875rem; // 19px;\n}\n\n%variant-caption {\n    font-size: 0.75rem; // 12px;\n    line-height: 1rem; // 16px;\n}\n\n%variant-button {\n    font-size: 0.75rem; // 12px;\n    line-height: 1rem; // 16px;\n}\n\n%weight-bold {\n    font-weight: bold;\n}\n\n%weight-semiBold {\n    font-weight: 500;\n}\n\n%weight-light {\n    font-weight: 300;\n}\n\n%nowrap {\n    @include mixins.truncate(100%);\n}\n\n%italic {\n    font-style: italic;\n}\n\n%lineThrough {\n    text-decoration-line: line-through;\n}\n\n%upperCase {\n    text-transform: uppercase;\n}\n","@mixin truncate($maxWidth: 100%, $display: null) {\n    @if ($display) {\n        display: $display;\n    }\n\n    max-width: $maxWidth;\n\n    white-space: nowrap;\n    overflow: hidden;\n\n    text-overflow: ellipsis;\n}\n\n%is-disabled {\n    color: var(--color-gray);\n\n    background-color: var(--color-gray_light40);\n\n    cursor: not-allowed;\n    opacity: 0.6;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckboxGroup_stories});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),CheckboxGroup_context=__webpack_require__("./src/components/CheckboxGroup/CheckboxGroup.context.ts"),_excluded=["children","name","isDisabled","isReadOnly","className","onChange"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var CheckboxGroup=function CheckboxGroup(_ref){var children=_ref.children,name=_ref.name,isDisabled=_ref.isDisabled,isReadOnly=_ref.isReadOnly,className=_ref.className,onChange=_ref.onChange,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),provider={name,isDisabled,isReadOnly,onChange};return react.createElement(CheckboxGroup_context.I.Provider,{value:provider},react.createElement("div",_extends({},props,{className:(0,clsx.A)("flexCol",className)}),children))};try{CheckboxGroup.displayName="CheckboxGroup",CheckboxGroup.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{name:{defaultValue:null,description:"Set the same name to all CheckboxItem",name:"name",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"CheckboxItem component",name:"children",required:!0,type:{name:"ReactElement<CheckboxItemProps, string | JSXElementConstructor<any>>[]"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Function triggered on change of all CheckboxItems. That function is not replaced the onChange function set on a CheckboxItem, In that case both functions will be executed.",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the checkboxes can be selected but not changed by the user",name:"isReadOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:CheckboxGroup.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(__react_docgen_typescript_loader_error){}var CheckboxItem=__webpack_require__("./src/components/CheckboxGroup/CheckboxItem/CheckboxItem.tsx");const CheckboxGroup_stories={title:"Components/CheckboxGroup",component:CheckboxGroup,parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0},actions:{argTypesRegex:"^on.*"}},argTypes:{children:{table:{disable:!0}}}},Template=args=>react.createElement(CheckboxGroup,args,react.createElement(CheckboxItem.H,{id:"cat",label:"Cat",description:"Miaouw",value:"cat"}),react.createElement(CheckboxItem.H,{id:"dog",label:"Dog",description:"Ouah-ouah",value:"dog"}),react.createElement(CheckboxItem.H,{isDisabled:!0,id:"horse",label:"Horse",description:"Disabled element",value:"horse"}),react.createElement(CheckboxItem.H,{id:"bird",label:"Bird without description",value:"bird"})),Default={render:Template,args:{name:"default"}},Disabled={render:Template,args:{name:"disabled",isDisabled:!0}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    name: 'default'\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    name: 'disabled',\n    isDisabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography_Typography_Typography});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Typography=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Typography.A,options);Typography.A&&Typography.A.locals&&Typography.A.locals;var _excluded=["children","component","variant","weight","className","hasLineThrough","isItalic","isUpperCase","isNowrap"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Typography_Typography_Typography=function Typography(_ref){var _ref$children=_ref.children,children=void 0===_ref$children?"":_ref$children,component=_ref.component,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"body":_ref$variant,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"default":_ref$weight,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$hasLineThrough=_ref.hasLineThrough,hasLineThrough=void 0!==_ref$hasLineThrough&&_ref$hasLineThrough,_ref$isItalic=_ref.isItalic,isItalic=void 0!==_ref$isItalic&&_ref$isItalic,_ref$isUpperCase=_ref.isUpperCase,isUpperCase=void 0!==_ref$isUpperCase&&_ref$isUpperCase,_ref$isNowrap=_ref.isNowrap,isNowrap=void 0!==_ref$isNowrap&&_ref$isNowrap,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);if(!children)return null;var Component=component||"p";return react.createElement(Component,_extends({className:(0,clsx.A)("moonstone-typography","moonstone-variant_".concat(variant),"moonstone-weight_".concat(weight),className,{"moonstone-nowrap":isNowrap},{"moonstone-italic":isItalic},{"moonstone-upperCase":isUpperCase},{"moonstone-lineThrough":hasLineThrough})},props),children)};Typography_Typography_Typography.displayName="Typography";try{Typography_Typography_Typography.displayName="Typography",Typography_Typography_Typography.__docgenInfo={description:"",displayName:"Typography",props:{className:{defaultValue:{value:""},description:"Additional classname",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"body"},description:"Variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"button"'},{value:'"caption"'},{value:'"title"'},{value:'"heading"'},{value:'"subheading"'}]}},weight:{defaultValue:{value:"default"},description:"The weight of the font to use",name:"weight",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bold"'},{value:'"semiBold"'},{value:'"light"'}]}},isItalic:{defaultValue:{value:"false"},description:"Should the text be displayed in italic",name:"isItalic",required:!1,type:{name:"boolean"}},isUpperCase:{defaultValue:{value:"false"},description:"Should the text be displayed in upper case",name:"isUpperCase",required:!1,type:{name:"boolean"}},hasLineThrough:{defaultValue:{value:"false"},description:"Should the text be displayed with a line-through",name:"hasLineThrough",required:!1,type:{name:"boolean"}},isNowrap:{defaultValue:{value:"false"},description:"No wrapping for text",name:"isNowrap",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"The HTML tag used to render the component",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography_Typography_Typography.__docgenInfo,name:"Typography",path:"src/components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}}}]);