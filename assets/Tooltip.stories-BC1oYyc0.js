import{r as j,j as e,R as w}from"./iframe-BDgbDFAS.js";import{P as a}from"./PrimaryNavItem-CQ2eDk0L.js";import{S as D}from"./Apps-Duzob8v_.js";import{c as F,d as G,a as L}from"./Setting-CTiUXQ4P.js";import{S as s}from"./Home-CNvA8o4O.js";import{S as R}from"./Person-DHd4AY6M.js";import{c as f}from"./clsx-B-dksMZM.js";import{u as A,i as V,j as E,d as O,e as k,k as M,o as Q,l as z,s as J,m as K}from"./floating-ui.react-DrRuqaZ2.js";import{T as U}from"./Typography-DVmD2Ujz.js";import{B as g}from"./Button-YqBLSdH5.js";import{C as W}from"./Chip-DPXpcU9M.js";import{B as X}from"./Badge-DmwpHMbj.js";import{P as Y}from"./PrimaryNav-uXMNjMfR.js";import{P as l}from"./PrimaryNavItemsGroup-Bs9Qvh6l.js";import"./preload-helper-PPVm8Dsz.js";import"./PrimaryNav.context-DjQWDj6i.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./index-CLestvyK.js";import"./index-DD2yJrIj.js";/* empty css               */import"./Loader-B4E4PcEp.js";import"./Separator-CCPuEeLb.js";const r=({label:t,children:b,className:N,...P})=>{const[h,I]=j.useState(!1),x=j.useRef(null),{refs:T,floatingStyles:S,context:i}=A({open:h,onOpenChange:I,middleware:[Q(10),z(),J(),K({element:x})]}),B=V(i),_=E(i),H=O(i),{getReferenceProps:C,getFloatingProps:q}=k([B,_,H]);if(b&&t)return e.jsxs("div",{ref:T.setReference,className:f("moonstone-tooltip",N),...C(),...P,children:[w.cloneElement(b,{"aria-describedby":"moonstone-tooltip_label"}),h&&e.jsxs("div",{ref:T.setFloating,id:"moonstone-tooltip_label",className:f("moonstone-tooltip_label"),style:S,role:"tooltip",...q(),children:[e.jsx(M,{ref:x,className:"moonstone-tooltip_arrow",context:i}),e.jsx(U,{children:t})]})]})};r.displayName="Tooltip";try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{label:{defaultValue:null,description:"Label displayed in the tooltip",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Te={title:"Components/Tooltip",component:r,tags:["new"],parameters:{layout:"centered",knobs:{disable:!0},storysource:{disable:!0},actions:{argTypesRegex:"^on.*"}}},o=t=>e.jsx(r,{label:"Tooltip",...t}),n={render:o,args:{label:"Home",children:e.jsx(g,{icon:e.jsx(s,{}),variant:"outlined"})}},m={render:o,args:{label:"Home",children:e.jsx(g,{label:"Home button",icon:e.jsx(s,{}),variant:"outlined"})}},c={render:o,args:{children:e.jsx(g,{isDisabled:!0,label:"Disabled button",icon:e.jsx(s,{}),variant:"outlined"})}},p={render:o,args:{label:"Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip",children:e.jsx(g,{icon:e.jsx(s,{}),variant:"outlined"})}},u={render:o,args:{children:e.jsx(W,{icon:e.jsx(s,{}),label:"Chip"})}},v={render:o,args:{label:"That is a long text",children:e.jsx("p",{style:{width:"400px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante."})}},d={render:o,args:{children:e.jsx(X,{label:"Badge"})}},y=()=>e.jsx("div",{style:{transform:"scale(1)",height:"100vh"},children:e.jsx(Y,{headerLogo:e.jsx("img",{src:"https://via.placeholder.com/100x40?text=Logo"}),headerCaption:"development",top:e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(r,{label:"Tooltip",children:e.jsx(a,{isSelected:!0,label:"NavItem selected",icon:e.jsx(D,{})})})}),e.jsxs(l,{children:[e.jsx(r,{label:"Tooltip",children:e.jsx(a,{label:"Very very long long name with many characters",icon:e.jsx(L,{})})}),e.jsx(r,{label:"Tooltip",children:e.jsx(a,{icon:e.jsx(R,{}),label:"My profile",subtitle:"username as a subtitle"})})]})]}),bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(r,{label:"Tooltip",children:e.jsx(a,{label:"Another bottom item",icon:e.jsx(F,{})})})}),e.jsx(l,{children:e.jsx(r,{label:"Tooltip",children:e.jsx(a,{label:"Bottom item",icon:e.jsx(G,{})})})})]})})});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
