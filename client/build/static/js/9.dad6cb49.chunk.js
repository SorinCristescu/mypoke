(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[9],{191:function(e,a,t){"use strict";var o=t(1),i=t(3),r=t(0),n=(t(4),t(5)),c=t(7),l=t(14),d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=r.forwardRef((function(e,a){var t=e.align,c=void 0===t?"inherit":t,p=e.classes,s=e.className,b=e.color,h=void 0===b?"initial":b,m=e.component,g=e.display,u=void 0===g?"initial":g,y=e.gutterBottom,x=void 0!==y&&y,v=e.noWrap,f=void 0!==v&&v,j=e.paragraph,O=void 0!==j&&j,S=e.variant,k=void 0===S?"body1":S,w=e.variantMapping,C=void 0===w?d:w,z=Object(i.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),W=m||(O?"p":C[k]||d[k])||"span";return r.createElement(W,Object(o.a)({className:Object(n.a)(p.root,s,"inherit"!==k&&p[k],"initial"!==h&&p["color".concat(Object(l.a)(h))],f&&p.noWrap,x&&p.gutterBottom,O&&p.paragraph,"inherit"!==c&&p["align".concat(Object(l.a)(c))],"initial"!==u&&p["display".concat(Object(l.a)(u))]),ref:a},z))}));a.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(p)},241:function(e,a,t){"use strict";var o=t(1),i=t(3),r=t(11),n=t(0),c=(t(4),t(5)),l=t(7),d=t(14),p=n.forwardRef((function(e,a){var t=e.classes,r=e.className,l=e.component,p=void 0===l?"div":l,s=e.disableGutters,b=void 0!==s&&s,h=e.fixed,m=void 0!==h&&h,g=e.maxWidth,u=void 0===g?"lg":g,y=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return n.createElement(p,Object(o.a)({className:Object(c.a)(t.root,r,m&&t.fixed,b&&t.disableGutters,!1!==u&&t["maxWidth".concat(Object(d.a)(String(u)))]),ref:a},y))}));a.a=Object(l.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(a,t){var o=e.breakpoints.values[t];return 0!==o&&(a[e.breakpoints.up(t)]={maxWidth:o}),a}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(p)},242:function(e,a,t){"use strict";var o=t(3),i=t(1),r=t(0),n=(t(4),t(5)),c=t(7),l=t(21),d=t(136),p=t(14),s=r.forwardRef((function(e,a){var t=e.children,c=e.classes,l=e.className,s=e.color,b=void 0===s?"default":s,h=e.component,m=void 0===h?"button":h,g=e.disabled,u=void 0!==g&&g,y=e.disableElevation,x=void 0!==y&&y,v=e.disableFocusRipple,f=void 0!==v&&v,j=e.endIcon,O=e.focusVisibleClassName,S=e.fullWidth,k=void 0!==S&&S,w=e.size,C=void 0===w?"medium":w,z=e.startIcon,W=e.type,R=void 0===W?"button":W,N=e.variant,I=void 0===N?"text":N,L=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),T=z&&r.createElement("span",{className:Object(n.a)(c.startIcon,c["iconSize".concat(Object(p.a)(C))])},z),B=j&&r.createElement("span",{className:Object(n.a)(c.endIcon,c["iconSize".concat(Object(p.a)(C))])},j);return r.createElement(d.a,Object(i.a)({className:Object(n.a)(c.root,c[I],l,"inherit"===b?c.colorInherit:"default"!==b&&c["".concat(I).concat(Object(p.a)(b))],"medium"!==C&&[c["".concat(I,"Size").concat(Object(p.a)(C))],c["size".concat(Object(p.a)(C))]],x&&c.disableElevation,u&&c.disabled,k&&c.fullWidth),component:m,disabled:u,focusRipple:!f,focusVisibleClassName:Object(n.a)(c.focusVisible,O),ref:a,type:R},L),r.createElement("span",{className:c.label},T,t,B))}));a.a=Object(c.a)((function(e){return{root:Object(i.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(s)},368:function(e,a,t){"use strict";t.r(a);var o=t(2),i=(t(0),t(23)),r=t(241),n=t(191),c=t(63),l=t(242),d=t(158),p=Object(d.a)({wrapper:{width:"80%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px"},text:{width:"60%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",padding:"50px 0px"},logo:{width:"30%",height:"auto",padding:"20px 20px"}});a.default=function(){var e=p();return Object(o.jsxs)(r.a,{className:e.wrapper,children:[Object(o.jsx)("img",{src:c.a,alt:"logo",className:e.logo}),Object(o.jsxs)("div",{className:e.text,children:[Object(o.jsx)(n.a,{variant:"h2",component:"h2",align:"center",children:"Wellcome to MyPoke"}),Object(o.jsx)(n.a,{variant:"h5",component:"h5",align:"center",children:"You can explore now the pokemons world and start creating your own collection of extraordinary pokemons."})]}),Object(o.jsx)(i.b,{to:"/login",children:Object(o.jsx)(l.a,{variant:"contained",size:"large",color:"primary",children:"Get Start"})})]})}}}]);
//# sourceMappingURL=9.dad6cb49.chunk.js.map