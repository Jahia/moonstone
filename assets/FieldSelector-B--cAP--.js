import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as s}from"./index-G8LIXM5I.js";import{c as a}from"./clsx-B-dksMZM.js";import{S as f}from"./HandleDrag-D6n6KY9w.js";const t=s.forwardRef(({buttons:r,selector:i,className:c,isDraggable:n=!1,...d},p)=>e.jsxs("div",{ref:p,className:a("moonstone-fieldSelector","flexRow_nowrap","alignCenter",c),draggable:n,...d,children:[e.jsx("div",{className:a("moonstone-cardSelector_dragIcon","flexRow_between","alignCenter"),children:n&&e.jsx(f,{color:"gray",size:"big"})}),e.jsx("div",{className:a("moonstone-fieldSelector_selector","flexCol_nowrap","alignStart","flexFluid"),children:i}),e.jsx("div",{className:a("moonstone-fieldSelector_buttons","flexRow_nowrap"),children:r&&s.Children.map(r,o=>o.props&&o.props.children?s.Children.map(o.props.children,l=>{const m=l.props.icon?l.props.icon.name:l.props.label;return l&&e.jsx(l.type,{size:"default",variant:"ghost",...l.props},`btn-${m}`)}):r&&e.jsx(r.type,{size:"default",variant:"ghost",...r.props}))})]}));t.displayName="FieldSelector";try{t.displayName="FieldSelector",t.__docgenInfo={description:"",displayName:"FieldSelector",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},buttons:{defaultValue:null,description:"FieldSelector buttons",name:"buttons",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},isDraggable:{defaultValue:{value:"false"},description:"FieldSelector isDraggable",name:"isDraggable",required:!1,type:{name:"boolean"}},selector:{defaultValue:null,description:"FieldSelector selector",name:"selector",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}export{t as F};
