import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CQFjE489.js";import{At as n,Bt as r,S as i,Vt as a,b as o,cn as s,ct as c,i as l,ln as u,qt as d,st as f,t as p,wt as m}from"./icons-cGo7AZL_.js";var h,g,_,v,y,b,x,S;e((()=>{f(),l(),p(),h=t(),g=[{label:`option 01`,value:`1`},{label:`option 02`,value:`2`}],_={title:`Components/Header`,component:c,argTypes:{title:{table:{type:{summary:`string`}}},search:{control:{disable:!0}},mainActions:{control:{disable:!0}},contentType:{table:{type:{summary:`<Chip/>`}},control:{disable:!0}},status:{table:{type:{summary:`<Chip/>`}},control:{disable:!0}},breadcrumb:{table:{type:{summary:`<Breadcrumb/>`}},control:{disable:!0}},toolbar:{table:{disable:!0}},toolbarLeft:{control:{disable:!0}},toolbarRight:{control:{disable:!0}}}},v={args:{title:`Page Title`,search:(0,h.jsx)(d,{size:`big`,variant:`ghost`,label:`Search`,onClick:()=>void 0}),mainActions:[(0,h.jsx)(d,{size:`big`,label:`Secondary`,variant:`outlined`,onClick:()=>void 0},`1`),(0,h.jsx)(d,{size:`big`,label:`Primary`,color:`accent`,onClick:()=>void 0},`2`)],status:[(0,h.jsx)(n,{label:`status A`},`1`),(0,h.jsx)(n,{color:`warning`,label:`status B`},`2`)],breadcrumb:[(0,h.jsxs)(a,{children:[(0,h.jsx)(r,{label:`item 01`,onClick:()=>void 0}),(0,h.jsx)(r,{label:`item 02`,onClick:()=>void 0}),(0,h.jsx)(r,{label:`item 03`,onClick:()=>void 0}),(0,h.jsx)(r,{label:`item 04`,onClick:()=>void 0}),(0,h.jsx)(r,{label:`item 05`,onClick:()=>void 0})]},`1`)],contentType:(0,h.jsx)(n,{label:`Page`}),toolbarLeft:[(0,h.jsx)(m,{label:`Dropdown`,size:`small`,value:g[0].value,variant:`ghost`,data:g},`1`),(0,h.jsxs)(i,{children:[(0,h.jsx)(o,{isSelected:!0,label:`Tab 1`,onClick:()=>void 0}),(0,h.jsx)(o,{label:`Tab 2`,onClick:()=>void 0})]},`2`),(0,h.jsx)(d,{variant:`ghost`,label:`Action 01`,onClick:()=>void 0},`3`),(0,h.jsx)(d,{variant:`ghost`,label:`Action 02`,onClick:()=>void 0},`4`)],toolbarRight:[(0,h.jsx)(d,{variant:`ghost`,icon:(0,h.jsx)(u,{}),onClick:()=>void 0},`1`),(0,h.jsx)(d,{variant:`ghost`,icon:(0,h.jsx)(s,{}),onClick:()=>void 0},`2`)]}},y={args:{...v.args,toolbarLeft:null,toolbarRight:null}},b={args:{...v.args,breadcrumb:null,status:null,contentType:null}},x={args:{title:`Application title`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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