import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DTRofVPE.js";import{F as n,Gt as r,L as i,Ot as a,c as o,i as s,j as c,s as l,t as u}from"./icons-U8xZOogm.js";import{S as d,V as f,b as p,dt as m,j as h,p as g}from"./Thumbnail-BEzSuisq.js";import{n as _}from"./Badge-CnziKE_R.js";var v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{l(),s(),u(),v=t(),y={title:`Components/Tooltip`,component:o,tags:[`new`],parameters:{layout:`centered`,knobs:{disable:!0},storysource:{disable:!0},actions:{argTypesRegex:`^on.*`}}},b=e=>(0,v.jsx)(o,{label:`Tooltip`,...e}),x={render:b,args:{label:`Home`,children:(0,v.jsx)(r,{icon:(0,v.jsx)(h,{}),variant:`outlined`})}},S={render:b,args:{label:`Home`,children:(0,v.jsx)(r,{label:`Home button`,icon:(0,v.jsx)(h,{}),variant:`outlined`})}},C={render:b,args:{children:(0,v.jsx)(r,{isDisabled:!0,label:`Disabled button`,icon:(0,v.jsx)(h,{}),variant:`outlined`})}},w={render:b,args:{label:`Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip`,children:(0,v.jsx)(r,{icon:(0,v.jsx)(h,{}),variant:`outlined`})}},T={render:b,args:{children:(0,v.jsx)(a,{icon:(0,v.jsx)(h,{}),label:`Chip`})}},E={render:b,args:{label:`That is a long text`,children:(0,v.jsx)(`p`,{style:{width:`400px`},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante.`})}},D={render:b,args:{children:(0,v.jsx)(_,{label:`Badge`})}},O=()=>(0,v.jsx)(`div`,{style:{transform:`scale(1)`,height:`100vh`},children:(0,v.jsx)(i,{headerLogo:(0,v.jsx)(`img`,{src:`https://via.placeholder.com/100x40?text=Logo`}),headerCaption:`development`,top:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{children:(0,v.jsx)(o,{label:`Tooltip`,children:(0,v.jsx)(n,{isSelected:!0,label:`NavItem selected`,icon:(0,v.jsx)(m,{})})})}),(0,v.jsxs)(c,{children:[(0,v.jsx)(o,{label:`Tooltip`,children:(0,v.jsx)(n,{label:`Very very long long name with many characters`,icon:(0,v.jsx)(f,{})})}),(0,v.jsx)(o,{label:`Tooltip`,children:(0,v.jsx)(n,{icon:(0,v.jsx)(d,{}),label:`My profile`,subtitle:`username as a subtitle`})})]})]}),bottom:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{children:(0,v.jsx)(o,{label:`Tooltip`,children:(0,v.jsx)(n,{label:`Another bottom item`,icon:(0,v.jsx)(p,{})})})}),(0,v.jsx)(c,{children:(0,v.jsx)(o,{label:`Tooltip`,children:(0,v.jsx)(n,{label:`Bottom item`,icon:(0,v.jsx)(g,{})})})})]})})}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Home',
    children: <Button icon={<Home />} variant="outlined" />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Home',
    children: <Button label="Home button" icon={<Home />} variant="outlined" />
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Button isDisabled label="Disabled button" icon={<Home />} variant="outlined" />
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip',
    children: <Button icon={<Home />} variant="outlined" />
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Chip icon={<Home />} label="Chip" />
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'That is a long text',
    children: <p style={{
      width: '400px'
    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante.</p>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Badge label="Badge" />
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <div style={{
    transform: 'scale(1)',
    height: '100vh'
  }}>
            <PrimaryNav headerLogo={<img src="https://via.placeholder.com/100x40?text=Logo" />} headerCaption="development" top={<>
                  <PrimaryNavItemsGroup>
                      <Tooltip label="Tooltip">
                          <PrimaryNavItem isSelected label="NavItem selected" icon={<Apps />} />
                      </Tooltip>
                  </PrimaryNavItemsGroup>
                  <PrimaryNavItemsGroup>
                      <Tooltip label="Tooltip">
                          <PrimaryNavItem label="Very very long long name with many characters" icon={<Feather />} />
                      </Tooltip>
                      <Tooltip label="Tooltip">
                          <PrimaryNavItem icon={<Person />} label="My profile" subtitle="username as a subtitle" />
                      </Tooltip>
                  </PrimaryNavItemsGroup>
              </>} bottom={<>
                  <PrimaryNavItemsGroup>
                      <Tooltip label="Tooltip">
                          <PrimaryNavItem label="Another bottom item" icon={<Profile />} />
                      </Tooltip>
                  </PrimaryNavItemsGroup>
                  <PrimaryNavItemsGroup>
                      <Tooltip label="Tooltip">
                          <PrimaryNavItem label="Bottom item" icon={<Setting />} />
                      </Tooltip>
                  </PrimaryNavItemsGroup>
              </>} />
        </div>;
}`,...O.parameters?.docs?.source}}},k=[`IconButtonTooltip`,`ButtonTooltip`,`DisabledButtonTooltip`,`LongTooltip`,`ChipTooltip`,`TextTooltip`,`BadgeTooltip`,`PrimaryNavTooltip`]}))();export{D as BadgeTooltip,S as ButtonTooltip,T as ChipTooltip,C as DisabledButtonTooltip,x as IconButtonTooltip,w as LongTooltip,O as PrimaryNavTooltip,E as TextTooltip,k as __namedExportsOrder,y as default};