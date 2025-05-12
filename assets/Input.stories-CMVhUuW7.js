import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{S as D}from"./Love-DCU5qIeU.js";import{I as f}from"./Input-DsgrsWfn.js";import"./index-yBjzXJbu.js";import"./SearchInput-B5d-1pc8.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./Button-PNeZ7oHi.js";/* empty css               */import"./Loader-DsiRlRl8.js";import"./Typography-C8hU4Ja4.js";import"./Search-DSeLwkIx.js";const{useArgs:E}=__STORYBOOK_MODULE_PREVIEW_API__,k={title:"Components/Input",component:f,decorators:[e=>n.jsx("div",{style:{width:"50vw"},children:n.jsx(e,{})})],parameters:{layout:"centered"},args:{placeholder:"Placeholder text"},argTypes:{onChange:{action:"onChange"},onClick:{action:"onClick"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}},r={},o={render:e=>{const[,_]=E(),x=s=>{e.onChange(s),_({value:s.target.value})};return n.jsx(f,{value:"Default value",...e,onChange:x})}},t={args:{icon:n.jsx(D,{})}},a={args:{defaultValue:"Default value"}};var c,u,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,i,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [, setArgs] = useArgs();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      args.onChange(e);
      setArgs({
        value: e.target.value
      });
    };
    return <Input value="Default value" {...args} onChange={onChange} />;
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,g,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    icon: <Love />
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,C,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Default value'
  }
}`,...(I=(C=a.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const w=["Uncontrolled","Controlled","InputWithIcon","InputWithDefaultValue"];export{o as Controlled,a as InputWithDefaultValue,t as InputWithIcon,r as Uncontrolled,w as __namedExportsOrder,k as default};
