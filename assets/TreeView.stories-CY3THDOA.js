import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-NXnqfGAA.js";import{t as r}from"./jsx-runtime-Df_OrLWO.js";import{a as i,o as a}from"./icons-ZZa_JA4E.js";import{a as o,c as s,s as c,t as l}from"./data-kE8eNvmp.js";var u,d=t((()=>{u=`data:text/markdown;base64,VGhlIHRyZWVWaWV3IGlzIGJ1aWxkIHdpdGggdGhlIGFycmF5IG9mIG9iamVjdCBwcm92aWRlIGJ5IHRoZSBgZGF0YWAgcHJvcHMuCgp8IEtleSAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CnwgLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwKfCBpZCAgICAgICAgICB8IGBzdHJpbmdgIG9yIGBudW1iZXJgIDogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIG5vZGUgICAgICAgICAgICAgfAp8IGxhYmVsICAgICAgIHwgYHN0cmluZ2AgOiBOb2Rl4oCZcyBsYWJlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfCBpY29uU3RhcnQgICB8IGBzdHJpbmdgIG9yIGBub2RlYCA6IEljb24gZGlzcGxheSBiZWZvcmUgdGhlIG5vZGXigJlzIGxhYmVsICAgICAgICB8CnwgaWNvbkVuZCAgICAgfCBgc3RyaW5nYCBvciBgbm9kZWAgOiBJY29uIGRpc3BsYXkgYXQgdGhlIGVuZCBvZiB0aGUgbm9kZSAgICAgICAgIHwKfCBjaGlsZHJlbiAgICB8IGBhcnJheSBvZiBvYmplY3RgIDogY2hpbGRyZW7igJlzIG5vZGUsIHdoZW4gYXZhaWxhYmxlICAgICAgICAgICAgICB8CnwgaGFzQ2hpbGRyZW4gfCBgYm9vbGAgOiBpZiB0aGUgbm9kZSBoYXMgY2hpbGRyZW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfCBpc0xvYWRpbmcgICB8IGBib29sYCA6IGlzIHRoZSBub2RlIGxvYWRpbmcgaXRzIGNoaWxkcmVuICAgICAgICAgICAgICAgICAgICAgICAgfAp8IGlzQ2xvc2FibGUgIHwgYGJvb2xgIDogdGhlIG5vZGUgd2lsbCBiZSBvcGVuIGFuZCB3aWxsIGhhdmUgbm8gaWNvbiB0byBjbG9zZSBpdCB8CnwgaXNEaXNhYmxlZCAgfCBgYm9vbGAgOiB0aGUgbm9kZSBpcyBmdWxseSBkaXNhYmxlZCBhbmQgY2Fubm90IGJlIGNsaWNrZWQgICAgICAgIHwK`})),f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{f=e(n(),1),i(),l(),d(),p=r(),m={transform:`scale(1)`,width:`300px`,height:`100vh`},h={title:`Components/TreeView`,component:a,decorators:[e=>(0,p.jsx)(`div`,{style:m,children:e()})],parameters:{layout:`centered`,notes:{markdown:u}}},g={render:(e,t)=>{let n=t.theme;return(0,p.jsx)(a,{...e,data:s,isReversed:n===`dark`})}},_={render:(e,t)=>{let n=t.theme;return(0,p.jsx)(a,{...e,data:o,isReversed:n===`dark`})}},v={render:(e,{globals:{theme:t}})=>(0,p.jsx)(a,{...e,data:c,isReversed:t===`dark`})},y={render:(e,t)=>{let n=t.theme,[r,i]=(0,f.useState)([]);return(0,p.jsx)(a,{isReversed:n===`dark`,selectedItems:r,data:s,onClickItem:e=>{r.includes(e.id)?i(r.filter(t=>t!==e.id)):i([e.id])},...e})}},b={render:(e,{globals:{theme:t}})=>(0,p.jsx)(a,{data:s,isReversed:t===`dark`,highlightedItems:[`A`],...e})},x={render:(e,t)=>{let n=t.theme,[r,i]=(0,f.useState)([]),o=e=>{i([e.id,...r])},c=e=>{i(r.filter(t=>t!==e.id))};return(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`span`,{children:[`Opened items =`,` `,r.map(e=>(0,p.jsx)(`button`,{type:`button`,onClick:()=>c({id:e,label:e}),children:e},e))]}),(0,p.jsx)(a,{...e,data:s,openedItems:r,isReversed:n===`dark`,onOpenItem:o,onCloseItem:c})]})}},S={render:(e,t)=>{let n=t.theme,[r,i]=(0,f.useState)([]),[o,s]=(0,f.useState)([{id:`A1`,label:`A-1`,hasChildren:!0},{id:`A2`,label:`A-2`,hasChildren:!0},{id:`A3`,label:`A-3`,hasChildren:!0}]),c=e=>{s(t=>t.map(t=>t.id===e.id?{...t,isLoading:!1,children:[{id:t.id+`1`,label:t.label+`-1`},{id:t.id+`2`,label:t.label+`-2`}]}:t))},l=e=>{i([e.id,...r]),s(t=>t.map(t=>t.id===e.id&&!t.isLoading&&!t.children?(setTimeout(()=>c(e),1e3),{...t,isLoading:!0}):t))},u=e=>{i(r.filter(t=>t!==e.id))};return(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`span`,{children:[`Opened items =`,` `,r.map(e=>(0,p.jsx)(`button`,{type:`button`,onClick:()=>u({id:e,label:e}),children:e},e))]}),(0,p.jsx)(a,{data:o,isReversed:n===`dark`,openedItems:r,onOpenItem:l,onCloseItem:u})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: TreeViewProps, globals: {
    theme: string;
  }) => {
    const theme = globals.theme;
    return <TreeView {...args} data={treeData} isReversed={theme === 'dark'} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: TreeViewProps, globals: {
    theme: string;
  }) => {
    const theme = globals.theme;
    return <TreeView {...args} data={treeDataRootClosable} isReversed={theme === 'dark'} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: TreeViewProps, {
    globals: {
      theme
    }
  }: {
    globals: {
      theme: string;
    };
  }) => <TreeView {...args} data={treeDataFlat} isReversed={theme === 'dark'} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: TreeViewProps, globals: {
    theme: string;
  }) => {
    const theme = globals.theme;
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const handleClick = (node: TreeViewData) => {
      if (selectedItems.includes(node.id)) {
        setSelectedItems(selectedItems.filter(item => item !== node.id));
      } else {
        setSelectedItems([node.id]);
      }
    };
    return <TreeView isReversed={theme === 'dark'} selectedItems={selectedItems} data={treeData} onClickItem={handleClick} {...args} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: TreeViewProps, {
    globals: {
      theme
    }
  }: {
    globals: {
      theme: string;
    };
  }) => <TreeView data={treeData} isReversed={theme === 'dark'} highlightedItems={['A']} {...args} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: TreeViewProps, globals: {
    theme: string;
  }) => {
    const theme = globals.theme;
    const [openedItems, setOpenedItems] = useState<string[]>([]);
    const handleOpen = (node: TreeViewData) => {
      setOpenedItems([node.id, ...openedItems]);
    };
    const handleClose = (node: TreeViewData) => {
      setOpenedItems(openedItems.filter(item => item !== node.id));
    };
    return <div>
                <span>
                    Opened items ={' '}
                    {openedItems.map(n => <button key={n} type="button" onClick={() => handleClose({
          id: n,
          label: n
        })}>
                            {n}
                        </button>)}
                </span>
                <TreeView {...args} data={treeData} openedItems={openedItems} isReversed={theme === 'dark'} onOpenItem={handleOpen} onCloseItem={handleClose} />
            </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: TreeViewProps, globals: {
    theme: string;
  }) => {
    const theme = globals.theme;
    const [openedItems, setOpenedItems] = useState<string[]>([]);
    const [treeDataState, setTreeDataState] = useState<TreeViewData[]>([{
      id: 'A1',
      label: 'A-1',
      hasChildren: true
    }, {
      id: 'A2',
      label: 'A-2',
      hasChildren: true
    }, {
      id: 'A3',
      label: 'A-3',
      hasChildren: true
    }]);
    const loadChildren = (node: TreeViewData) => {
      setTreeDataState(data => data.map(n => {
        if (n.id === node.id) {
          return {
            ...n,
            isLoading: false,
            children: [{
              id: n.id + '1',
              label: n.label + '-1'
            }, {
              id: n.id + '2',
              label: n.label + '-2'
            }]
          };
        }
        return n;
      }));
    };
    const handleOpen = (node: TreeViewData) => {
      setOpenedItems([node.id, ...openedItems]);
      setTreeDataState(data => data.map(n => {
        if (n.id === node.id && !n.isLoading && !n.children) {
          setTimeout(() => loadChildren(node), 1000);
          return {
            ...n,
            isLoading: true
          };
        }
        return n;
      }));
    };
    const handleClose = (node: TreeViewData) => {
      setOpenedItems(openedItems.filter(item => item !== node.id));
    };
    return <div>
                <span>
                    Opened items ={' '}
                    {openedItems.map(n => <button key={n} type="button" onClick={() => handleClose({
          id: n,
          label: n
        })}>
                            {n}
                        </button>)}
                </span>
                <TreeView data={treeDataState} isReversed={theme === 'dark'} openedItems={openedItems} onOpenItem={handleOpen} onCloseItem={handleClose} />
            </div>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`ClosableRoot`,`Flat`,`Selection`,`Highlight`,`Controlled`,`ControlledWithLoading`]}))();export{_ as ClosableRoot,x as Controlled,S as ControlledWithLoading,g as Default,v as Flat,b as Highlight,y as Selection,C as __namedExportsOrder,h as default};