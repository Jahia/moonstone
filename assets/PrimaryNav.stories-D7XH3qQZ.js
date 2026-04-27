import"./react-ST3FQwwi.js";import{t as e}from"./Apps-BnxmGFBo.js";import{i as t,n,t as r}from"./Setting-C7O6JqpP.js";import{t as i}from"./Person-Dg6WBZ0c.js";import{n as a,t as o}from"./Workflow-Da-7ciEG.js";import{t as s}from"./Star-B5f6y9kD.js";import"./Typography-BIGMTmSm.js";import{t as c}from"./Badge-C5K2Tw2C.js";/* empty css               */import"./Loader-DGWKs6rJ.js";import{t as l}from"./Button-s5lmMZ9S.js";import{t as u}from"./PrimaryNav-DsD2idVP.js";import{t as d}from"./PrimaryNavItem-COpg4yiR.js";import{t as f}from"./PrimaryNavItemsGroup-RAkZxxhb.js";import"./Separator-DkeiFSfU.js";import{t as p}from"./iframe-Bwm6YNvT.js";var m=`data:text/markdown;base64,IyMgR29hbHM6CgpDcmVhdGUgdGhlIE5hdmlnYXRpb24tcHJpbWFyeSBjb21wb25lbnQgZm9yIHRoZSBtYWluIG5hdmlnYXRpb24gKGxldmVsIDEpLgoKIyMgU3BlY2lmaWNhdGlvbnM6CgpUaGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkIGJlIGNvbGxhcHNhYmxlL2V4cGFuZGFibGUgYnkgY2xpY2tpbmcgb24gdGhlIGJ1cmdlciBtZW51LgoKU2hvdyBvciBIaWRlIGVsZW1lbnRzIGRlcGVuZHMgb24gdGhlIHN0YXRlIG9mIHRoZSBkaXNwbGF5LgoKaWYgZXhwYW5kZWQgOgoKIC0gU3dpdGNoIHt7YnVyZ2VyLW1lbnV9fSB0byB7e2Fycm93LWJhY2t9fSBpY29uCiAtIFNob3cgSGVhZGVyTG9nbwogLSBTaG93IGxhYmVs4oCZcyBpY29uCiAtIFNob3cgaGVscGluZyBsaW5rcyAoZG9jdW1lbnRhdGlvbnMgLi4uKQogLSBTaG93IG1haWwgb2YgdGhlIHVzZXIKIC0gU2hvdyBzaWduIG91dCBidXR0b24KCkZpZ21hIExpbmsgOsKgaHR0cHM6Ly93d3cuZmlnbWEuY29tL2ZpbGUvOTM5Ylc3NEMzVExXNVZBeksyM3VveC9tb29uc3RvbmUtY29tcG9uZW50cz9ub2RlLWlkPTE0MCUzQTAK`,h=p(),g={title:`Components/PrimaryNav`,component:u,parameters:{notes:{markdown:m}}},_={render:()=>(0,h.jsx)(`div`,{style:{transform:`scale(1)`,height:`100vh`},children:(0,h.jsx)(u,{headerLogo:(0,h.jsx)(`img`,{src:`https://via.placeholder.com/100x40?text=Logo`}),headerCaption:`development`,modeIcon:(0,h.jsx)(s,{}),top:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(d,{label:`NavItem not selected`,icon:(0,h.jsx)(t,{})}),(0,h.jsx)(d,{isSelected:!0,label:`NavItem selected`,icon:(0,h.jsx)(e,{})})]}),(0,h.jsxs)(f,{children:[(0,h.jsx)(d,{label:`Very very long long name with many characters`,icon:(0,h.jsx)(t,{})}),(0,h.jsx)(d,{icon:(0,h.jsx)(i,{}),label:`My profile`,subtitle:`username as a subtitle`}),(0,h.jsx)(d,{icon:(0,h.jsx)(i,{}),label:`Very very long long long long label`,subtitle:`username as a subtitle username as a subtitle username as a subtitle username as a subtitle`,button:(0,h.jsx)(l,{isReversed:!0,icon:(0,h.jsx)(a,{}),label:`Sign Out`,variant:`ghost`,onClick:()=>null})}),(0,h.jsx)(d,{icon:(0,h.jsx)(o,{}),label:`With badge`,badge:(0,h.jsx)(c,{label:`3`})}),(0,h.jsx)(d,{icon:(0,h.jsx)(i,{}),label:`With badge`,badge:(0,h.jsx)(c,{label:`333`})})]}),(0,h.jsx)(f,{isDisplayedWhenCollapsed:!1,children:(0,h.jsx)(d,{url:`https://jahia.com`,label:`Jahia Link`})})]}),bottom:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{children:(0,h.jsx)(d,{label:`Another bottom item`,icon:(0,h.jsx)(n,{})})}),(0,h.jsx)(f,{children:(0,h.jsx)(d,{label:`Bottom item`,icon:(0,h.jsx)(r,{})})})]})})})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};var v=[`Default`];export{_ as Default,v as __namedExportsOrder,g as default};