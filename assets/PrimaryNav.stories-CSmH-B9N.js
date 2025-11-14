import{j as e}from"./iframe-C2ZGshnl.js";import{B as m}from"./Button-b5UlppAi.js";import{S as n}from"./Apps-DN45JZ0H.js";import{c as b,d as c,a as s}from"./Setting-Cj1VmELe.js";import{S as o}from"./Person-akmxlfM1.js";import{S as d,a as g}from"./Workflow-CGqYIts5.js";import{S as p}from"./Star-DxKX1F6Y.js";import{P as i}from"./PrimaryNav-B8vgjGte.js";import{P as t}from"./PrimaryNavItemsGroup-woi3ZLIK.js";import{P as a}from"./PrimaryNavItem-BoiEO728.js";import{B as l}from"./Badge-CJCjqA10.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./Loader-Db9zUkcM.js";import"./Typography-spZ3wEuk.js";import"./PrimaryNav.context-B1ZBM1yf.js";import"./Separator-Bw9zPHgw.js";import"./useAccessibleClick-Bdvd2I0f.js";const h="data:text/markdown;base64,IyMgR29hbHM6CgpDcmVhdGUgdGhlIE5hdmlnYXRpb24tcHJpbWFyeSBjb21wb25lbnQgZm9yIHRoZSBtYWluIG5hdmlnYXRpb24gKGxldmVsIDEpLgoKIyMgU3BlY2lmaWNhdGlvbnM6CgpUaGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkIGJlIGNvbGxhcHNhYmxlL2V4cGFuZGFibGUgYnkgY2xpY2tpbmcgb24gdGhlIGJ1cmdlciBtZW51LgoKU2hvdyBvciBIaWRlIGVsZW1lbnRzIGRlcGVuZHMgb24gdGhlIHN0YXRlIG9mIHRoZSBkaXNwbGF5LgoKaWYgZXhwYW5kZWQgOgoKIC0gU3dpdGNoIHt7YnVyZ2VyLW1lbnV9fSB0byB7e2Fycm93LWJhY2t9fSBpY29uCiAtIFNob3cgSGVhZGVyTG9nbwogLSBTaG93IGxhYmVs4oCZcyBpY29uCiAtIFNob3cgaGVscGluZyBsaW5rcyAoZG9jdW1lbnRhdGlvbnMgLi4uKQogLSBTaG93IG1haWwgb2YgdGhlIHVzZXIKIC0gU2hvdyBzaWduIG91dCBidXR0b24KCkZpZ21hIExpbmsgOsKgaHR0cHM6Ly93d3cuZmlnbWEuY29tL2ZpbGUvOTM5Ylc3NEMzVExXNVZBeksyM3VveC9tb29uc3RvbmUtY29tcG9uZW50cz9ub2RlLWlkPTE0MCUzQTAK",k={title:"Components/PrimaryNav",component:i,parameters:{notes:{markdown:h}}},r={render:()=>e.jsx("div",{style:{transform:"scale(1)",height:"100vh"},children:e.jsx(i,{headerLogo:e.jsx("img",{src:"https://via.placeholder.com/100x40?text=Logo"}),headerCaption:"development",modeIcon:e.jsx(p,{}),top:e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(a,{label:"NavItem not selected",icon:e.jsx(s,{})}),e.jsx(a,{isSelected:!0,label:"NavItem selected",icon:e.jsx(n,{})})]}),e.jsxs(t,{children:[e.jsx(a,{label:"Very very long long name with many characters",icon:e.jsx(s,{})}),e.jsx(a,{icon:e.jsx(o,{}),label:"My profile",subtitle:"username as a subtitle"}),e.jsx(a,{icon:e.jsx(o,{}),label:"Very very long long long long label",subtitle:"username as a subtitle username as a subtitle username as a subtitle username as a subtitle",button:e.jsx(m,{isReversed:!0,icon:e.jsx(d,{}),label:"Sign Out",variant:"ghost",onClick:()=>null})}),e.jsx(a,{icon:e.jsx(g,{}),label:"With badge",badge:e.jsx(l,{label:"3"})}),e.jsx(a,{icon:e.jsx(o,{}),label:"With badge",badge:e.jsx(l,{label:"333"})})]}),e.jsx(t,{isDisplayedWhenCollapsed:!1,children:e.jsx(a,{url:"https://jahia.com",label:"Jahia Link"})})]}),bottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx(a,{label:"Another bottom item",icon:e.jsx(b,{})})}),e.jsx(t,{children:e.jsx(a,{label:"Bottom item",icon:e.jsx(c,{})})})]})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    transform: 'scale(1)',
    height: '100vh'
  }}>
        <PrimaryNav headerLogo={<img src="https://via.placeholder.com/100x40?text=Logo" />} headerCaption="development" modeIcon={<Star />} top={<>
              <PrimaryNavItemsGroup>
                  <PrimaryNavItem label="NavItem not selected" icon={<Feather />} />
                  <PrimaryNavItem isSelected label="NavItem selected" icon={<Apps />} />
              </PrimaryNavItemsGroup>
              <PrimaryNavItemsGroup>
                  <PrimaryNavItem label="Very very long long name with many characters" icon={<Feather />} />
                  <PrimaryNavItem icon={<Person />} label="My profile" subtitle="username as a subtitle" />
                  <PrimaryNavItem icon={<Person />} label="Very very long long long long label" subtitle="username as a subtitle username as a subtitle username as a subtitle username as a subtitle" button={<Button isReversed icon={<Power />} label="Sign Out" variant="ghost" onClick={() => null} />} />
                  <PrimaryNavItem icon={<Workflow />} label="With badge" badge={<Badge label="3" />} />
                  <PrimaryNavItem icon={<Person />} label="With badge" badge={<Badge label="333" />} />
              </PrimaryNavItemsGroup>
              <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>
                  <PrimaryNavItem url="https://jahia.com" label="Jahia Link" />
              </PrimaryNavItemsGroup>
          </>} bottom={<>
              <PrimaryNavItemsGroup>
                  <PrimaryNavItem label="Another bottom item" icon={<Profile />} />
              </PrimaryNavItemsGroup>
              <PrimaryNavItemsGroup>
                  <PrimaryNavItem label="Bottom item" icon={<Setting />} />
              </PrimaryNavItemsGroup>
          </>} />
    </div>
}`,...r.parameters?.docs?.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,k as default};
