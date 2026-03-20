import"./react-ST3FQwwi.js";import{r as e}from"./Puzzle-DXpu3lXI.js";import{t}from"./Lock-ClX4hC_b.js";import{t as n}from"./Close-eA8txr-Z.js";import{t as r}from"./Love-DGopbXwM.js";import"./Typography-CeFp9oJH.js";/* empty css               */import"./Loader-DraZzbkf.js";import{t as i}from"./Button-DugzGTIP.js";import{t as a}from"./CardSelector-DaPr44KS.js";import{t as o}from"./Chip-DjKZ3R1m.js";import"./Thumbnail-7tSogjTd.js";import{t as s}from"./iframe-Bj7tzQvE.js";var c=s(),l={title:`Components/CardSelector`,component:a,tags:[`new`],parameters:{layout:`padded`,actions:{argTypesRegex:`^on.*`}}},u=e=>(0,c.jsx)(`div`,{style:{maxWidth:`100vw`},children:(0,c.jsx)(a,{...e})}),d={args:{id:`cardSelector`,displayName:`Item name`,systemName:`system name`},render:u},f={args:{...d.args,thumbnail:`https://picsum.photos/seed/moonstone/100/300`,thumbnailAlt:`preview-img`,thumbnailType:`preview`,information:`more information`,chips:[(0,c.jsx)(o,{label:`image`,icon:(0,c.jsx)(e,{}),color:`accent`},`chip`),(0,c.jsx)(o,{label:`marked for deletion`,icon:(0,c.jsx)(t,{}),color:`danger`},`chip2`)]},render:u},p={args:{...f.args,thumbnail:`http://www.google.com/s2/favicons?domain=www.jahia.com`,thumbnailType:`icon`},render:u},m={args:{...f.args,thumbnail:(0,c.jsx)(r,{id:`test`,className:`test`}),thumbnailType:`icon`},render:u},h={args:{...f.args,cardAction:(0,c.jsx)(i,{variant:`ghost`,icon:(0,c.jsx)(n,{})},`btn`)},render:u},g={args:{...f.args,chips:null},render:u},_={args:{hasError:!0,errorMessage:`Broken reference`},render:u};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'cardSelector',
    displayName: 'Item name',
    systemName: 'system name'
  },
  render: Template
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thumbnail: 'https://picsum.photos/seed/moonstone/100/300',
    thumbnailAlt: 'preview-img',
    thumbnailType: 'preview',
    information: 'more information',
    chips: [<Chip key="chip" label="image" icon={<FileImage />} color="accent" />, <Chip key="chip2" label="marked for deletion" icon={<Lock />} color="danger" />]
  },
  render: Template
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    thumbnail: 'http://www.google.com/s2/favicons?domain=www.jahia.com',
    thumbnailType: 'icon'
  },
  render: Template
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    thumbnail: <Love id="test" className="test" />,
    thumbnailType: 'icon'
  },
  render: Template
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    cardAction: <Button key="btn" variant="ghost" icon={<Close />} />
  },
  render: Template
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Image.args,
    chips: null
  },
  render: Template
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    hasError: true,
    errorMessage: 'Broken reference'
  },
  render: Template
}`,..._.parameters?.docs?.source}}};var v=[`Default`,`Image`,`Icon`,`IconComponent`,`Actions`,`NoChips`,`Error`];export{h as Actions,d as Default,_ as Error,p as Icon,m as IconComponent,f as Image,g as NoChips,v as __namedExportsOrder,l as default};