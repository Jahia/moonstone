import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-DAqfo1Ey.js";import{t as r}from"./jsx-runtime-CNwUAhyt.js";import{At as i,Qt as a,i as o,jt as s}from"./icons-CvpR1KhG.js";import{n as c}from"./Typography-PmyWOy6g.js";var l,u,d,f,p;t((()=>{l=e(n(),1),s(),o(),u=r(),d={title:`Components/Drawer`,component:i,tags:[`beta`],parameters:{layout:`fullscreen`}},f={render:e=>{let[t,n]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{style:{display:`flex`,minHeight:`320px`},children:[(0,u.jsx)(`div`,{style:{flex:1,padding:`var(--moon-spacing-medium)`},children:(0,u.jsx)(a,{label:`Open drawer`,onClick:()=>n(!0)})}),(0,u.jsx)(i,{...e,isOpen:t,style:{width:`320px`},children:(0,u.jsxs)(`div`,{style:{padding:`var(--moon-spacing-medium)`},children:[(0,u.jsx)(c,{variant:`heading`,weight:`bold`,component:`h2`,children:`Drawer title`}),(0,u.jsx)(c,{children:`This is the drawer content. You can put anything here.`}),(0,u.jsx)(`div`,{style:{marginTop:`var(--moon-spacing-medium)`},children:(0,u.jsx)(a,{label:`Close`,onClick:()=>n(!1)})})]})})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div style={{
      display: 'flex',
      minHeight: '320px'
    }}>
                <div style={{
        flex: 1,
        padding: 'var(--moon-spacing-medium)'
      }}>
                    <Button label="Open drawer" onClick={() => setOpen(true)} />
                </div>
                <Drawer {...args} isOpen={open} style={{
        width: '320px'
      }}>
                    <div style={{
          padding: 'var(--moon-spacing-medium)'
        }}>
                        <Typography variant="heading" weight="bold" component="h2">
                            Drawer title
                        </Typography>
                        <Typography>
                            This is the drawer content. You can put anything here.
                        </Typography>
                        <div style={{
            marginTop: 'var(--moon-spacing-medium)'
          }}>
                            <Button label="Close" onClick={() => setOpen(false)} />
                        </div>
                    </div>
                </Drawer>
            </div>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`]}))();export{f as Playground,p as __namedExportsOrder,d as default};