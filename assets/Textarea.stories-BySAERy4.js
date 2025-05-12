import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as m}from"./Textarea-2bhoM2A4.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const{useArgs:i}=__STORYBOOK_MODULE_PREVIEW_API__,A={title:"Components/Textarea",tags:["new"],component:m,decorators:[e=>a.jsx("div",{style:{width:"50vw"},children:a.jsx(e,{})})],parameters:{layout:"centered"},args:{placeholder:"Placeholder text"},argTypes:{onChange:{action:"onChange"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}},r={},o={render:e=>{const[,d]=i(),p=n=>{e.onChange(n),d({value:n.target.value})};return a.jsx(m,{value:"Default value",...e,onChange:p})}};var t,s,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,u,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [, setArgs] = useArgs();
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      args.onChange(e);
      setArgs({
        value: e.target.value
      });
    };
    return <Textarea value="Default value" {...args} onChange={onChange} />;
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const E=["Uncontrolled","Controlled"];export{o as Controlled,r as Uncontrolled,E as __namedExportsOrder,A as default};
