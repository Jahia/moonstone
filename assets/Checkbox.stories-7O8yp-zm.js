import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-ST3FQwwi.js";import{t as n}from"./Checkbox-Bvr03PW0.js";import{t as r}from"./iframe-bp116kiQ.js";var i=e(t(),1),a=r(),o={title:`Components/Checkbox`,component:n,parameters:{layout:`centered`}},s={args:{"aria-label":`default example checkbox`}},c={args:{indeterminate:!0,"aria-label":`indeterminate example checkbox`}},l={render:e=>{let[t,r]=(0,i.useState)(!1),o=()=>{r(!t)};return(0,a.jsx)(n,{checked:t,"aria-label":`controlled checkbox`,onChange:()=>o(),...e})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'default example checkbox'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    'aria-label': 'indeterminate example checkbox'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
      setChecked(!checked);
    };
    return <Checkbox checked={checked} aria-label="controlled checkbox" onChange={() => handleOnChange()} {...args} />;
  }
}`,...l.parameters?.docs?.source}}};var u=[`Uncontrolled`,`Indeterminate`,`Controlled`];export{l as Controlled,c as Indeterminate,s as Uncontrolled,u as __namedExportsOrder,o as default};