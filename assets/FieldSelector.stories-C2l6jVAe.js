import"./react-ST3FQwwi.js";import{t as e}from"./Close-DmhOlVcT.js";import{t}from"./MoreVert-DvWyjsya.js";import"./TreeView-BAErfG4a.js";import"./MenuItem-lZIHV49A.js";import"./Typography-BJLb8BXB.js";/* empty css               */import"./Loader-DhLBjAzv.js";import{t as n}from"./Button-DWL285rZ.js";import{t as r}from"./TreeViewMenu-i1NxamYa.js";import"./Tag-DFzvs6i3.js";import{t as i}from"./FieldSelector-0oAm1Zes.js";import"./BaseInput-w-FdJx31.js";import{t as a}from"./Input-Bg6HeHHZ.js";import"./ListItem-Jg59dXXK.js";import"./Separator-BzBI7aWX.js";import{n as o,t as s}from"./RadioItem-DCDv0MaW.js";import{t as c}from"./iframe-ICcM41bF.js";var l=`data:text/markdown;base64,Rm9ybSB2YWxpZGF0aW9uIG11c3QgYmUgbWFkZSBvbiB0aGUgRmllbGQgbGV2ZWwKUHJvcCBidXR0b25zIG9ubHkgc3VwcG9ydHMgYnV0dG9uIGNvbXBvbmVudHMKU2VsZWN0b3JzIG11c3QgYmUgc2V0IG9uIHNpemUgYmln`,u=c(),d={title:`Components/Field/FieldSelector`,component:i,tags:[`beta`],parameters:{layout:`padded`,actions:{argTypesRegex:`^on.*`},notes:{markdown:l}},argTypes:{buttons:{control:!1},selector:{control:!1}}},f={args:{buttons:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{icon:(0,u.jsx)(t,{})}),(0,u.jsx)(n,{icon:(0,u.jsx)(e,{})})]}),selector:(0,u.jsx)(a,{size:`big`,placeholder:`Input value`})}},p={args:{...f.args,selector:(0,u.jsx)(r,{variant:`outlined`,size:`medium`,label:`Input value`,value:``,data:[{label:`option 1`,value:`1`},{label:`option 2`,value:`2`},{label:`option 3 with very long long label label label label label label label label`,value:`3`}]})}},m={args:{...f.args,selector:(0,u.jsx)(`textarea`,{style:{width:`100%`},placeholder:`Input value`})}},h={args:{...f.args,buttons:(0,u.jsx)(n,{icon:(0,u.jsx)(e,{})}),selector:(0,u.jsxs)(o,{name:`radio`,children:[(0,u.jsx)(s,{id:`radio1`,label:`Yes`,value:`Yes`}),(0,u.jsx)(s,{id:`radio2`,label:`No`,value:`No`})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    buttons: <><Button icon={<MoreVert />} /><Button icon={<Close />} /></>,
    selector: <Input size="big" placeholder="Input value" />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selector: <textarea style={{
      width: '100%'
    }} placeholder="Input value" />
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    buttons: <Button icon={<Close />} />,
    selector: <RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes" /><RadioItem id="radio2" label="No" value="No" /></RadioGroup>
  }
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`WithDropdown`,`WithTextarea`,`WithRadio`];export{f as Default,p as WithDropdown,h as WithRadio,m as WithTextarea,g as __namedExportsOrder,d as default};