import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as k}from"./CardSelector-BkFnwE8n.js";import{C as i}from"./Chip-DLCXCHZR.js";import{S as E}from"./FileImage-DrkmYxCj.js";import{S as L}from"./Lock-Zntm35Uv.js";import{S as N}from"./Close-Dt0TtWGW.js";import{B as R}from"./Button-DPpQJtCz.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./Image-DYAdcomu.js";import"./Typography-D0S_EBmN.js";/* empty css               */import"./Loader-DsiRlRl8.js";const Q={title:"Components/CardSelector",component:k,tags:["new"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"}}},a=A=>e.jsx("div",{style:{maxWidth:"100vw"},children:e.jsx(k,{...A})}),o={args:{id:"cardSelector",displayName:"Item name",systemName:"system name"},render:a},r={args:{...o.args,thumbnailURL:"https://picsum.photos/100/300",thumbnailAlt:"preview-img",thumbnailType:"preview",information:"more information",chips:[e.jsx(i,{label:"image",icon:e.jsx(E,{}),color:"accent"},"chip"),e.jsx(i,{label:"marked for deletion",icon:e.jsx(L,{}),color:"danger"},"chip2")]},render:a},s={args:{...r.args,thumbnailURL:"http://www.google.com/s2/favicons?domain=www.jahia.com",thumbnailType:"icon"},render:a},t={args:{...r.args,cardAction:e.jsx(R,{variant:"ghost",icon:e.jsx(N,{})},"btn")},render:a},n={args:{...r.args,chips:null},render:a},m={args:{hasError:!0,errorMessage:"Broken reference"},render:a};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'cardSelector',
    displayName: 'Item name',
    systemName: 'system name'
  },
  render: Template
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thumbnailURL: 'https://picsum.photos/100/300',
    thumbnailAlt: 'preview-img',
    thumbnailType: 'preview',
    information: 'more information',
    chips: [<Chip key="chip" label="image" icon={<FileImage />} color="accent" />, <Chip key="chip2" label="marked for deletion" icon={<Lock />} color="danger" />]
  },
  render: Template
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    thumbnailURL: 'http://www.google.com/s2/favicons?domain=www.jahia.com',
    thumbnailType: 'icon'
  },
  render: Template
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var b,y,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    cardAction: <Button key="btn" variant="ghost" icon={<Close />} />
  },
  render: Template
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,v,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    chips: null
  },
  render: Template
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var C,T,I;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    hasError: true,
    errorMessage: 'Broken reference'
  },
  render: Template
}`,...(I=(T=m.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const V=["Default","Image","Icon","Actions","NoChips","Error"];export{t as Actions,o as Default,m as Error,s as Icon,r as Image,n as NoChips,V as __namedExportsOrder,Q as default};
