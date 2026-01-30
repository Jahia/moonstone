import{j as s}from"./iframe-DfAFgWzh.js";import{T as a}from"./Thumbnail-BpQ3UZOT.js";import{S as n}from"./Love-zjsmb2Sx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Image-2rdQzuOp.js";const h={title:"Components/Thumbnail",component:a,tags:["beta"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["default","small"]},variant:{control:"select",options:["preview","icon"]}}},r={args:{}},e={args:{src:"https://picsum.photos/200",alt:"Random image"}},t={args:{src:s.jsx(n,{size:"big",color:"gray"})}},o={args:{src:"https://picsum.photos/200",alt:"Small thumbnail",size:"small"}},c={args:{src:"https://picsum.photos/200",alt:"Icon variant",variant:"icon"}},i={render:()=>s.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[s.jsx(a,{}),s.jsx(a,{src:"https://picsum.photos/200",alt:"Preview"}),s.jsx(a,{src:s.jsx(n,{size:"big",color:"gray"})}),s.jsx(a,{size:"small",src:"https://picsum.photos/200",alt:"Small"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/200',
    alt: 'Random image'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: <Love size="big" color="gray" />
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/200',
    alt: 'Small thumbnail',
    size: 'small'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/200',
    alt: 'Icon variant',
    variant: 'icon'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
            <Thumbnail />
            <Thumbnail src="https://picsum.photos/200" alt="Preview" />
            <Thumbnail src={<Love size="big" color="gray" />} />
            <Thumbnail size="small" src="https://picsum.photos/200" alt="Small" />
        </div>
}`,...i.parameters?.docs?.source}}};const S=["Default","WithImage","WithReactElement","SmallSize","IconVariant","AllVariants"];export{i as AllVariants,r as Default,c as IconVariant,o as SmallSize,e as WithImage,t as WithReactElement,S as __namedExportsOrder,h as default};
