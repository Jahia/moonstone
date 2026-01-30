import{r as l,j as d}from"./iframe-nmEr806O.js";import{C as t}from"./Checkbox-BPXSe5sk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const u={title:"Components/Checkbox",component:t,parameters:{layout:"centered"}},e={args:{"aria-label":"default example checkbox"}},r={args:{indeterminate:!0,"aria-label":"indeterminate example checkbox"}},a={render:o=>{const[n,c]=l.useState(!1),s=()=>{c(!n)};return d.jsx(t,{checked:n,"aria-label":"controlled checkbox",onChange:()=>s(),...o})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'default example checkbox'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    'aria-label': 'indeterminate example checkbox'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
      setChecked(!checked);
    };
    return <Checkbox checked={checked} aria-label="controlled checkbox" onChange={() => handleOnChange()} {...args} />;
  }
}`,...a.parameters?.docs?.source}}};const x=["Uncontrolled","Indeterminate","Controlled"];export{a as Controlled,r as Indeterminate,e as Uncontrolled,x as __namedExportsOrder,u as default};
