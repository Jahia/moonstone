import{j as e}from"./iframe-CPFqXHqg.js";import{B as t}from"./Button-CqY4gqRm.js";import{D as m}from"./Dropdown-BVmtHcsz.js";import{S as d,a as u}from"./ViewList-BV6_99WF.js";import{H as b}from"./Header-Dg9Z-aTZ.js";import{T as p,a as s}from"./TabItem-dibFSHTd.js";import{C as n}from"./Chip-B00jSiF-.js";import{a as g,B as o}from"./BreadcrumbItem-CxZSdJqg.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-B35AnWXU.js";import"./Typography-RAjipybU.js";import"./Cancel-CKfLfZ8p.js";import"./ChevronDown-Bhsf21Kh.js";import"./Tag-BHr3W148.js";import"./MenuItem-BHdbQifU.js";import"./SearchInput-Bqihs9o-.js";import"./Search-CsEjMOYB.js";import"./BaseInput-BcRLtJ5C.js";import"./onArrowNavigation-CltwoEwZ.js";import"./ListItem-BCc7P9_8.js";import"./TreeView-CbYm1pRu.js";import"./CheckboxUnchecked-Ch1Gga4p.js";import"./ChevronRight-bGcpSg_P.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Separator--rFuNhVI.js";const c=[{label:"option 01",value:"1"},{label:"option 02",value:"2"}],q={title:"Components/Header",component:b,argTypes:{title:{table:{type:{summary:"string"}}},search:{control:{disable:!0}},mainActions:{control:{disable:!0}},contentType:{table:{type:{summary:"<Chip/>"}},control:{disable:!0}},status:{table:{type:{summary:"<Chip/>"}},control:{disable:!0}},breadcrumb:{table:{type:{summary:"<Breadcrumb/>"}},control:{disable:!0}},toolbar:{table:{disable:!0}},toolbarLeft:{control:{disable:!0}},toolbarRight:{control:{disable:!0}}}},a={args:{title:"Page Title",search:e.jsx(t,{size:"big",variant:"ghost",label:"Search",onClick:()=>{}}),mainActions:[e.jsx(t,{size:"big",label:"Secondary",variant:"outlined",onClick:()=>{}},"1"),e.jsx(t,{size:"big",label:"Primary",color:"accent",onClick:()=>{}},"2")],status:[e.jsx(n,{label:"status A"},"1"),e.jsx(n,{color:"warning",label:"status B"},"2")],breadcrumb:[e.jsxs(g,{children:[e.jsx(o,{label:"item 01",onClick:()=>{}}),e.jsx(o,{label:"item 02",onClick:()=>{}}),e.jsx(o,{label:"item 03",onClick:()=>{}}),e.jsx(o,{label:"item 04",onClick:()=>{}}),e.jsx(o,{label:"item 05",onClick:()=>{}})]},"1")],contentType:e.jsx(n,{label:"Page"}),toolbarLeft:[e.jsx(m,{label:"Dropdown",size:"small",value:c[0].value,variant:"ghost",data:c},"1"),e.jsxs(p,{children:[e.jsx(s,{isSelected:!0,label:"Tab 1",onClick:()=>{}}),e.jsx(s,{label:"Tab 2",onClick:()=>{}})]},"2"),e.jsx(t,{variant:"ghost",label:"Action 01",onClick:()=>{}},"3"),e.jsx(t,{variant:"ghost",label:"Action 02",onClick:()=>{}},"4")],toolbarRight:[e.jsx(t,{variant:"ghost",icon:e.jsx(d,{}),onClick:()=>{}},"1"),e.jsx(t,{variant:"ghost",icon:e.jsx(u,{}),onClick:()=>{}},"2")]}},r={args:{...a.args,toolbarLeft:null,toolbarRight:null}},i={args:{...a.args,breadcrumb:null,status:null,contentType:null}},l={args:{title:"Application title"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const J=["Full","WithoutToolbar","WithoutInformation","Simple"];export{a as Full,l as Simple,i as WithoutInformation,r as WithoutToolbar,J as __namedExportsOrder,q as default};
