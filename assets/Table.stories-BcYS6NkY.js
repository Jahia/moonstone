import{j as o,R as ae,b as gr,r as Ee}from"./iframe-aq5zPLQA.js";/* empty css                  */import{S as G}from"./Edit-Lz90qtiY.js";import{S as me}from"./FileImage-CzdS5O-2.js";import{S as ye}from"./Lock-9ZDPz-3n.js";import{C}from"./Chip-Ctvlow1S.js";import{S as fr,d as Me,c as hr,a as St,b as K}from"./Puzzle-B12OotKv.js";import{S as Ct}from"./Build-BFBKrwDW.js";import{S as Qe}from"./Person-CylAG32T.js";import{S as xn}from"./Love-DDvbD_FW.js";import{S as yr,a as vr,b as wr,c as br,d as xr,e as Rn}from"./Visibility-C8KBBWXo.js";import{c as ue}from"./clsx-B-dksMZM.js";import{c as sn,C as Oe}from"./Checkbox-DS1z-z-z.js";import{T as ln}from"./Typography-yraEvszA.js";import{S as Rr}from"./ChevronDown-DERl2h0t.js";import{S as Mt}from"./ChevronRight-C14NDqlN.js";import{I as ze}from"./IconTextIcon-ghEI5Pa7.js";import{D as Pr}from"./TreeViewMenu-0zuhUCWz.js";import{B as Te}from"./Button-DaPJAutj.js";import"./preload-helper-PPVm8Dsz.js";import"./Cancel-Bs7wX6uH.js";import"./Tag-CLZ1Kj7Y.js";import"./Close-BEwZSS4Z.js";import"./MenuItem-DmXQvV6O.js";import"./SearchInput-DqLqGVOk.js";import"./Search-Dbl2Tkat.js";import"./BaseInput-DDTr-i5B.js";import"./onArrowNavigation-CltwoEwZ.js";import"./ListItem-C-NpEiLi.js";import"./TreeView--igkvtz_.js";import"./CheckboxUnchecked-SAsHo-gM.js";import"./Loader-HOXRFJhp.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Separator-BnBPGWqL.js";/* empty css               */const We=({direction:H="descending",isSorted:V=!1,className:b,...g})=>{const k=ue("moonstone-SortIndicator",{"moonstone-SortIndicator-sorted":V},b);if(H==="descending")return o.jsx(yr,{...g,"aria-label":"Icon for sorting in descending order",className:k});if(H==="ascending")return o.jsx(vr,{...g,"aria-label":"Icon for sorting in ascending order",className:k})};We.displayName="SortIndicator";try{We.displayName="SortIndicator",We.__docgenInfo={description:"",displayName:"SortIndicator",props:{direction:{defaultValue:{value:"descending"},description:"Whether to render the sort indicator ascending/up arrow or descending/down arrow",name:"direction",required:!1,type:{name:"enum",value:[{value:'"ascending"'},{value:'"descending"'}]}},isSorted:{defaultValue:{value:"false"},description:"Define if the column is currently sorted",name:"isSorted",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ve=({component:H="table",className:V,children:b,...g})=>ae.createElement(H,{className:ue("moonstone-Table","flexCol_nowrap",V),...g},b);ve.displayName="Table";try{ve.displayName="Table",ve.__docgenInfo={description:"",displayName:"Table",props:{component:{defaultValue:{value:"table"},description:"Which html element to render the table as",name:"component",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements to be provided to the Table (e.g., Table Rows, Headers, and Cells)",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const xe=({component:H="tbody",className:V,children:b,...g})=>ae.createElement(H,{className:ue("moonstone-TableBody",V),...g},b);xe.displayName="TableBody";try{xe.displayName="TableBody",xe.__docgenInfo={description:"",displayName:"TableBody",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},component:{defaultValue:{value:"tbody"},description:"Name of HTML element to render in the DOM for this component",name:"component",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements provided",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Re=({isSticky:H=!1,component:V="thead",className:b,children:g,...k})=>ae.createElement(V,{className:ue("moonstone-tableHead",H&&"moonstone-tableHead-sticky",b),...k},g);Re.displayName="TableHead";try{Re.displayName="TableHead",Re.__docgenInfo={description:"",displayName:"TableHead",props:{isSticky:{defaultValue:{value:"false"},description:`Determines whether the table header row should stay sticky while the
table content is being scrolled through`,name:"isSticky",required:!1,type:{name:"boolean"}},component:{defaultValue:{value:"thead"},description:"Name of HTML element to render in the DOM for this component",name:"component",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Any additional class names to apply to the component",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements provided",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Sr=({className:H,component:V="tr",hasMultipleLines:b=!1,isSelected:g=!1,isHighlighted:k=!1,children:q,...c},_)=>ae.createElement(V,{className:ue("flexRow","moonstone-TableRow","alignCenter",b&&"moonstone-TableRow-multipleLines",g&&"moonstone-TableRow-selected",k&&"moonstone-TableRow-highlighted",H),tabIndex:0,...c,ref:_},q),oe=ae.forwardRef(Sr);oe.displayName="TableRow";try{oe.displayName="TableRow",oe.__docgenInfo={description:"",displayName:"TableRow",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},component:{defaultValue:{value:"tr"},description:"Name of HTML element to render in the DOM for this component",name:"component",required:!1,type:{name:'"string;"'}},hasMultipleLines:{defaultValue:{value:"false"},description:"Whether the cell height should be increased to show more than 1 line",name:"hasMultipleLines",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:{value:"false"},description:"If true, then the row is selected",name:"isSelected",required:!1,type:{name:"boolean"}},isHighlighted:{defaultValue:{value:"false"},description:`If true, then the row is highlighted. The background color of the row
will be in contrast to the normal row color and supported components
nested within the row will have their style change correspondingly`,name:"isHighlighted",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The children elements",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Cr=({iconStart:H,iconEnd:V,className:b,children:g,...k},q)=>o.jsxs("div",{ref:q,className:ue("moonstone-TableCell","flexRow_nowrap","alignCenter",b),...k,children:[H&&o.jsx(H.type,{...H.props,className:ue("moonstone-icon_default",H.props.className)}),g,V&&o.jsx(V.type,{...V.props,className:ue("moonstone-icon_default",V.props.className)})]}),Ve=ae.forwardRef(Cr);Ve.displayName="FoundationTableCell";try{FoundationTableCell.displayName="FoundationTableCell",FoundationTableCell.__docgenInfo={description:"",displayName:"FoundationTableCell",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Define the width of the cell, if no width is set the column takes all space available. (e.g. '120px')",name:"width",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children elements",name:"children",required:!1,type:{name:"ReactNode"}},cell:{defaultValue:null,description:"Cell object returned by react-table instance",name:"cell",required:!1,type:{name:"unknown"}},row:{defaultValue:null,description:"Row object returned by react-table instance",name:"row",required:!1,type:{name:"{ depth?: number; canExpand?: boolean; isExpanded?: boolean; getToggleRowExpandedProps?: (props?: Record<string, unknown>) => Record<string, unknown>; }"}},component:{defaultValue:null,description:"Name of the cell HTML element to render in the DOM",name:"component",required:!1,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}},iconStart:{defaultValue:null,description:"Icon to render at the start/left side of the cell",name:"iconStart",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconEnd:{defaultValue:null,description:"Icon to render at the end/right side of the cell",name:"iconEnd",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},verticalAlign:{defaultValue:null,description:"How to align content vertically within the table cell",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"top"'},{value:'"bottom"'}]}},isScrollable:{defaultValue:null,description:"Indicates if the cell is scrollable on hover",name:"isScrollable",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:null,description:"How to align content horizontally within the table cell",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},isExpandableColumn:{defaultValue:null,description:`If true, it indicates that the rows in this column have nested sub-rows and
that they should be displayed in a tree-like view`,name:"isExpandableColumn",required:!1,type:{name:"boolean"}}}}}catch{}const Tr=({component:H="td",textAlign:V="left",verticalAlign:b="center",className:g,iconStart:k,iconEnd:q,isExpandableColumn:c,width:_,row:B,children:i,isScrollable:X,...z},F)=>{const Q=B?.depth*20,he=X?"moonstone-tableCellContent":"",Pe=()=>o.jsx(ze,{component:"div",iconStart:k,iconEnd:q,typographyProps:{className:ue(he,"flexFluid")},children:i}),Se=()=>c&&B?.canExpand?o.jsxs(Ve,{ref:F,...B?.getToggleRowExpandedProps({style:{marginLeft:`${Q}px`}}),children:[B?.isExpanded?o.jsx(Rr,{className:"moonstone-marginRightNano"}):o.jsx(Mt,{className:"moonstone-marginRightNano"}),Pe()]}):c&&!B?.canExpand?o.jsx(Ve,{ref:F,style:{marginLeft:`${Q+20}px`},children:Pe()}):o.jsx(Ve,{ref:F,children:Pe()});return o.jsx(ln,{className:ue("moonstone-tableBodyCell","textAlign"+sn(V),"moonstone-verticalAlign"+sn(b),{flexFluid:typeof _>"u"},g),component:H,variant:"body",style:{width:_},...z,children:Se()})},te=ae.forwardRef(Tr);te.displayName="TableBodyCell";try{te.displayName="TableBodyCell",te.__docgenInfo={description:"",displayName:"TableBodyCell",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Define the width of the cell, if no width is set the column takes all space available. (e.g. '120px')",name:"width",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children elements",name:"children",required:!1,type:{name:"ReactNode"}},cell:{defaultValue:null,description:"Cell object returned by react-table instance",name:"cell",required:!1,type:{name:"unknown"}},row:{defaultValue:null,description:"Row object returned by react-table instance",name:"row",required:!1,type:{name:"{ depth?: number; canExpand?: boolean; isExpanded?: boolean; getToggleRowExpandedProps?: (props?: Record<string, unknown>) => Record<string, unknown>; }"}},component:{defaultValue:{value:"td"},description:"Name of the cell HTML element to render in the DOM",name:"component",required:!1,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}},iconStart:{defaultValue:null,description:"Icon to render at the start/left side of the cell",name:"iconStart",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconEnd:{defaultValue:null,description:"Icon to render at the end/right side of the cell",name:"iconEnd",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},verticalAlign:{defaultValue:{value:"center"},description:"How to align content vertically within the table cell",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"top"'},{value:'"bottom"'}]}},isScrollable:{defaultValue:null,description:"Indicates if the cell is scrollable on hover",name:"isScrollable",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:{value:"left"},description:"How to align content horizontally within the table cell",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},isExpandableColumn:{defaultValue:null,description:`If true, it indicates that the rows in this column have nested sub-rows and
that they should be displayed in a tree-like view`,name:"isExpandableColumn",required:!1,type:{name:"boolean"}}}}}catch{}const ge=({component:H="th",width:V,textAlign:b="left",verticalAlign:g="center",className:k,iconStart:q,iconEnd:c,children:_,...B})=>o.jsx(ln,{...B,className:ue({flexFluid:typeof V>"u"},"textAlign"+sn(b),"moonstone-verticalAlign"+sn(g),k),component:H,weight:"bold",variant:"body",style:{...B.style,width:V},children:o.jsx(Ve,{iconStart:q,iconEnd:c,children:_})});ge.displayName="TableHeadCell";try{ge.displayName="TableHeadCell",ge.__docgenInfo={description:"",displayName:"TableHeadCell",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableDataCellElement> | Ref<HTMLTableHeaderCellElement>"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},component:{defaultValue:{value:"th"},description:"Name of the cell HTML element to render in the DOM",name:"component",required:!1,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}},iconStart:{defaultValue:null,description:"Icon to render at the start/left side of the cell",name:"iconStart",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconEnd:{defaultValue:null,description:"Icon to render at the end/right side of the cell",name:"iconEnd",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},textAlign:{defaultValue:{value:"left"},description:"How to align content horizontally within the table cell",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},verticalAlign:{defaultValue:{value:"center"},description:"How to align content vertically within the table cell",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"top"'},{value:'"bottom"'}]}},width:{defaultValue:null,description:"Define the width of the cell, if no width is set the column takes all space available. (e.g. '120px')",name:"width",required:!1,type:{name:"string"}},isExpandableColumn:{defaultValue:null,description:`If true, it indicates that the rows in this column have nested sub-rows and
that they should be displayed in a tree-like view`,name:"isExpandableColumn",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"Row object returned by react-table instance",name:"row",required:!1,type:{name:"{ depth?: number; canExpand?: boolean; isExpanded?: boolean; getToggleRowExpandedProps?: (props?: Record<string, unknown>) => Record<string, unknown>; }"}},cell:{defaultValue:null,description:"Cell object returned by react-table instance",name:"cell",required:!1,type:{name:"unknown"}},children:{defaultValue:null,description:"Children elements",name:"children",required:!1,type:{name:"ReactNode"}},isScrollable:{defaultValue:null,description:"Indicates if the cell is scrollable on hover",name:"isScrollable",required:!1,type:{name:"boolean"}}}}}catch{}const Tt="moonstone-tablePagination",Ye="moonstone-marginRight32",jt="moonstone-marginRight16",De=({className:H,label:V={rowsPerPage:"Rows per page",of:"of"},rowsPerPage:b=10,rowsPerPageOptions:g=[5,10,25],totalNumberOfRows:k,currentPage:q,onRowsPerPageChange:c,onPageChange:_,...B})=>{if(q<1)throw new Error("currentPage must always be >= 1");if(g.indexOf(b)===-1)throw new Error("rowsPerPage must exist in rowsPerPageOptions");const i=Math.ceil(k/b),X=(q-1)*b+1,z=Math.min(k,q*b);return o.jsxs("div",{className:ue(Tt,"flexRow_reverse","alignCenter",H),...B,children:[o.jsx(ln,{variant:"caption",children:V.rowsPerPage}),o.jsx(Pr,{className:ue("alignCenter",jt),size:"small","data-sel-role":"table-pagination-dropdown-rows-per-page",data:g.map(F=>({label:F.toString(),value:F.toString()})),value:b.toString(),label:b.toString(),onChange:(F,de)=>c(parseInt(de.value,10))}),o.jsx(ln,{variant:"caption",className:ue(Tt,"flexRow_reverse","alignCenter",Ye),"data-sel-role":"table-pagination-total-rows",children:`${X}-${z} ${V.of} ${k}`}),o.jsx(Te,{className:ue(Ye),icon:o.jsx(wr,{}),variant:"ghost","data-sel-role":"table-pagination-button-first-page",isDisabled:q===1,onClick:()=>_(1)}),o.jsx(Te,{className:ue(Ye),icon:o.jsx(br,{}),variant:"ghost","data-sel-role":"table-pagination-button-previous-page",isDisabled:q===1,onClick:()=>_(q-1)}),o.jsx(Te,{className:ue(Ye),icon:o.jsx(Mt,{}),variant:"ghost","data-sel-role":"table-pagination-button-next-page",isDisabled:i===q,onClick:()=>_(q+1)}),o.jsx(Te,{className:ue(jt),icon:o.jsx(xr,{}),variant:"ghost","data-sel-role":"table-pagination-button-last-page",isDisabled:i===q,onClick:()=>_(i)})]})};De.displayName="TablePagination";try{De.displayName="TablePagination",De.__docgenInfo={description:"",displayName:"TablePagination",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},rowsPerPage:{defaultValue:{value:"10"},description:"Current rows per page",name:"rowsPerPage",required:!1,type:{name:"number"}},rowsPerPageOptions:{defaultValue:{value:"[5, 10, 25]"},description:"Choices for rows per pages value",name:"rowsPerPageOptions",required:!1,type:{name:"number[]"}},onRowsPerPageChange:{defaultValue:null,description:`Callback when rowsPerPage value changes
@param rowsPerPage`,name:"onRowsPerPageChange",required:!0,type:{name:"(rowsPerPage: number) => void"}},totalNumberOfRows:{defaultValue:null,description:"How many rows there will be in total for all the pages currently available (total number of records to display)",name:"totalNumberOfRows",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"Number of the current page",name:"currentPage",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:`Callback when page changes
@param page`,name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},label:{defaultValue:{value:`{
        rowsPerPage: 'Rows per page',
        of: 'of'
    }`},description:"Pagination labels",name:"label",required:!1,type:{name:"{ rowsPerPage: string; of: string; }"}}}}}catch{}const Sn=[{name:{value:"Demo Roles and Users",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"Highlight Row",icon:o.jsx(me,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"Search Results",icon:o.jsx(me,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"Corporate Responsibility",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"How to Use This Demo",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Our Companies",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"}],It=[{name:{value:"Demo Roles and Users",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"Highlight Row",icon:o.jsx(me,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"About",icon:o.jsx(me,{})},type:"Page",status:o.jsx(C,{icon:o.jsx(Ct,{})}),createdBy:"root",lastModifiedOn:"Jan. 6, 2016",subRows:[{name:{value:"Testing",icon:o.jsx(fr,{})},type:"Page",createdBy:"root",lastModifiedOn:"Jan. 1, 2021"},{name:{value:"History",icon:o.jsx(me,{})},type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016",subRows:[{name:{value:"banner",icon:o.jsx(Me,{})},type:"Banner",createdBy:"root",lastModifiedOn:"Feb. 4, 2016"},{name:{value:"Baumquist Joins Digitall As Controller and This is a Super, Super, Super Long Name",icon:o.jsx(Me,{})},type:"News Entry",createdBy:"root",lastModifiedOn:"Jan. 21, 2016"}]},{name:{value:"Leadership",icon:o.jsx(me,{})},type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016",subRows:[{name:{value:"list-of-people",icon:o.jsx(hr,{})},type:"List of People",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Aschel",icon:o.jsx(Qe,{})},type:"Person portrait",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Hedgebottom",icon:o.jsx(Qe,{})},type:"Person portrait",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Singh",icon:o.jsx(Qe,{})},type:"Person portrait",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Baumquest",icon:o.jsx(Qe,{})},type:"Person portrait",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"banner",icon:o.jsx(St,{})},type:"Banner",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"}]}]},{name:{value:"Search Results",icon:o.jsx(me,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"Corporate Responsibility",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"How to Use This Demo",icon:o.jsx(St,{})},status:o.jsx(C,{icon:o.jsx(Ct,{})}),type:"Highlight",createdBy:"root",lastModifiedOn:"Jan. 26, 2016",subRows:[{name:{value:"Latest Press Releases",icon:o.jsx(Me,{})},type:"Press Release Search",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"spacer",icon:o.jsx(Me,{})},type:"Spacer",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Global Presence",icon:o.jsx(Me,{})},type:"Headline",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"}]},{name:{value:"highlights",icon:o.jsx(me,{})},type:"Highlight",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Our Companies",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Highlight",createdBy:"root",lastModifiedOn:"Jan. 26, 2016",subRows:[{name:{value:"slider",icon:o.jsx(Me,{})},type:"Slider",createdBy:"root",lastModifiedOn:"Jan. 26, 2016",subRows:[{name:{value:"Events"},type:"Event Tab Query",createdBy:"root",lastModifiedOn:"Jan. 26, 2016",subRows:[{name:{value:"Image-from-the-document-manager",icon:o.jsx(Me,{})},type:"Image (from the Document Manager)",createdBy:"root",lastModifiedOn:"Jan. 26, 2016",subRows:[{name:{value:"Area-1",icon:o.jsx(Me,{})},type:"Section / Container / Row / Grid",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"}]}]}]}]}],Ie=[{name:{value:"1 Demo Roles and Users",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"2 Highlight Row",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"3 Search Results",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"4 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"5 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"6 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"7 Demo Roles and Users",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"8 Highlight Row",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"9 Search Results",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"10 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"11 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"12 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"13 Demo Roles and Users",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"14 Highlight Row",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"15 Search Results",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"16 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"17 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"18 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"19 Demo Roles and Users",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"20 Highlight Row",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"21 Search Results",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"22 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"23 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"24 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"25 Demo Roles and Users",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"26 Highlight Row",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"27 Search Results",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"28 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"29 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"30 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"31 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"32 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"33 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"}];var Pn={exports:{}},Fe={exports:{}},jr=Fe.exports,Bt;function Br(){return Bt||(Bt=1,(function(H,V){(function(b,g){g(V,gr())})(jr,(function(b,g){function k(e,n,t,r,s,a,l){try{var u=e[a](l),d=u.value}catch(p){return void t(p)}u.done?n(d):Promise.resolve(d).then(r,s)}function q(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function l(d){k(a,r,s,l,u,"next",d)}function u(d){k(a,r,s,l,u,"throw",d)}l(void 0)}))}}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function _(e,n){if(e==null)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}function B(e){var n=(function(t,r){if(typeof t!="object"||t===null)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var a=s.call(t,r);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)})(e,"string");return typeof n=="symbol"?n:String(n)}g=g&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g;var i={init:"init"},X=function(e){var n=e.value;return n===void 0?"":n},z=function(){return g.createElement(g.Fragment,null," ")},F={Cell:X,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};function de(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(r,s){var a=s.style,l=s.className;return r=c({},r,{},_(s,["style","className"])),a&&(r.style=r.style?c({},r.style||{},{},a||{}):a),l&&(r.className=r.className?r.className+" "+l:l),r.className===""&&delete r.className,r}),{})}var Q=function(e,n){return n===void 0&&(n={}),function(t){return t===void 0&&(t={}),[].concat(e,[t]).reduce((function(r,s){return(function a(l,u,d){return typeof u=="function"?a({},u(l,d)):Array.isArray(u)?de.apply(void 0,[l].concat(u)):de(l,u)})(r,s,c({},n,{userProps:t}))}),{})}},he=function(e,n,t,r){return t===void 0&&(t={}),e.reduce((function(s,a){return a(s,t)}),n)},Pe=function(e,n,t){return t===void 0&&(t={}),e.forEach((function(r){r(n,t)}))};function Se(e,n,t,r){e.findIndex((function(s){return s.pluginName===t})),n.forEach((function(s){e.findIndex((function(a){return a.pluginName===s}))}))}function je(e,n){return typeof e=="function"?e(n):e}function ee(e){var n=g.useRef();return n.current=e,g.useCallback((function(){return n.current}),[])}var Cn=typeof document<"u"?g.useLayoutEffect:g.useEffect;function we(e,n){var t=g.useRef(!1);Cn((function(){t.current&&e(),t.current=!0}),n)}function un(e,n,t){return t===void 0&&(t={}),function(r,s){s===void 0&&(s={});var a=typeof r=="string"?n[r]:r;if(a===void 0)throw console.info(n),new Error("Renderer Error ☝️");return Tn(a,c({},e,{column:n},t,{},s))}}function Tn(e,n){return(function(r){return typeof r=="function"&&(s=Object.getPrototypeOf(r)).prototype&&s.prototype.isReactComponent;var s})(t=e)||typeof t=="function"||(function(r){return typeof r=="object"&&typeof r.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(r.$$typeof.description)})(t)?g.createElement(e,n):e;var t}function jn(e,n,t){return t===void 0&&(t=0),e.map((function(r){return Hn(r=c({},r,{parent:n,depth:t})),r.columns&&(r.columns=jn(r.columns,r,t+1)),r}))}function Bn(e){return On(e,"columns")}function Hn(e){var n=e.id,t=e.accessor,r=e.Header;if(typeof t=="string"){n=n||t;var s=t.split(".");t=function(a){return(function(l,u,d){if(!u)return l;var p,v=typeof u=="function"?u:JSON.stringify(u),f=In.get(v)||(function(){var h=(function(m){return(function y(x,R){if(R===void 0&&(R=[]),Array.isArray(x))for(var T=0;T<x.length;T+=1)y(x[T],R);else R.push(x);return R})(m).map((function(y){return String(y).replace(".","_")})).join(".").replace(Ot,".").replace(Wt,"").split(".")})(u);return In.set(v,h),h})();try{p=f.reduce((function(h,m){return h[m]}),l)}catch{}return p!==void 0?p:d})(a,s)}}if(!n&&typeof r=="string"&&r&&(n=r),!n&&e.columns)throw console.error(e),new Error('A column ID (or unique "Header" value) is required!');if(!n)throw console.error(e),new Error("A column ID (or string accessor) is required!");return Object.assign(e,{id:n,accessor:t}),e}function Mn(e,n){if(!n)throw new Error;return Object.assign(e,c({Header:z,Footer:z},F,{},n,{},e)),Object.assign(e,{originalWidth:e.width}),e}function Et(e,n,t){t===void 0&&(t=function(){return{}});for(var r=[],s=e,a=0,l=function(){return a++},u=function(){var d={headers:[]},p=[],v=s.some((function(f){return f.parent}));s.forEach((function(f){var h,m=[].concat(p).reverse()[0];v&&(f.parent?h=c({},f.parent,{originalId:f.parent.id,id:f.parent.id+"_"+l(),headers:[f]},t(f)):h=Mn(c({originalId:f.id+"_placeholder",id:f.id+"_placeholder_"+l(),placeholderOf:f,headers:[f]},t(f)),n),m&&m.originalId===h.originalId?m.headers.push(f):p.push(h)),d.headers.push(f)})),r.push(d),s=p};s.length;)u();return r.reverse()}var In=new Map;function Ce(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];for(var r=0;r<n.length;r+=1)if(n[r]!==void 0)return n[r]}function En(e){if(typeof e=="function")return e}function On(e,n){var t=[];return(function r(s){s.forEach((function(a){a[n]?r(a[n]):t.push(a)}))})(e),t}function Wn(e,n){var t=n.manualExpandedKey,r=n.expanded,s=n.expandSubRows,a=s===void 0||s,l=[];return e.forEach((function(u){return(function d(p,v){v===void 0&&(v=!0),p.isExpanded=p.original&&p.original[t]||r[p.id],p.canExpand=p.subRows&&!!p.subRows.length,v&&l.push(p),p.subRows&&p.subRows.length&&p.isExpanded&&p.subRows.forEach((function(f){return d(f,a)}))})(u)})),l}function ke(e,n,t){return En(e)||n[e]||t[e]||t.text}function dn(e,n,t){return e?e(n,t):n===void 0}function Le(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")}var cn=null,Ot=/\[/g,Wt=/\]/g,kt=function(e){return c({role:"table"},e)},At=function(e){return c({role:"rowgroup"},e)},Gt=function(e,n){var t=n.column;return c({key:"header_"+t.id,colSpan:t.totalVisibleHeaderCount,role:"columnheader"},e)},Ft=function(e,n){var t=n.column;return c({key:"footer_"+t.id,colSpan:t.totalVisibleHeaderCount},e)},Nt=function(e,n){return c({key:"headerGroup_"+n.index,role:"row"},e)},_t=function(e,n){return c({key:"footerGroup_"+n.index},e)},Vt=function(e,n){return c({key:"row_"+n.row.id,role:"row"},e)},Dt=function(e,n){var t=n.cell;return c({key:"cell_"+t.row.id+"_"+t.column.id,role:"cell"},e)};function zt(){return{useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[kt],getTableBodyProps:[At],getHeaderGroupProps:[Nt],getFooterGroupProps:[_t],getHeaderProps:[Gt],getFooterProps:[Ft],getRowProps:[Vt],getCellProps:[Dt],useFinalInstance:[]}}i.resetHiddenColumns="resetHiddenColumns",i.toggleHideColumn="toggleHideColumn",i.setHiddenColumns="setHiddenColumns",i.toggleHideAllColumns="toggleHideAllColumns";var kn=function(e){e.getToggleHiddenProps=[Lt],e.getToggleHideAllColumnsProps=[qt],e.stateReducers.push(Jt),e.useInstanceBeforeDimensions.push(Ut),e.headerGroupsDeps.push((function(n,t){var r=t.instance;return[].concat(n,[r.state.hiddenColumns])})),e.useInstance.push(Xt)};kn.pluginName="useColumnVisibility";var Lt=function(e,n){var t=n.column;return[e,{onChange:function(r){t.toggleHidden(!r.target.checked)},style:{cursor:"pointer"},checked:t.isVisible,title:"Toggle Column Visible"}]},qt=function(e,n){var t=n.instance;return[e,{onChange:function(r){t.toggleHideAllColumns(!r.target.checked)},style:{cursor:"pointer"},checked:!t.allColumnsHidden&&!t.state.hiddenColumns.length,title:"Toggle All Columns Hidden",indeterminate:!t.allColumnsHidden&&t.state.hiddenColumns.length}]};function Jt(e,n,t,r){if(n.type===i.init)return c({hiddenColumns:[]},e);if(n.type===i.resetHiddenColumns)return c({},e,{hiddenColumns:r.initialState.hiddenColumns||[]});if(n.type===i.toggleHideColumn){var s=(n.value!==void 0?n.value:!e.hiddenColumns.includes(n.columnId))?[].concat(e.hiddenColumns,[n.columnId]):e.hiddenColumns.filter((function(a){return a!==n.columnId}));return c({},e,{hiddenColumns:s})}return n.type===i.setHiddenColumns?c({},e,{hiddenColumns:je(n.value,e.hiddenColumns)}):n.type===i.toggleHideAllColumns?c({},e,{hiddenColumns:(n.value!==void 0?n.value:!e.hiddenColumns.length)?r.allColumns.map((function(a){return a.id})):[]}):void 0}function Ut(e){var n=e.headers,t=e.state.hiddenColumns;g.useRef(!1).current;var r=0;n.forEach((function(s){return r+=(function a(l,u){l.isVisible=u&&!t.includes(l.id);var d=0;return l.headers&&l.headers.length?l.headers.forEach((function(p){return d+=a(p,l.isVisible)})):d=l.isVisible?1:0,l.totalVisibleHeaderCount=d,d})(s,!0)}))}function Xt(e){var n=e.columns,t=e.flatHeaders,r=e.dispatch,s=e.allColumns,a=e.getHooks,l=e.state.hiddenColumns,u=e.autoResetHiddenColumns,d=u===void 0||u,p=ee(e),v=s.length===l.length,f=g.useCallback((function(R,T){return r({type:i.toggleHideColumn,columnId:R,value:T})}),[r]),h=g.useCallback((function(R){return r({type:i.setHiddenColumns,value:R})}),[r]),m=g.useCallback((function(R){return r({type:i.toggleHideAllColumns,value:R})}),[r]),y=Q(a().getToggleHideAllColumnsProps,{instance:p()});t.forEach((function(R){R.toggleHidden=function(T){r({type:i.toggleHideColumn,columnId:R.id,value:T})},R.getToggleHiddenProps=Q(a().getToggleHiddenProps,{instance:p(),column:R})}));var x=ee(d);we((function(){x()&&r({type:i.resetHiddenColumns})}),[r,n]),Object.assign(e,{allColumnsHidden:v,toggleHideColumn:f,setHiddenColumns:h,toggleHideAllColumns:m,getToggleHideAllColumnsProps:y})}var $t={},Kt={},Qt=function(e,n,t){return e},Yt=function(e,n){return e.subRows||[]},Zt=function(e,n,t){return""+(t?[t.id,n].join("."):n)},eo=function(e){return e};function An(e){var n=e.initialState,t=n===void 0?$t:n,r=e.defaultColumn,s=r===void 0?Kt:r,a=e.getSubRows,l=a===void 0?Yt:a,u=e.getRowId,d=u===void 0?Zt:u,p=e.stateReducer,v=p===void 0?Qt:p,f=e.useControlledState,h=f===void 0?eo:f;return c({},_(e,["initialState","defaultColumn","getSubRows","getRowId","stateReducer","useControlledState"]),{initialState:t,defaultColumn:s,getSubRows:l,getRowId:d,stateReducer:v,useControlledState:h})}function Gn(e,n){n===void 0&&(n=0);var t=0,r=0,s=0,a=0;return e.forEach((function(l){var u=l.headers;if(l.totalLeft=n,u&&u.length){var d=Gn(u,n),p=d[0],v=d[1],f=d[2],h=d[3];l.totalMinWidth=p,l.totalWidth=v,l.totalMaxWidth=f,l.totalFlexWidth=h}else l.totalMinWidth=l.minWidth,l.totalWidth=Math.min(Math.max(l.minWidth,l.width),l.maxWidth),l.totalMaxWidth=l.maxWidth,l.totalFlexWidth=l.canResize?l.totalWidth:0;l.isVisible&&(n+=l.totalWidth,t+=l.totalMinWidth,r+=l.totalWidth,s+=l.totalMaxWidth,a+=l.totalFlexWidth)})),[t,r,s,a]}function no(e){var n=e.data,t=e.rows,r=e.flatRows,s=e.rowsById,a=e.column,l=e.getRowId,u=e.getSubRows,d=e.accessValueHooks,p=e.getInstance;n.forEach((function(v,f){return(function h(m,y,x,R,T){x===void 0&&(x=0);var N=m,S=l(m,y,R),w=s[S];if(w)w.subRows&&w.originalSubRows.forEach((function(P,O){return h(P,O,x+1,w)}));else if((w={id:S,original:N,index:y,depth:x,cells:[{}]}).cells.map=Le,w.cells.filter=Le,w.cells.forEach=Le,w.cells[0].getCellProps=Le,w.values={},T.push(w),r.push(w),s[S]=w,w.originalSubRows=u(m,y),w.originalSubRows){var A=[];w.originalSubRows.forEach((function(P,O){return h(P,O,x+1,w,A)})),w.subRows=A}a.accessor&&(w.values[a.id]=a.accessor(m,y,w,T,n)),w.values[a.id]=he(d,w.values[a.id],{row:w,column:a,instance:p()})})(v,f,0,void 0,t)}))}i.resetExpanded="resetExpanded",i.toggleRowExpanded="toggleRowExpanded",i.toggleAllRowsExpanded="toggleAllRowsExpanded";var Fn=function(e){e.getToggleAllRowsExpandedProps=[to],e.getToggleRowExpandedProps=[oo],e.stateReducers.push(ro),e.useInstance.push(ao),e.prepareRow.push(so)};Fn.pluginName="useExpanded";var to=function(e,n){var t=n.instance;return[e,{onClick:function(r){t.toggleAllRowsExpanded()},style:{cursor:"pointer"},title:"Toggle All Rows Expanded"}]},oo=function(e,n){var t=n.row;return[e,{onClick:function(){t.toggleRowExpanded()},style:{cursor:"pointer"},title:"Toggle Row Expanded"}]};function ro(e,n,t,r){if(n.type===i.init)return c({expanded:{}},e);if(n.type===i.resetExpanded)return c({},e,{expanded:r.initialState.expanded||{}});if(n.type===i.toggleAllRowsExpanded){var s=n.value,a=r.rowsById,l=Object.keys(a).length===Object.keys(e.expanded).length;if(s!==void 0?s:!l){var u={};return Object.keys(a).forEach((function(y){u[y]=!0})),c({},e,{expanded:u})}return c({},e,{expanded:{}})}if(n.type===i.toggleRowExpanded){var d,p=n.id,v=n.value,f=e.expanded[p],h=v!==void 0?v:!f;if(!f&&h)return c({},e,{expanded:c({},e.expanded,(d={},d[p]=!0,d))});if(f&&!h){var m=e.expanded;return m[p],c({},e,{expanded:_(m,[p].map(B))})}return e}}function ao(e){var n=e.data,t=e.rows,r=e.rowsById,s=e.manualExpandedKey,a=s===void 0?"expanded":s,l=e.paginateExpandedRows,u=l===void 0||l,d=e.expandSubRows,p=d===void 0||d,v=e.autoResetExpanded,f=v===void 0||v,h=e.getHooks,m=e.plugins,y=e.state.expanded,x=e.dispatch;Se(m,["useSortBy","useGroupBy","usePivotColumns","useGlobalFilter"],"useExpanded");var R=ee(f),T=!!(Object.keys(r).length&&Object.keys(y).length);T&&Object.keys(r).some((function(D){return!y[D]}))&&(T=!1),we((function(){R()&&x({type:i.resetExpanded})}),[x,n]);var N=g.useCallback((function(D,M){x({type:i.toggleRowExpanded,id:D,value:M})}),[x]),S=g.useCallback((function(D){return x({type:i.toggleAllRowsExpanded,value:D})}),[x]),w=g.useMemo((function(){return u?Wn(t,{manualExpandedKey:a,expanded:y,expandSubRows:p}):t}),[u,t,a,y,p]),A=g.useMemo((function(){return(function(D){var M=0;return Object.keys(D).forEach((function(E){var $=E.split(".");M=Math.max(M,$.length)})),M})(y)}),[y]),P=ee(e),O=Q(h().getToggleAllRowsExpandedProps,{instance:P()});Object.assign(e,{preExpandedRows:t,expandedRows:w,rows:w,expandedDepth:A,isAllRowsExpanded:T,toggleRowExpanded:N,toggleAllRowsExpanded:S,getToggleAllRowsExpandedProps:O})}function so(e,n){var t=n.instance.getHooks,r=n.instance;e.toggleRowExpanded=function(s){return r.toggleRowExpanded(e.id,s)},e.getToggleRowExpandedProps=Q(t().getToggleRowExpandedProps,{instance:r,row:e})}var Nn=function(e,n,t){return e=e.filter((function(r){return n.some((function(s){var a=r.values[s];return String(a).toLowerCase().includes(String(t).toLowerCase())}))}))};Nn.autoRemove=function(e){return!e};var _n=function(e,n,t){return e.filter((function(r){return n.some((function(s){var a=r.values[s];return a===void 0||String(a).toLowerCase()===String(t).toLowerCase()}))}))};_n.autoRemove=function(e){return!e};var Vn=function(e,n,t){return e.filter((function(r){return n.some((function(s){var a=r.values[s];return a===void 0||String(a)===String(t)}))}))};Vn.autoRemove=function(e){return!e};var Dn=function(e,n,t){return e.filter((function(r){return n.some((function(s){return r.values[s].includes(t)}))}))};Dn.autoRemove=function(e){return!e||!e.length};var zn=function(e,n,t){return e.filter((function(r){return n.some((function(s){var a=r.values[s];return a&&a.length&&t.every((function(l){return a.includes(l)}))}))}))};zn.autoRemove=function(e){return!e||!e.length};var Ln=function(e,n,t){return e.filter((function(r){return n.some((function(s){var a=r.values[s];return a&&a.length&&t.some((function(l){return a.includes(l)}))}))}))};Ln.autoRemove=function(e){return!e||!e.length};var qn=function(e,n,t){return e.filter((function(r){return n.some((function(s){var a=r.values[s];return t.includes(a)}))}))};qn.autoRemove=function(e){return!e||!e.length};var Jn=function(e,n,t){return e.filter((function(r){return n.some((function(s){return r.values[s]===t}))}))};Jn.autoRemove=function(e){return e===void 0};var Un=function(e,n,t){return e.filter((function(r){return n.some((function(s){return r.values[s]==t}))}))};Un.autoRemove=function(e){return e==null};var Xn=function(e,n,t){var r=t||[],s=r[0],a=r[1];if((s=typeof s=="number"?s:-1/0)>(a=typeof a=="number"?a:1/0)){var l=s;s=a,a=l}return e.filter((function(u){return n.some((function(d){var p=u.values[d];return p>=s&&p<=a}))}))};Xn.autoRemove=function(e){return!e||typeof e[0]!="number"&&typeof e[1]!="number"};var Ae=Object.freeze({__proto__:null,text:Nn,exactText:_n,exactTextCase:Vn,includes:Dn,includesAll:zn,includesSome:Ln,includesValue:qn,exact:Jn,equals:Un,between:Xn});i.resetFilters="resetFilters",i.setFilter="setFilter",i.setAllFilters="setAllFilters";var $n=function(e){e.stateReducers.push(lo),e.useInstance.push(io)};function lo(e,n,t,r){if(n.type===i.init)return c({filters:[]},e);if(n.type===i.resetFilters)return c({},e,{filters:r.initialState.filters||[]});if(n.type===i.setFilter){var s=n.columnId,a=n.filterValue,l=r.allColumns,u=r.filterTypes,d=l.find((function(x){return x.id===s}));if(!d)throw new Error("React-Table: Could not find a column with id: "+s);var p=ke(d.filter,u||{},Ae),v=e.filters.find((function(x){return x.id===s})),f=je(a,v&&v.value);return dn(p.autoRemove,f,d)?c({},e,{filters:e.filters.filter((function(x){return x.id!==s}))}):c({},e,v?{filters:e.filters.map((function(x){return x.id===s?{id:s,value:f}:x}))}:{filters:[].concat(e.filters,[{id:s,value:f}])})}if(n.type===i.setAllFilters){var h=n.filters,m=r.allColumns,y=r.filterTypes;return c({},e,{filters:je(h,e.filters).filter((function(x){var R=m.find((function(T){return T.id===x.id}));return!dn(ke(R.filter,y||{},Ae).autoRemove,x.value,R)}))})}}function io(e){var n=e.data,t=e.rows,r=e.flatRows,s=e.rowsById,a=e.allColumns,l=e.filterTypes,u=e.manualFilters,d=e.defaultCanFilter,p=d!==void 0&&d,v=e.disableFilters,f=e.state.filters,h=e.dispatch,m=e.autoResetFilters,y=m===void 0||m,x=g.useCallback((function(P,O){h({type:i.setFilter,columnId:P,filterValue:O})}),[h]),R=g.useCallback((function(P){h({type:i.setAllFilters,filters:P})}),[h]);a.forEach((function(P){var O=P.id,D=P.accessor,M=P.defaultCanFilter,E=P.disableFilters;P.canFilter=D?Ce(E!==!0&&void 0,v!==!0&&void 0,!0):Ce(M,p,!1),P.setFilter=function(W){return x(P.id,W)};var $=f.find((function(W){return W.id===O}));P.filterValue=$&&$.value}));var T=g.useMemo((function(){if(u||!f.length)return[t,r,s];var P=[],O={};return[(function D(M,E){E===void 0&&(E=0);var $=M;return($=f.reduce((function(W,U){var J=U.id,Z=U.value,j=a.find((function(re){return re.id===J}));if(!j)return W;E===0&&(j.preFilteredRows=W);var L=ke(j.filter,l||{},Ae);return L?(j.filteredRows=L(W,[J],Z),j.filteredRows):(console.warn("Could not find a valid 'column.filter' for column with the ID: "+j.id+"."),W)}),M)).forEach((function(W){P.push(W),O[W.id]=W,W.subRows&&(W.subRows=W.subRows&&W.subRows.length>0?D(W.subRows,E+1):W.subRows)})),$})(t),P,O]}),[u,f,t,r,s,a,l]),N=T[0],S=T[1],w=T[2];g.useMemo((function(){a.filter((function(P){return!f.find((function(O){return O.id===P.id}))})).forEach((function(P){P.preFilteredRows=N,P.filteredRows=N}))}),[N,f,a]);var A=ee(y);we((function(){A()&&h({type:i.resetFilters})}),[h,u?null:n]),Object.assign(e,{preFilteredRows:t,preFilteredFlatRows:r,preFilteredRowsById:s,filteredRows:N,filteredFlatRows:S,filteredRowsById:w,rows:N,flatRows:S,rowsById:w,setFilter:x,setAllFilters:R})}$n.pluginName="useFilters",i.resetGlobalFilter="resetGlobalFilter",i.setGlobalFilter="setGlobalFilter";var Kn=function(e){e.stateReducers.push(uo),e.useInstance.push(co)};function uo(e,n,t,r){if(n.type===i.resetGlobalFilter)return c({},e,{globalFilter:r.initialState.globalFilter||void 0});if(n.type===i.setGlobalFilter){var s=n.filterValue,a=r.userFilterTypes,l=ke(r.globalFilter,a||{},Ae),u=je(s,e.globalFilter);return dn(l.autoRemove,u)?(e.globalFilter,_(e,["globalFilter"])):c({},e,{globalFilter:u})}}function co(e){var n=e.data,t=e.rows,r=e.flatRows,s=e.rowsById,a=e.allColumns,l=e.filterTypes,u=e.globalFilter,d=e.manualGlobalFilter,p=e.state.globalFilter,v=e.dispatch,f=e.autoResetGlobalFilter,h=f===void 0||f,m=e.disableGlobalFilter,y=g.useCallback((function(w){v({type:i.setGlobalFilter,filterValue:w})}),[v]),x=g.useMemo((function(){if(d||p===void 0)return[t,r,s];var w=[],A={},P=ke(u,l||{},Ae);if(!P)return console.warn("Could not find a valid 'globalFilter' option."),t;a.forEach((function(D){var M=D.disableGlobalFilter;D.canFilter=Ce(M!==!0&&void 0,m!==!0&&void 0,!0)}));var O=a.filter((function(D){return D.canFilter===!0}));return[(function D(M){return(M=P(M,O.map((function(E){return E.id})),p)).forEach((function(E){w.push(E),A[E.id]=E,E.subRows=E.subRows&&E.subRows.length?D(E.subRows):E.subRows})),M})(t),w,A]}),[d,p,u,l,a,t,r,s,m]),R=x[0],T=x[1],N=x[2],S=ee(h);we((function(){S()&&v({type:i.resetGlobalFilter})}),[v,d?null:n]),Object.assign(e,{preGlobalFilteredRows:t,preGlobalFilteredFlatRows:r,preGlobalFilteredRowsById:s,globalFilteredRows:R,globalFilteredFlatRows:T,globalFilteredRowsById:N,rows:R,flatRows:T,rowsById:N,setGlobalFilter:y,disableGlobalFilter:m})}function Qn(e,n){return n.reduce((function(t,r){return t+(typeof r=="number"?r:0)}),0)}Kn.pluginName="useGlobalFilter";var Yn=Object.freeze({__proto__:null,sum:Qn,min:function(e){var n=e[0]||0;return e.forEach((function(t){typeof t=="number"&&(n=Math.min(n,t))})),n},max:function(e){var n=e[0]||0;return e.forEach((function(t){typeof t=="number"&&(n=Math.max(n,t))})),n},minMax:function(e){var n=e[0]||0,t=e[0]||0;return e.forEach((function(r){typeof r=="number"&&(n=Math.min(n,r),t=Math.max(t,r))})),n+".."+t},average:function(e){return Qn(0,e)/e.length},median:function(e){if(!e.length)return null;var n=Math.floor(e.length/2),t=[].concat(e).sort((function(r,s){return r-s}));return e.length%2!=0?t[n]:(t[n-1]+t[n])/2},unique:function(e){return Array.from(new Set(e).values())},uniqueCount:function(e){return new Set(e).size},count:function(e){return e.length}}),po=[],mo={};i.resetGroupBy="resetGroupBy",i.setGroupBy="setGroupBy",i.toggleGroupBy="toggleGroupBy";var Zn=function(e){e.getGroupByToggleProps=[go],e.stateReducers.push(fo),e.visibleColumnsDeps.push((function(n,t){var r=t.instance;return[].concat(n,[r.state.groupBy])})),e.visibleColumns.push(ho),e.useInstance.push(vo),e.prepareRow.push(wo)};Zn.pluginName="useGroupBy";var go=function(e,n){var t=n.header;return[e,{onClick:t.canGroupBy?function(r){r.persist(),t.toggleGroupBy()}:void 0,style:{cursor:t.canGroupBy?"pointer":void 0},title:"Toggle GroupBy"}]};function fo(e,n,t,r){if(n.type===i.init)return c({groupBy:[]},e);if(n.type===i.resetGroupBy)return c({},e,{groupBy:r.initialState.groupBy||[]});if(n.type===i.setGroupBy)return c({},e,{groupBy:n.value});if(n.type===i.toggleGroupBy){var s=n.columnId,a=n.value,l=a!==void 0?a:!e.groupBy.includes(s);return c({},e,l?{groupBy:[].concat(e.groupBy,[s])}:{groupBy:e.groupBy.filter((function(u){return u!==s}))})}}function ho(e,n){var t=n.instance.state.groupBy,r=t.map((function(a){return e.find((function(l){return l.id===a}))})).filter(Boolean),s=e.filter((function(a){return!t.includes(a.id)}));return(e=[].concat(r,s)).forEach((function(a){a.isGrouped=t.includes(a.id),a.groupedIndex=t.indexOf(a.id)})),e}var yo={};function vo(e){var n=e.data,t=e.rows,r=e.flatRows,s=e.rowsById,a=e.allColumns,l=e.flatHeaders,u=e.groupByFn,d=u===void 0?et:u,p=e.manualGroupBy,v=e.aggregations,f=v===void 0?yo:v,h=e.plugins,m=e.state.groupBy,y=e.dispatch,x=e.autoResetGroupBy,R=x===void 0||x,T=e.disableGroupBy,N=e.defaultCanGroupBy,S=e.getHooks;Se(h,["useColumnOrder","useFilters"],"useGroupBy");var w=ee(e);a.forEach((function(j){var L=j.accessor,re=j.defaultGroupBy,ce=j.disableGroupBy;j.canGroupBy=L?Ce(j.canGroupBy,ce!==!0&&void 0,T!==!0&&void 0,!0):Ce(j.canGroupBy,re,N,!1),j.canGroupBy&&(j.toggleGroupBy=function(){return e.toggleGroupBy(j.id)}),j.Aggregated=j.Aggregated||j.Cell}));var A=g.useCallback((function(j,L){y({type:i.toggleGroupBy,columnId:j,value:L})}),[y]),P=g.useCallback((function(j){y({type:i.setGroupBy,value:j})}),[y]);l.forEach((function(j){j.getGroupByToggleProps=Q(S().getGroupByToggleProps,{instance:w(),header:j})}));var O=g.useMemo((function(){if(p||!m.length)return[t,r,s,po,mo,r,s];var j=m.filter((function(ie){return a.find((function(He){return He.id===ie}))})),L=[],re={},ce=[],I={},ne=[],se={},pe=(function ie(He,Be,vt){if(Be===void 0&&(Be=0),Be===j.length)return He.map((function(Je){return c({},Je,{depth:Be})}));var vn=j[Be],lr=d(He,vn);return Object.entries(lr).map((function(Je,ir){var wt=Je[0],Ue=Je[1],Xe=vn+":"+wt,bt=ie(Ue,Be+1,Xe=vt?vt+">"+Xe:Xe),xt=Be?On(Ue,"leafRows"):Ue,ur=(function(be,wn,cr){var $e={};return a.forEach((function(le){if(j.includes(le.id))$e[le.id]=wn[0]?wn[0].values[le.id]:null;else{var Rt=typeof le.aggregate=="function"?le.aggregate:f[le.aggregate]||Yn[le.aggregate];if(Rt){var pr=wn.map((function(Ke){return Ke.values[le.id]})),mr=be.map((function(Ke){var bn=Ke.values[le.id];if(!cr&&le.aggregateValue){var Pt=typeof le.aggregateValue=="function"?le.aggregateValue:f[le.aggregateValue]||Yn[le.aggregateValue];if(!Pt)throw console.info({column:le}),new Error("React Table: Invalid column.aggregateValue option for column listed above");bn=Pt(bn,Ke,le)}return bn}));$e[le.id]=Rt(mr,pr)}else{if(le.aggregate)throw console.info({column:le}),new Error("React Table: Invalid column.aggregate option for column listed above");$e[le.id]=null}}})),$e})(xt,Ue,Be),dr={id:Xe,isGrouped:!0,groupByID:vn,groupByVal:wt,values:ur,subRows:bt,leafRows:xt,depth:Be,index:ir};return bt.forEach((function(be){L.push(be),re[be.id]=be,be.isGrouped?(ce.push(be),I[be.id]=be):(ne.push(be),se[be.id]=be)})),dr}))})(t);return pe.forEach((function(ie){L.push(ie),re[ie.id]=ie,ie.isGrouped?(ce.push(ie),I[ie.id]=ie):(ne.push(ie),se[ie.id]=ie)})),[pe,L,re,ce,I,ne,se]}),[p,m,t,r,s,a,f,d]),D=O[0],M=O[1],E=O[2],$=O[3],W=O[4],U=O[5],J=O[6],Z=ee(R);we((function(){Z()&&y({type:i.resetGroupBy})}),[y,p?null:n]),Object.assign(e,{preGroupedRows:t,preGroupedFlatRow:r,preGroupedRowsById:s,groupedRows:D,groupedFlatRows:M,groupedRowsById:E,onlyGroupedFlatRows:$,onlyGroupedRowsById:W,nonGroupedFlatRows:U,nonGroupedRowsById:J,rows:D,flatRows:M,rowsById:E,toggleGroupBy:A,setGroupBy:P})}function wo(e){e.allCells.forEach((function(n){var t;n.isGrouped=n.column.isGrouped&&n.column.id===e.groupByID,n.isPlaceholder=!n.isGrouped&&n.column.isGrouped,n.isAggregated=!n.isGrouped&&!n.isPlaceholder&&((t=e.subRows)==null?void 0:t.length)}))}function et(e,n){return e.reduce((function(t,r,s){var a=""+r.values[n];return t[a]=Array.isArray(t[a])?t[a]:[],t[a].push(r),t}),{})}var nt=/([0-9]+)/gm;function pn(e,n){return e===n?0:e>n?1:-1}function Ge(e,n,t){return[e.values[t],n.values[t]]}function tt(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}var bo=Object.freeze({__proto__:null,alphanumeric:function(e,n,t){var r=Ge(e,n,t),s=r[0],a=r[1];for(s=tt(s),a=tt(a),s=s.split(nt).filter(Boolean),a=a.split(nt).filter(Boolean);s.length&&a.length;){var l=s.shift(),u=a.shift(),d=parseInt(l,10),p=parseInt(u,10),v=[d,p].sort();if(isNaN(v[0])){if(l>u)return 1;if(u>l)return-1}else{if(isNaN(v[1]))return isNaN(d)?-1:1;if(d>p)return 1;if(p>d)return-1}}return s.length-a.length},datetime:function(e,n,t){var r=Ge(e,n,t),s=r[0],a=r[1];return pn(s=s.getTime(),a=a.getTime())},basic:function(e,n,t){var r=Ge(e,n,t);return pn(r[0],r[1])},string:function(e,n,t){var r=Ge(e,n,t),s=r[0],a=r[1];for(s=s.split("").filter(Boolean),a=a.split("").filter(Boolean);s.length&&a.length;){var l=s.shift(),u=a.shift(),d=l.toLowerCase(),p=u.toLowerCase();if(d>p)return 1;if(p>d)return-1;if(l>u)return 1;if(u>l)return-1}return s.length-a.length},number:function(e,n,t){var r=Ge(e,n,t),s=r[0],a=r[1],l=/[^0-9.]/gi;return pn(s=Number(String(s).replace(l,"")),a=Number(String(a).replace(l,"")))}});i.resetSortBy="resetSortBy",i.setSortBy="setSortBy",i.toggleSortBy="toggleSortBy",i.clearSortBy="clearSortBy",F.sortType="alphanumeric",F.sortDescFirst=!1;var ot=function(e){e.getSortByToggleProps=[xo],e.stateReducers.push(Ro),e.useInstance.push(Po)};ot.pluginName="useSortBy";var xo=function(e,n){var t=n.instance,r=n.column,s=t.isMultiSortEvent,a=s===void 0?function(l){return l.shiftKey}:s;return[e,{onClick:r.canSort?function(l){l.persist(),r.toggleSortBy(void 0,!t.disableMultiSort&&a(l))}:void 0,style:{cursor:r.canSort?"pointer":void 0},title:r.canSort?"Toggle SortBy":void 0}]};function Ro(e,n,t,r){if(n.type===i.init)return c({sortBy:[]},e);if(n.type===i.resetSortBy)return c({},e,{sortBy:r.initialState.sortBy||[]});if(n.type===i.clearSortBy)return c({},e,{sortBy:e.sortBy.filter((function(w){return w.id!==n.columnId}))});if(n.type===i.setSortBy)return c({},e,{sortBy:n.sortBy});if(n.type===i.toggleSortBy){var s,a=n.columnId,l=n.desc,u=n.multi,d=r.allColumns,p=r.disableMultiSort,v=r.disableSortRemove,f=r.disableMultiRemove,h=r.maxMultiSortColCount,m=h===void 0?Number.MAX_SAFE_INTEGER:h,y=e.sortBy,x=d.find((function(w){return w.id===a})).sortDescFirst,R=y.find((function(w){return w.id===a})),T=y.findIndex((function(w){return w.id===a})),N=l!=null,S=[];return(s=!p&&u?R?"toggle":"add":T!==y.length-1||y.length!==1?"replace":R?"toggle":"replace")!="toggle"||v||N||u&&f||!(R&&R.desc&&!x||!R.desc&&x)||(s="remove"),s==="replace"?S=[{id:a,desc:N?l:x}]:s==="add"?(S=[].concat(y,[{id:a,desc:N?l:x}])).splice(0,S.length-m):s==="toggle"?S=y.map((function(w){return w.id===a?c({},w,{desc:N?l:!R.desc}):w})):s==="remove"&&(S=y.filter((function(w){return w.id!==a}))),c({},e,{sortBy:S})}}function Po(e){var n=e.data,t=e.rows,r=e.flatRows,s=e.allColumns,a=e.orderByFn,l=a===void 0?rt:a,u=e.sortTypes,d=e.manualSortBy,p=e.defaultCanSort,v=e.disableSortBy,f=e.flatHeaders,h=e.state.sortBy,m=e.dispatch,y=e.plugins,x=e.getHooks,R=e.autoResetSortBy,T=R===void 0||R;Se(y,["useFilters","useGlobalFilter","useGroupBy","usePivotColumns"],"useSortBy");var N=g.useCallback((function(M){m({type:i.setSortBy,sortBy:M})}),[m]),S=g.useCallback((function(M,E,$){m({type:i.toggleSortBy,columnId:M,desc:E,multi:$})}),[m]),w=ee(e);f.forEach((function(M){var E=M.accessor,$=M.canSort,W=M.disableSortBy,U=M.id,J=E?Ce(W!==!0&&void 0,v!==!0&&void 0,!0):Ce(p,$,!1);M.canSort=J,M.canSort&&(M.toggleSortBy=function(j,L){return S(M.id,j,L)},M.clearSortBy=function(){m({type:i.clearSortBy,columnId:M.id})}),M.getSortByToggleProps=Q(x().getSortByToggleProps,{instance:w(),column:M});var Z=h.find((function(j){return j.id===U}));M.isSorted=!!Z,M.sortedIndex=h.findIndex((function(j){return j.id===U})),M.isSortedDesc=M.isSorted?Z.desc:void 0}));var A=g.useMemo((function(){if(d||!h.length)return[t,r];var M=[],E=h.filter((function($){return s.find((function(W){return W.id===$.id}))}));return[(function $(W){var U=l(W,E.map((function(J){var Z=s.find((function(re){return re.id===J.id}));if(!Z)throw new Error("React-Table: Could not find a column with id: "+J.id+" while sorting");var j=Z.sortType,L=En(j)||(u||{})[j]||bo[j];if(!L)throw new Error("React-Table: Could not find a valid sortType of '"+j+"' for column '"+J.id+"'.");return function(re,ce){return L(re,ce,J.id,J.desc)}})),E.map((function(J){var Z=s.find((function(j){return j.id===J.id}));return Z&&Z.sortInverted?J.desc:!J.desc})));return U.forEach((function(J){M.push(J),J.subRows&&J.subRows.length!==0&&(J.subRows=$(J.subRows))})),U})(t),M]}),[d,h,t,r,s,l,u]),P=A[0],O=A[1],D=ee(T);we((function(){D()&&m({type:i.resetSortBy})}),[d?null:n]),Object.assign(e,{preSortedRows:t,preSortedFlatRows:r,sortedRows:P,sortedFlatRows:O,rows:P,flatRows:O,setSortBy:N,toggleSortBy:S})}function rt(e,n,t){return[].concat(e).sort((function(r,s){for(var a=0;a<n.length;a+=1){var l=n[a],u=t[a]===!1||t[a]==="desc",d=l(r,s);if(d!==0)return u?-d:d}return t[0]?r.index-s.index:s.index-r.index}))}i.resetPage="resetPage",i.gotoPage="gotoPage",i.setPageSize="setPageSize";var at=function(e){e.stateReducers.push(So),e.useInstance.push(Co)};function So(e,n,t,r){if(n.type===i.init)return c({pageSize:10,pageIndex:0},e);if(n.type===i.resetPage)return c({},e,{pageIndex:r.initialState.pageIndex||0});if(n.type===i.gotoPage){var s=r.pageCount,a=r.page,l=je(n.pageIndex,e.pageIndex),u=!1;return l>e.pageIndex?u=s===-1?a.length>=e.pageSize:l<s:l<e.pageIndex&&(u=l>-1),u?c({},e,{pageIndex:l}):e}if(n.type===i.setPageSize){var d=n.pageSize,p=e.pageSize*e.pageIndex;return c({},e,{pageIndex:Math.floor(p/d),pageSize:d})}}function Co(e){var n=e.rows,t=e.autoResetPage,r=t===void 0||t,s=e.manualExpandedKey,a=s===void 0?"expanded":s,l=e.plugins,u=e.pageCount,d=e.paginateExpandedRows,p=d===void 0||d,v=e.expandSubRows,f=v===void 0||v,h=e.state,m=h.pageSize,y=h.pageIndex,x=h.expanded,R=h.globalFilter,T=h.filters,N=h.groupBy,S=h.sortBy,w=e.dispatch,A=e.data,P=e.manualPagination;Se(l,["useGlobalFilter","useFilters","useGroupBy","useSortBy","useExpanded"],"usePagination");var O=ee(r);we((function(){O()&&w({type:i.resetPage})}),[w,P?null:A,R,T,N,S]);var D=P?u:Math.ceil(n.length/m),M=g.useMemo((function(){return D>0?[].concat(new Array(D)).fill(null).map((function(L,re){return re})):[]}),[D]),E=g.useMemo((function(){var L;if(P)L=n;else{var re=m*y,ce=re+m;L=n.slice(re,ce)}return p?L:Wn(L,{manualExpandedKey:a,expanded:x,expandSubRows:f})}),[f,x,a,P,y,m,p,n]),$=y>0,W=D===-1?E.length>=m:y<D-1,U=g.useCallback((function(L){w({type:i.gotoPage,pageIndex:L})}),[w]),J=g.useCallback((function(){return U((function(L){return L-1}))}),[U]),Z=g.useCallback((function(){return U((function(L){return L+1}))}),[U]),j=g.useCallback((function(L){w({type:i.setPageSize,pageSize:L})}),[w]);Object.assign(e,{pageOptions:M,pageCount:D,page:E,canPreviousPage:$,canNextPage:W,gotoPage:U,previousPage:J,nextPage:Z,setPageSize:j})}at.pluginName="usePagination",i.resetPivot="resetPivot",i.togglePivot="togglePivot";var st=function(e){e.getPivotToggleProps=[To],e.stateReducers.push(jo),e.useInstanceAfterData.push(Bo),e.allColumns.push(Ho),e.accessValue.push(Mo),e.materializedColumns.push(Io),e.materializedColumnsDeps.push(Eo),e.visibleColumns.push(Oo),e.visibleColumnsDeps.push(Wo),e.useInstance.push(ko),e.prepareRow.push(Ao)};st.pluginName="usePivotColumns";var lt=[],To=function(e,n){var t=n.header;return[e,{onClick:t.canPivot?function(r){r.persist(),t.togglePivot()}:void 0,style:{cursor:t.canPivot?"pointer":void 0},title:"Toggle Pivot"}]};function jo(e,n,t,r){if(n.type===i.init)return c({pivotColumns:lt},e);if(n.type===i.resetPivot)return c({},e,{pivotColumns:r.initialState.pivotColumns||lt});if(n.type===i.togglePivot){var s=n.columnId,a=n.value,l=a!==void 0?a:!e.pivotColumns.includes(s);return c({},e,l?{pivotColumns:[].concat(e.pivotColumns,[s])}:{pivotColumns:e.pivotColumns.filter((function(u){return u!==s}))})}}function Bo(e){e.allColumns.forEach((function(n){n.isPivotSource=e.state.pivotColumns.includes(n.id)}))}function Ho(e,n){var t=n.instance;return e.forEach((function(r){r.isPivotSource=t.state.pivotColumns.includes(r.id),r.uniqueValues=new Set})),e}function Mo(e,n){var t=n.column;return t.uniqueValues&&e!==void 0&&t.uniqueValues.add(e),e}function Io(e,n){var t=n.instance,r=t.allColumns,s=t.state;if(!s.pivotColumns.length||!s.groupBy||!s.groupBy.length)return e;var a=s.pivotColumns.map((function(d){return r.find((function(p){return p.id===d}))})).filter(Boolean),l=r.filter((function(d){return!d.isPivotSource&&!s.groupBy.includes(d.id)&&!s.pivotColumns.includes(d.id)})),u=Bn((function d(p,v,f){p===void 0&&(p=0),f===void 0&&(f=[]);var h=a[p];return h?Array.from(h.uniqueValues).sort().map((function(m){var y=c({},h,{Header:h.PivotHeader||typeof h.header=="string"?h.Header+": "+m:m,isPivotGroup:!0,parent:v,depth:p,id:v?v.id+"."+h.id+"."+m:h.id+"."+m,pivotValue:m});return y.columns=d(p+1,y,[].concat(f,[function(x){return x.values[h.id]===m}])),y})):l.map((function(m){return c({},m,{canPivot:!1,isPivoted:!0,parent:v,depth:p,id:""+(v?v.id+"."+m.id:m.id),accessor:function(y,x,R){if(f.every((function(T){return T(R)})))return R.values[m.id]}})}))})());return[].concat(e,u)}function Eo(e,n){var t=n.instance.state,r=t.pivotColumns,s=t.groupBy;return[].concat(e,[r,s])}function Oo(e,n){var t=n.instance.state;return e=e.filter((function(r){return!r.isPivotSource})),t.pivotColumns.length&&t.groupBy&&t.groupBy.length&&(e=e.filter((function(r){return r.isGrouped||r.isPivoted}))),e}function Wo(e,n){var t=n.instance;return[].concat(e,[t.state.pivotColumns,t.state.groupBy])}function ko(e){var n=e.columns,t=e.allColumns,r=e.flatHeaders,s=e.getHooks,a=e.plugins,l=e.dispatch,u=e.autoResetPivot,d=u===void 0||u,p=e.manaulPivot,v=e.disablePivot,f=e.defaultCanPivot;Se(a,["useGroupBy"],"usePivotColumns");var h=ee(e);t.forEach((function(y){var x=y.accessor,R=y.defaultPivot,T=y.disablePivot;y.canPivot=x?Ce(y.canPivot,T!==!0&&void 0,v!==!0&&void 0,!0):Ce(y.canPivot,R,f,!1),y.canPivot&&(y.togglePivot=function(){return e.togglePivot(y.id)}),y.Aggregated=y.Aggregated||y.Cell})),r.forEach((function(y){y.getPivotToggleProps=Q(s().getPivotToggleProps,{instance:h(),header:y})}));var m=ee(d);we((function(){m()&&l({type:i.resetPivot})}),[l,p?null:n]),Object.assign(e,{togglePivot:function(y,x){l({type:i.togglePivot,columnId:y,value:x})}})}function Ao(e){e.allCells.forEach((function(n){n.isPivoted=n.column.isPivoted}))}i.resetSelectedRows="resetSelectedRows",i.toggleAllRowsSelected="toggleAllRowsSelected",i.toggleRowSelected="toggleRowSelected",i.toggleAllPageRowsSelected="toggleAllPageRowsSelected";var it=function(e){e.getToggleRowSelectedProps=[Go],e.getToggleAllRowsSelectedProps=[Fo],e.getToggleAllPageRowsSelectedProps=[No],e.stateReducers.push(_o),e.useInstance.push(Vo),e.prepareRow.push(Do)};it.pluginName="useRowSelect";var Go=function(e,n){var t=n.instance,r=n.row,s=t.manualRowSelectedKey,a=s===void 0?"isSelected":s;return[e,{onChange:function(l){r.toggleRowSelected(l.target.checked)},style:{cursor:"pointer"},checked:!(!r.original||!r.original[a])||r.isSelected,title:"Toggle Row Selected",indeterminate:r.isSomeSelected}]},Fo=function(e,n){var t=n.instance;return[e,{onChange:function(r){t.toggleAllRowsSelected(r.target.checked)},style:{cursor:"pointer"},checked:t.isAllRowsSelected,title:"Toggle All Rows Selected",indeterminate:!!(!t.isAllRowsSelected&&Object.keys(t.state.selectedRowIds).length)}]},No=function(e,n){var t=n.instance;return[e,{onChange:function(r){t.toggleAllPageRowsSelected(r.target.checked)},style:{cursor:"pointer"},checked:t.isAllPageRowsSelected,title:"Toggle All Current Page Rows Selected",indeterminate:!!(!t.isAllPageRowsSelected&&t.page.some((function(r){var s=r.id;return t.state.selectedRowIds[s]})))}]};function _o(e,n,t,r){if(n.type===i.init)return c({selectedRowIds:{}},e);if(n.type===i.resetSelectedRows)return c({},e,{selectedRowIds:r.initialState.selectedRowIds||{}});if(n.type===i.toggleAllRowsSelected){var s=n.value,a=r.isAllRowsSelected,l=r.rowsById,u=r.nonGroupedRowsById,d=u===void 0?l:u,p=s!==void 0?s:!a,v=Object.assign({},e.selectedRowIds);return p?Object.keys(d).forEach((function(U){v[U]=!0})):Object.keys(d).forEach((function(U){delete v[U]})),c({},e,{selectedRowIds:v})}if(n.type===i.toggleRowSelected){var f=n.id,h=n.value,m=r.rowsById,y=r.selectSubRows,x=y===void 0||y,R=r.getSubRows,T=e.selectedRowIds[f],N=h!==void 0?h:!T;if(T===N)return e;var S=c({},e.selectedRowIds);return(function U(J){var Z=m[J];if(Z&&(Z.isGrouped||(N?S[J]=!0:delete S[J]),x&&R(Z)))return R(Z).forEach((function(j){return U(j.id)}))})(f),c({},e,{selectedRowIds:S})}if(n.type===i.toggleAllPageRowsSelected){var w=n.value,A=r.page,P=r.rowsById,O=r.selectSubRows,D=O===void 0||O,M=r.isAllPageRowsSelected,E=r.getSubRows,$=w!==void 0?w:!M,W=c({},e.selectedRowIds);return A.forEach((function(U){return(function J(Z){var j=P[Z];if(j.isGrouped||($?W[Z]=!0:delete W[Z]),D&&E(j))return E(j).forEach((function(L){return J(L.id)}))})(U.id)})),c({},e,{selectedRowIds:W})}return e}function Vo(e){var n=e.data,t=e.rows,r=e.getHooks,s=e.plugins,a=e.rowsById,l=e.nonGroupedRowsById,u=l===void 0?a:l,d=e.autoResetSelectedRows,p=d===void 0||d,v=e.state.selectedRowIds,f=e.selectSubRows,h=f===void 0||f,m=e.dispatch,y=e.page,x=e.getSubRows;Se(s,["useFilters","useGroupBy","useSortBy","useExpanded","usePagination"],"useRowSelect");var R=g.useMemo((function(){var E=[];return t.forEach((function($){var W=h?(function U(J,Z,j){if(Z[J.id])return!0;var L=j(J);if(L&&L.length){var re=!0,ce=!1;return L.forEach((function(I){ce&&!re||(U(I,Z,j)?ce=!0:re=!1)})),!!re||!!ce&&null}return!1})($,v,x):!!v[$.id];$.isSelected=!!W,$.isSomeSelected=W===null,W&&E.push($)})),E}),[t,h,v,x]),T=!!(Object.keys(u).length&&Object.keys(v).length),N=T;T&&Object.keys(u).some((function(E){return!v[E]}))&&(T=!1),T||y&&y.length&&y.some((function(E){var $=E.id;return!v[$]}))&&(N=!1);var S=ee(p);we((function(){S()&&m({type:i.resetSelectedRows})}),[m,n]);var w=g.useCallback((function(E){return m({type:i.toggleAllRowsSelected,value:E})}),[m]),A=g.useCallback((function(E){return m({type:i.toggleAllPageRowsSelected,value:E})}),[m]),P=g.useCallback((function(E,$){return m({type:i.toggleRowSelected,id:E,value:$})}),[m]),O=ee(e),D=Q(r().getToggleAllRowsSelectedProps,{instance:O()}),M=Q(r().getToggleAllPageRowsSelectedProps,{instance:O()});Object.assign(e,{selectedFlatRows:R,isAllRowsSelected:T,isAllPageRowsSelected:N,toggleRowSelected:P,toggleAllRowsSelected:w,getToggleAllRowsSelectedProps:D,getToggleAllPageRowsSelectedProps:M,toggleAllPageRowsSelected:A})}function Do(e,n){var t=n.instance;e.toggleRowSelected=function(r){return t.toggleRowSelected(e.id,r)},e.getToggleRowSelectedProps=Q(t.getHooks().getToggleRowSelectedProps,{instance:t,row:e})}var ut=function(e){return{}},dt=function(e){return{}};i.setRowState="setRowState",i.setCellState="setCellState",i.resetRowState="resetRowState";var ct=function(e){e.stateReducers.push(zo),e.useInstance.push(Lo),e.prepareRow.push(qo)};function zo(e,n,t,r){var s=r.initialRowStateAccessor,a=s===void 0?ut:s,l=r.initialCellStateAccessor,u=l===void 0?dt:l,d=r.rowsById;if(n.type===i.init)return c({rowState:{}},e);if(n.type===i.resetRowState)return c({},e,{rowState:r.initialState.rowState||{}});if(n.type===i.setRowState){var p,v=n.rowId,f=n.value,h=e.rowState[v]!==void 0?e.rowState[v]:a(d[v]);return c({},e,{rowState:c({},e.rowState,(p={},p[v]=je(f,h),p))})}if(n.type===i.setCellState){var m,y,x,R,T,N=n.rowId,S=n.columnId,w=n.value,A=e.rowState[N]!==void 0?e.rowState[N]:a(d[N]),P=(A==null||(m=A.cellState)==null?void 0:m[S])!==void 0?A.cellState[S]:u((y=d[N])==null||(x=y.cells)==null?void 0:x.find((function(O){return O.column.id===S})));return c({},e,{rowState:c({},e.rowState,(T={},T[N]=c({},A,{cellState:c({},A.cellState||{},(R={},R[S]=je(w,P),R))}),T))})}}function Lo(e){var n=e.autoResetRowState,t=n===void 0||n,r=e.data,s=e.dispatch,a=g.useCallback((function(d,p){return s({type:i.setRowState,rowId:d,value:p})}),[s]),l=g.useCallback((function(d,p,v){return s({type:i.setCellState,rowId:d,columnId:p,value:v})}),[s]),u=ee(t);we((function(){u()&&s({type:i.resetRowState})}),[r]),Object.assign(e,{setRowState:a,setCellState:l})}function qo(e,n){var t=n.instance,r=t.initialRowStateAccessor,s=r===void 0?ut:r,a=t.initialCellStateAccessor,l=a===void 0?dt:a,u=t.state.rowState;e&&(e.state=u[e.id]!==void 0?u[e.id]:s(e),e.setState=function(d){return t.setRowState(e.id,d)},e.cells.forEach((function(d){e.state.cellState||(e.state.cellState={}),d.state=e.state.cellState[d.column.id]!==void 0?e.state.cellState[d.column.id]:l(d),d.setState=function(p){return t.setCellState(e.id,d.column.id,p)}})))}ct.pluginName="useRowState",i.resetColumnOrder="resetColumnOrder",i.setColumnOrder="setColumnOrder";var pt=function(e){e.stateReducers.push(Jo),e.visibleColumnsDeps.push((function(n,t){var r=t.instance;return[].concat(n,[r.state.columnOrder])})),e.visibleColumns.push(Uo),e.useInstance.push(Xo)};function Jo(e,n,t,r){return n.type===i.init?c({columnOrder:[]},e):n.type===i.resetColumnOrder?c({},e,{columnOrder:r.initialState.columnOrder||[]}):n.type===i.setColumnOrder?c({},e,{columnOrder:je(n.columnOrder,e.columnOrder)}):void 0}function Uo(e,n){var t=n.instance.state.columnOrder;if(!t||!t.length)return e;for(var r=[].concat(t),s=[].concat(e),a=[],l=function(){var u=r.shift(),d=s.findIndex((function(p){return p.id===u}));d>-1&&a.push(s.splice(d,1)[0])};s.length&&r.length;)l();return[].concat(a,s)}function Xo(e){var n=e.dispatch;e.setColumnOrder=g.useCallback((function(t){return n({type:i.setColumnOrder,columnOrder:t})}),[n])}pt.pluginName="useColumnOrder",F.canResize=!0,i.columnStartResizing="columnStartResizing",i.columnResizing="columnResizing",i.columnDoneResizing="columnDoneResizing",i.resetResize="resetResize";var mt=function(e){e.getResizerProps=[$o],e.getHeaderProps.push({style:{position:"relative"}}),e.stateReducers.push(Ko),e.useInstance.push(Yo),e.useInstanceBeforeDimensions.push(Qo)},$o=function(e,n){var t=n.instance,r=n.header,s=t.dispatch,a=function(l,u){var d=!1;if(l.type==="touchstart"){if(l.touches&&l.touches.length>1)return;d=!0}var p,v,f=(function(S){var w=[];return(function A(P){P.columns&&P.columns.length&&P.columns.map(A),w.push(P)})(S),w})(u).map((function(S){return[S.id,S.totalWidth]})),h=d?Math.round(l.touches[0].clientX):l.clientX,m=function(){window.cancelAnimationFrame(p),p=null,s({type:i.columnDoneResizing})},y=function(){window.cancelAnimationFrame(p),p=null,s({type:i.columnResizing,clientX:v})},x=function(S){v=S,p||(p=window.requestAnimationFrame(y))},R={mouse:{moveEvent:"mousemove",moveHandler:function(S){return x(S.clientX)},upEvent:"mouseup",upHandler:function(S){document.removeEventListener("mousemove",R.mouse.moveHandler),document.removeEventListener("mouseup",R.mouse.upHandler),m()}},touch:{moveEvent:"touchmove",moveHandler:function(S){return S.cancelable&&(S.preventDefault(),S.stopPropagation()),x(S.touches[0].clientX),!1},upEvent:"touchend",upHandler:function(S){document.removeEventListener(R.touch.moveEvent,R.touch.moveHandler),document.removeEventListener(R.touch.upEvent,R.touch.moveHandler),m()}}},T=d?R.touch:R.mouse,N=!!(function(){if(typeof cn=="boolean")return cn;var S=!1;try{var w={get passive(){return S=!0,!1}};window.addEventListener("test",null,w),window.removeEventListener("test",null,w)}catch{S=!1}return cn=S})()&&{passive:!1};document.addEventListener(T.moveEvent,T.moveHandler,N),document.addEventListener(T.upEvent,T.upHandler,N),s({type:i.columnStartResizing,columnId:u.id,columnWidth:u.totalWidth,headerIdWidths:f,clientX:h})};return[e,{onMouseDown:function(l){return l.persist()||a(l,r)},onTouchStart:function(l){return l.persist()||a(l,r)},style:{cursor:"col-resize"},draggable:!1,role:"separator"}]};function Ko(e,n){if(n.type===i.init)return c({columnResizing:{columnWidths:{}}},e);if(n.type===i.resetResize)return c({},e,{columnResizing:{columnWidths:{}}});if(n.type===i.columnStartResizing){var t=n.clientX,r=n.columnId,s=n.columnWidth,a=n.headerIdWidths;return c({},e,{columnResizing:c({},e.columnResizing,{startX:t,headerIdWidths:a,columnWidth:s,isResizingColumn:r})})}if(n.type===i.columnResizing){var l=n.clientX,u=e.columnResizing,d=u.startX,p=u.columnWidth,v=u.headerIdWidths,f=(l-d)/p,h={};return(v===void 0?[]:v).forEach((function(m){var y=m[0],x=m[1];h[y]=Math.max(x+x*f,0)})),c({},e,{columnResizing:c({},e.columnResizing,{columnWidths:c({},e.columnResizing.columnWidths,{},h)})})}return n.type===i.columnDoneResizing?c({},e,{columnResizing:c({},e.columnResizing,{startX:null,isResizingColumn:null})}):void 0}mt.pluginName="useResizeColumns";var Qo=function(e){var n=e.flatHeaders,t=e.disableResizing,r=e.getHooks,s=e.state.columnResizing,a=ee(e);n.forEach((function(l){var u=Ce(l.disableResizing!==!0&&void 0,t!==!0&&void 0,!0);l.canResize=u,l.width=s.columnWidths[l.id]||l.originalWidth||l.width,l.isResizing=s.isResizingColumn===l.id,u&&(l.getResizerProps=Q(r().getResizerProps,{instance:a(),header:l}))}))};function Yo(e){var n=e.plugins,t=e.dispatch,r=e.autoResetResize,s=r===void 0||r,a=e.columns;Se(n,["useAbsoluteLayout"],"useResizeColumns");var l=ee(s);we((function(){l()&&t({type:i.resetResize})}),[a]);var u=g.useCallback((function(){return t({type:i.resetResize})}),[t]);Object.assign(e,{resetResizing:u})}var mn={position:"absolute",top:0},gt=function(e){e.getTableBodyProps.push(qe),e.getRowProps.push(qe),e.getHeaderGroupProps.push(qe),e.getFooterGroupProps.push(qe),e.getHeaderProps.push((function(n,t){var r=t.column;return[n,{style:c({},mn,{left:r.totalLeft+"px",width:r.totalWidth+"px"})}]})),e.getCellProps.push((function(n,t){var r=t.cell;return[n,{style:c({},mn,{left:r.column.totalLeft+"px",width:r.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(n,t){var r=t.column;return[n,{style:c({},mn,{left:r.totalLeft+"px",width:r.totalWidth+"px"})}]}))};gt.pluginName="useAbsoluteLayout";var qe=function(e,n){return[e,{style:{position:"relative",width:n.instance.totalColumnsWidth+"px"}}]},gn={display:"inline-block",boxSizing:"border-box"},fn=function(e,n){return[e,{style:{display:"flex",width:n.instance.totalColumnsWidth+"px"}}]},ft=function(e){e.getRowProps.push(fn),e.getHeaderGroupProps.push(fn),e.getFooterGroupProps.push(fn),e.getHeaderProps.push((function(n,t){var r=t.column;return[n,{style:c({},gn,{width:r.totalWidth+"px"})}]})),e.getCellProps.push((function(n,t){var r=t.cell;return[n,{style:c({},gn,{width:r.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(n,t){var r=t.column;return[n,{style:c({},gn,{width:r.totalWidth+"px"})}]}))};function ht(e){e.getTableProps.push(Zo),e.getRowProps.push(hn),e.getHeaderGroupProps.push(hn),e.getFooterGroupProps.push(hn),e.getHeaderProps.push(er),e.getCellProps.push(nr),e.getFooterProps.push(tr)}ft.pluginName="useBlockLayout",ht.pluginName="useFlexLayout";var Zo=function(e,n){return[e,{style:{minWidth:n.instance.totalColumnsMinWidth+"px"}}]},hn=function(e,n){return[e,{style:{display:"flex",flex:"1 0 auto",minWidth:n.instance.totalColumnsMinWidth+"px"}}]},er=function(e,n){var t=n.column;return[e,{style:{boxSizing:"border-box",flex:t.totalFlexWidth?t.totalFlexWidth+" 0 auto":void 0,minWidth:t.totalMinWidth+"px",width:t.totalWidth+"px"}}]},nr=function(e,n){var t=n.cell;return[e,{style:{boxSizing:"border-box",flex:t.column.totalFlexWidth+" 0 auto",minWidth:t.column.totalMinWidth+"px",width:t.column.totalWidth+"px"}}]},tr=function(e,n){var t=n.column;return[e,{style:{boxSizing:"border-box",flex:t.totalFlexWidth?t.totalFlexWidth+" 0 auto":void 0,minWidth:t.totalMinWidth+"px",width:t.totalWidth+"px"}}]};function yt(e){e.stateReducers.push(sr),e.getTableProps.push(or),e.getHeaderProps.push(rr),e.getRowProps.push(ar)}i.columnStartResizing="columnStartResizing",i.columnResizing="columnResizing",i.columnDoneResizing="columnDoneResizing",i.resetResize="resetResize",yt.pluginName="useGridLayout";var or=function(e,n){var t=n.instance;return[e,{style:{display:"grid",gridTemplateColumns:t.visibleColumns.map((function(r){var s;return t.state.gridLayout.columnWidths[r.id]?t.state.gridLayout.columnWidths[r.id]+"px":(s=t.state.columnResizing)!=null&&s.isResizingColumn?t.state.gridLayout.startWidths[r.id]+"px":typeof r.width=="number"?r.width+"px":r.width})).join(" ")}}]},rr=function(e,n){var t=n.column;return[e,{id:"header-cell-"+t.id,style:{position:"sticky",gridColumn:"span "+t.totalVisibleHeaderCount}}]},ar=function(e,n){var t=n.row;return t.isExpanded?[e,{style:{gridColumn:"1 / "+(t.cells.length+1)}}]:[e,{}]};function sr(e,n,t,r){if(n.type===i.init)return c({gridLayout:{columnWidths:{}}},e);if(n.type===i.resetResize)return c({},e,{gridLayout:{columnWidths:{}}});if(n.type===i.columnStartResizing){var s=n.columnId,a=n.headerIdWidths,l=yn(s);if(l!==void 0){var u=r.visibleColumns.reduce((function(w,A){var P;return c({},w,((P={})[A.id]=yn(A.id),P))}),{}),d=r.visibleColumns.reduce((function(w,A){var P;return c({},w,((P={})[A.id]=A.minWidth,P))}),{}),p=r.visibleColumns.reduce((function(w,A){var P;return c({},w,((P={})[A.id]=A.maxWidth,P))}),{}),v=a.map((function(w){var A=w[0];return[A,yn(A)]}));return c({},e,{gridLayout:c({},e.gridLayout,{startWidths:u,minWidths:d,maxWidths:p,headerIdGridWidths:v,columnWidth:l})})}return e}if(n.type===i.columnResizing){var f=n.clientX,h=e.columnResizing.startX,m=e.gridLayout,y=m.columnWidth,x=m.minWidths,R=m.maxWidths,T=m.headerIdGridWidths,N=(f-h)/y,S={};return(T===void 0?[]:T).forEach((function(w){var A=w[0],P=w[1];S[A]=Math.min(Math.max(x[A],P+P*N),R[A])})),c({},e,{gridLayout:c({},e.gridLayout,{columnWidths:c({},e.gridLayout.columnWidths,{},S)})})}return n.type===i.columnDoneResizing?c({},e,{gridLayout:c({},e.gridLayout,{startWidths:{},minWidths:{},maxWidths:{}})}):void 0}function yn(e){var n,t=(n=document.getElementById("header-cell-"+e))==null?void 0:n.offsetWidth;if(t!==void 0)return t}b._UNSTABLE_usePivotColumns=st,b.actions=i,b.defaultColumn=F,b.defaultGroupByFn=et,b.defaultOrderByFn=rt,b.defaultRenderer=X,b.emptyRenderer=z,b.ensurePluginOrder=Se,b.flexRender=Tn,b.functionalUpdate=je,b.loopHooks=Pe,b.makePropGetter=Q,b.makeRenderer=un,b.reduceHooks=he,b.safeUseLayoutEffect=Cn,b.useAbsoluteLayout=gt,b.useAsyncDebounce=function(e,n){n===void 0&&(n=0);var t=g.useRef({}),r=ee(e),s=ee(n);return g.useCallback((function(){var a=q(regeneratorRuntime.mark((function l(){var u,d,p,v=arguments;return regeneratorRuntime.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:for(u=v.length,d=new Array(u),p=0;p<u;p++)d[p]=v[p];return t.current.promise||(t.current.promise=new Promise((function(h,m){t.current.resolve=h,t.current.reject=m}))),t.current.timeout&&clearTimeout(t.current.timeout),t.current.timeout=setTimeout(q(regeneratorRuntime.mark((function h(){return regeneratorRuntime.wrap((function(m){for(;;)switch(m.prev=m.next){case 0:return delete t.current.timeout,m.prev=1,m.t0=t.current,m.next=5,r().apply(void 0,d);case 5:m.t1=m.sent,m.t0.resolve.call(m.t0,m.t1),m.next=12;break;case 9:m.prev=9,m.t2=m.catch(1),t.current.reject(m.t2);case 12:return m.prev=12,delete t.current.promise,m.finish(12);case 15:case"end":return m.stop()}}),h,null,[[1,9,12,15]])}))),s()),f.abrupt("return",t.current.promise);case 5:case"end":return f.stop()}}),l)})));return function(){return a.apply(this,arguments)}})(),[r,s])},b.useBlockLayout=ft,b.useColumnOrder=pt,b.useExpanded=Fn,b.useFilters=$n,b.useFlexLayout=ht,b.useGetLatest=ee,b.useGlobalFilter=Kn,b.useGridLayout=yt,b.useGroupBy=Zn,b.useMountedLayoutEffect=we,b.usePagination=at,b.useResizeColumns=mt,b.useRowSelect=it,b.useRowState=ct,b.useSortBy=ot,b.useTable=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];e=An(e),t=[kn].concat(t);var s=g.useRef({}),a=ee(s.current);Object.assign(a(),c({},e,{plugins:t,hooks:zt()})),t.filter(Boolean).forEach((function(I){I(a().hooks)}));var l=ee(a().hooks);a().getHooks=l,delete a().hooks,Object.assign(a(),he(l().useOptions,An(e)));var u=a(),d=u.data,p=u.columns,v=u.initialState,f=u.defaultColumn,h=u.getSubRows,m=u.getRowId,y=u.stateReducer,x=u.useControlledState,R=ee(y),T=g.useCallback((function(I,ne){if(!ne.type)throw console.info({action:ne}),new Error("Unknown Action 👆");return[].concat(l().stateReducers,Array.isArray(R())?R():[R()]).reduce((function(se,pe){return pe(se,ne,I,a())||se}),I)}),[l,R,a]),N=g.useReducer(T,void 0,(function(){return T(v,{type:i.init})})),S=N[0],w=N[1],A=he([].concat(l().useControlledState,[x]),S,{instance:a()});Object.assign(a(),{state:A,dispatch:w});var P=g.useMemo((function(){return jn(he(l().columns,p,{instance:a()}))}),[l,a,p].concat(he(l().columnsDeps,[],{instance:a()})));a().columns=P;var O=g.useMemo((function(){return he(l().allColumns,Bn(P),{instance:a()}).map(Hn)}),[P,l,a].concat(he(l().allColumnsDeps,[],{instance:a()})));a().allColumns=O;var D=g.useMemo((function(){for(var I=[],ne=[],se={},pe=[].concat(O);pe.length;){var ie=pe.shift();no({data:d,rows:I,flatRows:ne,rowsById:se,column:ie,getRowId:m,getSubRows:h,accessValueHooks:l().accessValue,getInstance:a})}return[I,ne,se]}),[O,d,m,h,l,a]),M=D[0],E=D[1],$=D[2];Object.assign(a(),{rows:M,initialRows:[].concat(M),flatRows:E,rowsById:$}),Pe(l().useInstanceAfterData,a());var W=g.useMemo((function(){return he(l().visibleColumns,O,{instance:a()}).map((function(I){return Mn(I,f)}))}),[l,O,a,f].concat(he(l().visibleColumnsDeps,[],{instance:a()})));O=g.useMemo((function(){var I=[].concat(W);return O.forEach((function(ne){I.find((function(se){return se.id===ne.id}))||I.push(ne)})),I}),[O,W]),a().allColumns=O;var U=g.useMemo((function(){return he(l().headerGroups,Et(W,f),a())}),[l,W,f,a].concat(he(l().headerGroupsDeps,[],{instance:a()})));a().headerGroups=U;var J=g.useMemo((function(){return U.length?U[0].headers:[]}),[U]);a().headers=J,a().flatHeaders=U.reduce((function(I,ne){return[].concat(I,ne.headers)}),[]),Pe(l().useInstanceBeforeDimensions,a());var Z=W.filter((function(I){return I.isVisible})).map((function(I){return I.id})).sort().join("_");W=g.useMemo((function(){return W.filter((function(I){return I.isVisible}))}),[W,Z]),a().visibleColumns=W;var j=Gn(J),L=j[0],re=j[1],ce=j[2];return a().totalColumnsMinWidth=L,a().totalColumnsWidth=re,a().totalColumnsMaxWidth=ce,Pe(l().useInstance,a()),[].concat(a().flatHeaders,a().allColumns).forEach((function(I){I.render=un(a(),I),I.getHeaderProps=Q(l().getHeaderProps,{instance:a(),column:I}),I.getFooterProps=Q(l().getFooterProps,{instance:a(),column:I})})),a().headerGroups=g.useMemo((function(){return U.filter((function(I,ne){return I.headers=I.headers.filter((function(se){return se.headers?(function pe(ie){return ie.filter((function(He){return He.headers?pe(He.headers):He.isVisible})).length})(se.headers):se.isVisible})),!!I.headers.length&&(I.getHeaderGroupProps=Q(l().getHeaderGroupProps,{instance:a(),headerGroup:I,index:ne}),I.getFooterGroupProps=Q(l().getFooterGroupProps,{instance:a(),headerGroup:I,index:ne}),!0)}))}),[U,a,l]),a().footerGroups=[].concat(a().headerGroups).reverse(),a().prepareRow=g.useCallback((function(I){I.getRowProps=Q(l().getRowProps,{instance:a(),row:I}),I.allCells=O.map((function(ne){var se=I.values[ne.id],pe={column:ne,row:I,value:se};return pe.getCellProps=Q(l().getCellProps,{instance:a(),cell:pe}),pe.render=un(a(),ne,{row:I,cell:pe,value:se}),pe})),I.cells=W.map((function(ne){return I.allCells.find((function(se){return se.column.id===ne.id}))})),Pe(l().prepareRow,I,{instance:a()})}),[l,a,O,W]),a().getTableProps=Q(l().getTableProps,{instance:a()}),a().getTableBodyProps=Q(l().getTableBodyProps,{instance:a()}),Pe(l().useFinalInstance,a()),a()},Object.defineProperty(b,"__esModule",{value:!0})}))})(Fe,Fe.exports)),Fe.exports}var Ht;function Hr(){return Ht||(Ht=1,Pn.exports=Br()),Pn.exports}var fe=Hr();const ca={title:"Components/Table",component:ve,parameters:{controls:{disable:!0},actions:{argTypesRegex:"^on.*"}}},Y={selection:"52px",status:"120px",type:"120px",createdBy:"120px",lastModifiedOn:"160px"},Ne=()=>o.jsxs(ve,{children:[o.jsx(Re,{children:o.jsxs(oe,{children:[o.jsx(ge,{children:"first column"}),o.jsx(ge,{children:"second column"}),o.jsx(ge,{children:"third column"}),o.jsx(ge,{children:"fourth column"})]})}),o.jsxs(xe,{children:[o.jsxs(oe,{isHighlighted:!0,children:[o.jsx(te,{iconStart:o.jsx(xn,{color:"red"}),children:"cell 1"}),o.jsx(te,{children:"cell 2"}),o.jsx(te,{children:"cell 3"}),o.jsxs(te,{children:[o.jsx(Te,{variant:"ghost",icon:o.jsx(G,{})}),o.jsx(Te,{variant:"ghost",icon:o.jsx(Rn,{})})]})]}),o.jsxs(oe,{children:[o.jsx(te,{iconStart:o.jsx(xn,{color:"red"}),children:"cell 4"}),o.jsx(te,{children:"cell 5"}),o.jsx(te,{children:"cell 6"}),o.jsxs(te,{children:[o.jsx(Te,{variant:"ghost",icon:o.jsx(G,{})}),o.jsx(Te,{variant:"ghost",icon:o.jsx(Rn,{})})]})]}),o.jsxs(oe,{children:[o.jsx(te,{iconStart:o.jsx(xn,{color:"red"}),children:"cell 7"}),o.jsx(te,{children:"cell 8"}),o.jsx(te,{children:"cell 9"}),o.jsxs(te,{children:[o.jsx(Te,{variant:"ghost",icon:o.jsx(G,{})}),o.jsx(Te,{variant:"ghost",icon:o.jsx(Rn,{})})]})]})]})]}),Ze={render:()=>{const H=ae.useMemo(()=>Sn,[]),V=ae.useMemo(()=>[{Header:"Name",id:"name",accessor:_=>_.name.value,Cell:_=>{const{row:B}=_;return o.jsx(ze,{iconStart:B.original.name.icon,children:B.values.name})}},{Header:"Status",accessor:"status",customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:b,getTableBodyProps:g,headerGroups:k,rows:q,prepareRow:c}=fe.useTable({data:H,columns:V});return o.jsxs(ve,{...b(),children:[o.jsx(Re,{children:k.map(_=>o.jsx(oe,{..._.getHeaderGroupProps(),children:_.headers.map(B=>o.jsx(ge,{...B.getHeaderProps(),width:B.customWidth,children:B.render("Header")}))}))}),o.jsx(xe,{...g(),children:q.map(_=>(c(_),o.jsx(oe,{..._.getRowProps(),children:_.cells.map(B=>o.jsx(te,{...B.getCellProps(),width:B.column.customWidth,children:B.render("Cell")}))})))})]})},name:"Basic Table with React-Table"},en={render:()=>{const H=ae.useMemo(()=>Sn,[]),V=ae.useMemo(()=>[{id:"selection",Header:i=>o.jsx(Oe,{...i.getToggleAllRowsSelectedProps()}),Cell:i=>o.jsx(Oe,{...i.row.getToggleRowSelectedProps()}),customWidth:Y.selection},{Header:"Name",id:"name",accessor:i=>i.name.value,Cell:i=>{const{row:X}=i;return o.jsx(ze,{iconStart:X.original.name.icon,children:X.values.name})}},{Header:"Status",accessor:"status",customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:b,getTableBodyProps:g,headerGroups:k,rows:q,prepareRow:c,selectedFlatRows:_,state:{selectedRowIds:B}}=fe.useTable({data:H,columns:V},fe.useRowSelect);return o.jsxs(o.Fragment,{children:[o.jsxs(ve,{...b(),children:[o.jsx(Re,{children:k.map(i=>o.jsx(oe,{...i.getHeaderGroupProps(),children:i.headers.map(X=>o.jsx(ge,{...X.getHeaderProps(),width:X.customWidth,children:X.render("Header")}))}))}),o.jsx(xe,{...g(),children:q.map((i,X)=>(c(i),o.jsx(oe,{isSelected:i.isSelected,isHighlighted:X===1,...i.getRowProps(),children:i.cells.map(z=>o.jsx(te,{...z.getCellProps(),width:z.column.customWidth,children:z.render("Cell")}))})))})]}),o.jsx("section",{children:o.jsx("pre",{children:o.jsx("code",{className:"storyCode",children:JSON.stringify({selectedRowIds:B,"selectedFlatRows[].original":_.map(i=>i.original)},null,2)})})})]})},name:"Selectable Rows with React-Table"},nn={render:()=>{const H=ae.useMemo(()=>Sn,[]),V=ae.useMemo(()=>[{Header:"Name",id:"name",accessor:B=>B.name.value,Cell:B=>{const{row:i}=B;return o.jsx(ze,{iconStart:i.original.name.icon,children:i.values.name})}},{Header:"Status",accessor:"status",disableSortBy:!0,customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:b,getTableBodyProps:g,headerGroups:k,rows:q,prepareRow:c}=fe.useTable({data:H,columns:V,initialState:{sortBy:[{id:"lastModifiedOn",desc:!0}]},disableSortRemove:!0},fe.useSortBy),_=(B,i)=>{const X=i?"descending":"ascending";return o.jsx(We,{isSorted:B,direction:X})};return o.jsxs(ve,{...b(),children:[o.jsx(Re,{children:k.map(B=>o.jsx(oe,{...B.getHeaderGroupProps(),children:B.headers.map(i=>o.jsx(ge,{...i.getHeaderProps(i.getSortByToggleProps()),iconEnd:i.canSort&&_(i.isSorted,i.isSortedDesc),width:i.customWidth,children:i.render("Header")}))}))}),o.jsx(xe,{...g(),children:q.map(B=>(c(B),o.jsx(oe,{...B.getRowProps(),isHighlighted:B.values.name==="Highlight Row",children:B.cells.map(i=>o.jsx(te,{...i.getCellProps(),width:i.column.customWidth,children:i.render("Cell")}))})))})]})},name:"Sorting by Column with React-Table"},tn={render:()=>{const[H,V]=Ee.useState(5),[b,g]=Ee.useState(1),k=ae.useMemo(()=>Ie.slice((b-1)*H,Math.min(Ie.length,b*H)),[b,H]),q=ae.useMemo(()=>[{Header:"Name",id:"name",accessor:z=>z.name.value,Cell:z=>{const{row:F}=z;return o.jsx(ze,{iconStart:F.original.name.icon,children:F.values.name})}},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:c,getTableBodyProps:_,headerGroups:B,rows:i,prepareRow:X}=fe.useTable({data:k,columns:q});return o.jsxs(o.Fragment,{children:[o.jsxs(ve,{...c(),children:[o.jsx(Re,{children:B.map(z=>o.jsx(oe,{...z.getHeaderGroupProps(),children:z.headers.map(F=>o.jsx(ge,{...F.getHeaderProps(),width:F.customWidth,children:F.render("Header")}))}))}),o.jsx(xe,{..._(),children:i.map(z=>(X(z),o.jsx(oe,{...z.getRowProps(),children:z.cells.map(F=>o.jsx(te,{...F.getCellProps(),width:F.column.customWidth,children:F.render("Cell")}))})))})]}),o.jsx(De,{currentPage:b,totalNumberOfRows:Ie.length,rowsPerPage:H,onRowsPerPageChange:z=>V(z),onPageChange:z=>g(z)})]})},name:"Pagination with React-Table"},on={render:()=>{const H=ae.useMemo(()=>It,[]),V=ae.useMemo(()=>[{Header:"Name",id:"name",accessor:B=>B.name.value},{Header:"Status",accessor:"status",customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:b,getTableBodyProps:g,headerGroups:k,rows:q,prepareRow:c,toggleAllRowsExpanded:_}=fe.useTable({data:H,columns:V},fe.useExpanded);return Ee.useEffect(()=>{_()},[_]),o.jsxs(ve,{...b(),children:[o.jsx(Re,{children:k.map(B=>o.jsx(oe,{...B.getHeaderGroupProps(),children:B.headers.map(i=>o.jsx(ge,{...i.getHeaderProps(),width:i.customWidth,children:i.render("Header")}))}))}),o.jsx(xe,{...g(),children:q.map(B=>(c(B),o.jsx(oe,{...B.getRowProps(),children:B.cells.map(i=>o.jsx(te,{...i.getCellProps(),row:B,cell:i,isExpandableColumn:i.column.id==="name",iconStart:B.original[i.column.id]?.icon,width:i.column.customWidth,children:i.render("Cell")}))})))})]})},name:"Structured View with React-Table"},_e=()=>{const b=[],g=[];for(let k=1;k<=4;k++)b.push("column "+k);for(let k=1;k<=20;k++)g.push("row "+k);return o.jsxs(ve,{children:[o.jsx(Re,{isSticky:!0,children:o.jsx(oe,{children:b.map(k=>o.jsx(ge,{children:k},k))})}),o.jsx(xe,{children:g.map(k=>o.jsx(oe,{children:b.map(q=>o.jsx(te,{children:"this is a cell!"},k+q))},k))})]})},rn={render:()=>{const[H,V]=Ee.useState(5),[b,g]=Ee.useState(1),k=ae.useMemo(()=>Ie.slice((b-1)*H,Math.min(Ie.length,b*H)),[b,H]),q=ae.useMemo(()=>[{id:"selection",customWidth:Y.selection,Header:F=>o.jsx(Oe,{...F.getToggleAllRowsSelectedProps()}),Cell:F=>o.jsx(Oe,{...F.row.getToggleRowSelectedProps()})},{Header:"Name",id:"name",accessor:F=>F.name.value},{Header:"Status",accessor:"status",disableSortBy:!0,customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:c,getTableBodyProps:_,headerGroups:B,rows:i,prepareRow:X}=fe.useTable({data:k,columns:q,initialState:{sortBy:[{id:"lastModifiedOn",desc:!0}]},disableSortRemove:!0},fe.useSortBy,fe.useRowSelect),z=(F,de)=>{const Q=de?"descending":"ascending";return o.jsx(We,{isSorted:F,direction:Q})};return o.jsxs(o.Fragment,{children:[o.jsxs(ve,{...c(),children:[o.jsx(Re,{isSticky:!0,children:B.map(F=>o.jsx(oe,{...F.getHeaderGroupProps(),children:F.headers.map(de=>o.jsx(ge,{...de.getHeaderProps(de.getSortByToggleProps()),iconEnd:de.canSort&&z(de.isSorted,de.isSortedDesc),width:de.customWidth,children:de.render("Header")}))}))}),o.jsx(xe,{..._(),children:i.map((F,de)=>(X(F),o.jsx(oe,{isSelected:F.isSelected,isHighlighted:de===1,...F.getRowProps(),children:F.cells.map(Q=>o.jsx(te,{...Q.getCellProps(),iconStart:F.original[Q.column.id]?.icon,width:Q.column.customWidth,children:Q.render("Cell")}))})))})]}),o.jsx(De,{currentPage:b,totalNumberOfRows:Ie.length,rowsPerPage:H,onRowsPerPageChange:F=>V(F),onPageChange:F=>g(F)})]})},name:"All features except row expansion - flat data"},an={render:()=>{const H=ae.useMemo(()=>It,[]),V=ae.useMemo(()=>[{id:"selection",customWidth:Y.selection,Header:i=>o.jsx(Oe,{...i.getToggleAllRowsSelectedProps()}),Cell:i=>o.jsx(Oe,{...i.row.getToggleRowSelectedProps()})},{Header:"Name",id:"name",accessor:i=>i.name.value},{Header:"Status",accessor:"status",disableSortBy:!0,customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:b,getTableBodyProps:g,headerGroups:k,rows:q,prepareRow:c,toggleAllRowsExpanded:_}=fe.useTable({data:H,columns:V,initialState:{sortBy:[{id:"lastModifiedOn",desc:!0}]},disableSortRemove:!0},fe.useSortBy,fe.useExpanded,fe.useRowSelect),B=(i,X)=>{const z=X?"descending":"ascending";return o.jsx(We,{isSorted:i,direction:z})};return Ee.useEffect(()=>{_()},[_]),o.jsxs(ve,{...b(),children:[o.jsx(Re,{isSticky:!0,children:k.map(i=>o.jsx(oe,{...i.getHeaderGroupProps(),children:i.headers.map(X=>o.jsx(ge,{...X.getHeaderProps(X.getSortByToggleProps()),iconEnd:X.canSort&&B(X.isSorted,X.isSortedDesc),width:X.customWidth,children:X.render("Header")}))}))}),o.jsx(xe,{...g(),children:q.map((i,X)=>(c(i),o.jsx(oe,{isSelected:i.isSelected,isHighlighted:X===1,...i.getRowProps(),children:i.cells.map(z=>o.jsx(te,{...z.getCellProps(),row:i,cell:z,isExpandableColumn:z.column.id==="name",iconStart:i.original[z.column.id]?.icon,width:z.column.customWidth,children:z.render("Cell")}))})))})]})},name:"All features except pagination - nested data"};Ne.__docgenInfo={description:"",methods:[],displayName:"Basic"};_e.__docgenInfo={description:"",methods:[],displayName:"StickyHeader"};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`() => <Table>
        <TableHead>
            <TableRow>
                <TableHeadCell>first column</TableHeadCell>
                <TableHeadCell>second column</TableHeadCell>
                <TableHeadCell>third column</TableHeadCell>
                <TableHeadCell>fourth column</TableHeadCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow isHighlighted>
                <TableBodyCell iconStart={<Love color="red" />}>cell 1</TableBodyCell>
                <TableBodyCell>cell 2</TableBodyCell>
                <TableBodyCell>cell 3</TableBodyCell>
                <TableBodyCell>
                    <Button variant="ghost" icon={<Edit />} />
                    <Button variant="ghost" icon={<Visibility />} />
                </TableBodyCell>
            </TableRow>
            <TableRow>
                <TableBodyCell iconStart={<Love color="red" />}>cell 4</TableBodyCell>
                <TableBodyCell>cell 5</TableBodyCell>
                <TableBodyCell>cell 6</TableBodyCell>
                <TableBodyCell>
                    <Button variant="ghost" icon={<Edit />} />
                    <Button variant="ghost" icon={<Visibility />} />
                </TableBodyCell>
            </TableRow>
            <TableRow>
                <TableBodyCell iconStart={<Love color="red" />}>cell 7</TableBodyCell>
                <TableBodyCell>cell 8</TableBodyCell>
                <TableBodyCell>cell 9</TableBodyCell>
                <TableBodyCell>
                    <Button variant="ghost" icon={<Edit />} />
                    <Button variant="ghost" icon={<Visibility />} />
                </TableBodyCell>
            </TableRow>
        </TableBody>
    </Table>`,...Ne.parameters?.docs?.source}}};Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = React.useMemo(() => tableDataFlat, []);
    const columns = React.useMemo(() => [{
      Header: 'Name',
      id: 'name',
      accessor: row => row.name.value,
      Cell: cellInfo => {
        const {
          row
        } = cellInfo;
        return <IconTextIcon iconStart={row.original.name.icon}>
                                {row.values.name}
                            </IconTextIcon>;
      }
    }, {
      Header: 'Status',
      accessor: 'status',
      customWidth: columnsWidth.status
    }, {
      Header: 'Type',
      accessor: 'type',
      customWidth: columnsWidth.type
    }, {
      Header: 'Created By',
      accessor: 'createdBy',
      customWidth: columnsWidth.createdBy
    }, {
      Header: 'Last Modified On',
      accessor: 'lastModifiedOn',
      customWidth: columnsWidth.lastModifiedOn
    }], []);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable({
      data,
      columns
    });
    return <Table {...getTableProps()}>
                <TableHead>
                    {headerGroups.map(headerGroup =>
        // A key is included in headerGroup.getHeaderGroupProps
        // eslint-disable-next-line react/jsx-key
        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column =>
          // A key is included in column.getHeaderProps
          // eslint-disable-next-line react/jsx-key
          <TableHeadCell {...column.getHeaderProps()} width={column.customWidth}>
                                    {column.render('Header')}
                                </TableHeadCell>)}
                        </TableRow>)}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map(row => {
          prepareRow(row);
          return (
            // A key is included in row.getRowProps
            // eslint-disable-next-line react/jsx-key
            <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell =>
              // A key is included in cell.getCellProps
              // eslint-disable-next-line react/jsx-key
              <TableBodyCell {...cell.getCellProps()} width={cell.column.customWidth}>
                                        {cell.render('Cell')}
                                    </TableBodyCell>)}
                            </TableRow>
          );
        })}
                </TableBody>
            </Table>;
  },
  name: 'Basic Table with React-Table'
}`,...Ze.parameters?.docs?.source}}};en.parameters={...en.parameters,docs:{...en.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = React.useMemo(() => tableDataFlat, []);
    const columns = React.useMemo(() => [{
      id: 'selection',
      Header: header => <Checkbox {...header.getToggleAllRowsSelectedProps()} />,
      Cell: cellInfo => <Checkbox {...cellInfo.row.getToggleRowSelectedProps()} />,
      customWidth: columnsWidth.selection
    }, {
      Header: 'Name',
      id: 'name',
      accessor: row => row.name.value,
      Cell: cellInfo => {
        const {
          row
        } = cellInfo;
        return <IconTextIcon iconStart={row.original.name.icon}>
                                {row.values.name}
                            </IconTextIcon>;
      }
    }, {
      Header: 'Status',
      accessor: 'status',
      customWidth: columnsWidth.status
    }, {
      Header: 'Type',
      accessor: 'type',
      customWidth: columnsWidth.type
    }, {
      Header: 'Created By',
      accessor: 'createdBy',
      customWidth: columnsWidth.createdBy
    }, {
      Header: 'Last Modified On',
      accessor: 'lastModifiedOn',
      customWidth: columnsWidth.lastModifiedOn
    }], []);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      selectedFlatRows,
      state: {
        selectedRowIds
      }
    } = useTable({
      data,
      columns
    }, useRowSelect);
    return <>
                <Table {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map(headerGroup =>
          // A key is included in headerGroup.getHeaderGroupProps
          // eslint-disable-next-line react/jsx-key
          <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column =>
            // A key is included in column.getHeaderProps
            // eslint-disable-next-line react/jsx-key
            <TableHeadCell {...column.getHeaderProps()} width={column.customWidth}>
                                        {column.render('Header')}
                                    </TableHeadCell>)}
                            </TableRow>)}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row, id) => {
            prepareRow(row);
            return (
              // A key is included in row.getRowProps
              // eslint-disable-next-line react/jsx-key
              <TableRow isSelected={row.isSelected} isHighlighted={id === 1} {...row.getRowProps()}>
                                    {row.cells.map(cell =>
                // A key is included in cell.getCellProps
                // eslint-disable-next-line react/jsx-key
                <TableBodyCell {...cell.getCellProps()} width={cell.column.customWidth}>
                                            {cell.render('Cell')}
                                        </TableBodyCell>)}
                                </TableRow>
            );
          })}
                    </TableBody>
                </Table>
                <section>
                    <pre>
                        <code className="storyCode">
                            {JSON.stringify({
              selectedRowIds,
              'selectedFlatRows[].original': selectedFlatRows.map(d => d.original)
            }, null, 2)}
                        </code>
                    </pre>
                </section>
            </>;
  },
  name: 'Selectable Rows with React-Table'
}`,...en.parameters?.docs?.source}}};nn.parameters={...nn.parameters,docs:{...nn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = React.useMemo(() => tableDataFlat, []);
    const columns = React.useMemo(() => [{
      Header: 'Name',
      id: 'name',
      accessor: row => row.name.value,
      Cell: cellInfo => {
        const {
          row
        } = cellInfo;
        return <IconTextIcon iconStart={row.original.name.icon}>
                                {row.values.name}
                            </IconTextIcon>;
      }
    }, {
      Header: 'Status',
      accessor: 'status',
      disableSortBy: true,
      customWidth: columnsWidth.status
    }, {
      Header: 'Type',
      accessor: 'type',
      customWidth: columnsWidth.type
    }, {
      Header: 'Created By',
      accessor: 'createdBy',
      customWidth: columnsWidth.createdBy
    }, {
      Header: 'Last Modified On',
      accessor: 'lastModifiedOn',
      customWidth: columnsWidth.lastModifiedOn
    }], []);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable({
      data,
      columns,
      initialState: {
        sortBy: [{
          id: 'lastModifiedOn',
          desc: true
        }]
      },
      disableSortRemove: true
    }, useSortBy);
    const renderSortIndicator = (isSorted, isSortedDesc) => {
      const direction = isSortedDesc ? 'descending' : 'ascending';
      return <SortIndicator isSorted={isSorted} direction={direction} />;
    };
    return <Table {...getTableProps()}>
                <TableHead>
                    {headerGroups.map(headerGroup =>
        // A key is included in headerGroup.getHeaderGroupProps
        // eslint-disable-next-line react/jsx-key
        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column =>
          // A key is included in column.getHeaderProps
          // eslint-disable-next-line react/jsx-key
          <TableHeadCell {...column.getHeaderProps(column.getSortByToggleProps())} iconEnd={column.canSort && renderSortIndicator(column.isSorted, column.isSortedDesc)} width={column.customWidth}>
                                    {column.render('Header')}
                                </TableHeadCell>)}
                        </TableRow>)}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map(row => {
          prepareRow(row);
          return (
            // A key is included in row.getRowProps
            // eslint-disable-next-line react/jsx-key
            <TableRow {...row.getRowProps()} isHighlighted={row.values.name === 'Highlight Row'}>
                                {row.cells.map(cell =>
              // A key is included in cell.getCellProps
              // eslint-disable-next-line react/jsx-key
              <TableBodyCell {...cell.getCellProps()} width={cell.column.customWidth}>
                                        {cell.render('Cell')}
                                    </TableBodyCell>)}
                            </TableRow>
          );
        })}
                </TableBody>
            </Table>;
  },
  name: 'Sorting by Column with React-Table'
}`,...nn.parameters?.docs?.source}}};tn.parameters={...tn.parameters,docs:{...tn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const data = React.useMemo(() => tablePaginationDataFlat.slice((currentPage - 1) * rowsPerPage, Math.min(tablePaginationDataFlat.length, currentPage * rowsPerPage)), [currentPage, rowsPerPage]);
    const columns = React.useMemo(() => [{
      Header: 'Name',
      id: 'name',
      accessor: row => row.name.value,
      Cell: cellInfo => {
        const {
          row
        } = cellInfo;
        return <IconTextIcon iconStart={row.original.name.icon}>
                                {row.values.name}
                            </IconTextIcon>;
      }
    }, {
      Header: 'Type',
      accessor: 'type',
      customWidth: columnsWidth.type
    }, {
      Header: 'Created By',
      accessor: 'createdBy',
      customWidth: columnsWidth.createdBy
    }, {
      Header: 'Last Modified On',
      accessor: 'lastModifiedOn',
      customWidth: columnsWidth.lastModifiedOn
    }], []);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable({
      data,
      columns
    });
    return <>
                <Table {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map(headerGroup =>
          // A key is included in headerGroup.getHeaderGroupProps
          // eslint-disable-next-line react/jsx-key
          <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column =>
            // A key is included in column.getHeaderProps
            // eslint-disable-next-line react/jsx-key
            <TableHeadCell {...column.getHeaderProps()} width={column.customWidth}>
                                        {column.render('Header')}
                                    </TableHeadCell>)}
                            </TableRow>)}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {rows.map(row => {
            prepareRow(row);
            return (
              // A key is included in row.getRowProps
              // eslint-disable-next-line react/jsx-key
              <TableRow {...row.getRowProps()}>
                                    {row.cells.map(cell =>
                // A key is included in cell.getCellProps
                // eslint-disable-next-line react/jsx-key
                <TableBodyCell {...cell.getCellProps()} width={cell.column.customWidth}>
                                            {cell.render('Cell')}
                                        </TableBodyCell>)}
                                </TableRow>
            );
          })}
                    </TableBody>
                </Table>
                <TablePagination currentPage={currentPage} totalNumberOfRows={tablePaginationDataFlat.length} rowsPerPage={rowsPerPage} onRowsPerPageChange={prevRowsPerPage => setRowsPerPage(prevRowsPerPage)} onPageChange={page => setCurrentPage(page)} />
            </>;
  },
  name: 'Pagination with React-Table'
}`,...tn.parameters?.docs?.source}}};on.parameters={...on.parameters,docs:{...on.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = React.useMemo(() => tableDataNested, []);
    const columns = React.useMemo(() => [{
      Header: 'Name',
      id: 'name',
      accessor: row => row.name.value
    }, {
      Header: 'Status',
      accessor: 'status',
      customWidth: columnsWidth.status
    }, {
      Header: 'Type',
      accessor: 'type',
      customWidth: columnsWidth.type
    }, {
      Header: 'Created By',
      accessor: 'createdBy',
      customWidth: columnsWidth.createdBy
    }, {
      Header: 'Last Modified On',
      accessor: 'lastModifiedOn',
      customWidth: columnsWidth.lastModifiedOn
    }], []);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      toggleAllRowsExpanded
    } = useTable({
      data,
      columns
    }, useExpanded);
    useEffect(() => {
      toggleAllRowsExpanded();
    }, [toggleAllRowsExpanded]);
    return <Table {...getTableProps()}>
                <TableHead>
                    {headerGroups.map(headerGroup =>
        // A key is included in headerGroup.getHeaderGroupProps
        // eslint-disable-next-line react/jsx-key
        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column =>
          // A key is included in column.getHeaderProps
          // eslint-disable-next-line react/jsx-key
          <TableHeadCell {...column.getHeaderProps()} width={column.customWidth}>
                                    {column.render('Header')}
                                </TableHeadCell>)}
                        </TableRow>)}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map(row => {
          prepareRow(row);
          return (
            // A key is included in row.getRowProps
            // eslint-disable-next-line react/jsx-key
            <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell =>
              // A key is included in cell.getCellProps
              // eslint-disable-next-line react/jsx-key
              <TableBodyCell {...cell.getCellProps()} row={row} cell={cell} isExpandableColumn={cell.column.id === 'name'} iconStart={row.original[cell.column.id]?.icon} width={cell.column.customWidth}>
                                        {cell.render('Cell')}
                                    </TableBodyCell>)}
                            </TableRow>
          );
        })}
                </TableBody>
            </Table>;
  },
  name: 'Structured View with React-Table'
}`,...on.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`() => {
  const colNum = 4;
  const rowNum = 20;
  const cols = [];
  const rows = [];
  for (let i = 1; i <= colNum; i++) {
    cols.push('column ' + i);
  }
  for (let i = 1; i <= rowNum; i++) {
    rows.push('row ' + i);
  }
  return <Table>
            <TableHead isSticky>
                <TableRow>
                    {cols.map(col => <TableHeadCell key={col}>{col}</TableHeadCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => <TableRow key={row}>
                        {cols.map(col => <TableBodyCell key={row + col}>this is a cell!</TableBodyCell>)}
                    </TableRow>)}
            </TableBody>
        </Table>;
}`,..._e.parameters?.docs?.source}}};rn.parameters={...rn.parameters,docs:{...rn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const data = React.useMemo(() => tablePaginationDataFlat.slice((currentPage - 1) * rowsPerPage, Math.min(tablePaginationDataFlat.length, currentPage * rowsPerPage)), [currentPage, rowsPerPage]);
    const columns = React.useMemo(() => [{
      id: 'selection',
      customWidth: columnsWidth.selection,
      Header: header => <Checkbox {...header.getToggleAllRowsSelectedProps()} />,
      Cell: cellInfo => <Checkbox {...cellInfo.row.getToggleRowSelectedProps()} />
    }, {
      Header: 'Name',
      id: 'name',
      accessor: row => row.name.value
    }, {
      Header: 'Status',
      accessor: 'status',
      disableSortBy: true,
      customWidth: columnsWidth.status
    }, {
      Header: 'Type',
      accessor: 'type',
      customWidth: columnsWidth.type
    }, {
      Header: 'Created By',
      accessor: 'createdBy',
      customWidth: columnsWidth.createdBy
    }, {
      Header: 'Last Modified On',
      accessor: 'lastModifiedOn',
      customWidth: columnsWidth.lastModifiedOn
    }], []);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable({
      data,
      columns,
      initialState: {
        sortBy: [{
          id: 'lastModifiedOn',
          desc: true
        }]
      },
      disableSortRemove: true
    }, useSortBy, useRowSelect
    // UseFlexLayout
    );
    const renderSortIndicator = (isSorted, isSortedDesc) => {
      const direction = isSortedDesc ? 'descending' : 'ascending';
      return <SortIndicator isSorted={isSorted} direction={direction} />;
    };
    return <>
                <Table {...getTableProps()}>
                    <TableHead isSticky>
                        {headerGroups.map(headerGroup =>
          // A key is included in headerGroup.getHeaderGroupProps
          // eslint-disable-next-line react/jsx-key
          <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column =>
            // A key is included in column.getHeaderProps
            // eslint-disable-next-line react/jsx-key
            <TableHeadCell {...column.getHeaderProps(column.getSortByToggleProps())} iconEnd={column.canSort && renderSortIndicator(column.isSorted, column.isSortedDesc)} width={column.customWidth}>
                                        {column.render('Header')}
                                    </TableHeadCell>)}
                            </TableRow>)}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row, id) => {
            prepareRow(row);
            return (
              // A key is included in row.getRowProps
              // eslint-disable-next-line react/jsx-key
              <TableRow isSelected={row.isSelected} isHighlighted={id === 1} {...row.getRowProps()}>
                                    {row.cells.map(cell =>
                // A key is included in cell.getCellProps
                // eslint-disable-next-line react/jsx-key
                <TableBodyCell {...cell.getCellProps()} iconStart={row.original[cell.column.id]?.icon} width={cell.column.customWidth}>
                                            {cell.render('Cell')}
                                        </TableBodyCell>)}
                                </TableRow>
            );
          })}
                    </TableBody>
                </Table>
                <TablePagination currentPage={currentPage} totalNumberOfRows={tablePaginationDataFlat.length} rowsPerPage={rowsPerPage} onRowsPerPageChange={prevRowsPerPage => setRowsPerPage(prevRowsPerPage)} onPageChange={page => setCurrentPage(page)} />
            </>;
  },
  name: 'All features except row expansion - flat data'
}`,...rn.parameters?.docs?.source}}};an.parameters={...an.parameters,docs:{...an.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = React.useMemo(() => tableDataNested, []);
    const columns = React.useMemo(() => [{
      id: 'selection',
      customWidth: columnsWidth.selection,
      Header: header => <Checkbox {...header.getToggleAllRowsSelectedProps()} />,
      Cell: cellInfo => <Checkbox {...cellInfo.row.getToggleRowSelectedProps()} />
    }, {
      Header: 'Name',
      id: 'name',
      accessor: row => row.name.value
    }, {
      Header: 'Status',
      accessor: 'status',
      disableSortBy: true,
      customWidth: columnsWidth.status
    }, {
      Header: 'Type',
      accessor: 'type',
      customWidth: columnsWidth.type
    }, {
      Header: 'Created By',
      accessor: 'createdBy',
      customWidth: columnsWidth.createdBy
    }, {
      Header: 'Last Modified On',
      accessor: 'lastModifiedOn',
      customWidth: columnsWidth.lastModifiedOn
    }], []);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      toggleAllRowsExpanded
    } = useTable({
      data,
      columns,
      initialState: {
        sortBy: [{
          id: 'lastModifiedOn',
          desc: true
        }]
      },
      disableSortRemove: true
    }, useSortBy, useExpanded, useRowSelect
    // UseFlexLayout
    );
    const renderSortIndicator = (isSorted, isSortedDesc) => {
      const direction = isSortedDesc ? 'descending' : 'ascending';
      return <SortIndicator isSorted={isSorted} direction={direction} />;
    };
    useEffect(() => {
      toggleAllRowsExpanded();
    }, [toggleAllRowsExpanded]);
    return <Table {...getTableProps()}>
                <TableHead isSticky>
                    {headerGroups.map(headerGroup =>
        // A key is included in headerGroup.getHeaderGroupProps
        // eslint-disable-next-line react/jsx-key
        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column =>
          // A key is included in column.getHeaderProps
          // eslint-disable-next-line react/jsx-key
          <TableHeadCell {...column.getHeaderProps(column.getSortByToggleProps())} iconEnd={column.canSort && renderSortIndicator(column.isSorted, column.isSortedDesc)} width={column.customWidth}>
                                    {column.render('Header')}
                                </TableHeadCell>)}
                        </TableRow>)}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map((row, id) => {
          prepareRow(row);
          return (
            // A key is included in row.getRowProps
            // eslint-disable-next-line react/jsx-key
            <TableRow isSelected={row.isSelected} isHighlighted={id === 1} {...row.getRowProps()}>
                                {row.cells.map(cell =>
              // A key is included in cell.getCellProps
              // eslint-disable-next-line react/jsx-key
              <TableBodyCell {...cell.getCellProps()} row={row} cell={cell} isExpandableColumn={cell.column.id === 'name'} iconStart={row.original[cell.column.id]?.icon} width={cell.column.customWidth}>
                                        {cell.render('Cell')}
                                    </TableBodyCell>)}
                            </TableRow>
          );
        })}
                </TableBody>
            </Table>;
  },
  name: 'All features except pagination - nested data'
}`,...an.parameters?.docs?.source}}};const pa=["Basic","BasicReactTable","SelectableRows","SortingByColumn","Pagination","StructuredView","StickyHeader","KitchenSinkFlat","KitchenSinkNested"];export{Ne as Basic,Ze as BasicReactTable,rn as KitchenSinkFlat,an as KitchenSinkNested,tn as Pagination,en as SelectableRows,nn as SortingByColumn,_e as StickyHeader,on as StructuredView,pa as __namedExportsOrder,ca as default};
