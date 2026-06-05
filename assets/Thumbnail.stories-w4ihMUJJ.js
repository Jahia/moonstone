import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CNwUAhyt.js";import{Dn as n,l as r,t as i,u as a}from"./icons-CvpR1KhG.js";import{n as o,t as s}from"./img-vertical-T57AU2Mc.js";import{n as c,t as l}from"./img-icon-CPKvRlUZ.js";import{n as u,t as d}from"./img-horizontal-a5zkpeZa.js";var f,p,m,h,g,_,v,y,b;e((()=>{a(),i(),o(),u(),c(),f=t(),p={title:`Components/Thumbnail`,component:r,tags:[`beta`],parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`default`,`small`]},variant:{control:`select`,options:[`preview`,`icon`]}}},m={args:{}},h={args:{src:s,alt:`vertical image`}},g={args:{src:(0,f.jsx)(n,{size:`big`,color:`gray`})}},_={args:{src:d,alt:`Small thumbnail`,size:`small`}},v={args:{src:l,alt:`Icon variant`,variant:`icon`}},y={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,f.jsx)(r,{}),(0,f.jsx)(r,{variant:`preview`,src:d,alt:`Horizontal image`}),(0,f.jsx)(r,{variant:`icon`,src:(0,f.jsx)(n,{size:`big`,color:`gray`})}),(0,f.jsx)(r,{variant:`preview`,size:`small`,src:s,alt:`Small image`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    src: imgVertical,
    alt: 'vertical image'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    src: <Love size="big" color="gray" />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    src: imgHorizontal,
    alt: 'Small thumbnail',
    size: 'small'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    src: imgIcon,
    alt: 'Icon variant',
    variant: 'icon'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
            <Thumbnail />
            <Thumbnail variant="preview" src={imgHorizontal} alt="Horizontal image" />
            <Thumbnail variant="icon" src={<Love size="big" color="gray" />} />
            <Thumbnail variant="preview" size="small" src={imgVertical} alt="Small image" />
        </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithImage`,`WithReactElement`,`SmallSize`,`IconVariant`,`AllVariants`]}))();export{y as AllVariants,m as Default,v as IconVariant,_ as SmallSize,h as WithImage,g as WithReactElement,b as __namedExportsOrder,p as default};