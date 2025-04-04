import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as l}from"./Button-Cjq0zrP_.js";import{D as h}from"./Dropdown-BDYcoAVm.js";import{S as j}from"./MoreVert-DsReYBZM.js";import{S as f}from"./Close-Dt0TtWGW.js";import{F as G}from"./FieldSelector-B--cAP--.js";import{I as R}from"./Input-B5kM0s63.js";import{a as w,R as s}from"./RadioItem-EPPf3-Fw.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-DsiRlRl8.js";import"./Typography-C8hU4Ja4.js";import"./Tag-CXHcMMTy.js";import"./Search-DSeLwkIx.js";import"./ChevronDown-DW4Cg-no.js";import"./MenuItem-B_pJzWTb.js";import"./SearchInput-5ftwiOLF.js";import"./ListItem-Crrcgnf0.js";import"./TreeView-Brs_G0Nf.js";import"./ChevronRight-CtX5Dnjk.js";import"./CheckboxUnchecked-CIfxf0rQ.js";import"./Separator-ChTYNnEP.js";import"./HandleDrag-D6n6KY9w.js";import"./RadioUnchecked-DaPA0oal.js";const S="data:text/markdown;base64,Rm9ybSB2YWxpZGF0aW9uIG11c3QgYmUgbWFkZSBvbiB0aGUgRmllbGQgbGV2ZWwKUHJvcCBidXR0b25zIG9ubHkgc3VwcG9ydHMgYnV0dG9uIGNvbXBvbmVudHMKU2VsZWN0b3JzIG11c3QgYmUgc2V0IG9uIHNpemUgYmln",$={title:"Components/Field/FieldSelector",component:G,tags:["beta"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"},notes:{markdown:S}},argTypes:{buttons:{control:!1},selector:{control:!1}}},o={args:{buttons:e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(j,{})}),e.jsx(l,{icon:e.jsx(f,{})})]}),selector:e.jsx(R,{size:"big",placeholder:"Input value"})}},a={args:{...o.args,selector:e.jsx(h,{variant:"outlined",size:"medium",label:"Input value",data:[{label:"option 1",value:"1"},{label:"option 2",value:"2"},{label:"option 3 with very long long label label label label label label label label",value:"3"}]})}},r={args:{...o.args,selector:e.jsx("textarea",{style:{width:"100%"},placeholder:"Input value"})}},t={args:{...o.args,buttons:e.jsx(l,{icon:e.jsx(f,{})}),selector:e.jsxs(w,{name:"radio",children:[e.jsx(s,{id:"radio1",label:"Yes",value:"Yes"}),e.jsx(s,{id:"radio2",label:"No",value:"No"})]})}};var i,n,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    buttons: <><Button icon={<MoreVert />} /><Button icon={<Close />} /></>,
    selector: <Input size="big" placeholder="Input value" />
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selector: <Dropdown variant="outlined" size="medium" label="Input value" data={[{
      label: 'option 1',
      value: '1'
    }, {
      label: 'option 2',
      value: '2'
    }, {
      label: 'option 3 with very long long label label label label label label label label',
      value: '3'
    }]} />
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,b,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selector: <textarea style={{
      width: '100%'
    }} placeholder="Input value" />
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,x,I;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    buttons: <Button icon={<Close />} />,
    selector: <RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes" /><RadioItem id="radio2" label="No" value="No" /></RadioGroup>
  }
}`,...(I=(x=t.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const ee=["Default","WithDropdown","WithTextarea","WithRadio"];export{o as Default,a as WithDropdown,t as WithRadio,r as WithTextarea,ee as __namedExportsOrder,$ as default};
