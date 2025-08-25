import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-G8LIXM5I.js";import{S as b}from"./Apps-hI2F7AUr.js";import{a as l,T}from"./TabItem-28rXiCge.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./onArrowNavigation-DJ1kLiB7.js";import"./Typography-B9xY8qhe.js";const j="data:text/markdown;base64,IyMgVGFiCgpUaGlzIGlzIHRhYiBjb21wb25lbnQgCgojIyMgRmlnbWEKTm90IGF2YWlsYWJsZQoKIyMjIEV4YW1wbGVzCgpgYGBqc3gKCjxUYWI+CiAgICA8VGFiSXRlbSAvPgogICAgPFRhYkl0ZW0gLz4KICAgIDxUYWJJdGVtIC8+CiAgICA8VGFiSXRlbSAvPgo8L1RhYj4KYGBgCg==",W={title:"Components/Tab",component:T,subcomponents:{TabItem:l},parameters:{layout:"centered",notes:{markdown:j}}},r={render:t=>{const[a,c]=d.useState("Tab 1"),s=i=>{c(i)};return e.jsxs(T,{...t,children:[e.jsx(l,{isSelected:a==="Tab 1",icon:e.jsx(b,{}),label:"Tab 1",onClick:()=>{s("Tab 1")}}),e.jsx(l,{isSelected:a==="Tab 2",icon:e.jsx(b,{}),label:"Tab 2",onClick:()=>{s("Tab 2")}}),e.jsx(l,{isDisabled:!0,isSelected:a==="Tab 3",icon:e.jsx(b,{}),label:"Tab 3",onClick:()=>{s("Tab 3")}})]})}},o={render:t=>{const[a,c]=d.useState("Tab 1"),s=i=>{c(i)};return e.jsxs(T,{style:{backgroundColor:"#333",padding:"20px"},...t,children:[e.jsx(l,{isReversed:!0,isSelected:a==="Tab 1",icon:e.jsx(b,{}),label:"Tab 1",onClick:()=>{s("Tab 1")}}),e.jsx(l,{isReversed:!0,isSelected:a==="Tab 2",icon:e.jsx(b,{}),label:"Tab 2",onClick:()=>{s("Tab 2")}}),e.jsx(l,{isReversed:!0,isDisabled:!0,isSelected:a==="Tab 3",icon:e.jsx(b,{}),label:"Tab 3",onClick:()=>{s("Tab 3")}})]})}},n={render:t=>{const[a,c]=d.useState("Tab 1"),s=i=>{c(i)};return e.jsxs(T,{...t,children:[e.jsx(l,{isSelected:a==="Tab 1",icon:e.jsx(b,{}),size:"big",label:"Tab 1",onClick:()=>{s("Tab 1")}}),e.jsx(l,{isSelected:a==="Tab 2",icon:e.jsx(b,{}),size:"big",label:"Tab 2",onClick:()=>{s("Tab 2")}}),e.jsx(l,{isDisabled:!0,isSelected:a==="Tab 3",icon:e.jsx(b,{}),size:"big",label:"Tab 3",onClick:()=>{s("Tab 3")}})]})}};var m,p,C;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(C=(p=r.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var I,S,g;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var k,u,x;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const y=["_Tab","Reversed","SizeBig"];export{o as Reversed,n as SizeBig,r as _Tab,y as __namedExportsOrder,W as default};
