import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as t}from"./Button-BaB_rorB.js";import{D as x}from"./Dropdown-C9Ewjnov.js";import{H as B}from"./Header-DMBpNqIg.js";import{S as j,a as T}from"./ViewList-B3Yh0X7l.js";import{T as S,a as s}from"./TabItem-DFObs6mV.js";import{S as w}from"./ArrowLeft-x3iw1mXc.js";import{C as n}from"./Chip-DYQGjGkR.js";import{a as A,B as a}from"./BreadcrumbItem-Cb2mAqdZ.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-DsiRlRl8.js";import"./Typography-CgHbMZIy.js";import"./Tag-B_zZEzlB.js";import"./Search-DSeLwkIx.js";import"./ChevronDown-DW4Cg-no.js";import"./MenuItem-CJE6ZKnX.js";import"./SearchInput-BXjOjnse.js";import"./onArrowNavigation-DJ1kLiB7.js";import"./ListItem-qpjdWy_l.js";import"./TreeView-GmiiSYVy.js";import"./ChevronRight-CtX5Dnjk.js";import"./CheckboxUnchecked-CIfxf0rQ.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Separator-B3Ws4ABk.js";const c=[{label:"option 01",value:"1"},{label:"option 02",value:"2"}],ae={title:"Components/Header",component:B,argTypes:{title:{table:{type:{summary:"string"}}},backButton:{table:{type:{summary:"<Button/>"}},control:{disable:!0}},search:{control:{disable:!0}},mainActions:{control:{disable:!0}},contentType:{table:{type:{summary:"<Chip/>"}},control:{disable:!0}},status:{table:{type:{summary:"<Chip/>"}},control:{disable:!0}},breadcrumb:{table:{type:{summary:"<Breadcrumb/>"}},control:{disable:!0}},toolbar:{table:{disable:!0}},toolbarLeft:{control:{disable:!0}},toolbarRight:{control:{disable:!0}}}},o={args:{title:"Page Title",backButton:e.jsx(t,{variant:"outlined",icon:e.jsx(w,{}),onClick:()=>{}}),search:e.jsx(t,{size:"big",variant:"ghost",label:"Search",onClick:()=>{}}),mainActions:[e.jsx(t,{size:"big",label:"Secondary",variant:"outlined",onClick:()=>{}},"1"),e.jsx(t,{size:"big",label:"Primary",color:"accent",onClick:()=>{}},"2")],status:[e.jsx(n,{label:"status A"},"1"),e.jsx(n,{color:"warning",label:"status B"},"2")],breadcrumb:[e.jsxs(A,{children:[e.jsx(a,{label:"item 01",onClick:()=>{}}),e.jsx(a,{label:"item 02",onClick:()=>{}}),e.jsx(a,{label:"item 03",onClick:()=>{}}),e.jsx(a,{label:"item 04",onClick:()=>{}}),e.jsx(a,{label:"item 05",onClick:()=>{}})]},"1")],contentType:e.jsx(n,{label:"Page"}),toolbarLeft:[e.jsx(x,{label:"Dropdown",size:"small",value:c[0].value,variant:"ghost",data:c},"1"),e.jsxs(S,{children:[e.jsx(s,{isSelected:!0,label:"Tab 1",onClick:()=>{}}),e.jsx(s,{label:"Tab 2",onClick:()=>{}})]},"2"),e.jsx(t,{variant:"ghost",label:"Action 01",onClick:()=>{}},"3"),e.jsx(t,{variant:"ghost",label:"Action 02",onClick:()=>{}},"4")],toolbarRight:[e.jsx(t,{variant:"ghost",icon:e.jsx(j,{}),onClick:()=>{}},"1"),e.jsx(t,{variant:"ghost",icon:e.jsx(T,{}),onClick:()=>{}},"2")]}},r={args:{...o.args,toolbarLeft:null,toolbarRight:null}},i={args:{...o.args,breadcrumb:null,status:null,contentType:null}},l={args:{title:"Application title"}};var m,u,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    backButton: <Button variant="outlined" icon={<ArrowLeft />} onClick={() => undefined} />,
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
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,p,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Full.args,
    toolbarLeft: null,
    toolbarRight: null
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var k,v,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Full.args,
    breadcrumb: null,
    status: null,
    contentType: null
  }
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var f,h,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Application title'
  }
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const re=["Full","WithoutToolbar","WithoutInformation","Simple"];export{o as Full,l as Simple,i as WithoutInformation,r as WithoutToolbar,re as __namedExportsOrder,ae as default};
