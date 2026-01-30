import{j as e}from"./iframe-DfAFgWzh.js";import{R as s}from"./ResizableBox-DlClnrj2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVvGvOAh.js";import"./index-33qZkpHZ.js";import"./clsx-B-dksMZM.js";import"./HandleResize-juRVHDX-.js";const n="data:text/markdown;base64,VGhpcyBjb21wb25lbnQgYWxsb3cgdGhlIHVzZXIgdG8gcmVzaXplIHRoZSBzaXplIG9mIGFuIGVsZW1lbnQK",{action:a}=__STORYBOOK_MODULE_ACTIONS__,x={title:"Components/ResizableBox",component:s,decorators:[o=>e.jsx("section",{style:{display:"flex",flexDirection:"column",height:"100vh",width:"25%"},children:e.jsx(o,{})})],parameters:{notes:{markdown:n}}},t={render:o=>e.jsx(s,{...o,enable:["right"],defaultSize:{width:"100%",height:"auto"},children:e.jsx("div",{className:"flexRow_center alignCenter flexFuild",style:{height:"100vh",background:"yellow"},children:"content resizable"})}),args:{minWidth:100,maxWidth:600}},i=()=>e.jsx(s,{enable:["right"],minWidth:100,maxWidth:600,defaultSize:{width:"100%",height:"auto"},onResizeStart:a("onResizeStart"),onResizing:a("onResizing"),onResizeStop:a("onResizeStop"),children:e.jsx("div",{className:"flexRow_center alignCenter flexFuild",style:{height:"100vh",background:"yellow"},children:"content resizable"})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <ResizableBox enable={['right']} minWidth={100} maxWidth={600} defaultSize={{
  width: '100%',
  height: 'auto'
}} onResizeStart={action('onResizeStart')} onResizing={action('onResizing')} onResizeStop={action('onResizeStop')}>
        <div className="flexRow_center alignCenter flexFuild" style={{
    height: '100vh',
    background: 'yellow'
  }}>
            content resizable
        </div>
    </ResizableBox>`,...i.parameters?.docs?.source}}};const p=["Default","Actions"];export{i as Actions,t as Default,p as __namedExportsOrder,x as default};
