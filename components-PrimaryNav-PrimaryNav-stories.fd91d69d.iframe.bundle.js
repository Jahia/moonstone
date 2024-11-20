"use strict";(self.webpackChunk_jahia_moonstone=self.webpackChunk_jahia_moonstone||[]).push([[5919],{"./src/components/PrimaryNav/PrimaryNav.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PrimaryNav_stories});var react=__webpack_require__("./node_modules/react/index.js");var PrimaryNav=__webpack_require__("./src/components/PrimaryNav/PrimaryNav.tsx"),PrimaryNavItemsGroup=__webpack_require__("./src/components/PrimaryNav/PrimaryNavItemsGroup/PrimaryNavItemsGroup.tsx"),PrimaryNavItem=__webpack_require__("./src/components/PrimaryNav/PrimaryNavItem/PrimaryNavItem.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Badge=__webpack_require__("./src/components/Badge/Badge.tsx"),Star=__webpack_require__("./src/icons/components/Star.tsx"),Feather=__webpack_require__("./src/icons/components/Feather.tsx"),Apps=__webpack_require__("./src/icons/components/Apps.tsx"),Person=__webpack_require__("./src/icons/components/Person.tsx"),Power=__webpack_require__("./src/icons/components/Power.tsx"),Workflow=__webpack_require__("./src/icons/components/Workflow.tsx"),Profile=__webpack_require__("./src/icons/components/Profile.tsx"),Setting=__webpack_require__("./src/icons/components/Setting.tsx");const PrimaryNav_stories={title:"Components/PrimaryNav",component:PrimaryNav.S,parameters:{notes:{markdown:"## Goals:\n\nCreate the Navigation-primary component for the main navigation (level 1).\n\n## Specifications:\n\nThe navigation bar should be collapsable/expandable by clicking on the burger menu.\n\nShow or Hide elements depends on the state of the display.\n\nif expanded :\n\n - Switch {{burger-menu}} to {{arrow-back}} icon\n - Show HeaderLogo\n - Show label’s icon\n - Show helping links (documentations ...)\n - Show mail of the user\n - Show sign out button\n\nFigma Link : https://www.figma.com/file/939bW74C3TLW5VAzK23uox/moonstone-components?node-id=140%3A0\n"}}},Default=()=>react.createElement("div",{style:{transform:"scale(1)",height:"100vh"}},react.createElement(PrimaryNav.S,{headerLogo:react.createElement("img",{src:"https://via.placeholder.com/100x40?text=Logo"}),headerCaption:"development",modeIcon:react.createElement(Star.A,null),top:react.createElement(react.Fragment,null,react.createElement(PrimaryNavItemsGroup.t,null,react.createElement(PrimaryNavItem.$,{label:"NavItem not selected",icon:react.createElement(Feather.A,null)}),react.createElement(PrimaryNavItem.$,{isSelected:!0,label:"NavItem selected",icon:react.createElement(Apps.A,null)})),react.createElement(PrimaryNavItemsGroup.t,null,react.createElement(PrimaryNavItem.$,{label:"Very very long long name with many characters",icon:react.createElement(Feather.A,null)}),react.createElement(PrimaryNavItem.$,{icon:react.createElement(Person.A,null),label:"My profile",subtitle:"username as a subtitle"}),react.createElement(PrimaryNavItem.$,{icon:react.createElement(Person.A,null),label:"Very very long long long long label",subtitle:"username as a subtitle username as a subtitle username as a subtitle username as a subtitle",button:react.createElement(Button.$,{isReversed:!0,icon:react.createElement(Power.A,null),label:"Sign Out",variant:"ghost",onClick:()=>null})}),react.createElement(PrimaryNavItem.$,{icon:react.createElement(Workflow.A,null),label:"With badge",badge:react.createElement(Badge.E,{label:"3"})}),react.createElement(PrimaryNavItem.$,{icon:react.createElement(Person.A,null),label:"With badge",badge:react.createElement(Badge.E,{label:"333"})})),react.createElement(PrimaryNavItemsGroup.t,{isDisplayedWhenCollapsed:!1},react.createElement(PrimaryNavItem.$,{url:"https://jahia.com",label:"Jahia Link"}))),bottom:react.createElement(react.Fragment,null,react.createElement(PrimaryNavItemsGroup.t,null,react.createElement(PrimaryNavItem.$,{label:"Another bottom item",icon:react.createElement(Profile.A,null)})),react.createElement(PrimaryNavItemsGroup.t,null,react.createElement(PrimaryNavItem.$,{label:"Bottom item",icon:react.createElement(Setting.A,null)})))})),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => <div style={{\n  transform: \'scale(1)\',\n  height: \'100vh\'\n}}>\n        <PrimaryNav headerLogo={<img src="https://via.placeholder.com/100x40?text=Logo" />} headerCaption="development" modeIcon={<Star />} top={<>\n              <PrimaryNavItemsGroup>\n                  <PrimaryNavItem label="NavItem not selected" icon={<Feather />} />\n                  <PrimaryNavItem isSelected label="NavItem selected" icon={<Apps />} />\n              </PrimaryNavItemsGroup>\n              <PrimaryNavItemsGroup>\n                  <PrimaryNavItem label="Very very long long name with many characters" icon={<Feather />} />\n                  <PrimaryNavItem icon={<Person />} label="My profile" subtitle="username as a subtitle" />\n                  <PrimaryNavItem icon={<Person />} label="Very very long long long long label" subtitle="username as a subtitle username as a subtitle username as a subtitle username as a subtitle" button={<Button isReversed icon={<Power />} label="Sign Out" variant="ghost" onClick={() => null} />} />\n                  <PrimaryNavItem icon={<Workflow />} label="With badge" badge={<Badge label="3" />} />\n                  <PrimaryNavItem icon={<Person />} label="With badge" badge={<Badge label="333" />} />\n              </PrimaryNavItemsGroup>\n              <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>\n                  <PrimaryNavItem url="https://jahia.com" label="Jahia Link" />\n              </PrimaryNavItemsGroup>\n          </>} bottom={<>\n              <PrimaryNavItemsGroup>\n                  <PrimaryNavItem label="Another bottom item" icon={<Profile />} />\n              </PrimaryNavItemsGroup>\n              <PrimaryNavItemsGroup>\n                  <PrimaryNavItem label="Bottom item" icon={<Setting />} />\n              </PrimaryNavItemsGroup>\n          </>} />\n    </div>',...Default.parameters?.docs?.source}}}},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Badge_Badge_Badge});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Badge=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Badge/Badge.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Badge.A,options);Badge.A&&Badge.A.locals&&Badge.A.locals;var Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_excluded=["label","color","className"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Badge_Badge_Badge=function Badge(_ref){var _ref$label=_ref.label,label=void 0===_ref$label?null:_ref$label,_ref$color=_ref.color,color=void 0===_ref$color?"accent":_ref$color,className=_ref.className,other=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),classNameProps=(0,clsx.A)("moonstone-badge","moonstone-badge_round","moonstone-badge_".concat(color),className);return!label||label.length<1?null:react.createElement(Typography.o,_extends({isNowrap:!0,component:"span",variant:"caption",weight:"bold",className:classNameProps},other),label)};Badge_Badge_Badge.displayName="Badge",Badge_Badge_Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{label:{required:!1,tsType:{name:"string"},description:"Badge label, only for type round",defaultValue:{value:"null",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'accent' | 'success' | 'danger'",elements:[{name:"literal",value:"'accent'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"}]},description:"Badge color",defaultValue:{value:"'accent'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional classname"}}}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_Typography__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/components/Button/Button.scss"),__webpack_require__("./src/components/Typography/Typography.tsx")),_Loader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Loader/Loader.tsx"),_excluded=["label","size","isReversed","isDisabled","isLoading","icon","iconEnd","variant","color","className","onClick"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Button=function Button(_ref){var _ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,_ref$isReversed=_ref.isReversed,isReversed=void 0!==_ref$isReversed&&_ref$isReversed,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,_ref$icon=_ref.icon,icon=void 0===_ref$icon?null:_ref$icon,_ref$iconEnd=_ref.iconEnd,iconEnd=void 0===_ref$iconEnd?null:_ref$iconEnd,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,_ref$color=_ref.color,color=void 0===_ref$color?"default":_ref$color,_ref$className=_ref.className,className=void 0===_ref$className?null:_ref$className,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?function(){}:_ref$onClick,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),typoWeight="default",ButtonEl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);"small"===size&&(typoWeight="light"),"big"===size&&(typoWeight="semiBold");var handleOnClick=function handleOnClick(e){onClick(e),ButtonEl.current.blur()},LoaderReversed=Boolean("default"===variant&&("accent"===color||"danger"===color));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({ref:ButtonEl,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("moonstone-button","moonstone-size_".concat(size),"moonstone-variant_".concat(variant),"moonstone-color_".concat(color),{"moonstone-icon":label&&(icon||iconEnd)},{"moonstone-icon-button":!label},{"moonstone-reverse":isReversed},{"moonstone-button_loading":isLoading},className),type:"button",disabled:isDisabled||isLoading,onClick:function onClick(e){return handleOnClick(e)}},props),icon&&!isLoading&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(icon.type,_extends({},icon.props,{size:"big"===size?"default":size})),isLoading&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_3__.a,{size:"small",isReversed:LoaderReversed,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)({"moonstone-button_loaderOverlay":!icon})}),label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_4__.o,{isNowrap:!0,component:"span",variant:"button",isUpperCase:"big"===size,weight:typoWeight,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("flexFluid")},label),label&&iconEnd&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(iconEnd.type,_extends({},iconEnd.props,{size:"big"===size?"default":size})))};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button label",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'big'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'big'"}]},description:"Icon size",defaultValue:{value:"'default'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"Optional icon element to render on the left of the label or without label",defaultValue:{value:"null",computed:!1}},iconEnd:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"Optional icon element to render on the right of the label, it's only display when a label is provided",defaultValue:{value:"null",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'ghost' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'outlined'"}]},description:"Button style",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'accent' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'danger'"}]},description:"Button color",defaultValue:{value:"'default'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Is button disabled",defaultValue:{value:"false",computed:!1}},isReversed:{required:!1,tsType:{name:"boolean"},description:"Is button color reversed",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Is button loading",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional classname",defaultValue:{value:"null",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler"},description:"Function trigger on click",defaultValue:{value:"() => undefined",computed:!1}}}}},"./src/components/PrimaryNav/PrimaryNav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>PrimaryNav_PrimaryNav_PrimaryNav});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PrimaryNav=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/PrimaryNav/PrimaryNav.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PrimaryNav.A,options);PrimaryNav.A&&PrimaryNav.A.locals&&PrimaryNav.A.locals;var PrimaryNav_context=__webpack_require__("./src/components/PrimaryNav/PrimaryNav.context.ts"),ArrowLeft=__webpack_require__("./src/icons/components/ArrowLeft.tsx"),MenuIcon=__webpack_require__("./src/icons/components/MenuIcon.tsx"),_excluded=["headerLogo","top","bottom","headerCaption","modeIcon"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var NavButton=function NavButton(_ref){var icon,isExpanded=_ref.isExpanded,toggleExpand=_ref.toggleExpand,modeIcon=_ref.modeIcon;return isExpanded?react.createElement("button",{className:(0,clsx.A)("moonstone-primaryNav_button"),type:"button",role:"primary-nav-control",onClick:toggleExpand},react.createElement(ArrowLeft.A,{size:"big"})):(modeIcon&&(icon=react.cloneElement(modeIcon,{className:(0,clsx.A)("moonstone-primaryNav_modeIcon")})),react.createElement(react.Fragment,null,icon,react.createElement("button",{className:(0,clsx.A)("moonstone-primaryNav_button"),type:"button",role:"primary-nav-control",onClick:toggleExpand},react.createElement(MenuIcon.A,{size:"big"}))))},NavHeader=function NavHeader(_ref2){var icon,headerCaption=_ref2.headerCaption,modeIcon=_ref2.modeIcon,headerLogo=_ref2.headerLogo;return modeIcon&&(icon=react.cloneElement(modeIcon,{className:(0,clsx.A)("moonstone-primaryNav_modeIconHeader")})),react.createElement(react.Fragment,null,headerLogo,react.createElement("div",{className:(0,clsx.A)("flexRow_nowrap","alignCenter","moonstone-primaryNav_headerCaption")},icon,headerCaption))},PrimaryNav_PrimaryNav_PrimaryNav=function PrimaryNav(_ref3){var _ref3$headerLogo=_ref3.headerLogo,headerLogo=void 0===_ref3$headerLogo?"":_ref3$headerLogo,_ref3$top=_ref3.top,top=void 0===_ref3$top?null:_ref3$top,_ref3$bottom=_ref3.bottom,bottom=void 0===_ref3$bottom?null:_ref3$bottom,_ref3$headerCaption=_ref3.headerCaption,headerCaption=void 0===_ref3$headerCaption?"":_ref3$headerCaption,modeIcon=_ref3.modeIcon,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref3,_excluded),_useState2=_slicedToArray((0,react.useState)(!1),2),isExpanded=_useState2[0],setExpanded=_useState2[1],toggleExpand=function toggleExpand(){setExpanded(!isExpanded)};return react.createElement(PrimaryNav_context.l.Provider,{value:{isExpanded,collapse:function collapse(){return setExpanded(!1)}}},react.createElement("nav",_extends({},props,{"aria-expanded":isExpanded,className:(0,clsx.A)("moonstone-primaryNav",{"moonstone-expanded":isExpanded},"flexCol_nowrap")}),react.createElement("div",{className:(0,clsx.A)("flexRow_nowrap","moonstone-primaryNav_header")},react.createElement("div",{className:(0,clsx.A)("moonstone-primaryNav_buttonContainer","flexRow_center","alignCenter")},react.createElement(NavButton,{isExpanded,toggleExpand,modeIcon})),react.createElement("div",{className:(0,clsx.A)("flexCol_center","alignCenter","flexFluid","moonstone-primaryNav_logoCaptionGroup")},react.createElement(NavHeader,{headerCaption,modeIcon,headerLogo}))),react.createElement("ul",{className:(0,clsx.A)("flexCol_nowrap","flexFluid","moonstone-primaryNav_top")},top),react.createElement("ul",null,bottom)),isExpanded&&react.createElement("div",{className:"moonstone-primaryNav_overlay",onClick:toggleExpand}))};PrimaryNav_PrimaryNav_PrimaryNav.displayName="PrimaryNav",PrimaryNav_PrimaryNav_PrimaryNav.__docgenInfo={description:"",methods:[],displayName:"PrimaryNav",props:{headerLogo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Image of logo application",defaultValue:{value:"''",computed:!1}},modeIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"Image for application mode"},headerCaption:{required:!1,tsType:{name:"string"},description:"Application's environment",defaultValue:{value:"''",computed:!1}},top:{required:!1,tsType:{name:"union",raw:"React.ReactElement<PrimaryNavItemsGroupProps> | React.ReactElement<PrimaryNavItemsGroupProps>[]",elements:[{name:"ReactReactElement",raw:"React.ReactElement<PrimaryNavItemsGroupProps>",elements:[{name:"signature",type:"object",raw:"{\n    /**\n     * Group is visible when the navigation is collapsed\n     */\n    isDisplayedWhenCollapsed?: boolean;\n    /**\n     * Items displayed inside the group\n     */\n    children: React.ReactNode;\n}",signature:{properties:[{key:"isDisplayedWhenCollapsed",value:{name:"boolean",required:!1},description:"Group is visible when the navigation is collapsed"},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0},description:"Items displayed inside the group"}]}}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<PrimaryNavItemsGroupProps>",elements:[{name:"signature",type:"object",raw:"{\n    /**\n     * Group is visible when the navigation is collapsed\n     */\n    isDisplayedWhenCollapsed?: boolean;\n    /**\n     * Items displayed inside the group\n     */\n    children: React.ReactNode;\n}",signature:{properties:[{key:"isDisplayedWhenCollapsed",value:{name:"boolean",required:!1},description:"Group is visible when the navigation is collapsed"},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0},description:"Items displayed inside the group"}]}}]}],raw:"React.ReactElement<PrimaryNavItemsGroupProps>[]"}]},description:"Primary nav groups displayed at the top",defaultValue:{value:"null",computed:!1}},bottom:{required:!1,tsType:{name:"union",raw:"React.ReactElement<PrimaryNavItemsGroupProps> | React.ReactElement<PrimaryNavItemsGroupProps>[]",elements:[{name:"ReactReactElement",raw:"React.ReactElement<PrimaryNavItemsGroupProps>",elements:[{name:"signature",type:"object",raw:"{\n    /**\n     * Group is visible when the navigation is collapsed\n     */\n    isDisplayedWhenCollapsed?: boolean;\n    /**\n     * Items displayed inside the group\n     */\n    children: React.ReactNode;\n}",signature:{properties:[{key:"isDisplayedWhenCollapsed",value:{name:"boolean",required:!1},description:"Group is visible when the navigation is collapsed"},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0},description:"Items displayed inside the group"}]}}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<PrimaryNavItemsGroupProps>",elements:[{name:"signature",type:"object",raw:"{\n    /**\n     * Group is visible when the navigation is collapsed\n     */\n    isDisplayedWhenCollapsed?: boolean;\n    /**\n     * Items displayed inside the group\n     */\n    children: React.ReactNode;\n}",signature:{properties:[{key:"isDisplayedWhenCollapsed",value:{name:"boolean",required:!1},description:"Group is visible when the navigation is collapsed"},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0},description:"Items displayed inside the group"}]}}]}],raw:"React.ReactElement<PrimaryNavItemsGroupProps>[]"}]},description:"Primary nav groups displayed at the bottom",defaultValue:{value:"null",computed:!1}}}}},"./src/icons/components/Person.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["size","className","color"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var SvgPerson=function SvgPerson(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,color=_ref.color,otherProps=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),props=Object.assign({},function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({size,className},otherProps)),classNameColor=color?" moonstone-icon_"+color:"";return props.className=className+" moonstone-icon moonstone-icon_"+size+classNameColor,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"}))};const __WEBPACK_DEFAULT_EXPORT__=SvgPerson;SvgPerson.__docgenInfo={description:"",methods:[],displayName:"SvgPerson",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'big'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'big'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray'",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'green'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'darkBlue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'gray'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}},composes:["SVGProps"]}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Badge/Badge.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".moonstone-badge{color:var(--color-light);pointer-events:none}.moonstone-badge.moonstone-badge_round{display:flex;justify-content:center;align-items:center;min-width:20px;max-width:-moz-max-content;max-width:max-content;height:20px;padding:var(--spacing-nano);border-radius:2rem}.moonstone-badge.moonstone-badge_accent{background-color:var(--color-accent)}.moonstone-badge.moonstone-badge_danger{background-color:var(--color-danger)}.moonstone-badge.moonstone-badge_success{background-color:var(--color-success)}","",{version:3,sources:["webpack://./src/components/Badge/Badge.scss"],names:[],mappings:"AAAA,iBACI,wBAAA,CAEA,mBAAA,CAEA,uCACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,0BAAA,CAAA,qBAAA,CACA,WAAA,CACA,2BAAA,CAEA,kBAAA,CAGJ,wCACI,oCAAA,CAGJ,wCACI,oCAAA,CAGJ,yCACI,qCAAA",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/PrimaryNav/PrimaryNav.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".moonstone-primaryNav_logoCaptionGroup{padding-right:2.5rem;visibility:hidden;opacity:0;transition:visibility .15s, opacity .2s}.moonstone-primaryNav{position:fixed;top:0;left:0;z-index:1;width:56px;height:100vh;color:var(--color-light);background:var(--color-dark);overflow:hidden;transition:width .3s}.moonstone-primaryNav.moonstone-expanded{z-index:9000;width:300px;box-shadow:8px 0 16px 0 var(--color-gray_dark60)}.moonstone-primaryNav.moonstone-expanded .moonstone-primaryNav_logoCaptionGroup{visibility:visible;opacity:1}.moonstone-primaryNav_overlay{position:fixed;z-index:800;width:100vw;height:100vh;background-color:var(--color-dark);opacity:.6}.moonstone-primaryNav_header{height:56px}.moonstone-primaryNav_top{overflow:auto;overflow-y:overlay}.moonstone-primaryNav_buttonContainer{width:56px;min-width:56px}.moonstone-primaryNav_button{z-index:9000;width:40px;height:40px;padding:0;color:var(--color-light);border:none;border-radius:40px;outline:none;background:inherit;cursor:pointer}.moonstone-primaryNav_button:hover{color:var(--color-accent);background-color:var(--color-gray_dark60)}.moonstone-primaryNav_modeIcon{position:absolute;top:calc(var(--spacing-nano)*3);right:calc(var(--spacing-nano)*2);color:var(--color-accent);pointer-events:none}.moonstone-primaryNav_modeIconHeader{width:15px;height:15px;color:var(--color-accent);pointer-events:none}.moonstone-primaryNav_headerCaption{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-left:40px;font-size:8pt;color:var(--color-light)}","",{version:3,sources:["webpack://./src/components/PrimaryNav/PrimaryNav.scss","webpack://./src/utils/_mixins.scss"],names:[],mappings:"AAKA,uCACI,oBAAA,CAEA,iBAAA,CACA,SAAA,CAEA,uCAAA,CAGJ,sBACI,cAAA,CACA,KAAA,CACA,MAAA,CACA,SAAA,CAEA,UAjBS,CAkBT,YAAA,CAEA,wBAAA,CAEA,4BAAA,CACA,eAAA,CAEA,oBAAA,CAEA,yCACI,YAAA,CAEA,WA/Ba,CAiCb,gDAAA,CAEA,gFACI,kBAAA,CACA,SAAA,CAKZ,8BACI,cAAA,CACA,WAAA,CAEA,WAAA,CACA,YAAA,CAEA,kCAAA,CACA,UAAA,CAGJ,6BACI,WArDS,CAwDb,0BACI,aAAA,CACA,kBAAA,CAGJ,sCACI,UA9DS,CA+DT,cA/DS,CAkEb,6BACI,YAAA,CAEA,UAAA,CACA,WAAA,CACA,SAAA,CAEA,wBAAA,CAEA,WAAA,CACA,kBAAA,CACA,YAAA,CACA,kBAAA,CACA,cAAA,CAEA,mCACI,yBAAA,CAEA,yCAAA,CAIR,+BACI,iBAAA,CACA,+BAAA,CACA,iCAAA,CAEA,yBAAA,CAEA,mBAAA,CAGJ,qCACI,UAAA,CACA,WAAA,CAEA,yBAAA,CAEA,mBAAA,CAGJ,oCCzGI,cALuB,CAOvB,kBAAA,CACA,eAAA,CAEA,sBAAA,CDuGA,gBAAA,CAEA,aAAA,CACA,wBAAA",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);