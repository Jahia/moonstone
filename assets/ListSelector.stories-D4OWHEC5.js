import{r as c,j as p}from"./iframe-CwlF9BO-.js";/* empty css                  */import{L as l,l as s}from"./listSelectorData-XmY2YTSv.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DhalN_fv.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-B4fWLWvi.js";import"./Typography-dTVHgYTN.js";import"./ChevronDoubleRight-CDQiBpNo.js";import"./ChevronRight-BjLXCL3Z.js";import"./Close-DW0do-xp.js";import"./HandleDrag-Cu8Bk1uJ.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./ListItem-DfUQF0Iv.js";import"./SearchInput-BzARVd1Z.js";import"./Search-B-GGzfBc.js";import"./BaseInput-mY2-4bzD.js";import"./Cancel-CuJnQdSs.js";const j={title:"Components/ListSelector",component:l,parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0},componentSubtitle:"RadioGroup & RadioItem",actions:{argTypesRegex:"^on.*"}},argTypes:{children:{table:{disable:!0}}}},t={args:{options:s,values:["1","3","5"],onChange:e=>console.log(e)}},r={args:{isReadOnly:!0,options:s,values:["1","3","5"],onChange:e=>console.log(e)}},o={render:e=>{const[a,n]=c.useState([]),i=s;return p.jsx(l,{...e,label:{rightListTitle:"Label for the right list",leftListTitle:"Label for the left list",addAllTitle:"Add all",removeAllTitle:"Remove all",selected:`${a.length} item(s) selected`},options:i,values:a,onChange:n})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
