import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as G}from"./Love-DCU5qIeU.js";import{S as W}from"./Cloud-CBoU2cQ2.js";import{L as a}from"./ListItem-CGgIPjEf.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./Typography-D0S_EBmN.js";const Y="data:text/markdown;base64,QSBnZW5lcmljIGl0ZW0gb2YgYSBsaXN0LgoKIyMgU3BlY2lmaWNhdGlvbnM6CgpJdCBzaG91bGQgYmUgY2xpY2thYmxlLCBzZWxlY3RhYmxlLCBmb2N1c2FibGUKQ2FuIHN0YXJ0IHdpdGggYW4gaWNvbiwgZW5kIGJ5IGFuIGljb24KVGhlIHdpZHRoIGlzIGZsdWlkClRoZSBsYWJlbCBzaG91bGQgYmUgdHJ1bmNhdGVkIGlmIGl0J3MgbG9uZ2VyIHRoYW4gdGhlIGNvbnRhaW5lcgo=",k={title:"Components/ListItem",component:a,parameters:{layout:"centered",notes:{markdown:Y}}},s={render:t=>e.jsx("ul",{children:e.jsx(a,{...t})}),args:{label:"ListItem label"}},m={render:t=>e.jsx("ul",{children:e.jsx(a,{...t})}),name:"Icon + Text",args:{label:"ListItem",iconStart:e.jsx(G,{})}},r={render:t=>e.jsx("ul",{children:e.jsx(a,{...t})}),name:"Icon + Text + Icon",args:{label:"ListItem",iconStart:e.jsx(G,{}),iconEnd:e.jsx(W,{})}},l={render:t=>e.jsxs("ul",{children:[e.jsx(a,{image:e.jsx("img",{src:"https://via.placeholder.com/500?text=ListItemImage",alt:"big image"}),...t}),e.jsx(a,{image:e.jsx("img",{src:"https://via.placeholder.com/200x500?text=ListItemImage",alt:"big image"}),...t}),e.jsx(a,{image:e.jsx("img",{src:"https://via.placeholder.com/500x200?text=ListItemImage",alt:"big image"}),...t})]}),args:{label:"ListItem label",imageSize:"big"}},i={render:t=>e.jsxs("ul",{children:[e.jsx(a,{image:e.jsx("img",{src:"https://via.placeholder.com/500?text=ListItemImage",alt:"small image"}),...t}),e.jsx(a,{image:e.jsx("img",{src:"https://via.placeholder.com/200x500?text=ListItemImage",alt:"small image"}),...t}),e.jsx(a,{image:e.jsx("img",{src:"https://via.placeholder.com/500x200?text=ListItemImage",alt:"small image"}),...t})]}),args:{label:"ListItem label",imageSize:"small"}};var o,g,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <ul>
            <ListItem {...args} />
        </ul>,
  args: {
    label: 'ListItem label'
  }
}`,...(c=(g=s.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var n,I,d;m.parameters={...m.parameters,docs:{...(n=m.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <ul>
            <ListItem {...args} />
        </ul>,
  name: 'Icon + Text',
  args: {
    label: 'ListItem',
    iconStart: <Love />
  }
}`,...(d=(I=m.parameters)==null?void 0:I.docs)==null?void 0:d.source}}};var p,x,L;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <ul>
            <ListItem {...args} />
        </ul>,
  name: 'Icon + Text + Icon',
  args: {
    label: 'ListItem',
    iconStart: <Love />,
    iconEnd: <Cloud />
  }
}`,...(L=(x=r.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var h,u,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ul>
            <ListItem image={<img src="https://via.placeholder.com/500?text=ListItemImage" alt="big image" />} {...args} />
            <ListItem image={<img src="https://via.placeholder.com/200x500?text=ListItemImage" alt="big image" />} {...args} />
            <ListItem image={<img src="https://via.placeholder.com/500x200?text=ListItemImage" alt="big image" />} {...args} />
        </ul>,
  args: {
    label: 'ListItem label',
    imageSize: 'big'
  }
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var j,S,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <ul>
            <ListItem image={<img src="https://via.placeholder.com/500?text=ListItemImage" alt="small image" />} {...args} />
            <ListItem image={<img src="https://via.placeholder.com/200x500?text=ListItemImage" alt="small image" />} {...args} />
            <ListItem image={<img src="https://via.placeholder.com/500x200?text=ListItemImage" alt="small image" />} {...args} />
        </ul>,
  args: {
    label: 'ListItem label',
    imageSize: 'small'
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const H=["Default","IconText","IconTextIcon","WithBigImage","WithSmallImage"];export{s as Default,m as IconText,r as IconTextIcon,l as WithBigImage,i as WithSmallImage,H as __namedExportsOrder,k as default};
