(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{177:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return j}));var a=n(24),r=n.n(a),c=n(35),o=n(29),s=n.n(o),i=n(50),u=n(26),p=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("".concat("http://localhost:5000/api/v1","/pokeboard"));case 3:n=e.sent,t({type:u.d,payload:n.data}),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),(a=e.t0.response.data.errors)&&a.forEach((function(e){return t(Object(i.a)(e.msg,"error",!0))})),t({type:u.c});case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c,o,p;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{"Content-Type":"application/json"}},c=JSON.stringify(e),t.prev=2,t.next=5,s.a.put("".concat("http://localhost:5000/api/v1","/pokeboard/pokemons"),c,a);case 5:o=t.sent,n({type:u.b,payload:o.data}),n(Object(i.a)("Pokemon successfully added!","success",!0)),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(2),(p=t.t0.response.data.errors)&&p.forEach((function(e){return n(Object(i.a)(e.msg,"error",!0))})),n({type:u.a});case 15:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.delete("".concat("http://localhost:5000/api/v1","/pokeboard/pokemons/").concat(e));case 3:a=t.sent,n({type:u.f,payload:a.data}),n(Object(i.a)("Pokemon successfully deleted!","success",!0)),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),(c=t.t0.response.data.errors)&&c.forEach((function(e){return n(Object(i.a)(e.msg,"error",!0))})),n({type:u.e});case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat("http://localhost:5000/api/v1","/pokeboard/pokemons/").concat(e));case 3:a=t.sent,n({type:u.h,payload:a.data}),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),(c=t.t0.response.data.errors)&&c.forEach((function(e){return n(Object(i.a)(e.msg,"error",!0))})),n({type:u.g});case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},204:function(e,t,n){"use strict";var a=n(2),r=(n(0),n(245)),c=n(20),o=n(23),s=n(177),i=n(359),u=n(171),p=n(360),l=n(363),d=n(362),j=n(361),b=n(167),h=n(364),f=n(213),m=n.n(f),x=n(214),O=n.n(x),v=n(159),g=Object(v.a)({root:{maxWidth:345},media:{margin:"20px",height:140,backgroundSize:"contain"},cardAction:{display:"flex",justifyContent:"center"}}),y=function(e){var t=g(),n=e.item,r=n._id,f=n.name,x=n.urlImage,v=Object(c.b)();return Object(a.jsx)(u.a,{in:!0,children:Object(a.jsxs)(i.a,{className:t.root,children:[Object(a.jsx)(o.b,{to:"/pokemon/".concat(r),children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(j.a,{className:t.media,image:x}),Object(a.jsxs)(d.a,{children:[Object(a.jsx)(b.a,{gutterBottom:!0,align:"center",variant:"h5",component:"h2",children:f}),Object(a.jsx)(b.a,{gutterBottom:!0,variant:"body1",align:"center",component:"p",children:"See details"})]})]})}),Object(a.jsx)(l.a,{className:t.cardAction,children:"/pokemons"===e.path?Object(a.jsx)(h.a,{size:"medium",color:"primary",onClick:function(t){v(Object(s.a)(e.item))},"aria-label":"add",children:Object(a.jsx)(m.a,{})}):Object(a.jsx)(h.a,{size:"medium",color:"secondary",onClick:function(t){v(Object(s.c)(e.item._id))},"aria-label":"add",children:Object(a.jsx)(O.a,{})})})]})})},k=n(60),w=Object(v.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}));t.a=function(e){var t=w(),n=e.path,c=e.list;return c.length?Object(a.jsx)(r.a,{className:t.container,container:!0,alignItems:"stretch",spacing:3,children:c.map((function(e,t){return Object(a.jsx)(r.a,{item:!0,xs:12,sm:6,md:3,children:Object(a.jsx)(y,{item:e,path:n})},t)}))}):Object(a.jsx)(k.a,{})}},371:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n(20),o=n(177),s=n(204),i=n(60),u=n(167),p=n(242),l=n(245),d=n(159),j=Object(d.a)({root:{paddingTop:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}});t.default=function(e){var t=j(),n=Object(c.c)((function(e){return e.user.loading})),d=Object(c.c)((function(e){return e.user.pokeboard})),b=Object(c.b)(),h=e.match.path;return Object(r.useEffect)((function(){b(Object(o.b)())}),[]),n?Object(a.jsx)(i.a,{}):Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(u.a,{variant:"h5",align:"center",style:{margin:"20px"},children:"Your collection"}),0===d.pokemons.length?Object(a.jsx)(u.a,{variant:"h5",align:"center",children:"is empty. Please go back and start add pokemons to your pokeboard!"}):Object(a.jsx)(p.a,{children:Object(a.jsx)(l.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:Object(a.jsx)(l.a,{item:!0,xs:12,sm:12,children:Object(a.jsx)(s.a,{list:d.pokemons,path:h})})})})]})}}}]);
//# sourceMappingURL=7.ada05cba.chunk.js.map