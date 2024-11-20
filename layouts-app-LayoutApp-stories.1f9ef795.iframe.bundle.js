"use strict";(self.webpackChunk_jahia_moonstone=self.webpackChunk_jahia_moonstone||[]).push([[8170],{"./src/layouts/app/LayoutApp.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutApp_stories});var react=__webpack_require__("./node_modules/react/index.js"),LayoutApp=__webpack_require__("./src/layouts/app/LayoutApp.tsx"),FakeComponents=__webpack_require__("./src/__storybook__/FakeComponents.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const LayoutApp_stories={title:"Layouts/LayoutApp",component:LayoutApp.y,parameters:{subtitle:"How to use our root application layout",notes:{markdown:"## Goals:\nLayout for the root application\n\n## Specifications:\n-\n"}},argTypes:{navigation:{control:!1},content:{control:!1}}},Template=args=>react.createElement(LayoutApp.y,_extends({navigation:react.createElement(FakeComponents.k1,null),content:react.createElement(FakeComponents.hQ,null)},args)),Default={render:Template},Loading={render:Template,args:{isLoading:!0}},__namedExportsOrder=["Default","Loading"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    isLoading: true\n  }\n}",...Loading.parameters?.docs?.source}}}},"./src/layouts/app/LayoutApp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>LayoutApp_LayoutApp});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LayoutApp=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/layouts/app/LayoutApp.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LayoutApp.A,options);LayoutApp.A&&LayoutApp.A.locals&&LayoutApp.A.locals;var Loader=__webpack_require__("./src/components/Loader/Loader.tsx"),LayoutApp_LayoutApp=react.forwardRef((function(_ref,ref){var _ref$navigation=_ref.navigation,navigation=void 0===_ref$navigation?null:_ref$navigation,_ref$content=_ref.content,content=void 0===_ref$content?null:_ref$content,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,classNameProps=(0,clsx.A)("moonstone-layoutApp_content","flexFluid",isLoading?["flexCol_center","alignCenter"]:"flexRow_nowrap");return react.createElement("div",{ref,className:(0,clsx.A)("moonstone-layoutApp","flexRow_center","flexRow_nowrap")},react.createElement("div",{className:(0,clsx.A)("moonstone-layoutApp_navigation")},navigation),react.createElement("div",{className:classNameProps},isLoading?react.createElement(Loader.a,{size:"big"}):content))}));LayoutApp_LayoutApp.displayName="LayoutApp",LayoutApp_LayoutApp.__docgenInfo={description:"",methods:[],displayName:"LayoutApp",props:{navigation:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Navigation of the application (for PrimaryNavigation)",defaultValue:{value:"null",computed:!1}},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the application",defaultValue:{value:"null",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Replace the content by a loader",defaultValue:{value:"false",computed:!1}}}}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/layouts/app/LayoutApp.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".moonstone-layoutApp{position:relative;width:100vw;height:100vh}.moonstone-layoutApp_navigation{width:56px}","",{version:3,sources:["webpack://./src/layouts/app/LayoutApp.scss"],names:[],mappings:"AAAA,qBACI,iBAAA,CAEA,WAAA,CACA,YAAA,CAGJ,gCACI,UAAA",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);