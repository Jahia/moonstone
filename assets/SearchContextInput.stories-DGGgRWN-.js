import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-ocldAg4G.js";import{t as r}from"./jsx-runtime-CQFjE489.js";import{Pn as i,et as a,fn as o,i as s,t as c,tt as l,vn as u,wt as d}from"./icons-cGo7AZL_.js";import{t as f}from"./storybook-D02wXECR.js";var p,m,h,g,_,v;t((()=>{p=e(n(),1),f(),a(),c(),s(),m=r(),h={title:`Components/Input`,component:l,decorators:[e=>(0,m.jsx)(`div`,{style:{width:`50vw`},children:(0,m.jsx)(e,{})})],parameters:{layout:`centered`},args:{placeholder:`Placeholder text`,defaultValue:`Default value`},argTypes:{onChange:{action:`onChange`},onClick:{action:`onClick`},onBlur:{action:`onBlur`},onFocus:{action:`onFocus`}}},g=[{label:`Global users`,value:`globalUser`,iconStart:(0,m.jsx)(u,{})},{label:`Media`,value:`media`,iconStart:(0,m.jsx)(i,{})},{label:`Site`,value:`site`,iconStart:(0,m.jsx)(o,{})}],_={render:e=>{let[t,n]=(0,p.useState)(g[0]);return(0,m.jsx)(`section`,{className:`storyWrapper`,children:(0,m.jsx)(l,{searchContext:(0,m.jsx)(d,{data:g,label:t.label,icon:t.iconStart,value:t.value,onChange:(e,t)=>{n(t)}}),placeholder:`Search and press Enter`,...e})})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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