import{j as e}from"./iframe-C2ZGshnl.js";import{B as l}from"./Button-b5UlppAi.js";import{S as i}from"./Close-Di7097Fl.js";import{S as n}from"./MoreVert-CJ-pNgRG.js";import{F as p}from"./FieldSelector-BI5SEYrX.js";import{I as m}from"./Input-BBpDYJzg.js";import{D as u}from"./TreeViewMenu-D1GJR74R.js";import{R as d,a as s}from"./RadioItem-DFtuP4IK.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-Db9zUkcM.js";import"./Typography-spZ3wEuk.js";import"./HandleDrag-rjdn9kWH.js";import"./SearchInput-CO-LcLB0.js";import"./Search-EhGJqPsi.js";import"./BaseInput-DjqdeNsm.js";import"./Cancel-Dny8QdOG.js";import"./ChevronDown-B4w-FHhJ.js";import"./Tag-BUAFRkNB.js";import"./MenuItem-C6o4MEA_.js";import"./onArrowNavigation-CltwoEwZ.js";import"./ListItem-DvKN6_ec.js";import"./TreeView-Co2xpqgK.js";import"./CheckboxUnchecked-cFvdjCB9.js";import"./ChevronRight-c3k2w_be.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Separator-Bw9zPHgw.js";import"./RadioUnchecked-lYzWAS2c.js";const c="data:text/markdown;base64,Rm9ybSB2YWxpZGF0aW9uIG11c3QgYmUgbWFkZSBvbiB0aGUgRmllbGQgbGV2ZWwKUHJvcCBidXR0b25zIG9ubHkgc3VwcG9ydHMgYnV0dG9uIGNvbXBvbmVudHMKU2VsZWN0b3JzIG11c3QgYmUgc2V0IG9uIHNpemUgYmln",E={title:"Components/Field/FieldSelector",component:p,tags:["beta"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"},notes:{markdown:c}},argTypes:{buttons:{control:!1},selector:{control:!1}}},o={args:{buttons:e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(n,{})}),e.jsx(l,{icon:e.jsx(i,{})})]}),selector:e.jsx(m,{size:"big",placeholder:"Input value"})}},a={args:{...o.args,selector:e.jsx(u,{variant:"outlined",size:"medium",label:"Input value",value:"",data:[{label:"option 1",value:"1"},{label:"option 2",value:"2"},{label:"option 3 with very long long label label label label label label label label",value:"3"}]})}},r={args:{...o.args,selector:e.jsx("textarea",{style:{width:"100%"},placeholder:"Input value"})}},t={args:{...o.args,buttons:e.jsx(l,{icon:e.jsx(i,{})}),selector:e.jsxs(d,{name:"radio",children:[e.jsx(s,{id:"radio1",label:"Yes",value:"Yes"}),e.jsx(s,{id:"radio2",label:"No",value:"No"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
