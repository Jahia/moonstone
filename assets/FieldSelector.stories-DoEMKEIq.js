import{j as e}from"./iframe-CwlF9BO-.js";import{B as l}from"./Button-DhalN_fv.js";import{S as i}from"./Close-DW0do-xp.js";import{S as n}from"./MoreVert-LenY89Hn.js";import{F as p}from"./FieldSelector-DfT5W2-G.js";import{I as m}from"./Input-BfPQ3Gln.js";import{D as u}from"./TreeViewMenu-LQSmnSjp.js";import{R as d,a as s}from"./RadioItem-UtEIK1lC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-B4fWLWvi.js";import"./Typography-dTVHgYTN.js";import"./HandleDrag-Cu8Bk1uJ.js";import"./SearchInput-BzARVd1Z.js";import"./Search-B-GGzfBc.js";import"./BaseInput-mY2-4bzD.js";import"./Cancel-CuJnQdSs.js";import"./ChevronDown-CHdVhc61.js";import"./Tag-Bn0Rgues.js";import"./MenuItem-jlGTJvl-.js";import"./onArrowNavigation-CltwoEwZ.js";import"./ListItem-DfUQF0Iv.js";import"./TreeView-6ERJxKws.js";import"./CheckboxUnchecked-BeAfAOZl.js";import"./ChevronRight-BjLXCL3Z.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Separator-pTFBikud.js";import"./RadioUnchecked-DjYtsntQ.js";const c="data:text/markdown;base64,Rm9ybSB2YWxpZGF0aW9uIG11c3QgYmUgbWFkZSBvbiB0aGUgRmllbGQgbGV2ZWwKUHJvcCBidXR0b25zIG9ubHkgc3VwcG9ydHMgYnV0dG9uIGNvbXBvbmVudHMKU2VsZWN0b3JzIG11c3QgYmUgc2V0IG9uIHNpemUgYmln",E={title:"Components/Field/FieldSelector",component:p,tags:["beta"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"},notes:{markdown:c}},argTypes:{buttons:{control:!1},selector:{control:!1}}},o={args:{buttons:e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(n,{})}),e.jsx(l,{icon:e.jsx(i,{})})]}),selector:e.jsx(m,{size:"big",placeholder:"Input value"})}},a={args:{...o.args,selector:e.jsx(u,{variant:"outlined",size:"medium",label:"Input value",value:"",data:[{label:"option 1",value:"1"},{label:"option 2",value:"2"},{label:"option 3 with very long long label label label label label label label label",value:"3"}]})}},r={args:{...o.args,selector:e.jsx("textarea",{style:{width:"100%"},placeholder:"Input value"})}},t={args:{...o.args,buttons:e.jsx(l,{icon:e.jsx(i,{})}),selector:e.jsxs(d,{name:"radio",children:[e.jsx(s,{id:"radio1",label:"Yes",value:"Yes"}),e.jsx(s,{id:"radio2",label:"No",value:"No"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
