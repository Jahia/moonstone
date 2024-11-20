"use strict";(self.webpackChunk_jahia_moonstone=self.webpackChunk_jahia_moonstone||[]).push([[6688],{"./src/components/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Header_Header_Header});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Header=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/Header.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Header.A,options);Header.A&&Header.A.locals&&Header.A.locals;var Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),Separator=__webpack_require__("./src/components/Separator/Separator.tsx"),_excluded=["title","search","mainActions","status","contentType","toolbarRight","toolbarLeft","backButton","breadcrumb","className"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Header_Header_Header=function Header(_ref){var title=_ref.title,_ref$search=_ref.search,search=void 0===_ref$search?null:_ref$search,mainActions=_ref.mainActions,status=_ref.status,contentType=_ref.contentType,toolbarRight=_ref.toolbarRight,toolbarLeft=_ref.toolbarLeft,_ref$backButton=_ref.backButton,backButton=void 0===_ref$backButton?null:_ref$backButton,breadcrumb=_ref.breadcrumb,className=_ref.className,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),hasInformationArea=Boolean(breadcrumb||contentType||status),hasToolbar=Boolean(toolbarLeft||toolbarRight);return react.createElement("header",_extends({className:(0,clsx.A)("moonstone-header",className)},props),react.createElement("div",{className:(0,clsx.A)("moonstone-header_main","flexRow","alignCenter","flexFluid")},backButton&&react.createElement("div",{className:"moonstone-header_back"},backButton),react.createElement(Typography.o,{isNowrap:!0,component:"h1",variant:"title",className:(0,clsx.A)("flexFluid","moonstone-header_title")},title),search&&react.createElement("div",{className:(0,clsx.A)("moonstone-header_search")},search),mainActions&&react.createElement("div",{className:(0,clsx.A)("moonstone-header_mainActions","moonstone-header_actions")},mainActions)),hasInformationArea&&react.createElement("div",{className:(0,clsx.A)("flexRow_between","alignCenter","moonstone-header_information")},react.createElement("div",{className:(0,clsx.A)("flexRow_nowrap","alignCenter","flexFluid","moonstone-header_informationLeft")},breadcrumb,react.createElement(Separator.w,{variant:"vertical",spacing:"medium",invisible:"firstOrLastChild"}),contentType),status&&react.createElement("div",{className:(0,clsx.A)("flexRow_reverse","alignCenter","moonstone-header_informationRight","moonstone-header_actions")},status)),hasToolbar&&react.createElement(react.Fragment,null,react.createElement(Separator.w,null),react.createElement("div",{role:"toolbar",className:(0,clsx.A)("flexRow_between","alignCenter","moonstone-header_toolbar")},react.createElement("div",{className:(0,clsx.A)("flexRow","alignCenter","flexFluid","moonstone-header_actions")},toolbarLeft),react.createElement("div",{className:(0,clsx.A)("flexRow","alignCenter","moonstone-header_actions")},toolbarRight))))};Header_Header_Header.displayName="Header",Header_Header_Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{required:!0,tsType:{name:"string"},description:"Page Title"},backButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"BackButton is used to comeback to the previous location",defaultValue:{value:"null",computed:!1}},search:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Slot to the search element",defaultValue:{value:"null",computed:!1}},mainActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Main actions of the pages"},breadcrumb:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Slot to display the breadcrumb"},status:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Slot to display the status of the element"},contentType:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Slot to display the content type of the element"},toolbarRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Slot to display item on the right of the toolbar"},toolbarLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Slot to display item on the left of the toolbar"},className:{required:!1,tsType:{name:"string"},description:"Additional classname"}}}},"./src/components/Separator/Separator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Separator_Separator_Separator});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Separator=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Separator/Separator.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Separator.A,options);Separator.A&&Separator.A.locals&&Separator.A.locals;var SeparatorSpacings=function(SeparatorSpacings){return SeparatorSpacings.None="none",SeparatorSpacings.Small="small",SeparatorSpacings.Medium="medium",SeparatorSpacings.Big="big",SeparatorSpacings}({}),SeparatorSizes=function(SeparatorSizes){return SeparatorSizes.Medium="medium",SeparatorSizes.Large="large",SeparatorSizes.Full="full",SeparatorSizes}({}),SeparatorVariants=function(SeparatorVariants){return SeparatorVariants.Horizontal="horizontal",SeparatorVariants.Vertical="vertical",SeparatorVariants}({}),_excluded=["size","spacing","variant","invisible","className"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Separator_Separator_Separator=function Separator(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?SeparatorSizes.Full:_ref$size,_ref$spacing=_ref.spacing,spacing=void 0===_ref$spacing?SeparatorSpacings.Small:_ref$spacing,_ref$variant=_ref.variant,variant=void 0===_ref$variant?SeparatorVariants.Horizontal:_ref$variant,_ref$invisible=_ref.invisible,invisible=void 0===_ref$invisible?null:_ref$invisible,className=_ref.className,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("hr",_extends({},props,{className:(0,clsx.A)("moonstone-separator","moonstone-separator_".concat(variant),"moonstone-size_".concat(size),"moonstone-spacing_".concat(spacing),invisible&&"moonstone-invisible_".concat(invisible),className)}))};Separator_Separator_Separator.displayName="Separator",Separator_Separator_Separator.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{variant:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Variants: Horizontal or Vertical",defaultValue:{value:"SeparatorVariants.Horizontal",computed:!0}},spacing:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'big'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'big'"}]},description:"Vertical spacings",defaultValue:{value:"SeparatorSpacings.Small",computed:!0}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'large' | 'full'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'full'"}]},description:"Size",defaultValue:{value:"SeparatorSizes.Full",computed:!0}},invisible:{required:!1,tsType:{name:"union",raw:"'firstChild' | 'lastChild' | 'onlyChild' | 'firstOrLastChild'",elements:[{name:"literal",value:"'firstChild'"},{name:"literal",value:"'lastChild'"},{name:"literal",value:"'onlyChild'"},{name:"literal",value:"'firstOrLastChild'"}]},description:"Hide the separator if it is the firstChild, lastChild, onlyChild or firstOrLastChild\nIf you don't pass this property then the separator will always be visible",defaultValue:{value:"null",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional classname"}}}},"./src/layouts/content/LayoutContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LayoutContent_LayoutContent});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LayoutContent=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/layouts/content/LayoutContent.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LayoutContent.A,options);LayoutContent.A&&LayoutContent.A.locals&&LayoutContent.A.locals;var Loader=__webpack_require__("./src/components/Loader/Loader.tsx"),_excluded=["header","content","hasPadding","isLoading","isCentered","className"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var LayoutContent_LayoutContent=react.forwardRef((function(_ref,ref){var header=_ref.header,content=_ref.content,_ref$hasPadding=_ref.hasPadding,hasPadding=void 0===_ref$hasPadding||_ref$hasPadding,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,_ref$isCentered=_ref.isCentered,isCentered=void 0!==_ref$isCentered&&_ref$isCentered,className=_ref.className,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),classNameProps=(0,clsx.A)("flexFluid","moonstone-layoutContent",{"moonstone-layoutContent_withPadding":hasPadding},isLoading?["flexCol_center","alignCenter"]:"flexCol_nowrap");return react.createElement("div",_extends({ref,className:(0,clsx.A)("flexCol","flexFluid","moonstone-layoutContent_wrapper",className)},props),header,react.createElement("div",{className:classNameProps,"aria-busy":isLoading?"true":void 0},isLoading?react.createElement(Loader.a,{size:"big"}):isCentered?react.createElement("div",{className:"flexCol_nowrap flexFluid moonstone-layoutContent_centered"},content):content))}));LayoutContent_LayoutContent.displayName="LayoutContent",LayoutContent_LayoutContent.__docgenInfo={description:"",methods:[],displayName:"LayoutContent",props:{header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Header of the page"},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the page"},isCentered:{required:!1,tsType:{name:"boolean"},description:"Define if the content is centered",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Replace the content by a loading",defaultValue:{value:"false",computed:!1}},hasPadding:{required:!1,tsType:{name:"boolean"},description:"Define if the layout has padding",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className"}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/Header.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".moonstone-header{min-height:64px;padding:var(--spacing-medium) var(--spacing-large) 0 var(--spacing-large);background-color:var(--color-white);box-shadow:0 1px 8px var(--color-gray60)}.moonstone-header_actions>*+*{margin-left:var(--spacing-small)}.moonstone-header_main{margin-bottom:var(--spacing-small)}.moonstone-header_back{margin-right:var(--spacing-small)}.moonstone-header_title{margin-right:var(--spacing-big);color:var(--color-gray_dark)}.moonstone-header_search{margin-right:var(--spacing-large)}.moonstone-header_information{padding:var(--spacing-small) 0}.moonstone-header_information:last-child{margin-bottom:var(--spacing-medium)}.moonstone-header_informationLeft,.moonstone-header_informationRight{overflow:hidden}.moonstone-header_informationLeft{margin-right:var(--spacing-big)}.moonstone-header_toolbar{height:35px}","",{version:3,sources:["webpack://./src/components/Header/Header.scss"],names:[],mappings:"AAGA,kBACI,eAJe,CAKf,yEAAA,CAEA,mCAAA,CACA,wCAAA,CAKA,8BACI,gCAAA,CAOR,uBACI,kCAAA,CAGJ,uBACI,iCAAA,CAGJ,wBACI,+BAAA,CAEA,4BAAA,CAGJ,yBACI,iCAAA,CAMJ,8BACI,8BAAA,CAGA,yCACI,mCAAA,CAIR,qEAEI,eAAA,CAGJ,kCACI,+BAAA,CAMJ,0BACI,WA/DuB",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Separator/Separator.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".moonstone-separator{border:0;background:var(--color-gray40)}.moonstone-separator.moonstone-invisible_firstChild:first-child,.moonstone-separator.moonstone-invisible_lastChild:last-child,.moonstone-separator.moonstone-invisible_onlyChild:only-child,.moonstone-separator.moonstone-invisible_firstOrLastChild:first-child,.moonstone-separator.moonstone-invisible_firstOrLastChild:last-child,.moonstone-separator+.moonstone-separator{display:none}.moonstone-separator_horizontal{height:1px}.moonstone-separator_horizontal.moonstone-size_medium{width:calc(100% - var(--spacing-huge))}.moonstone-separator_horizontal.moonstone-size_large{width:calc(100% - var(--spacing-medium))}.moonstone-separator_horizontal.moonstone-size_full{width:100%}.moonstone-separator_horizontal.moonstone-spacing_none{margin:0 auto}.moonstone-separator_horizontal.moonstone-spacing_small{margin:var(--spacing-small) auto}.moonstone-separator_horizontal.moonstone-spacing_medium{margin:var(--spacing-medium) auto}.moonstone-separator_horizontal.moonstone-spacing_big{margin:var(--spacing-big) auto}.moonstone-separator_vertical{align-self:stretch;width:1px}.moonstone-separator_vertical.moonstone-size_medium{margin-top:var(--spacing-small);margin-bottom:var(--spacing-small)}.moonstone-separator_vertical.moonstone-size_large{margin-top:var(--spacing-nano);margin-bottom:var(--spacing-nano)}.moonstone-separator_vertical.moonstone-size_full{margin-top:0;margin-bottom:0}.moonstone-separator_vertical.moonstone-spacing_none{margin-right:0;margin-left:0}.moonstone-separator_vertical.moonstone-spacing_small{margin-right:var(--spacing-small);margin-left:var(--spacing-small)}.moonstone-separator_vertical.moonstone-spacing_medium{margin-right:var(--spacing-medium);margin-left:var(--spacing-medium)}.moonstone-separator_vertical.moonstone-spacing_big{margin-right:var(--spacing-big);margin-left:var(--spacing-big)}","",{version:3,sources:["webpack://./src/components/Separator/Separator.scss"],names:[],mappings:"AAAA,qBACI,QAAA,CACA,8BAAA,CAEA,iXAMI,YAAA,CAIR,gCACI,UAAA,CAGA,sDACI,sCAAA,CAGJ,qDACI,wCAAA,CAGJ,oDACI,UAAA,CAIJ,uDACI,aAAA,CAGJ,wDACI,gCAAA,CAGJ,yDACI,iCAAA,CAGJ,sDACI,8BAAA,CAIR,8BACI,kBAAA,CACA,SAAA,CAGA,oDACI,+BAAA,CACA,kCAAA,CAGJ,mDACI,8BAAA,CACA,iCAAA,CAGJ,kDACI,YAAA,CACA,eAAA,CAIJ,qDACI,cAAA,CACA,aAAA,CAGJ,sDACI,iCAAA,CACA,gCAAA,CAGJ,uDACI,kCAAA,CACA,iCAAA,CAGJ,oDACI,+BAAA,CACA,8BAAA",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/layouts/content/LayoutContent.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".moonstone-layoutContent_wrapper{overflow:hidden}.moonstone-layoutContent{background-color:var(--color-gray_light40);overflow:auto}.moonstone-layoutContent_withPadding{padding:var(--spacing-large)}.moonstone-layoutContent_centered{min-width:400px;max-width:800px;margin:0 auto}","",{version:3,sources:["webpack://./src/layouts/content/LayoutContent.scss"],names:[],mappings:"AAAA,iCACI,eAAA,CAGJ,yBACI,0CAAA,CACA,aAAA,CAGJ,qCACI,4BAAA,CAGJ,kCACI,eAAA,CACA,eAAA,CACA,aAAA",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);