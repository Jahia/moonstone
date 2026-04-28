import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DTRofVPE.js";import{D as n,i as r,n as i,t as a}from"./Thumbnail-BEzSuisq.js";var o,s,c,l,u,d,f,p,m;e((()=>{i(),r(),o=t(),s={title:`Components/Thumbnail`,component:a,tags:[`beta`],parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`default`,`small`]},variant:{control:`select`,options:[`preview`,`icon`]}}},c={args:{}},l={args:{src:`https://picsum.photos/seed/moonstone/200`,alt:`Random image`}},u={args:{src:(0,o.jsx)(n,{size:`big`,color:`gray`})}},d={args:{src:`https://picsum.photos/seed/moonstone/200`,alt:`Small thumbnail`,size:`small`}},f={args:{src:`https://picsum.photos/seed/moonstone/200`,alt:`Icon variant`,variant:`icon`}},p={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,o.jsx)(a,{}),(0,o.jsx)(a,{src:`https://picsum.photos/seed/moonstone/200`,alt:`Preview`}),(0,o.jsx)(a,{src:(0,o.jsx)(n,{size:`big`,color:`gray`})}),(0,o.jsx)(a,{size:`small`,src:`https://picsum.photos/seed/moonstone/200`,alt:`Small`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/seed/moonstone/200',
    alt: 'Random image'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    src: <Love size="big" color="gray" />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/seed/moonstone/200',
    alt: 'Small thumbnail',
    size: 'small'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/seed/moonstone/200',
    alt: 'Icon variant',
    variant: 'icon'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithImage`,`WithReactElement`,`SmallSize`,`IconVariant`,`AllVariants`]}))();export{p as AllVariants,c as Default,f as IconVariant,d as SmallSize,l as WithImage,u as WithReactElement,m as __namedExportsOrder,s as default};