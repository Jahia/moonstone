import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{S as t}from"./Separator-B3Ws4ABk.js";import{T as e}from"./Typography-CgHbMZIy.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";const y="data:text/markdown;base64,IyMgR29hbHM6CgpDcmVhdGUgYW4gaG9yaXpvbnRhbCBzZXBhcmF0aW9uIGJldHdlZW4gdHdvIGNvbnRlbnRzCg==",I={title:"Components/Separator",component:t,parameters:{layout:"centered",notes:{markdown:y}}},i={render:r=>a.jsxs(a.Fragment,{children:[a.jsx(e,{variant:"heading",children:"Content before a separator"}),a.jsx(t,{...r}),a.jsx(e,{variant:"heading",children:"Content after a separator"})]}),args:{variant:"horizontal",size:"full",spacing:"medium"}},s={render:r=>a.jsxs("div",{className:"flexRow alignCenter",children:[a.jsx(e,{variant:"heading",children:"Before"}),a.jsx(t,{...r}),a.jsx(e,{variant:"heading",children:"After"})]}),args:{variant:"vertical",size:"full",spacing:"medium"}},n={render:r=>a.jsxs("section",{className:"storyColumn",children:[a.jsxs("div",{className:"storyItem",children:[a.jsx(e,{variant:"heading",children:"Before"}),a.jsx(t,{variant:"vertical",...r}),a.jsx(e,{variant:"heading",children:"After"})]}),a.jsxs("div",{className:"storyItem",children:[a.jsx(e,{variant:"heading",children:"Before"}),a.jsx(t,{variant:"vertical",...r})]}),a.jsxs("div",{className:"storyItem",children:[a.jsx(t,{variant:"vertical",...r}),a.jsx(e,{variant:"heading",children:"After"})]}),a.jsx("div",{className:"storyItem",children:a.jsx(t,{variant:"vertical",...r})})]}),args:{variant:"vertical",size:"full",spacing:"big",invisible:"lastChild"}};var o,p,d;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,c,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,v,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const S=["Horizontal","Vertical","Invisible"];export{i as Horizontal,n as Invisible,s as Vertical,S as __namedExportsOrder,I as default};
