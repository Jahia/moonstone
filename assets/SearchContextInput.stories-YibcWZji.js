import{a as e,n as t}from"./chunk-BneVvdWh.js";import{s as n}from"./iframe-CDZROxN6.js";import{t as r}from"./jsx-runtime-BoP4cJuC.js";import{Dt as i,Ln as a,hn as o,i as s,it as c,rt as l,t as u,xn as d}from"./icons-CjPOQnhw.js";import{t as f}from"./storybook-CxGANLmD.js";var p,m,h,g,_,v;t((()=>{p=e(n(),1),f(),l(),u(),s(),m=r(),h={title:`Components/Input`,component:c,decorators:[e=>(0,m.jsx)(`div`,{style:{width:`50vw`},children:(0,m.jsx)(e,{})})],parameters:{layout:`centered`},args:{placeholder:`Placeholder text`,defaultValue:`Default value`},argTypes:{onChange:{action:`onChange`},onClick:{action:`onClick`},onBlur:{action:`onBlur`},onFocus:{action:`onFocus`}}},g=[{label:`Global users`,value:`globalUser`,iconStart:(0,m.jsx)(d,{})},{label:`Media`,value:`media`,iconStart:(0,m.jsx)(a,{})},{label:`Site`,value:`site`,iconStart:(0,m.jsx)(o,{})}],_={render:e=>{let[t,n]=(0,p.useState)(g[0]);return(0,m.jsx)(`section`,{className:`storyWrapper`,children:(0,m.jsx)(c,{searchContext:(0,m.jsx)(i,{data:g,label:t.label,icon:t.iconStart,value:t.value,onChange:(e,t)=>{n(t)}}),placeholder:`Search and press Enter`,...e})})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [contextOption, setContextOption] = useState(searchContextData[0]);
    const handleDropdownOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
      setContextOption(item);
    };
    return <section className="storyWrapper">
                <SearchContextInput searchContext={<Dropdown data={searchContextData} label={contextOption.label} icon={contextOption.iconStart} value={contextOption.value} onChange={handleDropdownOnChange} />} placeholder="Search and press Enter" {...args} />
            </section>;
  }
}`,..._.parameters?.docs?.source}}},v=[`SearchContext`]}))();export{_ as SearchContext,v as __namedExportsOrder,h as default};