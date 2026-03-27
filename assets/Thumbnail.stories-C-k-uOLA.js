import"./react-ST3FQwwi.js";import{t as e}from"./Love-BgGg8BFw.js";import{t}from"./Thumbnail-vPgaQk0-.js";import{t as n}from"./iframe-DiLuhGje.js";var r=n(),i={title:`Components/Thumbnail`,component:t,tags:[`beta`],parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`default`,`small`]},variant:{control:`select`,options:[`preview`,`icon`]}}},a={args:{}},o={args:{src:`https://picsum.photos/seed/moonstone/200`,alt:`Random image`}},s={args:{src:(0,r.jsx)(e,{size:`big`,color:`gray`})}},c={args:{src:`https://picsum.photos/seed/moonstone/200`,alt:`Small thumbnail`,size:`small`}},l={args:{src:`https://picsum.photos/seed/moonstone/200`,alt:`Icon variant`,variant:`icon`}},u={render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,r.jsx)(t,{}),(0,r.jsx)(t,{src:`https://picsum.photos/seed/moonstone/200`,alt:`Preview`}),(0,r.jsx)(t,{src:(0,r.jsx)(e,{size:`big`,color:`gray`})}),(0,r.jsx)(t,{size:`small`,src:`https://picsum.photos/seed/moonstone/200`,alt:`Small`})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/seed/moonstone/200',
    alt: 'Random image'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: <Love size="big" color="gray" />
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/seed/moonstone/200',
    alt: 'Small thumbnail',
    size: 'small'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/seed/moonstone/200',
    alt: 'Icon variant',
    variant: 'icon'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
            <Thumbnail />
            <Thumbnail src="https://picsum.photos/seed/moonstone/200" alt="Preview" />
            <Thumbnail src={<Love size="big" color="gray" />} />
            <Thumbnail size="small" src="https://picsum.photos/seed/moonstone/200" alt="Small" />
        </div>
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`WithImage`,`WithReactElement`,`SmallSize`,`IconVariant`,`AllVariants`];export{u as AllVariants,a as Default,l as IconVariant,c as SmallSize,o as WithImage,s as WithReactElement,d as __namedExportsOrder,i as default};