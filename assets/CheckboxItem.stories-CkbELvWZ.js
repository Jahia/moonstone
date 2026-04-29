import"./react-ST3FQwwi.js";import"./Checkbox-CU6C1HBp.js";import"./Typography-U48lo1cD.js";import{t as e}from"./CheckboxItem-Btu-OLms.js";import{t}from"./iframe-Ct62ZcO9.js";var n=t(),{useArgs:r}=__STORYBOOK_MODULE_PREVIEW_API__,i={title:`Components/CheckboxGroup/CheckboxItem`,component:e,parameters:{layout:`centered`,knobs:{disable:!0},storysource:{disable:!0}},argTypes:{onClick:{action:`onClick`},onBlur:{action:`onBlur`},onFocus:{action:`onFocus`}}},a={render:t=>(0,n.jsx)(e,{...t}),args:{label:`Uncontrolled CheckboxItem`}},o={render:t=>{let[{checked:i},a]=r(),o=()=>{a({isChecked:!i})};return(0,n.jsx)(e,{checked:i,onChange:()=>o(),...t})},args:{label:`Controlled CheckboxItem`}},s={render:t=>(0,n.jsx)(e,{...t}),args:{id:`playground-item`,label:`Play with me`,description:`Use the storybook controls to update this element`,value:`playground-value`}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <CheckboxItem {...args} />;
  },
  args: {
    label: 'Uncontrolled CheckboxItem'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <CheckboxItem {...args} />;
  },
  args: {
    id: 'playground-item',
    label: 'Play with me',
    description: 'Use the storybook controls to update this element',
    value: 'playground-value'
  }
}`,...s.parameters?.docs?.source}}};var c=[`Uncontrolled`,`Controlled`,`Playground`];export{o as Controlled,s as Playground,a as Uncontrolled,c as __namedExportsOrder,i as default};