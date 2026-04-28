import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-ST3FQwwi.js";import{t as n}from"./clsx-CaLmofN8.js";import{t as r}from"./Apps-CO5PvZ1u.js";import{i,n as a,t as o}from"./Setting-CpaROAsQ.js";import{t as s}from"./Home-QshU2sBP.js";import{t as c}from"./Person-DyEnP85c.js";import{t as l}from"./Typography-BxA49sLq.js";import{t as u}from"./Badge-4HCIlWnz.js";/* empty css               */import"./Loader-DTVQNLxh.js";import{t as d}from"./Button-CzXfPH3r.js";import{t as f}from"./Chip-DmR0lMnX.js";import{_ as p,c as m,d as h,g,h as _,l as v,m as y,o as b,s as x,t as S}from"./floating-ui.react-BFvYzXqP.js";import"./react-dom-D6wlrHAt.js";import{t as C}from"./PrimaryNav-DaT5xlKM.js";import{t as w}from"./PrimaryNavItem-DVLCsezB.js";import{t as T}from"./PrimaryNavItemsGroup-BF4Zb2hV.js";import"./Separator-BRd1pnPm.js";import{t as E}from"./iframe-BCv1I7TQ.js";var D=e(t(),1),O=E(),k=({label:e,children:t,className:r,...i})=>{let[a,o]=(0,D.useState)(!1),s=(0,D.useRef)(null),{refs:c,floatingStyles:u,context:d}=x({open:a,onOpenChange:o,middleware:[g(10),_(),p(),y({element:s})]}),{getReferenceProps:f,getFloatingProps:C}=h([v(d),m(d),b(d)]);if(t&&e)return(0,O.jsxs)(`div`,{ref:c.setReference,className:n(`moonstone-tooltip`,r),...f(),...i,children:[D.cloneElement(t,{"aria-describedby":`moonstone-tooltip_label`}),a&&(0,O.jsxs)(`div`,{ref:c.setFloating,id:`moonstone-tooltip_label`,className:n(`moonstone-tooltip_label`),style:u,role:`tooltip`,...C(),children:[(0,O.jsx)(S,{ref:s,className:`moonstone-tooltip_arrow`,context:d}),(0,O.jsx)(l,{children:e})]})]})};k.displayName=`Tooltip`;try{k.displayName=`Tooltip`,k.__docgenInfo={description:``,displayName:`Tooltip`,props:{label:{defaultValue:null,description:`Label displayed in the tooltip`,name:`label`,required:!0,type:{name:`string`}},className:{defaultValue:null,description:`Additional classname`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var A={title:`Components/Tooltip`,component:k,tags:[`new`],parameters:{layout:`centered`,knobs:{disable:!0},storysource:{disable:!0},actions:{argTypesRegex:`^on.*`}}},j=e=>(0,O.jsx)(k,{label:`Tooltip`,...e}),M={render:j,args:{label:`Home`,children:(0,O.jsx)(d,{icon:(0,O.jsx)(s,{}),variant:`outlined`})}},N={render:j,args:{label:`Home`,children:(0,O.jsx)(d,{label:`Home button`,icon:(0,O.jsx)(s,{}),variant:`outlined`})}},P={render:j,args:{children:(0,O.jsx)(d,{isDisabled:!0,label:`Disabled button`,icon:(0,O.jsx)(s,{}),variant:`outlined`})}},F={render:j,args:{label:`Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip`,children:(0,O.jsx)(d,{icon:(0,O.jsx)(s,{}),variant:`outlined`})}},I={render:j,args:{children:(0,O.jsx)(f,{icon:(0,O.jsx)(s,{}),label:`Chip`})}},L={render:j,args:{label:`That is a long text`,children:(0,O.jsx)(`p`,{style:{width:`400px`},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante.`})}},R={render:j,args:{children:(0,O.jsx)(u,{label:`Badge`})}},z=()=>(0,O.jsx)(`div`,{style:{transform:`scale(1)`,height:`100vh`},children:(0,O.jsx)(C,{headerLogo:(0,O.jsx)(`img`,{src:`https://via.placeholder.com/100x40?text=Logo`}),headerCaption:`development`,top:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(T,{children:(0,O.jsx)(k,{label:`Tooltip`,children:(0,O.jsx)(w,{isSelected:!0,label:`NavItem selected`,icon:(0,O.jsx)(r,{})})})}),(0,O.jsxs)(T,{children:[(0,O.jsx)(k,{label:`Tooltip`,children:(0,O.jsx)(w,{label:`Very very long long name with many characters`,icon:(0,O.jsx)(i,{})})}),(0,O.jsx)(k,{label:`Tooltip`,children:(0,O.jsx)(w,{icon:(0,O.jsx)(c,{}),label:`My profile`,subtitle:`username as a subtitle`})})]})]}),bottom:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(T,{children:(0,O.jsx)(k,{label:`Tooltip`,children:(0,O.jsx)(w,{label:`Another bottom item`,icon:(0,O.jsx)(a,{})})})}),(0,O.jsx)(T,{children:(0,O.jsx)(k,{label:`Tooltip`,children:(0,O.jsx)(w,{label:`Bottom item`,icon:(0,O.jsx)(o,{})})})})]})})});M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Home',
    children: <Button icon={<Home />} variant="outlined" />
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Home',
    children: <Button label="Home button" icon={<Home />} variant="outlined" />
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Button isDisabled label="Disabled button" icon={<Home />} variant="outlined" />
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip',
    children: <Button icon={<Home />} variant="outlined" />
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Chip icon={<Home />} label="Chip" />
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'That is a long text',
    children: <p style={{
      width: '400px'
    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante.</p>
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Badge label="Badge" />
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}};var B=[`IconButtonTooltip`,`ButtonTooltip`,`DisabledButtonTooltip`,`LongTooltip`,`ChipTooltip`,`TextTooltip`,`BadgeTooltip`,`PrimaryNavTooltip`];export{R as BadgeTooltip,N as ButtonTooltip,I as ChipTooltip,P as DisabledButtonTooltip,M as IconButtonTooltip,F as LongTooltip,z as PrimaryNavTooltip,L as TextTooltip,B as __namedExportsOrder,A as default};