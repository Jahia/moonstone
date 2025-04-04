import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as w}from"./index-G8LIXM5I.js";import{c as a}from"./clsx-B-dksMZM.js";import{S as C,a as j}from"./Image-DYAdcomu.js";import{T as i}from"./Typography-C8hU4Ja4.js";const m=w.forwardRef(({displayName:o,systemName:s,chips:d,information:c,thumbnailURL:u,thumbnailType:b="preview",thumbnailAlt:p,id:l,className:N,isDisabled:n=!1,isReadOnly:t=!1,cardAction:f,hasError:x=!1,errorMessage:_,onClick:v,...y},h)=>{const S=a("moonstone-cardSelector",(n||t)&&"moonstone-cardSelector_disabled","flexFluid","flexRow_nowrap","alignCenter",N),g=r=>{t||n||(v(r),r.currentTarget.blur())};return x?e.jsxs("div",{ref:h,id:l,className:a("moonstone-cardSelector_error",(n||t)&&"moonstone-cardSelector_disabled","flexRow_center","alignCenter"),"aria-disabled":n||t,onClick:r=>g(r),...y,children:[e.jsx(C,{color:"yellow"}),e.jsx(i,{isNowrap:!0,variant:"caption",component:"span",children:_})]}):e.jsxs("div",{ref:h,id:l,className:S,"aria-labelledby":`${l}-${o}`,"aria-disabled":n||t,onClick:r=>g(r),...y,children:[e.jsx("figure",{className:a("moonstone-cardSelector_thumbnail","flexRow_center","alignCenter"),children:u?e.jsx("img",{className:a(`moonstone-cardSelector_thumbnail_${b}`),src:u,alt:p,"aria-labelledby":p}):e.jsx(j,{size:"big",color:"gray"})}),e.jsxs("div",{className:a("moonstone-cardSelector_body","flexCol_nowrap"),children:[e.jsxs("div",{className:a("flexRow_nowrap flexFluid"),children:[o&&e.jsx(i,{isNowrap:!0,id:`${l}-displayName`,className:a("moonstone-cardSelector_displayName"),variant:"body",component:"span",children:o}),s&&e.jsxs(i,{isNowrap:!0,id:`${l}-systemName`,className:a("moonstone-cardSelector_systemName"),"aria-description":s,variant:"body",component:"span",children:["(",s,")"]})]}),(d||c)&&e.jsxs("div",{className:a("flexRow_nowrap"),children:[d&&d.map(r=>r),c&&e.jsx(i,{isNowrap:!0,variant:"caption",component:"span",className:a("moonstone-cardSelector_information"),children:c})]})]}),f&&e.jsx("div",{className:"moonstone-cardSelector_actions flexRow_nowrap alignCenter",children:f})]})});m.displayName="CardSelector";try{m.displayName="CardSelector",m.__docgenInfo={description:"",displayName:"CardSelector",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Required id",name:"id",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Function trigger on click",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},isDisabled:{defaultValue:{value:"false"},description:"Define if the item is disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:{value:"false"},description:"Define if the item is readOnly",name:"isReadOnly",required:!1,type:{name:"boolean"}},displayName:{defaultValue:null,description:"CardSelector displayName",name:"displayName",required:!0,type:{name:"string"}},systemName:{defaultValue:null,description:"CardSelector systemName",name:"systemName",required:!1,type:{name:"string"}},chips:{defaultValue:null,description:"CardSelector chips",name:"chips",required:!1,type:{name:"ReactNode[]"}},information:{defaultValue:null,description:"Optional information to display to describe the item",name:"information",required:!1,type:{name:"string"}},cardAction:{defaultValue:null,description:"Possible actions to add to the item e.g orderable with arrows, closeable with X icon...",name:"cardAction",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},thumbnailURL:{defaultValue:null,description:"Image url as thumbnail",name:"thumbnailURL",required:!1,type:{name:"string"}},thumbnailAlt:{defaultValue:null,description:"Alt attribute for thumbnail",name:"thumbnailAlt",required:!1,type:{name:"string"}},thumbnailType:{defaultValue:{value:"preview"},description:"Thumbnail type",name:"thumbnailType",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"preview"'}]}},hasError:{defaultValue:{value:"false"},description:"Error cardSelector variant",name:"hasError",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"Error cardSelector message",name:"errorMessage",required:!1,type:{name:"string"}}}}}catch{}export{m as C};
