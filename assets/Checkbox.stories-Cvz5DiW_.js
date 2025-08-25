import{j as b}from"./jsx-runtime-Cf8x2fCZ.js";import{r as C}from"./index-G8LIXM5I.js";import{C as h}from"./Checkbox-6NbUHW55.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const _={title:"Components/Checkbox",component:h,parameters:{layout:"centered"}},e={args:{"aria-label":"default example checkbox"}},r={args:{indeterminate:!0,"aria-label":"indeterminate example checkbox"}},a={render:u=>{const[n,x]=C.useState(!1),k=()=>{x(!n)};return b.jsx(h,{checked:n,"aria-label":"controlled checkbox",onChange:()=>k(),...u})}};var o,t,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    'aria-label': 'default example checkbox'
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var s,l,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    'aria-label': 'indeterminate example checkbox'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,i,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
      setChecked(!checked);
    };
    return <Checkbox checked={checked} aria-label="controlled checkbox" onChange={() => handleOnChange()} {...args} />;
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const I=["Uncontrolled","Indeterminate","Controlled"];export{a as Controlled,r as Indeterminate,e as Uncontrolled,I as __namedExportsOrder,_ as default};
