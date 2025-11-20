import{j as r}from"./iframe-1gg0_G19.js";import{S as s}from"./Language-livrnJMK.js";import{S as t}from"./MoreVert-D8L_Tj9n.js";import{F as n}from"./FieldBoolean-BKJ81W53.js";import{B as c}from"./Button-VaBqZ2i1.js";import{C as o}from"./Chip-D2isJbTx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";/* empty css              */import"./Checkbox-Ba_BrXlG.js";import"./Typography-BG5VXE0P.js";/* empty css               */import"./Loader-5StQsR8z.js";const i="data:text/markdown;base64,Rm9ybSB2YWxpZGF0aW9uIG11c3QgYmUgbWFkZSBvbiB0aGUgRmllbGQgbGV2ZWwKUHJvcCBidXR0b25zIG9ubHkgc3VwcG9ydHMgYnV0dG9uIGNvbXBvbmVudHM=",k={title:"Components/Field/FieldBoolean",component:n,tags:["beta"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"},notes:{markdown:i}},argTypes:{buttons:{control:!1},chips:{control:!1}}},e={args:{label:"Title",chips:r.jsxs(r.Fragment,{children:[r.jsx(o,{color:"accent",label:"Required"}),r.jsx(o,{icon:r.jsx(s,{}),label:"Shared by all languages"})]}),buttons:r.jsx(c,{icon:r.jsx(t,{}),variant:"ghost"}),helper:"information",checkboxAttributes:{value:"checkbox",className:"test-class"}}},a={args:{...e.args,hasError:!0,errorMessage:"There is an error."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
