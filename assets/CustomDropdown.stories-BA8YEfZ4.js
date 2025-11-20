import{r as m,j as e,R as z}from"./iframe-1gg0_G19.js";import{c as O}from"./clsx-B-dksMZM.js";import{S as X}from"./ChevronDown-oeNZbER-.js";import{B as o}from"./Button-VaBqZ2i1.js";import{a as $,M as P}from"./MenuItem-B_qsSCz-.js";import{I as D}from"./index--LObrdSc.js";import{F as Q}from"./Fieldset-uHNynFxf.js";import{F as I}from"./Field-DGyGYhDO.js";import{F as g}from"./FieldSelector-WIF9XRCi.js";import{I as k}from"./Input-5hcEgUVF.js";import{S as x}from"./MoreVert-D8L_Tj9n.js";import{S as ee}from"./Add-DhWQp-Jc.js";import{S as w}from"./Language-livrnJMK.js";import{F as ae}from"./FieldBoolean-BKJ81W53.js";import{T as oe}from"./Textarea-BLg5x1Wz.js";import{a as te,R as H}from"./RadioItem-BUKG-64G.js";import{S as Y}from"./Close-Bg6dxq9h.js";import{S as le}from"./File-C1ri-5nc.js";import{T as ie}from"./Typography-BG5VXE0P.js";import{C as u}from"./Chip-D2isJbTx.js";import{D as A}from"./TreeViewMenu-yuKESWzs.js";import{C as U}from"./CardSelector-CmvgFR3F.js";import{E as ne}from"./EmptyCardSelector-DCbAvzUL.js";import{S as se}from"./Separator-CNoQrWr0.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               */import"./Loader-5StQsR8z.js";import"./SearchInput-D_-rk9x8.js";import"./Search-GR7bWDuc.js";import"./BaseInput-DvFb0rM2.js";import"./Cancel-d_Uzw5vr.js";import"./onArrowNavigation-CltwoEwZ.js";import"./ListItem-BoJPQlra.js";import"./Visibility-DXVamLct.js";import"./Apps-BnVmW0k4.js";import"./Setting-C6Sj7RxT.js";import"./Bug-DQDA2pvl.js";import"./Build-Dr_No1l8.js";import"./CheckboxUnchecked-ChmcDPYL.js";import"./ChevronDoubleRight-DP-B1lPp.js";import"./ChevronRight-Cki1nY3P.js";import"./Cloud-BhH2X_gm.js";import"./Subdirectory-CqjwN11e.js";import"./SiteWeb-CucJlfhD.js";import"./Edit-aJvRAxmI.js";import"./Image-DM4zeM3c.js";import"./FileImage-DrZiQLwG.js";import"./HandleDrag-nT25Jt9G.js";import"./HandleResize-Bz8RSvcj.js";import"./RichText-Bq-JMfzr.js";import"./Home-Dyo1ENxp.js";import"./Lock-xvR_szvg.js";import"./Love-DmfH8wSH.js";import"./OpenInNew-DrLNEzsL.js";import"./Person-CM_XEs8Y.js";import"./Workflow-k_KZ4mDN.js";import"./RadioUnchecked-ClIj-VZJ.js";import"./Star-CkODMgSY.js";import"./ViewList-BVyTX4gG.js";import"./Warning-BwVKdjea.js";/* empty css                 *//* empty css              */import"./Checkbox-Ba_BrXlG.js";import"./Tag-CIgCL48P.js";import"./TreeView-CiG8u9Mg.js";import"./useAccessibleClick-Bdvd2I0f.js";const j=({label:i,children:t,isDisabled:a,isLoading:n=!1,variant:p="ghost",size:b="default",icon:h,onBlur:d,onFocus:s,className:f,...q})=>{const[y,v]=m.useState(!1),[r,F]=m.useState({focused:!1,event:null,lastSent:!1}),[T,L]=m.useState(null),[c,C]=m.useState(null),G=!t;m.useEffect(()=>{r.focused&&r.event&&!r.lastSent&&s&&(s(r.event),F(l=>({...l,lastSent:!0})))},[s,r]),m.useEffect(()=>{!r.focused&&!y&&r.event&&r.lastSent&&d&&(d(r.event),F(l=>({...l,lastSent:!1})))},[d,y,r]);const W=l=>{l.stopPropagation();const V=l.currentTarget.offsetWidth;C(`${V<_?_:V}px`),L(l.currentTarget),v(!0)},K=()=>{v(!1),L(null)},_=80,J={top:4,left:0};return e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:a,isLoading:n,variant:p,size:b,label:i,icon:h,iconEnd:i&&e.jsx(X,{role:"presentation"}),"aria-label":i,"aria-disabled":a||G,"aria-busy":n?!0:void 0,className:O("moonstone-custom-dropdown-button",{"moonstone-opened":y},f),tabIndex:0,onClick:!a&&!n?W:void 0,onKeyUp:l=>{l.key==="Enter"&&!a&&!n&&W(l)},onBlur:l=>{F(V=>({...V,focused:!1,event:l}))},onFocus:l=>{F(V=>({...V,focused:!0,event:l}))},...q}),y&&e.jsx($,{isDisplayed:!0,className:O("moonstone-custom-dropdown-menu"),anchorPosition:J,minWidth:c,maxWidth:"auto",maxHeight:"270px",anchorEl:T,onClose:K,children:t})]})};j.displayName="CustomDropdown";try{j.displayName="CustomDropdown",j.__docgenInfo={description:"",displayName:"CustomDropdown",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Function triggered on focus of the checkbox value",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"Function triggered when the checkbox value loses focus",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon displays before the dropdown's label",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},variant:{defaultValue:{value:"ghost"},description:"Dropdown's variants",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ghost"'},{value:'"outlined"'}]}},isLoading:{defaultValue:{value:"false"},description:"Whether the dropdown is loading",name:"isLoading",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"default"'}]}}}}}catch{}const{action:S}=__STORYBOOK_MODULE_ACTIONS__,Ca={title:"Components/CustomDropdown",component:j,tags:["beta"],parameters:{layout:"centered",docs:{inlineStories:!1,IframeHeight:500}},argTypes:{icon:{options:Object.keys(D)}}},Z=i=>{const{label:t,icon:a,size:n,variant:p,isDisabled:b,isLoading:h,className:d,children:s}=i;return e.jsx(j,{label:t,icon:typeof a=="string"&&D[a]?z.createElement(D[a]):void 0,className:d,size:n,variant:p,isDisabled:b,isLoading:h,onFocus:S("onfocus"),onBlur:S("onblur"),children:s})},B={render:Z,args:{label:"",icon:"Love",size:"default",variant:"ghost",isDisabled:!1,isLoading:!1,ariaLabel:"text dropdown",children:e.jsx(ie,{style:{maxWidth:"200px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta tortor in erat pulvinar, non laoreet est tempus. Nulla scelerisque molestie tempor. Vestibulum ullamcorper ultrices dui quis hendrerit. Donec nec elit nunc. Aliquam vitae magna dictum, pharetra velit sit amet, tincidunt neque. Nullam dui magna, pharetra a leo non, pellentesque viverra odio. Mauris eget porttitor arcu. Vivamus dignissim vitae lectus nec vulputate. Sed euismod in sem feugiat finibus. Pellentesque pellentesque eget eros at feugiat. Mauris commodo ullamcorper eros, lacinia molestie nulla tristique id. Donec nec tortor enim. Donec sit amet blandit est, a blandit lectus. Donec semper nisi sit amet finibus ultrices. Morbi varius a mauris vel posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."})}},M={render:Z,args:{label:"Dropdown with form",variant:"default",isDisabled:!1,isLoading:!1,children:e.jsxs(Q,{id:"form",label:"Form",children:[e.jsx(I,{id:"field-multiple",label:"Field",chips:e.jsxs(e.Fragment,{children:[e.jsx(u,{color:"accent",label:"Required"}),e.jsx(u,{icon:e.jsx(w,{}),label:"Shared by all languages"})]}),buttons:e.jsxs(e.Fragment,{children:[e.jsx(o,{icon:e.jsx(ee,{}),label:"Add"}),e.jsx(o,{icon:e.jsx(x,{}),variant:"ghost"})]}),helper:"information",children:e.jsxs(e.Fragment,{children:[e.jsx(g,{buttons:e.jsx(o,{icon:e.jsx(x,{})}),selector:e.jsx(k,{size:"big",placeholder:"Input value"})}),e.jsx(g,{buttons:e.jsx(o,{icon:e.jsx(x,{})}),selector:e.jsx(k,{size:"big",placeholder:"Input value"})}),e.jsx(g,{buttons:e.jsx(o,{icon:e.jsx(x,{})}),selector:e.jsx(k,{size:"big",placeholder:"Input value"})})]})}),e.jsx(ae,{id:"field-boolean",label:"Field Boolean",helper:"information",chips:e.jsxs(e.Fragment,{children:[e.jsx(u,{color:"accent",label:"Required"}),e.jsx(u,{icon:e.jsx(w,{}),label:"Shared by all languages"})]}),buttons:e.jsx(o,{icon:e.jsx(x,{}),variant:"ghost"})}),e.jsx(I,{id:"field-dropdown",label:"Field",chips:e.jsxs(e.Fragment,{children:[e.jsx(u,{color:"accent",label:"Required"}),e.jsx(u,{icon:e.jsx(w,{}),label:"Shared by all languages"})]}),buttons:e.jsx(o,{icon:e.jsx(x,{}),variant:"ghost"}),helper:"information",children:e.jsx(g,{selector:e.jsx(A,{variant:"outlined",label:"Input value",className:"flexFluid",value:"",data:[{label:"option 1",value:"1"},{label:"option 2",value:"2"},{label:"option 3 with very long long label label label label label label label label",value:"3"}]})})}),e.jsx(I,{hasError:!0,errorMessage:"There is an error",id:"field-textarea",label:"Field",chips:e.jsxs(e.Fragment,{children:[e.jsx(u,{color:"accent",label:"Required"}),e.jsx(u,{icon:e.jsx(w,{}),label:"Shared by all languages"})]}),buttons:e.jsx(o,{icon:e.jsx(x,{}),variant:"ghost"}),helper:"information",children:e.jsx(g,{selector:e.jsx(oe,{id:"moonstone-textarea",placeholder:"Input value"})})}),e.jsx(I,{id:"field-radio",label:"Field",chips:e.jsxs(e.Fragment,{children:[e.jsx(u,{color:"accent",label:"Required"}),e.jsx(u,{icon:e.jsx(w,{}),label:"Shared by all languages"})]}),helper:"information",children:e.jsx(g,{selector:e.jsxs(te,{name:"radio",children:[e.jsx(H,{id:"radio1",label:"Yes",value:"Yes"}),e.jsx(H,{id:"radio2",label:"No",value:"No"})]})})}),e.jsx(I,{id:"field-cardselectors",label:"Field",chips:e.jsxs(e.Fragment,{children:[e.jsx(u,{color:"accent",label:"Required"}),e.jsx(u,{icon:e.jsx(w,{}),label:"Shared by all languages"})]}),buttons:e.jsx(o,{icon:e.jsx(x,{}),variant:"ghost"}),helper:"information",children:e.jsxs(e.Fragment,{children:[e.jsx(g,{selector:e.jsx(U,{id:"cardSelector1",displayName:"Item name",systemName:"system name",information:"information",thumbnailType:"icon"}),buttons:e.jsx(o,{icon:e.jsx(Y,{})})}),e.jsx(g,{selector:e.jsx(U,{id:"cardSelector2",displayName:"Item name",systemName:"system name",information:"information",thumbnailType:"icon"}),buttons:e.jsx(o,{icon:e.jsx(Y,{})})}),e.jsx(g,{selector:e.jsx(ne,{iconStart:e.jsx(le,{}),id:"emptyCardSelector",label:"Add item"})})]})})]})}},N=i=>{const[t,a]=m.useState(i.label),{label:n="Dropdown with buttons",icon:p="Widgets",size:b="default",variant:h="ghost",isDisabled:d=!1,isLoading:s=!1,children:f=e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Valeur 1",onClick:()=>a("Valeur 1")}),e.jsx(o,{label:"Valeur 2",onClick:()=>a("Valeur 2")})]})}=i;return e.jsx(j,{label:t||n,icon:z.createElement(D[p]),size:b,variant:h,isDisabled:d,isLoading:s,onFocus:S("onfocus"),onBlur:S("onblur"),children:f})},E=i=>{const[t,a]=m.useState([]),{label:n="Dropdown with buttons",icon:p="Widgets",size:b="default",variant:h="ghost",isDisabled:d=!1,isLoading:s=!1,children:f=e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Valeur 1",onClick:()=>a([...t,"Valeur 1"])}),e.jsx(o,{label:"Valeur 2",onClick:()=>a([...t,"Valeur 2"])}),e.jsx(o,{label:"Valeur 3",onClick:()=>a([...t,"Valeur 3"])}),e.jsx(o,{label:"Valeur 4",onClick:()=>a([...t,"Valeur 4"])})]})}=i;return e.jsx(j,{label:t.length>0?t.toString():n,icon:z.createElement(D[p]),size:b,variant:h,isDisabled:d,isLoading:s,onFocus:S("onfocus"),onBlur:S("onblur"),children:f})},R=i=>{const{label:t="Sorting dropdown",icon:a="Love",size:n="default",variant:p="outlined",isDisabled:b=!1,isLoading:h=!1,className:d}=i,s=[{value:"1",label:"Status"},{value:"2",label:"Name"},{value:"3",label:"Content type"},{value:"4",label:"Last modified"},{value:"5",label:"Created at"}],f=[{value:"asc",label:"Ascending (A-Z)",icon:"ArrowDown"},{value:"desc",label:"Descending (Z-A)",icon:"ArrowUp"}],[q,y]=m.useState("4"),[v,r]=m.useState("asc"),F=c=>{y(c.value)},T=c=>{r(c.value)},L=()=>{if(typeof v=="string"){const c=v?D[f.find(C=>C.value===v)?.icon]:D[a];return c?z.createElement(c):void 0}return v};return e.jsxs(j,{label:s.find(c=>c.value===q).label||t,icon:L(),className:d,size:n,variant:p,isDisabled:b,isLoading:h,onFocus:S("onfocus"),onBlur:S("onblur"),children:[e.jsx(P,{label:"Sort by",variant:"title"}),e.jsx(A,{variant:"outlined",data:s,value:q,onChange:(c,C)=>{F(C)}}),e.jsx(se,{}),e.jsx(P,{label:"Direction",variant:"title"}),e.jsx(A,{variant:"outlined",data:f,value:v,onChange:(c,C)=>{T(C)}})]})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: TemplateSimple,
  args: {
    label: '',
    icon: 'Love',
    size: 'default',
    variant: 'ghost',
    isDisabled: false,
    isLoading: false,
    ariaLabel: 'text dropdown',
    children: <Typography style={{
      maxWidth: '200px'
    }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris porta tortor in erat pulvinar, non laoreet est tempus.
        Nulla scelerisque molestie tempor. Vestibulum ullamcorper ultrices dui quis hendrerit.
        Donec nec elit nunc. Aliquam vitae magna dictum, pharetra velit sit amet, tincidunt neque.
        Nullam dui magna, pharetra a leo non, pellentesque viverra odio. Mauris eget porttitor arcu.
        Vivamus dignissim vitae lectus nec vulputate. Sed euismod in sem feugiat finibus.
        Pellentesque pellentesque eget eros at feugiat. Mauris commodo ullamcorper eros, lacinia molestie nulla tristique id.
        Donec nec tortor enim. Donec sit amet blandit est, a blandit lectus. Donec semper nisi sit amet finibus ultrices.
        Morbi varius a mauris vel posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </Typography>
  }
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: TemplateSimple,
  args: {
    label: 'Dropdown with form',
    variant: 'default',
    isDisabled: false,
    isLoading: false,
    children: <Fieldset id="form" label="Form">
        <Field id="field-multiple" label="Field" chips={<><Chip color="accent" label="Required" /><Chip icon={<icons.Language />} label="Shared by all languages" /></>} buttons={<><Button icon={<icons.Add />} label="Add" /><Button icon={<icons.MoreVert />} variant="ghost" /></>} helper="information">
            <>
                <FieldSelector buttons={<Button icon={<icons.MoreVert />} />} selector={<Input size="big" placeholder="Input value" />} />
                <FieldSelector buttons={<Button icon={<icons.MoreVert />} />} selector={<Input size="big" placeholder="Input value" />} />
                <FieldSelector buttons={<Button icon={<icons.MoreVert />} />} selector={<Input size="big" placeholder="Input value" />} />
            </>
        </Field>
        <FieldBoolean id="field-boolean" label="Field Boolean" helper="information" chips={<><Chip color="accent" label="Required" /><Chip icon={<icons.Language />} label="Shared by all languages" /></>} buttons={<Button icon={<icons.MoreVert />} variant="ghost" />} />
        <Field id="field-dropdown" label="Field" chips={<><Chip color="accent" label="Required" /><Chip icon={<icons.Language />} label="Shared by all languages" /></>} buttons={<Button icon={<icons.MoreVert />} variant="ghost" />} helper="information">
            <FieldSelector selector={<Dropdown variant="outlined" label="Input value" className="flexFluid" value="" data={[{
          label: 'option 1',
          value: '1'
        }, {
          label: 'option 2',
          value: '2'
        }, {
          label: 'option 3 with very long long label label label label label label label label',
          value: '3'
        }]} />} />
        </Field>
        <Field hasError errorMessage="There is an error" id="field-textarea" label="Field" chips={<><Chip color="accent" label="Required" /><Chip icon={<icons.Language />} label="Shared by all languages" /></>} buttons={<Button icon={<icons.MoreVert />} variant="ghost" />} helper="information">
            <FieldSelector selector={<Textarea id="moonstone-textarea" placeholder="Input value" />} />
        </Field>
        <Field id="field-radio" label="Field" chips={<><Chip color="accent" label="Required" /><Chip icon={<icons.Language />} label="Shared by all languages" /></>} helper="information">
            <FieldSelector selector={<RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes" /><RadioItem id="radio2" label="No" value="No" /></RadioGroup>} />
        </Field>
        <Field id="field-cardselectors" label="Field" chips={<><Chip color="accent" label="Required" /><Chip icon={<icons.Language />} label="Shared by all languages" /></>} buttons={<Button icon={<icons.MoreVert />} variant="ghost" />} helper="information">
            <>
                <FieldSelector selector={<CardSelector id="cardSelector1" displayName="Item name" systemName="system name" information="information" thumbnailType="icon" />} buttons={<Button icon={<icons.Close />} />} />
                <FieldSelector selector={<CardSelector id="cardSelector2" displayName="Item name" systemName="system name" information="information" thumbnailType="icon" />} buttons={<Button icon={<icons.Close />} />} />
                <FieldSelector selector={<EmptyCardSelector iconStart={<File />} id="emptyCardSelector" label="Add item" />} />
            </>
        </Field>
    </Fieldset>
  }
}`,...M.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(args: CustomDropdownProps) => {
  const [labelState, setLabelState] = useState(args.label);
  const {
    label = 'Dropdown with buttons',
    icon = 'Widgets',
    size = 'default',
    variant = 'ghost',
    isDisabled = false,
    isLoading = false,
    children =
    // eslint-disable-next-line react/jsx-indent
    <>
            <Button label="Valeur 1" onClick={() => setLabelState('Valeur 1')} />
            <Button label="Valeur 2" onClick={() => setLabelState('Valeur 2')} />
        </>
  } = args;
  return <CustomDropdown label={labelState || label} icon={React.createElement(icons[icon as keyof typeof icons])} size={size} variant={variant} isDisabled={isDisabled} isLoading={isLoading} onFocus={action('onfocus')} onBlur={action('onblur')}>
            {children}
        </CustomDropdown>;
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(args: CustomDropdownProps) => {
  const [choices, setChoices] = useState([]);
  const {
    label = 'Dropdown with buttons',
    icon = 'Widgets',
    size = 'default',
    variant = 'ghost',
    isDisabled = false,
    isLoading = false,
    children =
    // eslint-disable-next-line react/jsx-indent
    <>
            <Button label="Valeur 1" onClick={() => setChoices([...choices, 'Valeur 1'])} />
            <Button label="Valeur 2" onClick={() => setChoices([...choices, 'Valeur 2'])} />
            <Button label="Valeur 3" onClick={() => setChoices([...choices, 'Valeur 3'])} />
            <Button label="Valeur 4" onClick={() => setChoices([...choices, 'Valeur 4'])} />
        </>
  } = args;
  return <CustomDropdown label={choices.length > 0 ? choices.toString() : label} icon={React.createElement(icons[icon as keyof typeof icons])} size={size} variant={variant} isDisabled={isDisabled} isLoading={isLoading} onFocus={action('onfocus')} onBlur={action('onblur')}>
            {children}
        </CustomDropdown>;
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`(args: CustomDropdownProps) => {
  const {
    label = 'Sorting dropdown',
    icon = 'Love',
    size = 'default',
    variant = 'outlined',
    isDisabled = false,
    isLoading = false,
    className
  } = args;
  const firstDropdownData = [{
    value: '1',
    label: 'Status'
  }, {
    value: '2',
    label: 'Name'
  }, {
    value: '3',
    label: 'Content type'
  }, {
    value: '4',
    label: 'Last modified'
  }, {
    value: '5',
    label: 'Created at'
  }];
  const secondDropdownData = [{
    value: 'asc',
    label: 'Ascending (A-Z)',
    icon: 'ArrowDown'
  }, {
    value: 'desc',
    label: 'Descending (Z-A)',
    icon: 'ArrowUp'
  }];
  const [sortValue, setSortValue] = useState('4');
  const [directionValue, setDirectionValue] = useState('asc');
  const onValueChange = (item: {
    value: string;
    label: string;
  }) => {
    setSortValue(item.value);
  };
  const onIconChange = (item: {
    value: string;
    label: string;
    icon: string;
  }) => {
    setDirectionValue(item.value);
  };
  const iconElement = () => {
    if (typeof directionValue === 'string') {
      const IconComponent = directionValue ? icons[secondDropdownData.find(item => item.value === directionValue)?.icon as keyof typeof icons] : icons[icon as keyof typeof icons];
      return IconComponent ? React.createElement(IconComponent) : undefined;
    }
    return directionValue;
  };
  return <CustomDropdown label={firstDropdownData.find(item => item.value === sortValue).label || label} icon={iconElement()} className={className} size={size} variant={variant} isDisabled={isDisabled} isLoading={isLoading} onFocus={action('onfocus')} onBlur={action('onblur')}>
            <MenuItem label="Sort by" variant="title" />
            <Dropdown variant="outlined" data={firstDropdownData} value={sortValue} onChange={(e, item: {
      value: string;
      label: string;
    }) => {
      onValueChange(item);
    }} />
            <Separator />
            <MenuItem label="Direction" variant="title" />
            <Dropdown variant="outlined" data={secondDropdownData} value={directionValue} onChange={(e, item: {
      value: string;
      label: string;
      icon: string;
    }) => {
      onIconChange(item);
    }} />
        </CustomDropdown>;
}`,...R.parameters?.docs?.source}}};const Da=["IconButtonWithText","Form","WithButtons","MultipleChoices","SortingDropdown"];export{M as Form,B as IconButtonWithText,E as MultipleChoices,R as SortingDropdown,N as WithButtons,Da as __namedExportsOrder,Ca as default};
