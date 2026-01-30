import{j as r}from"./iframe-DnEO7nHG.js";import{B as s}from"./Button-D5ICsJ0U.js";import{S as t}from"./MoreVert-B8BfEIAW.js";import{S as n}from"./Language-DzjneQyA.js";import{F as c}from"./FieldBoolean-B0iEdS59.js";import{C as o}from"./Chip-D3cTWq9J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-DiM4oYUW.js";import"./Typography-BPRzLVGf.js";/* empty css              */import"./Checkbox-Bn6ssA40.js";const i="data:text/markdown;base64,Rm9ybSB2YWxpZGF0aW9uIG11c3QgYmUgbWFkZSBvbiB0aGUgRmllbGQgbGV2ZWwKUHJvcCBidXR0b25zIG9ubHkgc3VwcG9ydHMgYnV0dG9uIGNvbXBvbmVudHM=",k={title:"Components/Field/FieldBoolean",component:c,tags:["beta"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"},notes:{markdown:i}},argTypes:{buttons:{control:!1},chips:{control:!1}}},e={args:{label:"Title",chips:r.jsxs(r.Fragment,{children:[r.jsx(o,{color:"accent",label:"Required"}),r.jsx(o,{icon:r.jsx(n,{}),label:"Shared by all languages"})]}),buttons:r.jsx(s,{icon:r.jsx(t,{}),variant:"ghost"}),helper:"information",checkboxAttributes:{value:"checkbox",className:"test-class"}}},a={args:{...e.args,hasError:!0,errorMessage:"There is an error."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
