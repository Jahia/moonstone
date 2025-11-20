import{j as a}from"./iframe-1gg0_G19.js";/* empty css                  */import{S as s}from"./Separator-CNoQrWr0.js";import{T as e}from"./Typography-BG5VXE0P.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const o="data:text/markdown;base64,IyMgR29hbHM6CgpDcmVhdGUgYW4gaG9yaXpvbnRhbCBzZXBhcmF0aW9uIGJldHdlZW4gdHdvIGNvbnRlbnRzCg==",m={title:"Components/Separator",component:s,parameters:{layout:"centered",notes:{markdown:o}}},t={render:r=>a.jsxs(a.Fragment,{children:[a.jsx(e,{variant:"heading",children:"Content before a separator"}),a.jsx(s,{...r}),a.jsx(e,{variant:"heading",children:"Content after a separator"})]}),args:{variant:"horizontal",size:"full",spacing:"medium"}},i={render:r=>a.jsxs("div",{className:"flexRow alignCenter",children:[a.jsx(e,{variant:"heading",children:"Before"}),a.jsx(s,{...r}),a.jsx(e,{variant:"heading",children:"After"})]}),args:{variant:"vertical",size:"full",spacing:"medium"}},n={render:r=>a.jsxs("section",{className:"storyColumn",children:[a.jsxs("div",{className:"storyItem",children:[a.jsx(e,{variant:"heading",children:"Before"}),a.jsx(s,{variant:"vertical",...r}),a.jsx(e,{variant:"heading",children:"After"})]}),a.jsxs("div",{className:"storyItem",children:[a.jsx(e,{variant:"heading",children:"Before"}),a.jsx(s,{variant:"vertical",...r})]}),a.jsxs("div",{className:"storyItem",children:[a.jsx(s,{variant:"vertical",...r}),a.jsx(e,{variant:"heading",children:"After"})]}),a.jsx("div",{className:"storyItem",children:a.jsx(s,{variant:"vertical",...r})})]}),args:{variant:"vertical",size:"full",spacing:"big",invisible:"lastChild"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const h=["Horizontal","Vertical","Invisible"];export{t as Horizontal,n as Invisible,i as Vertical,h as __namedExportsOrder,m as default};
