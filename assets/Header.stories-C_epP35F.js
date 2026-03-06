import{j as e}from"./iframe-DY7FqgIP.js";import{S as m,a as d}from"./ViewList-DbDRZ32H.js";import{H as u}from"./Header-CjnL4oec.js";import{T as b,a as s}from"./TabItem-DboQ6kei.js";import{B as t}from"./Button-BHP_ep9C.js";import{D as p}from"./TreeViewMenu-DMc5_ru5.js";import{C as n}from"./Chip-Cqj5wqyv.js";import{a as g,B as o}from"./BreadcrumbItem-BHv-x5Gd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Typography-C2_BPpUS.js";import"./Separator-D33nCgLA.js";import"./onArrowNavigation-CltwoEwZ.js";/* empty css               */import"./Loader-DDfPPkz3.js";import"./Cancel-DWQjII19.js";import"./ChevronDown-Bw4Yx6UC.js";import"./Tag-DPoKN76X.js";import"./Close-DdEdRqBu.js";import"./MenuItem-aOOxm0Tu.js";import"./SearchInput-BCyQPTP2.js";import"./Search-D07VPGC7.js";import"./BaseInput-CJXmjQbB.js";import"./ListItem-DCPEhrWj.js";import"./TreeView-DKe78TWd.js";import"./CheckboxUnchecked-Wjn_Jv-R.js";import"./ChevronRight-BcYyZq_5.js";import"./useAccessibleClick-Bdvd2I0f.js";const c=[{label:"option 01",value:"1"},{label:"option 02",value:"2"}],J={title:"Components/Header",component:u,argTypes:{title:{table:{type:{summary:"string"}}},search:{control:{disable:!0}},mainActions:{control:{disable:!0}},contentType:{table:{type:{summary:"<Chip/>"}},control:{disable:!0}},status:{table:{type:{summary:"<Chip/>"}},control:{disable:!0}},breadcrumb:{table:{type:{summary:"<Breadcrumb/>"}},control:{disable:!0}},toolbar:{table:{disable:!0}},toolbarLeft:{control:{disable:!0}},toolbarRight:{control:{disable:!0}}}},a={args:{title:"Page Title",search:e.jsx(t,{size:"big",variant:"ghost",label:"Search",onClick:()=>{}}),mainActions:[e.jsx(t,{size:"big",label:"Secondary",variant:"outlined",onClick:()=>{}},"1"),e.jsx(t,{size:"big",label:"Primary",color:"accent",onClick:()=>{}},"2")],status:[e.jsx(n,{label:"status A"},"1"),e.jsx(n,{color:"warning",label:"status B"},"2")],breadcrumb:[e.jsxs(g,{children:[e.jsx(o,{label:"item 01",onClick:()=>{}}),e.jsx(o,{label:"item 02",onClick:()=>{}}),e.jsx(o,{label:"item 03",onClick:()=>{}}),e.jsx(o,{label:"item 04",onClick:()=>{}}),e.jsx(o,{label:"item 05",onClick:()=>{}})]},"1")],contentType:e.jsx(n,{label:"Page"}),toolbarLeft:[e.jsx(p,{label:"Dropdown",size:"small",value:c[0].value,variant:"ghost",data:c},"1"),e.jsxs(b,{children:[e.jsx(s,{isSelected:!0,label:"Tab 1",onClick:()=>{}}),e.jsx(s,{label:"Tab 2",onClick:()=>{}})]},"2"),e.jsx(t,{variant:"ghost",label:"Action 01",onClick:()=>{}},"3"),e.jsx(t,{variant:"ghost",label:"Action 02",onClick:()=>{}},"4")],toolbarRight:[e.jsx(t,{variant:"ghost",icon:e.jsx(m,{}),onClick:()=>{}},"1"),e.jsx(t,{variant:"ghost",icon:e.jsx(d,{}),onClick:()=>{}},"2")]}},r={args:{...a.args,toolbarLeft:null,toolbarRight:null}},i={args:{...a.args,breadcrumb:null,status:null,contentType:null}},l={args:{title:"Application title"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Full.args,
    toolbarLeft: null,
    toolbarRight: null
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Full.args,
    breadcrumb: null,
    status: null,
    contentType: null
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Application title'
  }
}`,...l.parameters?.docs?.source}}};const K=["Full","WithoutToolbar","WithoutInformation","Simple"];export{a as Full,l as Simple,i as WithoutInformation,r as WithoutToolbar,K as __namedExportsOrder,J as default};
