import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-G8LIXM5I.js";import{S as m}from"./Switch-vXlL8cVx.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./useAccessibleClick-Bdvd2I0f.js";const O={title:"Components/Switch",component:m,parameters:{layout:"centered"},args:{"aria-label":"switch component"}},e={},r={render:p=>{const[t,h]=u.useState(!1),i=()=>{h(!t)};return l.jsx(m,{checked:t,onChange:()=>i(),...p})}};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,c,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
      setChecked(!checked);
    };
    return <Switch checked={checked} onChange={() => handleOnChange()} {...args} />;
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const j=["Uncontrolled","Controlled"];export{r as Controlled,e as Uncontrolled,j as __namedExportsOrder,O as default};
