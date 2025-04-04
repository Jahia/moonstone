import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u,R as q}from"./index-G8LIXM5I.js";import{g as ee}from"./_commonjsHelpers-CqkleIqs.js";import{c as R}from"./clsx-B-dksMZM.js";import{S as te}from"./SearchInput-5ftwiOLF.js";import{T as ne}from"./Typography-C8hU4Ja4.js";import{L as ae}from"./ListItem-Crrcgnf0.js";var M,T;function ie(){return T||(T=1,M=function(n,t){t||(t=[0,""]),n=String(n);var i=parseFloat(n,10);return t[0]=i,t[1]=n.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}),M}var V,k;function oe(){if(k)return V;k=1;var e=ie();V=l;var n=i("in",document.body);function t(a,o){var r=e(getComputedStyle(a).getPropertyValue(o));return r[0]*l(r[1],a)}function i(a,o){var r=document.createElement("div");r.style.height="128"+a,o.appendChild(r);var s=t(r,"height")/128;return o.removeChild(r),s}function l(a,o){if(!a)return null;switch(o=o||document.body,a=(a+""||"px").trim().toLowerCase(),(o===window||o===document)&&(o=document.body),a){case"%":return o.clientHeight/100;case"ch":case"ex":return i(a,o);case"em":return t(o,"font-size");case"rem":return t(document.body,"font-size");case"vw":return window.innerWidth/100;case"vh":return window.innerHeight/100;case"vmin":return Math.min(window.innerWidth,window.innerHeight)/100;case"vmax":return Math.max(window.innerWidth,window.innerHeight)/100;case"in":return n;case"cm":return n/2.54;case"mm":return n/25.4;case"pt":return n/72;case"pc":return n/6;case"px":return 1}var r=e(a);if(!isNaN(r[0])&&r[1]){var s=l(r[1],o);return typeof s=="number"?r[0]*s:null}return null}return V}var re=oe();const F=ee(re),P={top:-1e3,left:-1e3},j=e=>({top:typeof e.top=="string"?F(e.top):e.top,left:typeof e.left=="string"?F(e.left):e.left}),le=e=>{for(e=e.parentElement;e.parentElement;){if(window.getComputedStyle(e).position!=="static")return e;e=e.parentElement}return e},S=(e,n,t)=>{const i={};switch(e.vertical){case"bottom":i.top=`calc(100% + ${t.top}px)`;break;case"center":i.top=`calc(50% + ${t.top}px)`;break;case"top":i.top=t.top;break}switch(e.horizontal){case"left":i.left=t.left;break;case"center":i.left=`calc(50% + ${t.left}px)`;break;case"right":i.left=`calc(100% + ${t.left}px)`;break}return n.vertical==="bottom"&&(i.transform="translateY(-100%)"),n.horizontal==="right"&&(i.transform=i.transform||"",i.transform+="translateX(-100%)"),i},se=(e,n,t,i)=>{var r;const l=(r=e==null?void 0:e.current)==null?void 0:r.getBoundingClientRect(),a=le(e==null?void 0:e.current).getBoundingClientRect();let o=S(n,t,i);return o.left&&a.left+i.left+l.width>window.document.body.clientWidth&&n.horizontal==="right"&&(o=S({...n,horizontal:"left"},{...t,horizontal:"right"},i)),o.top&&a.top+a.height+i.top+l.height>window.document.body.clientHeight&&n.vertical==="bottom"&&(o=S({...n,vertical:"top"},{...t,vertical:"bottom"},i)),{...o,position:"absolute"}},C=(e,n,t,i)=>{const l=e.getBoundingClientRect(),a={};switch(n.vertical){case"top":a.top=l.top;break;case"center":a.top=l.top+l.height/2;break;case"bottom":a.top=l.bottom;break}switch(n.horizontal){case"left":a.left=l.left;break;case"center":a.left=l.left+l.width/2;break;case"right":a.left=l.right;break}const o=j(i);return!t||t.vertical==="top"?o.top+=a.top:t.vertical==="bottom"&&(o.bottom=window.document.body.clientHeight-a.top-o.top,delete o.top),!t||t.horizontal==="left"?o.left+=a.left:t.horizontal==="right"&&(o.right=window.document.body.clientWidth-a.left-o.left,delete o.left),X(e)&&delete o.left,o},ue=(e,n,t,i,l)=>{var s;const a=(s=e==null?void 0:e.current)==null?void 0:s.getBoundingClientRect(),o=n&&n.current?n.current:n;let r;return o?(r=C(o,t,i,l),r.left&&r.left+a.width>window.document.body.clientWidth&&t.horizontal==="right"&&(r=C(o,{...t,horizontal:"left"},{...i,horizontal:"right"},l)),r.top&&r.top+a.height>window.document.body.clientHeight&&t.vertical==="bottom"&&(r=C(o,{...t,vertical:"top"},{...i,vertical:"bottom"},l))):r=j(l),r.left&&r.left+a.width>window.document.body.clientWidth&&(r.left=window.document.body.clientWidth-a.width),r.top&&r.top+a.height>window.document.body.clientHeight&&(r.top=window.document.body.clientHeight-a.height),{...r,position:"fixed"}},de=e=>{if(X(e)){const n=e.closest('[style*="transform"]').style.transform;return!(n==="translate(0px, 0px)"||n==="translate(0px)")}return!1},X=e=>e&&e.closest&&e.closest('[style*="transform"]'),ce=(e,n,t,i,l,a)=>{const[o,r]=u.useState(P),s=u.useRef(null);return u.useEffect(()=>{if(e){const m=t&&t.current?t.current:t,p=a==="absolute"||de(m)?se(s,i,l,n):ue(s,t,i,l,n);r(p)}else r(P)},[t,n,i.vertical,i.horizontal,e,s,i,l,a]),[o,s]},me=(e,n,t,i,l)=>{const a=u.useRef(null);u.useEffect(()=>{typeof a.current<"u"&&(!e&&a.current&&(n&&n(),t&&t()),e&&!a.current&&(i&&i(),l&&l())),a.current=e},[e,l,i,t,n,a])},W=e=>e[0].props["data-option-type"]==="group"?e.reduce((n,t)=>[...n,...t.props.children[2]],[]):e,v=({children:e,isDisplayed:n,position:t,minWidth:i,maxWidth:l,maxHeight:a,className:o,style:r,onMouseEnter:s,onMouseLeave:m,anchorEl:p,anchorElOrigin:b,transformElOrigin:w,anchorPosition:B,onClose:I,onEntering:U,onEntered:K,onExiting:$,onExited:D,hasOverlay:J,hasSearch:z,autoAddSearchLimit:Y,searchEmptyText:G,...Q})=>{const[A,Z]=ce(n,B,p,b,w,t);me(n,$,D,U,K);const[h,_]=u.useState(""),[H,N]=u.useState(e),[O,x]=u.useState(!1);if(u.useEffect(()=>{if(h!==""&&Array.isArray(e)){const f=W(e).filter(g=>g.props&&g.props.label?g.props.label.toLowerCase().includes(h.toLowerCase())&&g.props.variant!=="title":!1);N(f),f.length===0?x(!0):x(!1)}else N(null),x(!1)},[h,e]),!e||q.Children.count(e)<1)return null;let L=z;if(typeof z>"u"){const c=Array.isArray(e)?W(e):e;L=q.Children.count(c)>Y}const y={position:t,...A,...r};return i&&(y.minWidth=i),l&&(y.maxWidth=l),a&&(y.maxHeight=a),d.jsxs(d.Fragment,{children:[d.jsxs("menu",{ref:Z,style:y,role:"listbox",className:R("moonstone-menu",o,{"moonstone-hidden":!n||!A}),onMouseEnter:s,onMouseLeave:m,...Q,children:[L&&d.jsx("div",{className:"moonstone-menu_searchInput",children:d.jsx(te,{focusOnField:!0,value:h,onChange:c=>_(c.target.value),onKeyPress:c=>{if(c.key==="Enter"){const f=q.Children.toArray(H);f.length>0&&f[0].props.onClick(c)}},onClear:()=>_("")})}),H||e,O&&d.jsx(ne,{className:"moonstone-menu_emptySearchText",variant:"caption",children:G})]}),J&&n&&d.jsx("div",{"aria-hidden":"true",className:"moonstone-menu_overlay",onClick:I,onContextMenu:I})]})};v.defaultProps={hasOverlay:!0,autoAddSearchLimit:7,searchEmptyText:"No results found.",position:"fixed",anchorEl:null,anchorPosition:{top:0,left:0},anchorElOrigin:{vertical:"bottom",horizontal:"left"},transformElOrigin:{vertical:"top",horizontal:"left"}};v.displayName="Menu";try{v.displayName="Menu",v.__docgenInfo={description:"",displayName:"Menu",props:{maxHeight:{defaultValue:null,description:"Maximum height of the Menu",name:"maxHeight",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"Maximum width of the Menu",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"Minimum width of the Menu",name:"minWidth",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content of the dropdown",name:"children",required:!0,type:{name:"ReactNode"}},isDisplayed:{defaultValue:null,description:"Menu is display",name:"isDisplayed",required:!0,type:{name:"boolean"}},anchorEl:{defaultValue:{value:"null"},description:"Reference element to positioning the menu",name:"anchorEl",required:!1,type:{name:"MutableRefObject<HTMLDivElement>"}},anchorPosition:{defaultValue:{value:`{
        top: 0,
        left: 0
    }`},description:"Position of the menu in px relative to anchorEl or the document",name:"anchorPosition",required:!1,type:{name:"AnchorPosition"}},anchorElOrigin:{defaultValue:{value:`{
        vertical: 'bottom',
        horizontal: 'left'
    }`},description:"Point on the anchor where the menu's anchorEl will attach to",name:"anchorElOrigin",required:!1,type:{name:"AnchorElOrigin"}},transformElOrigin:{defaultValue:{value:`{
        vertical: 'top',
        horizontal: 'left'
    }`},description:"This is the point on the menu which will attach to the anchor's origin",name:"transformElOrigin",required:!1,type:{name:"TransformElOrigin"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles",name:"style",required:!1,type:{name:"CSSProperties"}},hasSearch:{defaultValue:null,description:`Whether the Menu displays a search input at the top
Autosearch is enabled if undefined
Autosearch is when search input is automatically added in the dropdown when autoAddSearchLimit is reached
@see autoAddSearchLimit`,name:"hasSearch",required:!1,type:{name:"boolean"}},autoAddSearchLimit:{defaultValue:{value:"7"},description:`Autosearch is triggered when data items exceed this limit
Applies only when autosearch is enabled (i.e. hasSearch is undefined)
Defaults to 7 if undefined or < 0
Autosearch is when search input is automatically added in the dropdown`,name:"autoAddSearchLimit",required:!1,type:{name:"number"}},searchEmptyText:{defaultValue:{value:"No results found."},description:"Text to display when the search doesn't show any results",name:"searchEmptyText",required:!1,type:{name:"string"}},position:{defaultValue:{value:"fixed"},description:`If 'absolute' is passed in for the position, the component will be positioned as per normal
CSS rules (i.e., positioned against the closest positioned ancestor). Position is 'fixed' by default`,name:"position",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}},onMouseEnter:{defaultValue:null,description:"Function triggered when the mouse pointer hovering the menu",name:"onMouseEnter",required:!1,type:{name:"(event: MouseEvent<HTMLDivElement, MouseEvent>) => void"}},onMouseLeave:{defaultValue:null,description:"Function triggered when the mouse pointer move off the menu",name:"onMouseLeave",required:!1,type:{name:"(event: MouseEvent<HTMLDivElement, MouseEvent>) => void"}},onClose:{defaultValue:null,description:"Function triggered when the menu close",name:"onClose",required:!1,type:{name:"(event: MouseEvent<HTMLDivElement, MouseEvent>) => void"}},onEntering:{defaultValue:null,description:"Function triggered when the menu is going to be opened (before open)",name:"onEntering",required:!1,type:{name:"() => void"}},onEntered:{defaultValue:null,description:"Function triggered when the menu has been opened (after open)",name:"onEntered",required:!1,type:{name:"() => void"}},onExiting:{defaultValue:null,description:"Function triggered when the menu is going to be closed (before exit)",name:"onExiting",required:!1,type:{name:"() => void"}},onExited:{defaultValue:null,description:"Function triggered when the menu has been closed (after exit)",name:"onExited",required:!1,type:{name:"() => void"}},hasOverlay:{defaultValue:{value:"true"},description:"The menu has overlay or not",name:"hasOverlay",required:!1,type:{name:"boolean"}}}}}catch{}const E=({variant:e="default",isHover:n,isSelected:t=!1,isDisabled:i=!1,isHighlighted:l=!1,iconStart:a,iconSize:o,iconEnd:r,image:s,imageSize:m,className:p,description:b,...w})=>d.jsx(ae,{tabIndex:i||e==="title"||t?null:0,"aria-disabled":i,className:R("moonstone-menuItem",{"moonstone-hover":n,"moonstone-selected":t,"moonstone-disabled":i,"moonstone-highlighted":l&&!t,"moonstone-title":e==="title"},s&&"moonstone-menuItem-image",p),image:s,imageSize:m,iconSize:o,iconStart:a,iconEnd:r,description:b,...w});E.displayName="MenuItem";try{E.displayName="MenuItem",E.__docgenInfo={description:"",displayName:"MenuItem",props:{label:{defaultValue:null,description:"ListItem label",name:"label",required:!0,type:{name:"ReactNode"}},image:{defaultValue:null,description:"Optional image to display to describe the menu item. Cannot be used in conjunction with the iconStart property.",name:"image",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Optional description to display to describe the item",name:"description",required:!1,type:{name:"string"}},iconStart:{defaultValue:null,description:"A leading icon display before the label. Cannot be used in conjunction with the image property.",name:"iconStart",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconEnd:{defaultValue:null,description:"A trailing icon display at the end of ListItem",name:"iconEnd",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},imageSize:{defaultValue:null,description:"Sets pre-defined max height/width to image; defaults to small",name:"imageSize",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'}]}},iconSize:{defaultValue:null,description:"Which icon size to render. The default is small",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"default"'}]}},isHover:{defaultValue:null,description:"Is item being hovered",name:"isHover",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:{value:"false"},description:"Is item selected",name:"isSelected",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isHighlighted:{defaultValue:{value:"false"},description:"Is item highlighted, cannot be selected at the same time",name:"isHighlighted",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"MenuItem variants",name:"variant",required:!1,type:{name:"enum",value:[{value:'"title"'},{value:'"default"'}]}},onClick:{defaultValue:null,description:"Function triggered on clicking the item",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},onMouseEnter:{defaultValue:null,description:"Function triggered when the mouse pointer hovering the item",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<Element>"}},onMouseLeave:{defaultValue:null,description:"Function triggered when the mouse pointer move off the item",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<Element>"}},onKeyPress:{defaultValue:null,description:"Function triggered when a key is pressed",name:"onKeyPress",required:!1,type:{name:"KeyboardEventHandler<Element>"}}}}}catch{}export{E as M,v as a,ce as u};
