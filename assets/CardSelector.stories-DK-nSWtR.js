import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as B}from"./CardSelector-DGMzzaOj.js";import{C as c}from"./Chip-DESNhL41.js";import{S as D}from"./FileImage-DrkmYxCj.js";import{S as F}from"./Lock-Zntm35Uv.js";import{S as M}from"./Love-DCU5qIeU.js";import{S as R}from"./Close-Dt0TtWGW.js";import{B as _}from"./Button-PRM60pXw.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./Image-DYAdcomu.js";import"./Typography-C8hU4Ja4.js";/* empty css               */import"./Loader-DsiRlRl8.js";const ee={title:"Components/CardSelector",component:B,tags:["new"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"}}},a=L=>e.jsx("div",{style:{maxWidth:"100vw"},children:e.jsx(B,{...L})}),o={args:{id:"cardSelector",displayName:"Item name",systemName:"system name"},render:a},r={args:{...o.args,thumbnail:"https://picsum.photos/100/300",thumbnailAlt:"preview-img",thumbnailType:"preview",information:"more information",chips:[e.jsx(c,{label:"image",icon:e.jsx(D,{}),color:"accent"},"chip"),e.jsx(c,{label:"marked for deletion",icon:e.jsx(F,{}),color:"danger"},"chip2")]},render:a},s={args:{...r.args,thumbnail:"http://www.google.com/s2/favicons?domain=www.jahia.com",thumbnailType:"icon"},render:a},t={args:{...r.args,thumbnail:e.jsx(M,{id:"test",className:"test"}),thumbnailType:"icon"},render:a},n={args:{...r.args,cardAction:e.jsx(_,{variant:"ghost",icon:e.jsx(R,{})},"btn")},render:a},m={args:{...r.args,chips:null},render:a},i={args:{hasError:!0,errorMessage:"Broken reference"},render:a};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'cardSelector',
    displayName: 'Item name',
    systemName: 'system name'
  },
  render: Template
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thumbnail: 'https://picsum.photos/100/300',
    thumbnailAlt: 'preview-img',
    thumbnailType: 'preview',
    information: 'more information',
    chips: [<Chip key="chip" label="image" icon={<FileImage />} color="accent" />, <Chip key="chip2" label="marked for deletion" icon={<Lock />} color="danger" />]
  },
  render: Template
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,b,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    thumbnail: 'http://www.google.com/s2/favicons?domain=www.jahia.com',
    thumbnailType: 'icon'
  },
  render: Template
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var w,y,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    thumbnail: <Love id="test" className="test" />,
    thumbnailType: 'icon'
  },
  render: Template
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,T,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    cardAction: <Button key="btn" variant="ghost" icon={<Close />} />
  },
  render: Template
}`,...(C=(T=n.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,j,k;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    chips: null
  },
  render: Template
}`,...(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var N,A,E;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    hasError: true,
    errorMessage: 'Broken reference'
  },
  render: Template
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const re=["Default","Image","Icon","IconComponent","Actions","NoChips","Error"];export{n as Actions,o as Default,i as Error,s as Icon,t as IconComponent,r as Image,m as NoChips,re as __namedExportsOrder,ee as default};
