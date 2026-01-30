import{j as e}from"./iframe-BDgbDFAS.js";import{P as o}from"./PrimaryNavItem-CQ2eDk0L.js";import{S as s}from"./Edit-B2dE0MGD.js";import{P as t}from"./PrimaryNavItemsGroup-Bs9Qvh6l.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PrimaryNav.context-DjQWDj6i.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Typography-DVmD2Ujz.js";import"./Separator-CCPuEeLb.js";const l="data:text/markdown;base64,IyMgR29hbHM6Ckdyb3VwIG5hdmlnYXRpb24gaXRlbSB0b2dldGhlciwgdGhpcyBjb21wb25lbnQgaXMgb25seSB1c2UgdG8gYnVpbGQgdGhlIG1haW4gbmF2aWdhdGlvbiAobGV2ZWwgMSkuCgojIyBTcGVjaWZpY2F0aW9uczoKUHJvdmlkZSBhIHByb3AgdG8ga25vdyBpZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIHdoZW4gdGhlIG1haW4gbmF2aWdhdGlvbiBpcyBjb2xsYXBzZWQK",v={title:"Components/PrimaryNavItemsGroup",component:t,parameters:{notes:{markdown:l},layout:"fullscreen"},decorators:[d=>e.jsx("div",{style:{backgroundColor:"#131c21",width:"18.75rem",height:"100vh"},children:e.jsx(d,{})})]},a={render:()=>e.jsxs(t,{children:[e.jsx(o,{icon:e.jsx(s,{}),label:"NavItem not selected (default)"}),e.jsx(o,{icon:e.jsx(s,{}),label:"NavItem"})]})},r={render:()=>e.jsxs(t,{isDisplayedWhenCollapsed:!1,children:[e.jsx(o,{icon:e.jsx(s,{}),label:"Hidden when collapsed"}),e.jsx(o,{icon:e.jsx(s,{}),label:"Hidden when collapsed too"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <PrimaryNavItemsGroup>
            <PrimaryNavItem icon={<Edit />} label="NavItem not selected (default)" />
            <PrimaryNavItem icon={<Edit />} label="NavItem" />
        </PrimaryNavItemsGroup>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>
            <PrimaryNavItem icon={<Edit />} label="Hidden when collapsed" />
            <PrimaryNavItem icon={<Edit />} label="Hidden when collapsed too" />
        </PrimaryNavItemsGroup>
}`,...r.parameters?.docs?.source}}};const I=["Default","CollapsedGroup"];export{r as CollapsedGroup,a as Default,I as __namedExportsOrder,v as default};
