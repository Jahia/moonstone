import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6JWlyvB.js";import{n,t as r}from"./clsx-Bs4OuGzP.js";import{T as i,w as a}from"./icons-Dxh7SjmP.js";import{f as o,t as s}from"./css-utils-BlnxTXwI.js";var c,l=e((()=>{c=`data:text/markdown;base64,VGhpcyBjb21wb25lbnQgYWxsb3cgdGhlIHVzZXIgdG8gcmVzaXplIHRoZSBzaXplIG9mIGFuIGVsZW1lbnQK`})),u,d,f,p,m,h;e((()=>{l(),a(),n(),s(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Components/ResizableBox`,component:i,decorators:[e=>(0,u.jsx)(`section`,{style:{display:`flex`,flexDirection:`column`,height:`100vh`,width:`25%`},children:(0,u.jsx)(e,{})})],parameters:{notes:{markdown:c}}},p={render:e=>(0,u.jsx)(i,{...e,enable:[`right`],defaultSize:{width:`100%`,height:`auto`},children:(0,u.jsx)(`div`,{className:r(o.flexRow_center,o.alignCenter,o.flexFluid),style:{height:`100vh`,background:`yellow`},children:`content resizable`})}),args:{minWidth:100,maxWidth:600}},m=()=>(0,u.jsx)(i,{enable:[`right`],minWidth:100,maxWidth:600,defaultSize:{width:`100%`,height:`auto`},onResizeStart:d(`onResizeStart`),onResizing:d(`onResizing`),onResizeStop:d(`onResizeStop`),children:(0,u.jsx)(`div`,{className:r(o.flexRow_center,o.alignCenter,o.flexFluid),style:{height:`100vh`,background:`yellow`},children:`content resizable`})}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <ResizableBox {...args} enable={['right']} defaultSize={{
    width: '100%',
    height: 'auto'
  }}>
            <div className={clsx(layout.flexRow_center, layout.alignCenter, layout.flexFluid)} style={{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <ResizableBox enable={['right']} minWidth={100} maxWidth={600} defaultSize={{
  width: '100%',
  height: 'auto'
}} onResizeStart={action('onResizeStart')} onResizing={action('onResizing')} onResizeStop={action('onResizeStop')}>
        <div className={clsx(layout.flexRow_center, layout.alignCenter, layout.flexFluid)} style={{
    height: '100vh',
    background: 'yellow'
  }}>
            content resizable
        </div>
    </ResizableBox>`,...m.parameters?.docs?.source}}},h=[`Default`,`Actions`]}))();export{m as Actions,p as Default,h as __namedExportsOrder,f as default};