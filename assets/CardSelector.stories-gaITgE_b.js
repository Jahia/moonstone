import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-_12HUoMu.js";import{Bn as n,En as r,Ht as i,Mt as a,Nt as o,Tn as s,Vt as c,Xt as l,Yt as u,jn as d,t as f}from"./icons-BScL08Ri.js";import{n as p,t as m}from"./img-vertical-T57AU2Mc.js";import{n as h,t as g}from"./img-icon-CPKvRlUZ.js";var _,v,y,b,x,S,C,w,T,E,D;e((()=>{c(),u(),a(),f(),p(),h(),_=t(),v={title:`Components/CardSelector`,component:i,tags:[`new`],parameters:{layout:`padded`,actions:{argTypesRegex:`^on.*`}}},y=e=>(0,_.jsx)(`div`,{style:{maxWidth:`100vw`},children:(0,_.jsx)(i,{...e})}),b={args:{id:`cardSelector`,displayName:`Item name`,systemName:`system name`},render:y},x={args:{...b.args,thumbnail:m,thumbnailAlt:`preview-img`,thumbnailType:`preview`,information:`more information`,chips:[(0,_.jsx)(o,{label:`image`,icon:(0,_.jsx)(d,{}),color:`accent`},`chip`),(0,_.jsx)(o,{label:`marked for deletion`,icon:(0,_.jsx)(r,{}),color:`danger`},`chip2`)]},render:y},S={args:{...x.args,thumbnail:g,thumbnailType:`icon`},render:y},C={args:{...x.args,thumbnail:(0,_.jsx)(s,{id:`test`,className:`test`}),thumbnailType:`icon`},render:y},w={args:{...x.args,cardAction:(0,_.jsx)(l,{variant:`ghost`,icon:(0,_.jsx)(n,{})},`btn`)},render:y},T={args:{...x.args,chips:null},render:y},E={args:{hasError:!0,errorMessage:`Broken reference`},render:y},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'cardSelector',
    displayName: 'Item name',
    systemName: 'system name'
  },
  render: Template
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thumbnail: imgVertical,
    thumbnailAlt: 'preview-img',
    thumbnailType: 'preview',
    information: 'more information',
    chips: [<Chip key="chip" label="image" icon={<FileImage />} color="accent" />, <Chip key="chip2" label="marked for deletion" icon={<Lock />} color="danger" />]
  },
  render: Template
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    thumbnail: imgIcon,
    thumbnailType: 'icon'
  },
  render: Template
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    thumbnail: <Love id="test" className="test" />,
    thumbnailType: 'icon'
  },
  render: Template
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    cardAction: <Button key="btn" variant="ghost" icon={<Close />} />
  },
  render: Template
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    chips: null
  },
  render: Template
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    hasError: true,
    errorMessage: 'Broken reference'
  },
  render: Template
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Image`,`Icon`,`IconComponent`,`Actions`,`NoChips`,`Error`]}))();export{w as Actions,b as Default,E as Error,S as Icon,C as IconComponent,x as Image,T as NoChips,D as __namedExportsOrder,v as default};