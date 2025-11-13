import{j as n}from"./iframe-CPFqXHqg.js";import{S as p}from"./Love-BlQxG1sc.js";import{I as c}from"./Input-By3knYVB.js";import"./preload-helper-D9Z9MdNV.js";import"./SearchInput-Bqihs9o-.js";import"./Search-CsEjMOYB.js";import"./BaseInput-BcRLtJ5C.js";import"./clsx-B-dksMZM.js";import"./Cancel-CKfLfZ8p.js";import"./Button-CqY4gqRm.js";/* empty css               */import"./Loader-B35AnWXU.js";import"./Typography-RAjipybU.js";const{useArgs:i}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Components/Input",component:c,decorators:[e=>n.jsx("div",{style:{width:"50vw"},children:n.jsx(e,{})})],parameters:{layout:"centered"},args:{placeholder:"Placeholder text"},argTypes:{onChange:{action:"onChange"},onClick:{action:"onClick"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}},r={},o={render:e=>{const[,u]=i(),l=s=>{e.onChange(s),u({value:s.target.value})};return n.jsx(c,{value:"Default value",...e,onChange:l})}},t={args:{icon:n.jsx(p,{})}},a={args:{defaultValue:"Default value"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Love />
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Default value'
  }
}`,...a.parameters?.docs?.source}}};const A=["Uncontrolled","Controlled","InputWithIcon","InputWithDefaultValue"];export{o as Controlled,a as InputWithDefaultValue,t as InputWithIcon,r as Uncontrolled,A as __namedExportsOrder,j as default};
