import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-ST3FQwwi.js";import"./Typography-DCd6eyhk.js";import{n,t as r}from"./RadioItem-Bs23JUlM.js";import{t as i}from"./iframe-bp116kiQ.js";var a=e(t(),1),o=i(),s={title:`Components/RadioGroup`,component:n,subcomponents:{RadioItem:r},parameters:{layout:`centered`,knobs:{disable:!0},storysource:{disable:!0},componentSubtitle:`RadioGroup & RadioItem`,actions:{argTypesRegex:`^on.*`}},argTypes:{children:{table:{disable:!0}}}},c=e=>(0,o.jsxs)(n,{...e,children:[(0,o.jsx)(r,{id:`cat`,label:`Cat`,description:`Miaouw`,value:`cat`}),(0,o.jsx)(r,{id:`dog`,label:`Dog`,description:`Ouah-ouah`,value:`dog`}),(0,o.jsx)(r,{isDisabled:!0,id:`horse`,label:`Horse`,description:`Disabled element`,value:`horse`}),(0,o.jsx)(r,{id:`bird`,label:`Bird without description`,value:`bird`})]}),l={render:c,args:{name:`no-default-value`}},u={render:c,args:{name:`default-value`,defaultValue:`dog`}},d={render:c,args:{name:`disabled`,isDisabled:!0}},f={render:e=>{let[t,i]=(0,a.useState)(`cat`),s=e=>{i(e.target.value)};return(0,o.jsxs)(n,{...e,name:`controlled`,value:t,onChange:e=>s(e),children:[(0,o.jsx)(r,{id:`dog1`,label:`Dog`,description:`Ouah-ouah`,value:`dog`}),(0,o.jsx)(r,{id:`cat`,label:`Cat`,description:`Miaow`,value:`cat`}),(0,o.jsx)(r,{id:`fish`,label:`Fish`,description:`blop`,value:`fish`})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'no-default-value'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'default-value',
    defaultValue: 'dog'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'disabled',
    isDisabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('cat');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    return <RadioGroup {...args} name="controlled" value={value} onChange={event => handleChange(event)}>
                <RadioItem id="dog1" label="Dog" description="Ouah-ouah" value="dog" />
                <RadioItem id="cat" label="Cat" description="Miaow" value="cat" />
                <RadioItem id="fish" label="Fish" description="blop" value="fish" />
            </RadioGroup>;
  }
}`,...f.parameters?.docs?.source}}};var p=[`NoDefaultValue`,`WithDefaultValue`,`Disabled`,`Controlled`];export{f as Controlled,d as Disabled,l as NoDefaultValue,u as WithDefaultValue,p as __namedExportsOrder,s as default};