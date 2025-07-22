import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{C as t}from"./CheckboxItem-C_OmVhR6.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./Checkbox-BKYb3EOF.js";import"./Typography-CgHbMZIy.js";const{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Components/CheckboxGroup/CheckboxItem",component:t,parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0}},argTypes:{onClick:{action:"onClick"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}}},r={render:e=>s.jsx(t,{...e}),args:{label:"Uncontrolled CheckboxItem"}},o={render:e=>{const[{checked:a},C]=b(),k=()=>{C({isChecked:!a})};return s.jsx(t,{checked:a,onChange:()=>k(),...e})},args:{label:"Controlled CheckboxItem"}},n={render:e=>s.jsx(t,{...e}),args:{id:"playground-item",label:"Play with me",description:"Use the storybook controls to update this element",value:"playground-value"}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <CheckboxItem {...args} />;
  },
  args: {
    label: 'Uncontrolled CheckboxItem'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,u,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var i,h,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return <CheckboxItem {...args} />;
  },
  args: {
    id: 'playground-item',
    label: 'Play with me',
    description: 'Use the storybook controls to update this element',
    value: 'playground-value'
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const E=["Uncontrolled","Controlled","Playground"];export{o as Controlled,n as Playground,r as Uncontrolled,E as __namedExportsOrder,j as default};
