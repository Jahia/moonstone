import"./react-ST3FQwwi.js";import{n as e,t}from"./ViewList-hosPj-K-.js";import"./Typography-BxA49sLq.js";import"./TreeView-DgjokxG9.js";import"./MenuItem-CHQJAx5d.js";/* empty css               */import"./Loader-DTVQNLxh.js";import{t as n}from"./Button-CzXfPH3r.js";import{n as r,t as i}from"./BreadcrumbItem-vWM5n82F.js";import{t as a}from"./Chip-DmR0lMnX.js";import{t as o}from"./TreeViewMenu-BJ605-gB.js";import"./Tag-DIjcth7H.js";import{t as s}from"./Header-C9BehBNW.js";import"./BaseInput-BjAMK9DL.js";import"./ListItem-I7Gqb0nr.js";import"./Separator-BRd1pnPm.js";import{n as c,t as l}from"./TabItem-CQAlTnzA.js";import{t as u}from"./iframe-BCv1I7TQ.js";var d=u(),f=[{label:`option 01`,value:`1`},{label:`option 02`,value:`2`}],p={title:`Components/Header`,component:s,argTypes:{title:{table:{type:{summary:`string`}}},search:{control:{disable:!0}},mainActions:{control:{disable:!0}},contentType:{table:{type:{summary:`<Chip/>`}},control:{disable:!0}},status:{table:{type:{summary:`<Chip/>`}},control:{disable:!0}},breadcrumb:{table:{type:{summary:`<Breadcrumb/>`}},control:{disable:!0}},toolbar:{table:{disable:!0}},toolbarLeft:{control:{disable:!0}},toolbarRight:{control:{disable:!0}}}},m={args:{title:`Page Title`,search:(0,d.jsx)(n,{size:`big`,variant:`ghost`,label:`Search`,onClick:()=>void 0}),mainActions:[(0,d.jsx)(n,{size:`big`,label:`Secondary`,variant:`outlined`,onClick:()=>void 0},`1`),(0,d.jsx)(n,{size:`big`,label:`Primary`,color:`accent`,onClick:()=>void 0},`2`)],status:[(0,d.jsx)(a,{label:`status A`},`1`),(0,d.jsx)(a,{color:`warning`,label:`status B`},`2`)],breadcrumb:[(0,d.jsxs)(r,{children:[(0,d.jsx)(i,{label:`item 01`,onClick:()=>void 0}),(0,d.jsx)(i,{label:`item 02`,onClick:()=>void 0}),(0,d.jsx)(i,{label:`item 03`,onClick:()=>void 0}),(0,d.jsx)(i,{label:`item 04`,onClick:()=>void 0}),(0,d.jsx)(i,{label:`item 05`,onClick:()=>void 0})]},`1`)],contentType:(0,d.jsx)(a,{label:`Page`}),toolbarLeft:[(0,d.jsx)(o,{label:`Dropdown`,size:`small`,value:f[0].value,variant:`ghost`,data:f},`1`),(0,d.jsxs)(c,{children:[(0,d.jsx)(l,{isSelected:!0,label:`Tab 1`,onClick:()=>void 0}),(0,d.jsx)(l,{label:`Tab 2`,onClick:()=>void 0})]},`2`),(0,d.jsx)(n,{variant:`ghost`,label:`Action 01`,onClick:()=>void 0},`3`),(0,d.jsx)(n,{variant:`ghost`,label:`Action 02`,onClick:()=>void 0},`4`)],toolbarRight:[(0,d.jsx)(n,{variant:`ghost`,icon:(0,d.jsx)(e,{}),onClick:()=>void 0},`1`),(0,d.jsx)(n,{variant:`ghost`,icon:(0,d.jsx)(t,{}),onClick:()=>void 0},`2`)]}},h={args:{...m.args,toolbarLeft:null,toolbarRight:null}},g={args:{...m.args,breadcrumb:null,status:null,contentType:null}},_={args:{title:`Application title`}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Full.args,
    toolbarLeft: null,
    toolbarRight: null
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Full.args,
    breadcrumb: null,
    status: null,
    contentType: null
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Application title'
  }
}`,..._.parameters?.docs?.source}}};var v=[`Full`,`WithoutToolbar`,`WithoutInformation`,`Simple`];export{m as Full,_ as Simple,g as WithoutInformation,h as WithoutToolbar,v as __namedExportsOrder,p as default};