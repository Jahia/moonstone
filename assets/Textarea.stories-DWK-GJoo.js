import{j as n}from"./iframe-BDgbDFAS.js";import{T as t}from"./Textarea-DENAbQ6U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,p={title:"Components/Textarea",tags:["new"],component:t,decorators:[e=>n.jsx("div",{style:{width:"50vw"},children:n.jsx(e,{})})],parameters:{layout:"centered"},args:{placeholder:"Placeholder text"},argTypes:{onChange:{action:"onChange"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}},r={},a={render:e=>{const[,s]=l(),c=o=>{e.onChange(o),s({value:o.target.value})};return n.jsx(t,{value:"Default value",...e,onChange:c})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const i=["Uncontrolled","Controlled"];export{a as Controlled,r as Uncontrolled,i as __namedExportsOrder,p as default};
