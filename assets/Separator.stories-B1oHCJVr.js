import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{S as s}from"./Separator-ChTYNnEP.js";import{T as e}from"./Typography-D0S_EBmN.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";const y="data:text/markdown;base64,IyMgR29hbHM6CgpDcmVhdGUgYW4gaG9yaXpvbnRhbCBzZXBhcmF0aW9uIGJldHdlZW4gdHdvIGNvbnRlbnRzCg==",C={title:"Components/Separator",component:s,parameters:{layout:"centered",notes:{markdown:y}}},t={render:r=>a.jsxs(a.Fragment,{children:[a.jsx(e,{variant:"heading",children:"Content before a separator"}),a.jsx(s,{...r}),a.jsx(e,{variant:"heading",children:"Content after a separator"})]}),args:{variant:"horizontal",size:"full",spacing:"medium"}},i={render:r=>a.jsxs("div",{className:"flexRow alignCenter",children:[a.jsx(e,{variant:"heading",children:"Before"}),a.jsx(s,{...r}),a.jsx(e,{variant:"heading",children:"After"})]}),args:{variant:"vertical",size:"full",spacing:"medium"}},n={render:r=>a.jsxs("section",{className:"storyColumn",children:[a.jsxs("div",{className:"storyItem",children:[a.jsx(e,{variant:"heading",children:"Before"}),a.jsx(s,{variant:"vertical",...r}),a.jsx(e,{variant:"heading",children:"After"})]}),a.jsxs("div",{className:"storyItem",children:[a.jsx(e,{variant:"heading",children:"Before"}),a.jsx(s,{variant:"vertical",...r})]}),a.jsxs("div",{className:"storyItem",children:[a.jsx(s,{variant:"vertical",...r}),a.jsx(e,{variant:"heading",children:"After"})]}),a.jsx("div",{className:"storyItem",children:a.jsx(s,{variant:"vertical",...r})})]}),args:{variant:"vertical",size:"full",spacing:"big",invisible:"lastChild"}};var o,d,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,c,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var v,m,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const N=["Horizontal","Vertical","Invisible"];export{t as Horizontal,n as Invisible,i as Vertical,N as __namedExportsOrder,C as default};
