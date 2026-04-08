import"./react-ST3FQwwi.js";import"./react-dom-D6wlrHAt.js";import{t as e}from"./ResizableBox-NkhDhGNG.js";import{t}from"./iframe-ocNIKXv3.js";var n=`data:text/markdown;base64,VGhpcyBjb21wb25lbnQgYWxsb3cgdGhlIHVzZXIgdG8gcmVzaXplIHRoZSBzaXplIG9mIGFuIGVsZW1lbnQK`,r=t(),{action:i}=__STORYBOOK_MODULE_ACTIONS__,a={title:`Components/ResizableBox`,component:e,decorators:[e=>(0,r.jsx)(`section`,{style:{display:`flex`,flexDirection:`column`,height:`100vh`,width:`25%`},children:(0,r.jsx)(e,{})})],parameters:{notes:{markdown:n}}},o={render:t=>(0,r.jsx)(e,{...t,enable:[`right`],defaultSize:{width:`100%`,height:`auto`},children:(0,r.jsx)(`div`,{className:`flexRow_center alignCenter flexFuild`,style:{height:`100vh`,background:`yellow`},children:`content resizable`})}),args:{minWidth:100,maxWidth:600}},s=()=>(0,r.jsx)(e,{enable:[`right`],minWidth:100,maxWidth:600,defaultSize:{width:`100%`,height:`auto`},onResizeStart:i(`onResizeStart`),onResizing:i(`onResizing`),onResizeStop:i(`onResizeStop`),children:(0,r.jsx)(`div`,{className:`flexRow_center alignCenter flexFuild`,style:{height:`100vh`,background:`yellow`},children:`content resizable`})});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <ResizableBox enable={['right']} minWidth={100} maxWidth={600} defaultSize={{
  width: '100%',
  height: 'auto'
}} onResizeStart={action('onResizeStart')} onResizing={action('onResizing')} onResizeStop={action('onResizeStop')}>
        <div className="flexRow_center alignCenter flexFuild" style={{
    height: '100vh',
    background: 'yellow'
  }}>
            content resizable
        </div>
    </ResizableBox>`,...s.parameters?.docs?.source}}};var c=[`Default`,`Actions`];export{s as Actions,o as Default,c as __namedExportsOrder,a as default};