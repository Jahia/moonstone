import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-ST3FQwwi.js";import{t as n}from"./Apps-BzhS79FC.js";import"./Typography-Dg3n0h1h.js";import{n as r,t as i}from"./TabItem-BCbXHLqh.js";import{t as a}from"./iframe-ltAEr0iU.js";var o=e(t(),1),s=`data:text/markdown;base64,IyMgVGFiCgpUaGlzIGlzIHRhYiBjb21wb25lbnQgCgojIyMgRmlnbWEKTm90IGF2YWlsYWJsZQoKIyMjIEV4YW1wbGVzCgpgYGBqc3gKCjxUYWI+CiAgICA8VGFiSXRlbSAvPgogICAgPFRhYkl0ZW0gLz4KICAgIDxUYWJJdGVtIC8+CiAgICA8VGFiSXRlbSAvPgo8L1RhYj4KYGBgCg==`,c=a(),l={title:`Components/Tab`,component:r,subcomponents:{TabItem:i},parameters:{layout:`centered`,notes:{markdown:s}}},u={render:e=>{let[t,a]=(0,o.useState)(`Tab 1`),s=e=>{a(e)};return(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(i,{isSelected:t===`Tab 1`,icon:(0,c.jsx)(n,{}),label:`Tab 1`,onClick:()=>{s(`Tab 1`)}}),(0,c.jsx)(i,{isSelected:t===`Tab 2`,icon:(0,c.jsx)(n,{}),label:`Tab 2`,onClick:()=>{s(`Tab 2`)}}),(0,c.jsx)(i,{isDisabled:!0,isSelected:t===`Tab 3`,icon:(0,c.jsx)(n,{}),label:`Tab 3`,onClick:()=>{s(`Tab 3`)}})]})}},d={render:e=>{let[t,a]=(0,o.useState)(`Tab 1`),s=e=>{a(e)};return(0,c.jsxs)(r,{style:{backgroundColor:`#333`,padding:`20px`},...e,children:[(0,c.jsx)(i,{isReversed:!0,isSelected:t===`Tab 1`,icon:(0,c.jsx)(n,{}),label:`Tab 1`,onClick:()=>{s(`Tab 1`)}}),(0,c.jsx)(i,{isReversed:!0,isSelected:t===`Tab 2`,icon:(0,c.jsx)(n,{}),label:`Tab 2`,onClick:()=>{s(`Tab 2`)}}),(0,c.jsx)(i,{isReversed:!0,isDisabled:!0,isSelected:t===`Tab 3`,icon:(0,c.jsx)(n,{}),label:`Tab 3`,onClick:()=>{s(`Tab 3`)}})]})}},f={render:e=>{let[t,a]=(0,o.useState)(`Tab 1`),s=e=>{a(e)};return(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(i,{isSelected:t===`Tab 1`,icon:(0,c.jsx)(n,{}),size:`big`,label:`Tab 1`,onClick:()=>{s(`Tab 1`)}}),(0,c.jsx)(i,{isSelected:t===`Tab 2`,icon:(0,c.jsx)(n,{}),size:`big`,label:`Tab 2`,onClick:()=>{s(`Tab 2`)}}),(0,c.jsx)(i,{isDisabled:!0,isSelected:t===`Tab 3`,icon:(0,c.jsx)(n,{}),size:`big`,label:`Tab 3`,onClick:()=>{s(`Tab 3`)}})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};var p=[`_Tab`,`Reversed`,`SizeBig`];export{d as Reversed,f as SizeBig,u as _Tab,p as __namedExportsOrder,l as default};