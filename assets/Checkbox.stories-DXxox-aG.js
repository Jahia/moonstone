import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-0pPUpMBg.js";import{t as r}from"./jsx-runtime-DTRofVPE.js";import{Nt as i,i as a}from"./icons-U8xZOogm.js";var o,s,c,l,u,d,f;t((()=>{o=e(n(),1),a(),s=r(),c={title:`Components/Checkbox`,component:i,parameters:{layout:`centered`}},l={args:{"aria-label":`default example checkbox`}},u={args:{indeterminate:!0,"aria-label":`indeterminate example checkbox`}},d={render:e=>{let[t,n]=(0,o.useState)(!1),r=()=>{n(!t)};return(0,s.jsx)(i,{checked:t,"aria-label":`controlled checkbox`,onChange:()=>r(),...e})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'default example checkbox'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    'aria-label': 'indeterminate example checkbox'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
      setChecked(!checked);
    };
    return <Checkbox checked={checked} aria-label="controlled checkbox" onChange={() => handleOnChange()} {...args} />;
  }
}`,...d.parameters?.docs?.source}}},f=[`Uncontrolled`,`Indeterminate`,`Controlled`]}))();export{d as Controlled,u as Indeterminate,l as Uncontrolled,f as __namedExportsOrder,c as default};