import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-ST3FQwwi.js";import{t as n}from"./Switch-ye1NHRUD.js";import{t as r}from"./iframe-BCv1I7TQ.js";var i=e(t(),1),a=r(),o={title:`Components/Switch`,component:n,parameters:{layout:`centered`},args:{"aria-label":`switch component`}},s={},c={render:e=>{let[t,r]=(0,i.useState)(!1),o=()=>{r(!t)};return(0,a.jsx)(n,{checked:t,onChange:()=>o(),...e})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
      setChecked(!checked);
    };
    return <Switch checked={checked} onChange={() => handleOnChange()} {...args} />;
  }
}`,...c.parameters?.docs?.source}}};var l=[`Uncontrolled`,`Controlled`];export{c as Controlled,s as Uncontrolled,l as __namedExportsOrder,o as default};