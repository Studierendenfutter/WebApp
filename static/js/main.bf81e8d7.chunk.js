(this["webpackJsonpstudierendenfutter-frontend"]=this["webpackJsonpstudierendenfutter-frontend"]||[]).push([[0],{32:function(e,t,n){e.exports=n(65)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},55:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(34),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(19),l=n(9),i=n(6),u=n(3);n(35);function s(e){var t=e.title,n=e.children;return r.a.createElement("div",null,r.a.createElement("h1",{className:"sf-funnel-step-title"},t),n)}n(36);function o(e){var t=e.percent,n=void 0===t?0:t;return r.a.createElement("div",{className:"sf-progress-bar-wrapper"},r.a.createElement("label",{className:"sf-progress-bar-label",style:{marginLeft:n/2+"%"}},n.toFixed(0)," %"),r.a.createElement("div",{className:"sf-progress-bar",style:{width:n+"%"}}))}var d=n(2),m=n.n(d),f=n(4),h=n(10),p=n.n(h);function E(e){return g.apply(this,arguments)}function g(){return(g=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var v={BACKEND_URL:"http://api.studierendenfutter.de:8000"},b=v.BACKEND_URL+"/userCategories";function y(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(b);case 2:if(t=e.sent,n={},t){e.next=7;break}return r({}),e.abrupt("return");case 7:for(a=0;a<t.length;a++)n[t[a].name]=t[a].id;r(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n}function k(e,t){return p.a.post(e,t)}var w=v.BACKEND_URL+"/users";function j(e){k(w,e)}function O(e){var t=Object.keys(e).map((function(t){return t+"="+e[t]})).join("&");return t?"?"+t:""}function x(e){var t=O(e);return E(v.BACKEND_URL+"/canteens"+t)}function C(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(f.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r}var L=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],I=["Gerichte mit Fleisch","Gerichte mit Fisch","Vegetarische Gerichte","Vegane Gerichte"],A={students:"Preis f\xfcr Studierende",employees:"Preis f\xfcr Besch\xe4ftigte der Universit\xe4t",other:"Preis f\xfcr Nichtstudierende"};n(55);function N(){var e=Object(a.useState)({email:"",days:[!0,!0,!0,!0,!0,!0],semesterBreaks:!0,meals:[!0,!0,!0,!0],places:[!0,!0,!0],userCategoryId:1,name:"",city:"M\xfcnster"}),t=Object(u.a)(e,2),n=t[0],d=t[1],m=C({city:n.city});Object(a.useEffect)((function(){if(!n.canteens&&m){var e=m.reduce((function(e,t){return e[t.id]=!0,e}),{});d(Object(i.a)({},n,{canteens:e}))}}),[m,d]);var f=Object(a.useMemo)((function(){return m?m.reduce((function(e,t){var n=Object(i.a)({},e);return t.type?(n[t.type]||(n[t.type]=[]),n[t.type].push(t),n):e}),{}):{}}),[m]),h=y(),p=Object(a.useState)(0),E=Object(u.a)(p,2),g=E[0],v=E[1],b=function(){v(g+1)},k=function(e,t){d(Object(i.a)({},n,Object(l.a)({},e,t)))},w=function(e){var t=Object(c.a)(n.days);t[e]=!t[e],k("days",t)},O=function(e){var t=Object(c.a)(n.meals);t[e]=!t[e],k("meals",t)},x=function(e,t){var a=n.canteens;for(var r in f[e])a[f[e][r].id]=t;d(Object(i.a)({},n,{canteens:a}))},N=function(e,t){var a=n.canteens;a[e]=t,d(Object(i.a)({},n,{canteens:a}))},M=r.a.createElement("button",{onClick:b},"Weiter");return h?r.a.createElement("div",{className:"sf-funnel"},0===g&&r.a.createElement(s,{title:"Hey lass uns loslegen! Wie m\xf6chtest du dich anmelden?"},r.a.createElement("button",{onClick:b},"In 7 Fragen schnell zum Individuellen Lunchletter"),r.a.createElement("button",{onClick:function(){v(99)}},"Direkt anmelden ohne individuelle Einstellungen")),1===g&&r.a.createElement(s,{title:"Alles klar: Verr\xe4tst du uns zuerst, an welche Mail-Adresse wir den Lunchletter schicken sollen?"},r.a.createElement("input",{type:"text",value:n.email,onChange:function(e){k("email",e.target.value)}}),M),2===g&&r.a.createElement(s,{title:"Perfekt du bekommst den Lunchletter an ".concat(n.email,"! An welchen Tagen m\xf6chtest du den Lunchletter haben?")},L.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",key:e,checked:n.days[t],onClick:function(){w(t)}})," ",r.a.createElement("label",{onClick:function(){w(t)}},e))})),M),3===g&&r.a.createElement(s,{title:"Auch in den Semesterferien?"},r.a.createElement("button",{onClick:function(){k("semesterBreaks",!0),b()}},"ja"),r.a.createElement("button",{onClick:function(){k("semesterBreaks",!1),b()}},"nein")),4===g&&r.a.createElement(s,{title:"Ist notiert. Welche Gerichte sollen wir in deinen pers\xf6nlichen Lunchletter aufnehmen?"},I.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",key:e,checked:n.meals[t],onClick:function(){O(t)}})," ",r.a.createElement("label",{onClick:function(){O(t)}},e))})),M),5===g&&r.a.createElement(s,{title:"Wunderbar. F\xfcr welche Orte m\xf6chtest du das Mittagsangebot angezeigt bekommen? Du kannst dies auch noch genauer festlegen:"},Object.keys(f).map((function(e){var t=f[e].reduce((function(e,t){return e||n.canteens&&n.canteens[t.id]}),!1);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:t,onChange:function(t){return x(e,t.target.checked)}}),r.a.createElement("label",{onClick:function(){return x(e,!t)}},e)),r.a.createElement("div",{className:"sf-funnel-canteens-wrapper"},t&&f[e].map((function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:n.canteens&&n.canteens[e.id],onChange:function(t){return N(e.id,t.target.checked)}}),r.a.createElement("label",{onClick:function(){return N(e.id,!n.canteens[e.id])}},e.name))}))))})),M),6===g&&r.a.createElement(s,{title:"Super, wir haben es fast geschafft. Jetzt m\xfcssen wir nur noch wissen, welchen Preis wir dir f\xfcr die Mittagsgerichte anzeigen sollen:"},Object.keys(A).map((function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"radio",key:e,checked:h[e]===n.userCategoryId,onClick:function(){return k("userCategoryId",h[e])}}),r.a.createElement("label",{onClick:function(){return k("userCategoryId",h[e])}},A[e]))})),M),7===g&&r.a.createElement(s,{title:"Fertig, wir haben deinen Lunchletter konfiguriert. Sehr gerne w\xfcrden wir dich auch mit Namen ansprechen:"},r.a.createElement("input",{type:"text",placeholder:"Wie hei\xdft du?",onChange:function(e){return k("name",e.target.value)}}),r.a.createElement("label",null,"Wir verwenden deinen Namen ausschlie\xdflich f\xfcr die Personalisierung deiner Mails."),r.a.createElement("button",{onClick:function(){j(n),b()}},"Weiter")),8===g&&r.a.createElement(s,{title:"Cool ".concat(n.name,"! Wir haben dir gerade eine Best\xe4tigungsmail gesendet. Bitte best\xe4tige den\n        Link um ab sofort den Lunchletter zu erhalten.")}),99===g&&r.a.createElement(s,{title:"Flott zu deinem Lunchletter: Dann ben\xf6tigen wir nur noch deine Mailadresse:"},r.a.createElement("input",{type:"text",value:n.email,onChange:function(e){k("email",e.target.value)}}),r.a.createElement("button",{onClick:function(){j(n),v(8)}},"Weiter")),r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(o,{percent:100*Math.min(9,g+1)/9}))):r.a.createElement("div",null,"Hey")}var M=n(31),D=n(1);function B(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}function S(){var e=B("uId"),t=B("code");return Object(a.useEffect)((function(){!function(e,t){k(v.BACKEND_URL+"/users/"+e+"/confirm",{code:t})}(e,t)})),r.a.createElement("div",null,"Confirmed")}function _(e){var t=e.uId,n=e.code;return E(v.BACKEND_URL+"/users/"+t+"/settings?code="+n)}function F(e,t){return E(v.BACKEND_URL+"/users/"+e+"/canteens?code="+t)}function R(e,t){return p.a.delete(e,{data:t})}function z(e,t){var n=Object(a.useState)({}),r=Object(u.a)(n,2),c=r[0],l=r[1];Object(a.useEffect)((function(){(function(){var n=Object(f.a)(m.a.mark((function n(){var a,r,c,i;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F(e,t);case 2:if(a=n.sent,r={},a){n.next=7;break}return l({}),n.abrupt("return");case 7:for(c in a)i=a[c],r[i.canteen_id]=i;l(r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);return[c,function(n){!function(e,t){var n=t.userId,a=t.code;k(v.BACKEND_URL+"/users/"+n+"/canteens",{code:a,canteenId:e})}(n,{userId:e,code:t})},function(n){!function(e,t){var n=t.userId,a=t.code;R(v.BACKEND_URL+"/users/"+n+"/canteens",{code:a,canteenIds:e})}([n],{userId:e,code:t})}]}var U=["mondays","tuesdays","wednesdays","thursdays","fridays","saturdays"],W=["meat_meals","fish_meals","vegetarian_meals","vegan_meals"];function K(){var e=B("uId"),t=B("code"),n=function(e,t){var n=Object(a.useState)({}),r=Object(u.a)(n,2),c=r[0],l=r[1],i=Object(a.useState)(!0),s=Object(u.a)(i,2),o=s[0],d=s[1];return Object(a.useEffect)((function(){function n(){return(n=Object(f.a)(m.a.mark((function n(){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_({uId:e,code:t});case 2:a=n.sent,l(a),d(!1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),[c,l,o]}(e,t),c=Object(u.a)(n,3),o=c[0],d=c[1],h=c[2],p=z(e,t),E=Object(u.a)(p,3),g=E[0],v=E[1],b=E[2],k=C({city:"M\xfcnster"}),w=Object(a.useMemo)((function(){return k?k.reduce((function(e,t){var n=Object(i.a)({},e);return t.type?(n[t.type]||(n[t.type]=[]),n[t.type].push(t),n):e}),{}):{}}),[k]),j=function(e,t){var n=[];for(var a in w[e])n.push(w[e][a].id);t?v(n):b(n)},O=function(e,t){t?v(e):b(e)},x=y(),N=function(e,t){d(Object(i.a)({},o,Object(l.a)({},e,t)))},M=Object(a.useMemo)((function(){return U.map((function(e){return o[e]}))}),[o]),D=function(e){d(Object(i.a)({},o,Object(l.a)({},U[e],!o[U[e]])))},S=function(e){d(Object(i.a)({},o,Object(l.a)({},W[e],!o[W[e]])))};return h?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,r.a.createElement(s,{title:"An welche Mail-Adresse sollen wir den Lunchletter schicken ?"},r.a.createElement("input",{type:"text",value:o.email,onChange:function(e){N("email",e.target.value)}})),r.a.createElement(s,{title:"An welchen Tagen m\xf6chtest du den Lunchletter haben?"},L.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",key:e,checked:M[t],onClick:function(){D(t)}})," ",r.a.createElement("label",{onClick:function(){D(t)}},e))}))),r.a.createElement(s,{title:"Welche Gerichte sollen wir in deinen pers\xf6nlichen Lunchletter aufnehmen?"},I.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",key:e,checked:o[W[t]],onClick:function(){S(t)}})," ",r.a.createElement("label",{onClick:function(){S(t)}},e))}))),r.a.createElement(s,{title:"F\xfcr welche Orte m\xf6chtest du das Mittagsangebot angezeigt bekommen?"},Object.keys(w).map((function(e){var t=w[e].reduce((function(e,t){return e||g&&g[t.id]}),!1);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:t,onChange:function(t){return j(e,t.target.checked)}}),r.a.createElement("label",{onClick:function(){return j(e,!t)}},e)),r.a.createElement("div",{className:"sf-funnel-canteens-wrapper"},t&&w[e].map((function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:g&&!!g[e.id],onChange:function(t){return O(e.id,t.target.checked)}}),r.a.createElement("label",{onClick:function(){return O(e.id,!g[e.id])}},e.name))}))))}))),r.a.createElement(s,{title:"Welchen Preis sollen wir dir f\xfcr die Mittagsgerichte anzeigen?"},Object.keys(A).map((function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"radio",key:e,checked:x[e]===o.user_category_id,onClick:function(){return N("userCategoryId",x[e])}}),r.a.createElement("label",{onClick:function(){return N("userCategoryId",x[e])}},A[e]))}))),r.a.createElement(s,{title:"Dein Name:"},r.a.createElement("input",{type:"text",placeholder:"Wie hei\xdft du?",onChange:function(e){return N("name",e.target.value)},value:o.name})))}function G(){var e=B("uId"),t=B("code");return Object(a.useEffect)((function(){!function(e,t){R(v.BACKEND_URL+"/users/"+e,{code:t})}(e,t)})),r.a.createElement("div",null,"Canceled")}var P=n(15);function J(e,t){var n=O(t);return E(v.BACKEND_URL+"/canteens/"+e+"/meals"+n)}function H(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate();return t}(),t=C({city:"M\xfcnster"}),n=Object(a.useState)({}),c=Object(u.a)(n,2),s=c[0],o=c[1];return Object(a.useEffect)((function(){function n(e){return a.apply(this,arguments)}function a(){return(a=Object(f.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(n,{date:e});case 2:a=t.sent,o(Object(i.a)({},a,Object(l.a)({},n,a)));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(t)for(var r in t)n(t[r].id)}),[t,e]),r.a.createElement("div",null,r.a.createElement("div",null,t&&t.map((function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.name),s[e.id]&&s[e.id].length>0?r.a.createElement("div",null,s[e.id].map((function(e){return r.a.createElement("div",null,e.name)}))):r.a.createElement("div",null,"Heute keine Gerichte verf\xfcgbar"))}))))}function V(e,t){return E(v.BACKEND_URL+"/users/"+e+"/meals?code="+t)}n(59);var T="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Cow-2@2x.png",Y="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Fish.png",$="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegan.png",q="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegetarian.png";function Q(e){for(var t=0;t<e.length;t++){var n=e[t].toLowerCase();if("vegetarisch"===n)return q;if("vegan"===n)return $;if("fisch"===n)return Y}return T}var X=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function Z(){var e=B("uId"),t=B("code"),n=Object(a.useState)([]),c=Object(u.a)(n,2),l=c[0],i=c[1];return Object(a.useEffect)((function(){function n(){return(n=Object(f.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=i,n.next=3,V(e,t);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()})),r.a.createElement("div",{className:"sf-meals",style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{width:"400px"}},r.a.createElement("p",{style:{fontSize:"24px",fontFamily:'"Amatic SC Regular",garamond,sans-serif',textAlign:"center"}},"Hey,",r.a.createElement("br",null)," hier ist dein Mittagsmen\xfc ",r.a.createElement("br",null)," vom ",function(){var e=new Date;return e.getDate()+". "+X[e.getMonth()]}()),r.a.createElement("div",null,l&&l.length<=0&&r.a.createElement("div",null,"Heute gibt es leider keine Gerichte die deinen Kriterien entsprechen."),l.map((function(e){return r.a.createElement("div",{class:"sf-email-canteen",style:{textAlign:"left"}},r.a.createElement("h4",{class:"sf-email-canteen-card-header",style:{marginTop:"10px",fontSize:"20px",marginBottom:"7px"}},e.name),Object.values(e.meals).map((function(e){return r.a.createElement("table",{class:"sf-email-meal",style:{marginLeft:"20px",marginBottom:"10px"}},r.a.createElement("tr",null,r.a.createElement("td",{class:"sf-email-meal-left",style:{width:"320px"}},r.a.createElement("p",null,e.name)),r.a.createElement("td",{class:"sf-email-meal-right",style:{width:"50px",textAlign:"center"}},r.a.createElement("p",null,e.price.toFixed(2).replace(".",",")," \u20ac"),r.a.createElement("img",{alt:"Meal Icon",style:{width:"40px"},src:Q(e.categories)}))))}),""))}),"")),r.a.createElement("div",{class:"sf-email-legend",style:{textAlign:"left"}},r.a.createElement("h4",{class:"sf-email-legend-title",style:{fontSize:"20px",marginBottom:"7px"}},"Legende"),r.a.createElement("table",{class:"sf-email-legend-points",style:{padding:"20px"}},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{alt:"cow",style:{width:"40px"},src:T})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Enth\xe4lt Fleisch"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"40px"},src:Y,alt:"fish"})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Enth\xe4lt Fisch"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"40px"},src:q})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Ist vegetarisch"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"40px"},src:$})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Ist vegan")))))))}var ee=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(M.a,null,r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/confirm"},r.a.createElement(S,null)),r.a.createElement(D.a,{path:"/cancel"},r.a.createElement(G,null)),r.a.createElement(D.a,{path:"/settings"},r.a.createElement(K,null)),r.a.createElement(D.a,{path:"/funnel"},r.a.createElement(N,null)),r.a.createElement(D.a,{path:"/canteens"},r.a.createElement(H,null)),r.a.createElement(D.a,{path:"/meals"},r.a.createElement(Z,null)))))},te=document.getElementById("root");te.hasChildNodes()?Object(P.hydrate)(r.a.createElement(ee,null),te):Object(P.render)(r.a.createElement(ee,null),te),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.bf81e8d7.chunk.js.map