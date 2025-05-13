import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p,R as U}from"./index-G8LIXM5I.js";import{M as t,a as l}from"./MenuItem-B4WwRyAU.js";import{S as A}from"./Separator-ChTYNnEP.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./SearchInput-DQDkqlfu.js";import"./Button-CgeSGZUR.js";/* empty css               */import"./Loader-DsiRlRl8.js";import"./Typography-C8hU4Ja4.js";import"./Search-DSeLwkIx.js";import"./ListItem-Crrcgnf0.js";const P="data:text/markdown;base64,IyMgU3BlY2lmaWNhdGlvbnM6CgpBIHR5cGUgb2Ygd2lkZ2V0IHRoYXQgb2ZmZXJzIGEgbGlzdCBvZiBjaG9pY2VzIG9yIGFjdGlvbnMgdG8gdGhlIHVzZXIuCgotIEl0IGRpc3BsYXlzIGFib3ZlIHRoZSBjb250ZW50LgotIFVzZXIgY2FuIHZhbGlkYXRlIGEgdmFsdWUgYnkgcHJlc3NpbmcgYEVudGVyYAotIFRoZSBtZW51IGhhcyBhIG1heGltdW0gaGVpZ2h0IGFuZCBpdOKAmXMgc2Nyb2xsYWJsZQotIFRvIGhpZGUgdGhlIG1lbnUgY2xpY2sgb24gYW4gaXRlbSBvZiB0aGUgbGlzdCBvciBjbGljayBvdXRzaWRlIHRvIGl0CgoKIyMgUG9zaXRpb25pbmcKCmBhbmNob3JFbGAgaXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50IHRvIHBvc2lvbmluZyB0aGUgbWVudQpgYW5jaG9yUG9zaXRpb25gIFBvc2l0aW9uIG9mIHRoZSBtZW51CmBwb3NpdGlvbmAgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtZW51IGlzIGBwb3NpdGlvbjogZml4ZWRgICh0aGUgZGVmYXVsdCkgb3IgYHBvc2l0aW9uOiBhYnNvbHV0ZWAKCi0gaWYgYGFuY2hvckVsYCBpcyBwcm92aWRlZCB0aGUgcG9zaXRpb24gaXMgcmVsYXRpdmUgdG8gdGhlIGJvdHRvbSBsZWZ0IGNvcm5lciB0byB0aGlzIGVsZW1lbnQuCi0gaWYgYGFuY2hvckVsYCBpcyBub3Qgc2V0IHRoZSBwb3NpdGlvbiBpcyByZWxhdGl2ZSB0byB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSB2aWV3cG9ydC4KLSBpZiBgcG9zaXRpb249ImFic29sdXRlImAgaXMgcHJvdmlkZWQgdG8gdGhlIG1lbnUgY29tcG9uZW50LCB0aGUgbWVudSB3aWxsIGJlIHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgZmlyc3QgcG9zaXRpb25lZCBhbmNlc3RvciBhbmQgaWYgYW4gYGFuY2hvckVsYCB3YXMgcGFzc2VkIGluLCBpdCB3aWxsIGJlIGlnbm9yZWQuCgojIyBTZWFyY2gKVXNlIHRoZSBgaGFzU2VhcmNoYCBib29sZWFuIHByb3AgdG8gZGlzcGxheSB0aGUgc2VhcmNoIGlucHV0IGF0IHRoZSB0b3Agb2YgdGhlIG1lbnUuCgpVc2UgdGhlIGBzZWFyY2hFbXB0eVRleHRgIHByb3AgdG8gcHJvdmlkZSBhIHN0cmluZyB0byBkaXNwbGF5IHdoZW4gdGhlIHNlYXJjaCByZXR1cm5zIG5vIHJlc3VsdHMuCg==",me={title:"Components/Menu",component:l,subcomponents:{MenuItem:t},parameters:{notes:{markdown:P},docs:{inlineStories:!1,IframeHeight:500}}},r={render:a=>e.jsxs(l,{...a,children:[e.jsx(t,{label:"Base items",variant:"title"}),e.jsx(t,{label:"Item1"}),e.jsx(t,{label:"Item2"}),e.jsx(t,{label:"Item3"}),e.jsx(A,{}),e.jsx(t,{label:"Variants",variant:"title"}),e.jsx(t,{isHover:!0,label:"Item3 - Hover"}),e.jsx(t,{isDisabled:!0,label:"Item3 - Disabled"}),e.jsx(t,{isHighlighted:!0,label:"Item3 - Highlighted"}),e.jsx(t,{isSelected:!0,label:"Item4 - Selected"})]}),args:{isDisplayed:!0,maxHeight:"250px",style:{zIndex:1e4}}},n=()=>{const[a,s]=p.useState(!1),[b,x]=p.useState(),m=i=>{a?o():(s(!0),x({top:i.clientY,left:i.clientX}))},o=()=>{s(!1)};return e.jsxs("div",{className:"flexRow_center alignCenter",style:{transform:"scale(1)",height:"100vh"},onClick:m,children:[e.jsx("p",{children:"Click somewhere to display the menu, another click close it"}),e.jsxs(l,{isDisplayed:a,anchorPosition:b,onClose:o,children:[e.jsx(t,{label:"Item1"}),e.jsx(t,{label:"Item2"}),e.jsx(t,{label:"Item3"})]})]})},c=()=>{const[a,s]=p.useState(!1),[b,x]=p.useState(null),m=U.useRef(),o=()=>{x(m),a?i():s(!0)},i=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{ref:m,type:"button",style:{margin:"90px",width:"100px",height:"100px"},onClick:o,children:"Display menu"}),e.jsxs(l,{isDisplayed:a,anchorEl:b,anchorPosition:{top:0,left:0},anchorElOrigin:{vertical:"bottom",horizontal:"left"},transformElOrigin:{vertical:"top",horizontal:"left"},onClose:i,children:[e.jsx(t,{label:"Item1"}),e.jsx(t,{label:"Item2"}),e.jsx(t,{label:"Item3"})]})]})},g=()=>e.jsxs("div",{style:{position:"relative",transform:"translate(90px, 90px)",width:"100px",height:"100px"},children:[e.jsx("div",{style:{height:"100%",width:"100%",backgroundColor:"var(--color-accent)",cursor:"pointer",padding:"10px"},children:"Parent div is position: relative."}),e.jsxs(l,{isDisplayed:!0,position:"absolute",anchorPosition:{top:4,left:0},anchorElOrigin:{vertical:"bottom",horizontal:"left"},transformElOrigin:{vertical:"top",horizontal:"left"},children:[e.jsx(t,{label:"Item1"}),e.jsx(t,{label:"Item2"}),e.jsx(t,{label:"Item3"})]})]}),I=()=>e.jsx("div",{style:{transform:"scale(1)",height:"100vh"},children:e.jsxs(l,{isDisplayed:!0,maxWidth:"400px",maxHeight:"440px",style:{zIndex:1e4},children:[e.jsx(t,{label:"Menu Items with Big Images Title",variant:"title"}),e.jsx(t,{label:"Big image MenuItem",image:e.jsx("img",{src:"https://via.placeholder.com/500?text=MenuItemImage",alt:"big image"}),imageSize:"big"}),e.jsx(t,{label:"Big image MenuItem",image:e.jsx("img",{src:"https://via.placeholder.com/500?text=MenuItemImage",alt:"big image"}),imageSize:"big"}),e.jsx(t,{isSelected:!0,label:"Big image MenuItem - selected",image:e.jsx("img",{src:"https://via.placeholder.com/500?text=MenuItemImage",alt:"big image"}),imageSize:"big"}),e.jsx(t,{label:"Big image MenuItem - lots of words lots of words lots of words",image:e.jsx("img",{src:"https://via.placeholder.com/300x500?text=MenuItemImage",alt:"big image"}),imageSize:"big"}),e.jsx(t,{label:"Big image MenuItem - lots of words lots of words lots of words",image:e.jsx("img",{src:"https://via.placeholder.com/500x300?text=MenuItemImage",alt:"big image"}),imageSize:"big"})]})}),d=()=>e.jsx("div",{style:{transform:"scale(1)",height:"100vh"},children:e.jsxs(l,{isDisplayed:!0,maxWidth:"264px",maxHeight:"320px",style:{zIndex:1e4},children:[e.jsx(t,{label:"Menu Items with Small Images Title",variant:"title"}),e.jsx(t,{label:"Small image MenuItem",image:e.jsx("img",{src:"https://via.placeholder.com/500?text=MenuItemImage",alt:"small image"}),imageSize:"small"}),e.jsx(t,{label:"Small image MenuItem",image:e.jsx("img",{src:"https://via.placeholder.com/500?text=MenuItemImage",alt:"small image"}),imageSize:"small"}),e.jsx(t,{isSelected:!0,label:"Small image MenuItem - selected",image:e.jsx("img",{src:"https://via.placeholder.com/500?text=MenuItemImage",alt:"small image"}),imageSize:"small"}),e.jsx(t,{label:"Small image MenuItem - lots of words lots of words lots of words",image:e.jsx("img",{src:"https://via.placeholder.com/300x500?text=MenuItemImage",alt:"small image"}),imageSize:"small"}),e.jsx(t,{label:"Small image MenuItem - lots of words lots of words lots of words",image:e.jsx("img",{src:"https://via.placeholder.com/500x300?text=MenuItemImage",alt:"small image"}),imageSize:"small"})]})}),u=()=>e.jsx("div",{style:{transform:"scale(1)",height:"100vh"},children:e.jsxs(l,{hasSearch:!0,isDisplayed:!0,searchEmptyText:"Oh no! It seems like that doesn't exist.",maxHeight:"250px",style:{zIndex:1e4},children:[e.jsx(t,{label:"Base items",variant:"title"}),e.jsx(t,{label:"Item1"}),e.jsx(t,{label:"Item2"}),e.jsx(t,{label:"Item3"}),e.jsx(t,{label:"Item4"}),e.jsx(t,{label:"Item5"}),e.jsx(t,{label:"Item6"}),e.jsx(t,{label:"Item7"}),e.jsx(t,{label:"Item8"}),e.jsx(t,{label:"Item9"})]})}),h=()=>e.jsx("div",{className:"moonstone-reversed",style:{transform:"scale(1)",height:"100vh",background:"var(--color-gray_dark)"},children:e.jsxs(l,{hasSearch:!0,isDisplayed:!0,searchEmptyText:"Oh no! It seems like that doesn't exist.",maxHeight:"250px",style:{zIndex:1e4},children:[e.jsx(t,{label:"Base items",variant:"title"}),e.jsx(t,{label:"Item1"}),e.jsx(t,{label:"Item2"}),e.jsx(t,{label:"Item3"}),e.jsx(t,{label:"Item4"}),e.jsx(t,{label:"Item5"}),e.jsx(t,{label:"Item6"}),e.jsx(t,{label:"Item7"}),e.jsx(t,{label:"Item8"}),e.jsx(t,{label:"Item9"})]})});var M,v,y;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <MenuItem label="Base items" variant="title" />
            <MenuItem label="Item1" />
            <MenuItem label="Item2" />
            <MenuItem label="Item3" />
            <Separator />
            <MenuItem label="Variants" variant="title" />
            <MenuItem isHover label="Item3 - Hover" />
            <MenuItem isDisabled label="Item3 - Disabled" />
            <MenuItem isHighlighted label="Item3 - Highlighted" />
            <MenuItem isSelected label="Item4 - Selected" />
        </Menu>,
  args: {
    isDisplayed: true,
    maxHeight: '250px',
    style: {
      zIndex: 10000
    }
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var j,G,B;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<AnchorPosition>();
  const handleOnClick = (e: React.MouseEvent) => {
    if (isDisplayed) {
      handleClose();
    } else {
      setIsDisplayed(true);
      setMenuPosition({
        top: e.clientY,
        left: e.clientX
      });
    }
  };
  const handleClose = () => {
    setIsDisplayed(false);
  };
  return <div className="flexRow_center alignCenter" style={{
    transform: 'scale(1)',
    height: '100vh'
  }} onClick={handleOnClick}>
            <p>Click somewhere to display the menu, another click close it</p>
            <Menu isDisplayed={isDisplayed} anchorPosition={menuPosition} onClose={handleClose}>
                <MenuItem label="Item1" />
                <MenuItem label="Item2" />
                <MenuItem label="Item3" />
            </Menu>
        </div>;
}`,...(B=(G=n.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var S,f,z;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const buttonEl = React.useRef();
  const handleOnClick = () => {
    setAnchorEl(buttonEl);
    if (isDisplayed) {
      handleClose();
    } else {
      setIsDisplayed(true);
    }
  };
  const handleClose = () => {
    setIsDisplayed(false);
  };
  return <>
            <button ref={buttonEl} type="button" style={{
      margin: '90px',
      width: '100px',
      height: '100px'
    }} onClick={handleOnClick}>
                Display menu
            </button>
            <Menu isDisplayed={isDisplayed} anchorEl={anchorEl} anchorPosition={{
      top: 0,
      left: 0
    }} anchorElOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }} transformElOrigin={{
      vertical: 'top',
      horizontal: 'left'
    }} onClose={handleClose}>
                <MenuItem label="Item1" />
                <MenuItem label="Item2" />
                <MenuItem label="Item3" />
            </Menu>
        </>;
}`,...(z=(f=c.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var Z,C,H;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return (
    // <div style={{transform: 'scale(1)', height: '100vh'}}>
    // </div>
    <div style={{
      position: 'relative',
      transform: 'translate(90px, 90px)',
      width: '100px',
      height: '100px'
    }}>
            <div style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'var(--color-accent)',
        cursor: 'pointer',
        padding: '10px'
      }}>
                Parent div is position: relative.
            </div>
            <Menu isDisplayed position="absolute" anchorPosition={{
        top: 4,
        left: 0
      }} anchorElOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} transformElOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}>
                <MenuItem label="Item1" />
                <MenuItem label="Item2" />
                <MenuItem label="Item3" />
            </Menu>
        </div>
  );
}`,...(H=(C=g.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var w,W,R;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div style={{
  transform: 'scale(1)',
  height: '100vh'
}}>
        <Menu isDisplayed maxWidth="400px" maxHeight="440px" style={{
    zIndex: 10000
  }}>
            <MenuItem label="Menu Items with Big Images Title" variant="title" />
            <MenuItem label="Big image MenuItem" image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="big image" />} imageSize="big" />
            <MenuItem label="Big image MenuItem" image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="big image" />} imageSize="big" />
            <MenuItem isSelected label="Big image MenuItem - selected" image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="big image" />} imageSize="big" />
            <MenuItem label="Big image MenuItem - lots of words lots of words lots of words" image={<img src="https://via.placeholder.com/300x500?text=MenuItemImage" alt="big image" />} imageSize="big" />
            <MenuItem label="Big image MenuItem - lots of words lots of words lots of words" image={<img src="https://via.placeholder.com/500x300?text=MenuItemImage" alt="big image" />} imageSize="big" />
        </Menu>
    </div>`,...(R=(W=I.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var Y,k,D;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`() => <div style={{
  transform: 'scale(1)',
  height: '100vh'
}}>
        <Menu isDisplayed maxWidth="264px" maxHeight="320px" style={{
    zIndex: 10000
  }}>
            <MenuItem label="Menu Items with Small Images Title" variant="title" />
            <MenuItem label="Small image MenuItem" image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="small image" />} imageSize="small" />
            <MenuItem label="Small image MenuItem" image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="small image" />} imageSize="small" />
            <MenuItem isSelected label="Small image MenuItem - selected" image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="small image" />} imageSize="small" />
            <MenuItem label="Small image MenuItem - lots of words lots of words lots of words" image={<img src="https://via.placeholder.com/300x500?text=MenuItemImage" alt="small image" />} imageSize="small" />
            <MenuItem label="Small image MenuItem - lots of words lots of words lots of words" image={<img src="https://via.placeholder.com/500x300?text=MenuItemImage" alt="small image" />} imageSize="small" />
        </Menu>
    </div>`,...(D=(k=d.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var V,E,X;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`() => <div style={{
  transform: 'scale(1)',
  height: '100vh'
}}>
        <Menu hasSearch isDisplayed searchEmptyText="Oh no! It seems like that doesn't exist." maxHeight="250px" style={{
    zIndex: 10000
  }}>
            <MenuItem label="Base items" variant="title" />
            <MenuItem label="Item1" />
            <MenuItem label="Item2" />
            <MenuItem label="Item3" />
            <MenuItem label="Item4" />
            <MenuItem label="Item5" />
            <MenuItem label="Item6" />
            <MenuItem label="Item7" />
            <MenuItem label="Item8" />
            <MenuItem label="Item9" />
        </Menu>
    </div>`,...(X=(E=u.parameters)==null?void 0:E.docs)==null?void 0:X.source}}};var F,O,N;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`() => <div className="moonstone-reversed" style={{
  transform: 'scale(1)',
  height: '100vh',
  background: 'var(--color-gray_dark)'
}}>
        <Menu hasSearch isDisplayed searchEmptyText="Oh no! It seems like that doesn't exist." maxHeight="250px" style={{
    zIndex: 10000
  }}>
            <MenuItem label="Base items" variant="title" />
            <MenuItem label="Item1" />
            <MenuItem label="Item2" />
            <MenuItem label="Item3" />
            <MenuItem label="Item4" />
            <MenuItem label="Item5" />
            <MenuItem label="Item6" />
            <MenuItem label="Item7" />
            <MenuItem label="Item8" />
            <MenuItem label="Item9" />
        </Menu>
    </div>`,...(N=(O=h.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};const oe=["Default","ContextualMenu","AnchorElOrigin","PositionAbsolute","BigImageMenuItems","SmallImageMenuItems","WithSearch","Reversed"];export{c as AnchorElOrigin,I as BigImageMenuItems,n as ContextualMenu,r as Default,g as PositionAbsolute,h as Reversed,d as SmallImageMenuItems,u as WithSearch,oe as __namedExportsOrder,me as default};
