import{r as c,j as p}from"./iframe-C2ZGshnl.js";/* empty css                  */import{L as l,l as s}from"./listSelectorData-CLeXunHa.js";import"./preload-helper-D9Z9MdNV.js";import"./Button-b5UlppAi.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-Db9zUkcM.js";import"./Typography-spZ3wEuk.js";import"./ChevronDoubleRight-BD25UPW8.js";import"./ChevronRight-c3k2w_be.js";import"./Close-Di7097Fl.js";import"./HandleDrag-rjdn9kWH.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./ListItem-DvKN6_ec.js";import"./SearchInput-CO-LcLB0.js";import"./Search-EhGJqPsi.js";import"./BaseInput-DjqdeNsm.js";import"./Cancel-Dny8QdOG.js";const j={title:"Components/ListSelector",component:l,parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0},componentSubtitle:"RadioGroup & RadioItem",actions:{argTypesRegex:"^on.*"}},argTypes:{children:{table:{disable:!0}}}},t={args:{options:s,values:["1","3","5"],onChange:e=>console.log(e)}},r={args:{isReadOnly:!0,options:s,values:["1","3","5"],onChange:e=>console.log(e)}},o={render:e=>{const[a,n]=c.useState([]),i=s;return p.jsx(l,{...e,label:{rightListTitle:"Label for the right list",leftListTitle:"Label for the left list",addAllTitle:"Add all",removeAllTitle:"Remove all",selected:`${a.length} item(s) selected`},options:i,values:a,onChange:n})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
