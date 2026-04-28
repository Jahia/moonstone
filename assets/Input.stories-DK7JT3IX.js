import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-0pPUpMBg.js";import{t as n}from"./jsx-runtime-DTRofVPE.js";import{Y as r,et as i,t as a}from"./icons-U8xZOogm.js";import{D as o}from"./Thumbnail-BEzSuisq.js";var s,c,l,u,d,f,p,m;e((()=>{t(),r(),a(),s=n(),{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,l={title:`Components/Input`,component:i,decorators:[e=>(0,s.jsx)(`div`,{style:{width:`50vw`},children:(0,s.jsx)(e,{})})],parameters:{layout:`centered`},args:{placeholder:`Placeholder text`},argTypes:{onChange:{action:`onChange`},onClick:{action:`onClick`},onBlur:{action:`onBlur`},onFocus:{action:`onFocus`}}},u={},d={render:e=>{let[,t]=c(),n=n=>{e.onChange(n),t({value:n.target.value})};return(0,s.jsx)(i,{value:`Default value`,...e,onChange:n})}},f={args:{icon:(0,s.jsx)(o,{})}},p={args:{defaultValue:`Default value`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Love />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Default value'
  }
}`,...p.parameters?.docs?.source}}},m=[`Uncontrolled`,`Controlled`,`InputWithIcon`,`InputWithDefaultValue`]}))();export{d as Controlled,p as InputWithDefaultValue,f as InputWithIcon,u as Uncontrolled,m as __namedExportsOrder,l as default};