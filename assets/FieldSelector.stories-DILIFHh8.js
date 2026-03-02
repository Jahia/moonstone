import{j as e}from"./iframe-CqqD9CEw.js";import{B as l}from"./Button-BqPWMbvb.js";import{S as i}from"./Close-CZKn1qGK.js";import{S as n}from"./MoreVert-BbvseNbB.js";import{F as p}from"./FieldSelector-CR5_aUt6.js";import{I as m}from"./Input-Cz8aLOhU.js";import{D as u}from"./TreeViewMenu-noao5pd_.js";import{R as d,a as s}from"./RadioItem-B_JbR1oS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-tl9NDVdp.js";import"./Typography-CHkkVnCt.js";import"./HandleDrag-CSrxQz8A.js";import"./SearchInput-CkxRH0D7.js";import"./Search-kHCryypJ.js";import"./BaseInput-BmEvDM8O.js";import"./Cancel-BcPmLURR.js";import"./ChevronDown-CG3YAK4e.js";import"./Tag-DPbCNmO2.js";import"./MenuItem-CCPxJG-r.js";import"./onArrowNavigation-CltwoEwZ.js";import"./ListItem-I1MIxdZ0.js";import"./TreeView-CzMBMeF3.js";import"./CheckboxUnchecked-p7Q92pdb.js";import"./ChevronRight-_bKvDoQ9.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Separator-DPsU-9JV.js";import"./RadioUnchecked-DhQ2fqDX.js";const c="data:text/markdown;base64,Rm9ybSB2YWxpZGF0aW9uIG11c3QgYmUgbWFkZSBvbiB0aGUgRmllbGQgbGV2ZWwKUHJvcCBidXR0b25zIG9ubHkgc3VwcG9ydHMgYnV0dG9uIGNvbXBvbmVudHMKU2VsZWN0b3JzIG11c3QgYmUgc2V0IG9uIHNpemUgYmln",E={title:"Components/Field/FieldSelector",component:p,tags:["beta"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"},notes:{markdown:c}},argTypes:{buttons:{control:!1},selector:{control:!1}}},o={args:{buttons:e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(n,{})}),e.jsx(l,{icon:e.jsx(i,{})})]}),selector:e.jsx(m,{size:"big",placeholder:"Input value"})}},a={args:{...o.args,selector:e.jsx(u,{variant:"outlined",size:"medium",label:"Input value",value:"",data:[{label:"option 1",value:"1"},{label:"option 2",value:"2"},{label:"option 3 with very long long label label label label label label label label",value:"3"}]})}},r={args:{...o.args,selector:e.jsx("textarea",{style:{width:"100%"},placeholder:"Input value"})}},t={args:{...o.args,buttons:e.jsx(l,{icon:e.jsx(i,{})}),selector:e.jsxs(d,{name:"radio",children:[e.jsx(s,{id:"radio1",label:"Yes",value:"Yes"}),e.jsx(s,{id:"radio2",label:"No",value:"No"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
