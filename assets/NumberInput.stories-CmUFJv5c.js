import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6JWlyvB.js";import{X as n,Z as r}from"./icons-Dxh7SjmP.js";import{t as i}from"./storybook-ZkaiIgK-.js";var a,o,s,c,l,u;e((()=>{i(),n(),a=t(),{useArgs:o}=__STORYBOOK_MODULE_PREVIEW_API__,s={title:`Components/Input/Numbers`,component:r,tags:[`new`],decorators:[e=>(0,a.jsx)(`div`,{style:{width:`50vw`},children:(0,a.jsx)(e,{})})],parameters:{layout:`centered`}},c={},l={args:{max:10,min:1,value:`5`,step:1},render:e=>{let[,t]=o();return(0,a.jsx)(r,{onChange:n=>{e.onChange&&e.onChange(n),t({...e,value:n.target.value})},...e})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    max: 10,
    min: 1,
    value: '5',
    step: 1
  },
  render: args => {
    const [, setArgs] = useArgs();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (args.onChange) {
        args.onChange(e);
      }
      setArgs({
        ...args,
        value: e.target.value
      });
    };
    return <NumberInput onChange={onChange} {...args} />;
  }
}`,...l.parameters?.docs?.source}}},u=[`UncontrolledNumberInput`,`ControlledNumberInput`]}))();export{l as ControlledNumberInput,c as UncontrolledNumberInput,u as __namedExportsOrder,s as default};