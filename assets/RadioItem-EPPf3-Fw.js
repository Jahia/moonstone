import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b,R}from"./index-G8LIXM5I.js";import{c as l}from"./clsx-B-dksMZM.js";import{S as C,a as q}from"./RadioUnchecked-DaPA0oal.js";import{T as m}from"./Typography-C8hU4Ja4.js";const v=b.createContext(void 0),c=({children:e,name:n,value:a,isDisabled:i,isReadOnly:d,onChange:s,className:u,...r})=>{(typeof a>"u"||a==="")&&(a=e[0].props.value);const o={name:n,value:a,isDisabled:i,isReadOnly:d,onChange:s};return t.jsx(v.Provider,{value:o,children:t.jsx("div",{...r,className:l("flexCol",u),children:e})})};try{c.displayName="ControlledRadioGroup",c.__docgenInfo={description:"",displayName:"ControlledRadioGroup",props:{name:{defaultValue:null,description:"RadioItem's input name",name:"name",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Content of RadioItem component (We expected at least 2 items)",name:"children",required:!0,type:{name:"ReactElement<RadioItemProps, string | JSXElementConstructor<any>>[]"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Function triggered on change of the RadioItem value",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string) => void"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the radio can be selected but not changed by the user",name:"isReadOnly",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of selected RadioItem. Define the component as controlled when it set (Controlled)",name:"value",required:!1,type:{name:"string"}}}}}catch{}const p=({onChange:e,defaultValue:n,children:a,...i})=>{(typeof n>"u"||n==="")&&(n=a[0].props.value);const[d,s]=b.useState(n),u=r=>{s(r.target.value),typeof e<"u"&&e(r,d)};return t.jsx(c,{value:d,onChange:u,...i,children:a})};try{p.displayName="UncontrolledRadioGroup",p.__docgenInfo={description:"",displayName:"UncontrolledRadioGroup",props:{name:{defaultValue:null,description:"RadioItem's input name",name:"name",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Content of RadioItem component (We expected at least 2 items)",name:"children",required:!0,type:{name:"ReactElement<RadioItemProps, string | JSXElementConstructor<any>>[]"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Function triggered on change of the RadioItem value",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string) => void"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the radio can be selected but not changed by the user",name:"isReadOnly",required:!1,type:{name:"boolean"}}}}}catch{}const f=({children:e,defaultValue:n,value:a,...i})=>!e||R.Children.count(e)<2?null:typeof a>"u"?t.jsx(p,{defaultValue:n,...i,children:e}):t.jsx(c,{value:a,...i,children:e});f.displayName="RadioGroup";try{f.displayName="RadioGroup",f.__docgenInfo={description:"",displayName:"RadioGroup",props:{name:{defaultValue:null,description:"RadioItem's input name",name:"name",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Content of RadioItem component (We expected at least 2 items)",name:"children",required:!0,type:{name:"ReactElement<RadioItemProps, string | JSXElementConstructor<any>>[]"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Function triggered on change of the RadioItem value",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string) => void"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the radio can be selected but not changed by the user",name:"isReadOnly",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of selected RadioItem. Define the component as controlled when it set (Controlled)",name:"value",required:!1,type:{name:"string"}}}}}catch{}const h=({className:e,id:n,value:a,label:i,description:d,isDisabled:s,isReadOnly:u,...r})=>{const o=R.useContext(v),y=typeof o.isDisabled>"u"?s:o.isDisabled,g=typeof o.isReadOnly>"u"?u:o.isReadOnly;return t.jsxs(m,{className:l("moonstone-radio-container flexCol",e),"aria-readonly":g,"aria-disabled":y,variant:"body",weight:"default",component:"label",children:[t.jsxs("div",{className:l("flexRow alignCenter"),children:[t.jsxs("div",{className:l("moonstone-radio"),children:[t.jsx("input",{...r,className:l("moonstone-radio_input"),type:"radio",checked:o.value===a,disabled:y,name:o.name,"aria-readonly":g,id:n,value:a,"aria-labelledby":`${n}-label`,"aria-describedby":d?`${n}-description`:null,onChange:_=>{o.onChange(_,a)}}),t.jsx(C,{className:l("moonstone-radio_icon moonstone-radio_iconChecked")}),t.jsx(q,{className:l("moonstone-radio_icon moonstone-radio_iconUnchecked")})]}),t.jsx(m,{id:`${n}-label`,variant:"body",weight:"default",component:"span",className:l("moonstone-radio-label"),children:i})]}),d&&t.jsx(m,{id:`${n}-description`,variant:"caption",weight:"default",component:"span",className:l("moonstone-radio-description flexRow"),children:d})]})};h.displayName="RadioItem";try{h.displayName="RadioItem",h.__docgenInfo={description:"",displayName:"RadioItem",props:{id:{defaultValue:null,description:"Identifier added to the input element",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Radio label",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"The value of the input element, used when submitting an HTML form",name:"value",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Radio description",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classname",name:"className",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the component should be disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the radio can be selected but not changed by the user",name:"isReadOnly",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Function triggered on focus of the radio value",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"Function triggered when the radio value loses focus",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}}}}}catch{}export{h as R,f as a};
