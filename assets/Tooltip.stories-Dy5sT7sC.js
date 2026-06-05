import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-D1SPI9oU.js";import{An as n,Cn as r,F as i,Ft as a,In as o,Jn as s,L as c,Qt as l,c as u,i as d,s as f,t as p,vn as m,xn as h,z as g}from"./icons-CfUg02LP.js";import{n as _}from"./Badge-DtKUCuq5.js";import{n as v,t as y}from"./img-placeholder-jPXx6AVz.js";var b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{f(),d(),p(),v(),b=t(),x={title:`Components/Tooltip`,component:u,tags:[`new`],parameters:{layout:`centered`,knobs:{disable:!0},storysource:{disable:!0},actions:{argTypesRegex:`^on.*`}}},S=e=>(0,b.jsx)(u,{label:`Tooltip`,...e}),C={render:S,args:{label:`Home`,children:(0,b.jsx)(l,{icon:(0,b.jsx)(n,{}),variant:`outlined`})}},w={render:S,args:{label:`Home`,children:(0,b.jsx)(l,{label:`Home button`,icon:(0,b.jsx)(n,{}),variant:`outlined`})}},T={render:S,args:{children:(0,b.jsx)(l,{isDisabled:!0,label:`Disabled button`,icon:(0,b.jsx)(n,{}),variant:`outlined`})}},E={render:S,args:{label:`Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip`,children:(0,b.jsx)(l,{icon:(0,b.jsx)(n,{}),variant:`outlined`})}},D={render:S,args:{children:(0,b.jsx)(a,{icon:(0,b.jsx)(n,{}),label:`Chip`})}},O={render:S,args:{label:`That is a long text`,children:(0,b.jsx)(`p`,{style:{width:`400px`,margin:0},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante.`})}},k={render:S,args:{children:(0,b.jsx)(_,{label:`Badge`})}},A=()=>(0,b.jsx)(`div`,{style:{transform:`scale(1)`,height:`100vh`},children:(0,b.jsx)(g,{headerLogo:(0,b.jsx)(`img`,{src:y,height:30,alt:`placeholder`}),headerCaption:`development`,top:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{children:(0,b.jsx)(u,{label:`Tooltip`,children:(0,b.jsx)(c,{isSelected:!0,label:`NavItem selected`,icon:(0,b.jsx)(s,{})})})}),(0,b.jsxs)(i,{children:[(0,b.jsx)(u,{label:`Tooltip`,children:(0,b.jsx)(c,{label:`Very very long long name with many characters`,icon:(0,b.jsx)(o,{})})}),(0,b.jsx)(u,{label:`Tooltip`,children:(0,b.jsx)(c,{icon:(0,b.jsx)(r,{}),label:`My profile`,subtitle:`username as a subtitle`})})]})]}),bottom:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{children:(0,b.jsx)(u,{label:`Tooltip`,children:(0,b.jsx)(c,{label:`Another bottom item`,icon:(0,b.jsx)(h,{})})})}),(0,b.jsx)(i,{children:(0,b.jsx)(u,{label:`Tooltip`,children:(0,b.jsx)(c,{label:`Bottom item`,icon:(0,b.jsx)(m,{})})})})]})})}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Home',
    children: <Button icon={<Home />} variant="outlined" />
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Home',
    children: <Button label="Home button" icon={<Home />} variant="outlined" />
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Button isDisabled label="Disabled button" icon={<Home />} variant="outlined" />
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip',
    children: <Button icon={<Home />} variant="outlined" />
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Chip icon={<Home />} label="Chip" />
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'That is a long text',
    children: <p style={{
      width: '400px',
      margin: 0
    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante.</p>
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Badge label="Badge" />
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <div style={{
    transform: 'scale(1)',
    height: '100vh'
  }}>
            <PrimaryNav headerLogo={<img src={placeholder} height={30} alt="placeholder" />} headerCaption="development" top={<>
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
}`,...A.parameters?.docs?.source}}},j=[`IconButtonTooltip`,`ButtonTooltip`,`DisabledButtonTooltip`,`LongTooltip`,`ChipTooltip`,`TextTooltip`,`BadgeTooltip`,`PrimaryNavTooltip`]}))();export{k as BadgeTooltip,w as ButtonTooltip,D as ChipTooltip,T as DisabledButtonTooltip,C as IconButtonTooltip,E as LongTooltip,A as PrimaryNavTooltip,O as TextTooltip,j as __namedExportsOrder,x as default};