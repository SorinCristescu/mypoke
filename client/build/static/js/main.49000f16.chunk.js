(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{108:function(e,t,c){},13:function(e,t,c){"use strict";c.d(t,"c",(function(){return n})),c.d(t,"b",(function(){return r})),c.d(t,"f",(function(){return a})),c.d(t,"e",(function(){return i})),c.d(t,"g",(function(){return s})),c.d(t,"a",(function(){return o})),c.d(t,"d",(function(){return l}));var n="LOGIN_SUCCESS",r="LOGIN_FAIL",a="REGISTER_SUCCESS",i="REGISTER_FAIL",s="USER_LOADED",o="AUTH_ERROR",l="LOGOUT"},132:function(e,t,c){},133:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(0),a=c(15),i=c.n(a),s=c(20),o=c(28),l=c(81),j=c.n(l),d=c(82),u=c(83),b=c(6),h=c(55),f={loading:!0,pokemons:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case h.b:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,pokemons:n});case h.a:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},O=c(13),x={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case O.g:return Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:!0,loading:!1,user:n});case O.f:case O.c:return localStorage.setItem("token",n.token),Object(b.a)(Object(b.a)(Object(b.a)({},e),n),{},{isAuthenticated:!0,loading:!1});case O.e:case O.b:case O.a:case O.d:return localStorage.removeItem("token"),Object(b.a)(Object(b.a)({},e),{},{token:null,loading:!1,isAuthenticated:!1});default:return e}},m=c(27),v=c(32),y=[],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case v.b:return[].concat(Object(m.a)(e),[n]);case v.a:return e.filter((function(e){return e.id!==n}));default:return e}},M=c(26),k={loading:!0,loaded:!1,pokeboard:null,pokemon:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case M.d:case M.b:case M.f:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,pokeboard:n});case M.c:case M.a:case M.e:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});case M.h:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,loaded:!0,pokemon:n});case M.g:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},w=Object(o.combineReducers)({pokemons:p,auth:g,alert:C,user:E}),S=[j.a,u.a],z=Object(d.composeWithDevTools)({trace:!0,realtime:!0,name:"MyPoke",hostname:"localhost",port:3e3}),L=Object(o.createStore)(w,{},z(o.applyMiddleware.apply(void 0,S))),F=(c(108),c(43)),A=c(45),_=c(89),N=c(23),D=c(9),T=c(158),I=Object(T.a)({root:{width:"100%"},toolbar:{padding:"0 80px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},nav:{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},logout:{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},logo:{width:"50px",height:"auto",marginRight:"20px"},menuButton:{marginRight:"20px"},title:{flexGrow:1}}),P=c(161),R=c(163),U=c(164),H=c(63),B=c(171),G=c(88),K=c.n(G),J=function(){var e=I(),t=Object(s.c)((function(e){return e.auth.user})),c=Object(s.b)();return Object(n.jsx)(P.a,{position:"fixed",color:"secondary",className:e.root,children:Object(n.jsxs)(R.a,{className:e.toolbar,children:[Object(n.jsxs)("div",{className:e.nav,children:[Object(n.jsx)(N.b,{to:"/",children:Object(n.jsx)("img",{className:e.logo,src:H.a,alt:"Logo"})}),Object(n.jsx)(N.b,{to:"/pokemons",children:"Pokemons"}),Object(n.jsx)(N.b,{to:"/pokeboard",children:"Pokeboard"})]}),Object(n.jsxs)("div",{className:e.logout,children:[Object(n.jsx)(U.a,{color:"primary",onClick:function(){return c(Object(F.c)())},children:Object(n.jsx)(K.a,{})}),t?Object(n.jsx)(B.a,{src:t.avatar,alt:"avatar"}):null]})]})})},V=Object(T.a)({root:{width:"100vw",height:"auto"}}),W=function(e){var t=e.children,c=V();return Object(n.jsxs)("div",{className:c.root,children:[Object(n.jsx)(J,{}),t]})},X=c(60),q=c(3),Q=function(e){var t=e.component,c=Object(q.a)(e,["component"]),r=Object(s.c)((function(e){return e.auth})),a=r.isAuthenticated,i=r.loading;return Object(n.jsx)(D.b,Object(b.a)(Object(b.a)({},c),{},{render:function(e){return a||i?Object(n.jsx)(t,Object(b.a)({},e)):Object(n.jsx)(D.a,{to:"/login"})}}))},Y=c(170),Z=c(168),$=function(){var e=Object(s.c)((function(e){return e.alert})),t=function(e,t){};return Object(n.jsx)(n.Fragment,{children:null!==e&&e.length>0&&e.map((function(e){return Object(n.jsx)(Y.a,{open:e.open,autoHideDuration:4e3,vertical:"top",horizontal:"center",children:Object(n.jsx)(Z.a,{elevation:6,variant:"filled",severity:e.severity,onClose:t,children:e.message})})}))})},ee=(c(132),function(e){var t=e.error,c=e.resetErrorBoundary;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("svg",{id:"robot",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0",y:"0",width:"320px",height:"300px",viewBox:"0 0 160 300",enableBackground:"new 0 0 320 300",xmlSpace:"preserve",children:[Object(n.jsx)("rect",{x:"59.722",y:"72.779",fill:"#333",width:"40.557",height:"27.564"}),Object(n.jsxs)("g",{id:"head",class:"up",children:[Object(n.jsxs)("g",{id:"leftAntenna",children:[Object(n.jsx)("path",{fill:"none",stroke:"#ccc",strokeWidth:"1.5",strokeMiterlimit:"10",d:"M77.519,25.869 C75.85,13.604,65.745,3.39,53.972,3.39",children:Object(n.jsx)("animate",{attributeName:"d",calcMode:"spline",keySplines:"0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1",begin:"0s",dur:"0.75s",repeatCount:"indefinite",values:" M77.519,25.869C75.85,13.604,65.745,3.39,53.972,3.39 ; M77.519,25.869C75.85,13.604,65.745,3.39,53.972,12 ; M77.519,25.869C75.85,13.604,65.745,3.39,53.972,0 ; M77.519,25.869C75.85,13.604,65.745,3.39,53.972,3.39 "})}),Object(n.jsx)("ellipse",{fill:"#ccc",cx:"55.021",cy:"3.39",rx:"3.344",ry:"3.391",children:Object(n.jsx)("animate",{dur:"0.75s",attributeName:"cy",calcMode:"spline",keySplines:"0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1",begin:"0s",values:" 3.39; 12; 0; 3.39 ",repeatCount:"indefinite"})})]}),Object(n.jsxs)("g",{id:"rightAntenna",children:[Object(n.jsx)("path",{fill:"none",stroke:"#ccc",strokeWidth:"1.5",strokeMiterlimit:"10",d:"M82.48,25.869 C84.15,13.604,94.255,3.39,106.028,3.39",children:Object(n.jsx)("animate",{attributeName:"d",calcMode:"spline",keySplines:"0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1",begin:"0s",dur:"0.6s",repeatCount:"indefinite",values:" M82.48,25.869C84.15,13.604,94.255,3.39,106.028,3.39 ; M82.48,25.869C84.15,13.604,94.255,3.39,106.028,10.39 ; M82.48,25.869C84.15,13.604,94.255,3.39,106.028,-5.39 ; M82.48,25.869C84.15,13.604,94.255,3.39,106.028,3.39 "})}),Object(n.jsx)("ellipse",{fill:"#ccc",cx:"104.979",cy:"3.39",rx:"3.344",ry:"3.391",children:Object(n.jsx)("animate",{dur:"0.6s",attributeName:"cy",calcMode:"spline",keySplines:"0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1",begin:"0s",values:" 3.39; 10.39; -5.39; 3.39 ",repeatCount:"indefinite"})})]}),Object(n.jsx)("path",{fill:"#333",d:"M96.079,32.57v-8.546c-10.72-3.765-21.437-3.98-32.156,0v8.546H96.079z"}),Object(n.jsx)("path",{fill:"#f54f59",d:"M112.809,28.372H80H47.19c-5.814,18.663-5.499,37.322,0,55.983H80h32.811 C118.309,65.694,118.625,47.035,112.809,28.372z"}),Object(n.jsxs)("g",{children:[Object(n.jsxs)("g",{id:"eyeLeft",children:[Object(n.jsx)("path",{fill:"#FFFFFF",d:"M72.116,47.955c0,5.443-4.045,9.853-9.033,9.853h-1.971c-4.988,0-9.032-4.41-9.032-9.853 s4.044-9.856,9.032-9.856h1.971C68.071,38.099,72.116,42.512,72.116,47.955z",children:Object(n.jsx)("animate",{attributeName:"d",calcMode:"spline",keySplines:"0.42 0 0.58 1; 0.42 0 0.58 1",begin:"5s",dur:"0.8s",repeatCount:"indefinite",values:" M72.116,47.955c0,5.443-4.045,9.853-9.033,9.853h-1.971c-4.988,0-9.032-4.41-9.032-9.853s4.044-9.856,9.032-9.856h1.971C68.071,38.099,72.116,42.512,72.116,47.955z ; M72.116,47.955c0,5.443-0.045,9.853-9.033,9.853h-1.971c-4.988,0-9.032-4.41-9.032-9.853s4.044-4.856,9.032-4.856h1.971C68.071,45.099,72.116,42.512,72.116,47.955z ; M72.116,47.955c0,5.443-4.045,9.853-9.033,9.853h-1.971c-4.988,0-9.032-4.41-9.032-9.853s4.044-9.856,9.032-9.856h1.971C68.071,38.099,72.116,42.512,72.116,47.955z "})}),Object(n.jsx)("path",{d:"M66.614,47.955c0,2.176-1.618,3.942-3.613,3.942h-1.807c-1.994,0-3.612-1.766-3.612-3.942 c0-2.178,1.618-3.943,3.612-3.943H63C64.996,44.012,66.614,45.777,66.614,47.955z"})]}),Object(n.jsxs)("g",{children:[Object(n.jsx)("path",{fill:"#FFFFFF",d:"M107.92,47.955c0,5.443-4.045,9.853-9.031,9.853h-1.973c-4.986,0-9.031-4.41-9.031-9.853 s4.045-9.856,9.031-9.856h1.973C103.875,38.099,107.92,42.512,107.92,47.955z",children:Object(n.jsx)("animate",{attributeName:"d",calcMode:"spline",keySplines:"0.42 0 0.58 1; 0.42 0 0.58 1",begin:"5s",dur:"0.8s",repeatCount:"indefinite",values:" M107.92,47.955c0,5.443-4.045,9.853-9.031,9.853h-1.973c-4.986,0-9.031-4.41-9.031-9.853s4.045-9.856,9.031-9.856h1.973C103.875,38.099,107.92,42.512,107.92,47.955z ; M107.92,47.955c0,5.443-4.045,9.853-9.031,9.853h-1.973c-4.986,0-9.031-4.41-9.031-9.853s4.045-4.856,9.031-4.856h1.973C103.875,45.099,107.92,42.512,107.92,47.955z ; M107.92,47.955c0,5.443-4.045,9.853-9.031,9.853h-1.973c-4.986,0-9.031-4.41-9.031-9.853s4.045-9.856,9.031-9.856h1.973C103.875,38.099,107.92,42.512,107.92,47.955z "})}),Object(n.jsx)("path",{d:"M102.417,47.955c0,2.176-1.616,3.942-3.612,3.942h-1.807c-1.994,0-3.611-1.766-3.611-3.942 c0-2.178,1.617-3.943,3.611-3.943h1.807C100.801,44.012,102.417,45.777,102.417,47.955z"})]})]}),Object(n.jsx)("path",{fill:"#FFFFFF",d:"M103.383,69.778c0,1.381-0.836,2.499-1.871,2.499c-10.756,0-32.269,0-43.025,0 c-1.033,0-1.871-1.118-1.871-2.499c0-1.378,0.838-2.496,1.871-2.496c10.756,0,32.269,0,43.025,0 C102.547,67.282,103.383,68.4,103.383,69.778z",children:Object(n.jsx)("animate",{attributeName:"d",calcMode:"spline",keySplines:"0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1",begin:"0s",dur:"1s",repeatCount:"indefinite",values:" M103.383,69.778c0,1.381-0.836,2.499-1.871,2.499c-10.756,0-32.269,0-43.025,0 c-1.033,0-1.871-1.118-1.871-2.499c0-1.378,0.838-2.496,1.871-2.496c10.756,0,32.269,0,43.025,0 C102.547,67.282,103.383,68.4,103.383,69.778z ; M103.383,69.778c0,1.381-0.862,2.268-1.871,2.499c-11.669,2.677-29.396,3.207-43.025,0 c-1.005-0.236-1.871-1.118-1.871-2.499c0-1.378,0.868-2.249,1.871-2.496c11.349-2.795,31.753-2.53,43.025,0 C102.521,67.508,103.383,68.4,103.383,69.778z ; M103.383,69.778c0,1.381-0.86,2.724-1.871,2.499c-11.271-2.506-29.956-2.201-43.025,0 c-1.019,0.171-1.871-1.118-1.871-2.499c0-1.378,0.89-2.819,1.871-2.496c15.191,4.995,30.429,3.433,43.025,0 C102.511,67.01,103.383,68.4,103.383,69.778z ; M103.383,69.778c0,1.381-0.836,2.499-1.871,2.499c-10.756,0-32.269,0-43.025,0 c-1.033,0-1.871-1.118-1.871-2.499c0-1.378,0.838-2.496,1.871-2.496c10.756,0,32.269,0,43.025,0 C102.547,67.282,103.383,68.4,103.383,69.778z "})})]}),Object(n.jsxs)("g",{id:"upperTorso",children:[Object(n.jsxs)("g",{id:"leftArm",children:[Object(n.jsxs)("g",{className:"forearm",children:[Object(n.jsx)("path",{fill:"#333",d:"M9.068,131.177c-4.78,12.558-5.183,25.372-2.497,40.71c0,0,0.68,4.312,6.107,3.39 c4.571-0.776,4.348-5.001,4.348-5.001c-2.351-13.388-2.234-24.244,1.89-35.134c0,0,1.75-4.725-2.833-6.6 C11.02,126.471,9.068,131.177,9.068,131.177z"}),Object(n.jsx)("path",{fill:"#f54f59",d:"M9.604,166.5c-6.984,1.975-11.067,9.316-9.117,16.398c1.008,3.662,3.439,6.522,6.51,8.172 c-0.167-0.363-0.315-0.742-0.426-1.141c-1.235-4.484,1.703-9.234,6.562-10.609c4.861-1.377,9.804,1.145,11.037,5.631 c0.111,0.396,0.18,0.798,0.221,1.197c1.785-3.021,2.399-6.748,1.393-10.407C23.833,168.661,16.589,164.523,9.604,166.5z"})]}),Object(n.jsx)("path",{fill:"#333",d:"M18.917,135.142c1.731-4.573,4.169-9.151,7.428-13.925c4.23-6.199,7.573-9.281,13.553-13.761 c0,0,3.335-2.905,0.961-6.63c-2.797-4.389-7.415-1.908-7.415-1.908c-4.981,3.145-10.421,8.413-15.576,15.872 c-3.827,5.537-6.726,10.938-8.8,16.387c0,0-1.877,4.187,2.599,6.24C16.75,139.75,18.917,135.142,18.917,135.142z"}),Object(n.jsxs)("g",{children:[Object(n.jsx)("ellipse",{stroke:"#f54f59",cx:"13.581",cy:"132.93",rx:"8.505",ry:"8.623"}),Object(n.jsx)("g",{children:Object(n.jsx)("path",{fill:"#f54f59",d:"M9.299,135.199c1.237,2.396,4.154,3.322,6.52,2.07c2.364-1.252,3.278-4.211,2.042-6.605 c-1.236-2.398-4.152-3.324-6.52-2.072C8.978,129.844,8.065,132.803,9.299,135.199z"})})]})]}),Object(n.jsxs)("g",{id:"rightArm",children:[Object(n.jsxs)("g",{className:"forearm",children:[Object(n.jsx)("path",{fill:"#333",d:"M143.916,128.542c-4.583,1.875-2.833,6.6-2.833,6.6c4.124,10.89,4.241,21.746,1.89,35.134 c0,0-0.223,4.225,4.348,5.001c5.428,0.922,6.107-3.39,6.107-3.39c2.688-15.338,2.283-28.152-2.496-40.71 C150.932,131.177,148.98,126.471,143.916,128.542z"}),Object(n.jsx)("path",{fill:"#f54f59",d:"M134.216,175.741c-1.006,3.659-0.392,7.386,1.394,10.407c0.041-0.399,0.109-0.801,0.221-1.197 c1.232-4.486,6.176-7.008,11.037-5.631c4.859,1.375,7.797,6.125,6.562,10.609c-0.111,0.398-0.26,0.777-0.427,1.141 c3.071-1.649,5.502-4.51,6.511-8.172c1.949-7.082-2.134-14.424-9.117-16.398C143.411,164.523,136.167,168.661,134.216,175.741z"})]}),Object(n.jsx)("path",{fill:"#333",d:"M148.333,137.417c4.476-2.054,2.599-6.24,2.599-6.24c-2.074-5.449-4.973-10.85-8.8-16.387 c-5.155-7.459-10.595-12.727-15.576-15.872c0,0-4.618-2.48-7.415,1.908c-2.374,3.725,0.961,6.63,0.961,6.63 c5.98,4.479,9.323,7.562,13.553,13.761c3.26,4.773,5.697,9.352,7.429,13.925C141.083,135.142,143.25,139.75,148.333,137.417z"}),Object(n.jsxs)("g",{children:[Object(n.jsx)("ellipse",{stroke:"#f54f59",cx:"146.419",cy:"132.93",rx:"8.505",ry:"8.623"}),Object(n.jsx)("g",{children:Object(n.jsx)("path",{fill:"#f54f59",d:"M148.659,128.592c-2.368-1.252-5.284-0.326-6.521,2.072c-1.236,2.395-0.322,5.354,2.043,6.605 s5.282,0.326,6.52-2.07C151.936,132.803,151.021,129.844,148.659,128.592z"})})]})]}),Object(n.jsx)("path",{d:"M42.356,94.049l-8.341-1.248c-5.238,10.201-7.014,20.918-4.697,32.248l8.34,1.248L42.356,94.049z"}),Object(n.jsx)("path",{d:"M122.342,126.297l8.34-1.248c2.317-11.33,0.541-22.047-4.697-32.248l-8.34,1.248L122.342,126.297z"}),Object(n.jsx)("path",{fill:"#f54f59",d:"M125.283,131.334c0.048-13.081-1.633-26.163-5.186-39.244H80H39.903 c-3.552,13.081-5.232,26.162-5.184,39.242L125.283,131.334z"})]}),Object(n.jsxs)("g",{id:"lowerTrunk",children:[Object(n.jsxs)("g",{id:"leftFoot",children:[Object(n.jsx)("path",{fill:"#333",d:"M61.27,164.817c0-3.526-2.858-6.386-6.385-6.386c-3.527,0-6.386,2.859-6.386,6.386v0.001l0,0l0,36.132 c0,3.526,2.859,6.386,6.386,6.386c3.526,0,6.385-2.859,6.385-6.386L61.27,164.817L61.27,164.817L61.27,164.817z"}),Object(n.jsxs)("g",{class:"lowerLeg",children:[Object(n.jsx)("path",{fill:"#333",d:"M61.27,200.63c0-3.526-2.858-6.386-6.385-6.386c-3.527,0-6.386,2.859-6.386,6.386v0.001l0,0l0,36.132 c0,3.526,2.859,6.386,6.386,6.386c3.526,0,6.385-2.859,6.385-6.386L61.27,200.63L61.27,200.63L61.27,200.63z"}),Object(n.jsx)("path",{fill:"#f54f59",d:"M54.885,234.096c-9.526,0-17.244,7.119-17.244,15.903H72.13C72.13,241.215,64.41,234.096,54.885,234.096z"})]}),Object(n.jsxs)("g",{children:[Object(n.jsx)("ellipse",{stroke:"#f54f59",cx:"54.885",cy:"200.79",rx:"9.294",ry:"9.423"}),Object(n.jsx)("g",{children:Object(n.jsx)("path",{fill:"#f54f59",d:"M60.607,203.823c-1.653,3.202-5.553,4.44-8.715,2.768c-3.163-1.677-4.383-5.628-2.73-8.832 c1.651-3.204,5.556-4.442,8.715-2.771C61.036,196.664,62.258,200.62,60.607,203.823z"})})]})]}),Object(n.jsxs)("g",{id:"rightFoot",children:[Object(n.jsx)("path",{fill:"#333",d:"M98.73,164.817c0-3.526,2.858-6.386,6.385-6.386c3.527,0,6.386,2.859,6.386,6.386v0.001l0,0l0.001,36.132 c0,3.526-2.859,6.386-6.387,6.386c-3.525,0-6.385-2.859-6.385-6.386V164.817L98.73,164.817L98.73,164.817z"}),Object(n.jsxs)("g",{class:"lowerLeg",children:[Object(n.jsx)("path",{fill:"#333",d:"M98.73,200.63c0-3.526,2.858-6.386,6.385-6.386c3.527,0,6.386,2.859,6.386,6.386v0.001l0,0l0.001,36.132 c0,3.526-2.859,6.386-6.387,6.386c-3.525,0-6.385-2.859-6.385-6.386V200.63L98.73,200.63L98.73,200.63z"}),Object(n.jsx)("path",{fill:"#f54f59",d:"M87.87,249.999h34.489c0-8.784-7.719-15.903-17.244-15.903S87.87,241.215,87.87,249.999z"})]}),Object(n.jsxs)("g",{children:[Object(n.jsx)("ellipse",{stroke:"#f54f59",cx:"105.115",cy:"200.79",rx:"9.294",ry:"9.423"}),Object(n.jsx)("g",{children:Object(n.jsx)("path",{fill:"#f54f59",d:"M102.123,194.988c3.159-1.672,7.064-0.434,8.715,2.771c1.653,3.204,0.434,7.155-2.73,8.832 c-3.162,1.673-7.062,0.435-8.715-2.768C97.742,200.62,98.964,196.664,102.123,194.988z"})})]})]}),Object(n.jsx)("path",{fill:"#f7727a",d:"M34.719,131.334c0.048,13.082,1.824,26.164,5.184,39.246H80h40.098c3.361-13.08,5.138-26.162,5.186-39.244L34.719,131.334z"})]})]}),Object(n.jsxs)("div",{class:"col",children:[Object(n.jsx)("h4",{children:"404"}),Object(n.jsxs)("div",{role:"alert",children:[Object(n.jsx)("p",{children:"Something went wrong:"}),Object(n.jsx)("pre",{children:t.message}),Object(n.jsx)(N.b,{to:"/login",children:Object(n.jsx)("button",{onClick:c,children:"Try again"})})]})]})]})}),te=c(167),ce=c(166),ne=c(90),re=Object(ne.a)({palette:{primary:{main:"#47AFE7",disabled:"#fff06c"},secondary:{main:"#ffffff",disabled:"#007bff"},error:{main:"#DB3838"},warning:{main:"#FFC92F"},info:{main:"#5385EE"},success:{main:"#6EBE19"},text:{primary:"#000000",secondary:"#D2D0D0",disabled:"#D2D0D0"}},typography:{fontFamily:["Roboto","Arial"].join(",")}}),ae=Object(T.a)({wrapper:{width:"100%",height:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"}}),ie=Object(r.lazy)((function(){return c.e(9).then(c.bind(null,368))})),se=Object(r.lazy)((function(){return Promise.all([c.e(0),c.e(1),c.e(11)]).then(c.bind(null,369))})),oe=Object(r.lazy)((function(){return Promise.all([c.e(0),c.e(1),c.e(12)]).then(c.bind(null,365))})),le=Object(r.lazy)((function(){return Promise.all([c.e(2),c.e(7)]).then(c.bind(null,370))})),je=Object(r.lazy)((function(){return Promise.all([c.e(5),c.e(10)]).then(c.bind(null,367))})),de=Object(r.lazy)((function(){return Promise.all([c.e(0),c.e(2),c.e(8)]).then(c.bind(null,366))}));localStorage.token&&Object(A.a)(localStorage.token);var ue=function(){var e=ae(),t=Object(s.b)();return Object(r.useEffect)((function(){t(Object(F.a)())}),[t]),Object(n.jsx)(N.a,{children:Object(n.jsxs)(ce.a,{theme:re,children:[Object(n.jsx)(te.a,{}),Object(n.jsx)(_.ErrorBoundary,{FallbackComponent:ee,onReset:function(){},children:Object(n.jsx)(r.Suspense,{fallback:Object(n.jsx)(X.a,{}),children:Object(n.jsxs)("div",{className:e.wrapper,children:[Object(n.jsx)($,{}),Object(n.jsxs)(D.d,{children:[Object(n.jsx)(D.b,{path:"/",exact:!0,component:ie}),Object(n.jsx)(D.b,{path:"/login",exact:!0,component:se}),Object(n.jsx)(D.b,{path:"/register",exact:!0,component:oe}),Object(n.jsxs)(W,{children:[Object(n.jsx)(Q,{path:"/pokemons",exact:!0,component:de}),Object(n.jsx)(Q,{path:"/pokeboard",exact:!0,component:le}),Object(n.jsx)(Q,{path:"/pokemon/:id",exact:!0,component:je})]})]})]})})})]})})};i.a.render(Object(n.jsx)(s.a,{store:L,children:Object(n.jsx)(ue,{})}),document.getElementById("root"))},26:function(e,t,c){"use strict";c.d(t,"d",(function(){return n})),c.d(t,"c",(function(){return r})),c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return i})),c.d(t,"f",(function(){return s})),c.d(t,"e",(function(){return o})),c.d(t,"h",(function(){return l})),c.d(t,"g",(function(){return j}));var n="CREATE_AND_UPDATE_POKEBOARD_SUCCESS",r="CREATE_AND_UPDATE_POKEBOARD_FAIL",a="ADD_POKEMON_SUCCESS",i="ADD_POKEMON_FAIL",s="DELETE_POKEMON_SUCCESS",o="DELETE_POKEMON_FAIL",l="GET_POKEMON_SUCCESS",j="GET_POKEMON_FAIL"},32:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"a",(function(){return r}));var n="SET_ALERT",r="REMOVE_ALERT"},43:function(e,t,c){"use strict";c.d(t,"a",(function(){return d})),c.d(t,"d",(function(){return u})),c.d(t,"b",(function(){return b})),c.d(t,"c",(function(){return h}));var n=c(24),r=c.n(n),a=c(35),i=c(29),s=c.n(i),o=c(50),l=c(45),j=c(13),d=function(){return function(){var e=Object(a.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&Object(l.a)(localStorage.token),e.prev=1,e.next=4,s.a.get("".concat("http://localhost:5000/api/v1","/auth"));case 4:c=e.sent,t({type:j.g,payload:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:j.a});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},u=function(e){var t=e.name,c=e.email,n=e.password,i=e.language;return function(){var e=Object(a.a)(r.a.mark((function e(a){var l,u,b,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={headers:{"Content-Type":"application/json"}},u=JSON.stringify({name:t,email:c,password:n,language:i}),e.prev=2,e.next=5,s.a.post("".concat("http://localhost:5000/api/v1","/auth/register"),u,l);case 5:b=e.sent,a({type:j.f,payload:b.data}),a(d()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(h=e.t0.response.data.errors)&&h.forEach((function(e){return a(Object(o.a)(e.msg,"error",!0))})),a({type:j.e});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},b=function(e){var t=e.email,c=e.password;return function(){var e=Object(a.a)(r.a.mark((function e(n){var a,i,l,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},i=JSON.stringify({email:t,password:c}),e.prev=2,e.next=5,s.a.post("".concat("http://localhost:5000/api/v1","/auth/login"),i,a);case 5:l=e.sent,n({type:j.c,payload:l.data}),n(d()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(u=e.t0.response.data.errors)&&u.forEach((function(e){return n(Object(o.a)(e.msg,"error",!0))})),n({type:j.b});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:j.d});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},45:function(e,t,c){"use strict";var n=c(29),r=c.n(n);t.a=function(e){e?r.a.defaults.headers.common["x-auth-token"]=e:delete r.a.defaults.headers.common["x-auth-token"]}},50:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(85),r=c.n(n),a=c(32),i=function(e,t,c){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;return function(i){var s=r.a.v4();i({type:a.b,payload:{message:e,severity:t,open:c,id:s}}),setTimeout((function(){return i({type:a.a,payload:s})}),n)}}},55:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"a",(function(){return r}));var n="GET_ALL_POKEMONS_SUCCESS",r="GET_ALL_POKEMONS_FAIL"},60:function(e,t,c){"use strict";var n=c(2),r=(c(0),c(158)),a=Object(r.a)({root:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"20%"}}),i=c(165);t.a=function(){var e=a();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(i.a,{color:"primary"})})}},63:function(e,t,c){"use strict";t.a=c.p+"static/media/pikachu.47872dbb.svg"}},[[133,4,6]]]);
//# sourceMappingURL=main.49000f16.chunk.js.map