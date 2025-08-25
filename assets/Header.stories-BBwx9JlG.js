import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as t}from"./Button-D0D1oEGK.js";import{D as x}from"./Dropdown-Cf9_gv5C.js";import{H as j}from"./Header-BJtisPY1.js";import{S as B,a as T}from"./ViewList-B3Yh0X7l.js";import{T as S,a as s}from"./TabItem-28rXiCge.js";import{C as n}from"./Chip-TPLQSpTh.js";import{a as w,B as o}from"./BreadcrumbItem-DsJ-ZJ14.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-DsiRlRl8.js";import"./Typography-B9xY8qhe.js";import"./Tag-B2cGE1yR.js";import"./Search-DSeLwkIx.js";import"./ChevronDown-DW4Cg-no.js";import"./MenuItem-Ff_NV9Uz.js";import"./SearchInput-D5Terlek.js";import"./onArrowNavigation-DJ1kLiB7.js";import"./ListItem-o6Dhn_tr.js";import"./TreeView-DvkNZsIM.js";import"./ChevronRight-CtX5Dnjk.js";import"./CheckboxUnchecked-CIfxf0rQ.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Separator-B3Ws4ABk.js";const c=[{label:"option 01",value:"1"},{label:"option 02",value:"2"}],te={title:"Components/Header",component:j,argTypes:{title:{table:{type:{summary:"string"}}},search:{control:{disable:!0}},mainActions:{control:{disable:!0}},contentType:{table:{type:{summary:"<Chip/>"}},control:{disable:!0}},status:{table:{type:{summary:"<Chip/>"}},control:{disable:!0}},breadcrumb:{table:{type:{summary:"<Breadcrumb/>"}},control:{disable:!0}},toolbar:{table:{disable:!0}},toolbarLeft:{control:{disable:!0}},toolbarRight:{control:{disable:!0}}}},a={args:{title:"Page Title",search:e.jsx(t,{size:"big",variant:"ghost",label:"Search",onClick:()=>{}}),mainActions:[e.jsx(t,{size:"big",label:"Secondary",variant:"outlined",onClick:()=>{}},"1"),e.jsx(t,{size:"big",label:"Primary",color:"accent",onClick:()=>{}},"2")],status:[e.jsx(n,{label:"status A"},"1"),e.jsx(n,{color:"warning",label:"status B"},"2")],breadcrumb:[e.jsxs(w,{children:[e.jsx(o,{label:"item 01",onClick:()=>{}}),e.jsx(o,{label:"item 02",onClick:()=>{}}),e.jsx(o,{label:"item 03",onClick:()=>{}}),e.jsx(o,{label:"item 04",onClick:()=>{}}),e.jsx(o,{label:"item 05",onClick:()=>{}})]},"1")],contentType:e.jsx(n,{label:"Page"}),toolbarLeft:[e.jsx(x,{label:"Dropdown",size:"small",value:c[0].value,variant:"ghost",data:c},"1"),e.jsxs(S,{children:[e.jsx(s,{isSelected:!0,label:"Tab 1",onClick:()=>{}}),e.jsx(s,{label:"Tab 2",onClick:()=>{}})]},"2"),e.jsx(t,{variant:"ghost",label:"Action 01",onClick:()=>{}},"3"),e.jsx(t,{variant:"ghost",label:"Action 02",onClick:()=>{}},"4")],toolbarRight:[e.jsx(t,{variant:"ghost",icon:e.jsx(B,{}),onClick:()=>{}},"1"),e.jsx(t,{variant:"ghost",icon:e.jsx(T,{}),onClick:()=>{}},"2")]}},r={args:{...a.args,toolbarLeft:null,toolbarRight:null}},i={args:{...a.args,breadcrumb:null,status:null,contentType:null}},l={args:{title:"Application title"}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,p,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var h,f,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Application title'
  }
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ae=["Full","WithoutToolbar","WithoutInformation","Simple"];export{a as Full,l as Simple,i as WithoutInformation,r as WithoutToolbar,ae as __namedExportsOrder,te as default};
