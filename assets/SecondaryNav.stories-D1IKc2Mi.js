import{j as e}from"./iframe-nmEr806O.js";import{S as d}from"./Love-CLraa00s.js";import{S as c,a as m}from"./SecondaryNavHeader-CcCwT2Ip.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ChevronDoubleRight-DNGZoafM.js";import"./ResizableBox-D96ZW0OG.js";import"./index-wNt6jANw.js";import"./index-DmZixt8r.js";import"./HandleResize-CSa55C8v.js";import"./Typography-DqVx_Ex2.js";const i="data:text/markdown;base64,",j={title:"Components/SecondaryNav",component:c,decorators:[t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:e.jsx(t,{})})],parameters:{notes:{markdown:i}}},n=t=>e.jsx(c,{...t,children:"My content here"}),r={render:n,args:{header:"Header here"}},a={render:n,args:{header:e.jsx(d,{size:"big"})}},o={render:n,args:{header:e.jsx(m,{children:"Secondary Header"})}},s={render:n,args:{header:e.jsx(m,{children:e.jsx(d,{size:"big"})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    header: 'Header here'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    header: <Love size="big" />
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    header: <SecondaryNavHeader>Secondary Header</SecondaryNavHeader>
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    header: <SecondaryNavHeader>
                <Love size="big" />
            </SecondaryNavHeader>
  }
}`,...s.parameters?.docs?.source}}};const N=["TextTitle","WithHeaderImage","WithTextInHeaderComponent","WithHeaderComponent"];export{r as TextTitle,s as WithHeaderComponent,a as WithHeaderImage,o as WithTextInHeaderComponent,N as __namedExportsOrder,j as default};
