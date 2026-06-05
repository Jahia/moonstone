import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-D96AaFS0.js";import{t as r}from"./jsx-runtime-D1SPI9oU.js";import{Dt as i,En as a,Fn as o,Ft as s,Hn as c,Ht as l,J as u,N as d,Qt as f,Tt as p,Wt as m,Yn as h,_t as g,at as _,cn as v,i as y,j as b,kn as x,ln as S,pt as C,t as w,w as T,wt as E,xt as D,yt as O}from"./icons-CfUg02LP.js";import{n as k}from"./Typography-DyEi_Qz9.js";import{n as A}from"./Textarea-BCng_RoO.js";var j,M,N,P,F,I,L,R,z,B,V;t((()=>{j=e(n(),1),p(),y(),S(),w(),M=r(),{action:N}=__STORYBOOK_MODULE_ACTIONS__,P={title:`Components/CustomDropdown`,component:E,tags:[`beta`],parameters:{layout:`centered`,docs:{inlineStories:!1,IframeHeight:500}},argTypes:{icon:{options:Object.keys(v)}}},F=e=>{let{label:t,icon:n,size:r,variant:i,isDisabled:a,isLoading:o,className:s,children:c}=e;return(0,M.jsx)(E,{label:t,icon:typeof n==`string`&&v[n]?j.createElement(v[n]):void 0,className:s,size:r,variant:i,isDisabled:a,isLoading:o,onFocus:N(`onfocus`),onBlur:N(`onblur`),children:c})},I={render:F,args:{label:``,icon:`Love`,size:`default`,variant:`ghost`,isDisabled:!1,isLoading:!1,ariaLabel:`text dropdown`,children:(0,M.jsx)(k,{style:{maxWidth:`200px`},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta tortor in erat pulvinar, non laoreet est tempus. Nulla scelerisque molestie tempor. Vestibulum ullamcorper ultrices dui quis hendrerit. Donec nec elit nunc. Aliquam vitae magna dictum, pharetra velit sit amet, tincidunt neque. Nullam dui magna, pharetra a leo non, pellentesque viverra odio. Mauris eget porttitor arcu. Vivamus dignissim vitae lectus nec vulputate. Sed euismod in sem feugiat finibus. Pellentesque pellentesque eget eros at feugiat. Mauris commodo ullamcorper eros, lacinia molestie nulla tristique id. Donec nec tortor enim. Donec sit amet blandit est, a blandit lectus. Donec semper nisi sit amet finibus ultrices. Morbi varius a mauris vel posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`})}},L={render:F,args:{label:`Dropdown with form`,variant:`default`,isDisabled:!1,isLoading:!1,children:(0,M.jsxs)(C,{id:`form`,label:`Form`,children:[(0,M.jsx)(D,{id:`field-multiple`,label:`Field`,chips:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{color:`accent`,label:`Required`}),(0,M.jsx)(s,{icon:(0,M.jsx)(x,{}),label:`Shared by all languages`})]}),buttons:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(f,{icon:(0,M.jsx)(h,{}),label:`Add`}),(0,M.jsx)(f,{icon:(0,M.jsx)(a,{}),variant:`ghost`})]}),helper:`information`,children:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g,{buttons:(0,M.jsx)(f,{icon:(0,M.jsx)(a,{})}),selector:(0,M.jsx)(_,{size:`big`,placeholder:`Input value`})}),(0,M.jsx)(g,{buttons:(0,M.jsx)(f,{icon:(0,M.jsx)(a,{})}),selector:(0,M.jsx)(_,{size:`big`,placeholder:`Input value`})}),(0,M.jsx)(g,{buttons:(0,M.jsx)(f,{icon:(0,M.jsx)(a,{})}),selector:(0,M.jsx)(_,{size:`big`,placeholder:`Input value`})})]})}),(0,M.jsx)(O,{id:`field-boolean`,label:`Field Boolean`,helper:`information`,chips:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{color:`accent`,label:`Required`}),(0,M.jsx)(s,{icon:(0,M.jsx)(x,{}),label:`Shared by all languages`})]}),buttons:(0,M.jsx)(f,{icon:(0,M.jsx)(a,{}),variant:`ghost`})}),(0,M.jsx)(D,{id:`field-dropdown`,label:`Field`,chips:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{color:`accent`,label:`Required`}),(0,M.jsx)(s,{icon:(0,M.jsx)(x,{}),label:`Shared by all languages`})]}),buttons:(0,M.jsx)(f,{icon:(0,M.jsx)(a,{}),variant:`ghost`}),helper:`information`,children:(0,M.jsx)(g,{selector:(0,M.jsx)(i,{variant:`outlined`,label:`Input value`,className:`flexFluid`,value:``,data:[{label:`option 1`,value:`1`},{label:`option 2`,value:`2`},{label:`option 3 with very long long label label label label label label label label`,value:`3`}]})})}),(0,M.jsx)(D,{hasError:!0,errorMessage:`There is an error`,id:`field-textarea`,label:`Field`,chips:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{color:`accent`,label:`Required`}),(0,M.jsx)(s,{icon:(0,M.jsx)(x,{}),label:`Shared by all languages`})]}),buttons:(0,M.jsx)(f,{icon:(0,M.jsx)(a,{}),variant:`ghost`}),helper:`information`,children:(0,M.jsx)(g,{selector:(0,M.jsx)(A,{id:`moonstone-textarea`,placeholder:`Input value`})})}),(0,M.jsx)(D,{id:`field-radio`,label:`Field`,chips:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{color:`accent`,label:`Required`}),(0,M.jsx)(s,{icon:(0,M.jsx)(x,{}),label:`Shared by all languages`})]}),helper:`information`,children:(0,M.jsx)(g,{selector:(0,M.jsxs)(d,{name:`radio`,children:[(0,M.jsx)(b,{id:`radio1`,label:`Yes`,value:`Yes`}),(0,M.jsx)(b,{id:`radio2`,label:`No`,value:`No`})]})})}),(0,M.jsx)(D,{id:`field-cardselectors`,label:`Field`,chips:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{color:`accent`,label:`Required`}),(0,M.jsx)(s,{icon:(0,M.jsx)(x,{}),label:`Shared by all languages`})]}),buttons:(0,M.jsx)(f,{icon:(0,M.jsx)(a,{}),variant:`ghost`}),helper:`information`,children:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g,{selector:(0,M.jsx)(m,{id:`cardSelector1`,displayName:`Item name`,systemName:`system name`,information:`information`,thumbnailType:`icon`}),buttons:(0,M.jsx)(f,{icon:(0,M.jsx)(c,{})})}),(0,M.jsx)(g,{selector:(0,M.jsx)(m,{id:`cardSelector2`,displayName:`Item name`,systemName:`system name`,information:`information`,thumbnailType:`icon`}),buttons:(0,M.jsx)(f,{icon:(0,M.jsx)(c,{})})}),(0,M.jsx)(g,{selector:(0,M.jsx)(l,{iconStart:(0,M.jsx)(o,{}),id:`emptyCardSelector`,label:`Add item`})})]})})]})}},R=e=>{let[t,n]=(0,j.useState)(e.label),{label:r=`Dropdown with buttons`,icon:i=`Widgets`,size:a=`default`,variant:o=`ghost`,isDisabled:s=!1,isLoading:c=!1,children:l=(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(f,{label:`Valeur 1`,onClick:()=>n(`Valeur 1`)}),(0,M.jsx)(f,{label:`Valeur 2`,onClick:()=>n(`Valeur 2`)})]})}=e;return(0,M.jsx)(E,{label:t||r,icon:j.createElement(v[i]),size:a,variant:o,isDisabled:s,isLoading:c,onFocus:N(`onfocus`),onBlur:N(`onblur`),children:l})},z=e=>{let[t,n]=(0,j.useState)([]),{label:r=`Dropdown with buttons`,icon:i=`Widgets`,size:a=`default`,variant:o=`ghost`,isDisabled:s=!1,isLoading:c=!1,children:l=(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(f,{label:`Valeur 1`,onClick:()=>n([...t,`Valeur 1`])}),(0,M.jsx)(f,{label:`Valeur 2`,onClick:()=>n([...t,`Valeur 2`])}),(0,M.jsx)(f,{label:`Valeur 3`,onClick:()=>n([...t,`Valeur 3`])}),(0,M.jsx)(f,{label:`Valeur 4`,onClick:()=>n([...t,`Valeur 4`])})]})}=e;return(0,M.jsx)(E,{label:t.length>0?t.toString():r,icon:j.createElement(v[i]),size:a,variant:o,isDisabled:s,isLoading:c,onFocus:N(`onfocus`),onBlur:N(`onblur`),children:l})},B=e=>{let{label:t=`Sorting dropdown`,icon:n=`Love`,size:r=`default`,variant:a=`outlined`,isDisabled:o=!1,isLoading:s=!1,className:c}=e,l=[{value:`1`,label:`Status`},{value:`2`,label:`Name`},{value:`3`,label:`Content type`},{value:`4`,label:`Last modified`},{value:`5`,label:`Created at`}],d=[{value:`asc`,label:`Ascending (A-Z)`,icon:`ArrowDown`},{value:`desc`,label:`Descending (Z-A)`,icon:`ArrowUp`}],[f,p]=(0,j.useState)(`4`),[m,h]=(0,j.useState)(`asc`),g=e=>{p(e.value)},_=e=>{h(e.value)};return(0,M.jsxs)(E,{label:l.find(e=>e.value===f).label||t,icon:(()=>{if(typeof m==`string`){let e=m?v[d.find(e=>e.value===m)?.icon]:v[n];return e?j.createElement(e):void 0}return m})(),className:c,size:r,variant:a,isDisabled:o,isLoading:s,onFocus:N(`onfocus`),onBlur:N(`onblur`),children:[(0,M.jsx)(u,{label:`Sort by`,variant:`title`}),(0,M.jsx)(i,{variant:`outlined`,data:l,value:f,onChange:(e,t)=>{g(t)}}),(0,M.jsx)(T,{spacing:`medium`}),(0,M.jsx)(u,{label:`Direction`,variant:`title`}),(0,M.jsx)(i,{variant:`outlined`,data:d,value:m,onChange:(e,t)=>{_(t)}})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`(args: CustomDropdownProps) => {
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(args: CustomDropdownProps) => {
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`(args: CustomDropdownProps) => {
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
            <Separator spacing="medium" />
            <MenuItem label="Direction" variant="title" />
            <Dropdown variant="outlined" data={secondDropdownData} value={directionValue} onChange={(e, item: {
      value: string;
      label: string;
      icon: string;
    }) => {
      onIconChange(item);
    }} />
        </CustomDropdown>;
}`,...B.parameters?.docs?.source}}},V=[`IconButtonWithText`,`Form`,`WithButtons`,`MultipleChoices`,`SortingDropdown`]}))();export{L as Form,I as IconButtonWithText,z as MultipleChoices,B as SortingDropdown,R as WithButtons,V as __namedExportsOrder,P as default};