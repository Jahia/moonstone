import{r as j,j as e,R as w}from"./iframe-DnEO7nHG.js";import{B as g}from"./Button-D5ICsJ0U.js";import{c as f}from"./clsx-B-dksMZM.js";import{u as D,i as F,j as G,d as L,e as R,k as A,o as V,l as E,s as O,m as k}from"./floating-ui.react-C1MFziXn.js";import{T as M}from"./Typography-BPRzLVGf.js";import{S as s}from"./Home-BAFQaXjr.js";import{c as Q,d as z,a as J}from"./Setting-DevqeKCJ.js";import{S as K}from"./Apps-EvUO1NGC.js";import{S as U}from"./Person-BRmNZZGn.js";import{C as W}from"./Chip-D3cTWq9J.js";import{B as X}from"./Badge-BzP41gkI.js";import{P as Y}from"./PrimaryNav-CIiNA-jz.js";import{P as l}from"./PrimaryNavItemsGroup-BWUP9Tyr.js";import{P as a}from"./PrimaryNavItem-BkcfL8HB.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               */import"./Loader-DiM4oYUW.js";import"./index-DaIyYq36.js";import"./index-ZA0IP254.js";import"./PrimaryNav.context-D-QmA6SG.js";import"./Separator-C0vpUDCM.js";import"./useAccessibleClick-Bdvd2I0f.js";const r=({label:t,children:b,className:N,...P})=>{const[h,I]=j.useState(!1),x=j.useRef(null),{refs:T,floatingStyles:S,context:i}=D({open:h,onOpenChange:I,middleware:[V(10),E(),O(),k({element:x})]}),B=F(i),_=G(i),H=L(i),{getReferenceProps:C,getFloatingProps:q}=R([B,_,H]);if(b&&t)return e.jsxs("div",{ref:T.setReference,className:f("moonstone-tooltip",N),...C(),...P,children:[w.cloneElement(b,{"aria-describedby":"moonstone-tooltip_label"}),h&&e.jsxs("div",{ref:T.setFloating,id:"moonstone-tooltip_label",className:f("moonstone-tooltip_label"),style:S,role:"tooltip",...q(),children:[e.jsx(A,{ref:x,className:"moonstone-tooltip_arrow",context:i}),e.jsx(M,{children:t})]})]})};r.displayName="Tooltip";try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{label:{defaultValue:null,description:"Label displayed in the tooltip",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Te={title:"Components/Tooltip",component:r,tags:["new"],parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0},actions:{argTypesRegex:"^on.*"}}},o=t=>e.jsx(r,{label:"Tooltip",...t}),n={render:o,args:{label:"Home",children:e.jsx(g,{icon:e.jsx(s,{}),variant:"outlined"})}},m={render:o,args:{label:"Home",children:e.jsx(g,{label:"Home button",icon:e.jsx(s,{}),variant:"outlined"})}},c={render:o,args:{children:e.jsx(g,{isDisabled:!0,label:"Disabled button",icon:e.jsx(s,{}),variant:"outlined"})}},p={render:o,args:{label:"Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip",children:e.jsx(g,{icon:e.jsx(s,{}),variant:"outlined"})}},u={render:o,args:{children:e.jsx(W,{icon:e.jsx(s,{}),label:"Chip"})}},v={render:o,args:{label:"That is a long text",children:e.jsx("p",{style:{width:"400px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante."})}},d={render:o,args:{children:e.jsx(X,{label:"Badge"})}},y=()=>e.jsx("div",{style:{transform:"scale(1)",height:"100vh"},children:e.jsx(Y,{headerLogo:e.jsx("img",{src:"https://via.placeholder.com/100x40?text=Logo"}),headerCaption:"development",top:e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(r,{label:"Tooltip",children:e.jsx(a,{isSelected:!0,label:"NavItem selected",icon:e.jsx(K,{})})})}),e.jsxs(l,{children:[e.jsx(r,{label:"Tooltip",children:e.jsx(a,{label:"Very very long long name with many characters",icon:e.jsx(J,{})})}),e.jsx(r,{label:"Tooltip",children:e.jsx(a,{icon:e.jsx(U,{}),label:"My profile",subtitle:"username as a subtitle"})})]})]}),bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(r,{label:"Tooltip",children:e.jsx(a,{label:"Another bottom item",icon:e.jsx(Q,{})})})}),e.jsx(l,{children:e.jsx(r,{label:"Tooltip",children:e.jsx(a,{label:"Bottom item",icon:e.jsx(z,{})})})})]})})});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Home',
    children: <Button icon={<Home />} variant="outlined" />
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Home',
    children: <Button label="Home button" icon={<Home />} variant="outlined" />
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Button isDisabled label="Disabled button" icon={<Home />} variant="outlined" />
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip',
    children: <Button icon={<Home />} variant="outlined" />
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Chip icon={<Home />} label="Chip" />
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'That is a long text',
    children: <p style={{
      width: '400px'
    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante.</p>
  }
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <Badge label="Badge" />
  }
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};const je=["IconButtonTooltip","ButtonTooltip","DisabledButtonTooltip","LongTooltip","ChipTooltip","TextTooltip","BadgeTooltip","PrimaryNavTooltip"];export{d as BadgeTooltip,m as ButtonTooltip,u as ChipTooltip,c as DisabledButtonTooltip,n as IconButtonTooltip,p as LongTooltip,y as PrimaryNavTooltip,v as TextTooltip,je as __namedExportsOrder,Te as default};
