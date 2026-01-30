import{r as d,j as e}from"./iframe-DnEO7nHG.js";import{S as b}from"./Apps-EvUO1NGC.js";import{a as l,T}from"./TabItem-CTO5FU_c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./onArrowNavigation-CltwoEwZ.js";import"./Typography-BPRzLVGf.js";const m="data:text/markdown;base64,IyMgVGFiCgpUaGlzIGlzIHRhYiBjb21wb25lbnQgCgojIyMgRmlnbWEKTm90IGF2YWlsYWJsZQoKIyMjIEV4YW1wbGVzCgpgYGBqc3gKCjxUYWI+CiAgICA8VGFiSXRlbSAvPgogICAgPFRhYkl0ZW0gLz4KICAgIDxUYWJJdGVtIC8+CiAgICA8VGFiSXRlbSAvPgo8L1RhYj4KYGBgCg==",x={title:"Components/Tab",component:T,subcomponents:{TabItem:l},parameters:{layout:"centered",notes:{markdown:m}}},r={render:t=>{const[a,c]=d.useState("Tab 1"),s=i=>{c(i)};return e.jsxs(T,{...t,children:[e.jsx(l,{isSelected:a==="Tab 1",icon:e.jsx(b,{}),label:"Tab 1",onClick:()=>{s("Tab 1")}}),e.jsx(l,{isSelected:a==="Tab 2",icon:e.jsx(b,{}),label:"Tab 2",onClick:()=>{s("Tab 2")}}),e.jsx(l,{isDisabled:!0,isSelected:a==="Tab 3",icon:e.jsx(b,{}),label:"Tab 3",onClick:()=>{s("Tab 3")}})]})}},o={render:t=>{const[a,c]=d.useState("Tab 1"),s=i=>{c(i)};return e.jsxs(T,{style:{backgroundColor:"#333",padding:"20px"},...t,children:[e.jsx(l,{isReversed:!0,isSelected:a==="Tab 1",icon:e.jsx(b,{}),label:"Tab 1",onClick:()=>{s("Tab 1")}}),e.jsx(l,{isReversed:!0,isSelected:a==="Tab 2",icon:e.jsx(b,{}),label:"Tab 2",onClick:()=>{s("Tab 2")}}),e.jsx(l,{isReversed:!0,isDisabled:!0,isSelected:a==="Tab 3",icon:e.jsx(b,{}),label:"Tab 3",onClick:()=>{s("Tab 3")}})]})}},n={render:t=>{const[a,c]=d.useState("Tab 1"),s=i=>{c(i)};return e.jsxs(T,{...t,children:[e.jsx(l,{isSelected:a==="Tab 1",icon:e.jsx(b,{}),size:"big",label:"Tab 1",onClick:()=>{s("Tab 1")}}),e.jsx(l,{isSelected:a==="Tab 2",icon:e.jsx(b,{}),size:"big",label:"Tab 2",onClick:()=>{s("Tab 2")}}),e.jsx(l,{isDisabled:!0,isSelected:a==="Tab 3",icon:e.jsx(b,{}),size:"big",label:"Tab 3",onClick:()=>{s("Tab 3")}})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedTabItemLabel, setSelectedTabItemLabel] = useState('Tab 1');
    const handleClick = (label: string) => {
      setSelectedTabItemLabel(label);
    };
    return <Tab {...args}>
                <TabItem isSelected={selectedTabItemLabel === 'Tab 1'} icon={<Apps />} label="Tab 1" onClick={() => {
        handleClick('Tab 1');
      }} />
                <TabItem isSelected={selectedTabItemLabel === 'Tab 2'} icon={<Apps />} label="Tab 2" onClick={() => {
        handleClick('Tab 2');
      }} />
                <TabItem isDisabled isSelected={selectedTabItemLabel === 'Tab 3'} icon={<Apps />} label="Tab 3" onClick={() => {
        handleClick('Tab 3');
      }} />
            </Tab>;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedTabItemLabel, setSelectedTabItemLabel] = useState('Tab 1');
    const handleClick = (label: string) => {
      setSelectedTabItemLabel(label);
    };
    return <Tab style={{
      backgroundColor: '#333',
      padding: '20px'
    }} {...args}>
                <TabItem isReversed isSelected={selectedTabItemLabel === 'Tab 1'} icon={<Apps />} label="Tab 1" onClick={() => {
        handleClick('Tab 1');
      }} />
                <TabItem isReversed isSelected={selectedTabItemLabel === 'Tab 2'} icon={<Apps />} label="Tab 2" onClick={() => {
        handleClick('Tab 2');
      }} />
                <TabItem isReversed isDisabled isSelected={selectedTabItemLabel === 'Tab 3'} icon={<Apps />} label="Tab 3" onClick={() => {
        handleClick('Tab 3');
      }} />
            </Tab>;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedTabItemLabel, setSelectedTabItemLabel] = useState('Tab 1');
    const handleClick = (label: string) => {
      setSelectedTabItemLabel(label);
    };
    return <Tab {...args}>
                <TabItem isSelected={selectedTabItemLabel === 'Tab 1'} icon={<Apps />} size="big" label="Tab 1" onClick={() => {
        handleClick('Tab 1');
      }} />
                <TabItem isSelected={selectedTabItemLabel === 'Tab 2'} icon={<Apps />} size="big" label="Tab 2" onClick={() => {
        handleClick('Tab 2');
      }} />
                <TabItem isDisabled isSelected={selectedTabItemLabel === 'Tab 3'} icon={<Apps />} size="big" label="Tab 3" onClick={() => {
        handleClick('Tab 3');
      }} />
            </Tab>;
  }
}`,...n.parameters?.docs?.source}}};const j=["_Tab","Reversed","SizeBig"];export{o as Reversed,n as SizeBig,r as _Tab,j as __namedExportsOrder,x as default};
