import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DTRofVPE.js";import{Gt as n,Ot as r,Rt as i,St as a,at as o,b as s,i as c,ot as l,t as u,v as d,zt as f}from"./icons-U8xZOogm.js";import{c as p,l as m}from"./Thumbnail-BEzSuisq.js";var h,g,_,v,y,b,x,S;e((()=>{o(),c(),u(),h=t(),g=[{label:`option 01`,value:`1`},{label:`option 02`,value:`2`}],_={title:`Components/Header`,component:l,argTypes:{title:{table:{type:{summary:`string`}}},search:{control:{disable:!0}},mainActions:{control:{disable:!0}},contentType:{table:{type:{summary:`<Chip/>`}},control:{disable:!0}},status:{table:{type:{summary:`<Chip/>`}},control:{disable:!0}},breadcrumb:{table:{type:{summary:`<Breadcrumb/>`}},control:{disable:!0}},toolbar:{table:{disable:!0}},toolbarLeft:{control:{disable:!0}},toolbarRight:{control:{disable:!0}}}},v={args:{title:`Page Title`,search:(0,h.jsx)(n,{size:`big`,variant:`ghost`,label:`Search`,onClick:()=>void 0}),mainActions:[(0,h.jsx)(n,{size:`big`,label:`Secondary`,variant:`outlined`,onClick:()=>void 0},`1`),(0,h.jsx)(n,{size:`big`,label:`Primary`,color:`accent`,onClick:()=>void 0},`2`)],status:[(0,h.jsx)(r,{label:`status A`},`1`),(0,h.jsx)(r,{color:`warning`,label:`status B`},`2`)],breadcrumb:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i,{label:`item 01`,onClick:()=>void 0}),(0,h.jsx)(i,{label:`item 02`,onClick:()=>void 0}),(0,h.jsx)(i,{label:`item 03`,onClick:()=>void 0}),(0,h.jsx)(i,{label:`item 04`,onClick:()=>void 0}),(0,h.jsx)(i,{label:`item 05`,onClick:()=>void 0})]},`1`)],contentType:(0,h.jsx)(r,{label:`Page`}),toolbarLeft:[(0,h.jsx)(a,{label:`Dropdown`,size:`small`,value:g[0].value,variant:`ghost`,data:g},`1`),(0,h.jsxs)(s,{children:[(0,h.jsx)(d,{isSelected:!0,label:`Tab 1`,onClick:()=>void 0}),(0,h.jsx)(d,{label:`Tab 2`,onClick:()=>void 0})]},`2`),(0,h.jsx)(n,{variant:`ghost`,label:`Action 01`,onClick:()=>void 0},`3`),(0,h.jsx)(n,{variant:`ghost`,label:`Action 02`,onClick:()=>void 0},`4`)],toolbarRight:[(0,h.jsx)(n,{variant:`ghost`,icon:(0,h.jsx)(m,{}),onClick:()=>void 0},`1`),(0,h.jsx)(n,{variant:`ghost`,icon:(0,h.jsx)(p,{}),onClick:()=>void 0},`2`)]}},y={args:{...v.args,toolbarLeft:null,toolbarRight:null}},b={args:{...v.args,breadcrumb:null,status:null,contentType:null}},x={args:{title:`Application title`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    search: <Button size="big" variant="ghost" label="Search" onClick={() => undefined} />,
    mainActions: [<Button key="1" size="big" label="Secondary" variant="outlined" onClick={() => undefined} />, <Button key="2" size="big" label="Primary" color="accent" onClick={() => undefined} />],
    status: [<Chip key="1" label="status A" />, <Chip key="2" color="warning" label="status B" />],
    breadcrumb: [<Breadcrumb key="1">
                <BreadcrumbItem label="item 01" onClick={() => undefined} />
                <BreadcrumbItem label="item 02" onClick={() => undefined} />
                <BreadcrumbItem label="item 03" onClick={() => undefined} />
                <BreadcrumbItem label="item 04" onClick={() => undefined} />
                <BreadcrumbItem label="item 05" onClick={() => undefined} />
            </Breadcrumb>],
    contentType: <Chip label="Page" />,
    toolbarLeft: [<Dropdown key="1" label="Dropdown" size="small" value={DropdownData[0].value} variant="ghost" data={DropdownData} />, <Tab key="2">
                <TabItem isSelected label="Tab 1" onClick={() => undefined} />
                <TabItem label="Tab 2" onClick={() => undefined} />
            </Tab>, <Button key="3" variant="ghost" label="Action 01" onClick={() => undefined} />, <Button key="4" variant="ghost" label="Action 02" onClick={() => undefined} />],
    toolbarRight: [<Button key="1" variant="ghost" icon={<ViewGrid />} onClick={() => undefined} />, <Button key="2" variant="ghost" icon={<ViewList />} onClick={() => undefined} />]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Full.args,
    toolbarLeft: null,
    toolbarRight: null
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Full.args,
    breadcrumb: null,
    status: null,
    contentType: null
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Application title'
  }
}`,...x.parameters?.docs?.source}}},S=[`Full`,`WithoutToolbar`,`WithoutInformation`,`Simple`]}))();export{v as Full,x as Simple,b as WithoutInformation,y as WithoutToolbar,S as __namedExportsOrder,_ as default};