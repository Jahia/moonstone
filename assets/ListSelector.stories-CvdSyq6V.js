import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-0pPUpMBg.js";import{t as r}from"./jsx-runtime-DTRofVPE.js";import{G as i,K as a}from"./icons-U8xZOogm.js";import{t as o}from"./storybook-ZkaiIgK-.js";import{n as s,t as c}from"./listSelectorData-DvB9VCsX.js";var l,u,d,f,p,m,h;t((()=>{l=e(n(),1),o(),i(),c(),u=r(),d={title:`Components/ListSelector`,component:a,parameters:{layout:`centered`,knobs:{disable:!0},storysource:{disable:!0},componentSubtitle:`RadioGroup & RadioItem`,actions:{argTypesRegex:`^on.*`}},argTypes:{children:{table:{disable:!0}}}},f={args:{options:s,values:[`1`,`3`,`5`],onChange:e=>console.log(e)}},p={args:{isReadOnly:!0,options:s,values:[`1`,`3`,`5`],onChange:e=>console.log(e)}},m={render:e=>{let[t,n]=(0,l.useState)([]),r=s;return(0,u.jsx)(a,{...e,label:{rightListTitle:`Label for the right list`,leftListTitle:`Label for the left list`,addAllTitle:`Add all`,removeAllTitle:`Remove all`,selected:`${t.length} item(s) selected`},options:r,values:t,onChange:n})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    options: listSelectorData,
    values: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    options: listSelectorData,
    values: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Basic`,`ReadOnly`,`Controlled`]}))();export{f as Basic,m as Controlled,p as ReadOnly,h as __namedExportsOrder,d as default};