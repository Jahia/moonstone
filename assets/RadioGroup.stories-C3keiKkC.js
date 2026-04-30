import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BVsvMGH4.js";import{t as r}from"./jsx-runtime-B6JWlyvB.js";import{D as i,E as a,O as o,k as s}from"./icons-Dxh7SjmP.js";var c,l,u,d,f,p,m,h,g;t((()=>{c=e(n(),1),o(),a(),l=r(),u={title:`Components/RadioGroup`,component:s,subcomponents:{RadioItem:i},parameters:{layout:`centered`,knobs:{disable:!0},storysource:{disable:!0},componentSubtitle:`RadioGroup & RadioItem`,actions:{argTypesRegex:`^on.*`}},argTypes:{children:{table:{disable:!0}}}},d=e=>(0,l.jsxs)(s,{...e,children:[(0,l.jsx)(i,{id:`cat`,label:`Cat`,description:`Miaouw`,value:`cat`}),(0,l.jsx)(i,{id:`dog`,label:`Dog`,description:`Ouah-ouah`,value:`dog`}),(0,l.jsx)(i,{isDisabled:!0,id:`horse`,label:`Horse`,description:`Disabled element`,value:`horse`}),(0,l.jsx)(i,{id:`bird`,label:`Bird without description`,value:`bird`})]}),f={render:d,args:{name:`no-default-value`}},p={render:d,args:{name:`default-value`,defaultValue:`dog`}},m={render:d,args:{name:`disabled`,isDisabled:!0}},h={render:e=>{let[t,n]=(0,c.useState)(`cat`),r=e=>{n(e.target.value)};return(0,l.jsxs)(s,{...e,name:`controlled`,value:t,onChange:e=>r(e),children:[(0,l.jsx)(i,{id:`dog1`,label:`Dog`,description:`Ouah-ouah`,value:`dog`}),(0,l.jsx)(i,{id:`cat`,label:`Cat`,description:`Miaow`,value:`cat`}),(0,l.jsx)(i,{id:`fish`,label:`Fish`,description:`blop`,value:`fish`})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'no-default-value'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'default-value',
    defaultValue: 'dog'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'disabled',
    isDisabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`NoDefaultValue`,`WithDefaultValue`,`Disabled`,`Controlled`]}))();export{h as Controlled,m as Disabled,f as NoDefaultValue,p as WithDefaultValue,g as __namedExportsOrder,u as default};