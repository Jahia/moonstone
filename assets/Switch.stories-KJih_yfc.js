import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{s as n}from"./iframe-Tkd4yE75.js";import{t as r}from"./jsx-runtime-_12HUoMu.js";import{n as i,t as a}from"./Switch-DmIX_UaT.js";var o,s,c,l,u,d;t((()=>{o=e(n(),1),a(),s=r(),c={title:`Components/Switch`,component:i,parameters:{layout:`centered`},args:{"aria-label":`switch component`}},l={},u={render:e=>{let[t,n]=(0,o.useState)(!1),r=()=>{n(!t)};return(0,s.jsx)(i,{checked:t,onChange:()=>r(),...e})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
      setChecked(!checked);
    };
    return <Switch checked={checked} onChange={() => handleOnChange()} {...args} />;
  }
}`,...u.parameters?.docs?.source}}},d=[`Uncontrolled`,`Controlled`]}))();export{u as Controlled,l as Uncontrolled,d as __namedExportsOrder,c as default};