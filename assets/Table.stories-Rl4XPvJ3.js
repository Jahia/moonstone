import{j as o,R as ae,b as gr,r as Ee}from"./iframe-DnEO7nHG.js";/* empty css                  */import{B as Te}from"./Button-D5ICsJ0U.js";import{S as G}from"./Edit-DcDGKaSd.js";import{S as me}from"./FileImage-CLE_WEbV.js";import{S as ye}from"./Lock-dgFPRrse.js";import{C}from"./Chip-D3cTWq9J.js";import{a as fr,b as hr,d as yr,f as vr,e as wr,S as br,i as Me,h as xr,c as Sn,g as K,j as bt}from"./Visibility-D3If9bZ-.js";import{S as Qe}from"./Person-BRmNZZGn.js";import{S as Cn}from"./Build-DSUF6GSm.js";import{c as ue}from"./clsx-B-dksMZM.js";import{c as st,C as Oe}from"./Checkbox-Bn6ssA40.js";import{T as lt}from"./Typography-BPRzLVGf.js";import{S as Rr}from"./ChevronDown-BKJx4JWo.js";import{S as Mn}from"./ChevronRight-DbLXUeNS.js";import{I as ze}from"./IconTextIcon-DRoDb08W.js";import{S as xt}from"./Love-D-n00w8m.js";import{D as Pr}from"./TreeViewMenu-CLwlO6z-.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               */import"./Loader-DiM4oYUW.js";import"./Tag-D2ZcJWXk.js";import"./Cancel-B05SPb1H.js";import"./MenuItem-CR5CUbBl.js";import"./SearchInput-DdnWTnCr.js";import"./BaseInput-MS69sLl1.js";import"./Search-C0-jo4vK.js";import"./onArrowNavigation-CltwoEwZ.js";import"./ListItem-DvI8PPNG.js";import"./TreeView-_m3nhhFB.js";import"./CheckboxUnchecked-Cf7unN2M.js";import"./useAccessibleClick-Bdvd2I0f.js";import"./Separator-C0vpUDCM.js";const We=({direction:H="descending",isSorted:V=!1,className:b,...g})=>{const k=ue("moonstone-SortIndicator",{"moonstone-SortIndicator-sorted":V},b);if(H==="descending")return o.jsx(fr,{...g,"aria-label":"Icon for sorting in descending order",className:k});if(H==="ascending")return o.jsx(hr,{...g,"aria-label":"Icon for sorting in ascending order",className:k})};We.displayName="SortIndicator";try{We.displayName="SortIndicator",We.__docgenInfo={description:"",displayName:"SortIndicator",props:{direction:{defaultValue:{value:"descending"},description:"Whether to render the sort indicator ascending/up arrow or descending/down arrow",name:"direction",required:!1,type:{name:"enum",value:[{value:'"ascending"'},{value:'"descending"'}]}},isSorted:{defaultValue:{value:"false"},description:"Define if the column is currently sorted",name:"isSorted",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ve=({component:H="table",className:V,children:b,...g})=>ae.createElement(H,{className:ue("moonstone-Table","flexCol_nowrap",V),...g},b);ve.displayName="Table";try{ve.displayName="Table",ve.__docgenInfo={description:"",displayName:"Table",props:{component:{defaultValue:{value:"table"},description:"Which html element to render the table as",name:"component",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements to be provided to the Table (e.g., Table Rows, Headers, and Cells)",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const xe=({component:H="tbody",className:V,children:b,...g})=>ae.createElement(H,{className:ue("moonstone-TableBody",V),...g},b);xe.displayName="TableBody";try{xe.displayName="TableBody",xe.__docgenInfo={description:"",displayName:"TableBody",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},component:{defaultValue:{value:"tbody"},description:"Name of HTML element to render in the DOM for this component",name:"component",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements provided",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Re=({isSticky:H=!1,component:V="thead",className:b,children:g,...k})=>ae.createElement(V,{className:ue("moonstone-tableHead",H&&"moonstone-tableHead-sticky",b),...k},g);Re.displayName="TableHead";try{Re.displayName="TableHead",Re.__docgenInfo={description:"",displayName:"TableHead",props:{isSticky:{defaultValue:{value:"false"},description:`Determines whether the table header row should stay sticky while the
table content is being scrolled through`,name:"isSticky",required:!1,type:{name:"boolean"}},component:{defaultValue:{value:"thead"},description:"Name of HTML element to render in the DOM for this component",name:"component",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Any additional class names to apply to the component",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements provided",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Sr=({className:H,component:V="tr",hasMultipleLines:b=!1,isSelected:g=!1,isHighlighted:k=!1,children:q,...c},_)=>ae.createElement(V,{className:ue("flexRow","moonstone-TableRow","alignCenter",b&&"moonstone-TableRow-multipleLines",g&&"moonstone-TableRow-selected",k&&"moonstone-TableRow-highlighted",H),tabIndex:0,...c,ref:_},q),oe=ae.forwardRef(Sr);oe.displayName="TableRow";try{oe.displayName="TableRow",oe.__docgenInfo={description:"",displayName:"TableRow",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},component:{defaultValue:{value:"tr"},description:"Name of HTML element to render in the DOM for this component",name:"component",required:!1,type:{name:'"string;"'}},hasMultipleLines:{defaultValue:{value:"false"},description:"Whether the cell height should be increased to show more than 1 line",name:"hasMultipleLines",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:{value:"false"},description:"If true, then the row is selected",name:"isSelected",required:!1,type:{name:"boolean"}},isHighlighted:{defaultValue:{value:"false"},description:`If true, then the row is highlighted. The background color of the row
will be in contrast to the normal row color and supported components
nested within the row will have their style change correspondingly`,name:"isHighlighted",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The children elements",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Cr=({iconStart:H,iconEnd:V,className:b,children:g,...k},q)=>o.jsxs("div",{ref:q,className:ue("moonstone-TableCell","flexRow_nowrap","alignCenter",b),...k,children:[H&&o.jsx(H.type,{...H.props,className:ue("moonstone-icon_default",H.props.className)}),g,V&&o.jsx(V.type,{...V.props,className:ue("moonstone-icon_default",V.props.className)})]}),Ve=ae.forwardRef(Cr);Ve.displayName="FoundationTableCell";try{FoundationTableCell.displayName="FoundationTableCell",FoundationTableCell.__docgenInfo={description:"",displayName:"FoundationTableCell",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Define the width of the cell, if no width is set the column takes all space available. (e.g. '120px')",name:"width",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children elements",name:"children",required:!1,type:{name:"ReactNode"}},cell:{defaultValue:null,description:"Cell object returned by react-table instance",name:"cell",required:!1,type:{name:"Cell<{}, any>"}},row:{defaultValue:null,description:"Row object returned by react-table instance",name:"row",required:!1,type:{name:"UseExpandedRowProps<Row<{}>>"}},iconStart:{defaultValue:null,description:"Icon to render at the start/left side of the cell",name:"iconStart",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconEnd:{defaultValue:null,description:"Icon to render at the end/right side of the cell",name:"iconEnd",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},component:{defaultValue:null,description:"Name of the cell HTML element to render in the DOM",name:"component",required:!1,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}},textAlign:{defaultValue:null,description:"How to align content horizontally within the table cell",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},verticalAlign:{defaultValue:null,description:"How to align content vertically within the table cell",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"top"'},{value:'"bottom"'}]}},isExpandableColumn:{defaultValue:null,description:`If true, it indicates that the rows in this column have nested sub-rows and
that they should be displayed in a tree-like view`,name:"isExpandableColumn",required:!1,type:{name:"boolean"}},isScrollable:{defaultValue:null,description:"Indicates if the cell is scrollable on hover",name:"isScrollable",required:!1,type:{name:"boolean"}}}}}catch{}const Tr=({component:H="td",textAlign:V="left",verticalAlign:b="center",className:g,iconStart:k,iconEnd:q,isExpandableColumn:c,width:_,row:B,children:i,isScrollable:X,...z},F)=>{const Q=B?.depth*20,he=X?"moonstone-tableCellContent":"",Pe=()=>o.jsx(ze,{component:"div",iconStart:k,iconEnd:q,typographyProps:{className:ue(he,"flexFluid")},children:i}),Se=()=>c&&B?.canExpand?o.jsxs(Ve,{ref:F,...B?.getToggleRowExpandedProps({style:{marginLeft:`${Q}px`}}),children:[B?.isExpanded?o.jsx(Rr,{className:"moonstone-marginRightNano"}):o.jsx(Mn,{className:"moonstone-marginRightNano"}),Pe()]}):c&&!B?.canExpand?o.jsx(Ve,{ref:F,style:{marginLeft:`${Q+20}px`},children:Pe()}):o.jsx(Ve,{ref:F,children:Pe()});return o.jsx(lt,{className:ue("moonstone-tableBodyCell","textAlign"+st(V),"moonstone-verticalAlign"+st(b),{flexFluid:typeof _>"u"},g),component:H,variant:"body",style:{width:_},...z,children:Se()})},ne=ae.forwardRef(Tr);ne.displayName="TableBodyCell";try{ne.displayName="TableBodyCell",ne.__docgenInfo={description:"",displayName:"TableBodyCell",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Define the width of the cell, if no width is set the column takes all space available. (e.g. '120px')",name:"width",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children elements",name:"children",required:!1,type:{name:"ReactNode"}},cell:{defaultValue:null,description:"Cell object returned by react-table instance",name:"cell",required:!1,type:{name:"Cell<{}, any>"}},row:{defaultValue:null,description:"Row object returned by react-table instance",name:"row",required:!1,type:{name:"UseExpandedRowProps<Row<{}>>"}},iconStart:{defaultValue:null,description:"Icon to render at the start/left side of the cell",name:"iconStart",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconEnd:{defaultValue:null,description:"Icon to render at the end/right side of the cell",name:"iconEnd",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},component:{defaultValue:{value:"td"},description:"Name of the cell HTML element to render in the DOM",name:"component",required:!1,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}},textAlign:{defaultValue:{value:"left"},description:"How to align content horizontally within the table cell",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},verticalAlign:{defaultValue:{value:"center"},description:"How to align content vertically within the table cell",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"top"'},{value:'"bottom"'}]}},isExpandableColumn:{defaultValue:null,description:`If true, it indicates that the rows in this column have nested sub-rows and
that they should be displayed in a tree-like view`,name:"isExpandableColumn",required:!1,type:{name:"boolean"}},isScrollable:{defaultValue:null,description:"Indicates if the cell is scrollable on hover",name:"isScrollable",required:!1,type:{name:"boolean"}}}}}catch{}const ge=({component:H="th",width:V,textAlign:b="left",verticalAlign:g="center",className:k,iconStart:q,iconEnd:c,children:_,...B})=>o.jsx(lt,{...B,className:ue({flexFluid:typeof V>"u"},"textAlign"+st(b),"moonstone-verticalAlign"+st(g),k),component:H,weight:"bold",variant:"body",style:{...B.style,width:V},children:o.jsx(Ve,{iconStart:q,iconEnd:c,children:_})});ge.displayName="TableHeadCell";try{ge.displayName="TableHeadCell",ge.__docgenInfo={description:"",displayName:"TableHeadCell",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableDataCellElement> | Ref<HTMLTableHeaderCellElement>"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},component:{defaultValue:{value:"th"},description:"Name of the cell HTML element to render in the DOM",name:"component",required:!1,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}},iconStart:{defaultValue:null,description:"Icon to render at the start/left side of the cell",name:"iconStart",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconEnd:{defaultValue:null,description:"Icon to render at the end/right side of the cell",name:"iconEnd",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},textAlign:{defaultValue:{value:"left"},description:"How to align content horizontally within the table cell",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},verticalAlign:{defaultValue:{value:"center"},description:"How to align content vertically within the table cell",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"top"'},{value:'"bottom"'}]}},width:{defaultValue:null,description:"Define the width of the cell, if no width is set the column takes all space available. (e.g. '120px')",name:"width",required:!1,type:{name:"string"}},isExpandableColumn:{defaultValue:null,description:`If true, it indicates that the rows in this column have nested sub-rows and
that they should be displayed in a tree-like view`,name:"isExpandableColumn",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"Row object returned by react-table instance",name:"row",required:!1,type:{name:"UseExpandedRowProps<Row<{}>>"}},cell:{defaultValue:null,description:"Cell object returned by react-table instance",name:"cell",required:!1,type:{name:"Cell<{}, any>"}},children:{defaultValue:null,description:"Children elements",name:"children",required:!1,type:{name:"ReactNode"}},isScrollable:{defaultValue:null,description:"Indicates if the cell is scrollable on hover",name:"isScrollable",required:!1,type:{name:"boolean"}}}}}catch{}const Tn="moonstone-tablePagination",Ye="moonstone-marginRight32",jn="moonstone-marginRight16",De=({className:H,label:V={rowsPerPage:"Rows per page",of:"of"},rowsPerPage:b=10,rowsPerPageOptions:g=[5,10,25],totalNumberOfRows:k,currentPage:q,onRowsPerPageChange:c,onPageChange:_,...B})=>{if(q<1)throw new Error("currentPage must always be >= 1");if(g.indexOf(b)===-1)throw new Error("rowsPerPage must exist in rowsPerPageOptions");const i=Math.ceil(k/b),X=(q-1)*b+1,z=Math.min(k,q*b);return o.jsxs("div",{className:ue(Tn,"flexRow_reverse","alignCenter",H),...B,children:[o.jsx(lt,{variant:"caption",children:V.rowsPerPage}),o.jsx(Pr,{className:ue("alignCenter",jn),size:"small","data-sel-role":"table-pagination-dropdown-rows-per-page",data:g.map(F=>({label:F.toString(),value:F.toString()})),value:b.toString(),label:b.toString(),onChange:(F,de)=>c(parseInt(de.value,10))}),o.jsx(lt,{variant:"caption",className:ue(Tn,"flexRow_reverse","alignCenter",Ye),"data-sel-role":"table-pagination-total-rows",children:`${X}-${z} ${V.of} ${k}`}),o.jsx(Te,{className:ue(Ye),icon:o.jsx(yr,{}),variant:"ghost","data-sel-role":"table-pagination-button-first-page",isDisabled:q===1,onClick:()=>_(1)}),o.jsx(Te,{className:ue(Ye),icon:o.jsx(vr,{}),variant:"ghost","data-sel-role":"table-pagination-button-previous-page",isDisabled:q===1,onClick:()=>_(q-1)}),o.jsx(Te,{className:ue(Ye),icon:o.jsx(Mn,{}),variant:"ghost","data-sel-role":"table-pagination-button-next-page",isDisabled:i===q,onClick:()=>_(q+1)}),o.jsx(Te,{className:ue(jn),icon:o.jsx(wr,{}),variant:"ghost","data-sel-role":"table-pagination-button-last-page",isDisabled:i===q,onClick:()=>_(i)})]})};De.displayName="TablePagination";try{De.displayName="TablePagination",De.__docgenInfo={description:"",displayName:"TablePagination",props:{className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},rowsPerPage:{defaultValue:{value:"10"},description:"Current rows per page",name:"rowsPerPage",required:!1,type:{name:"number"}},rowsPerPageOptions:{defaultValue:{value:"[5, 10, 25]"},description:"Choices for rows per pages value",name:"rowsPerPageOptions",required:!1,type:{name:"number[]"}},onRowsPerPageChange:{defaultValue:null,description:`Callback when rowsPerPage value changes
@param rowsPerPage`,name:"onRowsPerPageChange",required:!0,type:{name:"(rowsPerPage: number) => void"}},totalNumberOfRows:{defaultValue:null,description:"How many rows there will be in total for all the pages currently available (total number of records to display)",name:"totalNumberOfRows",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"Number of the current page",name:"currentPage",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:`Callback when page changes
@param page`,name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},label:{defaultValue:{value:`{
        rowsPerPage: 'Rows per page',
        of: 'of'
    }`},description:"Pagination labels",name:"label",required:!1,type:{name:"{ rowsPerPage: string; of: string; }"}}}}}catch{}const Pt=[{name:{value:"Demo Roles and Users",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"Highlight Row",icon:o.jsx(me,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"Search Results",icon:o.jsx(me,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"Corporate Responsibility",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"How to Use This Demo",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Our Companies",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"}],In=[{name:{value:"Demo Roles and Users",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"Highlight Row",icon:o.jsx(me,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"About",icon:o.jsx(me,{})},type:"Page",status:o.jsx(C,{icon:o.jsx(Cn,{})}),createdBy:"root",lastModifiedOn:"Jan. 6, 2016",subRows:[{name:{value:"Testing",icon:o.jsx(br,{})},type:"Page",createdBy:"root",lastModifiedOn:"Jan. 1, 2021"},{name:{value:"History",icon:o.jsx(me,{})},type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016",subRows:[{name:{value:"banner",icon:o.jsx(Me,{})},type:"Banner",createdBy:"root",lastModifiedOn:"Feb. 4, 2016"},{name:{value:"Baumquist Joins Digitall As Controller and This is a Super, Super, Super Long Name",icon:o.jsx(Me,{})},type:"News Entry",createdBy:"root",lastModifiedOn:"Jan. 21, 2016"}]},{name:{value:"Leadership",icon:o.jsx(me,{})},type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016",subRows:[{name:{value:"list-of-people",icon:o.jsx(xr,{})},type:"List of People",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Aschel",icon:o.jsx(Qe,{})},type:"Person portrait",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Hedgebottom",icon:o.jsx(Qe,{})},type:"Person portrait",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Singh",icon:o.jsx(Qe,{})},type:"Person portrait",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Baumquest",icon:o.jsx(Qe,{})},type:"Person portrait",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"banner",icon:o.jsx(Sn,{})},type:"Banner",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"}]}]},{name:{value:"Search Results",icon:o.jsx(me,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"Corporate Responsibility",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"How to Use This Demo",icon:o.jsx(Sn,{})},status:o.jsx(C,{icon:o.jsx(Cn,{})}),type:"Highlight",createdBy:"root",lastModifiedOn:"Jan. 26, 2016",subRows:[{name:{value:"Latest Press Releases",icon:o.jsx(Me,{})},type:"Press Release Search",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"spacer",icon:o.jsx(Me,{})},type:"Spacer",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Global Presence",icon:o.jsx(Me,{})},type:"Headline",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"}]},{name:{value:"highlights",icon:o.jsx(me,{})},type:"Highlight",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"Our Companies",icon:o.jsx(me,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Highlight",createdBy:"root",lastModifiedOn:"Jan. 26, 2016",subRows:[{name:{value:"slider",icon:o.jsx(Me,{})},type:"Slider",createdBy:"root",lastModifiedOn:"Jan. 26, 2016",subRows:[{name:{value:"Events"},type:"Event Tab Query",createdBy:"root",lastModifiedOn:"Jan. 26, 2016",subRows:[{name:{value:"Image-from-the-document-manager",icon:o.jsx(Me,{})},type:"Image (from the Document Manager)",createdBy:"root",lastModifiedOn:"Jan. 26, 2016",subRows:[{name:{value:"Area-1",icon:o.jsx(Me,{})},type:"Section / Container / Row / Grid",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"}]}]}]}]}],Ie=[{name:{value:"1 Demo Roles and Users",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"2 Highlight Row",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"3 Search Results",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"4 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"5 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"6 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"7 Demo Roles and Users",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"8 Highlight Row",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"9 Search Results",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"10 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"11 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"12 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"13 Demo Roles and Users",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"14 Highlight Row",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"15 Search Results",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"16 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"17 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"18 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"19 Demo Roles and Users",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"20 Highlight Row",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"21 Search Results",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"22 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"23 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"24 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"25 Demo Roles and Users",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Aug. 12, 2016"},{name:{value:"26 Highlight Row",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 6, 2016"},{name:{value:"27 Search Results",icon:o.jsx(K,{})},status:o.jsxs(o.Fragment,{children:[o.jsx(C,{color:"danger",icon:o.jsx(ye,{})})," ",o.jsx(C,{color:"warning",icon:o.jsx(G,{})})]}),type:"Page",createdBy:"system",lastModifiedOn:"Feb. 29, 2016"},{name:{value:"28 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"29 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"30 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"31 Corporate Responsibility",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"32 How to Use This Demo",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"},{name:{value:"33 Our Companies",icon:o.jsx(K,{})},status:o.jsx(C,{color:"warning",icon:o.jsx(G,{})}),type:"Page",createdBy:"root",lastModifiedOn:"Jan. 26, 2016"}];var Rt={exports:{}},Fe={exports:{}},jr=Fe.exports,Bn;function Br(){return Bn||(Bn=1,(function(H,V){(function(b,g){g(V,gr())})(jr,(function(b,g){function k(e,t,n,r,s,a,l){try{var u=e[a](l),d=u.value}catch(p){return void n(p)}u.done?t(d):Promise.resolve(d).then(r,s)}function q(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function l(d){k(a,r,s,l,u,"next",d)}function u(d){k(a,r,s,l,u,"throw",d)}l(void 0)}))}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(e==null)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}function B(e){var t=(function(n,r){if(typeof n!="object"||n===null)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var a=s.call(n,r);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)})(e,"string");return typeof t=="symbol"?t:String(t)}g=g&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g;var i={init:"init"},X=function(e){var t=e.value;return t===void 0?"":t},z=function(){return g.createElement(g.Fragment,null," ")},F={Cell:X,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};function de(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(r,s){var a=s.style,l=s.className;return r=c({},r,{},_(s,["style","className"])),a&&(r.style=r.style?c({},r.style||{},{},a||{}):a),l&&(r.className=r.className?r.className+" "+l:l),r.className===""&&delete r.className,r}),{})}var Q=function(e,t){return t===void 0&&(t={}),function(n){return n===void 0&&(n={}),[].concat(e,[n]).reduce((function(r,s){return(function a(l,u,d){return typeof u=="function"?a({},u(l,d)):Array.isArray(u)?de.apply(void 0,[l].concat(u)):de(l,u)})(r,s,c({},t,{userProps:n}))}),{})}},he=function(e,t,n,r){return n===void 0&&(n={}),e.reduce((function(s,a){return a(s,n)}),t)},Pe=function(e,t,n){return n===void 0&&(n={}),e.forEach((function(r){r(t,n)}))};function Se(e,t,n,r){e.findIndex((function(s){return s.pluginName===n})),t.forEach((function(s){e.findIndex((function(a){return a.pluginName===s}))}))}function je(e,t){return typeof e=="function"?e(t):e}function ee(e){var t=g.useRef();return t.current=e,g.useCallback((function(){return t.current}),[])}var St=typeof document<"u"?g.useLayoutEffect:g.useEffect;function we(e,t){var n=g.useRef(!1);St((function(){n.current&&e(),n.current=!0}),t)}function it(e,t,n){return n===void 0&&(n={}),function(r,s){s===void 0&&(s={});var a=typeof r=="string"?t[r]:r;if(a===void 0)throw console.info(t),new Error("Renderer Error ☝️");return Ct(a,c({},e,{column:t},n,{},s))}}function Ct(e,t){return(function(r){return typeof r=="function"&&(s=Object.getPrototypeOf(r)).prototype&&s.prototype.isReactComponent;var s})(n=e)||typeof n=="function"||(function(r){return typeof r=="object"&&typeof r.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(r.$$typeof.description)})(n)?g.createElement(e,t):e;var n}function Tt(e,t,n){return n===void 0&&(n=0),e.map((function(r){return Bt(r=c({},r,{parent:t,depth:n})),r.columns&&(r.columns=Tt(r.columns,r,n+1)),r}))}function jt(e){return Et(e,"columns")}function Bt(e){var t=e.id,n=e.accessor,r=e.Header;if(typeof n=="string"){t=t||n;var s=n.split(".");n=function(a){return(function(l,u,d){if(!u)return l;var p,v=typeof u=="function"?u:JSON.stringify(u),f=Mt.get(v)||(function(){var h=(function(m){return(function y(x,R){if(R===void 0&&(R=[]),Array.isArray(x))for(var T=0;T<x.length;T+=1)y(x[T],R);else R.push(x);return R})(m).map((function(y){return String(y).replace(".","_")})).join(".").replace(On,".").replace(Wn,"").split(".")})(u);return Mt.set(v,h),h})();try{p=f.reduce((function(h,m){return h[m]}),l)}catch{}return p!==void 0?p:d})(a,s)}}if(!t&&typeof r=="string"&&r&&(t=r),!t&&e.columns)throw console.error(e),new Error('A column ID (or unique "Header" value) is required!');if(!t)throw console.error(e),new Error("A column ID (or string accessor) is required!");return Object.assign(e,{id:t,accessor:n}),e}function Ht(e,t){if(!t)throw new Error;return Object.assign(e,c({Header:z,Footer:z},F,{},t,{},e)),Object.assign(e,{originalWidth:e.width}),e}function En(e,t,n){n===void 0&&(n=function(){return{}});for(var r=[],s=e,a=0,l=function(){return a++},u=function(){var d={headers:[]},p=[],v=s.some((function(f){return f.parent}));s.forEach((function(f){var h,m=[].concat(p).reverse()[0];v&&(f.parent?h=c({},f.parent,{originalId:f.parent.id,id:f.parent.id+"_"+l(),headers:[f]},n(f)):h=Ht(c({originalId:f.id+"_placeholder",id:f.id+"_placeholder_"+l(),placeholderOf:f,headers:[f]},n(f)),t),m&&m.originalId===h.originalId?m.headers.push(f):p.push(h)),d.headers.push(f)})),r.push(d),s=p};s.length;)u();return r.reverse()}var Mt=new Map;function Ce(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0;r<t.length;r+=1)if(t[r]!==void 0)return t[r]}function It(e){if(typeof e=="function")return e}function Et(e,t){var n=[];return(function r(s){s.forEach((function(a){a[t]?r(a[t]):n.push(a)}))})(e),n}function Ot(e,t){var n=t.manualExpandedKey,r=t.expanded,s=t.expandSubRows,a=s===void 0||s,l=[];return e.forEach((function(u){return(function d(p,v){v===void 0&&(v=!0),p.isExpanded=p.original&&p.original[n]||r[p.id],p.canExpand=p.subRows&&!!p.subRows.length,v&&l.push(p),p.subRows&&p.subRows.length&&p.isExpanded&&p.subRows.forEach((function(f){return d(f,a)}))})(u)})),l}function ke(e,t,n){return It(e)||t[e]||n[e]||n.text}function ut(e,t,n){return e?e(t,n):t===void 0}function Le(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")}var dt=null,On=/\[/g,Wn=/\]/g,kn=function(e){return c({role:"table"},e)},An=function(e){return c({role:"rowgroup"},e)},Gn=function(e,t){var n=t.column;return c({key:"header_"+n.id,colSpan:n.totalVisibleHeaderCount,role:"columnheader"},e)},Fn=function(e,t){var n=t.column;return c({key:"footer_"+n.id,colSpan:n.totalVisibleHeaderCount},e)},Nn=function(e,t){return c({key:"headerGroup_"+t.index,role:"row"},e)},_n=function(e,t){return c({key:"footerGroup_"+t.index},e)},Vn=function(e,t){return c({key:"row_"+t.row.id,role:"row"},e)},Dn=function(e,t){var n=t.cell;return c({key:"cell_"+n.row.id+"_"+n.column.id,role:"cell"},e)};function zn(){return{useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[kn],getTableBodyProps:[An],getHeaderGroupProps:[Nn],getFooterGroupProps:[_n],getHeaderProps:[Gn],getFooterProps:[Fn],getRowProps:[Vn],getCellProps:[Dn],useFinalInstance:[]}}i.resetHiddenColumns="resetHiddenColumns",i.toggleHideColumn="toggleHideColumn",i.setHiddenColumns="setHiddenColumns",i.toggleHideAllColumns="toggleHideAllColumns";var Wt=function(e){e.getToggleHiddenProps=[Ln],e.getToggleHideAllColumnsProps=[qn],e.stateReducers.push(Jn),e.useInstanceBeforeDimensions.push(Un),e.headerGroupsDeps.push((function(t,n){var r=n.instance;return[].concat(t,[r.state.hiddenColumns])})),e.useInstance.push(Xn)};Wt.pluginName="useColumnVisibility";var Ln=function(e,t){var n=t.column;return[e,{onChange:function(r){n.toggleHidden(!r.target.checked)},style:{cursor:"pointer"},checked:n.isVisible,title:"Toggle Column Visible"}]},qn=function(e,t){var n=t.instance;return[e,{onChange:function(r){n.toggleHideAllColumns(!r.target.checked)},style:{cursor:"pointer"},checked:!n.allColumnsHidden&&!n.state.hiddenColumns.length,title:"Toggle All Columns Hidden",indeterminate:!n.allColumnsHidden&&n.state.hiddenColumns.length}]};function Jn(e,t,n,r){if(t.type===i.init)return c({hiddenColumns:[]},e);if(t.type===i.resetHiddenColumns)return c({},e,{hiddenColumns:r.initialState.hiddenColumns||[]});if(t.type===i.toggleHideColumn){var s=(t.value!==void 0?t.value:!e.hiddenColumns.includes(t.columnId))?[].concat(e.hiddenColumns,[t.columnId]):e.hiddenColumns.filter((function(a){return a!==t.columnId}));return c({},e,{hiddenColumns:s})}return t.type===i.setHiddenColumns?c({},e,{hiddenColumns:je(t.value,e.hiddenColumns)}):t.type===i.toggleHideAllColumns?c({},e,{hiddenColumns:(t.value!==void 0?t.value:!e.hiddenColumns.length)?r.allColumns.map((function(a){return a.id})):[]}):void 0}function Un(e){var t=e.headers,n=e.state.hiddenColumns;g.useRef(!1).current;var r=0;t.forEach((function(s){return r+=(function a(l,u){l.isVisible=u&&!n.includes(l.id);var d=0;return l.headers&&l.headers.length?l.headers.forEach((function(p){return d+=a(p,l.isVisible)})):d=l.isVisible?1:0,l.totalVisibleHeaderCount=d,d})(s,!0)}))}function Xn(e){var t=e.columns,n=e.flatHeaders,r=e.dispatch,s=e.allColumns,a=e.getHooks,l=e.state.hiddenColumns,u=e.autoResetHiddenColumns,d=u===void 0||u,p=ee(e),v=s.length===l.length,f=g.useCallback((function(R,T){return r({type:i.toggleHideColumn,columnId:R,value:T})}),[r]),h=g.useCallback((function(R){return r({type:i.setHiddenColumns,value:R})}),[r]),m=g.useCallback((function(R){return r({type:i.toggleHideAllColumns,value:R})}),[r]),y=Q(a().getToggleHideAllColumnsProps,{instance:p()});n.forEach((function(R){R.toggleHidden=function(T){r({type:i.toggleHideColumn,columnId:R.id,value:T})},R.getToggleHiddenProps=Q(a().getToggleHiddenProps,{instance:p(),column:R})}));var x=ee(d);we((function(){x()&&r({type:i.resetHiddenColumns})}),[r,t]),Object.assign(e,{allColumnsHidden:v,toggleHideColumn:f,setHiddenColumns:h,toggleHideAllColumns:m,getToggleHideAllColumnsProps:y})}var $n={},Kn={},Qn=function(e,t,n){return e},Yn=function(e,t){return e.subRows||[]},Zn=function(e,t,n){return""+(n?[n.id,t].join("."):t)},eo=function(e){return e};function kt(e){var t=e.initialState,n=t===void 0?$n:t,r=e.defaultColumn,s=r===void 0?Kn:r,a=e.getSubRows,l=a===void 0?Yn:a,u=e.getRowId,d=u===void 0?Zn:u,p=e.stateReducer,v=p===void 0?Qn:p,f=e.useControlledState,h=f===void 0?eo:f;return c({},_(e,["initialState","defaultColumn","getSubRows","getRowId","stateReducer","useControlledState"]),{initialState:n,defaultColumn:s,getSubRows:l,getRowId:d,stateReducer:v,useControlledState:h})}function At(e,t){t===void 0&&(t=0);var n=0,r=0,s=0,a=0;return e.forEach((function(l){var u=l.headers;if(l.totalLeft=t,u&&u.length){var d=At(u,t),p=d[0],v=d[1],f=d[2],h=d[3];l.totalMinWidth=p,l.totalWidth=v,l.totalMaxWidth=f,l.totalFlexWidth=h}else l.totalMinWidth=l.minWidth,l.totalWidth=Math.min(Math.max(l.minWidth,l.width),l.maxWidth),l.totalMaxWidth=l.maxWidth,l.totalFlexWidth=l.canResize?l.totalWidth:0;l.isVisible&&(t+=l.totalWidth,n+=l.totalMinWidth,r+=l.totalWidth,s+=l.totalMaxWidth,a+=l.totalFlexWidth)})),[n,r,s,a]}function to(e){var t=e.data,n=e.rows,r=e.flatRows,s=e.rowsById,a=e.column,l=e.getRowId,u=e.getSubRows,d=e.accessValueHooks,p=e.getInstance;t.forEach((function(v,f){return(function h(m,y,x,R,T){x===void 0&&(x=0);var N=m,S=l(m,y,R),w=s[S];if(w)w.subRows&&w.originalSubRows.forEach((function(P,O){return h(P,O,x+1,w)}));else if((w={id:S,original:N,index:y,depth:x,cells:[{}]}).cells.map=Le,w.cells.filter=Le,w.cells.forEach=Le,w.cells[0].getCellProps=Le,w.values={},T.push(w),r.push(w),s[S]=w,w.originalSubRows=u(m,y),w.originalSubRows){var A=[];w.originalSubRows.forEach((function(P,O){return h(P,O,x+1,w,A)})),w.subRows=A}a.accessor&&(w.values[a.id]=a.accessor(m,y,w,T,t)),w.values[a.id]=he(d,w.values[a.id],{row:w,column:a,instance:p()})})(v,f,0,void 0,n)}))}i.resetExpanded="resetExpanded",i.toggleRowExpanded="toggleRowExpanded",i.toggleAllRowsExpanded="toggleAllRowsExpanded";var Gt=function(e){e.getToggleAllRowsExpandedProps=[no],e.getToggleRowExpandedProps=[oo],e.stateReducers.push(ro),e.useInstance.push(ao),e.prepareRow.push(so)};Gt.pluginName="useExpanded";var no=function(e,t){var n=t.instance;return[e,{onClick:function(r){n.toggleAllRowsExpanded()},style:{cursor:"pointer"},title:"Toggle All Rows Expanded"}]},oo=function(e,t){var n=t.row;return[e,{onClick:function(){n.toggleRowExpanded()},style:{cursor:"pointer"},title:"Toggle Row Expanded"}]};function ro(e,t,n,r){if(t.type===i.init)return c({expanded:{}},e);if(t.type===i.resetExpanded)return c({},e,{expanded:r.initialState.expanded||{}});if(t.type===i.toggleAllRowsExpanded){var s=t.value,a=r.rowsById,l=Object.keys(a).length===Object.keys(e.expanded).length;if(s!==void 0?s:!l){var u={};return Object.keys(a).forEach((function(y){u[y]=!0})),c({},e,{expanded:u})}return c({},e,{expanded:{}})}if(t.type===i.toggleRowExpanded){var d,p=t.id,v=t.value,f=e.expanded[p],h=v!==void 0?v:!f;if(!f&&h)return c({},e,{expanded:c({},e.expanded,(d={},d[p]=!0,d))});if(f&&!h){var m=e.expanded;return m[p],c({},e,{expanded:_(m,[p].map(B))})}return e}}function ao(e){var t=e.data,n=e.rows,r=e.rowsById,s=e.manualExpandedKey,a=s===void 0?"expanded":s,l=e.paginateExpandedRows,u=l===void 0||l,d=e.expandSubRows,p=d===void 0||d,v=e.autoResetExpanded,f=v===void 0||v,h=e.getHooks,m=e.plugins,y=e.state.expanded,x=e.dispatch;Se(m,["useSortBy","useGroupBy","usePivotColumns","useGlobalFilter"],"useExpanded");var R=ee(f),T=!!(Object.keys(r).length&&Object.keys(y).length);T&&Object.keys(r).some((function(D){return!y[D]}))&&(T=!1),we((function(){R()&&x({type:i.resetExpanded})}),[x,t]);var N=g.useCallback((function(D,M){x({type:i.toggleRowExpanded,id:D,value:M})}),[x]),S=g.useCallback((function(D){return x({type:i.toggleAllRowsExpanded,value:D})}),[x]),w=g.useMemo((function(){return u?Ot(n,{manualExpandedKey:a,expanded:y,expandSubRows:p}):n}),[u,n,a,y,p]),A=g.useMemo((function(){return(function(D){var M=0;return Object.keys(D).forEach((function(E){var $=E.split(".");M=Math.max(M,$.length)})),M})(y)}),[y]),P=ee(e),O=Q(h().getToggleAllRowsExpandedProps,{instance:P()});Object.assign(e,{preExpandedRows:n,expandedRows:w,rows:w,expandedDepth:A,isAllRowsExpanded:T,toggleRowExpanded:N,toggleAllRowsExpanded:S,getToggleAllRowsExpandedProps:O})}function so(e,t){var n=t.instance.getHooks,r=t.instance;e.toggleRowExpanded=function(s){return r.toggleRowExpanded(e.id,s)},e.getToggleRowExpandedProps=Q(n().getToggleRowExpandedProps,{instance:r,row:e})}var Ft=function(e,t,n){return e=e.filter((function(r){return t.some((function(s){var a=r.values[s];return String(a).toLowerCase().includes(String(n).toLowerCase())}))}))};Ft.autoRemove=function(e){return!e};var Nt=function(e,t,n){return e.filter((function(r){return t.some((function(s){var a=r.values[s];return a===void 0||String(a).toLowerCase()===String(n).toLowerCase()}))}))};Nt.autoRemove=function(e){return!e};var _t=function(e,t,n){return e.filter((function(r){return t.some((function(s){var a=r.values[s];return a===void 0||String(a)===String(n)}))}))};_t.autoRemove=function(e){return!e};var Vt=function(e,t,n){return e.filter((function(r){return t.some((function(s){return r.values[s].includes(n)}))}))};Vt.autoRemove=function(e){return!e||!e.length};var Dt=function(e,t,n){return e.filter((function(r){return t.some((function(s){var a=r.values[s];return a&&a.length&&n.every((function(l){return a.includes(l)}))}))}))};Dt.autoRemove=function(e){return!e||!e.length};var zt=function(e,t,n){return e.filter((function(r){return t.some((function(s){var a=r.values[s];return a&&a.length&&n.some((function(l){return a.includes(l)}))}))}))};zt.autoRemove=function(e){return!e||!e.length};var Lt=function(e,t,n){return e.filter((function(r){return t.some((function(s){var a=r.values[s];return n.includes(a)}))}))};Lt.autoRemove=function(e){return!e||!e.length};var qt=function(e,t,n){return e.filter((function(r){return t.some((function(s){return r.values[s]===n}))}))};qt.autoRemove=function(e){return e===void 0};var Jt=function(e,t,n){return e.filter((function(r){return t.some((function(s){return r.values[s]==n}))}))};Jt.autoRemove=function(e){return e==null};var Ut=function(e,t,n){var r=n||[],s=r[0],a=r[1];if((s=typeof s=="number"?s:-1/0)>(a=typeof a=="number"?a:1/0)){var l=s;s=a,a=l}return e.filter((function(u){return t.some((function(d){var p=u.values[d];return p>=s&&p<=a}))}))};Ut.autoRemove=function(e){return!e||typeof e[0]!="number"&&typeof e[1]!="number"};var Ae=Object.freeze({__proto__:null,text:Ft,exactText:Nt,exactTextCase:_t,includes:Vt,includesAll:Dt,includesSome:zt,includesValue:Lt,exact:qt,equals:Jt,between:Ut});i.resetFilters="resetFilters",i.setFilter="setFilter",i.setAllFilters="setAllFilters";var Xt=function(e){e.stateReducers.push(lo),e.useInstance.push(io)};function lo(e,t,n,r){if(t.type===i.init)return c({filters:[]},e);if(t.type===i.resetFilters)return c({},e,{filters:r.initialState.filters||[]});if(t.type===i.setFilter){var s=t.columnId,a=t.filterValue,l=r.allColumns,u=r.filterTypes,d=l.find((function(x){return x.id===s}));if(!d)throw new Error("React-Table: Could not find a column with id: "+s);var p=ke(d.filter,u||{},Ae),v=e.filters.find((function(x){return x.id===s})),f=je(a,v&&v.value);return ut(p.autoRemove,f,d)?c({},e,{filters:e.filters.filter((function(x){return x.id!==s}))}):c({},e,v?{filters:e.filters.map((function(x){return x.id===s?{id:s,value:f}:x}))}:{filters:[].concat(e.filters,[{id:s,value:f}])})}if(t.type===i.setAllFilters){var h=t.filters,m=r.allColumns,y=r.filterTypes;return c({},e,{filters:je(h,e.filters).filter((function(x){var R=m.find((function(T){return T.id===x.id}));return!ut(ke(R.filter,y||{},Ae).autoRemove,x.value,R)}))})}}function io(e){var t=e.data,n=e.rows,r=e.flatRows,s=e.rowsById,a=e.allColumns,l=e.filterTypes,u=e.manualFilters,d=e.defaultCanFilter,p=d!==void 0&&d,v=e.disableFilters,f=e.state.filters,h=e.dispatch,m=e.autoResetFilters,y=m===void 0||m,x=g.useCallback((function(P,O){h({type:i.setFilter,columnId:P,filterValue:O})}),[h]),R=g.useCallback((function(P){h({type:i.setAllFilters,filters:P})}),[h]);a.forEach((function(P){var O=P.id,D=P.accessor,M=P.defaultCanFilter,E=P.disableFilters;P.canFilter=D?Ce(E!==!0&&void 0,v!==!0&&void 0,!0):Ce(M,p,!1),P.setFilter=function(W){return x(P.id,W)};var $=f.find((function(W){return W.id===O}));P.filterValue=$&&$.value}));var T=g.useMemo((function(){if(u||!f.length)return[n,r,s];var P=[],O={};return[(function D(M,E){E===void 0&&(E=0);var $=M;return($=f.reduce((function(W,U){var J=U.id,Z=U.value,j=a.find((function(re){return re.id===J}));if(!j)return W;E===0&&(j.preFilteredRows=W);var L=ke(j.filter,l||{},Ae);return L?(j.filteredRows=L(W,[J],Z),j.filteredRows):(console.warn("Could not find a valid 'column.filter' for column with the ID: "+j.id+"."),W)}),M)).forEach((function(W){P.push(W),O[W.id]=W,W.subRows&&(W.subRows=W.subRows&&W.subRows.length>0?D(W.subRows,E+1):W.subRows)})),$})(n),P,O]}),[u,f,n,r,s,a,l]),N=T[0],S=T[1],w=T[2];g.useMemo((function(){a.filter((function(P){return!f.find((function(O){return O.id===P.id}))})).forEach((function(P){P.preFilteredRows=N,P.filteredRows=N}))}),[N,f,a]);var A=ee(y);we((function(){A()&&h({type:i.resetFilters})}),[h,u?null:t]),Object.assign(e,{preFilteredRows:n,preFilteredFlatRows:r,preFilteredRowsById:s,filteredRows:N,filteredFlatRows:S,filteredRowsById:w,rows:N,flatRows:S,rowsById:w,setFilter:x,setAllFilters:R})}Xt.pluginName="useFilters",i.resetGlobalFilter="resetGlobalFilter",i.setGlobalFilter="setGlobalFilter";var $t=function(e){e.stateReducers.push(uo),e.useInstance.push(co)};function uo(e,t,n,r){if(t.type===i.resetGlobalFilter)return c({},e,{globalFilter:r.initialState.globalFilter||void 0});if(t.type===i.setGlobalFilter){var s=t.filterValue,a=r.userFilterTypes,l=ke(r.globalFilter,a||{},Ae),u=je(s,e.globalFilter);return ut(l.autoRemove,u)?(e.globalFilter,_(e,["globalFilter"])):c({},e,{globalFilter:u})}}function co(e){var t=e.data,n=e.rows,r=e.flatRows,s=e.rowsById,a=e.allColumns,l=e.filterTypes,u=e.globalFilter,d=e.manualGlobalFilter,p=e.state.globalFilter,v=e.dispatch,f=e.autoResetGlobalFilter,h=f===void 0||f,m=e.disableGlobalFilter,y=g.useCallback((function(w){v({type:i.setGlobalFilter,filterValue:w})}),[v]),x=g.useMemo((function(){if(d||p===void 0)return[n,r,s];var w=[],A={},P=ke(u,l||{},Ae);if(!P)return console.warn("Could not find a valid 'globalFilter' option."),n;a.forEach((function(D){var M=D.disableGlobalFilter;D.canFilter=Ce(M!==!0&&void 0,m!==!0&&void 0,!0)}));var O=a.filter((function(D){return D.canFilter===!0}));return[(function D(M){return(M=P(M,O.map((function(E){return E.id})),p)).forEach((function(E){w.push(E),A[E.id]=E,E.subRows=E.subRows&&E.subRows.length?D(E.subRows):E.subRows})),M})(n),w,A]}),[d,p,u,l,a,n,r,s,m]),R=x[0],T=x[1],N=x[2],S=ee(h);we((function(){S()&&v({type:i.resetGlobalFilter})}),[v,d?null:t]),Object.assign(e,{preGlobalFilteredRows:n,preGlobalFilteredFlatRows:r,preGlobalFilteredRowsById:s,globalFilteredRows:R,globalFilteredFlatRows:T,globalFilteredRowsById:N,rows:R,flatRows:T,rowsById:N,setGlobalFilter:y,disableGlobalFilter:m})}function Kt(e,t){return t.reduce((function(n,r){return n+(typeof r=="number"?r:0)}),0)}$t.pluginName="useGlobalFilter";var Qt=Object.freeze({__proto__:null,sum:Kt,min:function(e){var t=e[0]||0;return e.forEach((function(n){typeof n=="number"&&(t=Math.min(t,n))})),t},max:function(e){var t=e[0]||0;return e.forEach((function(n){typeof n=="number"&&(t=Math.max(t,n))})),t},minMax:function(e){var t=e[0]||0,n=e[0]||0;return e.forEach((function(r){typeof r=="number"&&(t=Math.min(t,r),n=Math.max(n,r))})),t+".."+n},average:function(e){return Kt(0,e)/e.length},median:function(e){if(!e.length)return null;var t=Math.floor(e.length/2),n=[].concat(e).sort((function(r,s){return r-s}));return e.length%2!=0?n[t]:(n[t-1]+n[t])/2},unique:function(e){return Array.from(new Set(e).values())},uniqueCount:function(e){return new Set(e).size},count:function(e){return e.length}}),po=[],mo={};i.resetGroupBy="resetGroupBy",i.setGroupBy="setGroupBy",i.toggleGroupBy="toggleGroupBy";var Yt=function(e){e.getGroupByToggleProps=[go],e.stateReducers.push(fo),e.visibleColumnsDeps.push((function(t,n){var r=n.instance;return[].concat(t,[r.state.groupBy])})),e.visibleColumns.push(ho),e.useInstance.push(vo),e.prepareRow.push(wo)};Yt.pluginName="useGroupBy";var go=function(e,t){var n=t.header;return[e,{onClick:n.canGroupBy?function(r){r.persist(),n.toggleGroupBy()}:void 0,style:{cursor:n.canGroupBy?"pointer":void 0},title:"Toggle GroupBy"}]};function fo(e,t,n,r){if(t.type===i.init)return c({groupBy:[]},e);if(t.type===i.resetGroupBy)return c({},e,{groupBy:r.initialState.groupBy||[]});if(t.type===i.setGroupBy)return c({},e,{groupBy:t.value});if(t.type===i.toggleGroupBy){var s=t.columnId,a=t.value,l=a!==void 0?a:!e.groupBy.includes(s);return c({},e,l?{groupBy:[].concat(e.groupBy,[s])}:{groupBy:e.groupBy.filter((function(u){return u!==s}))})}}function ho(e,t){var n=t.instance.state.groupBy,r=n.map((function(a){return e.find((function(l){return l.id===a}))})).filter(Boolean),s=e.filter((function(a){return!n.includes(a.id)}));return(e=[].concat(r,s)).forEach((function(a){a.isGrouped=n.includes(a.id),a.groupedIndex=n.indexOf(a.id)})),e}var yo={};function vo(e){var t=e.data,n=e.rows,r=e.flatRows,s=e.rowsById,a=e.allColumns,l=e.flatHeaders,u=e.groupByFn,d=u===void 0?Zt:u,p=e.manualGroupBy,v=e.aggregations,f=v===void 0?yo:v,h=e.plugins,m=e.state.groupBy,y=e.dispatch,x=e.autoResetGroupBy,R=x===void 0||x,T=e.disableGroupBy,N=e.defaultCanGroupBy,S=e.getHooks;Se(h,["useColumnOrder","useFilters"],"useGroupBy");var w=ee(e);a.forEach((function(j){var L=j.accessor,re=j.defaultGroupBy,ce=j.disableGroupBy;j.canGroupBy=L?Ce(j.canGroupBy,ce!==!0&&void 0,T!==!0&&void 0,!0):Ce(j.canGroupBy,re,N,!1),j.canGroupBy&&(j.toggleGroupBy=function(){return e.toggleGroupBy(j.id)}),j.Aggregated=j.Aggregated||j.Cell}));var A=g.useCallback((function(j,L){y({type:i.toggleGroupBy,columnId:j,value:L})}),[y]),P=g.useCallback((function(j){y({type:i.setGroupBy,value:j})}),[y]);l.forEach((function(j){j.getGroupByToggleProps=Q(S().getGroupByToggleProps,{instance:w(),header:j})}));var O=g.useMemo((function(){if(p||!m.length)return[n,r,s,po,mo,r,s];var j=m.filter((function(ie){return a.find((function(He){return He.id===ie}))})),L=[],re={},ce=[],I={},te=[],se={},pe=(function ie(He,Be,vn){if(Be===void 0&&(Be=0),Be===j.length)return He.map((function(Je){return c({},Je,{depth:Be})}));var yt=j[Be],lr=d(He,yt);return Object.entries(lr).map((function(Je,ir){var wn=Je[0],Ue=Je[1],Xe=yt+":"+wn,bn=ie(Ue,Be+1,Xe=vn?vn+">"+Xe:Xe),xn=Be?Et(Ue,"leafRows"):Ue,ur=(function(be,vt,cr){var $e={};return a.forEach((function(le){if(j.includes(le.id))$e[le.id]=vt[0]?vt[0].values[le.id]:null;else{var Rn=typeof le.aggregate=="function"?le.aggregate:f[le.aggregate]||Qt[le.aggregate];if(Rn){var pr=vt.map((function(Ke){return Ke.values[le.id]})),mr=be.map((function(Ke){var wt=Ke.values[le.id];if(!cr&&le.aggregateValue){var Pn=typeof le.aggregateValue=="function"?le.aggregateValue:f[le.aggregateValue]||Qt[le.aggregateValue];if(!Pn)throw console.info({column:le}),new Error("React Table: Invalid column.aggregateValue option for column listed above");wt=Pn(wt,Ke,le)}return wt}));$e[le.id]=Rn(mr,pr)}else{if(le.aggregate)throw console.info({column:le}),new Error("React Table: Invalid column.aggregate option for column listed above");$e[le.id]=null}}})),$e})(xn,Ue,Be),dr={id:Xe,isGrouped:!0,groupByID:yt,groupByVal:wn,values:ur,subRows:bn,leafRows:xn,depth:Be,index:ir};return bn.forEach((function(be){L.push(be),re[be.id]=be,be.isGrouped?(ce.push(be),I[be.id]=be):(te.push(be),se[be.id]=be)})),dr}))})(n);return pe.forEach((function(ie){L.push(ie),re[ie.id]=ie,ie.isGrouped?(ce.push(ie),I[ie.id]=ie):(te.push(ie),se[ie.id]=ie)})),[pe,L,re,ce,I,te,se]}),[p,m,n,r,s,a,f,d]),D=O[0],M=O[1],E=O[2],$=O[3],W=O[4],U=O[5],J=O[6],Z=ee(R);we((function(){Z()&&y({type:i.resetGroupBy})}),[y,p?null:t]),Object.assign(e,{preGroupedRows:n,preGroupedFlatRow:r,preGroupedRowsById:s,groupedRows:D,groupedFlatRows:M,groupedRowsById:E,onlyGroupedFlatRows:$,onlyGroupedRowsById:W,nonGroupedFlatRows:U,nonGroupedRowsById:J,rows:D,flatRows:M,rowsById:E,toggleGroupBy:A,setGroupBy:P})}function wo(e){e.allCells.forEach((function(t){var n;t.isGrouped=t.column.isGrouped&&t.column.id===e.groupByID,t.isPlaceholder=!t.isGrouped&&t.column.isGrouped,t.isAggregated=!t.isGrouped&&!t.isPlaceholder&&((n=e.subRows)==null?void 0:n.length)}))}function Zt(e,t){return e.reduce((function(n,r,s){var a=""+r.values[t];return n[a]=Array.isArray(n[a])?n[a]:[],n[a].push(r),n}),{})}var en=/([0-9]+)/gm;function ct(e,t){return e===t?0:e>t?1:-1}function Ge(e,t,n){return[e.values[n],t.values[n]]}function tn(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}var bo=Object.freeze({__proto__:null,alphanumeric:function(e,t,n){var r=Ge(e,t,n),s=r[0],a=r[1];for(s=tn(s),a=tn(a),s=s.split(en).filter(Boolean),a=a.split(en).filter(Boolean);s.length&&a.length;){var l=s.shift(),u=a.shift(),d=parseInt(l,10),p=parseInt(u,10),v=[d,p].sort();if(isNaN(v[0])){if(l>u)return 1;if(u>l)return-1}else{if(isNaN(v[1]))return isNaN(d)?-1:1;if(d>p)return 1;if(p>d)return-1}}return s.length-a.length},datetime:function(e,t,n){var r=Ge(e,t,n),s=r[0],a=r[1];return ct(s=s.getTime(),a=a.getTime())},basic:function(e,t,n){var r=Ge(e,t,n);return ct(r[0],r[1])},string:function(e,t,n){var r=Ge(e,t,n),s=r[0],a=r[1];for(s=s.split("").filter(Boolean),a=a.split("").filter(Boolean);s.length&&a.length;){var l=s.shift(),u=a.shift(),d=l.toLowerCase(),p=u.toLowerCase();if(d>p)return 1;if(p>d)return-1;if(l>u)return 1;if(u>l)return-1}return s.length-a.length},number:function(e,t,n){var r=Ge(e,t,n),s=r[0],a=r[1],l=/[^0-9.]/gi;return ct(s=Number(String(s).replace(l,"")),a=Number(String(a).replace(l,"")))}});i.resetSortBy="resetSortBy",i.setSortBy="setSortBy",i.toggleSortBy="toggleSortBy",i.clearSortBy="clearSortBy",F.sortType="alphanumeric",F.sortDescFirst=!1;var nn=function(e){e.getSortByToggleProps=[xo],e.stateReducers.push(Ro),e.useInstance.push(Po)};nn.pluginName="useSortBy";var xo=function(e,t){var n=t.instance,r=t.column,s=n.isMultiSortEvent,a=s===void 0?function(l){return l.shiftKey}:s;return[e,{onClick:r.canSort?function(l){l.persist(),r.toggleSortBy(void 0,!n.disableMultiSort&&a(l))}:void 0,style:{cursor:r.canSort?"pointer":void 0},title:r.canSort?"Toggle SortBy":void 0}]};function Ro(e,t,n,r){if(t.type===i.init)return c({sortBy:[]},e);if(t.type===i.resetSortBy)return c({},e,{sortBy:r.initialState.sortBy||[]});if(t.type===i.clearSortBy)return c({},e,{sortBy:e.sortBy.filter((function(w){return w.id!==t.columnId}))});if(t.type===i.setSortBy)return c({},e,{sortBy:t.sortBy});if(t.type===i.toggleSortBy){var s,a=t.columnId,l=t.desc,u=t.multi,d=r.allColumns,p=r.disableMultiSort,v=r.disableSortRemove,f=r.disableMultiRemove,h=r.maxMultiSortColCount,m=h===void 0?Number.MAX_SAFE_INTEGER:h,y=e.sortBy,x=d.find((function(w){return w.id===a})).sortDescFirst,R=y.find((function(w){return w.id===a})),T=y.findIndex((function(w){return w.id===a})),N=l!=null,S=[];return(s=!p&&u?R?"toggle":"add":T!==y.length-1||y.length!==1?"replace":R?"toggle":"replace")!="toggle"||v||N||u&&f||!(R&&R.desc&&!x||!R.desc&&x)||(s="remove"),s==="replace"?S=[{id:a,desc:N?l:x}]:s==="add"?(S=[].concat(y,[{id:a,desc:N?l:x}])).splice(0,S.length-m):s==="toggle"?S=y.map((function(w){return w.id===a?c({},w,{desc:N?l:!R.desc}):w})):s==="remove"&&(S=y.filter((function(w){return w.id!==a}))),c({},e,{sortBy:S})}}function Po(e){var t=e.data,n=e.rows,r=e.flatRows,s=e.allColumns,a=e.orderByFn,l=a===void 0?on:a,u=e.sortTypes,d=e.manualSortBy,p=e.defaultCanSort,v=e.disableSortBy,f=e.flatHeaders,h=e.state.sortBy,m=e.dispatch,y=e.plugins,x=e.getHooks,R=e.autoResetSortBy,T=R===void 0||R;Se(y,["useFilters","useGlobalFilter","useGroupBy","usePivotColumns"],"useSortBy");var N=g.useCallback((function(M){m({type:i.setSortBy,sortBy:M})}),[m]),S=g.useCallback((function(M,E,$){m({type:i.toggleSortBy,columnId:M,desc:E,multi:$})}),[m]),w=ee(e);f.forEach((function(M){var E=M.accessor,$=M.canSort,W=M.disableSortBy,U=M.id,J=E?Ce(W!==!0&&void 0,v!==!0&&void 0,!0):Ce(p,$,!1);M.canSort=J,M.canSort&&(M.toggleSortBy=function(j,L){return S(M.id,j,L)},M.clearSortBy=function(){m({type:i.clearSortBy,columnId:M.id})}),M.getSortByToggleProps=Q(x().getSortByToggleProps,{instance:w(),column:M});var Z=h.find((function(j){return j.id===U}));M.isSorted=!!Z,M.sortedIndex=h.findIndex((function(j){return j.id===U})),M.isSortedDesc=M.isSorted?Z.desc:void 0}));var A=g.useMemo((function(){if(d||!h.length)return[n,r];var M=[],E=h.filter((function($){return s.find((function(W){return W.id===$.id}))}));return[(function $(W){var U=l(W,E.map((function(J){var Z=s.find((function(re){return re.id===J.id}));if(!Z)throw new Error("React-Table: Could not find a column with id: "+J.id+" while sorting");var j=Z.sortType,L=It(j)||(u||{})[j]||bo[j];if(!L)throw new Error("React-Table: Could not find a valid sortType of '"+j+"' for column '"+J.id+"'.");return function(re,ce){return L(re,ce,J.id,J.desc)}})),E.map((function(J){var Z=s.find((function(j){return j.id===J.id}));return Z&&Z.sortInverted?J.desc:!J.desc})));return U.forEach((function(J){M.push(J),J.subRows&&J.subRows.length!==0&&(J.subRows=$(J.subRows))})),U})(n),M]}),[d,h,n,r,s,l,u]),P=A[0],O=A[1],D=ee(T);we((function(){D()&&m({type:i.resetSortBy})}),[d?null:t]),Object.assign(e,{preSortedRows:n,preSortedFlatRows:r,sortedRows:P,sortedFlatRows:O,rows:P,flatRows:O,setSortBy:N,toggleSortBy:S})}function on(e,t,n){return[].concat(e).sort((function(r,s){for(var a=0;a<t.length;a+=1){var l=t[a],u=n[a]===!1||n[a]==="desc",d=l(r,s);if(d!==0)return u?-d:d}return n[0]?r.index-s.index:s.index-r.index}))}i.resetPage="resetPage",i.gotoPage="gotoPage",i.setPageSize="setPageSize";var rn=function(e){e.stateReducers.push(So),e.useInstance.push(Co)};function So(e,t,n,r){if(t.type===i.init)return c({pageSize:10,pageIndex:0},e);if(t.type===i.resetPage)return c({},e,{pageIndex:r.initialState.pageIndex||0});if(t.type===i.gotoPage){var s=r.pageCount,a=r.page,l=je(t.pageIndex,e.pageIndex),u=!1;return l>e.pageIndex?u=s===-1?a.length>=e.pageSize:l<s:l<e.pageIndex&&(u=l>-1),u?c({},e,{pageIndex:l}):e}if(t.type===i.setPageSize){var d=t.pageSize,p=e.pageSize*e.pageIndex;return c({},e,{pageIndex:Math.floor(p/d),pageSize:d})}}function Co(e){var t=e.rows,n=e.autoResetPage,r=n===void 0||n,s=e.manualExpandedKey,a=s===void 0?"expanded":s,l=e.plugins,u=e.pageCount,d=e.paginateExpandedRows,p=d===void 0||d,v=e.expandSubRows,f=v===void 0||v,h=e.state,m=h.pageSize,y=h.pageIndex,x=h.expanded,R=h.globalFilter,T=h.filters,N=h.groupBy,S=h.sortBy,w=e.dispatch,A=e.data,P=e.manualPagination;Se(l,["useGlobalFilter","useFilters","useGroupBy","useSortBy","useExpanded"],"usePagination");var O=ee(r);we((function(){O()&&w({type:i.resetPage})}),[w,P?null:A,R,T,N,S]);var D=P?u:Math.ceil(t.length/m),M=g.useMemo((function(){return D>0?[].concat(new Array(D)).fill(null).map((function(L,re){return re})):[]}),[D]),E=g.useMemo((function(){var L;if(P)L=t;else{var re=m*y,ce=re+m;L=t.slice(re,ce)}return p?L:Ot(L,{manualExpandedKey:a,expanded:x,expandSubRows:f})}),[f,x,a,P,y,m,p,t]),$=y>0,W=D===-1?E.length>=m:y<D-1,U=g.useCallback((function(L){w({type:i.gotoPage,pageIndex:L})}),[w]),J=g.useCallback((function(){return U((function(L){return L-1}))}),[U]),Z=g.useCallback((function(){return U((function(L){return L+1}))}),[U]),j=g.useCallback((function(L){w({type:i.setPageSize,pageSize:L})}),[w]);Object.assign(e,{pageOptions:M,pageCount:D,page:E,canPreviousPage:$,canNextPage:W,gotoPage:U,previousPage:J,nextPage:Z,setPageSize:j})}rn.pluginName="usePagination",i.resetPivot="resetPivot",i.togglePivot="togglePivot";var an=function(e){e.getPivotToggleProps=[To],e.stateReducers.push(jo),e.useInstanceAfterData.push(Bo),e.allColumns.push(Ho),e.accessValue.push(Mo),e.materializedColumns.push(Io),e.materializedColumnsDeps.push(Eo),e.visibleColumns.push(Oo),e.visibleColumnsDeps.push(Wo),e.useInstance.push(ko),e.prepareRow.push(Ao)};an.pluginName="usePivotColumns";var sn=[],To=function(e,t){var n=t.header;return[e,{onClick:n.canPivot?function(r){r.persist(),n.togglePivot()}:void 0,style:{cursor:n.canPivot?"pointer":void 0},title:"Toggle Pivot"}]};function jo(e,t,n,r){if(t.type===i.init)return c({pivotColumns:sn},e);if(t.type===i.resetPivot)return c({},e,{pivotColumns:r.initialState.pivotColumns||sn});if(t.type===i.togglePivot){var s=t.columnId,a=t.value,l=a!==void 0?a:!e.pivotColumns.includes(s);return c({},e,l?{pivotColumns:[].concat(e.pivotColumns,[s])}:{pivotColumns:e.pivotColumns.filter((function(u){return u!==s}))})}}function Bo(e){e.allColumns.forEach((function(t){t.isPivotSource=e.state.pivotColumns.includes(t.id)}))}function Ho(e,t){var n=t.instance;return e.forEach((function(r){r.isPivotSource=n.state.pivotColumns.includes(r.id),r.uniqueValues=new Set})),e}function Mo(e,t){var n=t.column;return n.uniqueValues&&e!==void 0&&n.uniqueValues.add(e),e}function Io(e,t){var n=t.instance,r=n.allColumns,s=n.state;if(!s.pivotColumns.length||!s.groupBy||!s.groupBy.length)return e;var a=s.pivotColumns.map((function(d){return r.find((function(p){return p.id===d}))})).filter(Boolean),l=r.filter((function(d){return!d.isPivotSource&&!s.groupBy.includes(d.id)&&!s.pivotColumns.includes(d.id)})),u=jt((function d(p,v,f){p===void 0&&(p=0),f===void 0&&(f=[]);var h=a[p];return h?Array.from(h.uniqueValues).sort().map((function(m){var y=c({},h,{Header:h.PivotHeader||typeof h.header=="string"?h.Header+": "+m:m,isPivotGroup:!0,parent:v,depth:p,id:v?v.id+"."+h.id+"."+m:h.id+"."+m,pivotValue:m});return y.columns=d(p+1,y,[].concat(f,[function(x){return x.values[h.id]===m}])),y})):l.map((function(m){return c({},m,{canPivot:!1,isPivoted:!0,parent:v,depth:p,id:""+(v?v.id+"."+m.id:m.id),accessor:function(y,x,R){if(f.every((function(T){return T(R)})))return R.values[m.id]}})}))})());return[].concat(e,u)}function Eo(e,t){var n=t.instance.state,r=n.pivotColumns,s=n.groupBy;return[].concat(e,[r,s])}function Oo(e,t){var n=t.instance.state;return e=e.filter((function(r){return!r.isPivotSource})),n.pivotColumns.length&&n.groupBy&&n.groupBy.length&&(e=e.filter((function(r){return r.isGrouped||r.isPivoted}))),e}function Wo(e,t){var n=t.instance;return[].concat(e,[n.state.pivotColumns,n.state.groupBy])}function ko(e){var t=e.columns,n=e.allColumns,r=e.flatHeaders,s=e.getHooks,a=e.plugins,l=e.dispatch,u=e.autoResetPivot,d=u===void 0||u,p=e.manaulPivot,v=e.disablePivot,f=e.defaultCanPivot;Se(a,["useGroupBy"],"usePivotColumns");var h=ee(e);n.forEach((function(y){var x=y.accessor,R=y.defaultPivot,T=y.disablePivot;y.canPivot=x?Ce(y.canPivot,T!==!0&&void 0,v!==!0&&void 0,!0):Ce(y.canPivot,R,f,!1),y.canPivot&&(y.togglePivot=function(){return e.togglePivot(y.id)}),y.Aggregated=y.Aggregated||y.Cell})),r.forEach((function(y){y.getPivotToggleProps=Q(s().getPivotToggleProps,{instance:h(),header:y})}));var m=ee(d);we((function(){m()&&l({type:i.resetPivot})}),[l,p?null:t]),Object.assign(e,{togglePivot:function(y,x){l({type:i.togglePivot,columnId:y,value:x})}})}function Ao(e){e.allCells.forEach((function(t){t.isPivoted=t.column.isPivoted}))}i.resetSelectedRows="resetSelectedRows",i.toggleAllRowsSelected="toggleAllRowsSelected",i.toggleRowSelected="toggleRowSelected",i.toggleAllPageRowsSelected="toggleAllPageRowsSelected";var ln=function(e){e.getToggleRowSelectedProps=[Go],e.getToggleAllRowsSelectedProps=[Fo],e.getToggleAllPageRowsSelectedProps=[No],e.stateReducers.push(_o),e.useInstance.push(Vo),e.prepareRow.push(Do)};ln.pluginName="useRowSelect";var Go=function(e,t){var n=t.instance,r=t.row,s=n.manualRowSelectedKey,a=s===void 0?"isSelected":s;return[e,{onChange:function(l){r.toggleRowSelected(l.target.checked)},style:{cursor:"pointer"},checked:!(!r.original||!r.original[a])||r.isSelected,title:"Toggle Row Selected",indeterminate:r.isSomeSelected}]},Fo=function(e,t){var n=t.instance;return[e,{onChange:function(r){n.toggleAllRowsSelected(r.target.checked)},style:{cursor:"pointer"},checked:n.isAllRowsSelected,title:"Toggle All Rows Selected",indeterminate:!!(!n.isAllRowsSelected&&Object.keys(n.state.selectedRowIds).length)}]},No=function(e,t){var n=t.instance;return[e,{onChange:function(r){n.toggleAllPageRowsSelected(r.target.checked)},style:{cursor:"pointer"},checked:n.isAllPageRowsSelected,title:"Toggle All Current Page Rows Selected",indeterminate:!!(!n.isAllPageRowsSelected&&n.page.some((function(r){var s=r.id;return n.state.selectedRowIds[s]})))}]};function _o(e,t,n,r){if(t.type===i.init)return c({selectedRowIds:{}},e);if(t.type===i.resetSelectedRows)return c({},e,{selectedRowIds:r.initialState.selectedRowIds||{}});if(t.type===i.toggleAllRowsSelected){var s=t.value,a=r.isAllRowsSelected,l=r.rowsById,u=r.nonGroupedRowsById,d=u===void 0?l:u,p=s!==void 0?s:!a,v=Object.assign({},e.selectedRowIds);return p?Object.keys(d).forEach((function(U){v[U]=!0})):Object.keys(d).forEach((function(U){delete v[U]})),c({},e,{selectedRowIds:v})}if(t.type===i.toggleRowSelected){var f=t.id,h=t.value,m=r.rowsById,y=r.selectSubRows,x=y===void 0||y,R=r.getSubRows,T=e.selectedRowIds[f],N=h!==void 0?h:!T;if(T===N)return e;var S=c({},e.selectedRowIds);return(function U(J){var Z=m[J];if(Z&&(Z.isGrouped||(N?S[J]=!0:delete S[J]),x&&R(Z)))return R(Z).forEach((function(j){return U(j.id)}))})(f),c({},e,{selectedRowIds:S})}if(t.type===i.toggleAllPageRowsSelected){var w=t.value,A=r.page,P=r.rowsById,O=r.selectSubRows,D=O===void 0||O,M=r.isAllPageRowsSelected,E=r.getSubRows,$=w!==void 0?w:!M,W=c({},e.selectedRowIds);return A.forEach((function(U){return(function J(Z){var j=P[Z];if(j.isGrouped||($?W[Z]=!0:delete W[Z]),D&&E(j))return E(j).forEach((function(L){return J(L.id)}))})(U.id)})),c({},e,{selectedRowIds:W})}return e}function Vo(e){var t=e.data,n=e.rows,r=e.getHooks,s=e.plugins,a=e.rowsById,l=e.nonGroupedRowsById,u=l===void 0?a:l,d=e.autoResetSelectedRows,p=d===void 0||d,v=e.state.selectedRowIds,f=e.selectSubRows,h=f===void 0||f,m=e.dispatch,y=e.page,x=e.getSubRows;Se(s,["useFilters","useGroupBy","useSortBy","useExpanded","usePagination"],"useRowSelect");var R=g.useMemo((function(){var E=[];return n.forEach((function($){var W=h?(function U(J,Z,j){if(Z[J.id])return!0;var L=j(J);if(L&&L.length){var re=!0,ce=!1;return L.forEach((function(I){ce&&!re||(U(I,Z,j)?ce=!0:re=!1)})),!!re||!!ce&&null}return!1})($,v,x):!!v[$.id];$.isSelected=!!W,$.isSomeSelected=W===null,W&&E.push($)})),E}),[n,h,v,x]),T=!!(Object.keys(u).length&&Object.keys(v).length),N=T;T&&Object.keys(u).some((function(E){return!v[E]}))&&(T=!1),T||y&&y.length&&y.some((function(E){var $=E.id;return!v[$]}))&&(N=!1);var S=ee(p);we((function(){S()&&m({type:i.resetSelectedRows})}),[m,t]);var w=g.useCallback((function(E){return m({type:i.toggleAllRowsSelected,value:E})}),[m]),A=g.useCallback((function(E){return m({type:i.toggleAllPageRowsSelected,value:E})}),[m]),P=g.useCallback((function(E,$){return m({type:i.toggleRowSelected,id:E,value:$})}),[m]),O=ee(e),D=Q(r().getToggleAllRowsSelectedProps,{instance:O()}),M=Q(r().getToggleAllPageRowsSelectedProps,{instance:O()});Object.assign(e,{selectedFlatRows:R,isAllRowsSelected:T,isAllPageRowsSelected:N,toggleRowSelected:P,toggleAllRowsSelected:w,getToggleAllRowsSelectedProps:D,getToggleAllPageRowsSelectedProps:M,toggleAllPageRowsSelected:A})}function Do(e,t){var n=t.instance;e.toggleRowSelected=function(r){return n.toggleRowSelected(e.id,r)},e.getToggleRowSelectedProps=Q(n.getHooks().getToggleRowSelectedProps,{instance:n,row:e})}var un=function(e){return{}},dn=function(e){return{}};i.setRowState="setRowState",i.setCellState="setCellState",i.resetRowState="resetRowState";var cn=function(e){e.stateReducers.push(zo),e.useInstance.push(Lo),e.prepareRow.push(qo)};function zo(e,t,n,r){var s=r.initialRowStateAccessor,a=s===void 0?un:s,l=r.initialCellStateAccessor,u=l===void 0?dn:l,d=r.rowsById;if(t.type===i.init)return c({rowState:{}},e);if(t.type===i.resetRowState)return c({},e,{rowState:r.initialState.rowState||{}});if(t.type===i.setRowState){var p,v=t.rowId,f=t.value,h=e.rowState[v]!==void 0?e.rowState[v]:a(d[v]);return c({},e,{rowState:c({},e.rowState,(p={},p[v]=je(f,h),p))})}if(t.type===i.setCellState){var m,y,x,R,T,N=t.rowId,S=t.columnId,w=t.value,A=e.rowState[N]!==void 0?e.rowState[N]:a(d[N]),P=(A==null||(m=A.cellState)==null?void 0:m[S])!==void 0?A.cellState[S]:u((y=d[N])==null||(x=y.cells)==null?void 0:x.find((function(O){return O.column.id===S})));return c({},e,{rowState:c({},e.rowState,(T={},T[N]=c({},A,{cellState:c({},A.cellState||{},(R={},R[S]=je(w,P),R))}),T))})}}function Lo(e){var t=e.autoResetRowState,n=t===void 0||t,r=e.data,s=e.dispatch,a=g.useCallback((function(d,p){return s({type:i.setRowState,rowId:d,value:p})}),[s]),l=g.useCallback((function(d,p,v){return s({type:i.setCellState,rowId:d,columnId:p,value:v})}),[s]),u=ee(n);we((function(){u()&&s({type:i.resetRowState})}),[r]),Object.assign(e,{setRowState:a,setCellState:l})}function qo(e,t){var n=t.instance,r=n.initialRowStateAccessor,s=r===void 0?un:r,a=n.initialCellStateAccessor,l=a===void 0?dn:a,u=n.state.rowState;e&&(e.state=u[e.id]!==void 0?u[e.id]:s(e),e.setState=function(d){return n.setRowState(e.id,d)},e.cells.forEach((function(d){e.state.cellState||(e.state.cellState={}),d.state=e.state.cellState[d.column.id]!==void 0?e.state.cellState[d.column.id]:l(d),d.setState=function(p){return n.setCellState(e.id,d.column.id,p)}})))}cn.pluginName="useRowState",i.resetColumnOrder="resetColumnOrder",i.setColumnOrder="setColumnOrder";var pn=function(e){e.stateReducers.push(Jo),e.visibleColumnsDeps.push((function(t,n){var r=n.instance;return[].concat(t,[r.state.columnOrder])})),e.visibleColumns.push(Uo),e.useInstance.push(Xo)};function Jo(e,t,n,r){return t.type===i.init?c({columnOrder:[]},e):t.type===i.resetColumnOrder?c({},e,{columnOrder:r.initialState.columnOrder||[]}):t.type===i.setColumnOrder?c({},e,{columnOrder:je(t.columnOrder,e.columnOrder)}):void 0}function Uo(e,t){var n=t.instance.state.columnOrder;if(!n||!n.length)return e;for(var r=[].concat(n),s=[].concat(e),a=[],l=function(){var u=r.shift(),d=s.findIndex((function(p){return p.id===u}));d>-1&&a.push(s.splice(d,1)[0])};s.length&&r.length;)l();return[].concat(a,s)}function Xo(e){var t=e.dispatch;e.setColumnOrder=g.useCallback((function(n){return t({type:i.setColumnOrder,columnOrder:n})}),[t])}pn.pluginName="useColumnOrder",F.canResize=!0,i.columnStartResizing="columnStartResizing",i.columnResizing="columnResizing",i.columnDoneResizing="columnDoneResizing",i.resetResize="resetResize";var mn=function(e){e.getResizerProps=[$o],e.getHeaderProps.push({style:{position:"relative"}}),e.stateReducers.push(Ko),e.useInstance.push(Yo),e.useInstanceBeforeDimensions.push(Qo)},$o=function(e,t){var n=t.instance,r=t.header,s=n.dispatch,a=function(l,u){var d=!1;if(l.type==="touchstart"){if(l.touches&&l.touches.length>1)return;d=!0}var p,v,f=(function(S){var w=[];return(function A(P){P.columns&&P.columns.length&&P.columns.map(A),w.push(P)})(S),w})(u).map((function(S){return[S.id,S.totalWidth]})),h=d?Math.round(l.touches[0].clientX):l.clientX,m=function(){window.cancelAnimationFrame(p),p=null,s({type:i.columnDoneResizing})},y=function(){window.cancelAnimationFrame(p),p=null,s({type:i.columnResizing,clientX:v})},x=function(S){v=S,p||(p=window.requestAnimationFrame(y))},R={mouse:{moveEvent:"mousemove",moveHandler:function(S){return x(S.clientX)},upEvent:"mouseup",upHandler:function(S){document.removeEventListener("mousemove",R.mouse.moveHandler),document.removeEventListener("mouseup",R.mouse.upHandler),m()}},touch:{moveEvent:"touchmove",moveHandler:function(S){return S.cancelable&&(S.preventDefault(),S.stopPropagation()),x(S.touches[0].clientX),!1},upEvent:"touchend",upHandler:function(S){document.removeEventListener(R.touch.moveEvent,R.touch.moveHandler),document.removeEventListener(R.touch.upEvent,R.touch.moveHandler),m()}}},T=d?R.touch:R.mouse,N=!!(function(){if(typeof dt=="boolean")return dt;var S=!1;try{var w={get passive(){return S=!0,!1}};window.addEventListener("test",null,w),window.removeEventListener("test",null,w)}catch{S=!1}return dt=S})()&&{passive:!1};document.addEventListener(T.moveEvent,T.moveHandler,N),document.addEventListener(T.upEvent,T.upHandler,N),s({type:i.columnStartResizing,columnId:u.id,columnWidth:u.totalWidth,headerIdWidths:f,clientX:h})};return[e,{onMouseDown:function(l){return l.persist()||a(l,r)},onTouchStart:function(l){return l.persist()||a(l,r)},style:{cursor:"col-resize"},draggable:!1,role:"separator"}]};function Ko(e,t){if(t.type===i.init)return c({columnResizing:{columnWidths:{}}},e);if(t.type===i.resetResize)return c({},e,{columnResizing:{columnWidths:{}}});if(t.type===i.columnStartResizing){var n=t.clientX,r=t.columnId,s=t.columnWidth,a=t.headerIdWidths;return c({},e,{columnResizing:c({},e.columnResizing,{startX:n,headerIdWidths:a,columnWidth:s,isResizingColumn:r})})}if(t.type===i.columnResizing){var l=t.clientX,u=e.columnResizing,d=u.startX,p=u.columnWidth,v=u.headerIdWidths,f=(l-d)/p,h={};return(v===void 0?[]:v).forEach((function(m){var y=m[0],x=m[1];h[y]=Math.max(x+x*f,0)})),c({},e,{columnResizing:c({},e.columnResizing,{columnWidths:c({},e.columnResizing.columnWidths,{},h)})})}return t.type===i.columnDoneResizing?c({},e,{columnResizing:c({},e.columnResizing,{startX:null,isResizingColumn:null})}):void 0}mn.pluginName="useResizeColumns";var Qo=function(e){var t=e.flatHeaders,n=e.disableResizing,r=e.getHooks,s=e.state.columnResizing,a=ee(e);t.forEach((function(l){var u=Ce(l.disableResizing!==!0&&void 0,n!==!0&&void 0,!0);l.canResize=u,l.width=s.columnWidths[l.id]||l.originalWidth||l.width,l.isResizing=s.isResizingColumn===l.id,u&&(l.getResizerProps=Q(r().getResizerProps,{instance:a(),header:l}))}))};function Yo(e){var t=e.plugins,n=e.dispatch,r=e.autoResetResize,s=r===void 0||r,a=e.columns;Se(t,["useAbsoluteLayout"],"useResizeColumns");var l=ee(s);we((function(){l()&&n({type:i.resetResize})}),[a]);var u=g.useCallback((function(){return n({type:i.resetResize})}),[n]);Object.assign(e,{resetResizing:u})}var pt={position:"absolute",top:0},gn=function(e){e.getTableBodyProps.push(qe),e.getRowProps.push(qe),e.getHeaderGroupProps.push(qe),e.getFooterGroupProps.push(qe),e.getHeaderProps.push((function(t,n){var r=n.column;return[t,{style:c({},pt,{left:r.totalLeft+"px",width:r.totalWidth+"px"})}]})),e.getCellProps.push((function(t,n){var r=n.cell;return[t,{style:c({},pt,{left:r.column.totalLeft+"px",width:r.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(t,n){var r=n.column;return[t,{style:c({},pt,{left:r.totalLeft+"px",width:r.totalWidth+"px"})}]}))};gn.pluginName="useAbsoluteLayout";var qe=function(e,t){return[e,{style:{position:"relative",width:t.instance.totalColumnsWidth+"px"}}]},mt={display:"inline-block",boxSizing:"border-box"},gt=function(e,t){return[e,{style:{display:"flex",width:t.instance.totalColumnsWidth+"px"}}]},fn=function(e){e.getRowProps.push(gt),e.getHeaderGroupProps.push(gt),e.getFooterGroupProps.push(gt),e.getHeaderProps.push((function(t,n){var r=n.column;return[t,{style:c({},mt,{width:r.totalWidth+"px"})}]})),e.getCellProps.push((function(t,n){var r=n.cell;return[t,{style:c({},mt,{width:r.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(t,n){var r=n.column;return[t,{style:c({},mt,{width:r.totalWidth+"px"})}]}))};function hn(e){e.getTableProps.push(Zo),e.getRowProps.push(ft),e.getHeaderGroupProps.push(ft),e.getFooterGroupProps.push(ft),e.getHeaderProps.push(er),e.getCellProps.push(tr),e.getFooterProps.push(nr)}fn.pluginName="useBlockLayout",hn.pluginName="useFlexLayout";var Zo=function(e,t){return[e,{style:{minWidth:t.instance.totalColumnsMinWidth+"px"}}]},ft=function(e,t){return[e,{style:{display:"flex",flex:"1 0 auto",minWidth:t.instance.totalColumnsMinWidth+"px"}}]},er=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]},tr=function(e,t){var n=t.cell;return[e,{style:{boxSizing:"border-box",flex:n.column.totalFlexWidth+" 0 auto",minWidth:n.column.totalMinWidth+"px",width:n.column.totalWidth+"px"}}]},nr=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]};function yn(e){e.stateReducers.push(sr),e.getTableProps.push(or),e.getHeaderProps.push(rr),e.getRowProps.push(ar)}i.columnStartResizing="columnStartResizing",i.columnResizing="columnResizing",i.columnDoneResizing="columnDoneResizing",i.resetResize="resetResize",yn.pluginName="useGridLayout";var or=function(e,t){var n=t.instance;return[e,{style:{display:"grid",gridTemplateColumns:n.visibleColumns.map((function(r){var s;return n.state.gridLayout.columnWidths[r.id]?n.state.gridLayout.columnWidths[r.id]+"px":(s=n.state.columnResizing)!=null&&s.isResizingColumn?n.state.gridLayout.startWidths[r.id]+"px":typeof r.width=="number"?r.width+"px":r.width})).join(" ")}}]},rr=function(e,t){var n=t.column;return[e,{id:"header-cell-"+n.id,style:{position:"sticky",gridColumn:"span "+n.totalVisibleHeaderCount}}]},ar=function(e,t){var n=t.row;return n.isExpanded?[e,{style:{gridColumn:"1 / "+(n.cells.length+1)}}]:[e,{}]};function sr(e,t,n,r){if(t.type===i.init)return c({gridLayout:{columnWidths:{}}},e);if(t.type===i.resetResize)return c({},e,{gridLayout:{columnWidths:{}}});if(t.type===i.columnStartResizing){var s=t.columnId,a=t.headerIdWidths,l=ht(s);if(l!==void 0){var u=r.visibleColumns.reduce((function(w,A){var P;return c({},w,((P={})[A.id]=ht(A.id),P))}),{}),d=r.visibleColumns.reduce((function(w,A){var P;return c({},w,((P={})[A.id]=A.minWidth,P))}),{}),p=r.visibleColumns.reduce((function(w,A){var P;return c({},w,((P={})[A.id]=A.maxWidth,P))}),{}),v=a.map((function(w){var A=w[0];return[A,ht(A)]}));return c({},e,{gridLayout:c({},e.gridLayout,{startWidths:u,minWidths:d,maxWidths:p,headerIdGridWidths:v,columnWidth:l})})}return e}if(t.type===i.columnResizing){var f=t.clientX,h=e.columnResizing.startX,m=e.gridLayout,y=m.columnWidth,x=m.minWidths,R=m.maxWidths,T=m.headerIdGridWidths,N=(f-h)/y,S={};return(T===void 0?[]:T).forEach((function(w){var A=w[0],P=w[1];S[A]=Math.min(Math.max(x[A],P+P*N),R[A])})),c({},e,{gridLayout:c({},e.gridLayout,{columnWidths:c({},e.gridLayout.columnWidths,{},S)})})}return t.type===i.columnDoneResizing?c({},e,{gridLayout:c({},e.gridLayout,{startWidths:{},minWidths:{},maxWidths:{}})}):void 0}function ht(e){var t,n=(t=document.getElementById("header-cell-"+e))==null?void 0:t.offsetWidth;if(n!==void 0)return n}b._UNSTABLE_usePivotColumns=an,b.actions=i,b.defaultColumn=F,b.defaultGroupByFn=Zt,b.defaultOrderByFn=on,b.defaultRenderer=X,b.emptyRenderer=z,b.ensurePluginOrder=Se,b.flexRender=Ct,b.functionalUpdate=je,b.loopHooks=Pe,b.makePropGetter=Q,b.makeRenderer=it,b.reduceHooks=he,b.safeUseLayoutEffect=St,b.useAbsoluteLayout=gn,b.useAsyncDebounce=function(e,t){t===void 0&&(t=0);var n=g.useRef({}),r=ee(e),s=ee(t);return g.useCallback((function(){var a=q(regeneratorRuntime.mark((function l(){var u,d,p,v=arguments;return regeneratorRuntime.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:for(u=v.length,d=new Array(u),p=0;p<u;p++)d[p]=v[p];return n.current.promise||(n.current.promise=new Promise((function(h,m){n.current.resolve=h,n.current.reject=m}))),n.current.timeout&&clearTimeout(n.current.timeout),n.current.timeout=setTimeout(q(regeneratorRuntime.mark((function h(){return regeneratorRuntime.wrap((function(m){for(;;)switch(m.prev=m.next){case 0:return delete n.current.timeout,m.prev=1,m.t0=n.current,m.next=5,r().apply(void 0,d);case 5:m.t1=m.sent,m.t0.resolve.call(m.t0,m.t1),m.next=12;break;case 9:m.prev=9,m.t2=m.catch(1),n.current.reject(m.t2);case 12:return m.prev=12,delete n.current.promise,m.finish(12);case 15:case"end":return m.stop()}}),h,null,[[1,9,12,15]])}))),s()),f.abrupt("return",n.current.promise);case 5:case"end":return f.stop()}}),l)})));return function(){return a.apply(this,arguments)}})(),[r,s])},b.useBlockLayout=fn,b.useColumnOrder=pn,b.useExpanded=Gt,b.useFilters=Xt,b.useFlexLayout=hn,b.useGetLatest=ee,b.useGlobalFilter=$t,b.useGridLayout=yn,b.useGroupBy=Yt,b.useMountedLayoutEffect=we,b.usePagination=rn,b.useResizeColumns=mn,b.useRowSelect=ln,b.useRowState=cn,b.useSortBy=nn,b.useTable=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e=kt(e),n=[Wt].concat(n);var s=g.useRef({}),a=ee(s.current);Object.assign(a(),c({},e,{plugins:n,hooks:zn()})),n.filter(Boolean).forEach((function(I){I(a().hooks)}));var l=ee(a().hooks);a().getHooks=l,delete a().hooks,Object.assign(a(),he(l().useOptions,kt(e)));var u=a(),d=u.data,p=u.columns,v=u.initialState,f=u.defaultColumn,h=u.getSubRows,m=u.getRowId,y=u.stateReducer,x=u.useControlledState,R=ee(y),T=g.useCallback((function(I,te){if(!te.type)throw console.info({action:te}),new Error("Unknown Action 👆");return[].concat(l().stateReducers,Array.isArray(R())?R():[R()]).reduce((function(se,pe){return pe(se,te,I,a())||se}),I)}),[l,R,a]),N=g.useReducer(T,void 0,(function(){return T(v,{type:i.init})})),S=N[0],w=N[1],A=he([].concat(l().useControlledState,[x]),S,{instance:a()});Object.assign(a(),{state:A,dispatch:w});var P=g.useMemo((function(){return Tt(he(l().columns,p,{instance:a()}))}),[l,a,p].concat(he(l().columnsDeps,[],{instance:a()})));a().columns=P;var O=g.useMemo((function(){return he(l().allColumns,jt(P),{instance:a()}).map(Bt)}),[P,l,a].concat(he(l().allColumnsDeps,[],{instance:a()})));a().allColumns=O;var D=g.useMemo((function(){for(var I=[],te=[],se={},pe=[].concat(O);pe.length;){var ie=pe.shift();to({data:d,rows:I,flatRows:te,rowsById:se,column:ie,getRowId:m,getSubRows:h,accessValueHooks:l().accessValue,getInstance:a})}return[I,te,se]}),[O,d,m,h,l,a]),M=D[0],E=D[1],$=D[2];Object.assign(a(),{rows:M,initialRows:[].concat(M),flatRows:E,rowsById:$}),Pe(l().useInstanceAfterData,a());var W=g.useMemo((function(){return he(l().visibleColumns,O,{instance:a()}).map((function(I){return Ht(I,f)}))}),[l,O,a,f].concat(he(l().visibleColumnsDeps,[],{instance:a()})));O=g.useMemo((function(){var I=[].concat(W);return O.forEach((function(te){I.find((function(se){return se.id===te.id}))||I.push(te)})),I}),[O,W]),a().allColumns=O;var U=g.useMemo((function(){return he(l().headerGroups,En(W,f),a())}),[l,W,f,a].concat(he(l().headerGroupsDeps,[],{instance:a()})));a().headerGroups=U;var J=g.useMemo((function(){return U.length?U[0].headers:[]}),[U]);a().headers=J,a().flatHeaders=U.reduce((function(I,te){return[].concat(I,te.headers)}),[]),Pe(l().useInstanceBeforeDimensions,a());var Z=W.filter((function(I){return I.isVisible})).map((function(I){return I.id})).sort().join("_");W=g.useMemo((function(){return W.filter((function(I){return I.isVisible}))}),[W,Z]),a().visibleColumns=W;var j=At(J),L=j[0],re=j[1],ce=j[2];return a().totalColumnsMinWidth=L,a().totalColumnsWidth=re,a().totalColumnsMaxWidth=ce,Pe(l().useInstance,a()),[].concat(a().flatHeaders,a().allColumns).forEach((function(I){I.render=it(a(),I),I.getHeaderProps=Q(l().getHeaderProps,{instance:a(),column:I}),I.getFooterProps=Q(l().getFooterProps,{instance:a(),column:I})})),a().headerGroups=g.useMemo((function(){return U.filter((function(I,te){return I.headers=I.headers.filter((function(se){return se.headers?(function pe(ie){return ie.filter((function(He){return He.headers?pe(He.headers):He.isVisible})).length})(se.headers):se.isVisible})),!!I.headers.length&&(I.getHeaderGroupProps=Q(l().getHeaderGroupProps,{instance:a(),headerGroup:I,index:te}),I.getFooterGroupProps=Q(l().getFooterGroupProps,{instance:a(),headerGroup:I,index:te}),!0)}))}),[U,a,l]),a().footerGroups=[].concat(a().headerGroups).reverse(),a().prepareRow=g.useCallback((function(I){I.getRowProps=Q(l().getRowProps,{instance:a(),row:I}),I.allCells=O.map((function(te){var se=I.values[te.id],pe={column:te,row:I,value:se};return pe.getCellProps=Q(l().getCellProps,{instance:a(),cell:pe}),pe.render=it(a(),te,{row:I,cell:pe,value:se}),pe})),I.cells=W.map((function(te){return I.allCells.find((function(se){return se.column.id===te.id}))})),Pe(l().prepareRow,I,{instance:a()})}),[l,a,O,W]),a().getTableProps=Q(l().getTableProps,{instance:a()}),a().getTableBodyProps=Q(l().getTableBodyProps,{instance:a()}),Pe(l().useFinalInstance,a()),a()},Object.defineProperty(b,"__esModule",{value:!0})}))})(Fe,Fe.exports)),Fe.exports}var Hn;function Hr(){return Hn||(Hn=1,Rt.exports=Br()),Rt.exports}var fe=Hr();const ua={title:"Components/Table",component:ve,parameters:{controls:{disable:!0},actions:{argTypesRegex:"^on.*"}}},Y={selection:"52px",status:"120px",type:"120px",createdBy:"120px",lastModifiedOn:"160px"},Ne=()=>o.jsxs(ve,{children:[o.jsx(Re,{children:o.jsxs(oe,{children:[o.jsx(ge,{children:"first column"}),o.jsx(ge,{children:"second column"}),o.jsx(ge,{children:"third column"}),o.jsx(ge,{children:"fourth column"})]})}),o.jsxs(xe,{children:[o.jsxs(oe,{isHighlighted:!0,children:[o.jsx(ne,{iconStart:o.jsx(xt,{color:"red"}),children:"cell 1"}),o.jsx(ne,{children:"cell 2"}),o.jsx(ne,{children:"cell 3"}),o.jsxs(ne,{children:[o.jsx(Te,{variant:"ghost",icon:o.jsx(G,{})}),o.jsx(Te,{variant:"ghost",icon:o.jsx(bt,{})})]})]}),o.jsxs(oe,{children:[o.jsx(ne,{iconStart:o.jsx(xt,{color:"red"}),children:"cell 4"}),o.jsx(ne,{children:"cell 5"}),o.jsx(ne,{children:"cell 6"}),o.jsxs(ne,{children:[o.jsx(Te,{variant:"ghost",icon:o.jsx(G,{})}),o.jsx(Te,{variant:"ghost",icon:o.jsx(bt,{})})]})]}),o.jsxs(oe,{children:[o.jsx(ne,{iconStart:o.jsx(xt,{color:"red"}),children:"cell 7"}),o.jsx(ne,{children:"cell 8"}),o.jsx(ne,{children:"cell 9"}),o.jsxs(ne,{children:[o.jsx(Te,{variant:"ghost",icon:o.jsx(G,{})}),o.jsx(Te,{variant:"ghost",icon:o.jsx(bt,{})})]})]})]})]}),Ze={render:()=>{const H=ae.useMemo(()=>Pt,[]),V=ae.useMemo(()=>[{Header:"Name",id:"name",accessor:_=>_.name.value,Cell:_=>{const{row:B}=_;return o.jsx(ze,{iconStart:B.original.name.icon,children:B.values.name})}},{Header:"Status",accessor:"status",customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:b,getTableBodyProps:g,headerGroups:k,rows:q,prepareRow:c}=fe.useTable({data:H,columns:V});return o.jsxs(ve,{...b(),children:[o.jsx(Re,{children:k.map(_=>o.jsx(oe,{..._.getHeaderGroupProps(),children:_.headers.map(B=>o.jsx(ge,{...B.getHeaderProps(),width:B.customWidth,children:B.render("Header")}))}))}),o.jsx(xe,{...g(),children:q.map(_=>(c(_),o.jsx(oe,{..._.getRowProps(),children:_.cells.map(B=>o.jsx(ne,{...B.getCellProps(),width:B.column.customWidth,children:B.render("Cell")}))})))})]})},name:"Basic Table with React-Table"},et={render:()=>{const H=ae.useMemo(()=>Pt,[]),V=ae.useMemo(()=>[{id:"selection",Header:i=>o.jsx(Oe,{...i.getToggleAllRowsSelectedProps()}),Cell:i=>o.jsx(Oe,{...i.row.getToggleRowSelectedProps()}),customWidth:Y.selection},{Header:"Name",id:"name",accessor:i=>i.name.value,Cell:i=>{const{row:X}=i;return o.jsx(ze,{iconStart:X.original.name.icon,children:X.values.name})}},{Header:"Status",accessor:"status",customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:b,getTableBodyProps:g,headerGroups:k,rows:q,prepareRow:c,selectedFlatRows:_,state:{selectedRowIds:B}}=fe.useTable({data:H,columns:V},fe.useRowSelect);return o.jsxs(o.Fragment,{children:[o.jsxs(ve,{...b(),children:[o.jsx(Re,{children:k.map(i=>o.jsx(oe,{...i.getHeaderGroupProps(),children:i.headers.map(X=>o.jsx(ge,{...X.getHeaderProps(),width:X.customWidth,children:X.render("Header")}))}))}),o.jsx(xe,{...g(),children:q.map((i,X)=>(c(i),o.jsx(oe,{isSelected:i.isSelected,isHighlighted:X===1,...i.getRowProps(),children:i.cells.map(z=>o.jsx(ne,{...z.getCellProps(),width:z.column.customWidth,children:z.render("Cell")}))})))})]}),o.jsx("section",{children:o.jsx("pre",{children:o.jsx("code",{className:"storyCode",children:JSON.stringify({selectedRowIds:B,"selectedFlatRows[].original":_.map(i=>i.original)},null,2)})})})]})},name:"Selectable Rows with React-Table"},tt={render:()=>{const H=ae.useMemo(()=>Pt,[]),V=ae.useMemo(()=>[{Header:"Name",id:"name",accessor:B=>B.name.value,Cell:B=>{const{row:i}=B;return o.jsx(ze,{iconStart:i.original.name.icon,children:i.values.name})}},{Header:"Status",accessor:"status",disableSortBy:!0,customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:b,getTableBodyProps:g,headerGroups:k,rows:q,prepareRow:c}=fe.useTable({data:H,columns:V,initialState:{sortBy:[{id:"lastModifiedOn",desc:!0}]},disableSortRemove:!0},fe.useSortBy),_=(B,i)=>{const X=i?"descending":"ascending";return o.jsx(We,{isSorted:B,direction:X})};return o.jsxs(ve,{...b(),children:[o.jsx(Re,{children:k.map(B=>o.jsx(oe,{...B.getHeaderGroupProps(),children:B.headers.map(i=>o.jsx(ge,{...i.getHeaderProps(i.getSortByToggleProps()),iconEnd:i.canSort&&_(i.isSorted,i.isSortedDesc),width:i.customWidth,children:i.render("Header")}))}))}),o.jsx(xe,{...g(),children:q.map(B=>(c(B),o.jsx(oe,{...B.getRowProps(),isHighlighted:B.values.name==="Highlight Row",children:B.cells.map(i=>o.jsx(ne,{...i.getCellProps(),width:i.column.customWidth,children:i.render("Cell")}))})))})]})},name:"Sorting by Column with React-Table"},nt={render:()=>{const[H,V]=Ee.useState(5),[b,g]=Ee.useState(1),k=ae.useMemo(()=>Ie.slice((b-1)*H,Math.min(Ie.length,b*H)),[b,H]),q=ae.useMemo(()=>[{Header:"Name",id:"name",accessor:z=>z.name.value,Cell:z=>{const{row:F}=z;return o.jsx(ze,{iconStart:F.original.name.icon,children:F.values.name})}},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:c,getTableBodyProps:_,headerGroups:B,rows:i,prepareRow:X}=fe.useTable({data:k,columns:q});return o.jsxs(o.Fragment,{children:[o.jsxs(ve,{...c(),children:[o.jsx(Re,{children:B.map(z=>o.jsx(oe,{...z.getHeaderGroupProps(),children:z.headers.map(F=>o.jsx(ge,{...F.getHeaderProps(),width:F.customWidth,children:F.render("Header")}))}))}),o.jsx(xe,{..._(),children:i.map(z=>(X(z),o.jsx(oe,{...z.getRowProps(),children:z.cells.map(F=>o.jsx(ne,{...F.getCellProps(),width:F.column.customWidth,children:F.render("Cell")}))})))})]}),o.jsx(De,{currentPage:b,totalNumberOfRows:Ie.length,rowsPerPage:H,onRowsPerPageChange:z=>V(z),onPageChange:z=>g(z)})]})},name:"Pagination with React-Table"},ot={render:()=>{const H=ae.useMemo(()=>In,[]),V=ae.useMemo(()=>[{Header:"Name",id:"name",accessor:B=>B.name.value},{Header:"Status",accessor:"status",customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:b,getTableBodyProps:g,headerGroups:k,rows:q,prepareRow:c,toggleAllRowsExpanded:_}=fe.useTable({data:H,columns:V},fe.useExpanded);return Ee.useEffect(()=>{_()},[_]),o.jsxs(ve,{...b(),children:[o.jsx(Re,{children:k.map(B=>o.jsx(oe,{...B.getHeaderGroupProps(),children:B.headers.map(i=>o.jsx(ge,{...i.getHeaderProps(),width:i.customWidth,children:i.render("Header")}))}))}),o.jsx(xe,{...g(),children:q.map(B=>(c(B),o.jsx(oe,{...B.getRowProps(),children:B.cells.map(i=>o.jsx(ne,{...i.getCellProps(),row:B,cell:i,isExpandableColumn:i.column.id==="name",iconStart:B.original[i.column.id]?.icon,width:i.column.customWidth,children:i.render("Cell")}))})))})]})},name:"Structured View with React-Table"},_e=()=>{const b=[],g=[];for(let k=1;k<=4;k++)b.push("column "+k);for(let k=1;k<=20;k++)g.push("row "+k);return o.jsxs(ve,{children:[o.jsx(Re,{isSticky:!0,children:o.jsx(oe,{children:b.map(k=>o.jsx(ge,{children:k},k))})}),o.jsx(xe,{children:g.map(k=>o.jsx(oe,{children:b.map(q=>o.jsx(ne,{children:"this is a cell!"},k+q))},k))})]})},rt={render:()=>{const[H,V]=Ee.useState(5),[b,g]=Ee.useState(1),k=ae.useMemo(()=>Ie.slice((b-1)*H,Math.min(Ie.length,b*H)),[b,H]),q=ae.useMemo(()=>[{id:"selection",customWidth:Y.selection,Header:F=>o.jsx(Oe,{...F.getToggleAllRowsSelectedProps()}),Cell:F=>o.jsx(Oe,{...F.row.getToggleRowSelectedProps()})},{Header:"Name",id:"name",accessor:F=>F.name.value},{Header:"Status",accessor:"status",disableSortBy:!0,customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:c,getTableBodyProps:_,headerGroups:B,rows:i,prepareRow:X}=fe.useTable({data:k,columns:q,initialState:{sortBy:[{id:"lastModifiedOn",desc:!0}]},disableSortRemove:!0},fe.useSortBy,fe.useRowSelect),z=(F,de)=>{const Q=de?"descending":"ascending";return o.jsx(We,{isSorted:F,direction:Q})};return o.jsxs(o.Fragment,{children:[o.jsxs(ve,{...c(),children:[o.jsx(Re,{isSticky:!0,children:B.map(F=>o.jsx(oe,{...F.getHeaderGroupProps(),children:F.headers.map(de=>o.jsx(ge,{...de.getHeaderProps(de.getSortByToggleProps()),iconEnd:de.canSort&&z(de.isSorted,de.isSortedDesc),width:de.customWidth,children:de.render("Header")}))}))}),o.jsx(xe,{..._(),children:i.map((F,de)=>(X(F),o.jsx(oe,{isSelected:F.isSelected,isHighlighted:de===1,...F.getRowProps(),children:F.cells.map(Q=>o.jsx(ne,{...Q.getCellProps(),iconStart:F.original[Q.column.id]?.icon,width:Q.column.customWidth,children:Q.render("Cell")}))})))})]}),o.jsx(De,{currentPage:b,totalNumberOfRows:Ie.length,rowsPerPage:H,onRowsPerPageChange:F=>V(F),onPageChange:F=>g(F)})]})},name:"All features except row expansion - flat data"},at={render:()=>{const H=ae.useMemo(()=>In,[]),V=ae.useMemo(()=>[{id:"selection",customWidth:Y.selection,Header:i=>o.jsx(Oe,{...i.getToggleAllRowsSelectedProps()}),Cell:i=>o.jsx(Oe,{...i.row.getToggleRowSelectedProps()})},{Header:"Name",id:"name",accessor:i=>i.name.value},{Header:"Status",accessor:"status",disableSortBy:!0,customWidth:Y.status},{Header:"Type",accessor:"type",customWidth:Y.type},{Header:"Created By",accessor:"createdBy",customWidth:Y.createdBy},{Header:"Last Modified On",accessor:"lastModifiedOn",customWidth:Y.lastModifiedOn}],[]),{getTableProps:b,getTableBodyProps:g,headerGroups:k,rows:q,prepareRow:c,toggleAllRowsExpanded:_}=fe.useTable({data:H,columns:V,initialState:{sortBy:[{id:"lastModifiedOn",desc:!0}]},disableSortRemove:!0},fe.useSortBy,fe.useExpanded,fe.useRowSelect),B=(i,X)=>{const z=X?"descending":"ascending";return o.jsx(We,{isSorted:i,direction:z})};return Ee.useEffect(()=>{_()},[_]),o.jsxs(ve,{...b(),children:[o.jsx(Re,{isSticky:!0,children:k.map(i=>o.jsx(oe,{...i.getHeaderGroupProps(),children:i.headers.map(X=>o.jsx(ge,{...X.getHeaderProps(X.getSortByToggleProps()),iconEnd:X.canSort&&B(X.isSorted,X.isSortedDesc),width:X.customWidth,children:X.render("Header")}))}))}),o.jsx(xe,{...g(),children:q.map((i,X)=>(c(i),o.jsx(oe,{isSelected:i.isSelected,isHighlighted:X===1,...i.getRowProps(),children:i.cells.map(z=>o.jsx(ne,{...z.getCellProps(),row:i,cell:z,isExpandableColumn:z.column.id==="name",iconStart:i.original[z.column.id]?.icon,width:z.column.customWidth,children:z.render("Cell")}))})))})]})},name:"All features except pagination - nested data"};Ne.__docgenInfo={description:"",methods:[],displayName:"Basic"};_e.__docgenInfo={description:"",methods:[],displayName:"StickyHeader"};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`() => <Table>
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
}`,...Ze.parameters?.docs?.source}}};et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`{
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
}`,...et.parameters?.docs?.source}}};tt.parameters={...tt.parameters,docs:{...tt.parameters?.docs,source:{originalSource:`{
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
}`,...tt.parameters?.docs?.source}}};nt.parameters={...nt.parameters,docs:{...nt.parameters?.docs,source:{originalSource:`{
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
}`,...nt.parameters?.docs?.source}}};ot.parameters={...ot.parameters,docs:{...ot.parameters?.docs,source:{originalSource:`{
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
}`,...ot.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`() => {
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
}`,..._e.parameters?.docs?.source}}};rt.parameters={...rt.parameters,docs:{...rt.parameters?.docs,source:{originalSource:`{
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
}`,...rt.parameters?.docs?.source}}};at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:`{
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
}`,...at.parameters?.docs?.source}}};const da=["Basic","BasicReactTable","SelectableRows","SortingByColumn","Pagination","StructuredView","StickyHeader","KitchenSinkFlat","KitchenSinkNested"];export{Ne as Basic,Ze as BasicReactTable,rt as KitchenSinkFlat,at as KitchenSinkNested,nt as Pagination,et as SelectableRows,tt as SortingByColumn,_e as StickyHeader,ot as StructuredView,da as __namedExportsOrder,ua as default};
