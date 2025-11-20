import{j as e}from"./iframe-1gg0_G19.js";import{P as t}from"./PrimaryNavItem-CdJ_5nLG.js";import{S as l}from"./Edit-aJvRAxmI.js";import{S as s}from"./Person-CM_XEs8Y.js";import{a as o,S as r}from"./Workflow-k_KZ4mDN.js";import{B as i}from"./Badge-Drbh_aHq.js";import{B as m}from"./Button-VaBqZ2i1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PrimaryNav.context-D61e3bNX.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Typography-BG5VXE0P.js";/* empty css               */import"./Loader-5StQsR8z.js";const n="data:text/markdown;base64,VGhpcyBjb21wb25lbnQgaXMgb25seSB1c2VkIHRvIGJ1aWxkIHRoZSBuYXZpZ2F0aW9uLgoKIyMgU3BlY2lmaWNhdGlvbnM6CgpXaGVuIGBOYXZpZ2F0aW9uLXByaW1hcnlgIGlzIGNvbGxhcHNlZCBvbmx5IGljb24gc2hvdWxkIGJlIGRpc3BsYXksIGJ1dCBuYXZpZ2F0aW9uX2l0ZW0ncyBsYWJlbCBtdXN0IGJlIGRpc3BsYXkgb24gaG92ZXIgd2l0aCBhIHRvb2x0aXAgZnJvbSB0aGUgZGVmYXVsdCB0aXRsZSBhdHRyaWJ1dGUuCgpPbmx5IG9uZSBpdGVtIGNhbiBiZSBzZWxlY3RlZCBieSBuYXZpZ2F0aW9uIGF0IG9uY2UuCgpBbiBlbGVtZW50IHNlbGVjdGVkIGNhbm5vdCBiZSBjbGlja2FibGUKCkZpZ21hIExpbmsgOiBodHRwczovL3d3dy5maWdtYS5jb20vZmlsZS85MzliVzc0QzNUTFc1VkF6SzIzdW94L21vb25zdG9uZS1jb21wb25lbnRzP25vZGUtaWQ9NiUzQTAK",N={title:"Components/PrimaryNavItem",component:t,parameters:{componentSubtitle:"PrimaryNavItem",notes:{markdown:n}}},a={render:()=>e.jsxs("ul",{style:{display:"flex",flexDirection:"column",backgroundColor:"#131c21",width:"18.75rem",height:"100vh"},children:[e.jsx(t,{icon:e.jsx(l,{}),label:"NavItem not selected (default)"}),e.jsx(t,{isSelected:!0,icon:e.jsx(l,{}),label:"NavItem Selected"}),e.jsx(t,{isSelected:!1,icon:e.jsx(o,{}),label:"Another NavItem",badge:e.jsx(i,{label:"9"})}),e.jsx(t,{isSelected:!1,icon:e.jsx(s,{}),label:"My profile",subtitle:"username as a subtitle"}),e.jsx(t,{isSelected:!1,icon:e.jsx(s,{}),label:"My profile",subtitle:"username as a subtitle",button:e.jsx(m,{isReversed:!0,icon:e.jsx(r,{}),label:"Sign Out",variant:"ghost",onClick:()=>null})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <ul style={{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#131c21',
    width: '18.75rem',
    height: '100vh'
  }}>
        <PrimaryNavItem icon={<Edit />} label="NavItem not selected (default)" />
        <PrimaryNavItem isSelected icon={<Edit />} label="NavItem Selected" />
        <PrimaryNavItem isSelected={false} icon={<Workflow />} label="Another NavItem" badge={<Badge label="9" />} />
        <PrimaryNavItem isSelected={false} icon={<Person />} label="My profile" subtitle="username as a subtitle" />
        <PrimaryNavItem isSelected={false} icon={<Person />} label="My profile" subtitle="username as a subtitle" button={<Button isReversed icon={<Power />} label="Sign Out" variant="ghost" onClick={() => null} />} />
    </ul>
}`,...a.parameters?.docs?.source}}};const h=["Default"];export{a as Default,h as __namedExportsOrder,N as default};
