import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-G8LIXM5I.js";import{R as a,a as d}from"./RadioItem-6poKw1B6.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./RadioUnchecked-DaPA0oal.js";import"./Typography-C8hU4Ja4.js";const _={title:"Components/RadioGroup",component:d,subcomponents:{RadioItem:a},parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0},componentSubtitle:"RadioGroup & RadioItem",actions:{argTypesRegex:"^on.*"}},argTypes:{children:{table:{disable:!0}}}},i=n=>e.jsxs(d,{...n,children:[e.jsx(a,{id:"cat",label:"Cat",description:"Miaouw",value:"cat"}),e.jsx(a,{id:"dog",label:"Dog",description:"Ouah-ouah",value:"dog"}),e.jsx(a,{isDisabled:!0,id:"horse",label:"Horse",description:"Disabled element",value:"horse"}),e.jsx(a,{id:"bird",label:"Bird without description",value:"bird"})]}),r={render:i,args:{name:"no-default-value"}},o={render:i,args:{name:"default-value",defaultValue:"dog"}},t={render:i,args:{name:"disabled",isDisabled:!0}},s={render:n=>{const[C,j]=S.useState("cat"),V=l=>{j(l.target.value)};return e.jsxs(d,{...n,name:"controlled",value:C,onChange:l=>V(l),children:[e.jsx(a,{id:"dog1",label:"Dog",description:"Ouah-ouah",value:"dog"}),e.jsx(a,{id:"cat",label:"Cat",description:"Miaow",value:"cat"}),e.jsx(a,{id:"fish",label:"Fish",description:"blop",value:"fish"})]})}};var u,c,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'no-default-value'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'default-value',
    defaultValue: 'dog'
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,v,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: 'disabled',
    isDisabled: true
  }
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,R,D;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(R=s.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const F=["NoDefaultValue","WithDefaultValue","Disabled","Controlled"];export{s as Controlled,t as Disabled,r as NoDefaultValue,o as WithDefaultValue,F as __namedExportsOrder,_ as default};
