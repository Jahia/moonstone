import{r as c,j as p}from"./iframe-DnEO7nHG.js";/* empty css                  */import{L as l,l as s}from"./listSelectorData-D7R0OmU8.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-D5ICsJ0U.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-DiM4oYUW.js";import"./Typography-BPRzLVGf.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./ListItem-DvI8PPNG.js";import"./HandleDrag-CJo7W2eN.js";import"./SearchInput-DdnWTnCr.js";import"./BaseInput-MS69sLl1.js";import"./Cancel-B05SPb1H.js";import"./Search-C0-jo4vK.js";import"./ChevronRight-DbLXUeNS.js";import"./ChevronDoubleRight-CJ9d1duC.js";import"./Close-BgzQ82qr.js";const j={title:"Components/ListSelector",component:l,parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0},componentSubtitle:"RadioGroup & RadioItem",actions:{argTypesRegex:"^on.*"}},argTypes:{children:{table:{disable:!0}}}},t={args:{options:s,values:["1","3","5"],onChange:e=>console.log(e)}},r={args:{isReadOnly:!0,options:s,values:["1","3","5"],onChange:e=>console.log(e)}},o={render:e=>{const[a,n]=c.useState([]),i=s;return p.jsx(l,{...e,label:{rightListTitle:"Label for the right list",leftListTitle:"Label for the left list",addAllTitle:"Add all",removeAllTitle:"Remove all",selected:`${a.length} item(s) selected`},options:i,values:a,onChange:n})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: listSelectorData,
    values: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    options: listSelectorData,
    values: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [arrayValue, setArrayValue] = useState([]);
    const options = listSelectorData;
    return <ListSelector {...args} label={{
      rightListTitle: 'Label for the right list',
      leftListTitle: 'Label for the left list',
      addAllTitle: 'Add all',
      removeAllTitle: 'Remove all',
      selected: \`\${arrayValue.length} item(s) selected\`
    }} options={options} values={arrayValue} onChange={setArrayValue} />;
  }
}`,...o.parameters?.docs?.source}}};const E=["Basic","ReadOnly","Controlled"];export{t as Basic,o as Controlled,r as ReadOnly,E as __namedExportsOrder,j as default};
