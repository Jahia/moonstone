import{j as h}from"./jsx-runtime-Cf8x2fCZ.js";import{r as y}from"./index-G8LIXM5I.js";/* empty css                  */import{L as v,l as o}from"./listSelectorData-C_tBCEpe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Button-Cjq0zrP_.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-DsiRlRl8.js";import"./Typography-C8hU4Ja4.js";import"./ListItem-Crrcgnf0.js";import"./HandleDrag-D6n6KY9w.js";import"./SearchInput-5ftwiOLF.js";import"./Search-DSeLwkIx.js";import"./ChevronRight-CtX5Dnjk.js";import"./ChevronDoubleRight-DJ_10qPq.js";import"./Close-Dt0TtWGW.js";const q={title:"Components/ListSelector",component:v,parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0},componentSubtitle:"RadioGroup & RadioItem",actions:{argTypesRegex:"^on.*"}},argTypes:{children:{table:{disable:!0}}}},t={args:{isReadOnly:!1,label:{addAllTitle:"Add all",removeAllTitle:"Remove all",selected:"0 items selected"},options:o,values:["1","3","5"],onChange:e=>console.log(e)}},l={args:{isReadOnly:!0,label:{addAllTitle:"Add all",removeAllTitle:"Remove all",selected:"0 items selected"},options:o,values:["1","3","5"],onChange:e=>console.log(e)}},r={render:e=>{const[s,A]=y.useState([]),T=o;return h.jsx(v,{...e,label:{rightListTitle:"Label for the right list",leftListTitle:"Label for the left list",addAllTitle:"Add all",removeAllTitle:"Remove all",selected:`${s.length} item(s) selected`},options:T,values:s,onChange:A})}};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    label: {
      addAllTitle: 'Add all',
      removeAllTitle: 'Remove all',
      selected: '0 items selected'
    },
    options: listSelectorData,
    values: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,c,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    label: {
      addAllTitle: 'Add all',
      removeAllTitle: 'Remove all',
      selected: '0 items selected'
    },
    options: listSelectorData,
    values: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
  }
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const w=["Basic","ReadOnly","Controlled"];export{t as Basic,r as Controlled,l as ReadOnly,w as __namedExportsOrder,q as default};
