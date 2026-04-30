import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6JWlyvB.js";import{n,t as r}from"./clsx-Bs4OuGzP.js";import{M as i,N as a,i as o}from"./icons-Dxh7SjmP.js";import{f as s,t as c}from"./css-utils-BlnxTXwI.js";import{n as l}from"./Typography-D47BrC6V.js";import{t as u}from"./storybook-ZkaiIgK-.js";var d,f=e((()=>{d=`data:text/markdown;base64,IyMgR29hbHM6CgpDcmVhdGUgYW4gaG9yaXpvbnRhbCBzZXBhcmF0aW9uIGJldHdlZW4gdHdvIGNvbnRlbnRzCg==`})),p,m,h,g,_,v;e((()=>{u(),i(),o(),f(),n(),c(),p=t(),m={title:`Components/Separator`,component:a,parameters:{layout:`centered`,notes:{markdown:d}}},h={render:e=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{variant:`heading`,children:`Content before a separator`}),(0,p.jsx)(a,{...e}),(0,p.jsx)(l,{variant:`heading`,children:`Content after a separator`})]}),args:{variant:`horizontal`,size:`full`,spacing:`medium`}},g={render:e=>(0,p.jsxs)(`div`,{className:r(`flexRow`,`alignCenter`,s.flexRow,s.alignCenter),children:[(0,p.jsx)(l,{variant:`heading`,children:`Before`}),(0,p.jsx)(a,{...e}),(0,p.jsx)(l,{variant:`heading`,children:`After`})]}),args:{variant:`vertical`,size:`full`,spacing:`medium`}},_={render:e=>(0,p.jsxs)(`section`,{className:`storyColumn`,children:[(0,p.jsxs)(`div`,{className:`storyItem`,children:[(0,p.jsx)(l,{variant:`heading`,children:`Before`}),(0,p.jsx)(a,{variant:`vertical`,...e}),(0,p.jsx)(l,{variant:`heading`,children:`After`})]}),(0,p.jsxs)(`div`,{className:`storyItem`,children:[(0,p.jsx)(l,{variant:`heading`,children:`Before`}),(0,p.jsx)(a,{variant:`vertical`,...e})]}),(0,p.jsxs)(`div`,{className:`storyItem`,children:[(0,p.jsx)(a,{variant:`vertical`,...e}),(0,p.jsx)(l,{variant:`heading`,children:`After`})]}),(0,p.jsx)(`div`,{className:`storyItem`,children:(0,p.jsx)(a,{variant:`vertical`,...e})})]}),args:{variant:`vertical`,size:`full`,spacing:`big`,invisible:`lastChild`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <Typography variant="heading">Content before a separator</Typography>
            <Separator {...args} />
            <Typography variant="heading">Content after a separator</Typography>
        </>,
  args: {
    variant: 'horizontal',
    size: 'full',
    spacing: 'medium'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className={clsx('flexRow', 'alignCenter', layout.flexRow, layout.alignCenter)}>
            <Typography variant="heading">Before</Typography>

            <Separator {...args} />
            <Typography variant="heading">After</Typography>
        </div>,
  args: {
    variant: 'vertical',
    size: 'full',
    spacing: 'medium'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <section className="storyColumn">
            <div className="storyItem">
                <Typography variant="heading">Before</Typography>
                <Separator variant="vertical" {...args} />
                <Typography variant="heading">After</Typography>
            </div>
            <div className="storyItem">
                <Typography variant="heading">Before</Typography>
                <Separator variant="vertical" {...args} />
            </div>
            <div className="storyItem">
                <Separator variant="vertical" {...args} />
                <Typography variant="heading">After</Typography>
            </div>
            <div className="storyItem">
                <Separator variant="vertical" {...args} />
            </div>
        </section>,
  args: {
    variant: 'vertical',
    size: 'full',
    spacing: 'big',
    invisible: 'lastChild'
  }
}`,..._.parameters?.docs?.source}}},v=[`Horizontal`,`Vertical`,`Invisible`]}))();export{h as Horizontal,_ as Invisible,g as Vertical,v as __namedExportsOrder,m as default};