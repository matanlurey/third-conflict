(this["webpackJsonpthird-conflict"]=this["webpackJsonpthird-conflict"]||[]).push([[0],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),r=n.n(a).a.createContext(null)},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(108),r=n(107),s=n(66),i=n(30),c=n(63),u=n(38),o=n(44),l=n(57),h=function(){function e(t){Object(u.a)(this,e),this.data=t}return Object(o.a)(e,[{key:"distance",value:function(e){var t=[this.x,this.y],n=t[0],a=t[1],r=e instanceof Array?e:[e.x,e.y],s=Object(i.a)(r,2),c=s[0],u=s[1];return parseFloat(Math.sqrt(Math.pow(c-n,2)+Math.pow(u-a,2)).toFixed(2))}},{key:"x",get:function(){return this.data[0]}},{key:"y",get:function(){return this.data[1]}}]),e}(),j=n(89),d=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e,a,r){var s;return Object(u.a)(this,n),(s=t.call(this,a,r)).sampler=void 0,s.sampler=Array.isArray(e)?new j.a(e,4,void 0,a):e,s}return Object(o.a)(n,[{key:"generateMap",value:function(e,t){var n=this,a=this.fetchNames(e);a.sort((function(){return n.prando.nextInt(-1,1)}));for(var r=this.sampler.points(e),s=[],i=0;i<r.length;i++)s.push({name:a[i],position:[Math.max(Math.ceil(r[i][0]-1),0),Math.max(Math.ceil(r[i][1]-1),0)],home:!1});for(;t--;)this.pickFairestHomeSystem(s).home=!0;return this.reducePositionsToOrigin(s)}}]),n}(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new l.a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["Alfa","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","Xray","Yankee","Zulu"];Object(u.a)(this,e),this.prando=t,this.names=n}return Object(o.a)(e,[{key:"fetchNames",value:function(e){return this.names.slice(0,e)}},{key:"computeDistanceWeight",value:function(e,t,n){var a=e-t;return n&&(a=Math.pow(2,a)),a}},{key:"pickFairestHomeSystem",value:function(e){var t,n,a=Number.MAX_SAFE_INTEGER,r=0,s=Object(c.a)(e);try{for(s.s();!(n=s.n()).done;){var i,u=n.value,o=Object(c.a)(e);try{for(o.s();!(i=o.n()).done;){var l=i.value,j=new h(u.position).distance(l.position);j>r&&(r=j)}}catch(k){o.e(k)}finally{o.f()}}}catch(k){s.e(k)}finally{s.f()}var d,p=Object(c.a)(e);try{for(p.s();!(d=p.n()).done;){var f=d.value;if(!f.home){var b,m=[],O=Object(c.a)(e);try{for(O.s();!(b=O.n()).done;){var x=b.value,v=new h(f.position).distance(x.position),y=this.computeDistanceWeight(r,v,!!x.home);m.push(y)}}catch(k){O.e(k)}finally{O.f()}var g=m.reduce((function(e,t){return e+t}),0);g<a&&(a=g,t=f)}}}catch(k){p.e(k)}finally{p.f()}if(!t){var w=e.filter((function(e){return!e.home}));if(0===w.length)throw new Error("Failed to find an open system.");t=this.prando.nextArrayItem(w)}return t}},{key:"reducePositionsToOrigin",value:function(e){var t,n=Number.MAX_SAFE_INTEGER,a=Number.MAX_SAFE_INTEGER,r=Object(c.a)(e);try{for(r.s();!(t=r.n()).done;){var u=t.value,o=Object(i.a)(u.position,2),l=o[0],h=o[1];l<n&&(n=l),h<a&&(a=h)}}catch(j){r.e(j)}finally{r.f()}return e.map((function(e){var t=Object(i.a)(e.position,2),r=t[0],c=t[1];return r-=n,c-=a,Object(s.a)(Object(s.a)({},e),{},{position:[r,c]})}))}}]),e}())},169:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return y}));var a=n(4),r=n(30),s=n(352),i=n(206),c=n(353),u=n(150),o=n(59),l=n(47),h=n(0),j=n(351),d=n(197),p=n(46),f=n(31),b=(n(215),n(114)),m=n(170),O=n(179),x=n(200),v=n(196);var y=Object(d.hot)(e)((function(){var e=Object(j.a)(["auth"]),t=Object(r.a)(e,2),n=t[0],d=t[1],y=Object(h.useState)(n.auth),g=Object(r.a)(y,2),w=g[0],k=g[1];return Object(a.jsx)(p.a,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(u.a.Header,{children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)(p.b,{to:"/",children:Object(a.jsx)("img",{src:"/images/logo.png"})})}),Object(a.jsxs)(o.a,{theme:"dark",mode:"horizontal",selectable:!1,children:[Object(a.jsx)(o.a.Item,{disabled:!w,icon:Object(a.jsx)(s.a,{}),children:Object(a.jsx)(p.b,{to:"/games",children:"Games"})}),Object(a.jsx)(o.a.Item,{icon:Object(a.jsx)(i.a,{}),children:Object(a.jsx)(p.b,{to:"/account",children:"Account"})}),Object(a.jsx)(o.a.Item,{icon:Object(a.jsx)(c.a,{}),children:Object(a.jsx)(p.b,{to:"/settings",children:"Settings"})})]})]}),Object(a.jsx)(b.a.Provider,{value:w,children:Object(a.jsx)(u.a.Content,{children:Object(a.jsxs)(f.c,{children:[Object(a.jsx)(f.a,{path:"/games",component:x.a}),Object(a.jsx)(f.a,{path:"/account",children:Object(a.jsx)(m.a,{onChange:function(e){d("auth",e),k(e)}})}),Object(a.jsx)(f.a,{path:"/settings",component:v.a}),Object(a.jsx)(f.a,{path:"/",children:w?Object(a.jsx)(O.a,{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(l.a,{type:"dashed",children:Object(a.jsxs)(p.b,{to:"/account",children:[Object(a.jsx)(i.a,{})," Login Required"]})})})})]})})})]})})}))}).call(this,n(214)(e))},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(4),r=n(132),s=n(47),i=n(0),c=n(114);n(216);function u(e){var t=Object(i.useContext)(c.a);return Object(a.jsxs)(r.a,{className:"account-form",labelCol:{span:8},wrapperCol:{span:16},children:[Object(a.jsx)("h1",{children:"Account"}),Object(a.jsxs)("p",{children:["A login is required to play ",Object(a.jsx)("strong",{children:"Third Conflict"}),". Currently you can login as a ",Object(a.jsx)("strong",{children:"Guest"})," and create and play games locally. In ",Object(a.jsx)("em",{children:"future"})," releases you will be able to login with"," ",Object(a.jsx)("strong",{children:"Discord"})," and play online."]}),!t&&Object(a.jsxs)(r.a.Item,{children:[Object(a.jsx)(s.a,{type:"primary",onClick:function(){return e.onChange("Guest")},children:"Login as Guest"}),Object(a.jsx)(s.a,{type:"ghost",disabled:!0,children:"Login with Discord"})]}),t&&Object(a.jsx)(s.a,{type:"primary",danger:!0,onClick:function(){return e.onChange(null)},children:"Logout"})]})}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(4),r=n(10),s=n.n(r),i=n(20),c=n(30),u=n(0),o=n(46),l=n(62);n(306);function h(){var e=Object(u.useContext)(l.a),t=Object(u.useState)(),n=Object(c.a)(t,2),r=n[0],h=n[1];return Object(u.useEffect)((function(){Object(i.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.gamesList();case 2:n=t.sent,h(n.length);case 4:case"end":return t.stop()}}),t)})))()}),[e]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h1",{children:["Welcome back to ",Object(a.jsx)("strong",{children:"Third Conflict"})]}),Object(a.jsxs)("p",{children:["You have ",Object(a.jsxs)(o.b,{to:"/games",children:[r," pending game(s)"]}),"."]})]})}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(4),r=n(132),s=n(47);n(0),n(348);function i(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Settings"}),Object(a.jsx)("p",{children:"This game is in active development. As such, the data model is constantly evolving, and it's possible to get into a state where you have invalid data and the app/game is no longer functioning properly."}),Object(a.jsx)(r.a,{className:"account-form",labelCol:{span:8},wrapperCol:{span:16},children:Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(s.a,{type:"primary",danger:!0,onClick:function(){localStorage.clear(),location.replace("/")},children:"Reset all data"})})})]})}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return W}));var a=n(4),r=n(10),s=n.n(r),i=n(20),c=n(30),u=n(47),o=n(0),l=n(31),h=n(62),j=(n(310),n(360)),d=n(132),p=n(357),f=n(358),b=n(129),m=n(38),O=n(44),x=n(57),v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new x.a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["angry","attractive","bald","big","brave","clumsy","fierce","happy","itchy","handsome","petite","repulsive","silly","stocky","tall","tiny","wonderful","zealous"],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["antelope","cat","dog","eagle","gorilla","lion","rabbit","snake","tiger","vulture","zebra"];Object(m.a)(this,e),this.rng=t,this.adjectives=n,this.nouns=a}return Object(O.a)(e,[{key:"next",value:function(){return"".concat(this.rng.nextArrayItem(this.adjectives),"-").concat(this.rng.nextArrayItem(this.nouns),"-").concat(this.rng.nextInt(0,99).toString().padStart(2,"0"))}}]),e}();function y(){var e=d.a.useForm(),t=Object(c.a)(e,1)[0],n=Object(l.f)().replace,r=Object(o.useContext)(h.a),m=Object(o.useState)(!1),O=Object(c.a)(m,2),x=O[0],y=O[1];return Object(o.useEffect)((function(){t.setFieldsValue({name:(new v).next(),players:2})}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Create a Game"}),Object(a.jsxs)("p",{children:["Currently, you can create ",Object(a.jsx)("strong",{children:"local"})," (offline) games with AI opponents. In future builds, once logged in with"," ",Object(a.jsx)("strong",{children:"Discord"}),", you will be able to create and play online games."]}),Object(a.jsxs)(d.a,{labelCol:{span:1},wrapperCol:{span:4},form:t,onFinish:function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,r.gamesCreate(t.name,t.players);case 3:a=e.sent,n("/games/".concat(a.name));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(a.jsx)(d.a.Item,{name:"name",label:"Name",extra:Object(a.jsx)(a.Fragment,{children:"This name is just used for reference only."}),children:Object(a.jsx)(p.a,{maxLength:30})}),Object(a.jsx)(d.a.Item,{name:"players",label:"Players",extra:Object(a.jsx)(a.Fragment,{children:"2-4 players currently supported."}),children:Object(a.jsx)(f.a,{min:2,max:4})}),Object(a.jsx)(d.a.Item,{name:"online",label:"Connectivity",extra:Object(a.jsx)(a.Fragment,{children:"Local games are versus AI and played offline."}),children:Object(a.jsxs)(b.a.Group,{children:[Object(a.jsx)(b.a.Button,{value:!1,children:"Local"}),Object(a.jsx)(b.a.Button,{value:!0,disabled:!0,children:"Online"})]})}),Object(a.jsx)(d.a.Item,{wrapperCol:{span:5},children:Object(a.jsx)(u.a,{disabled:x,icon:x?Object(a.jsx)(j.a,{}):void 0,type:"primary",style:{width:"100%"},htmlType:"submit",children:x?Object(a.jsx)(a.Fragment,{children:"Saving"}):Object(a.jsx)(a.Fragment,{children:"Create Game"})})})]})]})}var g=n(361),w=n(356),k=n(46);function S(){var e=Object(o.useContext)(h.a),t=Object(l.f)().push,n=Object(o.useState)([]),r=Object(c.a)(n,2),j=r[0],d=r[1];function p(){return(p=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=d,t.next=3,e.gamesList();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(o.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[e]);var f=j.sort((function(e,t){return e.lastUpdated-t.lastUpdated})).map((function(e){return{name:Object(a.jsx)(k.b,{to:"/games/".concat(e.name),children:e.name}),key:e.name,players:e.players,status:"Lobby"===e.kind?"Not Started":"In Progress"}}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Games"}),Object(a.jsxs)("p",{className:"games-buttons",children:[Object(a.jsx)(u.a,{icon:Object(a.jsx)(g.a,{}),type:"dashed",onClick:function(){t("/games/create")},children:"Create Game"}),Object(a.jsx)(u.a,{icon:Object(a.jsx)(g.a,{}),type:"dashed",disabled:!0,onClick:function(){t("/games/join")},children:"Join Game"})]}),Object(a.jsx)(w.a,{columns:[{title:"Name",dataIndex:"name"},{title:"Players",dataIndex:"players"},{title:"Status",dataIndex:"status"}],dataSource:f,locale:{emptyText:"You are not in any games."},pagination:!1})]})}var M=n(206),I=n(362),C=n(359),F=n(130),A=n(89),G=n(63),E=n(64);n(346);function N(e){var t=function(e){var t=0,n=0;return e.forEach((function(e){var a=Object(c.a)(e.position,2),r=a[0],s=a[1];r>t&&(t=r),s>n&&(n=s)})),{width:t,height:n}}(e.systems),n=t.width,r=t.height;n+=1,r+=1;var s,i=Object(E.b)(r,n),u=Object(E.b)(r,n),o=Object(G.a)(e.systems);try{for(o.s();!(s=o.n()).done;){var l=s.value,h=Object(c.a)(l.position,2),j=h[0],d=h[1];u[d][j]="".concat((l.status||"").toLowerCase()),i[d][j]=Object(a.jsx)(a.Fragment,{children:l.name.substring(0,1).toUpperCase()})}}catch(p){o.e(p)}finally{o.f()}return Object(a.jsx)("table",{className:"map-preview",children:Object(a.jsx)("tbody",{children:Object(E.c)(r).map((function(e){return Object(a.jsx)("tr",{children:Object(E.c)(n).map((function(t){return Object(a.jsx)("td",{className:u[e][t],children:i[e][t]},t)}))},e)}))})})}function T(e){var t=Object(o.useContext)(h.a),n=Object(l.f)().replace,r=new Array(e.data.players-1).fill(""),j=Object(o.useState)(e.data.seed),b=Object(c.a)(j,2),m=b[0],O=b[1],v=Object(o.useState)(!1),y=Object(c.a)(v,2),g=y[0],w=y[1],k=Object(o.useState)(Math.ceil(3*e.data.players)),S=Object(c.a)(k,2),G=S[0],E=S[1],T=Object(o.useState)([]),L=Object(c.a)(T,2),P=L[0],R=L[1];return Object(o.useEffect)((function(){var t=new x.a(m),n=G/26,a=new A.a([Math.ceil(50*n),Math.ceil(30*n)],4,void 0,t),r=new F.a(a,t);R(r.generateMap(G,e.data.players))}),[m,G]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"Players"}),Object(a.jsxs)(C.b,{children:[Object(a.jsx)(C.b.Item,{children:Object(a.jsx)(C.b.Item.Meta,{avatar:Object(a.jsx)(M.a,{}),title:"Human",description:"Ready"})}),r.map((function(e,t){return Object(a.jsx)(C.b.Item,{children:Object(a.jsx)(C.b.Item.Meta,{avatar:Object(a.jsx)(I.a,{}),title:"AI: ".concat(t+1),description:"Ready"})},t)}))]}),Object(a.jsx)("h3",{children:"Settings"}),Object(a.jsxs)(d.a,{labelCol:{span:1},wrapperCol:{span:4},onFinish:function(){w(!0),e.onStart(m,G)},children:[Object(a.jsx)(d.a.Item,{label:"Name",extra:Object(a.jsx)(a.Fragment,{children:"Used for identifying the game only."}),children:Object(a.jsx)(p.a,{readOnly:!0,minLength:10,maxLength:20,value:e.data.name})}),Object(a.jsx)(d.a.Item,{label:"Seed",extra:Object(a.jsx)(a.Fragment,{children:"Used for procedural generation of systems."}),children:Object(a.jsx)(p.a,{readOnly:!0,minLength:10,maxLength:20,value:m,onChange:function(e){return O(e.target.value)}})}),Object(a.jsx)(d.a.Item,{label:"Preview",children:Object(a.jsx)(N,{systems:P})}),Object(a.jsx)(d.a.Item,{label:"Maximum Systems",extra:Object(a.jsx)(a.Fragment,{children:"A recommended number is 3 systems per player."}),children:Object(a.jsx)(f.a,{min:e.data.players,max:26,value:G,onChange:function(e){return E(parseInt("".concat(e)))}})}),Object(a.jsxs)("p",{className:"games-buttons",children:[Object(a.jsx)(u.a,{type:"primary",htmlType:"submit",disabled:g,children:"Start"}),Object(a.jsx)(u.a,{danger:!0,disabled:g,onClick:Object(i.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return w(!0),a.next=3,t.gamesDelete(e.data.name);case 3:n("/games");case 4:case"end":return a.stop()}}),a)}))),children:"Delete"})]})]})]})}n(347);function L(e){var t=Object(o.useState)(!1),n=Object(c.a)(t,2),r=n[0],l=n[1];return Object(a.jsxs)("header",{className:"game-header",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:e.name}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:e.players})," players, ",Object(a.jsx)("span",{children:e.systems})," ","systems."]}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.a,{type:"primary",disabled:e.endedTurn||r,onClick:Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,e.onEndTurn();case 3:l(!1);case 4:case"end":return t.stop()}}),t)}))),children:"End Turn"})}),Object(a.jsx)("li",{children:Object(a.jsx)(u.a,{danger:!0,disabled:!0,onClick:Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,e.onResign();case 3:l(!1);case 4:case"end":return t.stop()}}),t)}))),title:"Resign: Not yet supported.",children:"Resign"})})]})]})}function P(e){var t=e.state;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{name:t.name,players:t.players,systems:t.systems.length,endedTurn:t.endedTurn,onEndTurn:Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),onResign:Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}),Object(a.jsx)(N,{systems:t.systems})]})}function R(){var e=Object(l.g)(),t=Object(o.useContext)(h.a),n=Object(o.useState)(),r=Object(c.a)(n,2),j=r[0],d=r[1];Object(o.useEffect)((function(){Object(i.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=d,n.next=3,t.gamesFetch(e.name);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))()}),[t]);var p=Object(l.f)().goBack;return j?"Lobby"===j.kind?Object(a.jsx)(T,{data:j,onStart:function(){var n=Object(i.a)(s.a.mark((function n(a,r){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=d,n.next=3,t.gamesStart(e.name,a,r);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}):Object(a.jsx)(P,{state:j}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h1",{children:["Game ",Object(a.jsx)("code",{children:e.name})," not found."]}),Object(a.jsx)("p",{children:"Either this game has been deleted, or the link is expired."}),Object(a.jsx)(u.a,{onClick:p,children:"Go Back"})]})}function W(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/games/create",component:y}),Object(a.jsx)(l.a,{path:"/games/:name",component:R}),Object(a.jsx)(l.a,{exact:!0,path:"/games",component:S})]})})}},207:function(e,t,n){"use strict";n.r(t);var a=n(4),r=(n(0),n(39)),s=n.n(r),i=n(169);n(350);s.a.render(Object(a.jsx)(i.a,{}),document.getElementById("root"))},215:function(e,t,n){},216:function(e,t,n){},306:function(e,t,n){},310:function(e,t,n){},346:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){},350:function(e,t,n){},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var a=n(10),r=n.n(a),s=n(20),i=n(38),c=n(44),u=n(149),o=n(74),l=n(108),h=n(107),j=n(0),d=n.n(j),p=function e(){Object(i.a)(this,e)},f=n(201),b=n(66),m=n(57),O=n(63),x=n(130),v=n(89),y=n(64);function g(e,t){var n,a=Object(O.a)(e.players);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(r.userId===t)return r.fogOfWar}}catch(s){a.e(s)}finally{a.f()}}var w=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,[{key:"createInitialFogOfWar",value:function(e,t,n){var a=this;return{kind:"Game",name:e.name,players:e.players.length,endedTurn:t,serverAgent:t,systems:e.systems.map((function(e){return{name:e.name,position:e.position,status:a.determineStatus(e,n)}}))}}},{key:"determineStatus",value:function(e,t){if("Empire"!==e.owner)return e.owner.player===t?"Self":void 0}}]),e}(),k=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,[{key:"spawnEmpireFleet",value:function(e){return{transports:0,troops:0,warships:0}}},{key:"spawnPlayerFleet",value:function(e){return{transports:0,troops:0,warships:0}}},{key:"spawnInitialSystems",value:function(e,t,n){var a=this,r=t/26,s=new v.a([Math.ceil(50*r),Math.ceil(30*r)],4,void 0,e),i=new x.a(s,e);return n=Object(y.a)(n).sort((function(){return e.nextInt(-1,1)})),i.generateMap(t,n.length).map((function(t){var r,s;return t.home?(r={player:n.splice(0,1)[0].userId},s=a.spawnPlayerFleet(e)):(r="Empire",s=a.spawnEmpireFleet(e)),{name:t.name,home:r,owner:r,position:t.position,orbit:s}}))}}]),e}(),S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:localStorage;return Object(i.a)(this,n),(e=t.call(this,function(){var e=a.getItem("games");return e?JSON.parse(e):{}}())).storage=a,e}return Object(c.a)(n,[{key:"writeState",value:function(){var e=Object(s.a)(r.a.mark((function e(t,a){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(Object(o.a)(n.prototype),"writeState",this).call(this,t,a);case 2:return s=e.sent,this.storage.setItem("games",JSON.stringify(this.games)),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteState",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(Object(o.a)(n.prototype),"deleteState",this).call(this,t);case 2:this.storage.setItem("games",JSON.stringify(this.games));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new m.a;Object(i.a)(this,e),this.games=t,this.prando=n,this.fogOfWar=new w,this.spawner=new k}return Object(c.a)(e,[{key:"readState",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.games[t],e.abrupt("return",n?Object(y.a)(n):void 0);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"writeState",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.games[t]=Object(y.a)(n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteState",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete this.games[t];case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"currentTime",value:function(){return(new Date).getTime()}},{key:"onAccountLogin",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"onGamesFetch",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0,s=Object.values(this.games);case 1:if(!(a<s.length)){e.next=12;break}if((i=s[a]).name!==n){e.next=9;break}if("Lobby"!==i.kind){e.next=8;break}return e.abrupt("return",i);case 8:return e.abrupt("return",g(i,t));case 9:a++,e.next=1;break;case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"onGamesList",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object.values(this.games).map((function(e){return{name:e.name,kind:e.kind,lastUpdated:e.lastUpdated,players:"number"===typeof e.players?e.players:e.players.length}})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onGamesCreate",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.writeState(n.name,Object(b.a)(Object(b.a)({},n),{},{seed:this.prando.nextString(10),createdBy:t,kind:"Lobby",lastUpdated:this.currentTime()})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"onGamesDelete",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.deleteState(n.name));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"onGamesStart",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a,s,i,c,u,o=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.readState(n.name);case 2:return a=e.sent,s=[{name:"Human",userId:"Guest",fogOfWar:{}}].concat(Object(f.a)(new Array(a.players-1).fill(null).map((function(e,t){return{name:"AI ".concat(t+1),userId:"ai-".concat(t+1),fogOfWar:{}}})))),i=this.spawner.spawnInitialSystems(new m.a(n.seed),n.systems,s),c={name:a.name,lastUpdated:this.currentTime(),createdBy:t,kind:"Game",players:s,systems:i,settings:{initialFactories:10,shipSpeedATurn:4}},u=Object(b.a)(Object(b.a)({},c),{},{players:c.players.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{fogOfWar:o.fogOfWar.createInitialFogOfWar(c,e.userId.startsWith("ai-"),e.userId)})}))}),console.log(u),e.next=10,this.writeState(n.name,u);case 10:return e.abrupt("return",g(u,t));case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}()),M=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Guest",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new S;return Object(i.a)(this,n),(e=t.call(this)).player=a,e.server=r,e}return Object(c.a)(n,[{key:"accountLogin",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"accountLogout",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"gamesFetch",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGamesFetch(this.player,t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"gamesList",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGamesList());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"gamesDelete",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGamesDelete(this.player,{name:t}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"gamesCreate",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGamesCreate(this.player,{name:t,players:n}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"gamesStart",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGamesStart(this.player,{name:t,seed:n,systems:a}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()}]),n}(p),I=d.a.createContext(new M)},64:function(e,t,n){"use strict";function a(e){return JSON.parse(JSON.stringify(e))}function r(e){return new Array(e).fill(null).map((function(e,t){return t}))}function s(e,t){return new Array(e).fill(null).map((function(){return new Array(t).fill(null)}))}n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s}))},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(38),r=n(44),s=n(57);var i=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new s.a;Object(a.a)(this,e),this.prando=i,this.xMin=0,this.yMin=0,this.xMax=void 0,this.yMax=void 0,this.radius=void 0,this.cellSize=void 0,this.k=void 0,this.state=void 0,this.queue=void 0,this.firstPoint=!0,this.xMax=t[0],this.yMax=t[1],this.radius=Math.max(n,1),this.cellSize=this.radius*Math.SQRT1_2,this.k=Math.max(r,2),this.reset()}return Object(r.a)(e,[{key:"reset",value:function(){var e=Math.ceil((this.xMax-this.xMin)/this.cellSize),t=Math.ceil((this.yMax-this.yMin)/this.cellSize);this.state={width:e,height:t,data:new Array(e*t).fill(null)},this.queue=[],this.firstPoint=!0}},{key:"createPoint",value:function(e,t){var n=Math.floor(e/this.cellSize)+Math.floor(t/this.cellSize)*this.state.width,a=this.state.data[n]=[e,t];return this.queue.push(a),a}},{key:"isValidPoint",value:function(e,t){if(e<this.xMin||e>this.xMax||t<this.yMin||t>this.yMax)return!1;for(var n,a,r,s,i=Math.floor((e-this.xMin)/this.cellSize),c=Math.floor((t-this.yMin)/this.cellSize),u=0,o=i-2;o<=i+2;o++)for(var l=c-2;l<=c+2;l++)if(o>=0&&o<this.state.width&&l>=0&&l<this.state.height&&(u=o+l*this.state.width,null!==this.state.data[u]&&(n=e,a=t,r=this.state.data[u][0],s=this.state.data[u][1],(r-n)*(r-n)+(s-a)*(s-a)<=this.radius*this.radius)))return!1;return!0}},{key:"rng",value:function(){return this.prando.next()}},{key:"nextPoint",value:function(){var e=0,t=0;if(this.firstPoint)return this.firstPoint=!1,e=this.xMin+(this.xMax-this.xMin)*this.rng(),t=this.yMin+(this.yMax-this.yMin)*this.rng(),this.createPoint(e,t);for(var n=0,a=0,r=0;this.queue.length;){n=this.queue.length*this.rng()|0;for(var s=0;s<this.k;s++)if(a=this.radius*(this.rng()+1),r=2*Math.PI*this.rng(),e=this.queue[n][0]+a*Math.cos(r),t=this.queue[n][1]+a*Math.sin(r),this.isValidPoint(e,t))return this.createPoint(e,t);this.queue.splice(n,1)}return null}},{key:"points",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.MAX_SAFE_INTEGER,t=[],n=0;n<e;n++){var a=this.nextPoint();a&&t.push(a)}return t}},{key:"done",get:function(){return!this.firstPoint&&0===this.queue.length}}]),e}()}},[[207,1,2]]]);
//# sourceMappingURL=main.5774767b.chunk.js.map