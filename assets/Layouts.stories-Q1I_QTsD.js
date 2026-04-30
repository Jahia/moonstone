import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BVsvMGH4.js";import{t as r}from"./jsx-runtime-B6JWlyvB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";import{C as o,L as s,S as c,i as l,in as u,nn as d,o as f,ot as p,t as m}from"./icons-Dxh7SjmP.js";import{f as h,t as g}from"./css-utils-BlnxTXwI.js";import{D as _,at as v}from"./Thumbnail-DFO8t8sM.js";import{n as y}from"./Paper-DwbQbuAl.js";import{n as b}from"./app-Dj09vPEQ.js";import{n as x}from"./module-CVX-HpYK.js";import{n as S,t as C}from"./layouts-D5Oox2Nt.js";import{c as w,o as T,t as E}from"./data-Cpy-A6Eh.js";import{a as D,i as O,n as k,r as A}from"./FakeComponents-HVQb5c8Y.js";var j,M,N,P,F,I,L,R,z;t((()=>{j=e(n(),1),E(),C(),l(),O(),m(),i(),g(),M=r(),N=[`01`,`02`,`03`],P={title:`Layouts/Demos`},F=()=>{let[e,t]=(0,j.useState)([]),[n,r]=(0,j.useState)([]);return(0,M.jsx)(`div`,{style:{transform:`scale(1)`},children:(0,M.jsx)(b,{navigation:(0,M.jsx)(s,{children:`level 1`}),content:(0,M.jsx)(x,{navigation:(0,M.jsx)(o,{header:(0,M.jsx)(c,{children:`Header`}),children:(0,M.jsxs)(u,{isReversed:!0,defaultOpenedItem:N[1],children:[(0,M.jsx)(d,{id:N[0],icon:(0,M.jsx)(_,{size:`big`}),label:`Default tree`,children:(0,M.jsx)(f,{isReversed:!0,data:w,selectedItems:e,onClickItem:n=>{e.includes(n.id)?t(e.filter(e=>e!==n.id)):t([n.id])}})}),(0,M.jsx)(d,{id:N[1],icon:(0,M.jsx)(v,{size:`big`}),label:`Nested`,children:(0,M.jsx)(f,{isReversed:!0,data:T,selectedItems:n,onClickItem:e=>{n.includes(e.id)?r(n.filter(t=>t!==e.id)):r([e.id])}})})]})}),content:(0,M.jsx)(S,{header:(0,M.jsx)(p,{title:`Page title`}),content:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(y,{children:`Content`}),(0,M.jsx)(y,{children:D})]})})})})})},I=()=>{let[e,t]=(0,j.useState)([]),[n,r]=(0,j.useState)([]);return(0,M.jsx)(`div`,{style:{transform:`scale(1)`},children:(0,M.jsx)(b,{navigation:(0,M.jsx)(s,{children:`level 1`}),content:(0,M.jsx)(x,{navigation:(0,M.jsx)(o,{isReversed:!1,header:(0,M.jsx)(c,{children:`Header`}),children:(0,M.jsxs)(u,{defaultOpenedItem:N[1],children:[(0,M.jsx)(d,{id:N[0],icon:(0,M.jsx)(_,{size:`big`}),label:`Default tree`,children:(0,M.jsx)(f,{data:w,selectedItems:e,onClickItem:n=>{e.includes(n.id)?t(e.filter(e=>e!==n.id)):t([n.id])}})}),(0,M.jsx)(d,{id:N[1],icon:(0,M.jsx)(v,{size:`big`}),label:`Nested`,children:(0,M.jsx)(f,{data:T,selectedItems:n,onClickItem:e=>{n.includes(e.id)?r(n.filter(t=>t!==e.id)):r([e.id])}})})]})}),content:(0,M.jsx)(S,{header:(0,M.jsx)(p,{title:`Page title`}),content:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(y,{children:`Content`}),(0,M.jsx)(y,{children:D})]})})})})})},L=()=>(0,M.jsx)(`div`,{style:{transform:`scale(1)`},children:(0,M.jsx)(b,{navigation:(0,M.jsx)(k,{}),content:(0,M.jsx)(x,{navigation:(0,M.jsx)(A,{}),content:(0,M.jsx)(S,{isCentered:!0,header:(0,M.jsx)(p,{title:`Header`}),content:(0,M.jsx)(y,{children:`Content`})})})})}),R=()=>(0,M.jsx)(`div`,{style:{transform:`scale(1)`},children:(0,M.jsx)(b,{navigation:(0,M.jsx)(k,{}),content:(0,M.jsx)(x,{content:(0,M.jsx)(S,{header:(0,M.jsx)(p,{title:`Title`}),content:(0,M.jsx)(y,{className:a(`flexFluid`,h.flexFluid),children:`Content`})})})})}),F.__docgenInfo={description:``,methods:[],displayName:`Example`},I.__docgenInfo={description:``,methods:[],displayName:`ExampleLight`},L.__docgenInfo={description:``,methods:[],displayName:`Centered`},R.__docgenInfo={description:``,methods:[],displayName:`WithoutLevel2`},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const handleSelectItem1 = node => {
    if (selectedItems1.includes(node.id)) {
      setSelectedItems1(selectedItems1.filter(item => item !== node.id));
    } else {
      setSelectedItems1([node.id]);
    }
  };
  const handleSelectItem2 = node => {
    if (selectedItems2.includes(node.id)) {
      setSelectedItems2(selectedItems2.filter(item => item !== node.id));
    } else {
      setSelectedItems2([node.id]);
    }
  };
  return <div style={{
    transform: 'scale(1)'
  }}>
            <LayoutApp navigation={<PrimaryNav>level 1</PrimaryNav>} content={<LayoutModule navigation={<SecondaryNav header={<SecondaryNavHeader>Header</SecondaryNavHeader>}>
                    <Accordion isReversed defaultOpenedItem={accordionIds[1]}>
                        <AccordionItem id={accordionIds[0]} icon={<Love size="big" />} label="Default tree">
                            <TreeView isReversed data={treeData} selectedItems={selectedItems1} onClickItem={handleSelectItem1} />
                        </AccordionItem>
                        <AccordionItem id={accordionIds[1]} icon={<Bug size="big" />} label="Nested">
                            <TreeView isReversed data={treeDataNested} selectedItems={selectedItems2} onClickItem={handleSelectItem2} />
                        </AccordionItem>
                    </Accordion>
                </SecondaryNav>} content={<LayoutContent header={<Header title="Page title" />} content={<>
                        <Paper>Content</Paper>
                        <Paper>{lorem}</Paper>
                    </>} />} />} />
        </div>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const handleSelectItem1 = node => {
    if (selectedItems1.includes(node.id)) {
      setSelectedItems1(selectedItems1.filter(item => item !== node.id));
    } else {
      setSelectedItems1([node.id]);
    }
  };
  const handleSelectItem2 = node => {
    if (selectedItems2.includes(node.id)) {
      setSelectedItems2(selectedItems2.filter(item => item !== node.id));
    } else {
      setSelectedItems2([node.id]);
    }
  };
  return <div style={{
    transform: 'scale(1)'
  }}>
            <LayoutApp navigation={<PrimaryNav>level 1</PrimaryNav>} content={<LayoutModule navigation={<SecondaryNav isReversed={false} header={<SecondaryNavHeader>Header</SecondaryNavHeader>}>
                    <Accordion defaultOpenedItem={accordionIds[1]}>
                        <AccordionItem id={accordionIds[0]} icon={<Love size="big" />} label="Default tree">
                            <TreeView data={treeData} selectedItems={selectedItems1} onClickItem={handleSelectItem1} />
                        </AccordionItem>
                        <AccordionItem id={accordionIds[1]} icon={<Bug size="big" />} label="Nested">
                            <TreeView data={treeDataNested} selectedItems={selectedItems2} onClickItem={handleSelectItem2} />
                        </AccordionItem>
                    </Accordion>
                </SecondaryNav>} content={<LayoutContent header={<Header title="Page title" />} content={<>
                        <Paper>Content</Paper>
                        <Paper>{lorem}</Paper>
                    </>} />} />} />
        </div>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => <div style={{
  transform: 'scale(1)'
}}>
        <LayoutApp navigation={<FakePrimaryNavigation />} content={<LayoutModule navigation={<FakeSecondaryNavigation />} content={<LayoutContent isCentered header={<Header title="Header" />} content={<Paper>Content</Paper>} />} />} />
    </div>`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => <div style={{
  transform: 'scale(1)'
}}>
        <LayoutApp navigation={<FakePrimaryNavigation />} content={<LayoutModule content={<LayoutContent header={<Header title="Title" />} content={<Paper className={clsx('flexFluid', layout.flexFluid)}>Content</Paper>} />} />} />
    </div>`,...R.parameters?.docs?.source}}},z=[`Example`,`ExampleLight`,`Centered`,`WithoutLevel2`]}))();export{L as Centered,F as Example,I as ExampleLight,R as WithoutLevel2,z as __namedExportsOrder,P as default};