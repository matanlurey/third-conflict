(this["webpackJsonpthird-conflict"]=this["webpackJsonpthird-conflict"]||[]).push([[0],{155:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var a=n(6),c=n(88),s=n(337),r=n(192),i=n(338),l=n(136),j=n(52),o=n(44),b=n(0),d=n(336),h=n(183),u=n(51),m=n(28),O=(n(202),n(75)),x=n(156),g=n(165),p=n(189);var f=Object(h.hot)(e)((function(){var e=Object(d.a)(["auth"]),t=Object(c.a)(e,2),n=t[0],h=t[1],f=Object(b.useState)(n.auth),y=Object(c.a)(f,2),v=y[0],C=y[1];return Object(a.jsx)(u.a,{children:Object(a.jsxs)(l.a,{children:[Object(a.jsxs)(l.a.Header,{children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)(u.b,{to:"/",children:Object(a.jsx)("img",{src:"/images/logo.png"})})}),Object(a.jsxs)(j.a,{theme:"dark",mode:"horizontal",selectable:!1,children:[Object(a.jsx)(j.a.Item,{disabled:!v,icon:Object(a.jsx)(s.a,{}),children:Object(a.jsx)(u.b,{to:"/games",children:"Games"})}),Object(a.jsx)(j.a.Item,{icon:Object(a.jsx)(r.a,{}),children:Object(a.jsx)(u.b,{to:"/account",children:"Account"})}),Object(a.jsx)(j.a.Item,{disabled:!0,icon:Object(a.jsx)(i.a,{}),children:Object(a.jsx)(u.b,{to:"/settings",children:"Settings"})})]})]}),Object(a.jsx)(O.a.Provider,{value:v,children:Object(a.jsx)(l.a.Content,{children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{path:"/games",children:Object(a.jsx)(p.a,{})}),Object(a.jsx)(m.a,{path:"/account",children:Object(a.jsx)(x.a,{onChange:function(e){h("auth",e),C(e)}})}),Object(a.jsx)(m.a,{path:"/settings",children:"Hello Settings"}),Object(a.jsx)(m.a,{path:"/",children:v?Object(a.jsx)(g.a,{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(o.a,{type:"dashed",children:Object(a.jsxs)(u.b,{to:"/account",children:[Object(a.jsx)(r.a,{})," Login Required"]})})})})]})})})]})})}))}).call(this,n(201)(e))},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(6),c=n(191),s=n(44),r=n(0),i=n(75);n(203);function l(e){var t=Object(r.useContext)(i.a);return Object(a.jsxs)(c.a,{className:"account-form",labelCol:{span:8},wrapperCol:{span:16},children:[Object(a.jsx)("h1",{children:"Account"}),Object(a.jsxs)("p",{children:["A login is required to play ",Object(a.jsx)("strong",{children:"Third Conflict"}),". Currently you can login as a ",Object(a.jsx)("strong",{children:"Guest"})," and create and play games locally. In ",Object(a.jsx)("em",{children:"future"})," releases you will be able to login with"," ",Object(a.jsx)("strong",{children:"Discord"})," and play online."]}),!t&&Object(a.jsxs)(c.a.Item,{children:[Object(a.jsx)(s.a,{type:"primary",onClick:function(){return e.onChange("Guest")},children:"Login as Guest"}),Object(a.jsx)(s.a,{type:"ghost",disabled:!0,children:"Login with Discord"})]}),t&&Object(a.jsx)(s.a,{type:"primary",danger:!0,onClick:function(){return e.onChange(null)},children:"Logout"})]})}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(6),c=n(0),s=n(51),r=n(71);n(294);function i(){var e=Object(c.useContext)(r.a);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h1",{children:["Welcome back to ",Object(a.jsx)("strong",{children:"Third Conflict"})]}),Object(a.jsxs)("p",{children:["You have ",Object(a.jsxs)(s.b,{to:"/games",children:[e.games.length," pending game(s)"]}),"."]})]})}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var a=n(6),c=n(72),s=n(88),r=n(192),i=n(345),l=n(346),j=n(191),o=n(342),b=n(343),d=n(118),h=n(44),u=n(344),m=n(341),O=n(113),x=n(0),g=n(28),p=n(51),f=n(111),y=n(112),v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new O.a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["angry","attractive","bald","big","brave","clumsy","fierce","happy","itchy","handsome","petite","repulsive","silly","stocky","tall","tiny","wonderful","zealous"],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["antelope","cat","dog","eagle","gorilla","lion","rabbit","snake","tiger","vulture","zebra"];Object(f.a)(this,e),this.rng=t,this.adjectives=n,this.nouns=a}return Object(y.a)(e,[{key:"next",value:function(){return"".concat(this.rng.nextArrayItem(this.adjectives),"-").concat(this.rng.nextArrayItem(this.nouns),"-").concat(this.rng.nextInt(0,99).toString().padStart(2,"0"))}}]),e}(),C=n(75),I=n(71);n(298);function k(){var e=j.a.useForm(),t=Object(s.a)(e,1)[0],n=Object(g.f)().replace,r=Object(x.useContext)(I.a);return Object(x.useEffect)((function(){t.setFieldsValue({name:(new v).next(),players:2,online:!1})}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Create a Game"}),Object(a.jsxs)("p",{children:["Currently, you can create ",Object(a.jsx)("strong",{children:"local"})," (offline) games with AI opponents. In future builds, once logged in with"," ",Object(a.jsx)("strong",{children:"Discord"}),", you will be able to create and play online games."]}),Object(a.jsxs)(j.a,{labelCol:{span:1},wrapperCol:{span:4},form:t,onFinish:function(e){r.set(Object(c.a)(Object(c.a)({},e),{},{kind:"Lobby"})),n("/games/".concat(e.name))},children:[Object(a.jsx)(j.a.Item,{name:"name",label:"Name",extra:Object(a.jsx)(a.Fragment,{children:"This name is just used for reference only."}),children:Object(a.jsx)(o.a,{maxLength:30})}),Object(a.jsx)(j.a.Item,{name:"players",label:"Players",extra:Object(a.jsx)(a.Fragment,{children:"2-4 players currently supported."}),children:Object(a.jsx)(b.a,{min:2,max:4})}),Object(a.jsx)(j.a.Item,{name:"online",label:"Connectivity",extra:Object(a.jsx)(a.Fragment,{children:"Local games are versus AI and played offline."}),children:Object(a.jsxs)(d.a.Group,{children:[Object(a.jsx)(d.a.Button,{value:!1,children:"Local"}),Object(a.jsx)(d.a.Button,{value:!0,disabled:!0,children:"Online"})]})}),Object(a.jsx)(j.a.Item,{wrapperCol:{span:5},children:Object(a.jsx)(h.a,{type:"primary",style:{width:"100%"},htmlType:"submit",children:"Create"})})]})]})}function w(e){var t=Object(x.useContext)(I.a),n=Object(g.f)().replace,c=new Array(e.players-1).fill(""),l=j.a.useForm(),d=Object(s.a)(l,1)[0];return Object(x.useEffect)((function(){d.setFieldsValue({name:e.name,seed:(new O.a).nextString(10),systems:Math.ceil(2.5*e.players)})}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"Players"}),Object(a.jsxs)(u.b,{children:[Object(a.jsx)(u.b.Item,{children:Object(a.jsx)(u.b.Item.Meta,{avatar:Object(a.jsx)(r.a,{}),title:"Human",description:"Ready"})}),c.map((function(e,t){return Object(a.jsx)(u.b.Item,{children:Object(a.jsx)(u.b.Item.Meta,{avatar:Object(a.jsx)(i.a,{}),title:"AI: ".concat(t+1),description:"Ready"})},t)}))]}),Object(a.jsx)("h3",{children:"Settings"}),Object(a.jsxs)(j.a,{labelCol:{span:1},wrapperCol:{span:4},form:d,children:[Object(a.jsx)(j.a.Item,{label:"Name",name:"name",extra:Object(a.jsx)(a.Fragment,{children:"Used for identifying the game only."}),children:Object(a.jsx)(o.a,{readOnly:!0,minLength:10,maxLength:20})}),Object(a.jsx)(j.a.Item,{label:"Seed",name:"seed",extra:Object(a.jsx)(a.Fragment,{children:"Used for procedural generation of systems."}),children:Object(a.jsx)(o.a,{readOnly:!0,minLength:10,maxLength:20})}),Object(a.jsx)(j.a.Item,{label:"Systems",name:"systems",extra:Object(a.jsx)(a.Fragment,{children:"A recommended number is 2-3 systems per player."}),children:Object(a.jsx)(b.a,{min:e.players,max:26})}),Object(a.jsxs)("p",{className:"games-buttons",children:[Object(a.jsx)(h.a,{type:"primary",disabled:!0,htmlType:"submit",children:"Start"}),Object(a.jsx)(h.a,{danger:!0,onClick:function(){t.remove(e.name),n("/games")},children:"Delete"})]})]})]})}function F(){var e=Object(g.g)(),t=Object(x.useContext)(I.a).get(e.name),n=Object(g.f)().goBack;return t?"Lobby"===t.kind?Object(a.jsx)(w,Object(c.a)({},t)):Object(a.jsxs)(a.Fragment,{children:["Game for ",Object(a.jsx)("code",{children:e.name})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h1",{children:["Game ",Object(a.jsx)("code",{children:e.name})," not found."]}),Object(a.jsx)("p",{children:"Either this game has been deleted, or the link is expired."}),Object(a.jsx)(h.a,{onClick:n,children:"Go Back"})]})}function S(){var e=Object(x.useContext)(C.a),t=Object(x.useContext)(I.a),n=Object(g.f)().push,c=t.games.sort((function(e,t){return e.lastUpdate-t.lastUpdate})).map((function(e){return{name:Object(a.jsx)(p.b,{to:"/games/".concat(e.name),children:e.name}),key:e.name,players:e.players,status:"Lobby"!==e.kind||e.online?"Unknown":"Lobby (Host)"}}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Games"}),Object(a.jsxs)("p",{className:"games-buttons",children:[Object(a.jsx)(h.a,{icon:Object(a.jsx)(l.a,{}),type:"dashed",disabled:!e,onClick:function(){n("/games/create")},children:"Create Game"}),Object(a.jsx)(h.a,{icon:Object(a.jsx)(l.a,{}),type:"dashed",disabled:!0,onClick:function(){n("/games/join")},children:"Join Game"})]}),Object(a.jsx)(m.a,{columns:[{title:"Name",dataIndex:"name"},{title:"Players",dataIndex:"players"},{title:"Status",dataIndex:"status"}],dataSource:c,locale:{emptyText:"You are not in any games."},pagination:!1})]})}function L(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(g.c,{children:[Object(a.jsx)(g.a,{path:"/games/create",children:Object(a.jsx)(k,{})}),Object(a.jsx)(g.a,{path:"/games/join",children:"Join"}),Object(a.jsx)(g.a,{path:"/games/:name",children:Object(a.jsx)(F,{})}),Object(a.jsx)(g.a,{exact:!0,path:"/games",component:S})]})})}},193:function(e,t,n){"use strict";n.r(t);var a=n(6),c=(n(0),n(35)),s=n.n(c),r=n(155);n(335);s.a.render(Object(a.jsx)(r.a,{}),document.getElementById("root"))},202:function(e,t,n){},203:function(e,t,n){},294:function(e,t,n){},298:function(e,t,n){},335:function(e,t,n){},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),c=n.n(a),s=n(166),r=n(72),i=n(111),l=n(112),j=function(){function e(){Object(i.a)(this,e),this.games=void 0;var t=localStorage.getItem("games")||"[]";try{this.games=JSON.parse(t)}catch(n){console.warn(n),this.games=[]}}return Object(l.a)(e,[{key:"writeChanges",value:function(){localStorage.setItem("games",JSON.stringify(this.games))}},{key:"set",value:function(e){for(var t=0;t<this.games.length;t++)if(this.games[t].name===e.name)return this.games[t]=Object(r.a)(Object(r.a)({},e),{},{lastUpdate:(new Date).getTime()}),void this.writeChanges();this.games.push(e),this.writeChanges()}},{key:"get",value:function(e){var t,n=Object(s.a)(this.games);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.name===e)return a}}catch(c){n.e(c)}finally{n.f()}}},{key:"remove",value:function(e){for(var t=0;t<this.games.length;t++)if(this.games[t].name===e){this.games.splice(t,1);break}this.writeChanges()}}]),e}(),o=c.a.createContext(new j)},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),c=n.n(a).a.createContext(null)}},[[193,1,2]]]);
//# sourceMappingURL=main.757b5e55.chunk.js.map