import{j as e}from"./iframe-nmEr806O.js";import{P as a}from"./PrimaryNavItem-Dk8U0bp5.js";import{S as m}from"./Apps-B-C6JUuN.js";import{c as n,d as b,a as s}from"./Setting-BqdXu3At.js";import{S as o}from"./Person-D6daFSS5.js";import{S as c,a as d}from"./Workflow-CHFw41sv.js";import{S as g}from"./Star-DdravE6C.js";import{P as i}from"./PrimaryNav-DbX-DGVf.js";import{P as t}from"./PrimaryNavItemsGroup-Du1I5efJ.js";import{B as p}from"./Button-DlXUV4Hi.js";import{B as l}from"./Badge-x2AyWgM6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PrimaryNav.context-BPWQPy5p.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Typography-DqVx_Ex2.js";import"./Separator-FusVRpZ3.js";/* empty css               */import"./Loader-D0Z8b268.js";const h="data:text/markdown;base64,IyMgR29hbHM6CgpDcmVhdGUgdGhlIE5hdmlnYXRpb24tcHJpbWFyeSBjb21wb25lbnQgZm9yIHRoZSBtYWluIG5hdmlnYXRpb24gKGxldmVsIDEpLgoKIyMgU3BlY2lmaWNhdGlvbnM6CgpUaGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkIGJlIGNvbGxhcHNhYmxlL2V4cGFuZGFibGUgYnkgY2xpY2tpbmcgb24gdGhlIGJ1cmdlciBtZW51LgoKU2hvdyBvciBIaWRlIGVsZW1lbnRzIGRlcGVuZHMgb24gdGhlIHN0YXRlIG9mIHRoZSBkaXNwbGF5LgoKaWYgZXhwYW5kZWQgOgoKIC0gU3dpdGNoIHt7YnVyZ2VyLW1lbnV9fSB0byB7e2Fycm93LWJhY2t9fSBpY29uCiAtIFNob3cgSGVhZGVyTG9nbwogLSBTaG93IGxhYmVs4oCZcyBpY29uCiAtIFNob3cgaGVscGluZyBsaW5rcyAoZG9jdW1lbnRhdGlvbnMgLi4uKQogLSBTaG93IG1haWwgb2YgdGhlIHVzZXIKIC0gU2hvdyBzaWduIG91dCBidXR0b24KCkZpZ21hIExpbmsgOsKgaHR0cHM6Ly93d3cuZmlnbWEuY29tL2ZpbGUvOTM5Ylc3NEMzVExXNVZBeksyM3VveC9tb29uc3RvbmUtY29tcG9uZW50cz9ub2RlLWlkPTE0MCUzQTAK",k={title:"Components/PrimaryNav",component:i,parameters:{notes:{markdown:h}}},r={render:()=>e.jsx("div",{style:{transform:"scale(1)",height:"100vh"},children:e.jsx(i,{headerLogo:e.jsx("img",{src:"https://via.placeholder.com/100x40?text=Logo"}),headerCaption:"development",modeIcon:e.jsx(g,{}),top:e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(a,{label:"NavItem not selected",icon:e.jsx(s,{})}),e.jsx(a,{isSelected:!0,label:"NavItem selected",icon:e.jsx(m,{})})]}),e.jsxs(t,{children:[e.jsx(a,{label:"Very very long long name with many characters",icon:e.jsx(s,{})}),e.jsx(a,{icon:e.jsx(o,{}),label:"My profile",subtitle:"username as a subtitle"}),e.jsx(a,{icon:e.jsx(o,{}),label:"Very very long long long long label",subtitle:"username as a subtitle username as a subtitle username as a subtitle username as a subtitle",button:e.jsx(p,{isReversed:!0,icon:e.jsx(c,{}),label:"Sign Out",variant:"ghost",onClick:()=>null})}),e.jsx(a,{icon:e.jsx(d,{}),label:"With badge",badge:e.jsx(l,{label:"3"})}),e.jsx(a,{icon:e.jsx(o,{}),label:"With badge",badge:e.jsx(l,{label:"333"})})]}),e.jsx(t,{isDisplayedWhenCollapsed:!1,children:e.jsx(a,{url:"https://jahia.com",label:"Jahia Link"})})]}),bottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx(a,{label:"Another bottom item",icon:e.jsx(n,{})})}),e.jsx(t,{children:e.jsx(a,{label:"Bottom item",icon:e.jsx(b,{})})})]})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
