import{a as e,n as t,t as n}from"./chunk-BneVvdWh.js";import{a as r}from"./iframe-BVsvMGH4.js";import{t as i}from"./jsx-runtime-B6JWlyvB.js";import{Gt as a,Nt as o,d as s,f as c,g as l,h as u,i as d,it as f,l as p,m,p as h,t as g,u as _}from"./icons-Dxh7SjmP.js";import{n as v,t as y}from"./css-utils-BlnxTXwI.js";import{D as b,H as x,s as S}from"./Thumbnail-DFO8t8sM.js";import{t as C}from"./storybook-ZkaiIgK-.js";import{i as w,n as T,r as E,t as D}from"./data-Cpy-A6Eh.js";var O=n(((e,t)=>{(function(n,i){typeof e==`object`&&t!==void 0?i(e,r()):typeof define==`function`&&define.amd?define([`exports`,`react`],i):i((n||=self).ReactTable={},n.React)})(e,(function(e,t){function n(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,c,`next`,e)}function c(e){n(o,i,a,s,c,`throw`,e)}s(void 0)}))}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(e==null)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function o(e){var t=function(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}(e,`string`);return typeof t==`symbol`?t:String(t)}t=t&&Object.prototype.hasOwnProperty.call(t,`default`)?t.default:t;var s={init:`init`},c=function(e){var t=e.value;return t===void 0?``:t},l=function(){return t.createElement(t.Fragment,null,`\xA0`)},u={Cell:c,width:150,minWidth:0,maxWidth:2**53-1};function d(){return[...arguments].reduce((function(e,t){var n=t.style,r=t.className;return e=i({},e,{},a(t,[`style`,`className`])),n&&(e.style=e.style?i({},e.style||{},{},n||{}):n),r&&(e.className=e.className?e.className+` `+r:r),e.className===``&&delete e.className,e}),{})}var f=function(e,t){return t===void 0&&(t={}),function(n){return n===void 0&&(n={}),[].concat(e,[n]).reduce((function(e,r){return function e(t,n,r){return typeof n==`function`?e({},n(t,r)):Array.isArray(n)?d.apply(void 0,[t].concat(n)):d(t,n)}(e,r,i({},t,{userProps:n}))}),{})}},p=function(e,t,n,r){return n===void 0&&(n={}),e.reduce((function(e,t){return t(e,n)}),t)},m=function(e,t,n){return n===void 0&&(n={}),e.forEach((function(e){e(t,n)}))};function h(e,t,n,r){e.findIndex((function(e){return e.pluginName===n})),t.forEach((function(t){e.findIndex((function(e){return e.pluginName===t}))}))}function g(e,t){return typeof e==`function`?e(t):e}function _(e){var n=t.useRef();return n.current=e,t.useCallback((function(){return n.current}),[])}var v=typeof document<`u`?t.useLayoutEffect:t.useEffect;function y(e,n){var r=t.useRef(!1);v((function(){r.current&&e(),r.current=!0}),n)}function b(e,t,n){return n===void 0&&(n={}),function(r,a){a===void 0&&(a={});var o=typeof r==`string`?t[r]:r;if(o===void 0)throw console.info(t),Error(`Renderer Error ☝️`);return x(o,i({},e,{column:t},n,{},a))}}function x(e,n){return function(e){return typeof e==`function`&&(t=Object.getPrototypeOf(e)).prototype&&t.prototype.isReactComponent;var t}(r=e)||typeof r==`function`||function(e){return typeof e==`object`&&typeof e.$$typeof==`symbol`&&[`react.memo`,`react.forward_ref`].includes(e.$$typeof.description)}(r)?t.createElement(e,n):e;var r}function S(e,t,n){return n===void 0&&(n=0),e.map((function(e){return w(e=i({},e,{parent:t,depth:n})),e.columns&&=S(e.columns,e,n+1),e}))}function C(e){return A(e,`columns`)}function w(e){var t=e.id,n=e.accessor,r=e.Header;if(typeof n==`string`){t||=n;var i=n.split(`.`);n=function(e){return function(e,t,n){if(!t)return e;var r,i=typeof t==`function`?t:JSON.stringify(t),a=D.get(i)||function(){var e=function(e){return function e(t,n){if(n===void 0&&(n=[]),Array.isArray(t))for(var r=0;r<t.length;r+=1)e(t[r],n);else n.push(t);return n}(e).map((function(e){return String(e).replace(`.`,`_`)})).join(`.`).replace(I,`.`).replace(L,``).split(`.`)}(t);return D.set(i,e),e}();try{r=a.reduce((function(e,t){return e[t]}),e)}catch{}return r===void 0?n:r}(e,i)}}if(!t&&typeof r==`string`&&r&&(t=r),!t&&e.columns)throw console.error(e),Error(`A column ID (or unique "Header" value) is required!`);if(!t)throw console.error(e),Error(`A column ID (or string accessor) is required!`);return Object.assign(e,{id:t,accessor:n}),e}function T(e,t){if(!t)throw Error();return Object.assign(e,i({Header:l,Footer:l},u,{},t,{},e)),Object.assign(e,{originalWidth:e.width}),e}function E(e,t,n){n===void 0&&(n=function(){return{}});for(var r=[],a=e,o=0,s=function(){return o++},c=function(){var e={headers:[]},o=[],c=a.some((function(e){return e.parent}));a.forEach((function(r){var a,l=[].concat(o).reverse()[0];c&&(a=r.parent?i({},r.parent,{originalId:r.parent.id,id:r.parent.id+`_`+s(),headers:[r]},n(r)):T(i({originalId:r.id+`_placeholder`,id:r.id+`_placeholder_`+s(),placeholderOf:r,headers:[r]},n(r)),t),l&&l.originalId===a.originalId?l.headers.push(r):o.push(a)),e.headers.push(r)})),r.push(e),a=o};a.length;)c();return r.reverse()}var D=new Map;function O(){for(var e=[...arguments],t=0;t<e.length;t+=1)if(e[t]!==void 0)return e[t]}function k(e){if(typeof e==`function`)return e}function A(e,t){var n=[];return function e(r){r.forEach((function(r){r[t]?e(r[t]):n.push(r)}))}(e),n}function j(e,t){var n=t.manualExpandedKey,r=t.expanded,i=t.expandSubRows,a=i===void 0||i,o=[];return e.forEach((function(e){return function e(t,i){i===void 0&&(i=!0),t.isExpanded=t.original&&t.original[n]||r[t.id],t.canExpand=t.subRows&&!!t.subRows.length,i&&o.push(t),t.subRows&&t.subRows.length&&t.isExpanded&&t.subRows.forEach((function(t){return e(t,a)}))}(e)})),o}function M(e,t,n){return k(e)||t[e]||n[e]||n.text}function N(e,t,n){return e?e(t,n):t===void 0}function P(){throw Error(`React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.`)}var F=null,I=/\[/g,L=/\]/g,R=function(e){return i({role:`table`},e)},z=function(e){return i({role:`rowgroup`},e)},B=function(e,t){var n=t.column;return i({key:`header_`+n.id,colSpan:n.totalVisibleHeaderCount,role:`columnheader`},e)},V=function(e,t){var n=t.column;return i({key:`footer_`+n.id,colSpan:n.totalVisibleHeaderCount},e)},H=function(e,t){return i({key:`headerGroup_`+t.index,role:`row`},e)},U=function(e,t){return i({key:`footerGroup_`+t.index},e)},W=function(e,t){return i({key:`row_`+t.row.id,role:`row`},e)},ee=function(e,t){var n=t.cell;return i({key:`cell_`+n.row.id+`_`+n.column.id,role:`cell`},e)};function te(){return{useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[R],getTableBodyProps:[z],getHeaderGroupProps:[H],getFooterGroupProps:[U],getHeaderProps:[B],getFooterProps:[V],getRowProps:[W],getCellProps:[ee],useFinalInstance:[]}}s.resetHiddenColumns=`resetHiddenColumns`,s.toggleHideColumn=`toggleHideColumn`,s.setHiddenColumns=`setHiddenColumns`,s.toggleHideAllColumns=`toggleHideAllColumns`;var ne=function(e){e.getToggleHiddenProps=[re],e.getToggleHideAllColumnsProps=[ie],e.stateReducers.push(ae),e.useInstanceBeforeDimensions.push(oe),e.headerGroupsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.hiddenColumns])})),e.useInstance.push(se)};ne.pluginName=`useColumnVisibility`;var re=function(e,t){var n=t.column;return[e,{onChange:function(e){n.toggleHidden(!e.target.checked)},style:{cursor:`pointer`},checked:n.isVisible,title:`Toggle Column Visible`}]},ie=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleHideAllColumns(!e.target.checked)},style:{cursor:`pointer`},checked:!n.allColumnsHidden&&!n.state.hiddenColumns.length,title:`Toggle All Columns Hidden`,indeterminate:!n.allColumnsHidden&&n.state.hiddenColumns.length}]};function ae(e,t,n,r){if(t.type===s.init)return i({hiddenColumns:[]},e);if(t.type===s.resetHiddenColumns)return i({},e,{hiddenColumns:r.initialState.hiddenColumns||[]});if(t.type===s.toggleHideColumn){var a=(t.value===void 0?!e.hiddenColumns.includes(t.columnId):t.value)?[].concat(e.hiddenColumns,[t.columnId]):e.hiddenColumns.filter((function(e){return e!==t.columnId}));return i({},e,{hiddenColumns:a})}return t.type===s.setHiddenColumns?i({},e,{hiddenColumns:g(t.value,e.hiddenColumns)}):t.type===s.toggleHideAllColumns?i({},e,{hiddenColumns:(t.value===void 0?!e.hiddenColumns.length:t.value)?r.allColumns.map((function(e){return e.id})):[]}):void 0}function oe(e){var n=e.headers,r=e.state.hiddenColumns;t.useRef(!1).current;var i=0;n.forEach((function(e){return i+=function e(t,n){t.isVisible=n&&!r.includes(t.id);var i=0;return t.headers&&t.headers.length?t.headers.forEach((function(n){return i+=e(n,t.isVisible)})):i=t.isVisible?1:0,t.totalVisibleHeaderCount=i,i}(e,!0)}))}function se(e){var n=e.columns,r=e.flatHeaders,i=e.dispatch,a=e.allColumns,o=e.getHooks,c=e.state.hiddenColumns,l=e.autoResetHiddenColumns,u=l===void 0||l,d=_(e),p=a.length===c.length,m=t.useCallback((function(e,t){return i({type:s.toggleHideColumn,columnId:e,value:t})}),[i]),h=t.useCallback((function(e){return i({type:s.setHiddenColumns,value:e})}),[i]),g=t.useCallback((function(e){return i({type:s.toggleHideAllColumns,value:e})}),[i]),v=f(o().getToggleHideAllColumnsProps,{instance:d()});r.forEach((function(e){e.toggleHidden=function(t){i({type:s.toggleHideColumn,columnId:e.id,value:t})},e.getToggleHiddenProps=f(o().getToggleHiddenProps,{instance:d(),column:e})}));var b=_(u);y((function(){b()&&i({type:s.resetHiddenColumns})}),[i,n]),Object.assign(e,{allColumnsHidden:p,toggleHideColumn:m,setHiddenColumns:h,toggleHideAllColumns:g,getToggleHideAllColumnsProps:v})}var ce={},le={},ue=function(e,t,n){return e},de=function(e,t){return e.subRows||[]},fe=function(e,t,n){return``+(n?[n.id,t].join(`.`):t)},pe=function(e){return e};function me(e){var t=e.initialState,n=t===void 0?ce:t,r=e.defaultColumn,o=r===void 0?le:r,s=e.getSubRows,c=s===void 0?de:s,l=e.getRowId,u=l===void 0?fe:l,d=e.stateReducer,f=d===void 0?ue:d,p=e.useControlledState,m=p===void 0?pe:p;return i({},a(e,[`initialState`,`defaultColumn`,`getSubRows`,`getRowId`,`stateReducer`,`useControlledState`]),{initialState:n,defaultColumn:o,getSubRows:c,getRowId:u,stateReducer:f,useControlledState:m})}function he(e,t){t===void 0&&(t=0);var n=0,r=0,i=0,a=0;return e.forEach((function(e){var o=e.headers;if(e.totalLeft=t,o&&o.length){var s=he(o,t),c=s[0],l=s[1],u=s[2],d=s[3];e.totalMinWidth=c,e.totalWidth=l,e.totalMaxWidth=u,e.totalFlexWidth=d}else e.totalMinWidth=e.minWidth,e.totalWidth=Math.min(Math.max(e.minWidth,e.width),e.maxWidth),e.totalMaxWidth=e.maxWidth,e.totalFlexWidth=e.canResize?e.totalWidth:0;e.isVisible&&(t+=e.totalWidth,n+=e.totalMinWidth,r+=e.totalWidth,i+=e.totalMaxWidth,a+=e.totalFlexWidth)})),[n,r,i,a]}function ge(e){var t=e.data,n=e.rows,r=e.flatRows,i=e.rowsById,a=e.column,o=e.getRowId,s=e.getSubRows,c=e.accessValueHooks,l=e.getInstance;t.forEach((function(e,u){return function e(n,u,d,f,m){d===void 0&&(d=0);var h=n,g=o(n,u,f),_=i[g];if(_)_.subRows&&_.originalSubRows.forEach((function(t,n){return e(t,n,d+1,_)}));else if((_={id:g,original:h,index:u,depth:d,cells:[{}]}).cells.map=P,_.cells.filter=P,_.cells.forEach=P,_.cells[0].getCellProps=P,_.values={},m.push(_),r.push(_),i[g]=_,_.originalSubRows=s(n,u),_.originalSubRows){var v=[];_.originalSubRows.forEach((function(t,n){return e(t,n,d+1,_,v)})),_.subRows=v}a.accessor&&(_.values[a.id]=a.accessor(n,u,_,m,t)),_.values[a.id]=p(c,_.values[a.id],{row:_,column:a,instance:l()})}(e,u,0,void 0,n)}))}s.resetExpanded=`resetExpanded`,s.toggleRowExpanded=`toggleRowExpanded`,s.toggleAllRowsExpanded=`toggleAllRowsExpanded`;var _e=function(e){e.getToggleAllRowsExpandedProps=[ve],e.getToggleRowExpandedProps=[ye],e.stateReducers.push(be),e.useInstance.push(xe),e.prepareRow.push(Se)};_e.pluginName=`useExpanded`;var ve=function(e,t){var n=t.instance;return[e,{onClick:function(e){n.toggleAllRowsExpanded()},style:{cursor:`pointer`},title:`Toggle All Rows Expanded`}]},ye=function(e,t){var n=t.row;return[e,{onClick:function(){n.toggleRowExpanded()},style:{cursor:`pointer`},title:`Toggle Row Expanded`}]};function be(e,t,n,r){if(t.type===s.init)return i({expanded:{}},e);if(t.type===s.resetExpanded)return i({},e,{expanded:r.initialState.expanded||{}});if(t.type===s.toggleAllRowsExpanded){var c=t.value,l=r.rowsById,u=Object.keys(l).length===Object.keys(e.expanded).length;if(c===void 0?!u:c){var d={};return Object.keys(l).forEach((function(e){d[e]=!0})),i({},e,{expanded:d})}return i({},e,{expanded:{}})}if(t.type===s.toggleRowExpanded){var f,p=t.id,m=t.value,h=e.expanded[p],g=m===void 0?!h:m;if(!h&&g)return i({},e,{expanded:i({},e.expanded,(f={},f[p]=!0,f))});if(h&&!g){var _=e.expanded;return _[p],i({},e,{expanded:a(_,[p].map(o))})}return e}}function xe(e){var n=e.data,r=e.rows,i=e.rowsById,a=e.manualExpandedKey,o=a===void 0?`expanded`:a,c=e.paginateExpandedRows,l=c===void 0||c,u=e.expandSubRows,d=u===void 0||u,p=e.autoResetExpanded,m=p===void 0||p,g=e.getHooks,v=e.plugins,b=e.state.expanded,x=e.dispatch;h(v,[`useSortBy`,`useGroupBy`,`usePivotColumns`,`useGlobalFilter`],`useExpanded`);var S=_(m),C=!!(Object.keys(i).length&&Object.keys(b).length);C&&Object.keys(i).some((function(e){return!b[e]}))&&(C=!1),y((function(){S()&&x({type:s.resetExpanded})}),[x,n]);var w=t.useCallback((function(e,t){x({type:s.toggleRowExpanded,id:e,value:t})}),[x]),T=t.useCallback((function(e){return x({type:s.toggleAllRowsExpanded,value:e})}),[x]),E=t.useMemo((function(){return l?j(r,{manualExpandedKey:o,expanded:b,expandSubRows:d}):r}),[l,r,o,b,d]),D=t.useMemo((function(){return function(e){var t=0;return Object.keys(e).forEach((function(e){var n=e.split(`.`);t=Math.max(t,n.length)})),t}(b)}),[b]),O=_(e),k=f(g().getToggleAllRowsExpandedProps,{instance:O()});Object.assign(e,{preExpandedRows:r,expandedRows:E,rows:E,expandedDepth:D,isAllRowsExpanded:C,toggleRowExpanded:w,toggleAllRowsExpanded:T,getToggleAllRowsExpandedProps:k})}function Se(e,t){var n=t.instance.getHooks,r=t.instance;e.toggleRowExpanded=function(t){return r.toggleRowExpanded(e.id,t)},e.getToggleRowExpandedProps=f(n().getToggleRowExpandedProps,{instance:r,row:e})}var Ce=function(e,t,n){return e=e.filter((function(e){return t.some((function(t){var r=e.values[t];return String(r).toLowerCase().includes(String(n).toLowerCase())}))}))};Ce.autoRemove=function(e){return!e};var we=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r===void 0||String(r).toLowerCase()===String(n).toLowerCase()}))}))};we.autoRemove=function(e){return!e};var Te=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r===void 0||String(r)===String(n)}))}))};Te.autoRemove=function(e){return!e};var Ee=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t].includes(n)}))}))};Ee.autoRemove=function(e){return!e||!e.length};var De=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.every((function(e){return r.includes(e)}))}))}))};De.autoRemove=function(e){return!e||!e.length};var Oe=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.some((function(e){return r.includes(e)}))}))}))};Oe.autoRemove=function(e){return!e||!e.length};var ke=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return n.includes(r)}))}))};ke.autoRemove=function(e){return!e||!e.length};var Ae=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]===n}))}))};Ae.autoRemove=function(e){return e===void 0};var je=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]==n}))}))};je.autoRemove=function(e){return e==null};var Me=function(e,t,n){var r=n||[],i=r[0],a=r[1];if((i=typeof i==`number`?i:-1/0)>(a=typeof a==`number`?a:1/0)){var o=i;i=a,a=o}return e.filter((function(e){return t.some((function(t){var n=e.values[t];return n>=i&&n<=a}))}))};Me.autoRemove=function(e){return!e||typeof e[0]!=`number`&&typeof e[1]!=`number`};var G=Object.freeze({__proto__:null,text:Ce,exactText:we,exactTextCase:Te,includes:Ee,includesAll:De,includesSome:Oe,includesValue:ke,exact:Ae,equals:je,between:Me});s.resetFilters=`resetFilters`,s.setFilter=`setFilter`,s.setAllFilters=`setAllFilters`;var Ne=function(e){e.stateReducers.push(Pe),e.useInstance.push(Fe)};function Pe(e,t,n,r){if(t.type===s.init)return i({filters:[]},e);if(t.type===s.resetFilters)return i({},e,{filters:r.initialState.filters||[]});if(t.type===s.setFilter){var a=t.columnId,o=t.filterValue,c=r.allColumns,l=r.filterTypes,u=c.find((function(e){return e.id===a}));if(!u)throw Error(`React-Table: Could not find a column with id: `+a);var d=M(u.filter,l||{},G),f=e.filters.find((function(e){return e.id===a})),p=g(o,f&&f.value);return N(d.autoRemove,p,u)?i({},e,{filters:e.filters.filter((function(e){return e.id!==a}))}):i({},e,f?{filters:e.filters.map((function(e){return e.id===a?{id:a,value:p}:e}))}:{filters:[].concat(e.filters,[{id:a,value:p}])})}if(t.type===s.setAllFilters){var m=t.filters,h=r.allColumns,_=r.filterTypes;return i({},e,{filters:g(m,e.filters).filter((function(e){var t=h.find((function(t){return t.id===e.id}));return!N(M(t.filter,_||{},G).autoRemove,e.value,t)}))})}}function Fe(e){var n=e.data,r=e.rows,i=e.flatRows,a=e.rowsById,o=e.allColumns,c=e.filterTypes,l=e.manualFilters,u=e.defaultCanFilter,d=u!==void 0&&u,f=e.disableFilters,p=e.state.filters,m=e.dispatch,h=e.autoResetFilters,g=h===void 0||h,v=t.useCallback((function(e,t){m({type:s.setFilter,columnId:e,filterValue:t})}),[m]),b=t.useCallback((function(e){m({type:s.setAllFilters,filters:e})}),[m]);o.forEach((function(e){var t=e.id,n=e.accessor,r=e.defaultCanFilter,i=e.disableFilters;e.canFilter=n?O(!0!==i&&void 0,!0!==f&&void 0,!0):O(r,d,!1),e.setFilter=function(t){return v(e.id,t)};var a=p.find((function(e){return e.id===t}));e.filterValue=a&&a.value}));var x=t.useMemo((function(){if(l||!p.length)return[r,i,a];var e=[],t={};return[function n(r,i){i===void 0&&(i=0);var a=r;return(a=p.reduce((function(e,t){var n=t.id,r=t.value,a=o.find((function(e){return e.id===n}));if(!a)return e;i===0&&(a.preFilteredRows=e);var s=M(a.filter,c||{},G);return s?(a.filteredRows=s(e,[n],r),a.filteredRows):(console.warn(`Could not find a valid 'column.filter' for column with the ID: `+a.id+`.`),e)}),r)).forEach((function(r){e.push(r),t[r.id]=r,r.subRows&&=r.subRows&&r.subRows.length>0?n(r.subRows,i+1):r.subRows})),a}(r),e,t]}),[l,p,r,i,a,o,c]),S=x[0],C=x[1],w=x[2];t.useMemo((function(){o.filter((function(e){return!p.find((function(t){return t.id===e.id}))})).forEach((function(e){e.preFilteredRows=S,e.filteredRows=S}))}),[S,p,o]);var T=_(g);y((function(){T()&&m({type:s.resetFilters})}),[m,l?null:n]),Object.assign(e,{preFilteredRows:r,preFilteredFlatRows:i,preFilteredRowsById:a,filteredRows:S,filteredFlatRows:C,filteredRowsById:w,rows:S,flatRows:C,rowsById:w,setFilter:v,setAllFilters:b})}Ne.pluginName=`useFilters`,s.resetGlobalFilter=`resetGlobalFilter`,s.setGlobalFilter=`setGlobalFilter`;var Ie=function(e){e.stateReducers.push(Le),e.useInstance.push(Re)};function Le(e,t,n,r){if(t.type===s.resetGlobalFilter)return i({},e,{globalFilter:r.initialState.globalFilter||void 0});if(t.type===s.setGlobalFilter){var o=t.filterValue,c=r.userFilterTypes,l=M(r.globalFilter,c||{},G),u=g(o,e.globalFilter);return N(l.autoRemove,u)?(e.globalFilter,a(e,[`globalFilter`])):i({},e,{globalFilter:u})}}function Re(e){var n=e.data,r=e.rows,i=e.flatRows,a=e.rowsById,o=e.allColumns,c=e.filterTypes,l=e.globalFilter,u=e.manualGlobalFilter,d=e.state.globalFilter,f=e.dispatch,p=e.autoResetGlobalFilter,m=p===void 0||p,h=e.disableGlobalFilter,g=t.useCallback((function(e){f({type:s.setGlobalFilter,filterValue:e})}),[f]),v=t.useMemo((function(){if(u||d===void 0)return[r,i,a];var e=[],t={},n=M(l,c||{},G);if(!n)return console.warn(`Could not find a valid 'globalFilter' option.`),r;o.forEach((function(e){var t=e.disableGlobalFilter;e.canFilter=O(!0!==t&&void 0,!0!==h&&void 0,!0)}));var s=o.filter((function(e){return!0===e.canFilter}));return[function r(i){return(i=n(i,s.map((function(e){return e.id})),d)).forEach((function(n){e.push(n),t[n.id]=n,n.subRows=n.subRows&&n.subRows.length?r(n.subRows):n.subRows})),i}(r),e,t]}),[u,d,l,c,o,r,i,a,h]),b=v[0],x=v[1],S=v[2],C=_(m);y((function(){C()&&f({type:s.resetGlobalFilter})}),[f,u?null:n]),Object.assign(e,{preGlobalFilteredRows:r,preGlobalFilteredFlatRows:i,preGlobalFilteredRowsById:a,globalFilteredRows:b,globalFilteredFlatRows:x,globalFilteredRowsById:S,rows:b,flatRows:x,rowsById:S,setGlobalFilter:g,disableGlobalFilter:h})}function ze(e,t){return t.reduce((function(e,t){return e+(typeof t==`number`?t:0)}),0)}Ie.pluginName=`useGlobalFilter`;var Be=Object.freeze({__proto__:null,sum:ze,min:function(e){var t=e[0]||0;return e.forEach((function(e){typeof e==`number`&&(t=Math.min(t,e))})),t},max:function(e){var t=e[0]||0;return e.forEach((function(e){typeof e==`number`&&(t=Math.max(t,e))})),t},minMax:function(e){var t=e[0]||0,n=e[0]||0;return e.forEach((function(e){typeof e==`number`&&(t=Math.min(t,e),n=Math.max(n,e))})),t+`..`+n},average:function(e){return ze(0,e)/e.length},median:function(e){if(!e.length)return null;var t=Math.floor(e.length/2),n=[].concat(e).sort((function(e,t){return e-t}));return e.length%2==0?(n[t-1]+n[t])/2:n[t]},unique:function(e){return Array.from(new Set(e).values())},uniqueCount:function(e){return new Set(e).size},count:function(e){return e.length}}),Ve=[],He={};s.resetGroupBy=`resetGroupBy`,s.setGroupBy=`setGroupBy`,s.toggleGroupBy=`toggleGroupBy`;var Ue=function(e){e.getGroupByToggleProps=[We],e.stateReducers.push(Ge),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.groupBy])})),e.visibleColumns.push(Ke),e.useInstance.push(Je),e.prepareRow.push(Ye)};Ue.pluginName=`useGroupBy`;var We=function(e,t){var n=t.header;return[e,{onClick:n.canGroupBy?function(e){e.persist(),n.toggleGroupBy()}:void 0,style:{cursor:n.canGroupBy?`pointer`:void 0},title:`Toggle GroupBy`}]};function Ge(e,t,n,r){if(t.type===s.init)return i({groupBy:[]},e);if(t.type===s.resetGroupBy)return i({},e,{groupBy:r.initialState.groupBy||[]});if(t.type===s.setGroupBy)return i({},e,{groupBy:t.value});if(t.type===s.toggleGroupBy){var a=t.columnId,o=t.value,c=o===void 0?!e.groupBy.includes(a):o;return i({},e,c?{groupBy:[].concat(e.groupBy,[a])}:{groupBy:e.groupBy.filter((function(e){return e!==a}))})}}function Ke(e,t){var n=t.instance.state.groupBy,r=n.map((function(t){return e.find((function(e){return e.id===t}))})).filter(Boolean),i=e.filter((function(e){return!n.includes(e.id)}));return(e=[].concat(r,i)).forEach((function(e){e.isGrouped=n.includes(e.id),e.groupedIndex=n.indexOf(e.id)})),e}var qe={};function Je(e){var n=e.data,r=e.rows,a=e.flatRows,o=e.rowsById,c=e.allColumns,l=e.flatHeaders,u=e.groupByFn,d=u===void 0?Xe:u,p=e.manualGroupBy,m=e.aggregations,g=m===void 0?qe:m,v=e.plugins,b=e.state.groupBy,x=e.dispatch,S=e.autoResetGroupBy,C=S===void 0||S,w=e.disableGroupBy,T=e.defaultCanGroupBy,E=e.getHooks;h(v,[`useColumnOrder`,`useFilters`],`useGroupBy`);var D=_(e);c.forEach((function(t){var n=t.accessor,r=t.defaultGroupBy,i=t.disableGroupBy;t.canGroupBy=n?O(t.canGroupBy,!0!==i&&void 0,!0!==w&&void 0,!0):O(t.canGroupBy,r,T,!1),t.canGroupBy&&(t.toggleGroupBy=function(){return e.toggleGroupBy(t.id)}),t.Aggregated=t.Aggregated||t.Cell}));var k=t.useCallback((function(e,t){x({type:s.toggleGroupBy,columnId:e,value:t})}),[x]),j=t.useCallback((function(e){x({type:s.setGroupBy,value:e})}),[x]);l.forEach((function(e){e.getGroupByToggleProps=f(E().getGroupByToggleProps,{instance:D(),header:e})}));var M=t.useMemo((function(){if(p||!b.length)return[r,a,o,Ve,He,a,o];var e=b.filter((function(e){return c.find((function(t){return t.id===e}))})),t=[],n={},s=[],l={},u=[],f={},m=function r(a,o,p){if(o===void 0&&(o=0),o===e.length)return a.map((function(e){return i({},e,{depth:o})}));var m=e[o],h=d(a,m);return Object.entries(h).map((function(i,a){var d=i[0],h=i[1],_=m+`:`+d,v=r(h,o+1,_=p?p+`>`+_:_),y=o?A(h,`leafRows`):h,b=function(t,n,r){var i={};return c.forEach((function(a){if(e.includes(a.id))i[a.id]=n[0]?n[0].values[a.id]:null;else{var o=typeof a.aggregate==`function`?a.aggregate:g[a.aggregate]||Be[a.aggregate];if(o){var s=n.map((function(e){return e.values[a.id]})),c=t.map((function(e){var t=e.values[a.id];if(!r&&a.aggregateValue){var n=typeof a.aggregateValue==`function`?a.aggregateValue:g[a.aggregateValue]||Be[a.aggregateValue];if(!n)throw console.info({column:a}),Error(`React Table: Invalid column.aggregateValue option for column listed above`);t=n(t,e,a)}return t}));i[a.id]=o(c,s)}else{if(a.aggregate)throw console.info({column:a}),Error(`React Table: Invalid column.aggregate option for column listed above`);i[a.id]=null}}})),i}(y,h,o),x={id:_,isGrouped:!0,groupByID:m,groupByVal:d,values:b,subRows:v,leafRows:y,depth:o,index:a};return v.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(s.push(e),l[e.id]=e):(u.push(e),f[e.id]=e)})),x}))}(r);return m.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(s.push(e),l[e.id]=e):(u.push(e),f[e.id]=e)})),[m,t,n,s,l,u,f]}),[p,b,r,a,o,c,g,d]),N=M[0],P=M[1],F=M[2],I=M[3],L=M[4],R=M[5],z=M[6],B=_(C);y((function(){B()&&x({type:s.resetGroupBy})}),[x,p?null:n]),Object.assign(e,{preGroupedRows:r,preGroupedFlatRow:a,preGroupedRowsById:o,groupedRows:N,groupedFlatRows:P,groupedRowsById:F,onlyGroupedFlatRows:I,onlyGroupedRowsById:L,nonGroupedFlatRows:R,nonGroupedRowsById:z,rows:N,flatRows:P,rowsById:F,toggleGroupBy:k,setGroupBy:j})}function Ye(e){e.allCells.forEach((function(t){t.isGrouped=t.column.isGrouped&&t.column.id===e.groupByID,t.isPlaceholder=!t.isGrouped&&t.column.isGrouped,t.isAggregated=!t.isGrouped&&!t.isPlaceholder&&e.subRows?.length}))}function Xe(e,t){return e.reduce((function(e,n,r){var i=``+n.values[t];return e[i]=Array.isArray(e[i])?e[i]:[],e[i].push(n),e}),{})}var Ze=/([0-9]+)/gm;function K(e,t){return e===t?0:e>t?1:-1}function q(e,t,n){return[e.values[n],t.values[n]]}function Qe(e){return typeof e==`number`?isNaN(e)||e===1/0||e===-1/0?``:String(e):typeof e==`string`?e:``}var $e=Object.freeze({__proto__:null,alphanumeric:function(e,t,n){var r=q(e,t,n),i=r[0],a=r[1];for(i=Qe(i),a=Qe(a),i=i.split(Ze).filter(Boolean),a=a.split(Ze).filter(Boolean);i.length&&a.length;){var o=i.shift(),s=a.shift(),c=parseInt(o,10),l=parseInt(s,10),u=[c,l].sort();if(isNaN(u[0])){if(o>s)return 1;if(s>o)return-1}else{if(isNaN(u[1]))return isNaN(c)?-1:1;if(c>l)return 1;if(l>c)return-1}}return i.length-a.length},datetime:function(e,t,n){var r=q(e,t,n),i=r[0],a=r[1];return K(i=i.getTime(),a=a.getTime())},basic:function(e,t,n){var r=q(e,t,n);return K(r[0],r[1])},string:function(e,t,n){var r=q(e,t,n),i=r[0],a=r[1];for(i=i.split(``).filter(Boolean),a=a.split(``).filter(Boolean);i.length&&a.length;){var o=i.shift(),s=a.shift(),c=o.toLowerCase(),l=s.toLowerCase();if(c>l)return 1;if(l>c)return-1;if(o>s)return 1;if(s>o)return-1}return i.length-a.length},number:function(e,t,n){var r=q(e,t,n),i=r[0],a=r[1],o=/[^0-9.]/gi;return K(i=Number(String(i).replace(o,``)),a=Number(String(a).replace(o,``)))}});s.resetSortBy=`resetSortBy`,s.setSortBy=`setSortBy`,s.toggleSortBy=`toggleSortBy`,s.clearSortBy=`clearSortBy`,u.sortType=`alphanumeric`,u.sortDescFirst=!1;var et=function(e){e.getSortByToggleProps=[tt],e.stateReducers.push(nt),e.useInstance.push(rt)};et.pluginName=`useSortBy`;var tt=function(e,t){var n=t.instance,r=t.column,i=n.isMultiSortEvent,a=i===void 0?function(e){return e.shiftKey}:i;return[e,{onClick:r.canSort?function(e){e.persist(),r.toggleSortBy(void 0,!n.disableMultiSort&&a(e))}:void 0,style:{cursor:r.canSort?`pointer`:void 0},title:r.canSort?`Toggle SortBy`:void 0}]};function nt(e,t,n,r){if(t.type===s.init)return i({sortBy:[]},e);if(t.type===s.resetSortBy)return i({},e,{sortBy:r.initialState.sortBy||[]});if(t.type===s.clearSortBy)return i({},e,{sortBy:e.sortBy.filter((function(e){return e.id!==t.columnId}))});if(t.type===s.setSortBy)return i({},e,{sortBy:t.sortBy});if(t.type===s.toggleSortBy){var a,o=t.columnId,c=t.desc,l=t.multi,u=r.allColumns,d=r.disableMultiSort,f=r.disableSortRemove,p=r.disableMultiRemove,m=r.maxMultiSortColCount,h=m===void 0?2**53-1:m,g=e.sortBy,_=u.find((function(e){return e.id===o})).sortDescFirst,v=g.find((function(e){return e.id===o})),y=g.findIndex((function(e){return e.id===o})),b=c!=null,x=[];return(a=!d&&l?v?`toggle`:`add`:y!==g.length-1||g.length!==1?`replace`:v?`toggle`:`replace`)!=`toggle`||f||b||l&&p||!(v&&v.desc&&!_||!v.desc&&_)||(a=`remove`),a===`replace`?x=[{id:o,desc:b?c:_}]:a===`add`?(x=[].concat(g,[{id:o,desc:b?c:_}])).splice(0,x.length-h):a===`toggle`?x=g.map((function(e){return e.id===o?i({},e,{desc:b?c:!v.desc}):e})):a===`remove`&&(x=g.filter((function(e){return e.id!==o}))),i({},e,{sortBy:x})}}function rt(e){var n=e.data,r=e.rows,i=e.flatRows,a=e.allColumns,o=e.orderByFn,c=o===void 0?it:o,l=e.sortTypes,u=e.manualSortBy,d=e.defaultCanSort,p=e.disableSortBy,m=e.flatHeaders,g=e.state.sortBy,v=e.dispatch,b=e.plugins,x=e.getHooks,S=e.autoResetSortBy,C=S===void 0||S;h(b,[`useFilters`,`useGlobalFilter`,`useGroupBy`,`usePivotColumns`],`useSortBy`);var w=t.useCallback((function(e){v({type:s.setSortBy,sortBy:e})}),[v]),T=t.useCallback((function(e,t,n){v({type:s.toggleSortBy,columnId:e,desc:t,multi:n})}),[v]),E=_(e);m.forEach((function(e){var t=e.accessor,n=e.canSort,r=e.disableSortBy,i=e.id;e.canSort=t?O(!0!==r&&void 0,!0!==p&&void 0,!0):O(d,n,!1),e.canSort&&(e.toggleSortBy=function(t,n){return T(e.id,t,n)},e.clearSortBy=function(){v({type:s.clearSortBy,columnId:e.id})}),e.getSortByToggleProps=f(x().getSortByToggleProps,{instance:E(),column:e});var a=g.find((function(e){return e.id===i}));e.isSorted=!!a,e.sortedIndex=g.findIndex((function(e){return e.id===i})),e.isSortedDesc=e.isSorted?a.desc:void 0}));var D=t.useMemo((function(){if(u||!g.length)return[r,i];var e=[],t=g.filter((function(e){return a.find((function(t){return t.id===e.id}))}));return[function n(r){var i=c(r,t.map((function(e){var t=a.find((function(t){return t.id===e.id}));if(!t)throw Error(`React-Table: Could not find a column with id: `+e.id+` while sorting`);var n=t.sortType,r=k(n)||(l||{})[n]||$e[n];if(!r)throw Error(`React-Table: Could not find a valid sortType of '`+n+`' for column '`+e.id+`'.`);return function(t,n){return r(t,n,e.id,e.desc)}})),t.map((function(e){var t=a.find((function(t){return t.id===e.id}));return t&&t.sortInverted?e.desc:!e.desc})));return i.forEach((function(t){e.push(t),t.subRows&&t.subRows.length!==0&&(t.subRows=n(t.subRows))})),i}(r),e]}),[u,g,r,i,a,c,l]),A=D[0],j=D[1],M=_(C);y((function(){M()&&v({type:s.resetSortBy})}),[u?null:n]),Object.assign(e,{preSortedRows:r,preSortedFlatRows:i,sortedRows:A,sortedFlatRows:j,rows:A,flatRows:j,setSortBy:w,toggleSortBy:T})}function it(e,t,n){return[].concat(e).sort((function(e,r){for(var i=0;i<t.length;i+=1){var a=t[i],o=!1===n[i]||n[i]===`desc`,s=a(e,r);if(s!==0)return o?-s:s}return n[0]?e.index-r.index:r.index-e.index}))}s.resetPage=`resetPage`,s.gotoPage=`gotoPage`,s.setPageSize=`setPageSize`;var at=function(e){e.stateReducers.push(ot),e.useInstance.push(st)};function ot(e,t,n,r){if(t.type===s.init)return i({pageSize:10,pageIndex:0},e);if(t.type===s.resetPage)return i({},e,{pageIndex:r.initialState.pageIndex||0});if(t.type===s.gotoPage){var a=r.pageCount,o=r.page,c=g(t.pageIndex,e.pageIndex),l=!1;return c>e.pageIndex?l=a===-1?o.length>=e.pageSize:c<a:c<e.pageIndex&&(l=c>-1),l?i({},e,{pageIndex:c}):e}if(t.type===s.setPageSize){var u=t.pageSize,d=e.pageSize*e.pageIndex;return i({},e,{pageIndex:Math.floor(d/u),pageSize:u})}}function st(e){var n=e.rows,r=e.autoResetPage,i=r===void 0||r,a=e.manualExpandedKey,o=a===void 0?`expanded`:a,c=e.plugins,l=e.pageCount,u=e.paginateExpandedRows,d=u===void 0||u,f=e.expandSubRows,p=f===void 0||f,m=e.state,g=m.pageSize,v=m.pageIndex,b=m.expanded,x=m.globalFilter,S=m.filters,C=m.groupBy,w=m.sortBy,T=e.dispatch,E=e.data,D=e.manualPagination;h(c,[`useGlobalFilter`,`useFilters`,`useGroupBy`,`useSortBy`,`useExpanded`],`usePagination`);var O=_(i);y((function(){O()&&T({type:s.resetPage})}),[T,D?null:E,x,S,C,w]);var k=D?l:Math.ceil(n.length/g),A=t.useMemo((function(){return k>0?[].concat(Array(k)).fill(null).map((function(e,t){return t})):[]}),[k]),M=t.useMemo((function(){var e;if(D)e=n;else{var t=g*v,r=t+g;e=n.slice(t,r)}return d?e:j(e,{manualExpandedKey:o,expanded:b,expandSubRows:p})}),[p,b,o,D,v,g,d,n]),N=v>0,P=k===-1?M.length>=g:v<k-1,F=t.useCallback((function(e){T({type:s.gotoPage,pageIndex:e})}),[T]),I=t.useCallback((function(){return F((function(e){return e-1}))}),[F]),L=t.useCallback((function(){return F((function(e){return e+1}))}),[F]),R=t.useCallback((function(e){T({type:s.setPageSize,pageSize:e})}),[T]);Object.assign(e,{pageOptions:A,pageCount:k,page:M,canPreviousPage:N,canNextPage:P,gotoPage:F,previousPage:I,nextPage:L,setPageSize:R})}at.pluginName=`usePagination`,s.resetPivot=`resetPivot`,s.togglePivot=`togglePivot`;var ct=function(e){e.getPivotToggleProps=[ut],e.stateReducers.push(dt),e.useInstanceAfterData.push(ft),e.allColumns.push(pt),e.accessValue.push(mt),e.materializedColumns.push(ht),e.materializedColumnsDeps.push(gt),e.visibleColumns.push(_t),e.visibleColumnsDeps.push(vt),e.useInstance.push(yt),e.prepareRow.push(bt)};ct.pluginName=`usePivotColumns`;var lt=[],ut=function(e,t){var n=t.header;return[e,{onClick:n.canPivot?function(e){e.persist(),n.togglePivot()}:void 0,style:{cursor:n.canPivot?`pointer`:void 0},title:`Toggle Pivot`}]};function dt(e,t,n,r){if(t.type===s.init)return i({pivotColumns:lt},e);if(t.type===s.resetPivot)return i({},e,{pivotColumns:r.initialState.pivotColumns||lt});if(t.type===s.togglePivot){var a=t.columnId,o=t.value,c=o===void 0?!e.pivotColumns.includes(a):o;return i({},e,c?{pivotColumns:[].concat(e.pivotColumns,[a])}:{pivotColumns:e.pivotColumns.filter((function(e){return e!==a}))})}}function ft(e){e.allColumns.forEach((function(t){t.isPivotSource=e.state.pivotColumns.includes(t.id)}))}function pt(e,t){var n=t.instance;return e.forEach((function(e){e.isPivotSource=n.state.pivotColumns.includes(e.id),e.uniqueValues=new Set})),e}function mt(e,t){var n=t.column;return n.uniqueValues&&e!==void 0&&n.uniqueValues.add(e),e}function ht(e,t){var n=t.instance,r=n.allColumns,a=n.state;if(!a.pivotColumns.length||!a.groupBy||!a.groupBy.length)return e;var o=a.pivotColumns.map((function(e){return r.find((function(t){return t.id===e}))})).filter(Boolean),s=r.filter((function(e){return!e.isPivotSource&&!a.groupBy.includes(e.id)&&!a.pivotColumns.includes(e.id)})),c=C(function e(t,n,r){t===void 0&&(t=0),r===void 0&&(r=[]);var a=o[t];return a?Array.from(a.uniqueValues).sort().map((function(o){var s=i({},a,{Header:a.PivotHeader||typeof a.header==`string`?a.Header+`: `+o:o,isPivotGroup:!0,parent:n,depth:t,id:n?n.id+`.`+a.id+`.`+o:a.id+`.`+o,pivotValue:o});return s.columns=e(t+1,s,[].concat(r,[function(e){return e.values[a.id]===o}])),s})):s.map((function(e){return i({},e,{canPivot:!1,isPivoted:!0,parent:n,depth:t,id:``+(n?n.id+`.`+e.id:e.id),accessor:function(t,n,i){if(r.every((function(e){return e(i)})))return i.values[e.id]}})}))}());return[].concat(e,c)}function gt(e,t){var n=t.instance.state,r=n.pivotColumns,i=n.groupBy;return[].concat(e,[r,i])}function _t(e,t){var n=t.instance.state;return e=e.filter((function(e){return!e.isPivotSource})),n.pivotColumns.length&&n.groupBy&&n.groupBy.length&&(e=e.filter((function(e){return e.isGrouped||e.isPivoted}))),e}function vt(e,t){var n=t.instance;return[].concat(e,[n.state.pivotColumns,n.state.groupBy])}function yt(e){var t=e.columns,n=e.allColumns,r=e.flatHeaders,i=e.getHooks,a=e.plugins,o=e.dispatch,c=e.autoResetPivot,l=c===void 0||c,u=e.manaulPivot,d=e.disablePivot,p=e.defaultCanPivot;h(a,[`useGroupBy`],`usePivotColumns`);var m=_(e);n.forEach((function(t){var n=t.accessor,r=t.defaultPivot,i=t.disablePivot;t.canPivot=n?O(t.canPivot,!0!==i&&void 0,!0!==d&&void 0,!0):O(t.canPivot,r,p,!1),t.canPivot&&(t.togglePivot=function(){return e.togglePivot(t.id)}),t.Aggregated=t.Aggregated||t.Cell})),r.forEach((function(e){e.getPivotToggleProps=f(i().getPivotToggleProps,{instance:m(),header:e})}));var g=_(l);y((function(){g()&&o({type:s.resetPivot})}),[o,u?null:t]),Object.assign(e,{togglePivot:function(e,t){o({type:s.togglePivot,columnId:e,value:t})}})}function bt(e){e.allCells.forEach((function(e){e.isPivoted=e.column.isPivoted}))}s.resetSelectedRows=`resetSelectedRows`,s.toggleAllRowsSelected=`toggleAllRowsSelected`,s.toggleRowSelected=`toggleRowSelected`,s.toggleAllPageRowsSelected=`toggleAllPageRowsSelected`;var xt=function(e){e.getToggleRowSelectedProps=[St],e.getToggleAllRowsSelectedProps=[Ct],e.getToggleAllPageRowsSelectedProps=[wt],e.stateReducers.push(Tt),e.useInstance.push(Et),e.prepareRow.push(Dt)};xt.pluginName=`useRowSelect`;var St=function(e,t){var n=t.instance,r=t.row,i=n.manualRowSelectedKey,a=i===void 0?`isSelected`:i;return[e,{onChange:function(e){r.toggleRowSelected(e.target.checked)},style:{cursor:`pointer`},checked:!(!r.original||!r.original[a])||r.isSelected,title:`Toggle Row Selected`,indeterminate:r.isSomeSelected}]},Ct=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllRowsSelected(e.target.checked)},style:{cursor:`pointer`},checked:n.isAllRowsSelected,title:`Toggle All Rows Selected`,indeterminate:!!(!n.isAllRowsSelected&&Object.keys(n.state.selectedRowIds).length)}]},wt=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllPageRowsSelected(e.target.checked)},style:{cursor:`pointer`},checked:n.isAllPageRowsSelected,title:`Toggle All Current Page Rows Selected`,indeterminate:!!(!n.isAllPageRowsSelected&&n.page.some((function(e){var t=e.id;return n.state.selectedRowIds[t]})))}]};function Tt(e,t,n,r){if(t.type===s.init)return i({selectedRowIds:{}},e);if(t.type===s.resetSelectedRows)return i({},e,{selectedRowIds:r.initialState.selectedRowIds||{}});if(t.type===s.toggleAllRowsSelected){var a=t.value,o=r.isAllRowsSelected,c=r.rowsById,l=r.nonGroupedRowsById,u=l===void 0?c:l,d=a===void 0?!o:a,f=Object.assign({},e.selectedRowIds);return d?Object.keys(u).forEach((function(e){f[e]=!0})):Object.keys(u).forEach((function(e){delete f[e]})),i({},e,{selectedRowIds:f})}if(t.type===s.toggleRowSelected){var p=t.id,m=t.value,h=r.rowsById,g=r.selectSubRows,_=g===void 0||g,v=r.getSubRows,y=e.selectedRowIds[p],b=m===void 0?!y:m;if(y===b)return e;var x=i({},e.selectedRowIds);return function e(t){var n=h[t];if(n&&(n.isGrouped||(b?x[t]=!0:delete x[t]),_&&v(n)))return v(n).forEach((function(t){return e(t.id)}))}(p),i({},e,{selectedRowIds:x})}if(t.type===s.toggleAllPageRowsSelected){var S=t.value,C=r.page,w=r.rowsById,T=r.selectSubRows,E=T===void 0||T,D=r.isAllPageRowsSelected,O=r.getSubRows,k=S===void 0?!D:S,A=i({},e.selectedRowIds);return C.forEach((function(e){return function e(t){var n=w[t];if(n.isGrouped||(k?A[t]=!0:delete A[t]),E&&O(n))return O(n).forEach((function(t){return e(t.id)}))}(e.id)})),i({},e,{selectedRowIds:A})}return e}function Et(e){var n=e.data,r=e.rows,i=e.getHooks,a=e.plugins,o=e.rowsById,c=e.nonGroupedRowsById,l=c===void 0?o:c,u=e.autoResetSelectedRows,d=u===void 0||u,p=e.state.selectedRowIds,m=e.selectSubRows,g=m===void 0||m,v=e.dispatch,b=e.page,x=e.getSubRows;h(a,[`useFilters`,`useGroupBy`,`useSortBy`,`useExpanded`,`usePagination`],`useRowSelect`);var S=t.useMemo((function(){var e=[];return r.forEach((function(t){var n=g?function e(t,n,r){if(n[t.id])return!0;var i=r(t);if(i&&i.length){var a=!0,o=!1;return i.forEach((function(t){o&&!a||(e(t,n,r)?o=!0:a=!1)})),!!a||!!o&&null}return!1}(t,p,x):!!p[t.id];t.isSelected=!!n,t.isSomeSelected=n===null,n&&e.push(t)})),e}),[r,g,p,x]),C=!!(Object.keys(l).length&&Object.keys(p).length),w=C;C&&Object.keys(l).some((function(e){return!p[e]}))&&(C=!1),C||b&&b.length&&b.some((function(e){return!p[e.id]}))&&(w=!1);var T=_(d);y((function(){T()&&v({type:s.resetSelectedRows})}),[v,n]);var E=t.useCallback((function(e){return v({type:s.toggleAllRowsSelected,value:e})}),[v]),D=t.useCallback((function(e){return v({type:s.toggleAllPageRowsSelected,value:e})}),[v]),O=t.useCallback((function(e,t){return v({type:s.toggleRowSelected,id:e,value:t})}),[v]),k=_(e),A=f(i().getToggleAllRowsSelectedProps,{instance:k()}),j=f(i().getToggleAllPageRowsSelectedProps,{instance:k()});Object.assign(e,{selectedFlatRows:S,isAllRowsSelected:C,isAllPageRowsSelected:w,toggleRowSelected:O,toggleAllRowsSelected:E,getToggleAllRowsSelectedProps:A,getToggleAllPageRowsSelectedProps:j,toggleAllPageRowsSelected:D})}function Dt(e,t){var n=t.instance;e.toggleRowSelected=function(t){return n.toggleRowSelected(e.id,t)},e.getToggleRowSelectedProps=f(n.getHooks().getToggleRowSelectedProps,{instance:n,row:e})}var Ot=function(e){return{}},kt=function(e){return{}};s.setRowState=`setRowState`,s.setCellState=`setCellState`,s.resetRowState=`resetRowState`;var At=function(e){e.stateReducers.push(jt),e.useInstance.push(Mt),e.prepareRow.push(Nt)};function jt(e,t,n,r){var a=r.initialRowStateAccessor,o=a===void 0?Ot:a,c=r.initialCellStateAccessor,l=c===void 0?kt:c,u=r.rowsById;if(t.type===s.init)return i({rowState:{}},e);if(t.type===s.resetRowState)return i({},e,{rowState:r.initialState.rowState||{}});if(t.type===s.setRowState){var d,f=t.rowId,p=t.value,m=e.rowState[f]===void 0?o(u[f]):e.rowState[f];return i({},e,{rowState:i({},e.rowState,(d={},d[f]=g(p,m),d))})}if(t.type===s.setCellState){var h,_,v=t.rowId,y=t.columnId,b=t.value,x=e.rowState[v]===void 0?o(u[v]):e.rowState[v],S=x?.cellState?.[y]===void 0?l(u[v]?.cells?.find((function(e){return e.column.id===y}))):x.cellState[y];return i({},e,{rowState:i({},e.rowState,(_={},_[v]=i({},x,{cellState:i({},x.cellState||{},(h={},h[y]=g(b,S),h))}),_))})}}function Mt(e){var n=e.autoResetRowState,r=n===void 0||n,i=e.data,a=e.dispatch,o=t.useCallback((function(e,t){return a({type:s.setRowState,rowId:e,value:t})}),[a]),c=t.useCallback((function(e,t,n){return a({type:s.setCellState,rowId:e,columnId:t,value:n})}),[a]),l=_(r);y((function(){l()&&a({type:s.resetRowState})}),[i]),Object.assign(e,{setRowState:o,setCellState:c})}function Nt(e,t){var n=t.instance,r=n.initialRowStateAccessor,i=r===void 0?Ot:r,a=n.initialCellStateAccessor,o=a===void 0?kt:a,s=n.state.rowState;e&&(e.state=s[e.id]===void 0?i(e):s[e.id],e.setState=function(t){return n.setRowState(e.id,t)},e.cells.forEach((function(t){e.state.cellState||(e.state.cellState={}),t.state=e.state.cellState[t.column.id]===void 0?o(t):e.state.cellState[t.column.id],t.setState=function(r){return n.setCellState(e.id,t.column.id,r)}})))}At.pluginName=`useRowState`,s.resetColumnOrder=`resetColumnOrder`,s.setColumnOrder=`setColumnOrder`;var Pt=function(e){e.stateReducers.push(Ft),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.columnOrder])})),e.visibleColumns.push(It),e.useInstance.push(Lt)};function Ft(e,t,n,r){return t.type===s.init?i({columnOrder:[]},e):t.type===s.resetColumnOrder?i({},e,{columnOrder:r.initialState.columnOrder||[]}):t.type===s.setColumnOrder?i({},e,{columnOrder:g(t.columnOrder,e.columnOrder)}):void 0}function It(e,t){var n=t.instance.state.columnOrder;if(!n||!n.length)return e;for(var r=[].concat(n),i=[].concat(e),a=[],o=function(){var e=r.shift(),t=i.findIndex((function(t){return t.id===e}));t>-1&&a.push(i.splice(t,1)[0])};i.length&&r.length;)o();return[].concat(a,i)}function Lt(e){var n=e.dispatch;e.setColumnOrder=t.useCallback((function(e){return n({type:s.setColumnOrder,columnOrder:e})}),[n])}Pt.pluginName=`useColumnOrder`,u.canResize=!0,s.columnStartResizing=`columnStartResizing`,s.columnResizing=`columnResizing`,s.columnDoneResizing=`columnDoneResizing`,s.resetResize=`resetResize`;var Rt=function(e){e.getResizerProps=[zt],e.getHeaderProps.push({style:{position:`relative`}}),e.stateReducers.push(Bt),e.useInstance.push(Ht),e.useInstanceBeforeDimensions.push(Vt)},zt=function(e,t){var n=t.instance,r=t.header,i=n.dispatch,a=function(e,t){var n=!1;if(e.type===`touchstart`){if(e.touches&&e.touches.length>1)return;n=!0}var r,a,o=function(e){var t=[];return function e(n){n.columns&&n.columns.length&&n.columns.map(e),t.push(n)}(e),t}(t).map((function(e){return[e.id,e.totalWidth]})),c=n?Math.round(e.touches[0].clientX):e.clientX,l=function(){window.cancelAnimationFrame(r),r=null,i({type:s.columnDoneResizing})},u=function(){window.cancelAnimationFrame(r),r=null,i({type:s.columnResizing,clientX:a})},d=function(e){a=e,r||=window.requestAnimationFrame(u)},f={mouse:{moveEvent:`mousemove`,moveHandler:function(e){return d(e.clientX)},upEvent:`mouseup`,upHandler:function(e){document.removeEventListener(`mousemove`,f.mouse.moveHandler),document.removeEventListener(`mouseup`,f.mouse.upHandler),l()}},touch:{moveEvent:`touchmove`,moveHandler:function(e){return e.cancelable&&(e.preventDefault(),e.stopPropagation()),d(e.touches[0].clientX),!1},upEvent:`touchend`,upHandler:function(e){document.removeEventListener(f.touch.moveEvent,f.touch.moveHandler),document.removeEventListener(f.touch.upEvent,f.touch.moveHandler),l()}}},p=n?f.touch:f.mouse,m=!!function(){if(typeof F==`boolean`)return F;var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener(`test`,null,t),window.removeEventListener(`test`,null,t)}catch{e=!1}return F=e}()&&{passive:!1};document.addEventListener(p.moveEvent,p.moveHandler,m),document.addEventListener(p.upEvent,p.upHandler,m),i({type:s.columnStartResizing,columnId:t.id,columnWidth:t.totalWidth,headerIdWidths:o,clientX:c})};return[e,{onMouseDown:function(e){return e.persist()||a(e,r)},onTouchStart:function(e){return e.persist()||a(e,r)},style:{cursor:`col-resize`},draggable:!1,role:`separator`}]};function Bt(e,t){if(t.type===s.init)return i({columnResizing:{columnWidths:{}}},e);if(t.type===s.resetResize)return i({},e,{columnResizing:{columnWidths:{}}});if(t.type===s.columnStartResizing){var n=t.clientX,r=t.columnId,a=t.columnWidth,o=t.headerIdWidths;return i({},e,{columnResizing:i({},e.columnResizing,{startX:n,headerIdWidths:o,columnWidth:a,isResizingColumn:r})})}if(t.type===s.columnResizing){var c=t.clientX,l=e.columnResizing,u=l.startX,d=l.columnWidth,f=l.headerIdWidths,p=(c-u)/d,m={};return(f===void 0?[]:f).forEach((function(e){var t=e[0],n=e[1];m[t]=Math.max(n+n*p,0)})),i({},e,{columnResizing:i({},e.columnResizing,{columnWidths:i({},e.columnResizing.columnWidths,{},m)})})}return t.type===s.columnDoneResizing?i({},e,{columnResizing:i({},e.columnResizing,{startX:null,isResizingColumn:null})}):void 0}Rt.pluginName=`useResizeColumns`;var Vt=function(e){var t=e.flatHeaders,n=e.disableResizing,r=e.getHooks,i=e.state.columnResizing,a=_(e);t.forEach((function(e){var t=O(!0!==e.disableResizing&&void 0,!0!==n&&void 0,!0);e.canResize=t,e.width=i.columnWidths[e.id]||e.originalWidth||e.width,e.isResizing=i.isResizingColumn===e.id,t&&(e.getResizerProps=f(r().getResizerProps,{instance:a(),header:e}))}))};function Ht(e){var n=e.plugins,r=e.dispatch,i=e.autoResetResize,a=i===void 0||i,o=e.columns;h(n,[`useAbsoluteLayout`],`useResizeColumns`);var c=_(a);y((function(){c()&&r({type:s.resetResize})}),[o]);var l=t.useCallback((function(){return r({type:s.resetResize})}),[r]);Object.assign(e,{resetResizing:l})}var J={position:`absolute`,top:0},Ut=function(e){e.getTableBodyProps.push(Y),e.getRowProps.push(Y),e.getHeaderGroupProps.push(Y),e.getFooterGroupProps.push(Y),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:i({},J,{left:n.totalLeft+`px`,width:n.totalWidth+`px`})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:i({},J,{left:n.column.totalLeft+`px`,width:n.column.totalWidth+`px`})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:i({},J,{left:n.totalLeft+`px`,width:n.totalWidth+`px`})}]}))};Ut.pluginName=`useAbsoluteLayout`;var Y=function(e,t){return[e,{style:{position:`relative`,width:t.instance.totalColumnsWidth+`px`}}]},X={display:`inline-block`,boxSizing:`border-box`},Z=function(e,t){return[e,{style:{display:`flex`,width:t.instance.totalColumnsWidth+`px`}}]},Wt=function(e){e.getRowProps.push(Z),e.getHeaderGroupProps.push(Z),e.getFooterGroupProps.push(Z),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:i({},X,{width:n.totalWidth+`px`})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:i({},X,{width:n.column.totalWidth+`px`})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:i({},X,{width:n.totalWidth+`px`})}]}))};function Gt(e){e.getTableProps.push(Kt),e.getRowProps.push(Q),e.getHeaderGroupProps.push(Q),e.getFooterGroupProps.push(Q),e.getHeaderProps.push(qt),e.getCellProps.push(Jt),e.getFooterProps.push(Yt)}Wt.pluginName=`useBlockLayout`,Gt.pluginName=`useFlexLayout`;var Kt=function(e,t){return[e,{style:{minWidth:t.instance.totalColumnsMinWidth+`px`}}]},Q=function(e,t){return[e,{style:{display:`flex`,flex:`1 0 auto`,minWidth:t.instance.totalColumnsMinWidth+`px`}}]},qt=function(e,t){var n=t.column;return[e,{style:{boxSizing:`border-box`,flex:n.totalFlexWidth?n.totalFlexWidth+` 0 auto`:void 0,minWidth:n.totalMinWidth+`px`,width:n.totalWidth+`px`}}]},Jt=function(e,t){var n=t.cell;return[e,{style:{boxSizing:`border-box`,flex:n.column.totalFlexWidth+` 0 auto`,minWidth:n.column.totalMinWidth+`px`,width:n.column.totalWidth+`px`}}]},Yt=function(e,t){var n=t.column;return[e,{style:{boxSizing:`border-box`,flex:n.totalFlexWidth?n.totalFlexWidth+` 0 auto`:void 0,minWidth:n.totalMinWidth+`px`,width:n.totalWidth+`px`}}]};function Xt(e){e.stateReducers.push(en),e.getTableProps.push(Zt),e.getHeaderProps.push(Qt),e.getRowProps.push($t)}s.columnStartResizing=`columnStartResizing`,s.columnResizing=`columnResizing`,s.columnDoneResizing=`columnDoneResizing`,s.resetResize=`resetResize`,Xt.pluginName=`useGridLayout`;var Zt=function(e,t){var n=t.instance;return[e,{style:{display:`grid`,gridTemplateColumns:n.visibleColumns.map((function(e){return n.state.gridLayout.columnWidths[e.id]?n.state.gridLayout.columnWidths[e.id]+`px`:n.state.columnResizing?.isResizingColumn?n.state.gridLayout.startWidths[e.id]+`px`:typeof e.width==`number`?e.width+`px`:e.width})).join(` `)}}]},Qt=function(e,t){var n=t.column;return[e,{id:`header-cell-`+n.id,style:{position:`sticky`,gridColumn:`span `+n.totalVisibleHeaderCount}}]},$t=function(e,t){var n=t.row;return n.isExpanded?[e,{style:{gridColumn:`1 / `+(n.cells.length+1)}}]:[e,{}]};function en(e,t,n,r){if(t.type===s.init)return i({gridLayout:{columnWidths:{}}},e);if(t.type===s.resetResize)return i({},e,{gridLayout:{columnWidths:{}}});if(t.type===s.columnStartResizing){var a=t.columnId,o=t.headerIdWidths,c=$(a);if(c!==void 0){var l=r.visibleColumns.reduce((function(e,t){var n;return i({},e,((n={})[t.id]=$(t.id),n))}),{}),u=r.visibleColumns.reduce((function(e,t){var n;return i({},e,((n={})[t.id]=t.minWidth,n))}),{}),d=r.visibleColumns.reduce((function(e,t){var n;return i({},e,((n={})[t.id]=t.maxWidth,n))}),{}),f=o.map((function(e){var t=e[0];return[t,$(t)]}));return i({},e,{gridLayout:i({},e.gridLayout,{startWidths:l,minWidths:u,maxWidths:d,headerIdGridWidths:f,columnWidth:c})})}return e}if(t.type===s.columnResizing){var p=t.clientX,m=e.columnResizing.startX,h=e.gridLayout,g=h.columnWidth,_=h.minWidths,v=h.maxWidths,y=h.headerIdGridWidths,b=(p-m)/g,x={};return(y===void 0?[]:y).forEach((function(e){var t=e[0],n=e[1];x[t]=Math.min(Math.max(_[t],n+n*b),v[t])})),i({},e,{gridLayout:i({},e.gridLayout,{columnWidths:i({},e.gridLayout.columnWidths,{},x)})})}return t.type===s.columnDoneResizing?i({},e,{gridLayout:i({},e.gridLayout,{startWidths:{},minWidths:{},maxWidths:{}})}):void 0}function $(e){var t=document.getElementById(`header-cell-`+e)?.offsetWidth;if(t!==void 0)return t}e._UNSTABLE_usePivotColumns=ct,e.actions=s,e.defaultColumn=u,e.defaultGroupByFn=Xe,e.defaultOrderByFn=it,e.defaultRenderer=c,e.emptyRenderer=l,e.ensurePluginOrder=h,e.flexRender=x,e.functionalUpdate=g,e.loopHooks=m,e.makePropGetter=f,e.makeRenderer=b,e.reduceHooks=p,e.safeUseLayoutEffect=v,e.useAbsoluteLayout=Ut,e.useAsyncDebounce=function(e,n){n===void 0&&(n=0);var i=t.useRef({}),a=_(e),o=_(n);return t.useCallback(function(){var e=r(regeneratorRuntime.mark((function e(){var t,n,s,c=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=c.length,n=Array(t),s=0;s<t;s++)n[s]=c[s];return i.current.promise||(i.current.promise=new Promise((function(e,t){i.current.resolve=e,i.current.reject=t}))),i.current.timeout&&clearTimeout(i.current.timeout),i.current.timeout=setTimeout(r(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete i.current.timeout,e.prev=1,e.t0=i.current,e.next=5,a().apply(void 0,n);case 5:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),i.current.reject(e.t2);case 12:return e.prev=12,delete i.current.promise,e.finish(12);case 15:case`end`:return e.stop()}}),e,null,[[1,9,12,15]])}))),o()),e.abrupt(`return`,i.current.promise);case 5:case`end`:return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[a,o])},e.useBlockLayout=Wt,e.useColumnOrder=Pt,e.useExpanded=_e,e.useFilters=Ne,e.useFlexLayout=Gt,e.useGetLatest=_,e.useGlobalFilter=Ie,e.useGridLayout=Xt,e.useGroupBy=Ue,e.useMountedLayoutEffect=y,e.usePagination=at,e.useResizeColumns=Rt,e.useRowSelect=xt,e.useRowState=At,e.useSortBy=et,e.useTable=function(e){var n=[...arguments].slice(1);e=me(e),n=[ne].concat(n);var r=_(t.useRef({}).current);Object.assign(r(),i({},e,{plugins:n,hooks:te()})),n.filter(Boolean).forEach((function(e){e(r().hooks)}));var a=_(r().hooks);r().getHooks=a,delete r().hooks,Object.assign(r(),p(a().useOptions,me(e)));var o=r(),c=o.data,l=o.columns,u=o.initialState,d=o.defaultColumn,h=o.getSubRows,g=o.getRowId,v=o.stateReducer,y=o.useControlledState,x=_(v),D=t.useCallback((function(e,t){if(!t.type)throw console.info({action:t}),Error(`Unknown Action 👆`);return[].concat(a().stateReducers,Array.isArray(x())?x():[x()]).reduce((function(n,i){return i(n,t,e,r())||n}),e)}),[a,x,r]),O=t.useReducer(D,void 0,(function(){return D(u,{type:s.init})})),k=O[0],A=O[1],j=p([].concat(a().useControlledState,[y]),k,{instance:r()});Object.assign(r(),{state:j,dispatch:A});var M=t.useMemo((function(){return S(p(a().columns,l,{instance:r()}))}),[a,r,l].concat(p(a().columnsDeps,[],{instance:r()})));r().columns=M;var N=t.useMemo((function(){return p(a().allColumns,C(M),{instance:r()}).map(w)}),[M,a,r].concat(p(a().allColumnsDeps,[],{instance:r()})));r().allColumns=N;var P=t.useMemo((function(){for(var e=[],t=[],n={},i=[].concat(N);i.length;)ge({data:c,rows:e,flatRows:t,rowsById:n,column:i.shift(),getRowId:g,getSubRows:h,accessValueHooks:a().accessValue,getInstance:r});return[e,t,n]}),[N,c,g,h,a,r]),F=P[0],I=P[1],L=P[2];Object.assign(r(),{rows:F,initialRows:[].concat(F),flatRows:I,rowsById:L}),m(a().useInstanceAfterData,r());var R=t.useMemo((function(){return p(a().visibleColumns,N,{instance:r()}).map((function(e){return T(e,d)}))}),[a,N,r,d].concat(p(a().visibleColumnsDeps,[],{instance:r()})));N=t.useMemo((function(){var e=[].concat(R);return N.forEach((function(t){e.find((function(e){return e.id===t.id}))||e.push(t)})),e}),[N,R]),r().allColumns=N;var z=t.useMemo((function(){return p(a().headerGroups,E(R,d),r())}),[a,R,d,r].concat(p(a().headerGroupsDeps,[],{instance:r()})));r().headerGroups=z;var B=t.useMemo((function(){return z.length?z[0].headers:[]}),[z]);r().headers=B,r().flatHeaders=z.reduce((function(e,t){return[].concat(e,t.headers)}),[]),m(a().useInstanceBeforeDimensions,r());var V=R.filter((function(e){return e.isVisible})).map((function(e){return e.id})).sort().join(`_`);R=t.useMemo((function(){return R.filter((function(e){return e.isVisible}))}),[R,V]),r().visibleColumns=R;var H=he(B),U=H[0],W=H[1],ee=H[2];return r().totalColumnsMinWidth=U,r().totalColumnsWidth=W,r().totalColumnsMaxWidth=ee,m(a().useInstance,r()),[].concat(r().flatHeaders,r().allColumns).forEach((function(e){e.render=b(r(),e),e.getHeaderProps=f(a().getHeaderProps,{instance:r(),column:e}),e.getFooterProps=f(a().getFooterProps,{instance:r(),column:e})})),r().headerGroups=t.useMemo((function(){return z.filter((function(e,t){return e.headers=e.headers.filter((function(e){return e.headers?function e(t){return t.filter((function(t){return t.headers?e(t.headers):t.isVisible})).length}(e.headers):e.isVisible})),!!e.headers.length&&(e.getHeaderGroupProps=f(a().getHeaderGroupProps,{instance:r(),headerGroup:e,index:t}),e.getFooterGroupProps=f(a().getFooterGroupProps,{instance:r(),headerGroup:e,index:t}),!0)}))}),[z,r,a]),r().footerGroups=[].concat(r().headerGroups).reverse(),r().prepareRow=t.useCallback((function(e){e.getRowProps=f(a().getRowProps,{instance:r(),row:e}),e.allCells=N.map((function(t){var n=e.values[t.id],i={column:t,row:e,value:n};return i.getCellProps=f(a().getCellProps,{instance:r(),cell:i}),i.render=b(r(),t,{row:e,cell:i,value:n}),i})),e.cells=R.map((function(t){return e.allCells.find((function(e){return e.column.id===t.id}))})),m(a().prepareRow,e,{instance:r()})}),[a,r,N,R]),r().getTableProps=f(a().getTableProps,{instance:r()}),r().getTableBodyProps=f(a().getTableBodyProps,{instance:r()}),m(a().useFinalInstance,r()),r()},Object.defineProperty(e,`__esModule`,{value:!0})}))})),k=n(((e,t)=>{t.exports=O()})),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;t((()=>{A=e(r(),1),j=k(),C(),y(),d(),D(),g(),M=i(),N={title:`Components/Table`,component:u,parameters:{controls:{disable:!0},actions:{argTypesRegex:`^on.*`}}},P={selection:`auto`,status:`120px`,type:`120px`,createdBy:`120px`,lastModifiedOn:`160px`},F=()=>(0,M.jsxs)(u,{children:[(0,M.jsx)(h,{children:(0,M.jsxs)(c,{children:[(0,M.jsx)(_,{children:`first column`}),(0,M.jsx)(_,{children:`second column`}),(0,M.jsx)(_,{children:`third column`}),(0,M.jsx)(_,{children:`fourth column`})]})}),(0,M.jsxs)(m,{children:[(0,M.jsxs)(c,{isHighlighted:!0,children:[(0,M.jsx)(s,{iconStart:(0,M.jsx)(b,{color:`red`}),children:`cell 1`}),(0,M.jsx)(s,{children:`cell 2`}),(0,M.jsx)(s,{children:`cell 3`}),(0,M.jsxs)(s,{children:[(0,M.jsx)(a,{variant:`ghost`,icon:(0,M.jsx)(x,{})}),(0,M.jsx)(a,{variant:`ghost`,icon:(0,M.jsx)(S,{})})]})]}),(0,M.jsxs)(c,{children:[(0,M.jsx)(s,{iconStart:(0,M.jsx)(b,{color:`red`}),children:`cell 4`}),(0,M.jsx)(s,{children:`cell 5`}),(0,M.jsx)(s,{children:`cell 6`}),(0,M.jsxs)(s,{children:[(0,M.jsx)(a,{variant:`ghost`,icon:(0,M.jsx)(x,{})}),(0,M.jsx)(a,{variant:`ghost`,icon:(0,M.jsx)(S,{})})]})]}),(0,M.jsxs)(c,{children:[(0,M.jsx)(s,{iconStart:(0,M.jsx)(b,{color:`red`}),children:`cell 7`}),(0,M.jsx)(s,{children:`cell 8`}),(0,M.jsx)(s,{children:`cell 9`}),(0,M.jsxs)(s,{children:[(0,M.jsx)(a,{variant:`ghost`,icon:(0,M.jsx)(x,{})}),(0,M.jsx)(a,{variant:`ghost`,icon:(0,M.jsx)(S,{})})]})]})]})]}),I={render:()=>{let{getTableProps:e,getTableBodyProps:t,headerGroups:n,rows:r,prepareRow:i}=(0,j.useTable)({data:A.useMemo(()=>w,[]),columns:A.useMemo(()=>[{Header:`Name`,id:`name`,accessor:e=>e.name.value,Cell:e=>{let{row:t}=e;return(0,M.jsx)(f,{iconStart:t.original.name.icon,children:t.values.name})}},{Header:`Status`,accessor:`status`,customWidth:P.status},{Header:`Type`,accessor:`type`,customWidth:P.type},{Header:`Created By`,accessor:`createdBy`,customWidth:P.createdBy},{Header:`Last Modified On`,accessor:`lastModifiedOn`,customWidth:P.lastModifiedOn}],[])});return(0,M.jsxs)(u,{...e(),children:[(0,M.jsx)(h,{children:n.map(e=>(0,M.jsx)(c,{...e.getHeaderGroupProps(),children:e.headers.map(e=>(0,M.jsx)(_,{...e.getHeaderProps(),width:e.customWidth,children:e.render(`Header`)}))}))}),(0,M.jsx)(m,{...t(),children:r.map(e=>(i(e),(0,M.jsx)(c,{...e.getRowProps(),children:e.cells.map(e=>(0,M.jsx)(s,{...e.getCellProps(),width:e.column.customWidth,children:e.render(`Cell`)}))})))})]})},name:`Basic Table with React-Table`},L={render:()=>{let{getTableProps:e,getTableBodyProps:t,headerGroups:n,rows:r,prepareRow:i,selectedFlatRows:a,state:{selectedRowIds:l}}=(0,j.useTable)({data:A.useMemo(()=>w,[]),columns:A.useMemo(()=>[{id:`selection`,Header:e=>(0,M.jsx)(o,{...e.getToggleAllRowsSelectedProps()}),Cell:e=>(0,M.jsx)(o,{...e.row.getToggleRowSelectedProps()}),customWidth:P.selection},{Header:`Name`,id:`name`,accessor:e=>e.name.value,Cell:e=>{let{row:t}=e;return(0,M.jsx)(f,{iconStart:t.original.name.icon,children:t.values.name})}},{Header:`Status`,accessor:`status`,customWidth:P.status},{Header:`Type`,accessor:`type`,customWidth:P.type},{Header:`Created By`,accessor:`createdBy`,customWidth:P.createdBy},{Header:`Last Modified On`,accessor:`lastModifiedOn`,customWidth:P.lastModifiedOn}],[])},j.useRowSelect);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(u,{...e(),children:[(0,M.jsx)(h,{children:n.map(e=>(0,M.jsx)(c,{...e.getHeaderGroupProps(),children:e.headers.map(e=>(0,M.jsx)(_,{...e.getHeaderProps(),width:e.customWidth,children:e.render(`Header`)}))}))}),(0,M.jsx)(m,{...t(),children:r.map((e,t)=>(i(e),(0,M.jsx)(c,{isSelected:e.isSelected,isHighlighted:t===1,...e.getRowProps(),children:e.cells.map(e=>(0,M.jsx)(s,{...e.getCellProps(),width:e.column.customWidth,children:e.render(`Cell`)}))})))})]}),(0,M.jsx)(`section`,{className:v,children:(0,M.jsx)(`pre`,{children:(0,M.jsx)(`code`,{className:`storyCode`,children:JSON.stringify({selectedRowIds:l,"selectedFlatRows[].original":a.map(e=>e.original)},null,2)})})})]})},name:`Selectable Rows with React-Table`},R={render:()=>{let{getTableProps:e,getTableBodyProps:t,headerGroups:n,rows:r,prepareRow:i}=(0,j.useTable)({data:A.useMemo(()=>w,[]),columns:A.useMemo(()=>[{Header:`Name`,id:`name`,accessor:e=>e.name.value,Cell:e=>{let{row:t}=e;return(0,M.jsx)(f,{iconStart:t.original.name.icon,children:t.values.name})}},{Header:`Status`,accessor:`status`,disableSortBy:!0,customWidth:P.status},{Header:`Type`,accessor:`type`,customWidth:P.type},{Header:`Created By`,accessor:`createdBy`,customWidth:P.createdBy},{Header:`Last Modified On`,accessor:`lastModifiedOn`,customWidth:P.lastModifiedOn}],[]),initialState:{sortBy:[{id:`lastModifiedOn`,desc:!0}]},disableSortRemove:!0},j.useSortBy),a=(e,t)=>(0,M.jsx)(l,{isSorted:e,direction:t?`descending`:`ascending`});return(0,M.jsxs)(u,{...e(),children:[(0,M.jsx)(h,{children:n.map(e=>(0,M.jsx)(c,{...e.getHeaderGroupProps(),children:e.headers.map(e=>(0,M.jsx)(_,{...e.getHeaderProps(e.getSortByToggleProps()),iconEnd:e.canSort&&a(e.isSorted,e.isSortedDesc),width:e.customWidth,children:e.render(`Header`)}))}))}),(0,M.jsx)(m,{...t(),children:r.map(e=>(i(e),(0,M.jsx)(c,{...e.getRowProps(),isHighlighted:e.values.name===`Highlight Row`,children:e.cells.map(e=>(0,M.jsx)(s,{...e.getCellProps(),width:e.column.customWidth,children:e.render(`Cell`)}))})))})]})},name:`Sorting by Column with React-Table`},z={render:()=>{let[e,t]=(0,A.useState)(5),[n,r]=(0,A.useState)(1),{getTableProps:i,getTableBodyProps:a,headerGroups:o,rows:l,prepareRow:d}=(0,j.useTable)({data:A.useMemo(()=>T.slice((n-1)*e,Math.min(T.length,n*e)),[n,e]),columns:A.useMemo(()=>[{Header:`Name`,id:`name`,accessor:e=>e.name.value,Cell:e=>{let{row:t}=e;return(0,M.jsx)(f,{iconStart:t.original.name.icon,children:t.values.name})}},{Header:`Type`,accessor:`type`,customWidth:P.type},{Header:`Created By`,accessor:`createdBy`,customWidth:P.createdBy},{Header:`Last Modified On`,accessor:`lastModifiedOn`,customWidth:P.lastModifiedOn}],[])});return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(u,{...i(),children:[(0,M.jsx)(h,{children:o.map(e=>(0,M.jsx)(c,{...e.getHeaderGroupProps(),children:e.headers.map(e=>(0,M.jsx)(_,{...e.getHeaderProps(),width:e.customWidth,children:e.render(`Header`)}))}))}),(0,M.jsx)(m,{...a(),children:l.map(e=>(d(e),(0,M.jsx)(c,{...e.getRowProps(),children:e.cells.map(e=>(0,M.jsx)(s,{...e.getCellProps(),width:e.column.customWidth,children:e.render(`Cell`)}))})))})]}),(0,M.jsx)(p,{currentPage:n,totalNumberOfRows:T.length,rowsPerPage:e,onRowsPerPageChange:e=>t(e),onPageChange:e=>r(e)})]})},name:`Pagination with React-Table`},B={render:()=>{let{getTableProps:e,getTableBodyProps:t,headerGroups:n,rows:r,prepareRow:i,toggleAllRowsExpanded:a}=(0,j.useTable)({data:A.useMemo(()=>E,[]),columns:A.useMemo(()=>[{Header:`Name`,id:`name`,accessor:e=>e.name.value},{Header:`Status`,accessor:`status`,customWidth:P.status},{Header:`Type`,accessor:`type`,customWidth:P.type},{Header:`Created By`,accessor:`createdBy`,customWidth:P.createdBy},{Header:`Last Modified On`,accessor:`lastModifiedOn`,customWidth:P.lastModifiedOn}],[])},j.useExpanded);return(0,A.useEffect)(()=>{a()},[a]),(0,M.jsxs)(u,{...e(),children:[(0,M.jsx)(h,{children:n.map(e=>(0,M.jsx)(c,{...e.getHeaderGroupProps(),children:e.headers.map(e=>(0,M.jsx)(_,{...e.getHeaderProps(),width:e.customWidth,children:e.render(`Header`)}))}))}),(0,M.jsx)(m,{...t(),children:r.map(e=>(i(e),(0,M.jsx)(c,{...e.getRowProps(),children:e.cells.map(t=>(0,M.jsx)(s,{...t.getCellProps(),row:e,cell:t,isExpandableColumn:t.column.id===`name`,iconStart:e.original[t.column.id]?.icon,width:t.column.customWidth,children:t.render(`Cell`)}))})))})]})},name:`Structured View with React-Table`},V=()=>{let e=[],t=[];for(let t=1;t<=4;t++)e.push(`column `+t);for(let e=1;e<=20;e++)t.push(`row `+e);return(0,M.jsxs)(u,{children:[(0,M.jsx)(h,{isSticky:!0,children:(0,M.jsx)(c,{children:e.map(e=>(0,M.jsx)(_,{children:e},e))})}),(0,M.jsx)(m,{children:t.map(t=>(0,M.jsx)(c,{children:e.map(e=>(0,M.jsx)(s,{children:`this is a cell!`},t+e))},t))})]})},H={render:()=>{let[e,t]=(0,A.useState)(5),[n,r]=(0,A.useState)(1),{getTableProps:i,getTableBodyProps:a,headerGroups:d,rows:f,prepareRow:g}=(0,j.useTable)({data:A.useMemo(()=>T.slice((n-1)*e,Math.min(T.length,n*e)),[n,e]),columns:A.useMemo(()=>[{id:`selection`,customWidth:P.selection,Header:e=>(0,M.jsx)(o,{...e.getToggleAllRowsSelectedProps()}),Cell:e=>(0,M.jsx)(o,{...e.row.getToggleRowSelectedProps()})},{Header:`Name`,id:`name`,accessor:e=>e.name.value},{Header:`Status`,accessor:`status`,disableSortBy:!0,customWidth:P.status},{Header:`Type`,accessor:`type`,customWidth:P.type},{Header:`Created By`,accessor:`createdBy`,customWidth:P.createdBy},{Header:`Last Modified On`,accessor:`lastModifiedOn`,customWidth:P.lastModifiedOn}],[]),initialState:{sortBy:[{id:`lastModifiedOn`,desc:!0}]},disableSortRemove:!0},j.useSortBy,j.useRowSelect),v=(e,t)=>(0,M.jsx)(l,{isSorted:e,direction:t?`descending`:`ascending`});return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(u,{...i(),children:[(0,M.jsx)(h,{isSticky:!0,children:d.map(e=>(0,M.jsx)(c,{...e.getHeaderGroupProps(),children:e.headers.map(e=>(0,M.jsx)(_,{...e.getHeaderProps(e.getSortByToggleProps()),iconEnd:e.canSort&&v(e.isSorted,e.isSortedDesc),width:e.customWidth,children:e.render(`Header`)}))}))}),(0,M.jsx)(m,{...a(),children:f.map((e,t)=>(g(e),(0,M.jsx)(c,{isSelected:e.isSelected,isHighlighted:t===1,...e.getRowProps(),children:e.cells.map(t=>(0,M.jsx)(s,{...t.getCellProps(),iconStart:e.original[t.column.id]?.icon,width:t.column.customWidth,children:t.render(`Cell`)}))})))})]}),(0,M.jsx)(p,{currentPage:n,totalNumberOfRows:T.length,rowsPerPage:e,onRowsPerPageChange:e=>t(e),onPageChange:e=>r(e)})]})},name:`All features except row expansion - flat data`},U={render:()=>{let{getTableProps:e,getTableBodyProps:t,headerGroups:n,rows:r,prepareRow:i,toggleAllRowsExpanded:a}=(0,j.useTable)({data:A.useMemo(()=>E,[]),columns:A.useMemo(()=>[{id:`selection`,customWidth:P.selection,Header:e=>(0,M.jsx)(o,{...e.getToggleAllRowsSelectedProps()}),Cell:e=>(0,M.jsx)(o,{...e.row.getToggleRowSelectedProps()})},{Header:`Name`,id:`name`,accessor:e=>e.name.value},{Header:`Status`,accessor:`status`,disableSortBy:!0,customWidth:P.status},{Header:`Type`,accessor:`type`,customWidth:P.type},{Header:`Created By`,accessor:`createdBy`,customWidth:P.createdBy},{Header:`Last Modified On`,accessor:`lastModifiedOn`,customWidth:P.lastModifiedOn}],[]),initialState:{sortBy:[{id:`lastModifiedOn`,desc:!0}]},disableSortRemove:!0},j.useSortBy,j.useExpanded,j.useRowSelect),d=(e,t)=>(0,M.jsx)(l,{isSorted:e,direction:t?`descending`:`ascending`});return(0,A.useEffect)(()=>{a()},[a]),(0,M.jsxs)(u,{...e(),children:[(0,M.jsx)(h,{isSticky:!0,children:n.map(e=>(0,M.jsx)(c,{...e.getHeaderGroupProps(),children:e.headers.map(e=>(0,M.jsx)(_,{...e.getHeaderProps(e.getSortByToggleProps()),iconEnd:e.canSort&&d(e.isSorted,e.isSortedDesc),width:e.customWidth,children:e.render(`Header`)}))}))}),(0,M.jsx)(m,{...t(),children:r.map((e,t)=>(i(e),(0,M.jsx)(c,{isSelected:e.isSelected,isHighlighted:t===1,...e.getRowProps(),children:e.cells.map(t=>(0,M.jsx)(s,{...t.getCellProps(),row:e,cell:t,isExpandableColumn:t.column.id===`name`,iconStart:e.original[t.column.id]?.icon,width:t.column.customWidth,children:t.render(`Cell`)}))})))})]})},name:`All features except pagination - nested data`},F.__docgenInfo={description:``,methods:[],displayName:`Basic`},V.__docgenInfo={description:``,methods:[],displayName:`StickyHeader`},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => <Table>
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
    </Table>`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
                <section className={reset}>
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Basic`,`BasicReactTable`,`SelectableRows`,`SortingByColumn`,`Pagination`,`StructuredView`,`StickyHeader`,`KitchenSinkFlat`,`KitchenSinkNested`]}))();export{F as Basic,I as BasicReactTable,H as KitchenSinkFlat,U as KitchenSinkNested,z as Pagination,L as SelectableRows,R as SortingByColumn,V as StickyHeader,B as StructuredView,W as __namedExportsOrder,N as default};