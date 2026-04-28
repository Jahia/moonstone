import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-NXnqfGAA.js";import{t as r}from"./jsx-runtime-Df_OrLWO.js";import{_ as i,b as a,t as o,v as s,y as c}from"./icons-ZZa_JA4E.js";import{dt as l}from"./Thumbnail-EuXPFDQ3.js";var u,d=t((()=>{u=`data:text/markdown;base64,IyMgVGFiCgpUaGlzIGlzIHRhYiBjb21wb25lbnQgCgojIyMgRmlnbWEKTm90IGF2YWlsYWJsZQoKIyMjIEV4YW1wbGVzCgpgYGBqc3gKCjxUYWI+CiAgICA8VGFiSXRlbSAvPgogICAgPFRhYkl0ZW0gLz4KICAgIDxUYWJJdGVtIC8+CiAgICA8VGFiSXRlbSAvPgo8L1RhYj4KYGBgCg==`})),f,p,m,h,g,_,v;t((()=>{f=e(n(),1),c(),i(),o(),d(),p=r(),m={title:`Components/Tab`,component:a,subcomponents:{TabItem:s},parameters:{layout:`centered`,notes:{markdown:u}}},h={render:e=>{let[t,n]=(0,f.useState)(`Tab 1`),r=e=>{n(e)};return(0,p.jsxs)(a,{...e,children:[(0,p.jsx)(s,{isSelected:t===`Tab 1`,icon:(0,p.jsx)(l,{}),label:`Tab 1`,onClick:()=>{r(`Tab 1`)}}),(0,p.jsx)(s,{isSelected:t===`Tab 2`,icon:(0,p.jsx)(l,{}),label:`Tab 2`,onClick:()=>{r(`Tab 2`)}}),(0,p.jsx)(s,{isDisabled:!0,isSelected:t===`Tab 3`,icon:(0,p.jsx)(l,{}),label:`Tab 3`,onClick:()=>{r(`Tab 3`)}})]})}},g={render:e=>{let[t,n]=(0,f.useState)(`Tab 1`),r=e=>{n(e)};return(0,p.jsxs)(a,{style:{backgroundColor:`#333`,padding:`20px`},...e,children:[(0,p.jsx)(s,{isReversed:!0,isSelected:t===`Tab 1`,icon:(0,p.jsx)(l,{}),label:`Tab 1`,onClick:()=>{r(`Tab 1`)}}),(0,p.jsx)(s,{isReversed:!0,isSelected:t===`Tab 2`,icon:(0,p.jsx)(l,{}),label:`Tab 2`,onClick:()=>{r(`Tab 2`)}}),(0,p.jsx)(s,{isReversed:!0,isDisabled:!0,isSelected:t===`Tab 3`,icon:(0,p.jsx)(l,{}),label:`Tab 3`,onClick:()=>{r(`Tab 3`)}})]})}},_={render:e=>{let[t,n]=(0,f.useState)(`Tab 1`),r=e=>{n(e)};return(0,p.jsxs)(a,{...e,children:[(0,p.jsx)(s,{isSelected:t===`Tab 1`,icon:(0,p.jsx)(l,{}),size:`big`,label:`Tab 1`,onClick:()=>{r(`Tab 1`)}}),(0,p.jsx)(s,{isSelected:t===`Tab 2`,icon:(0,p.jsx)(l,{}),size:`big`,label:`Tab 2`,onClick:()=>{r(`Tab 2`)}}),(0,p.jsx)(s,{isDisabled:!0,isSelected:t===`Tab 3`,icon:(0,p.jsx)(l,{}),size:`big`,label:`Tab 3`,onClick:()=>{r(`Tab 3`)}})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`_Tab`,`Reversed`,`SizeBig`]}))();export{g as Reversed,_ as SizeBig,h as _Tab,v as __namedExportsOrder,m as default};