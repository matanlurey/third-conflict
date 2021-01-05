(this["webpackJsonpthird-conflict"]=this["webpackJsonpthird-conflict"]||[]).push([[0],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),r=n.n(a).a.createContext(null)},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(108),r=n(107),s=n(32),c=n(31),i=n(58),u=n(38),o=n(42),l=n(62),h=function(){function e(t){Object(u.a)(this,e),this.data=t}return Object(o.a)(e,[{key:"distance",value:function(e){var t=[this.x,this.y],n=t[0],a=t[1],r=e instanceof Array?e:[e.x,e.y],s=Object(c.a)(r,2),i=s[0],u=s[1];return parseFloat(Math.sqrt(Math.pow(i-n,2)+Math.pow(u-a,2)).toFixed(2))}},{key:"x",get:function(){return this.data[0]}},{key:"y",get:function(){return this.data[1]}}]),e}(),j=n(89),f=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e,a,r){var s;return Object(u.a)(this,n),(s=t.call(this,a,r)).sampler=void 0,s.sampler=Array.isArray(e)?new j.a(e,4,void 0,a):e,s}return Object(o.a)(n,[{key:"generateMap",value:function(e,t){var n=this,a=this.fetchNames(e);a.sort((function(){return n.prando.nextInt(-1,1)}));for(var r=this.sampler.points(e),s=[],c=0;c<r.length;c++)s.push({name:a[c],position:[Math.max(Math.ceil(r[c][0]-1),0),Math.max(Math.ceil(r[c][1]-1),0)],home:!1});for(;t--;)this.pickFairestHomeSystem(s).home=!0;return this.reducePositionsToOrigin(s)}}]),n}(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new l.a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["Alfa","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","Xray","Yankee","Zulu"];Object(u.a)(this,e),this.prando=t,this.names=n}return Object(o.a)(e,[{key:"fetchNames",value:function(e){return this.names.slice(0,e)}},{key:"computeDistanceWeight",value:function(e,t,n){var a=e-t;return n&&(a=Math.pow(2,a)),a}},{key:"pickFairestHomeSystem",value:function(e){var t,n,a=Number.MAX_SAFE_INTEGER,r=0,s=Object(i.a)(e);try{for(s.s();!(n=s.n()).done;){var c,u=n.value,o=Object(i.a)(e);try{for(o.s();!(c=o.n()).done;){var l=c.value,j=new h(u.position).distance(l.position);j>r&&(r=j)}}catch(k){o.e(k)}finally{o.f()}}}catch(k){s.e(k)}finally{s.f()}var f,d=Object(i.a)(e);try{for(d.s();!(f=d.n()).done;){var b=f.value;if(!b.home){var p,m=[],O=Object(i.a)(e);try{for(O.s();!(p=O.n()).done;){var x=p.value,v=new h(b.position).distance(x.position),y=this.computeDistanceWeight(r,v,!!x.home);m.push(y)}}catch(k){O.e(k)}finally{O.f()}var g=m.reduce((function(e,t){return e+t}),0);g<a&&(a=g,t=b)}}}catch(k){d.e(k)}finally{d.f()}if(!t){var w=e.filter((function(e){return!e.home}));if(0===w.length)throw new Error("Failed to find an open system.");t=this.prando.nextArrayItem(w)}return t}},{key:"reducePositionsToOrigin",value:function(e){var t,n=Number.MAX_SAFE_INTEGER,a=Number.MAX_SAFE_INTEGER,r=Object(i.a)(e);try{for(r.s();!(t=r.n()).done;){var u=t.value,o=Object(c.a)(u.position,2),l=o[0],h=o[1];l<n&&(n=l),h<a&&(a=h)}}catch(j){r.e(j)}finally{r.f()}return e.map((function(e){var t=Object(c.a)(e.position,2),r=t[0],i=t[1];return r-=n,i-=a,Object(s.a)(Object(s.a)({},e),{},{position:[r,i]})}))}}]),e}())},175:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return y}));var a=n(3),r=n(31),s=n(357),c=n(209),i=n(358),u=n(156),o=n(65),l=n(50),h=n(0),j=n(356),f=n(201),d=n(46),b=n(34),p=(n(217),n(114)),m=n(176),O=n(184),x=n(204),v=n(200);var y=Object(f.hot)(e)((function(){var e=Object(j.a)(["auth"]),t=Object(r.a)(e,2),n=t[0],f=t[1],y=Object(h.useState)(n.auth),g=Object(r.a)(y,2),w=g[0],k=g[1];return Object(a.jsx)(d.a,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(u.a.Header,{children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)("img",{src:"/images/logo.png"})})}),Object(a.jsxs)(o.a,{theme:"dark",mode:"horizontal",selectable:!1,children:[Object(a.jsx)(o.a.Item,{disabled:!w,icon:Object(a.jsx)(s.a,{}),children:Object(a.jsx)(d.b,{to:"/games",children:"Games"})}),Object(a.jsx)(o.a.Item,{icon:Object(a.jsx)(c.a,{}),children:Object(a.jsx)(d.b,{to:"/account",children:"Account"})}),Object(a.jsx)(o.a.Item,{icon:Object(a.jsx)(i.a,{}),children:Object(a.jsx)(d.b,{to:"/settings",children:"Settings"})})]})]}),Object(a.jsx)(p.a.Provider,{value:w,children:Object(a.jsx)(u.a.Content,{children:Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{path:"/games",component:x.a}),Object(a.jsx)(b.a,{path:"/account",children:Object(a.jsx)(m.a,{onChange:function(e){f("auth",e),k(e)}})}),Object(a.jsx)(b.a,{path:"/settings",component:v.a}),Object(a.jsx)(b.a,{path:"/",children:w?Object(a.jsx)(O.a,{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(l.a,{type:"dashed",children:Object(a.jsxs)(d.b,{to:"/account",children:[Object(a.jsx)(c.a,{})," Login Required"]})})})})]})})})]})})}))}).call(this,n(216)(e))},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),r=n(136),s=n(50),c=n(0),i=n(114);n(218);function u(e){var t=Object(c.useContext)(i.a);return Object(a.jsxs)(r.a,{className:"account-form",labelCol:{span:8},wrapperCol:{span:16},children:[Object(a.jsx)("h1",{children:"Account"}),Object(a.jsxs)("p",{children:["A login is required to play ",Object(a.jsx)("strong",{children:"Third Conflict"}),". Currently you can login as a ",Object(a.jsx)("strong",{children:"Guest"})," and create and play games locally. In ",Object(a.jsx)("em",{children:"future"})," releases you will be able to login with"," ",Object(a.jsx)("strong",{children:"Discord"})," and play online."]}),!t&&Object(a.jsxs)(r.a.Item,{children:[Object(a.jsx)(s.a,{type:"primary",onClick:function(){return e.onChange("Guest")},children:"Login as Guest"}),Object(a.jsx)(s.a,{type:"ghost",disabled:!0,children:"Login with Discord"})]}),t&&Object(a.jsx)(s.a,{type:"primary",danger:!0,onClick:function(){return e.onChange(null)},children:"Logout"})]})}},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(3),r=n(8),s=n.n(r),c=n(20),i=n(31),u=n(0),o=n(46),l=n(67);n(308);function h(){var e=Object(u.useContext)(l.a),t=Object(u.useState)(),n=Object(i.a)(t,2),r=n[0],h=n[1];return Object(u.useEffect)((function(){Object(c.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.gamesList();case 2:n=t.sent,h(n.length);case 4:case"end":return t.stop()}}),t)})))()}),[e]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h1",{children:["Welcome back to ",Object(a.jsx)("strong",{children:"Third Conflict"})]}),Object(a.jsxs)("p",{children:["You have ",Object(a.jsxs)(o.b,{to:"/games",children:[r," pending game(s)"]}),"."]})]})}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(3),r=n(136),s=n(50);n(0),n(353);function c(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Settings"}),Object(a.jsx)("p",{children:"This game is in active development. As such, the data model is constantly evolving, and it's possible to get into a state where you have invalid data and the app/game is no longer functioning properly."}),Object(a.jsx)(r.a,{className:"account-form",labelCol:{span:8},wrapperCol:{span:16},children:Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(s.a,{type:"primary",danger:!0,onClick:function(){localStorage.clear(),location.replace("/")},children:"Reset all data"})})})]})}},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return X}));var a=n(8),r=n.n(a),s=n(3),c=n(20),i=n(31),u=n(50),o=n(0),l=n.n(o),h=n(34),j=n(67),f=l.a.createContext(void 0),d=l.a.createContext(void 0),b=(n(312),n(368)),p=n(136),m=n(362),O=n(365),x=n(132),v=n(38),y=n(42),g=n(62),w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new g.a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["angry","attractive","bald","big","brave","clumsy","fierce","happy","itchy","handsome","petite","repulsive","silly","stocky","tall","tiny","wonderful","zealous"],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["antelope","cat","dog","eagle","gorilla","lion","rabbit","snake","tiger","vulture","zebra"];Object(v.a)(this,e),this.rng=t,this.adjectives=n,this.nouns=a}return Object(y.a)(e,[{key:"next",value:function(){return"".concat(this.rng.nextArrayItem(this.adjectives),"-").concat(this.rng.nextArrayItem(this.nouns),"-").concat(this.rng.nextInt(0,99).toString().padStart(2,"0"))}}]),e}();function k(){var e=p.a.useForm(),t=Object(i.a)(e,1)[0],n=Object(h.f)().replace,a=Object(o.useContext)(j.a),l=Object(o.useState)(!1),f=Object(i.a)(l,2),d=f[0],v=f[1];return Object(o.useEffect)((function(){t.setFieldsValue({name:(new w).next(),players:2})}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Create a Game"}),Object(s.jsxs)("p",{children:["Currently, you can create ",Object(s.jsx)("strong",{children:"local"})," (offline) games with AI opponents. In future builds, once logged in with"," ",Object(s.jsx)("strong",{children:"Discord"}),", you will be able to create and play online games."]}),Object(s.jsxs)(p.a,{labelCol:{span:1},wrapperCol:{span:4},form:t,onFinish:function(){var e=Object(c.a)(r.a.mark((function e(t){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,a.gamesCreate(t.name,t.players);case 3:s=e.sent,n("/games/".concat(s.name));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(s.jsx)(p.a.Item,{name:"name",label:"Name",extra:Object(s.jsx)(s.Fragment,{children:"This name is just used for reference only."}),children:Object(s.jsx)(m.a,{maxLength:30})}),Object(s.jsx)(p.a.Item,{name:"players",label:"Players",extra:Object(s.jsx)(s.Fragment,{children:"2-4 players currently supported."}),children:Object(s.jsx)(O.a,{min:2,max:4})}),Object(s.jsx)(p.a.Item,{name:"online",label:"Connectivity",extra:Object(s.jsx)(s.Fragment,{children:"Local games are versus AI and played offline."}),children:Object(s.jsxs)(x.a.Group,{children:[Object(s.jsx)(x.a.Button,{value:!1,children:"Local"}),Object(s.jsx)(x.a.Button,{value:!0,disabled:!0,children:"Online"})]})}),Object(s.jsx)(p.a.Item,{wrapperCol:{span:5},children:Object(s.jsx)(u.a,{disabled:d,icon:d?Object(s.jsx)(b.a,{}):void 0,type:"primary",style:{width:"100%"},htmlType:"submit",children:d?Object(s.jsx)(s.Fragment,{children:"Saving"}):Object(s.jsx)(s.Fragment,{children:"Create Game"})})})]})]})}var S=n(369),I=n(361),M=n(46);function T(){var e=Object(o.useContext)(j.a),t=Object(h.f)().push,n=Object(o.useState)([]),a=Object(i.a)(n,2),l=a[0],f=a[1];function d(){return(d=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,e.gamesList();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(o.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[e]);var b=l.sort((function(e,t){return e.lastUpdated-t.lastUpdated})).map((function(e){return{name:Object(s.jsx)(M.b,{to:"/games/".concat(e.name),children:e.name}),key:e.name,players:e.players,status:"Lobby"===e.kind?"Not Started":"In Progress"}}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Games"}),Object(s.jsxs)("p",{className:"games-buttons",children:[Object(s.jsx)(u.a,{icon:Object(s.jsx)(S.a,{}),type:"dashed",onClick:function(){t("/games/create")},children:"Create Game"}),Object(s.jsx)(u.a,{icon:Object(s.jsx)(S.a,{}),type:"dashed",disabled:!0,onClick:function(){t("/games/join")},children:"Join Game"})]}),Object(s.jsx)(I.a,{columns:[{title:"Name",dataIndex:"name"},{title:"Players",dataIndex:"players"},{title:"Status",dataIndex:"status"}],dataSource:b,locale:{emptyText:"You are not in any games."},pagination:!1})]})}var C=n(209),F=n(370),A=n(366),P=n(134),E=n(89),G=n(58),N=n(64);n(348);function L(e){var t=function(e){var t=0,n=0;return e.forEach((function(e){var a=Object(i.a)(e.position,2),r=a[0],s=a[1];r>t&&(t=r),s>n&&(n=s)})),{width:t,height:n}}(e.systems),n=t.width,a=t.height;n+=1,a+=1;var r,c=Object(N.b)(a,n),u=Object(N.b)(a,n),o=Object(N.b)(a,n),l=Object(G.a)(e.systems);try{for(l.s();!(r=l.n()).done;){var h=r.value,j=Object(i.a)(h.position,2),f=j[0],d=j[1];u[d][f]="".concat((h.status||"").toLowerCase()),c[d][f]=Object(s.jsx)(s.Fragment,{children:h.name.substring(0,1).toUpperCase()}),o[d][f]=h}}catch(b){l.e(b)}finally{l.f()}return Object(s.jsx)("table",{className:"map-preview ".concat(e.onSelect?"selectable":""),children:Object(s.jsx)("tbody",{children:Object(N.c)(a).map((function(t){return Object(s.jsx)("tr",{children:Object(N.c)(n).map((function(n){return Object(s.jsx)("td",{className:u[t][n],onClick:function(){e.onSelect&&e.onSelect(o[t][n])},children:c[t][n]},n)}))},t)}))})})}function W(e){var t=Object(o.useContext)(j.a),n=Object(h.f)().replace,a=new Array(e.data.players-1).fill(""),l=Object(o.useState)(e.data.seed),f=Object(i.a)(l,2),d=f[0],b=f[1],x=Object(o.useState)(!1),v=Object(i.a)(x,2),y=v[0],w=v[1],k=Object(o.useState)(Math.ceil(3*e.data.players)),S=Object(i.a)(k,2),I=S[0],M=S[1],T=Object(o.useState)([]),G=Object(i.a)(T,2),N=G[0],W=G[1];return Object(o.useEffect)((function(){var t=new g.a(d),n=I/26,a=new E.a([Math.ceil(50*n),Math.ceil(30*n)],4,void 0,t),r=new P.a(a,t);W(r.generateMap(I,e.data.players))}),[d,I]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Players"}),Object(s.jsxs)(A.b,{children:[Object(s.jsx)(A.b.Item,{children:Object(s.jsx)(A.b.Item.Meta,{avatar:Object(s.jsx)(C.a,{}),title:"Human",description:"Ready"})}),a.map((function(e,t){return Object(s.jsx)(A.b.Item,{children:Object(s.jsx)(A.b.Item.Meta,{avatar:Object(s.jsx)(F.a,{}),title:"AI: ".concat(t+1),description:"Ready"})},t)}))]}),Object(s.jsx)("h3",{children:"Settings"}),Object(s.jsxs)(p.a,{labelCol:{span:1},wrapperCol:{span:4},onFinish:function(){w(!0),e.onStart(d,I)},children:[Object(s.jsx)(p.a.Item,{label:"Name",extra:Object(s.jsx)(s.Fragment,{children:"Used for identifying the game only."}),children:Object(s.jsx)(m.a,{readOnly:!0,minLength:10,maxLength:20,value:e.data.name})}),Object(s.jsx)(p.a.Item,{label:"Seed",extra:Object(s.jsx)(s.Fragment,{children:"Used for procedural generation of systems."}),children:Object(s.jsx)(m.a,{readOnly:!0,minLength:10,maxLength:20,value:d,onChange:function(e){return b(e.target.value)}})}),Object(s.jsx)(p.a.Item,{label:"Preview",children:Object(s.jsx)(L,{systems:N})}),Object(s.jsx)(p.a.Item,{label:"Maximum Systems",extra:Object(s.jsx)(s.Fragment,{children:"A recommended number is 3 systems per player."}),children:Object(s.jsx)(O.a,{min:e.data.players,max:26,value:I,onChange:function(e){return M(parseInt("".concat(e)))}})}),Object(s.jsxs)("p",{className:"games-buttons",children:[Object(s.jsx)(u.a,{type:"primary",htmlType:"submit",disabled:y,children:"Start"}),Object(s.jsx)(u.a,{danger:!0,disabled:y,onClick:Object(c.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return w(!0),a.next=3,t.gamesDelete(e.data.name);case 3:n("/games");case 4:case"end":return a.stop()}}),a)}))),children:"Delete"})]})]})]})}var R=n(154);n(349);function D(e){var t=Object(o.useState)(!1),n=Object(i.a)(t,2),a=n[0],l=n[1],h=Object(o.useState)(),j=Object(i.a)(h,2),f=j[0],d=j[1],b=e.endedTurn||a;return Object(o.useEffect)((function(){return function(){clearTimeout(f)}}),[]),Object(s.jsxs)("header",{className:"game-header",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("strong",{children:e.name}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:e.players})," players, ",Object(s.jsx)("span",{children:e.systems})," ","systems."]}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(u.a,{type:"primary",disabled:b,onClick:Object(c.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,e.onEndTurn();case 3:n=setTimeout((function(){l(!1)}),2e3),d(n);case 5:case"end":return t.stop()}}),t)}))),children:b?"Waiting...":"End Turn"})}),Object(s.jsx)("li",{children:Object(s.jsx)(u.a,{danger:!0,onClick:Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.confirm("Are you sure? This will remove you from the game")){t.next=2;break}return t.abrupt("return");case 2:return l(!0),t.next=5,e.onResign();case 5:l(!1);case 6:case"end":return t.stop()}}),t)}))),children:"Resign"})})]})]})}var U=n(367),q=n(364),z=n(363);n(350);function B(e){return{name:e.name,key:e.name,status:e.status||"Unknown"}}function J(){var e=Object(o.useContext)(f),t=Object(o.useContext)(d),n=e.systems.filter((function(e){return"Self"===e.status})).length>1;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(U.b,{style:{float:"right",paddingTop:"5px"},children:["Self"===t.status&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u.a,{type:"dashed",children:"Launch Fleet"}),Object(s.jsx)(u.a,{type:"dashed",disabled:!n,children:"Reinforce System"})]}),"Self"!==t.status&&Object(s.jsx)(u.a,{type:"dashed",children:"Attack System"})]}),Object(s.jsx)("h2",{children:t.name}),Object(s.jsxs)(q.a,{title:"Orbiting",bordered:!0,size:"small",column:2,layout:"vertical",style:{marginBottom:"5px"},children:[Object(s.jsx)(q.a.Item,{label:"Factories",children:t.factories||"?"}),Object(s.jsx)(q.a.Item,{label:"Warships",children:t.fleet.warships||"?"}),Object(s.jsx)(q.a.Item,{label:"Transports",children:t.fleet.transports||"?"}),Object(s.jsx)(q.a.Item,{label:"Troops",children:t.fleet.troops||"?"})]}),Object(s.jsx)("h3",{children:"Planets"}),!t.planets&&Object(s.jsx)("p",{children:"No information available."}),t.planets&&Object(s.jsx)(A.b,{grid:{gutter:8,column:4},className:"planet-grid",dataSource:t.planets,renderItem:function(e){return Object(s.jsx)(A.b.Item,{children:Object(s.jsxs)(z.a,{children:[Object(s.jsx)("img",{src:"/images/planets/".concat(e.recruit,".png")}),Object(s.jsx)("br",{}),e.troops," Troops"]})})}})]})}function _(){var e=Object(o.useContext)(f);return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(h.c,{children:[Object(s.jsx)(h.a,{exact:!0,path:"/games/:name/systems/:system",render:function(t){var n,a,r=t.match.params.system,c=Object(G.a)(e.systems);try{for(c.s();!(a=c.n()).done;){var i=a.value;if(i.name.toLowerCase()===r){n=i;break}}}catch(u){c.e(u)}finally{c.f()}return Object(s.jsx)(d.Provider,{value:n,children:Object(s.jsx)(J,{})})}}),Object(s.jsx)(h.a,{path:"/games/:name/systems",children:Object(s.jsx)(I.a,{columns:[{title:"Name",dataIndex:"name",key:"name",sorter:function(e,t){return e.name>t.name?1:-1},defaultSortOrder:"ascend",render:function(t){return Object(s.jsx)(M.b,{to:"/games/".concat(e.name,"/systems/").concat(t.toLowerCase()),children:t})}},{title:"HUD",dataIndex:"status",key:"status",filters:[{text:"Friendly",value:"Self"}],defaultFilteredValue:["Self"],filterMultiple:!0,onFilter:function(e,t){return t.status===e}}],dataSource:e.systems.map(B),pagination:!1})})]})})}function H(e){var t,n=Object(o.useContext)(f);if(!n)throw new Error("No GameContext provided.");var a=null===(t=Object(h.h)("/games/:name/:tab?"))||void 0===t?void 0:t.params,r=Object(h.f)();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(D,{name:n.name,players:n.players,systems:n.systems.length,endedTurn:n.endedTurn,onEndTurn:e.onEndTurn,onResign:e.onResign}),Object(s.jsxs)(R.a,{activeKey:(null===a||void 0===a?void 0:a.tab)||"",onTabClick:function(e){a&&r.replace("/games/".concat(a.name,"/").concat(e))},children:[Object(s.jsx)(R.a.TabPane,{tab:"Overview",children:Object(s.jsx)(L,{systems:n.systems,onSelect:function(e){r.push("/games/".concat(null===a||void 0===a?void 0:a.name,"/systems/").concat(e.name.toLowerCase()))}})},""),Object(s.jsx)(R.a.TabPane,{tab:"Reports",disabled:!0},"reports"),Object(s.jsx)(R.a.TabPane,{tab:"Systems",children:Object(s.jsx)(_,{})},"systems"),Object(s.jsx)(R.a.TabPane,{tab:"Fleets",disabled:!0},"fleets")]})]})}function V(){var e=Object(h.g)(),t=Object(o.useContext)(j.a),n=Object(o.useState)(),a=Object(i.a)(n,2),l=a[0],d=a[1];function b(){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.gamesFetch(e.name);case 2:a=n.sent,d(a);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(o.useEffect)((function(){b();var e=setInterval(b,1e3);return function(){clearInterval(e)}}),[t]);var m=Object(h.f)().goBack;return l?"Lobby"===l.kind?Object(s.jsx)(W,{data:l,onStart:function(){var n=Object(c.a)(r.a.mark((function n(a,s){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=d,n.next=3,t.gamesStart(e.name,a,s);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}):Object(s.jsx)(f.Provider,{value:l,children:Object(s.jsx)(H,{onResign:Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.gameResign(l.name);case 2:case"end":return e.stop()}}),e)}))),onEndTurn:Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.gameEndTurn(l.name);case 2:case"end":return e.stop()}}),e)})))})}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h1",{children:["Game ",Object(s.jsx)("code",{children:e.name})," not found."]}),Object(s.jsx)("p",{children:"Either this game has been deleted, or the link is expired."}),Object(s.jsx)(u.a,{onClick:m,children:"Go Back"})]})}function X(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(h.c,{children:[Object(s.jsx)(h.a,{exact:!0,path:"/games/create",component:k}),Object(s.jsx)(h.a,{path:"/games/:name",component:V}),Object(s.jsx)(h.a,{exact:!0,path:"/games",component:T})]})})}},210:function(e,t,n){"use strict";n.r(t);var a=n(3),r=(n(0),n(40)),s=n.n(r),c=n(175);n(355);s.a.render(Object(a.jsx)(c.a,{}),document.getElementById("root"))},217:function(e,t,n){},218:function(e,t,n){},308:function(e,t,n){},312:function(e,t,n){},348:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){},353:function(e,t,n){},355:function(e,t,n){},64:function(e,t,n){"use strict";function a(e){return JSON.parse(JSON.stringify(e))}function r(e){return new Array(e).fill(null).map((function(e,t){return t}))}function s(e,t){return new Array(e).fill(null).map((function(){return new Array(t).fill(null)}))}n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s}))},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var a=n(8),r=n.n(a),s=n(20),c=n(38),i=n(42),u=n(155),o=n(76),l=n(108),h=n(107),j=n(0),f=n.n(j),d=function e(){Object(c.a)(this,e)},b=n(205),p=n(32),m=n(62),O=n(58),x=n(134),v=n(89),y=n(64);function g(e,t){var n,a=Object(O.a)(e.players);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(r.userId===t)return r.fogOfWar}}catch(s){a.e(s)}finally{a.f()}}var w=function(){function e(){Object(c.a)(this,e)}return Object(i.a)(e,[{key:"createInitialFogOfWar",value:function(e,t,n){var a=this;return{kind:"Game",currentTurn:e.currentTurn,name:e.name,players:e.players.length,endedTurn:t,systems:e.systems.map((function(e){var t=a.determineStatus(e,n),r="Self"===t;return{name:e.name,position:e.position,status:t,factories:r?e.factories:void 0,planets:r?e.planets:void 0,fleet:r?Object(p.a)({},e.orbit):{}}}))}}},{key:"determineStatus",value:function(e,t){if("Empire"!==e.owner)return e.owner.player===t?"Self":void 0}}]),e}(),k=function(){function e(){Object(c.a)(this,e)}return Object(i.a)(e,[{key:"randomEmpireFactories",value:function(e,t){return e.nextInt(Math.floor(t/4),Math.floor(t/2))}},{key:"spawnEmpireFleet",value:function(e){return{transports:0,troops:0,warships:1*e.nextInt(10,30)}}},{key:"spawnPlayerFleet",value:function(e){var t=e.nextInt(180,240),n=e.nextInt(20,30);return{transports:n,troops:50*n,warships:t}}},{key:"spawnPlanet",value:function(e,t){return{morale:1,owner:t,troops:e.nextInt(20,80),recruit:e.nextInt(1,10)}}},{key:"spawnInitialSystems",value:function(e,t,n,a){var r=this,s=t/26,c=new v.a([Math.ceil(50*s),Math.ceil(30*s)],4,void 0,e),i=new x.a(c,e);return a=Object(y.a)(a).sort((function(){return e.nextInt(-1,1)})),i.generateMap(t,a.length).map((function(t){var s,c,i,u;return t.home?(s={player:a.splice(0,1)[0].userId},c=r.spawnPlayerFleet(e),i=n.initialFactories,u=new Array(10).fill(null).map((function(){return r.spawnPlanet(e,s)}))):(s="Empire",c=r.spawnEmpireFleet(e),i=r.randomEmpireFactories(e,n.initialFactories),u=new Array(e.nextInt(2,5)).fill(null).map((function(){return r.spawnPlanet(e,s)}))),{name:t.name,home:s,owner:s,position:t.position,orbit:c,factories:i,planets:u}}))}}]),e}(),S=function(){function e(){Object(c.a)(this,e)}return Object(i.a)(e,[{key:"nextTurn",value:function(e){return Object(p.a)(Object(p.a)({},e),{},{currentTurn:e.currentTurn+1,players:e.players.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{fogOfWar:Object(p.a)(Object(p.a)({},e.fogOfWar),{},{currentTurn:e.fogOfWar.currentTurn+1,endedTurn:e.serverAgent})})}))})}}]),e}(),I=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:localStorage;return Object(c.a)(this,n),(e=t.call(this,function(){var e=a.getItem("games");return e?JSON.parse(e):{}}())).storage=a,e}return Object(i.a)(n,[{key:"writeState",value:function(){var e=Object(s.a)(r.a.mark((function e(t,a){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(Object(o.a)(n.prototype),"writeState",this).call(this,t,a);case 2:return s=e.sent,this.storage.setItem("games",JSON.stringify(this.games)),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteState",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(Object(o.a)(n.prototype),"deleteState",this).call(this,t);case 2:this.storage.setItem("games",JSON.stringify(this.games));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new m.a;Object(c.a)(this,e),this.games=t,this.prando=n,this.fogOfWar=new w,this.spawner=new k,this.turnProcessor=new S}return Object(i.a)(e,[{key:"readState",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.games[t],e.abrupt("return",n?Object(y.a)(n):void 0);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"writeState",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(p.a)(Object(p.a)({},Object(y.a)(n)),{},{lastUpdated:this.currentTime()}),e.abrupt("return",this.games[t]=n);case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteState",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete this.games[t];case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"currentTime",value:function(){return(new Date).getTime()}},{key:"writePlayer",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n,a){var s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.readState(t);case 2:if(!(s=e.sent)||"Game"!==s.kind){e.next=6;break}for(c=0;c<s.players.length;c++)s.players[c].userId===n&&(s.players[c]=a(s.players[c]));return e.abrupt("return",this.writeState(t,s));case 6:return e.abrupt("return");case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"onAccountLogin",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"onGamesFetch",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0,s=Object.values(this.games);case 1:if(!(a<s.length)){e.next=12;break}if((c=s[a]).name!==n){e.next=9;break}if("Lobby"!==c.kind){e.next=8;break}return e.abrupt("return",c);case 8:return e.abrupt("return",g(c,t));case 9:a++,e.next=1;break;case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"onGamesList",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object.values(this.games).map((function(e){return{name:e.name,kind:e.kind,lastUpdated:e.lastUpdated,players:"number"===typeof e.players?e.players:e.players.length}})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onGamesCreate",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.writeState(n.name,Object(p.a)(Object(p.a)({},n),{},{seed:this.prando.nextString(10),createdBy:t,kind:"Lobby",lastUpdated:this.currentTime()})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"onGamesDelete",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.deleteState(n.name));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"onGamesStart",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a,s,c,i,u,o,l=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.readState(n.name);case 2:return a=e.sent,s=[{name:"Human",userId:"Guest",fogOfWar:{},serverAgent:!1}].concat(Object(b.a)(new Array(a.players-1).fill(null).map((function(e,t){return{name:"AI ".concat(t+1),userId:"ai-".concat(t+1),fogOfWar:{},serverAgent:!0}})))),c={initialFactories:10,shipSpeedATurn:4},i=this.spawner.spawnInitialSystems(new m.a(n.seed),n.systems,c,s),u={name:a.name,lastUpdated:this.currentTime(),createdBy:t,currentTurn:1,kind:"Game",players:s,systems:i,settings:c},o=Object(p.a)(Object(p.a)({},u),{},{players:u.players.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{fogOfWar:l.fogOfWar.createInitialFogOfWar(u,e.serverAgent,e.userId)})}))}),e.next=10,this.writeState(n.name,o);case 10:return e.abrupt("return",g(o,t));case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"onGameEndTurn",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.writePlayer(n.name,t,(function(e){return Object(p.a)(Object(p.a)({},e),{},{fogOfWar:Object(p.a)(Object(p.a)({},e.fogOfWar),{},{endedTurn:!0})})}));case 2:if(!(a=e.sent)){e.next=8;break}if(!a.players.every((function(e){return e.fogOfWar.endedTurn}))){e.next=8;break}return e.next=8,this.writeState(n.name,this.turnProcessor.nextTurn(a));case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"onGameResign",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.writePlayer(n.name,t,(function(e){return Object(p.a)(Object(p.a)({},e),{},{serverAgent:!0,fogOfWar:Object(p.a)(Object(p.a)({},e.fogOfWar),{},{endedTurn:!0})})}));case 2:if(!(a=e.sent)){e.next=14;break}if(!a.players.every((function(e){return e.serverAgent}))){e.next=10;break}return e.next=8,this.deleteState(n.name);case 8:e.next=14;break;case 10:if(!a.players.every((function(e){return e.fogOfWar.endedTurn}))){e.next=14;break}return e.next=14,this.writeState(n.name,this.turnProcessor.nextTurn(a));case 14:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}()),M=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Guest",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new I;return Object(c.a)(this,n),(e=t.call(this)).player=a,e.server=r,e}return Object(i.a)(n,[{key:"accountLogin",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"accountLogout",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"gamesFetch",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGamesFetch(this.player,t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"gamesList",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGamesList());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"gamesDelete",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGamesDelete(this.player,{name:t}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"gamesCreate",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGamesCreate(this.player,{name:t,players:n}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"gamesStart",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGamesStart(this.player,{name:t,seed:n,systems:a}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"gameEndTurn",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGameEndTurn(this.player,{name:t}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"gameResign",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.server.onGameResign(this.player,{name:t}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(d),T=f.a.createContext(new M)},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(38),r=n(42),s=n(62);var c=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new s.a;Object(a.a)(this,e),this.prando=c,this.xMin=0,this.yMin=0,this.xMax=void 0,this.yMax=void 0,this.radius=void 0,this.cellSize=void 0,this.k=void 0,this.state=void 0,this.queue=void 0,this.firstPoint=!0,this.xMax=t[0],this.yMax=t[1],this.radius=Math.max(n,1),this.cellSize=this.radius*Math.SQRT1_2,this.k=Math.max(r,2),this.reset()}return Object(r.a)(e,[{key:"reset",value:function(){var e=Math.ceil((this.xMax-this.xMin)/this.cellSize),t=Math.ceil((this.yMax-this.yMin)/this.cellSize);this.state={width:e,height:t,data:new Array(e*t).fill(null)},this.queue=[],this.firstPoint=!0}},{key:"createPoint",value:function(e,t){var n=Math.floor(e/this.cellSize)+Math.floor(t/this.cellSize)*this.state.width,a=this.state.data[n]=[e,t];return this.queue.push(a),a}},{key:"isValidPoint",value:function(e,t){if(e<this.xMin||e>this.xMax||t<this.yMin||t>this.yMax)return!1;for(var n,a,r,s,c=Math.floor((e-this.xMin)/this.cellSize),i=Math.floor((t-this.yMin)/this.cellSize),u=0,o=c-2;o<=c+2;o++)for(var l=i-2;l<=i+2;l++)if(o>=0&&o<this.state.width&&l>=0&&l<this.state.height&&(u=o+l*this.state.width,null!==this.state.data[u]&&(n=e,a=t,r=this.state.data[u][0],s=this.state.data[u][1],(r-n)*(r-n)+(s-a)*(s-a)<=this.radius*this.radius)))return!1;return!0}},{key:"rng",value:function(){return this.prando.next()}},{key:"nextPoint",value:function(){var e=0,t=0;if(this.firstPoint)return this.firstPoint=!1,e=this.xMin+(this.xMax-this.xMin)*this.rng(),t=this.yMin+(this.yMax-this.yMin)*this.rng(),this.createPoint(e,t);for(var n=0,a=0,r=0;this.queue.length;){n=this.queue.length*this.rng()|0;for(var s=0;s<this.k;s++)if(a=this.radius*(this.rng()+1),r=2*Math.PI*this.rng(),e=this.queue[n][0]+a*Math.cos(r),t=this.queue[n][1]+a*Math.sin(r),this.isValidPoint(e,t))return this.createPoint(e,t);this.queue.splice(n,1)}return null}},{key:"points",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.MAX_SAFE_INTEGER,t=[],n=0;n<e;n++){var a=this.nextPoint();a&&t.push(a)}return t}},{key:"done",get:function(){return!this.firstPoint&&0===this.queue.length}}]),e}()}},[[210,1,2]]]);
//# sourceMappingURL=main.3e3cfdee.chunk.js.map