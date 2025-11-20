import{j as s}from"./iframe-1gg0_G19.js";import{C as t}from"./CheckboxItem-CJNPBR3s.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Checkbox-Ba_BrXlG.js";import"./Typography-BG5VXE0P.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,C={title:"Components/CheckboxGroup/CheckboxItem",component:t,parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0}},argTypes:{onClick:{action:"onClick"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}},r={render:e=>s.jsx(t,{...e}),args:{label:"Uncontrolled CheckboxItem"}},o={render:e=>{const[{checked:a},c]=d(),l=()=>{c({isChecked:!a})};return s.jsx(t,{checked:a,onChange:()=>l(),...e})},args:{label:"Controlled CheckboxItem"}},n={render:e=>s.jsx(t,{...e}),args:{id:"playground-item",label:"Play with me",description:"Use the storybook controls to update this element",value:"playground-value"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <CheckboxItem {...args} />;
  },
  args: {
    label: 'Uncontrolled CheckboxItem'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <CheckboxItem {...args} />;
  },
  args: {
    id: 'playground-item',
    label: 'Play with me',
    description: 'Use the storybook controls to update this element',
    value: 'playground-value'
  }
}`,...n.parameters?.docs?.source}}};const k=["Uncontrolled","Controlled","Playground"];export{o as Controlled,n as Playground,r as Uncontrolled,k as __namedExportsOrder,C as default};
