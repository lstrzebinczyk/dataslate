(this.webpackJsonpscriptorum=this.webpackJsonpscriptorum||[]).push([[0],{141:function(e,t,a){e.exports=a(273)},146:function(e,t,a){},196:function(e,t){},198:function(e,t){},229:function(e,t){},230:function(e,t){},273:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),o=a.n(l),s=(a(146),a(131)),c=a(132),i=a(135),m=a(139),u=a(136),d=a(275);var p=function(){return r.a.createElement(d.a,null,r.a.createElement("h1",null,"Scriptorum"),r.a.createElement("p",{className:"lead"},"Easy-to-use datasheets for Warhammer 40,000: Kill Team"),r.a.createElement("ul",null,r.a.createElement("li",null,"All the info you need, when you need it"),r.a.createElement("li",null,"Stats and abilities organised by phase"),r.a.createElement("li",null,"No wasted space for identical mdels"),r.a.createElement("li",null,"Designed for print or screen"),r.a.createElement("li",null,"Clear, uncluttered layout for easy reference")))},h=a(276),E=a(277),g=a(283),f=a(282);var v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement(g.a.Header,{as:"h3"},"Step 1"),r.a.createElement(g.a.Body,{style:{minHeight:"12em"}},r.a.createElement(g.a.Text,null,"Build your force in"," ",r.a.createElement("a",{href:"https://battlescribe.net/"},"Battlescribe"),"."),r.a.createElement(g.a.Text,null,"Currently only Kill Team rosters are supported.")))),r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement(g.a.Header,{as:"h3"},"Step 2"),r.a.createElement(g.a.Body,{style:{minHeight:"12em"}},r.a.createElement(g.a.Text,null,r.a.createElement(u.a,{onDrop:e.onUpload,accept:".ros,.rosz"},(function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement(f.a,Object.assign({variant:"primary"},t(),{style:{textAlign:"center"}}),r.a.createElement("input",a()),r.a.createElement("p",null,"Drop your roster file here, or click to select one."),r.a.createElement("p",null,r.a.createElement("em",null,"(*.rosz and *.ros accepted)")))})))))),r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement(g.a.Header,{as:"h3"},"Step 3"),r.a.createElement(g.a.Body,{style:{minHeight:"12em"}},r.a.createElement(g.a.Text,null,"Print your datasheets out, and never forget an ability again!"),r.a.createElement(g.a.Text,null,"Prepare to dominate your foes!"))))),r.a.createElement("footer",null,"Built with ",r.a.createElement("a",{href:"https://reactjs.org/"},"React")," and ",r.a.createElement("a",{href:"https://getbootstrap.com"},"Bootstrap"),". Icons courtesy of ",r.a.createElement("a",{href:"https://killteam.app/"},"Companion for Kill Team"),". Released as ",r.a.createElement("a",{href:"https://github.com/floppy/scriptorum"},"Open Source"),", report problems ",r.a.createElement("a",{href:"https://github.com/floppy/scriptorum/issues/new"},"on GitHub"),"."))};var y=function(e){return r.a.createElement("div",{style:{pageBreakAfter:"always"}},r.a.createElement("h1",{style:{background:"black",color:"white",padding:"10px",width:"100%",textTransform:"capitalize",display:"flex"}},r.a.createElement(E.a,null,e.name," Phase"),r.a.createElement(E.a,{style:{flexGrow:0,textAlign:"right"}},e.note&&r.a.createElement("small",null,e.note))),e.children)},b=a(278);var w=function(e){return r.a.createElement(b.a,{striped:!0,bordered:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"M"),r.a.createElement("th",null,"WS"),r.a.createElement("th",null,"BS"),r.a.createElement("th",null,"S"),r.a.createElement("th",null,"T"),r.a.createElement("th",null,"W"),r.a.createElement("th",null,"A"),r.a.createElement("th",null,"Ld"),r.a.createElement("th",null,"Sv"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.movement,'"'),r.a.createElement("td",null,e.weapon_skill,"+"),r.a.createElement("td",null,isNaN(e.ballistic_skill)?"-":e.ballistic_skill+"+"),r.a.createElement("td",null,e.strength),r.a.createElement("td",null,e.toughness),r.a.createElement("td",null,e.wounds),r.a.createElement("td",null,e.attacks,e.additional_attacks?r.a.createElement("strong",null," +",e.additional_attacks):null),r.a.createElement("td",null,e.leadership),r.a.createElement("td",null,e.save,"+",e.invulnerable_save?r.a.createElement(r.a.Fragment,null," / ",r.a.createElement("strong",null,e.invulnerable_save,"++")):null))))},k=a(26);var x=function(e){var t=e.phase?e.abilities.filter((function(t){return t.phases.indexOf(e.phase)>=0})):e.abilities.filter((function(e){return 0===e.phases.length}));return 0===t.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(b.a,{striped:!0,bordered:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ability"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,k.sortBy(t,["name"]).map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.description))}))))},A=a(279);function S(e){return e.specialism?r.a.createElement("img",{className:"specialism",style:{height:"1em",marginRight:"10px"},alt:e.specialism,src:"/scriptorum/icons/".concat(e.specialism.toLowerCase(),".svg")}):r.a.createElement(r.a.Fragment,null)}function N(e){return e.category&&"specialist"!==e.category.toLowerCase()&&"specialist retainer"!==e.category.toLowerCase()?r.a.createElement("img",{className:"category",style:{height:"1em",marginRight:"10px"},alt:e.category,src:"/scriptorum/icons/".concat(e.category.toLowerCase(),".svg")}):r.a.createElement(r.a.Fragment,null)}var P=a(26);function C(e){var t=P.without([e.model.name,e.model.type,"Specialist"===e.model.category||"Specialist Retainer"===e.model.category?e.model.specialism:e.model.category],null,"");return r.a.createElement("h2",{style:{background:"lightgrey",color:"black",padding:"5px",display:"flex",width:"100%",justifyContent:"space-between"}},r.a.createElement(E.a,null,("Specialist"===e.model.category||"Specialist Retainer"===e.model.category)&&r.a.createElement(S,{specialism:e.model.specialism}),e.model.category&&r.a.createElement(N,{category:e.model.category}),r.a.createElement("strong",null,t[0]," "),e.model.count>1&&r.a.createElement("small",null,"x",e.model.count),r.a.createElement("small",null,P.join(P.slice(t,1),", "))),e.showPoints&&r.a.createElement(E.a,{style:{flexGrow:0,textAlign:"right"}},r.a.createElement("small",null,e.model.points,"pts")))}function B(e){return r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(C,{model:e.model,showPoints:!0}),"Commander"===e.model.category&&r.a.createElement("div",null,"Commander specialism: ",r.a.createElement("strong",null,e.model.specialism)),r.a.createElement(w,e.model.stats),r.a.createElement(x,{abilities:e.model.abilities,phase:""})),r.a.createElement(E.a,{sm:"auto"},r.a.createElement("div",null,r.a.createElement(A.a,{pill:!0,variant:"primary",className:"mb-2",style:{textTransform:"uppercase",marginRight:"10px",display:"block"}},e.model.faction),e.model.keywords.map((function(e){return r.a.createElement(A.a,{pill:!0,variant:"secondary",className:"mb-2",style:{textTransform:"uppercase",marginRight:"10px",display:"block"}},e)})))))}var T=function(e){return r.a.createElement("div",{className:"statbadge mb-4",style:{paddingTop:".2vw",border:"1px solid black",width:"5vw",height:"5vw",background:"black",color:"white",display:"flex",flexDirection:"column",textAlign:"center",borderRadius:"50%"}},r.a.createElement("div",{className:"name",style:{fontSize:"1vw",lineHeight:"1vw"}},e.name),r.a.createElement("div",{className:"value",style:{fontSize:"3vw",lineHeight:"3vw",fontWeight:"bold"}},e.value,e.secondaryValue?r.a.createElement("small",null,e.secondaryValue):r.a.createElement(r.a.Fragment,null)))};function _(e){return r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(C,{model:e.model}),r.a.createElement(x,{abilities:e.model.abilities,phase:"movement"})),r.a.createElement(E.a,{sm:"auto"},r.a.createElement(T,{name:"M",value:"".concat(e.model.stats.movement)})))}var W=a(26);var O=function(e){return 0===e.powers.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(b.a,{striped:!0,bordered:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Power"),r.a.createElement("th",null,"Warp Charge"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,W.sortBy(e.powers,["name"]).map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.charge),r.a.createElement("td",null,e.description))}))))};function j(e){return r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(C,{model:e.model}),r.a.createElement(O,{powers:e.model.psychicPowers}),r.a.createElement(x,{abilities:e.model.abilities,phase:"psychic"})))}function F(e){return e.psychicPowers.length>0||e.abilities.filter((function(e){return e.phases.indexOf("psychic")>=0})).length>0}var R=a(26);var V=function(e){var t="shooting"===e.phase?e.weapons.filter((function(e){return"Melee"!==e.type})):e.weapons.filter((function(e){return"Melee"===e.type}));return 0===t.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(b.a,{striped:!0,bordered:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Weapon"),"shooting"===e.phase&&r.a.createElement("th",null,"Range"),"shooting"===e.phase&&r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"S"),r.a.createElement("th",null,"AP"),r.a.createElement("th",null,"D"),r.a.createElement("th",null,"Abilities"))),r.a.createElement("tbody",null,R.sortBy(t,["name"]).map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.name),"shooting"===e.phase&&r.a.createElement("td",null,t.range,'"'),"shooting"===e.phase&&r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.type),r.a.createElement("td",null,t.strength),r.a.createElement("td",null,t.armourPiercing),r.a.createElement("td",null,t.damage),r.a.createElement("td",null,t.abilities))}))))};function I(e){return r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(C,{model:e.model}),r.a.createElement(V,{weapons:e.model.weapons,phase:"shooting",userStrength:e.model.stats.strength}),r.a.createElement(x,{abilities:e.model.abilities,phase:"shooting"})),r.a.createElement(E.a,{sm:"auto"},r.a.createElement(T,{name:"BS",value:"".concat(e.model.stats.ballistic_skill),secondaryValue:"+"}),r.a.createElement(T,{name:"T",value:"".concat(e.model.stats.toughness)})),r.a.createElement(E.a,{sm:"auto"},r.a.createElement(T,{name:"Sv",value:"".concat(e.model.stats.save),secondaryValue:"+"}),e.model.stats.invulnerable_save?r.a.createElement(T,{name:"Inv",value:"".concat(e.model.stats.invulnerable_save),secondaryValue:"+"}):r.a.createElement(r.a.Fragment,null)))}function D(e){return r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(C,{model:e.model}),r.a.createElement(V,{weapons:e.model.weapons,phase:"fight",userStrength:e.model.stats.strength}),r.a.createElement(x,{abilities:e.model.abilities,phase:"fight"})),r.a.createElement(E.a,{sm:"auto"},r.a.createElement(T,{name:"A",value:"".concat(e.model.stats.attacks),secondaryValue:e.model.stats.additional_attacks?"+".concat(e.model.stats.additional_attacks):null}),r.a.createElement(T,{name:"T",value:"".concat(e.model.stats.toughness)})),r.a.createElement(E.a,{sm:"auto"},r.a.createElement(T,{name:"WS",value:"".concat(e.model.stats.weapon_skill),secondaryValue:"+"}),r.a.createElement(T,{name:"Sv",value:"".concat(e.model.stats.save),secondaryValue:"+"}),e.model.stats.invulnerable_save?r.a.createElement(T,{name:"Inv",value:"".concat(e.model.stats.invulnerable_save),secondaryValue:"+"}):r.a.createElement(r.a.Fragment,null)))}function M(e){return r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(C,{model:e.model}),r.a.createElement(x,{abilities:e.model.abilities,phase:"morale"})),r.a.createElement(E.a,{sm:"auto"},r.a.createElement(T,{name:"Ld",value:"".concat(e.model.stats.leadership)})))}var z=a(280);function H(e){return r.a.createElement(z.a,{variant:"primary",className:"d-print-none",onClick:e.onClose},"Close")}var L=a(26);var U=function(e){var t=L.sortBy(e.models,(function(e){return[null==e.category,e.category,e.type]}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{background:"black",color:"white",padding:"10px",width:"100%",textTransform:"capitalize",display:"flex"}},r.a.createElement(E.a,null,e.name),r.a.createElement(E.a,{style:{flexGrow:0,textAlign:"right"}},r.a.createElement("small",null,e.points,"pts")),r.a.createElement(E.a,{style:{flexGrow:0,textAlign:"right"}},r.a.createElement(H,{onClose:e.onClose}))),r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(B,{model:e})}))),r.a.createElement(y,{name:"movement"},t.map((function(e){return r.a.createElement(_,{model:e})}))),L.some(t,F)&&r.a.createElement(y,{name:"psychic"},t.map((function(e){return F(e)&&r.a.createElement(j,{model:e})}))),r.a.createElement(y,{name:"shooting"},t.map((function(e){return function(e){return!isNaN(e.stats.ballistic_skill)&&e.weapons.filter((function(e){return"Melee"!==e.type})).length>0}(e)&&r.a.createElement(I,{model:e})}))),r.a.createElement(y,{name:"fight"},t.map((function(e){return r.a.createElement(D,{model:e})}))),r.a.createElement(y,{name:"morale"},t.map((function(e){return r.a.createElement(M,{model:e})}))))},G=a(281),K=a(37),J=a.n(K),q=a(75),$=a(76),Q=a(78),X=a(150).DOMParser,Y=a(154).useNamespaces({roster:"http://www.battlescribe.net/schema/rosterSchema"}),Z=a(26),ee=a(190)([]),te=function(e,t){var a=Y("roster:profiles/roster:profile[@typeName='Model']//roster:characteristic[@name='".concat(e,"']"),t);return a.length>0?parseInt(a[0].childNodes[0].nodeValue):""},ae=function(e,t,a){var n=Y("roster:characteristics/roster:characteristic[@name='".concat(e,"']"),t);return n.length>0?a?parseInt(n[0].childNodes[0].nodeValue):n[0].childNodes[0].nodeValue:""},ne=function(e){var t=Y(".//roster:costs/roster:cost[@name='pts']",e);return Z.sumBy(t,(function(e){return parseInt(e.getAttribute("value"))}))},re=function(e){var t=[];return/attacks characteristic/i.test(e)&&t.push("fight"),/strength characteristic/i.test(e)&&t.push("fight"),/ ranged /i.test(e)&&t.push("shooting"),/fight phase/i.test(e)&&t.push("fight"),/ charge/i.test(e)&&t.push("movement"),/ advance /i.test(e)&&t.push("movement"),/ move /i.test(e)&&t.push("movement"),/psychic/i.test(e)&&t.push("psychic"),/ shoot/i.test(e)&&t.push("shooting"),/obscured/i.test(e)&&t.push("shooting"),/nerve/i.test(e)&&t.push("morale"),/leadership/i.test(e)&&t.push("morale"),/ hit roll/i.test(e)&&t.push("fight")&&t.push("shooting"),/ reserve/i.test(e)&&t.push("movement"),Z.uniq(t).sort()},le=function(e){var t=Y("roster:description",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:re(t)}},oe=function(e){var t=Y(".//roster:characteristic[@name='Description']",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:re(t)}},se=function(e){var t=Y(".//roster:characteristic[@name='Ability']",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:re(t)}},ce=function(e){var t=Y(".//roster:characteristic[@name='Psychic Power']",e)[0].childNodes[0].nodeValue,a=t.match(/warp charge value of ([0-9]+)\.(.*)/),n=null;return a.length>2&&(n=parseInt(a[1]),t=a[2]),{name:e.getAttribute("name"),charge:n,description:t}},ie=function(e){var t=/model has a ([0-9]{1})\+ invulnerable save/,a=Z.map(e,(function(e){var a=e.description.match(t);return a?parseInt(a[1]):null}));return Z.min(a)},me=function(e){var t=Y("//roster:force/roster:rules/roster:rule",e).map(le),a=Y(".//roster:profile[@typeName='Wargear']",e).map(se),n=Y("roster:selections/roster:selection[roster:selections/roster:selection/roster:profiles]",e),r=Y(".//roster:profile[@typeName='Ability']",e).map(oe).concat(t).concat(a),l={movement:te("M",e),weapon_skill:te("WS",e),ballistic_skill:te("BS",e),strength:te("S",e),toughness:te("T",e),wounds:te("W",e),attacks:te("A",e),leadership:te("Ld",e),save:te("Sv",e),invulnerable_save:ie(r)},o={name:"Bare fists",range:"-",type:"Melee",strength:l.strength,armourPiercing:0,damage:1,abilities:"Default close combat weapon available to all models"},s=Y(".//roster:profile[@typeName='Weapon']",e).map((function(e){return function(e,t){var a=ae("S",e,!1);"User"===a&&(a=t);var n=/x([0-9]+)/i.exec(a);return n&&(a=t*parseInt(n[1])),(n=/\+([0-9]+)/i.exec(a))&&(a=t+parseInt(n[1])),{name:e.getAttribute("name"),range:ae("Range",e,!0),type:ae("Type",e,!1),strength:a,armourPiercing:ae("AP",e,!0),damage:ae("D",e,!1),abilities:ae("Abilities",e,!1)}}(e,l.strength)})).concat([o]);l.additional_attacks=function(e,t){var a=Z.map(e,(function(e){return e.abilities})).concat(Z.map(t,(function(e){return e.description}))),n=/ ([0-9]|an) additional attack|Add ([0-9]{1}) to this model's Attacks characteristic/,r=Z.map(a,(function(e){var t=e.match(n);return t?"an"===t[1]?1:parseInt(t[1]||t[2]):null}));return Z.sum(r)}(s,r);var c=Y("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Psychic Power']",e).map(ce),i=Y("roster:categories/roster:category[@primary='true']",e)[0].getAttribute("name"),m=Y("roster:categories/roster:category[@primary='false' and starts-with(@name,'Faction: ')]",e),u=Y("roster:categories/roster:category[@primary='false' and not(starts-with(@name,'Faction: '))]",e).map((function(e){return e.getAttribute("name")}));Z.remove(u,(function(e){return"Model"===e}));var d={name:e.getAttribute("customName"),type:e.getAttribute("name"),category:"Non-specialist"===i?null:i,stats:l,abilities:r,weapons:s,psychicPowers:c,specialism:n.length>0?n[0].getAttribute("name"):null,faction:m.length>0?m[0].getAttribute("name").split(": ",2)[1]:null,keywords:u,points:ne(e)};return Object(Q.a)({},d,{hash:ee.hash(d)})},ue=function(e){var t,a=[],n=(new X).parseFromString(e),r=Y("/roster:roster",n)[0].getAttribute("name"),l=Object($.a)(Y("//roster:force/roster:categories/roster:category",n));try{for(l.s();!(t=l.n()).done;){var o,s=t.value.getAttribute("entryId"),c=Object($.a)(Y("//roster:selection[@type='model' and roster:categories/roster:category/@entryId='".concat(s,"']"),n));try{for(c.s();!(o=c.n()).done;){var i=o.value;a.push(me(i))}}catch(d){c.e(d)}finally{c.f()}}}catch(d){l.e(d)}finally{l.f()}var m=Z.sumBy(a,(function(e){return e.points})),u=Z.groupBy(a,(function(e){return e.hash}));return{name:r,points:m,models:Z.map(u,(function(e){return Object(Q.a)({},e[0],{count:e.length})}))}},de=a(272),pe=function(e){return function(e){return"P"!==e[0]?Promise.resolve(e):(new de).loadAsync(e).then((function(e){return e.file(/[^/]+\.ros/)[0].async("string")}))}(e).then(ue)},he=function(){var e=Object(q.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new FileReader,e.abrupt("return",new Promise((function(e,n){a.onerror=function(){a.abort(),n(new DOMException("Problem parsing input file."))},a.onloadend=Object(q.a)(J.a.mark((function t(){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(pe(a.result));case 1:case"end":return t.stop()}}),t)}))),a.readAsBinaryString(t)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ee=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;Object(s.a)(this,a),n=t.call(this,e);var r={name:null,points:0,models:[]};return n.state=r,n.handleUpload=function(e){var t;(t=e,he(t[0])).then((function(e){n.setState(e)}))},n.onClose=function(){n.setState(r)},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(G.a,{fluid:"lg"},0===this.state.models.length?r.a.createElement(v,{onUpload:this.handleUpload}):r.a.createElement(U,{points:this.state.points,name:this.state.name,models:this.state.models,onClose:this.onClose}))}}]),a}(r.a.Component),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(Ee,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/scriptorum",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/scriptorum","/service-worker.js");ge?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):fe(t,e)}))}}()}},[[141,1,2]]]);
//# sourceMappingURL=main.6604ddb4.chunk.js.map