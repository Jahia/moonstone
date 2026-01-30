import{j as e,r as m}from"./iframe-DfAFgWzh.js";import{a,R as d}from"./RadioItem-Ahbqed79.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./RadioUnchecked-Dm_WeyUS.js";import"./Typography-DABikSPz.js";const R={title:"Components/RadioGroup",component:d,subcomponents:{RadioItem:a},parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0},componentSubtitle:"RadioGroup & RadioItem",actions:{argTypesRegex:"^on.*"}},argTypes:{children:{table:{disable:!0}}}},i=n=>e.jsxs(d,{...n,children:[e.jsx(a,{id:"cat",label:"Cat",description:"Miaouw",value:"cat"}),e.jsx(a,{id:"dog",label:"Dog",description:"Ouah-ouah",value:"dog"}),e.jsx(a,{isDisabled:!0,id:"horse",label:"Horse",description:"Disabled element",value:"horse"}),e.jsx(a,{id:"bird",label:"Bird without description",value:"bird"})]}),r={render:i,args:{name:"no-default-value"}},t={render:i,args:{name:"default-value",defaultValue:"dog"}},o={render:i,args:{name:"disabled",isDisabled:!0}},s={render:n=>{const[u,c]=m.useState("cat"),p=l=>{c(l.target.value)};return e.jsxs(d,{...n,name:"controlled",value:u,onChange:l=>p(l),children:[e.jsx(a,{id:"dog1",label:"Dog",description:"Ouah-ouah",value:"dog"}),e.jsx(a,{id:"cat",label:"Cat",description:"Miaow",value:"cat"}),e.jsx(a,{id:"fish",label:"Fish",description:"blop",value:"fish"})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'no-default-value'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'default-value',
    defaultValue: 'dog'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'disabled',
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const D=["NoDefaultValue","WithDefaultValue","Disabled","Controlled"];export{s as Controlled,o as Disabled,r as NoDefaultValue,t as WithDefaultValue,D as __namedExportsOrder,R as default};
