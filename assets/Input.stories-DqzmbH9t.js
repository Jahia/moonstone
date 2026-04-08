import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-ST3FQwwi.js";import{t as n}from"./Love-CjVpenmr.js";import"./Typography-moeW5pTZ.js";/* empty css               */import"./Loader-h3IbnZXS.js";import"./BaseInput-D9-FQ13g.js";import{t as r}from"./Input-VTQx111s.js";import{t as i}from"./iframe-SDWLCJxT.js";e(t(),1);var a=i(),{useArgs:o}=__STORYBOOK_MODULE_PREVIEW_API__,s={title:`Components/Input`,component:r,decorators:[e=>(0,a.jsx)(`div`,{style:{width:`50vw`},children:(0,a.jsx)(e,{})})],parameters:{layout:`centered`},args:{placeholder:`Placeholder text`},argTypes:{onChange:{action:`onChange`},onClick:{action:`onClick`},onBlur:{action:`onBlur`},onFocus:{action:`onFocus`}}},c={},l={render:e=>{let[,t]=o(),n=n=>{e.onChange(n),t({value:n.target.value})};return(0,a.jsx)(r,{value:`Default value`,...e,onChange:n})}},u={args:{icon:(0,a.jsx)(n,{})}},d={args:{defaultValue:`Default value`}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Love />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Default value'
  }
}`,...d.parameters?.docs?.source}}};var f=[`Uncontrolled`,`Controlled`,`InputWithIcon`,`InputWithDefaultValue`];export{l as Controlled,d as InputWithDefaultValue,u as InputWithIcon,c as Uncontrolled,f as __namedExportsOrder,s as default};