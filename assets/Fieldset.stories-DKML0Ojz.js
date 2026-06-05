import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-D1SPI9oU.js";import{Dt as n,En as r,Fn as i,Ft as a,Hn as o,Ht as s,N as c,Qt as l,Wt as u,Yn as d,_t as f,at as p,ft as m,i as h,j as g,kn as _,pt as v,t as y,xt as b,yt as x}from"./icons-CfUg02LP.js";import{n as S}from"./Textarea-BCng_RoO.js";var C,w=e((()=>{C=`data:text/markdown;base64,`})),T,E,D,O,k;e((()=>{m(),h(),w(),y(),T=t(),E={title:`Components/Fieldset`,component:v,tags:[`beta`],parameters:{layout:`padded`,actions:{argTypesRegex:`^on.*`},notes:{markdown:C}},argTypes:{buttons:{control:!1},children:{control:!1}}},D={args:{label:`Fieldset`,buttons:(0,T.jsx)(l,{icon:(0,T.jsx)(r,{}),variant:`ghost`}),helper:`Fieldset information`,children:(0,T.jsx)(b,{id:`field`,label:`Field`,chips:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{color:`accent`,label:`Required`}),(0,T.jsx)(a,{icon:(0,T.jsx)(_,{}),label:`Shared by all languages`})]}),buttons:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(l,{icon:(0,T.jsx)(d,{}),label:`Add`}),(0,T.jsx)(l,{icon:(0,T.jsx)(r,{}),variant:`ghost`})]}),helper:`information`,children:(0,T.jsx)(f,{selector:(0,T.jsx)(p,{size:`big`,placeholder:`Input value`})})})}},O={args:{...D.args,children:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(b,{id:`field-multiple`,label:`Field`,chips:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{color:`accent`,label:`Required`}),(0,T.jsx)(a,{icon:(0,T.jsx)(_,{}),label:`Shared by all languages`})]}),buttons:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(l,{icon:(0,T.jsx)(d,{}),label:`Add`}),(0,T.jsx)(l,{icon:(0,T.jsx)(r,{}),variant:`ghost`})]}),helper:`information`,children:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(f,{buttons:(0,T.jsx)(l,{icon:(0,T.jsx)(r,{})}),selector:(0,T.jsx)(p,{size:`big`,placeholder:`Input value`})}),(0,T.jsx)(f,{buttons:(0,T.jsx)(l,{icon:(0,T.jsx)(r,{})}),selector:(0,T.jsx)(p,{size:`big`,placeholder:`Input value`})}),(0,T.jsx)(f,{buttons:(0,T.jsx)(l,{icon:(0,T.jsx)(r,{})}),selector:(0,T.jsx)(p,{size:`big`,placeholder:`Input value`})})]})}),(0,T.jsx)(x,{id:`field-boolean`,label:`Field Boolean`,helper:`information`,chips:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{color:`accent`,label:`Required`}),(0,T.jsx)(a,{icon:(0,T.jsx)(_,{}),label:`Shared by all languages`})]}),buttons:(0,T.jsx)(l,{icon:(0,T.jsx)(r,{}),variant:`ghost`})}),(0,T.jsx)(b,{id:`field-dropdown`,label:`Field`,chips:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{color:`accent`,label:`Required`}),(0,T.jsx)(a,{icon:(0,T.jsx)(_,{}),label:`Shared by all languages`})]}),buttons:(0,T.jsx)(l,{icon:(0,T.jsx)(r,{}),variant:`ghost`}),helper:`information`,children:(0,T.jsx)(f,{selector:(0,T.jsx)(n,{variant:`outlined`,label:`Input value`,className:`flexFluid`,value:``,data:[{label:`option 1`,value:`1`},{label:`option 2`,value:`2`},{label:`option 3 with very long long label label label label label label label label`,value:`3`}]})})}),(0,T.jsx)(b,{hasError:!0,errorMessage:`There is an error`,id:`field-textarea`,label:`Field`,chips:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{color:`accent`,label:`Required`}),(0,T.jsx)(a,{icon:(0,T.jsx)(_,{}),label:`Shared by all languages`})]}),buttons:(0,T.jsx)(l,{icon:(0,T.jsx)(r,{}),variant:`ghost`}),helper:`information`,children:(0,T.jsx)(f,{selector:(0,T.jsx)(S,{id:`moonstone-textarea`,placeholder:`Input value`})})}),(0,T.jsx)(b,{id:`field-radio`,label:`Field`,chips:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{color:`accent`,label:`Required`}),(0,T.jsx)(a,{icon:(0,T.jsx)(_,{}),label:`Shared by all languages`})]}),helper:`information`,children:(0,T.jsx)(f,{selector:(0,T.jsxs)(c,{name:`radio`,children:[(0,T.jsx)(g,{id:`radio1`,label:`Yes`,value:`Yes`}),(0,T.jsx)(g,{id:`radio2`,label:`No`,value:`No`})]})})}),(0,T.jsx)(b,{id:`field-cardselectors`,label:`Field`,chips:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{color:`accent`,label:`Required`}),(0,T.jsx)(a,{icon:(0,T.jsx)(_,{}),label:`Shared by all languages`})]}),buttons:(0,T.jsx)(l,{icon:(0,T.jsx)(r,{}),variant:`ghost`}),helper:`information`,children:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(f,{selector:(0,T.jsx)(u,{id:`cardSelector1`,displayName:`Item name`,systemName:`system name`,information:`information`,thumbnailType:`icon`}),buttons:(0,T.jsx)(l,{icon:(0,T.jsx)(o,{})})}),(0,T.jsx)(f,{selector:(0,T.jsx)(u,{id:`cardSelector2`,displayName:`Item name`,systemName:`system name`,information:`information`,thumbnailType:`icon`}),buttons:(0,T.jsx)(l,{icon:(0,T.jsx)(o,{})})}),(0,T.jsx)(f,{selector:(0,T.jsx)(s,{iconStart:(0,T.jsx)(i,{}),id:`emptyCardSelector`,label:`Add item`})})]})})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Fieldset',
    buttons: <Button icon={<MoreVert />} variant="ghost" />,
    helper: 'Fieldset information',
    children: <Field id="field" label="Field" chips={<><Chip color="accent" label="Required" /><Chip icon={<Language />} label="Shared by all languages" /></>} buttons={<><Button icon={<Add />} label="Add" /><Button icon={<MoreVert />} variant="ghost" /></>} helper="information"><FieldSelector selector={<Input size="big" placeholder="Input value" />} /></Field>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...SingleField.args,
    children: <>
        <Field id="field-multiple" label="Field" chips={<><Chip color="accent" label="Required" /><Chip icon={<Language />} label="Shared by all languages" /></>} buttons={<><Button icon={<Add />} label="Add" /><Button icon={<MoreVert />} variant="ghost" /></>} helper="information">
            <>
                <FieldSelector buttons={<Button icon={<MoreVert />} />} selector={<Input size="big" placeholder="Input value" />} />
                <FieldSelector buttons={<Button icon={<MoreVert />} />} selector={<Input size="big" placeholder="Input value" />} />
                <FieldSelector buttons={<Button icon={<MoreVert />} />} selector={<Input size="big" placeholder="Input value" />} />
            </>
        </Field>
        <FieldBoolean id="field-boolean" label="Field Boolean" helper="information" chips={<><Chip color="accent" label="Required" /><Chip icon={<Language />} label="Shared by all languages" /></>} buttons={<Button icon={<MoreVert />} variant="ghost" />} />
        <Field id="field-dropdown" label="Field" chips={<><Chip color="accent" label="Required" /><Chip icon={<Language />} label="Shared by all languages" /></>} buttons={<Button icon={<MoreVert />} variant="ghost" />} helper="information">
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
        <Field hasError errorMessage="There is an error" id="field-textarea" label="Field" chips={<><Chip color="accent" label="Required" /><Chip icon={<Language />} label="Shared by all languages" /></>} buttons={<Button icon={<MoreVert />} variant="ghost" />} helper="information">
            <FieldSelector selector={<Textarea id="moonstone-textarea" placeholder="Input value" />} />
        </Field>
        <Field id="field-radio" label="Field" chips={<><Chip color="accent" label="Required" /><Chip icon={<Language />} label="Shared by all languages" /></>} helper="information">
            <FieldSelector selector={<RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes" /><RadioItem id="radio2" label="No" value="No" /></RadioGroup>} />
        </Field>
        <Field id="field-cardselectors" label="Field" chips={<><Chip color="accent" label="Required" /><Chip icon={<Language />} label="Shared by all languages" /></>} buttons={<Button icon={<MoreVert />} variant="ghost" />} helper="information">
            <>
                <FieldSelector selector={<CardSelector id="cardSelector1" displayName="Item name" systemName="system name" information="information" thumbnailType="icon" />} buttons={<Button icon={<Close />} />} />
                <FieldSelector selector={<CardSelector id="cardSelector2" displayName="Item name" systemName="system name" information="information" thumbnailType="icon" />} buttons={<Button icon={<Close />} />} />
                <FieldSelector selector={<EmptyCardSelector iconStart={<File />} id="emptyCardSelector" label="Add item" />} />
            </>
        </Field>
    </>
  }
}`,...O.parameters?.docs?.source}}},k=[`SingleField`,`MultipleFields`]}))();export{O as MultipleFields,D as SingleField,k as __namedExportsOrder,E as default};