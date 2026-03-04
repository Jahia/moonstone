import{j as r}from"./iframe-IooyJYXP.js";import{S as s}from"./MoreVert-DIKFAqiH.js";import{S as t}from"./Language-0rcnC1rv.js";import{F as n}from"./FieldBoolean-BoP1-0Qq.js";import{B as c}from"./Button-CblrXmsj.js";import{C as o}from"./Chip-B6Q5BIlU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";/* empty css              */import"./Checkbox-QK19vQGm.js";import"./Typography-DPK1MN4G.js";/* empty css               */import"./Loader-DN-eGwgG.js";const i="data:text/markdown;base64,Rm9ybSB2YWxpZGF0aW9uIG11c3QgYmUgbWFkZSBvbiB0aGUgRmllbGQgbGV2ZWwKUHJvcCBidXR0b25zIG9ubHkgc3VwcG9ydHMgYnV0dG9uIGNvbXBvbmVudHM=",k={title:"Components/Field/FieldBoolean",component:n,tags:["beta"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"},notes:{markdown:i}},argTypes:{buttons:{control:!1},chips:{control:!1}}},e={args:{label:"Title",chips:r.jsxs(r.Fragment,{children:[r.jsx(o,{color:"accent",label:"Required"}),r.jsx(o,{icon:r.jsx(t,{}),label:"Shared by all languages"})]}),buttons:r.jsx(c,{icon:r.jsx(s,{}),variant:"ghost"}),helper:"information",checkboxAttributes:{value:"checkbox",className:"test-class"}}},a={args:{...e.args,hasError:!0,errorMessage:"There is an error."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    chips: <><Chip color="accent" label="Required" /><Chip icon={<Language />} label="Shared by all languages" /></>,
    buttons: <Button icon={<MoreVert />} variant="ghost" />,
    helper: 'information',
    checkboxAttributes: {
      value: 'checkbox',
      className: 'test-class'
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hasError: true,
    errorMessage: 'There is an error.'
  }
}`,...a.parameters?.docs?.source}}};const G=["Default","Error"];export{e as Default,a as Error,G as __namedExportsOrder,k as default};
