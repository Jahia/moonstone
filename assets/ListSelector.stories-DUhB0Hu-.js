import{j as S}from"./jsx-runtime-Cf8x2fCZ.js";import{r as L}from"./index-G8LIXM5I.js";/* empty css                  */import{L as h,l as s}from"./listSelectorData-D6qQmHQC.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Button-CgeSGZUR.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-DsiRlRl8.js";import"./Typography-C8hU4Ja4.js";import"./useAccessibleClick-Dg2YirTu.js";import"./ListItem-Crrcgnf0.js";import"./HandleDrag-D6n6KY9w.js";import"./SearchInput-DQDkqlfu.js";import"./Search-DSeLwkIx.js";import"./ChevronRight-CtX5Dnjk.js";import"./ChevronDoubleRight-DJ_10qPq.js";import"./Close-Dt0TtWGW.js";const w={title:"Components/ListSelector",component:h,parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0},componentSubtitle:"RadioGroup & RadioItem",actions:{argTypesRegex:"^on.*"}},argTypes:{children:{table:{disable:!0}}}},t={args:{options:s,values:["1","3","5"],onChange:e=>console.log(e)}},r={args:{isReadOnly:!0,options:s,values:["1","3","5"],onChange:e=>console.log(e)}},o={render:e=>{const[a,y]=L.useState([]),v=s;return S.jsx(h,{...e,label:{rightListTitle:"Label for the right list",leftListTitle:"Label for the left list",addAllTitle:"Add all",removeAllTitle:"Remove all",selected:`${a.length} item(s) selected`},options:v,values:a,onChange:y})}};var l,n,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    options: listSelectorData,
    values: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    options: listSelectorData,
    values: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const z=["Basic","ReadOnly","Controlled"];export{t as Basic,o as Controlled,r as ReadOnly,z as __namedExportsOrder,w as default};
