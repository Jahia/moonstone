import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BVsvMGH4.js";import{t as r}from"./jsx-runtime-B6JWlyvB.js";import{St as i,i as a,xt as o}from"./icons-Dxh7SjmP.js";import{i as s,r as c}from"./Thumbnail-DFO8t8sM.js";import{n as l}from"./Pill-sE3wPaTs.js";import{d as u,f as d,g as f,h as p,l as m,m as h,p as g,t as _,u as v}from"./data-Cpy-A6Eh.js";var y,b=t((()=>{y=`data:text/markdown;base64,VG9nZ2xlIGNvbnRleHR1YWwgb3ZlcmxheXMgZm9yIGRpc3BsYXlpbmcgYSBsaXN0IG9mIGFjdGlvbnMuIFRoaXMgY29tcG9uZW50IHJlcGxhY2VzIHRoZSBjbGFzc2ljIGBzZWxlY3RgIEhUTUwgZWxlbWVudC4KCiMjIFNwZWNpZmljYXRpb25zOgoKQ2xpY2sgb24gdGhlIERyb3Bkb3duIGxhYmVsIHRvIGRpc3BsYXkgdGhlIE1lbnUgY29tcG9uZW50LgoKVGhlIGxhYmVsIHNob3VsZCBiZSB0cnVuY2F0ZWQgaWYgaXQncyBsb25nZXIgdGhhbiB0aGUgY29udGFpbmVyLgoKQWxsb3cgdXNlciB0byBuYXZpZ2F0ZSBiZXR3ZWVuIG9wdGlvbiBieSB1c2luZyBgVGFidWxhdGlvbmAuCgpBbGxvdyB1c2VyIHRvIHZhbGlkYXRlIGEgdmFsdWUgYnkgcHJlc3NpbmcgYEVudGVyYC4KClRvIGhpZGUgdGhlIG1lbnUgY2xpY2sgb24gYW4gaXRlbSBvZiB0aGUgbGlzdCBvciBjbGljayBvdXRzaWRlIHRvIGl0LgoKVGhlIHNlbGVjdGVkIGl0ZW0gaGFzIGEgc3BlY2lmaWMgZGVzaWduLgoKIyMgR3JvdXBpbmcgSXRlbXMKSXRlbXMgY2FuIGJlIGdyb3VwZWQgd2l0aCBhIHRpdGxlLgpJZiB5b3UgYXJlIHVzaW5nIGl0ZW0gZ3JvdXBzIHRoZW4gYWxsIGl0ZW1zIG11c3QgYmUgd2l0aGluIGEgZ3JvdXAuCgojIyBEcm9wZG93biBPcHRpb25zIHdpdGggSW1hZ2VzClRvIHVzZSBpbWFnZSBkcm9wZG93biBvcHRpb25zLCBlbnN1cmUgdGhhdCB0aGUgZGF0YSBwYXNzZWQgaW50byB0aGUgRHJvcGRvd24gaGFzIGFuIGBpbWFnZWAgcHJvcGVydHkgaW4gYWRkaXRpb24gdG8gdGhlIGBsYWJlbGAgYW5kIGFueSBvdGhlciBwcm9wZXJ0aWVzIHlvdSB3aXNoLgoKVGhlIHZhbHVlIG9mIHRoZSBgaW1hZ2VgIHByb3BlcnR5IHNob3VsZCBiZSBhbiBgaW1nYCBIVE1MIGVsZW1lbnQuCg==`})),x,S,C,w,T,E,D,O,k,A,j;t((()=>{x=e(n(),1),b(),o(),a(),s(),_(),S=r(),{action:C}=__STORYBOOK_MODULE_ACTIONS__,w={title:`Components/Dropdown`,component:i,parameters:{layout:`centered`,notes:{markdown:y},docs:{inlineStories:!1,IframeHeight:500}},argTypes:{icon:{options:Object.keys(c)}}},T={render:e=>{let[t,n]=(0,x.useState)(null),[r,a]=(0,x.useState)(null),[o,s]=(0,x.useState)({label:`French`,value:`fr`,iconEnd:(0,S.jsx)(l,{label:`FR`})}),u=(e,t)=>(n(t),C(`onChange`)(e,t),!0),p=(e,t)=>(a(t),C(`onChangeImage`)(e,t),!0),m=(e,t)=>(s(t),C(`onChangePill`)(e,t),!0);return(0,S.jsxs)(`section`,{className:`storyGrid`,children:[(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,placeholder:e.placeholder||`Select something`,value:t?.value||null,isDisabled:e.isDisabled||!1,data:f,onChange:u}),(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,imageSize:e.imageSize||`small`,placeholder:e.placeholder||`Select an image`,value:r?.value||null,data:h,onChange:p}),(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,placeholder:e.placeholder||`Select a language`,value:o.value,data:d,onChange:m})]})},args:{icon:`Love`}},E={render:e=>{let[t,n]=(0,x.useState)([]),[r,a]=(0,x.useState)([]),o=(e,t)=>(n(e=>e.indexOf(t)>-1?e.filter(e=>e!==t):[...e,t]),C(`onChange`),!0),s=(e,t)=>(a(e=>e.indexOf(t)>-1?e.filter(e=>e!==t):[...e,t]),C(`onChange`),!0);return(0,S.jsxs)(`section`,{className:`storyGrid`,children:[(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,values:t.map(e=>e.value),placeholder:e.placeholder||`Select something`,data:f,onChange:(e,t)=>o(e,t)}),(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,values:r.map(e=>e.value),placeholder:e.placeholder||`Select languages`,data:u,onChange:(e,t)=>s(e,t)})]})},args:{icon:`Love`}},D={render:e=>{let[t,n]=(0,x.useState)(null),[r,a]=(0,x.useState)(null),[o,s]=(0,x.useState)(null),l=(e,t)=>(n(t),C(`onChangeGrouped`)(e,t),!0),u=(e,t)=>(a(t),C(`onChangeImage`)(e,t),!0),d=(e,t)=>(s(t),C(`onChangeLanguage`)(e,t),!0);return(0,S.jsxs)(`section`,{className:`storyGrid`,children:[(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,placeholder:e.placeholder||`Select something`,value:t?.value||null,data:p,onChange:l}),(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,placeholder:e.placeholder||`Select an image`,value:r?.value||null,data:v,onChange:u}),(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,placeholder:e.placeholder||`Select a language`,value:o?.value||null,data:m,onChange:d})]})},args:{icon:`Love`}},O={render:e=>{let[t,n]=(0,x.useState)([]),[r,a]=(0,x.useState)([]),o=(e,t)=>(n(e=>e.indexOf(t)>-1?e.filter(e=>e!==t):[...e,t]),C(`onChange`),!0),s=(e,t)=>(a(e=>e.indexOf(t)>-1?e.filter(e=>e!==t):[...e,t]),C(`onChange`),!0);return(0,S.jsxs)(`section`,{className:`storyGrid`,children:[(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,values:t.map(e=>e.value),placeholder:e.placeholder||`Select something`,data:p,onChange:(e,t)=>o(e,t)}),(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,values:r.map(e=>e.value),placeholder:e.placeholder||`Select languages`,data:m,onChange:(e,t)=>s(e,t)})]})},args:{icon:`Love`}},k={render:e=>{let[t,n]=(0,x.useState)(null),[r,a]=(0,x.useState)(null),o=(e,t)=>(n(t),C(`onChangeTree`)(e,t),!0),s=(e,t)=>(a(t),C(`onChangeLanguage`)(e,t),!0);return(0,S.jsxs)(`section`,{children:[(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,placeholder:e.placeholder||`Select something`,value:t?.value||null,treeData:g,onChange:o}),(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,placeholder:e.placeholder||`Select a language`,value:r?.value||null,treeData:d,onChange:s})]})},args:{icon:`Love`}},A={render:e=>{let[t,n]=(0,x.useState)([]),[r,a]=(0,x.useState)([]),o=(e,t)=>(n(e=>e.indexOf(t)>-1?e.filter(e=>e!==t):[...e,t]),C(`onChange`),!0),s=(e,t)=>(a(e=>e.indexOf(t)>-1?e.filter(e=>e!==t):[...e,t]),C(`onChange`),!0);return(0,S.jsxs)(`section`,{className:`storyGrid`,children:[(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,values:t.map(e=>e.value),placeholder:e.placeholder||`Select something`,treeData:g,onChange:(e,t)=>o(e,t)}),(0,S.jsx)(i,{...e,icon:typeof e.icon==`string`&&c[e.icon]?x.createElement(c[e.icon]):e.icon,values:r.map(e=>e.value),placeholder:e.placeholder||`Select a language`,treeData:d,onChange:(e,t)=>s(e,t)})]})},args:{icon:`Love`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);
    const [currentImage, setCurrentImage] = useState<DropdownDataOption | null>(null);
    const [currentPill, setCurrentPill] = useState<DropdownDataOption>({
      label: 'French',
      value: 'fr',
      iconEnd: <Pill label="FR" />
    });
    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentOption(item);
      action('onChange')(e, item);
      return true;
    };
    const handleOnChangeImage = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentImage(item);
      action('onChangeImage')(e, item);
      return true;
    };
    const handleOnChangePill = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentPill(item);
      action('onChangePill')(e, item);
      return true;
    };
    return <section className="storyGrid">
                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} placeholder={args.placeholder || 'Select something'} value={currentOption?.value || null} isDisabled={args.isDisabled || false} data={dropdownData} onChange={handleOnChange} />

                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} imageSize={args.imageSize || 'small'} placeholder={args.placeholder || 'Select an image'} value={currentImage?.value || null} data={dropdownDataImages} onChange={handleOnChangeImage} />

                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} placeholder={args.placeholder || 'Select a language'} value={currentPill.value} data={dropdownDataTreePill} onChange={handleOnChangePill} />
            </section>;
  },
  args: {
    icon: 'Love'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
    const [currentOptionData, setCurrentOptionData] = useState<DropdownDataOption[]>([]);
    const [currentPill, setCurrentPill] = useState<DropdownDataOption[]>([]);
    const handleOnChangeData = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentOptionData(prev => prev.indexOf(item) > -1 ? prev.filter(i => i !== item) : [...prev, item]);
      action('onChange');
      return true;
    };
    const handleOnChangePill = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentPill(prev => prev.indexOf(item) > -1 ? prev.filter(i => i !== item) : [...prev, item]);
      action('onChange');
      return true;
    };
    return <section className="storyGrid">

                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} values={currentOptionData.map(v => v.value)} placeholder={args.placeholder || 'Select something'} data={dropdownData} onChange={(e, item) => handleOnChangeData(e, item)} />

                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} values={currentPill.map(v => v.value)} placeholder={args.placeholder || 'Select languages'} data={dropdownDataPill} onChange={(e, item) => handleOnChangePill(e, item)} />
            </section>;
  },
  args: {
    icon: 'Love'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
    const [currentOptionGrouped, setCurrentOptionGrouped] = useState<DropdownDataOption | null>(null);
    const [currentImage, setCurrentImage] = useState<DropdownDataOption | null>(null);
    const [currentLanguage, setCurrentLanguage] = useState<DropdownDataOption | null>(null);
    const handleChangeGrouped = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentOptionGrouped(item);
      action('onChangeGrouped')(e, item);
      return true;
    };
    const handleChangeImage = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentImage(item);
      action('onChangeImage')(e, item);
      return true;
    };
    const handleChangeLanguage = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentLanguage(item);
      action('onChangeLanguage')(e, item);
      return true;
    };
    return <section className="storyGrid">
                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} placeholder={args.placeholder || 'Select something'} value={currentOptionGrouped?.value || null} data={dropdownDataGrouped} onChange={handleChangeGrouped} />

                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} placeholder={args.placeholder || 'Select an image'} value={currentImage?.value || null} data={dropdownDataGroupedImages} onChange={handleChangeImage} />

                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} placeholder={args.placeholder || 'Select a language'} value={currentLanguage?.value || null} data={dropdownDataGroupedPill} onChange={handleChangeLanguage} />
            </section>;
  },
  args: {
    icon: 'Love'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
    const [currentOptionDataGrouped, setCurrentOptionDataGrouped] = useState<DropdownDataOption[]>([]);
    const [currentPill, setCurrentPill] = useState<DropdownDataOption[]>([]);
    const handleOnChangeDataGrouped = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentOptionDataGrouped(prev => prev.indexOf(item) > -1 ? prev.filter(i => i !== item) : [...prev, item]);
      action('onChange');
      return true;
    };
    const handleOnChangePill = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentPill(prev => prev.indexOf(item) > -1 ? prev.filter(i => i !== item) : [...prev, item]);
      action('onChange');
      return true;
    };
    return <section className="storyGrid">
                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} values={currentOptionDataGrouped.map(v => v.value)} placeholder={args.placeholder || 'Select something'} data={dropdownDataGrouped} onChange={(e, item) => handleOnChangeDataGrouped(e, item)} />

                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} values={currentPill.map(v => v.value)} placeholder={args.placeholder || 'Select languages'} data={dropdownDataGroupedPill} onChange={(e, item) => handleOnChangePill(e, item)} />
            </section>;
  },
  args: {
    icon: 'Love'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
    const [currentOptionTree, setCurrentOptionTree] = useState<DropdownDataOption | null>(null);
    const [currentLanguage, setCurrentLanguage] = useState<DropdownDataOption | null>(null);
    const handleChangeTree = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentOptionTree(item);
      action('onChangeTree')(e, item);
      return true;
    };
    const handleChangeLanguage = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentLanguage(item);
      action('onChangeLanguage')(e, item);
      return true;
    };
    return <section>
                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} placeholder={args.placeholder || 'Select something'} value={currentOptionTree?.value || null} treeData={dropdownDataTree} onChange={handleChangeTree} />

                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} placeholder={args.placeholder || 'Select a language'} value={currentLanguage?.value || null} treeData={dropdownDataTreePill} onChange={handleChangeLanguage} />
            </section>;
  },
  args: {
    icon: 'Love'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
    const [currentOptionDataMultiple, setCurrentOptionDataMultiple] = useState<DropdownDataOption[]>([]);
    const [currentPill, setCurrentPill] = useState<DropdownDataOption[]>([]);
    const handleOnChangeDataMultiple = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentOptionDataMultiple(prev => prev.indexOf(item) > -1 ? prev.filter(i => i !== item) : [...prev, item]);
      action('onChange');
      return true;
    };
    const handleOnChangePill = (e: React.MouseEvent, item: DropdownDataOption) => {
      setCurrentPill(prev => prev.indexOf(item) > -1 ? prev.filter(i => i !== item) : [...prev, item]);
      action('onChange');
      return true;
    };
    return <section className="storyGrid">
                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} values={currentOptionDataMultiple.map(v => v.value)} placeholder={args.placeholder || 'Select something'} treeData={dropdownDataTree} onChange={(e, item) => handleOnChangeDataMultiple(e, item)} />

                <Dropdown {...args} icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon} values={currentPill.map(v => v.value)} placeholder={args.placeholder || 'Select a language'} treeData={dropdownDataTreePill} onChange={(e, item) => handleOnChangePill(e, item)} />
            </section>;
  },
  args: {
    icon: 'Love'
  }
}`,...A.parameters?.docs?.source}}},j=[`FlatData`,`FlatDataMultiple`,`GroupedData`,`GroupedDataMultiple`,`TreeData`,`TreeDataMultiple`]}))();export{T as FlatData,E as FlatDataMultiple,D as GroupedData,O as GroupedDataMultiple,k as TreeData,A as TreeDataMultiple,j as __namedExportsOrder,w as default};