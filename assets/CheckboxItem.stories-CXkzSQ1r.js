import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DTRofVPE.js";import{At as n,jt as r}from"./icons-U8xZOogm.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{useArgs:a}=__STORYBOOK_MODULE_PREVIEW_API__,o={title:`Components/CheckboxGroup/CheckboxItem`,component:n,parameters:{layout:`centered`,knobs:{disable:!0},storysource:{disable:!0}},argTypes:{onClick:{action:`onClick`},onBlur:{action:`onBlur`},onFocus:{action:`onFocus`}}},s={render:e=>(0,i.jsx)(n,{...e}),args:{label:`Uncontrolled CheckboxItem`}},c={render:e=>{let[{checked:t},r]=a(),o=()=>{r({isChecked:!t})};return(0,i.jsx)(n,{checked:t,onChange:()=>o(),...e})},args:{label:`Controlled CheckboxItem`}},l={render:e=>(0,i.jsx)(n,{...e}),args:{id:`playground-item`,label:`Play with me`,description:`Use the storybook controls to update this element`,value:`playground-value`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <CheckboxItem {...args} />;
  },
  args: {
    label: 'Uncontrolled CheckboxItem'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: CheckboxItemProps) => {
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleOnChange = () => {
      updateArgs({
        isChecked: !checked
      });
    };
    return <CheckboxItem checked={checked} onChange={() => handleOnChange()} {...args} />;
  },
  args: {
    label: 'Controlled CheckboxItem'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <CheckboxItem {...args} />;
  },
  args: {
    id: 'playground-item',
    label: 'Play with me',
    description: 'Use the storybook controls to update this element',
    value: 'playground-value'
  }
}`,...l.parameters?.docs?.source}}},u=[`Uncontrolled`,`Controlled`,`Playground`]}))();export{c as Controlled,l as Playground,s as Uncontrolled,u as __namedExportsOrder,o as default};