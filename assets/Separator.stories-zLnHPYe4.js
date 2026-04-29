import"./react-ST3FQwwi.js";import{t as e}from"./Typography-U48lo1cD.js";import{t}from"./Separator-WaDlHIqo.js";import{t as n}from"./iframe-Ct62ZcO9.js";/* empty css                  */var r=`data:text/markdown;base64,IyMgR29hbHM6CgpDcmVhdGUgYW4gaG9yaXpvbnRhbCBzZXBhcmF0aW9uIGJldHdlZW4gdHdvIGNvbnRlbnRzCg==`,i=n(),a={title:`Components/Separator`,component:t,parameters:{layout:`centered`,notes:{markdown:r}}},o={render:n=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e,{variant:`heading`,children:`Content before a separator`}),(0,i.jsx)(t,{...n}),(0,i.jsx)(e,{variant:`heading`,children:`Content after a separator`})]}),args:{variant:`horizontal`,size:`full`,spacing:`medium`}},s={render:n=>(0,i.jsxs)(`div`,{className:`flexRow alignCenter`,children:[(0,i.jsx)(e,{variant:`heading`,children:`Before`}),(0,i.jsx)(t,{...n}),(0,i.jsx)(e,{variant:`heading`,children:`After`})]}),args:{variant:`vertical`,size:`full`,spacing:`medium`}},c={render:n=>(0,i.jsxs)(`section`,{className:`storyColumn`,children:[(0,i.jsxs)(`div`,{className:`storyItem`,children:[(0,i.jsx)(e,{variant:`heading`,children:`Before`}),(0,i.jsx)(t,{variant:`vertical`,...n}),(0,i.jsx)(e,{variant:`heading`,children:`After`})]}),(0,i.jsxs)(`div`,{className:`storyItem`,children:[(0,i.jsx)(e,{variant:`heading`,children:`Before`}),(0,i.jsx)(t,{variant:`vertical`,...n})]}),(0,i.jsxs)(`div`,{className:`storyItem`,children:[(0,i.jsx)(t,{variant:`vertical`,...n}),(0,i.jsx)(e,{variant:`heading`,children:`After`})]}),(0,i.jsx)(`div`,{className:`storyItem`,children:(0,i.jsx)(t,{variant:`vertical`,...n})})]}),args:{variant:`vertical`,size:`full`,spacing:`big`,invisible:`lastChild`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flexRow alignCenter">
            <Typography variant="heading">Before</Typography>

            <Separator {...args} />
            <Typography variant="heading">After</Typography>
        </div>,
  args: {
    variant: 'vertical',
    size: 'full',
    spacing: 'medium'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};var l=[`Horizontal`,`Vertical`,`Invisible`];export{o as Horizontal,c as Invisible,s as Vertical,l as __namedExportsOrder,a as default};