import{j as e}from"./iframe-BDgbDFAS.js";import{S as d}from"./Close-Bkx_JcY5.js";import{S as g}from"./FileImage-CvDYHdRE.js";import{S as u}from"./Lock-B-AqVaGA.js";import{S as h}from"./Love-CWJbedLS.js";import{C as p}from"./CardSelector-BXir-a0B.js";import{C as c}from"./Chip-DPXpcU9M.js";import{B as f}from"./Button-YqBLSdH5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FileBroken-qsLmyMJR.js";import"./Thumbnail-B6Hp3GKb.js";import"./Image-T9Q8aylz.js";import"./Typography-DVmD2Ujz.js";/* empty css               */import"./Loader-B4E4PcEp.js";const D={title:"Components/CardSelector",component:p,tags:["new"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"}}},a=l=>e.jsx("div",{style:{maxWidth:"100vw"},children:e.jsx(p,{...l})}),o={args:{id:"cardSelector",displayName:"Item name",systemName:"system name"},render:a},r={args:{...o.args,thumbnail:"https://picsum.photos/100/300",thumbnailAlt:"preview-img",thumbnailType:"preview",information:"more information",chips:[e.jsx(c,{label:"image",icon:e.jsx(g,{}),color:"accent"},"chip"),e.jsx(c,{label:"marked for deletion",icon:e.jsx(u,{}),color:"danger"},"chip2")]},render:a},s={args:{...r.args,thumbnail:"http://www.google.com/s2/favicons?domain=www.jahia.com",thumbnailType:"icon"},render:a},t={args:{...r.args,thumbnail:e.jsx(h,{id:"test",className:"test"}),thumbnailType:"icon"},render:a},n={args:{...r.args,cardAction:e.jsx(f,{variant:"ghost",icon:e.jsx(d,{})},"btn")},render:a},m={args:{...r.args,chips:null},render:a},i={args:{hasError:!0,errorMessage:"Broken reference"},render:a};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'cardSelector',
    displayName: 'Item name',
    systemName: 'system name'
  },
  render: Template
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thumbnail: 'https://picsum.photos/100/300',
    thumbnailAlt: 'preview-img',
    thumbnailType: 'preview',
    information: 'more information',
    chips: [<Chip key="chip" label="image" icon={<FileImage />} color="accent" />, <Chip key="chip2" label="marked for deletion" icon={<Lock />} color="danger" />]
  },
  render: Template
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    thumbnail: 'http://www.google.com/s2/favicons?domain=www.jahia.com',
    thumbnailType: 'icon'
  },
  render: Template
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    thumbnail: <Love id="test" className="test" />,
    thumbnailType: 'icon'
  },
  render: Template
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    cardAction: <Button key="btn" variant="ghost" icon={<Close />} />
  },
  render: Template
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    chips: null
  },
  render: Template
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    hasError: true,
    errorMessage: 'Broken reference'
  },
  render: Template
}`,...i.parameters?.docs?.source}}};const F=["Default","Image","Icon","IconComponent","Actions","NoChips","Error"];export{n as Actions,o as Default,i as Error,s as Icon,t as IconComponent,r as Image,m as NoChips,F as __namedExportsOrder,D as default};
