import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-G8LIXM5I.js";import{a}from"./index-B-lxVbXh.js";import{R as s}from"./ResizableBox-Cw36GMah.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./index-WmopRSod.js";import"./index-fNjTmf9T.js";import"./clsx-B-dksMZM.js";import"./HandleResize-BXgMtS-c.js";const m="data:text/markdown;base64,VGhpcyBjb21wb25lbnQgYWxsb3cgdGhlIHVzZXIgdG8gcmVzaXplIHRoZSBzaXplIG9mIGFuIGVsZW1lbnQK",v={title:"Components/ResizableBox",component:s,decorators:[o=>t.jsx("section",{style:{display:"flex",flexDirection:"column",height:"100vh",width:"25%"},children:o()})],parameters:{notes:{markdown:m}}},i={render:o=>t.jsx(s,{...o,enable:["right"],defaultSize:{width:"100%",height:"auto"},children:t.jsx("div",{className:"flexRow_center alignCenter flexFuild",style:{height:"100vh",background:"yellow"},children:"content resizable"})}),args:{minWidth:100,maxWidth:600}},e=()=>t.jsx(s,{enable:["right"],minWidth:"100",maxWidth:"600",defaultSize:{width:"100%",height:"auto"},onResizeStart:a("onResizeStart"),onResizing:a("onResizing"),onResizeStop:a("onResizeStop"),children:t.jsx("div",{className:"flexRow_center alignCenter flexFuild",style:{height:"100vh",background:"yellow"},children:"content resizable"})});e.__docgenInfo={description:"",methods:[],displayName:"Actions"};var r,n,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <ResizableBox {...args} enable={['right']} defaultSize={{
    width: '100%',
    height: 'auto'
  }}>
            <div className="flexRow_center alignCenter flexFuild" style={{
      height: '100vh',
      background: 'yellow'
    }}>
                content resizable
            </div>
        </ResizableBox>,
  args: {
    minWidth: 100,
    maxWidth: 600
  }
}`,...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => <ResizableBox enable={['right']} minWidth="100" maxWidth="600" defaultSize={{
  width: '100%',
  height: 'auto'
}} onResizeStart={action('onResizeStart')} onResizing={action('onResizing')} onResizeStop={action('onResizeStop')}>
        <div className="flexRow_center alignCenter flexFuild" style={{
    height: '100vh',
    background: 'yellow'
  }}>
            content resizable
        </div>
    </ResizableBox>`,...(h=(c=e.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const W=["Default","Actions"];export{e as Actions,i as Default,W as __namedExportsOrder,v as default};
