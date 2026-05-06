import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CQFjE489.js";import{At as n,Cn as r,Ln as i,On as a,Rt as o,Sn as s,i as c,qt as l,t as u,zt as d}from"./icons-cGo7AZL_.js";import{n as f,t as p}from"./img-vertical-31NXtSEJ.js";import{n as m,t as h}from"./img-icon-DBNDd7H3.js";var g,_,v,y,b,x,S,C,w,T,E;e((()=>{o(),c(),u(),f(),m(),g=t(),_={title:`Components/CardSelector`,component:d,tags:[`new`],parameters:{layout:`padded`,actions:{argTypesRegex:`^on.*`}}},v=e=>(0,g.jsx)(`div`,{style:{maxWidth:`100vw`},children:(0,g.jsx)(d,{...e})}),y={args:{id:`cardSelector`,displayName:`Item name`,systemName:`system name`},render:v},b={args:{...y.args,thumbnail:p,thumbnailAlt:`preview-img`,thumbnailType:`preview`,information:`more information`,chips:[(0,g.jsx)(n,{label:`image`,icon:(0,g.jsx)(a,{}),color:`accent`},`chip`),(0,g.jsx)(n,{label:`marked for deletion`,icon:(0,g.jsx)(r,{}),color:`danger`},`chip2`)]},render:v},x={args:{...b.args,thumbnail:h,thumbnailType:`icon`},render:v},S={args:{...b.args,thumbnail:(0,g.jsx)(s,{id:`test`,className:`test`}),thumbnailType:`icon`},render:v},C={args:{...b.args,cardAction:(0,g.jsx)(l,{variant:`ghost`,icon:(0,g.jsx)(i,{})},`btn`)},render:v},w={args:{...b.args,chips:null},render:v},T={args:{hasError:!0,errorMessage:`Broken reference`},render:v},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'cardSelector',
    displayName: 'Item name',
    systemName: 'system name'
  },
  render: Template
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thumbnail: imgVertical,
    thumbnailAlt: 'preview-img',
    thumbnailType: 'preview',
    information: 'more information',
    chips: [<Chip key="chip" label="image" icon={<FileImage />} color="accent" />, <Chip key="chip2" label="marked for deletion" icon={<Lock />} color="danger" />]
  },
  render: Template
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    thumbnail: imgIcon,
    thumbnailType: 'icon'
  },
  render: Template
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    thumbnail: <Love id="test" className="test" />,
    thumbnailType: 'icon'
  },
  render: Template
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    cardAction: <Button key="btn" variant="ghost" icon={<Close />} />
  },
  render: Template
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    chips: null
  },
  render: Template
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    hasError: true,
    errorMessage: 'Broken reference'
  },
  render: Template
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Image`,`Icon`,`IconComponent`,`Actions`,`NoChips`,`Error`]}))();export{C as Actions,y as Default,T as Error,x as Icon,S as IconComponent,b as Image,w as NoChips,E as __namedExportsOrder,_ as default};