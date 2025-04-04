import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-G8LIXM5I.js";import{S as m}from"./Switch-BJ4eHner.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const w={title:"Components/Switch",component:m,parameters:{layout:"centered"}},e={},r={render:p=>{const[t,h]=u.useState(!1),l=()=>{h(!t)};return i.jsx(m,{checked:t,onChange:()=>l(),...p})}};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,c,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
      setChecked(!checked);
    };
    return <Switch checked={checked} onChange={() => handleOnChange()} {...args} />;
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const O=["Uncontrolled","Controlled"];export{r as Controlled,e as Uncontrolled,O as __namedExportsOrder,w as default};
