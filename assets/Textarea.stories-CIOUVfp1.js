import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-ST3FQwwi.js";import{t as n}from"./Textarea-BdrR4cZI.js";import{t as r}from"./iframe-Bwm6YNvT.js";e(t(),1);var i=r(),{useArgs:a}=__STORYBOOK_MODULE_PREVIEW_API__,o={title:`Components/Textarea`,tags:[`new`],component:n,decorators:[e=>(0,i.jsx)(`div`,{style:{width:`50vw`},children:(0,i.jsx)(e,{})})],parameters:{layout:`centered`},args:{placeholder:`Placeholder text`},argTypes:{onChange:{action:`onChange`},onBlur:{action:`onBlur`},onFocus:{action:`onFocus`}}},s={},c={render:e=>{let[,t]=a(),r=n=>{e.onChange(n),t({value:n.target.value})};return(0,i.jsx)(n,{value:`Default value`,...e,onChange:r})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};var l=[`Uncontrolled`,`Controlled`];export{c as Controlled,s as Uncontrolled,l as __namedExportsOrder,o as default};