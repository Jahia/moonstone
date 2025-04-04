import{j as C}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-G8LIXM5I.js";import{C as h}from"./Checkbox-Dny7fOLj.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const _={title:"Components/Checkbox",component:h,parameters:{layout:"centered"}},e={args:{"aria-label":"default example checkbox"}},r={args:{indeterminate:!0,"aria-label":"indeterminate example checkbox"}},a={render:u=>{const[n,x]=g.useState(!1),k=()=>{x(!n)};return C.jsx(h,{checked:n,onChange:()=>k(),...u})}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    'aria-label': 'default example checkbox'
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    'aria-label': 'indeterminate example checkbox'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,i,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
      setChecked(!checked);
    };
    return <Checkbox checked={checked} onChange={() => handleOnChange()} {...args} />;
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const I=["Uncontrolled","Indeterminate","Controlled"];export{a as Controlled,r as Indeterminate,e as Uncontrolled,I as __namedExportsOrder,_ as default};
