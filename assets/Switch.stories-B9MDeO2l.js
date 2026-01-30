import{r as c,j as d}from"./iframe-BDgbDFAS.js";import{S as o}from"./Switch-AhAVK5Ga.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAccessibleClick-Bdvd2I0f.js";const u={title:"Components/Switch",component:o,parameters:{layout:"centered"},args:{"aria-label":"switch component"}},e={},r={render:n=>{const[t,s]=c.useState(!1),a=()=>{s(!t)};return d.jsx(o,{checked:t,onChange:()=>a(),...n})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
      setChecked(!checked);
    };
    return <Switch checked={checked} onChange={() => handleOnChange()} {...args} />;
  }
}`,...r.parameters?.docs?.source}}};const C=["Uncontrolled","Controlled"];export{r as Controlled,e as Uncontrolled,C as __namedExportsOrder,u as default};
