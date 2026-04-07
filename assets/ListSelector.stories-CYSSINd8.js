import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-ST3FQwwi.js";import"./Typography-BJLb8BXB.js";/* empty css               */import"./Loader-DhLBjAzv.js";import"./BaseInput-w-FdJx31.js";import"./ListItem-Jg59dXXK.js";import{n,t as r}from"./listSelectorData-CBMoFqGg.js";import{t as i}from"./iframe-ICcM41bF.js";/* empty css                  */var a=e(t(),1),o=i(),s={title:`Components/ListSelector`,component:n,parameters:{layout:`centered`,knobs:{disable:!0},storysource:{disable:!0},componentSubtitle:`RadioGroup & RadioItem`,actions:{argTypesRegex:`^on.*`}},argTypes:{children:{table:{disable:!0}}}},c={args:{options:r,values:[`1`,`3`,`5`],onChange:e=>console.log(e)}},l={args:{isReadOnly:!0,options:r,values:[`1`,`3`,`5`],onChange:e=>console.log(e)}},u={render:e=>{let[t,i]=(0,a.useState)([]),s=r;return(0,o.jsx)(n,{...e,label:{rightListTitle:`Label for the right list`,leftListTitle:`Label for the left list`,addAllTitle:`Add all`,removeAllTitle:`Remove all`,selected:`${t.length} item(s) selected`},options:s,values:t,onChange:i})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    options: listSelectorData,
    values: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    options: listSelectorData,
    values: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};var d=[`Basic`,`ReadOnly`,`Controlled`];export{c as Basic,u as Controlled,l as ReadOnly,d as __namedExportsOrder,s as default};