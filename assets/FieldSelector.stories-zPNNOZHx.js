import{j as e}from"./iframe-CPFqXHqg.js";import{B as l}from"./Button-CqY4gqRm.js";import{D as n}from"./Dropdown-BVmtHcsz.js";import{S as i}from"./Close-D0-Emg9s.js";import{S as p}from"./MoreVert-D18zanVC.js";import{F as m}from"./FieldSelector-iOmiZDsf.js";import{I as u}from"./Input-By3knYVB.js";import{R as d,a as s}from"./RadioItem-BTN3zQB1.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-B35AnWXU.js";import"./Typography-RAjipybU.js";import"./Cancel-CKfLfZ8p.js";import"./ChevronDown-Bhsf21Kh.js";import"./Tag-BHr3W148.js";import"./MenuItem-BHdbQifU.js";import"./SearchInput-Bqihs9o-.js";import"./Search-CsEjMOYB.js";import"./BaseInput-BcRLtJ5C.js";import"./onArrowNavigation-CltwoEwZ.js";import"./ListItem-BCc7P9_8.js";import"./TreeView-CbYm1pRu.js";import"./CheckboxUnchecked-Ch1Gga4p.js";import"./ChevronRight-bGcpSg_P.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Separator--rFuNhVI.js";import"./HandleDrag-CXzm2RRB.js";import"./RadioUnchecked-BjtH5otN.js";const c="data:text/markdown;base64,Rm9ybSB2YWxpZGF0aW9uIG11c3QgYmUgbWFkZSBvbiB0aGUgRmllbGQgbGV2ZWwKUHJvcCBidXR0b25zIG9ubHkgc3VwcG9ydHMgYnV0dG9uIGNvbXBvbmVudHMKU2VsZWN0b3JzIG11c3QgYmUgc2V0IG9uIHNpemUgYmln",E={title:"Components/Field/FieldSelector",component:m,tags:["beta"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"},notes:{markdown:c}},argTypes:{buttons:{control:!1},selector:{control:!1}}},o={args:{buttons:e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(p,{})}),e.jsx(l,{icon:e.jsx(i,{})})]}),selector:e.jsx(u,{size:"big",placeholder:"Input value"})}},a={args:{...o.args,selector:e.jsx(n,{variant:"outlined",size:"medium",label:"Input value",value:"",data:[{label:"option 1",value:"1"},{label:"option 2",value:"2"},{label:"option 3 with very long long label label label label label label label label",value:"3"}]})}},r={args:{...o.args,selector:e.jsx("textarea",{style:{width:"100%"},placeholder:"Input value"})}},t={args:{...o.args,buttons:e.jsx(l,{icon:e.jsx(i,{})}),selector:e.jsxs(d,{name:"radio",children:[e.jsx(s,{id:"radio1",label:"Yes",value:"Yes"}),e.jsx(s,{id:"radio2",label:"No",value:"No"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    buttons: <><Button icon={<MoreVert />} /><Button icon={<Close />} /></>,
    selector: <Input size="big" placeholder="Input value" />
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selector: <Dropdown variant="outlined" size="medium" label="Input value" value="" data={[{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selector: <textarea style={{
      width: '100%'
    }} placeholder="Input value" />
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    buttons: <Button icon={<Close />} />,
    selector: <RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes" /><RadioItem id="radio2" label="No" value="No" /></RadioGroup>
  }
}`,...t.parameters?.docs?.source}}};const J=["Default","WithDropdown","WithTextarea","WithRadio"];export{o as Default,a as WithDropdown,t as WithRadio,r as WithTextarea,J as __namedExportsOrder,E as default};
