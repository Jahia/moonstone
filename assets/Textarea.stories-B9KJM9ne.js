import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-BVsvMGH4.js";import{t as n}from"./jsx-runtime-B6JWlyvB.js";import{n as r,t as i}from"./Textarea-CFpuExT_.js";var a,o,s,c,l,u;e((()=>{t(),i(),a=n(),{useArgs:o}=__STORYBOOK_MODULE_PREVIEW_API__,s={title:`Components/Textarea`,tags:[`new`],component:r,decorators:[e=>(0,a.jsx)(`div`,{style:{width:`50vw`},children:(0,a.jsx)(e,{})})],parameters:{layout:`centered`},args:{placeholder:`Placeholder text`},argTypes:{onChange:{action:`onChange`},onBlur:{action:`onBlur`},onFocus:{action:`onFocus`}}},c={},l={render:e=>{let[,t]=o(),n=n=>{e.onChange(n),t({value:n.target.value})};return(0,a.jsx)(r,{value:`Default value`,...e,onChange:n})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Uncontrolled`,`Controlled`]}))();export{l as Controlled,c as Uncontrolled,u as __namedExportsOrder,s as default};