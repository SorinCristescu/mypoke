(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[12],{365:function(e,a,t){"use strict";t.r(a);var n=t(11),c=t(6),o=t(24),l=t.n(o),i=t(35),r=t(42),s=t(2),d=t(0),u=t(20),m=t(43),b=t(50),p=t(9),h=t(23),j=t.p+"static/media/japan.ef78e70c.svg",f=t.p+"static/media/china.64c26ba2.svg",g=t.p+"static/media/uk.91a2a59c.svg",O=t.p+"static/media/france.8df3c839.svg",x=t(63),v=t(158),y=Object(v.a)({root:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:"20px 0"},form:{width:"350px",height:"500px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:"10px",marginTop:"20px"},flag:{width:"25px",height:"25px",paddingTop:"8px"},logo:{width:"60px",height:"auto",paddingTop:"20px 0",margin:"20px 0 10px 0"},redirect:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},legend:{width:"100%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"},language:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}),k=t(5),C=t(364),w=t(242),N=t(191),P=t(372),E=t(355),I=t(357),R=t(373),F=t(210),S=t.n(F),B=t(211),D=t.n(B),z=t(164),W=t(1),$=t(3),M=(t(4),t(178)),L=t(7),T=t(14),A=d.forwardRef((function(e,a){e.checked;var t=e.classes,n=e.className,c=e.control,o=e.disabled,l=(e.inputRef,e.label),i=e.labelPlacement,r=void 0===i?"end":i,s=(e.name,e.onChange,e.value,Object($.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),u=Object(M.a)(),m=o;"undefined"===typeof m&&"undefined"!==typeof c.props.disabled&&(m=c.props.disabled),"undefined"===typeof m&&u&&(m=u.disabled);var b={disabled:m};return["checked","name","onChange","value","inputRef"].forEach((function(a){"undefined"===typeof c.props[a]&&"undefined"!==typeof e[a]&&(b[a]=e[a])})),d.createElement("label",Object(W.a)({className:Object(k.a)(t.root,n,"end"!==r&&t["labelPlacement".concat(Object(T.a)(r))],m&&t.disabled),ref:a},s),d.cloneElement(c,b),d.createElement(N.a,{component:"span",className:Object(k.a)(t.label,m&&t.disabled)},l))})),q=Object(L.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(A),J=t(356),H=t(209),U=d.forwardRef((function(e,a){var t=e.autoFocus,n=e.checked,c=e.checkedIcon,o=e.classes,l=e.className,i=e.defaultChecked,s=e.disabled,u=e.icon,m=e.id,b=e.inputProps,p=e.inputRef,h=e.name,j=e.onBlur,f=e.onChange,g=e.onFocus,O=e.readOnly,x=e.required,v=e.tabIndex,y=e.type,C=e.value,w=Object($.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),N=Object(H.a)({controlled:n,default:Boolean(i),name:"SwitchBase",state:"checked"}),P=Object(r.a)(N,2),E=P[0],I=P[1],R=Object(M.a)(),F=s;R&&"undefined"===typeof F&&(F=R.disabled);var S="checkbox"===y||"radio"===y;return d.createElement(z.a,Object(W.a)({component:"span",className:Object(k.a)(o.root,l,E&&o.checked,F&&o.disabled),disabled:F,tabIndex:null,role:void 0,onFocus:function(e){g&&g(e),R&&R.onFocus&&R.onFocus(e)},onBlur:function(e){j&&j(e),R&&R.onBlur&&R.onBlur(e)},ref:a},w),d.createElement("input",Object(W.a)({autoFocus:t,checked:n,defaultChecked:i,className:o.input,disabled:F,id:S&&m,name:h,onChange:function(e){var a=e.target.checked;I(a),f&&f(e,a)},readOnly:O,ref:p,required:x,tabIndex:v,type:y,value:C},b)),E?c:u)})),V=Object(L.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(U),Z=t(62),G=Object(Z.a)(d.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),K=Object(Z.a)(d.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var Q=Object(L.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var a=e.checked,t=e.classes,n=e.fontSize;return d.createElement("div",{className:Object(k.a)(t.root,a&&t.checked)},d.createElement(G,{fontSize:n}),d.createElement(K,{fontSize:n,className:t.layer}))})),X=t(21),Y=t(53);var _=d.createContext();var ee=d.createElement(Q,{checked:!0}),ae=d.createElement(Q,null),te=d.forwardRef((function(e,a){var t=e.checked,n=e.classes,c=e.color,o=void 0===c?"secondary":c,l=e.name,i=e.onChange,r=e.size,s=void 0===r?"medium":r,u=Object($.a)(e,["checked","classes","color","name","onChange","size"]),m=d.useContext(_),b=t,p=Object(Y.a)(i,m&&m.onChange),h=l;return m&&("undefined"===typeof b&&(b=m.value===e.value),"undefined"===typeof h&&(h=m.name)),d.createElement(V,Object(W.a)({color:o,type:"radio",icon:d.cloneElement(ae,{fontSize:"small"===s?"small":"default"}),checkedIcon:d.cloneElement(ee,{fontSize:"small"===s?"small":"default"}),classes:{root:Object(k.a)(n.root,n["color".concat(Object(T.a)(o))]),checked:n.checked,disabled:n.disabled},name:h,checked:b,onChange:p,ref:a},u))})),ne=Object(L.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(X.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(X.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(te);a.default=function(e){var a=y(),t=Object(u.b)(),o=Object(u.c)((function(e){return e.auth.isAuthenticated})),v=Object(u.c)((function(e){return e.auth.user})),F=Object(d.useState)({name:"",email:"",password:"",confirmedPassword:"",language:"english"}),B=Object(r.a)(F,2),W=B[0],$=B[1],M=Object(d.useState)(!1),L=Object(r.a)(M,2),T=L[0],A=L[1],H=function(){var e=Object(i.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),Q!==X?(console.log("Password do not match"),t(Object(b.a)("Passwords do not match!","error",!0))):(n={name:G,email:K,password:Q,language:Y},t(Object(m.d)(n)),$({name:"",email:"",password:"",confirmedPassword:"",language:"english"}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),U=function(e){$(Object(c.a)(Object(c.a)({},W),{},Object(n.a)({},e.target.name,e.target.value)))},V=function(){A(!T)},Z=function(e){e.preventDefault()},G=W.name,K=W.email,Q=W.password,X=W.confirmedPassword,Y=W.language;return o&&null!==v?Object(s.jsx)(p.a,{to:"/pokemons"}):Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:a.root,children:[Object(s.jsx)("img",{className:a.logo,src:x.a,alt:"logo"}),Object(s.jsx)(N.a,{variant:"h6",children:"Wellcome to MyPoke"}),Object(s.jsxs)("form",{autoComplete:"off",noValidate:!0,className:a.form,onSubmit:H,children:[Object(s.jsx)(C.a,{name:"name",variant:"outlined",label:"Name",fullWidth:!0,value:G,onChange:U}),Object(s.jsx)(C.a,{name:"email",variant:"outlined",label:"Email",fullWidth:!0,value:K,onChange:U}),Object(s.jsxs)(R.a,{className:Object(k.a)(a.margin,a.textField),variant:"outlined",fullWidth:!0,children:[Object(s.jsx)(E.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(s.jsx)(P.a,{id:"outlined-adornment-password",type:T?"text":"password",name:"password",value:Q,onChange:U,endAdornment:Object(s.jsx)(I.a,{position:"end",children:Object(s.jsx)(z.a,{"aria-label":"toggle password visibility",onClick:V,onMouseDown:Z,edge:"end",children:T?Object(s.jsx)(S.a,{}):Object(s.jsx)(D.a,{})})}),labelWidth:70})]}),Object(s.jsxs)(R.a,{className:Object(k.a)(a.margin,a.textField),variant:"outlined",fullWidth:!0,children:[Object(s.jsx)(E.a,{htmlFor:"outlined-adornment-confirmedpassword",children:"Confirmed"}),Object(s.jsx)(P.a,{id:"outlined-adornment-confirmedpassword",type:T?"text":"password",name:"confirmedPassword",value:X,onChange:U,endAdornment:Object(s.jsx)(I.a,{position:"end",children:Object(s.jsx)(z.a,{"aria-label":"toggle password visibility",onClick:V,onMouseDown:Z,edge:"end",children:T?Object(s.jsx)(S.a,{}):Object(s.jsx)(D.a,{})})}),labelWidth:70}),Object(s.jsxs)("div",{className:a.fieldset,children:[Object(s.jsx)(J.a,{component:"legend",focused:!1,className:a.legend,children:"Please choose your language."}),Object(s.jsxs)("div",{className:a.language,children:[Object(s.jsx)(q,{name:"language",value:"english",control:Object(s.jsx)(ne,{checked:"english"===Y,color:"primary",onChange:U}),labelPlacement:"top",label:Object(s.jsx)("img",{className:a.flag,src:g,alt:"flag"})}),Object(s.jsx)(q,{name:"language",value:"chinese",control:Object(s.jsx)(ne,{checked:"chinese"===Y,color:"primary",onChange:U}),labelPlacement:"top",label:Object(s.jsx)("img",{className:a.flag,src:f,alt:"flag"})}),Object(s.jsx)(q,{name:"language",value:"japanese",control:Object(s.jsx)(ne,{checked:"japanese"===Y,color:"primary",onChange:U}),labelPlacement:"top",label:Object(s.jsx)("img",{className:a.flag,src:j,alt:"flag"})}),Object(s.jsx)(q,{name:"language",value:"french",control:Object(s.jsx)(ne,{checked:"french"===Y,color:"primary",onChange:U}),labelPlacement:"top",label:Object(s.jsx)("img",{className:a.flag,src:O,alt:"flag"})})]})]})]}),Object(s.jsx)(N.a,{variant:"p",component:"p",className:a.message,children:"Register your new account"}),Object(s.jsx)(w.a,{className:a.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Register"}),Object(s.jsxs)("div",{className:a.redirect,children:[Object(s.jsx)(N.a,{variant:"p",component:"p",children:"If you have an account."}),Object(s.jsx)(h.b,{className:a.link,to:"/login",children:"Login in your account!"})]})]})]})})}}}]);
//# sourceMappingURL=12.fb6d11ca.chunk.js.map