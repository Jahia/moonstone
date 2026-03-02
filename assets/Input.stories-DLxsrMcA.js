import{j as n}from"./iframe-CwlF9BO-.js";import{S as p}from"./Love-CYgHB_0o.js";import{I as c}from"./Input-BfPQ3Gln.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchInput-BzARVd1Z.js";import"./Search-B-GGzfBc.js";import"./BaseInput-mY2-4bzD.js";import"./clsx-B-dksMZM.js";import"./Cancel-CuJnQdSs.js";import"./Button-DhalN_fv.js";/* empty css               */import"./Loader-B4fWLWvi.js";import"./Typography-dTVHgYTN.js";const{useArgs:i}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Components/Input",component:c,decorators:[e=>n.jsx("div",{style:{width:"50vw"},children:n.jsx(e,{})})],parameters:{layout:"centered"},args:{placeholder:"Placeholder text"},argTypes:{onChange:{action:"onChange"},onClick:{action:"onClick"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}},r={},o={render:e=>{const[,u]=i(),l=s=>{e.onChange(s),u({value:s.target.value})};return n.jsx(c,{value:"Default value",...e,onChange:l})}},t={args:{icon:n.jsx(p,{})}},a={args:{defaultValue:"Default value"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
