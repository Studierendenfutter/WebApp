(this["webpackJsonpstudierendenfutter-frontend"]=this["webpackJsonpstudierendenfutter-frontend"]||[]).push([[0],{32:function(e,t,n){e.exports=n(68)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},62:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(34),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(19),l=n(10),i=n(8),u=n(3);n(35);function s(e){var t=e.title,n=e.children;return r.a.createElement("div",{className:"sf-funnel-step"},r.a.createElement("h1",{className:"sf-funnel-step-title"},t),n)}n(36);function o(e){var t=e.percent,n=void 0===t?0:t;return r.a.createElement("div",{className:"sf-progress-bar-wrapper"},r.a.createElement("label",{className:"sf-progress-bar-label",style:{marginLeft:n/2+"%"}},n.toFixed(0)," %"),r.a.createElement("div",{className:"sf-progress-bar",style:{width:n+"%"}}))}n(37);function m(e){var t=e.label,n=e.inputProps,a=e.onClick;return r.a.createElement("label",{class:"sf-checkmark-container"},r.a.createElement("input",Object.assign({type:"sf-checkmark-checkbox"},n,{onClick:a})),r.a.createElement("span",{class:"sf-checkmark-checkmark"}),t)}var d=n(1),f=n.n(d),p=n(4),h=n(9),E=n.n(h);function g(e){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var b={BACKEND_URL:"http://api.studierendenfutter.de:8000"},y=b.BACKEND_URL+"/userCategories";function k(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(y);case 2:if(t=e.sent,n={},t){e.next=7;break}return r({}),e.abrupt("return");case 7:for(a=0;a<t.length;a++)n[t[a].name]=t[a].id;r(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n}function x(e,t){return E.a.post(e,t)}var w=b.BACKEND_URL+"/users";function O(e){x(w,e)}function j(e){var t=Object.keys(e).map((function(t){return t+"="+e[t]})).join("&");return t?"?"+t:""}function C(e){var t=j(e);return g(b.BACKEND_URL+"/canteens"+t)}function N(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r}var L=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],A=["Gerichte mit Fleisch","Gerichte mit Fisch","Vegetarische Gerichte","Vegane Gerichte"],I={students:"Preis f\xfcr Studierende",employees:"Preis f\xfcr Besch\xe4ftigte der Universit\xe4t",other:"Preis f\xfcr Nichtstudierende"},B={canteen:"Mensen",other:"Andere",bistro:"Bistros"};n(56),n(57);function D(e){var t=e.label,n=e.inputProps,a=e.onClick;return r.a.createElement("label",{class:"sf-radio-button-container"},r.a.createElement("input",Object.assign({type:"sf-radio-button-checkbox"},n,{onClick:a})),r.a.createElement("span",{class:"sf-radio-button-checkmark"}),t)}function M(){var e=Object(a.useState)({email:"",days:[!0,!0,!0,!0,!0,!0],semesterBreaks:!0,meals:[!0,!0,!0,!0],places:[!0,!0,!0],userCategoryId:1,name:"",city:"M\xfcnster"}),t=Object(u.a)(e,2),n=t[0],d=t[1],f=N({city:n.city});Object(a.useEffect)((function(){if(!n.canteens&&f){var e=f.reduce((function(e,t){return e[t.id]=!0,e}),{});d(Object(i.a)({},n,{canteens:e}))}}),[f,d]);var p=Object(a.useMemo)((function(){return f?f.reduce((function(e,t){var n=Object(i.a)({},e);return t.type?(n[t.type]||(n[t.type]=[]),n[t.type].push(t),n):e}),{}):{}}),[f]),h=k(),E=Object(a.useState)(0),g=Object(u.a)(E,2),v=g[0],b=g[1],y=function(){b(v+1)},x=function(e,t){d(Object(i.a)({},n,Object(l.a)({},e,t)))},w=r.a.createElement("button",{className:"sf-funnel-next-button",onClick:y},"Weiter");return h?r.a.createElement("div",{className:"sf-funnel"},0===v&&r.a.createElement(s,{title:"Hey lass uns loslegen! Wie m\xf6chtest du dich anmelden?"},r.a.createElement("div",null,r.a.createElement("button",{className:"sf-funnel-big-button",onClick:y,style:{marginRight:"2em"}},"In 7 Fragen schnell zum ",r.a.createElement("br",null),"Individuellen Lunchletter"),r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){b(99)}},"Direkt anmelden ohne ",r.a.createElement("br",null),"individuelle Einstellungen"))),1===v&&r.a.createElement(s,{title:"Alles klar: Verr\xe4tst du uns zuerst, an welche Mail-Adresse wir den Lunchletter schicken sollen?"},r.a.createElement("input",{type:"text",value:n.email,onChange:function(e){x("email",e.target.value)},placeholder:"ich.habe@hunger.de"}),w),2===v&&r.a.createElement(s,{title:"Perfekt du bekommst den Lunchletter an ".concat(n.email,"! An welchen Tagen m\xf6chtest du den Lunchletter haben?")},r.a.createElement("div",null,L.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,onClick:function(){console.log("toggle"),function(e){var t=Object(c.a)(n.days);t[e]=!t[e],x("days",t)}(t)},inputProps:{type:"checkbox",key:e,checked:n.days[t]}}))}))),w),3===v&&r.a.createElement(s,{title:"Auch in den Semesterferien?"},r.a.createElement("div",null,r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){x("semesterBreaks",!0),y()},style:{marginRight:"2em"}},"Ja"),r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){x("semesterBreaks",!1),y()}},"Nein"))),4===v&&r.a.createElement(s,{title:"Ist notiert. Welche Gerichte sollen wir in deinen pers\xf6nlichen Lunchletter aufnehmen?"},r.a.createElement("div",null,A.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,inputProps:{type:"checkbox",key:e,checked:n.meals[t]},onClick:function(){!function(e){var t=Object(c.a)(n.meals);t[e]=!t[e],x("meals",t)}(t)}}))}))),w),5===v&&r.a.createElement(s,{title:"Wunderbar. F\xfcr welche Orte m\xf6chtest du das Mittagsangebot angezeigt bekommen? Du kannst dies auch noch genauer festlegen:"},r.a.createElement("div",null,Object.keys(p).map((function(e){var t=p[e].reduce((function(e,t){return e||n.canteens&&n.canteens[t.id]}),!1);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m,{onClick:function(){return function(e,t){var a=n.canteens;for(var r in p[e])a[p[e][r].id]=t;d(Object(i.a)({},n,{canteens:a}))}(e,!t)},label:B[e],inputProps:{type:"checkbox",checked:t}})),r.a.createElement("div",{className:"sf-funnel-canteens-wrapper"},t&&p[e].map((function(e){return r.a.createElement("div",null,r.a.createElement(m,{inputProps:{type:"checkbox",checked:n.canteens&&n.canteens[e.id]},onClick:function(){return function(e,t){var a=n.canteens;a[e]=t,d(Object(i.a)({},n,{canteens:a}))}(e.id,!n.canteens[e.id])},label:e.name}))}))))}))),w),6===v&&r.a.createElement(s,{title:"Super, wir haben es fast geschafft. Jetzt m\xfcssen wir nur noch wissen, welchen Preis wir dir f\xfcr die Mittagsgerichte anzeigen sollen:"},r.a.createElement("div",null,Object.keys(I).map((function(e){return r.a.createElement("div",null,r.a.createElement(D,{inputProps:{type:"radio",key:e,checked:h[e]===n.userCategoryId},onClick:function(){return x("userCategoryId",h[e])},label:I[e]}))}))),w),7===v&&r.a.createElement(s,{title:"Fertig, wir haben deinen Lunchletter konfiguriert. Sehr gerne w\xfcrden wir dich auch mit Namen ansprechen:"},r.a.createElement("input",{type:"text",placeholder:"Wie hei\xdft du?",onChange:function(e){return x("name",e.target.value)}}),r.a.createElement("label",null,"Wir verwenden deinen Namen ausschlie\xdflich f\xfcr die Personalisierung deiner Mails."),r.a.createElement("button",{onClick:function(){O(n),y()},className:"sf-funnel-next-button"},"Weiter")),8===v&&r.a.createElement(s,{title:"Cool ".concat(n.name,"! Wir haben dir gerade eine Best\xe4tigungsmail gesendet. Bitte best\xe4tige den\n        Link um ab sofort den Lunchletter zu erhalten.")}),99===v&&r.a.createElement(s,{title:"Flott zu deinem Lunchletter: Dann ben\xf6tigen wir nur noch deine Mailadresse:"},r.a.createElement("input",{type:"text",value:n.email,onChange:function(e){x("email",e.target.value)}}),r.a.createElement("button",{onClick:function(){O(n),b(8)}},"Weiter")),r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(o,{percent:100*Math.min(9,v+1)/9}))):r.a.createElement("div",null)}var S=n(31),_=n(2);function P(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}function R(){var e=P("uId"),t=P("code");return Object(a.useEffect)((function(){!function(e,t){x(b.BACKEND_URL+"/users/"+e+"/confirm",{code:t})}(e,t)})),r.a.createElement("div",null,"Confirmed")}function F(e){var t=e.uId,n=e.code;return g(b.BACKEND_URL+"/users/"+t+"/settings?code="+n)}function U(e,t){var n=e.userId,a=e.code;!function(e,t){E.a.put(e,t)}(b.BACKEND_URL+"/users/"+n+"/settings",{code:a,settings:t})}function z(e,t){return g(b.BACKEND_URL+"/users/"+e+"/canteens?code="+t)}function K(e,t){var n=t.userId,a=t.code;return x(b.BACKEND_URL+"/users/"+n+"/canteens",{code:a,canteenId:e})}function W(e,t){return E.a.delete(e,{data:t})}function G(e,t){var n=t.userId,a=t.code;return W(b.BACKEND_URL+"/users/"+n+"/canteens",{code:a,canteenIds:e})}n(58);var J=["mondays","tuesdays","wednesdays","thursdays","fridays","saturdays"],V=["meat_meals","fish_meals","vegetarian_meals","vegan_meals"];function H(){var e=P("uId"),t=P("code"),n=function(e,t){var n=Object(a.useState)({}),r=Object(u.a)(n,2),c=r[0],l=r[1],i=Object(a.useState)(!0),s=Object(u.a)(i,2),o=s[0],m=s[1];return Object(a.useEffect)((function(){function n(){return(n=Object(p.a)(f.a.mark((function n(){var a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F({uId:e,code:t});case 2:a=n.sent,l(a),m(!1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),[c,function(n){function a(){return(a=Object(p.a)(f.a.mark((function a(){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(n),a.next=3,U({userId:e,code:t},n);case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}(),l(n)},o]}(e,t),c=Object(u.a)(n,3),o=c[0],d=c[1],h=c[2],E=function(e,t){var n=Object(a.useState)({}),r=Object(u.a)(n,2),c=r[0],l=r[1],i=function(){var n=Object(p.a)(f.a.mark((function n(){var a,r,c,i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z(e,t);case 2:if(a=n.sent,r={},a){n.next=7;break}return l({}),n.abrupt("return");case 7:for(c in a)i=a[c],r[i.canteen_id]=i;l(r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),[c,function(){var n=Object(p.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Array.isArray(a)||(a=[a]),n.next=3,K(a,{userId:e,code:t});case 3:i();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),function(){var n=Object(p.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Array.isArray(a)||(a=[a]),n.next=3,G(a,{userId:e,code:t});case 3:i();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()]}(e,t),g=Object(u.a)(E,3),v=g[0],b=g[1],y=g[2];console.log(v);var x=N({city:"M\xfcnster"}),w=Object(a.useMemo)((function(){return x?x.reduce((function(e,t){var n=Object(i.a)({},e);return t.type?(n[t.type]||(n[t.type]=[]),n[t.type].push(t),n):e}),{}):{}}),[x]),O=k(),j=function(e,t){d(Object(i.a)({},o,Object(l.a)({},e,t)))},C=Object(a.useMemo)((function(){return J.map((function(e){return o[e]}))}),[o]);return h?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"sf-settings"},r.a.createElement(s,{title:"An welchen Tagen m\xf6chtest du den Lunchletter erhalten?"},r.a.createElement("div",null,L.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,onClick:function(){console.log("toggle"),function(e){d(Object(i.a)({},o,Object(l.a)({},J[e],!o[J[e]])))}(t)},inputProps:{type:"checkbox",key:e,checked:C[t]}}))})))),r.a.createElement(s,{title:"Welche Gerichte sollen wir in deinen pers\xf6nlichen Lunchletter aufnehmen?"},r.a.createElement("div",null,A.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,inputProps:{type:"checkbox",key:e,checked:o[V[t]]},onClick:function(){!function(e){d(Object(i.a)({},o,Object(l.a)({},V[e],!o[V[e]])))}(t)}}))})))),r.a.createElement(s,{title:"F\xfcr welche Orte m\xf6chtest du das Mittagsangebot angezeigt bekommen?"},r.a.createElement("div",null,Object.keys(w).map((function(e){var t=w[e].reduce((function(e,t){return e||v&&v[t.id]}),!1);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m,{onClick:function(){return function(e,t){var n=[];for(var a in w[e])n.push(w[e][a].id);t?b(n):y(n)}(e,!t)},label:B[e],inputProps:{type:"checkbox",checked:t}})),r.a.createElement("div",{className:"sf-funnel-canteens-wrapper"},t&&w[e].map((function(e){return r.a.createElement("div",null,r.a.createElement(m,{inputProps:{type:"checkbox",checked:v&&!!v[e.id]},onClick:function(){return t=e.id,void(!v[e.id]?b(t):y(t));var t},label:e.name}))}))))})))),r.a.createElement(s,{title:"Welchen Preis sollen wir dir f\xfcr die Mittagsgerichte anzeigen?"},r.a.createElement("div",null,Object.keys(I).map((function(e){return r.a.createElement("div",null,r.a.createElement(D,{inputProps:{type:"radio",key:e,checked:O[e]===o.user_category_id},onClick:function(){return j("userCategoryId",O[e])},label:I[e]}))})))),r.a.createElement(s,{title:"Dein Name:"},r.a.createElement("input",{type:"text",placeholder:"Wie hei\xdft du?",onChange:function(e){return j("name",e.target.value)},value:o.name})),r.a.createElement("div",{className:"sf-settings-buttons"},r.a.createElement("button",{className:"sf-settings-button"},"Speichern"),r.a.createElement("a",{className:"sf-settings-cancel-link",href:"/cancel?uId="+e+"&code="+t},"Abmelden")))}function T(){var e=P("uId"),t=P("code");return Object(a.useEffect)((function(){!function(e,t){W(b.BACKEND_URL+"/users/"+e,{code:t})}(e,t)})),r.a.createElement("div",null,"Canceled")}var Y=n(15);function $(e,t){var n=j(t);return g(b.BACKEND_URL+"/canteens/"+e+"/meals"+n)}function q(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate();return t}(),t=N({city:"M\xfcnster"}),n=Object(a.useState)({}),c=Object(u.a)(n,2),l=c[0],i=c[1];return Object(a.useEffect)((function(){function n(){return(n=Object(p.a)(f.a.mark((function t(n){var a,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a={},t.t0=f.a.keys(n);case 2:if((t.t1=t.t0()).done){t.next=10;break}return r=t.t1.value,t.next=6,$(n[r].id,{date:e});case 6:c=t.sent,a[n[r].id]=c,t.next=2;break;case 10:i(a);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t&&function(e){n.apply(this,arguments)}(t)}),[t,e]),r.a.createElement("div",null,r.a.createElement("div",null,t&&t.map((function(e){var t=l[e.id]&&l[e.id].length>0;return r.a.createElement("div",null,r.a.createElement("h2",{style:{color:t?"green":"red"}},e.name),t?r.a.createElement("div",null,l[e.id].map((function(e){return r.a.createElement("div",null,e.name)}))):r.a.createElement("div",null,"Heute keine Gerichte verf\xfcgbar"))}))))}function Q(e,t){return g(b.BACKEND_URL+"/users/"+e+"/meals?code="+t)}n(62);var X="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Cow-2@2x.png",Z="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Fish.png",ee="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegan.png",te="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegetarian.png";var ne=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function ae(){var e=P("uId"),t=P("code"),n=Object(a.useState)([]),c=Object(u.a)(n,2),l=c[0],i=c[1];return Object(a.useEffect)((function(){function n(){return(n=Object(p.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=i,n.next=3,Q(e,t);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"sf-meals",style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{width:"400px"}},r.a.createElement("p",{style:{fontSize:"24px",fontFamily:'"Amatic SC Regular",garamond,sans-serif',textAlign:"center"}},"Hey,",r.a.createElement("br",null)," hier ist dein Mittagsmen\xfc ",r.a.createElement("br",null)," vom ",function(){var e=new Date;return e.getDate()+". "+ne[e.getMonth()]}()),r.a.createElement("div",null,l&&l.length<=0&&r.a.createElement("div",null,"Heute gibt es leider keine Gerichte die deinen Kriterien entsprechen."),l.map((function(e){return r.a.createElement("div",{class:"sf-email-canteen",style:{textAlign:"left"}},r.a.createElement("h4",{class:"sf-email-canteen-card-header",style:{marginTop:"10px",fontSize:"20px",marginBottom:"7px"}},e.name),Object.values(e.meals).map((function(e){return r.a.createElement("table",{class:"sf-email-meal",style:{marginLeft:"20px",marginBottom:"10px"}},r.a.createElement("tr",null,r.a.createElement("td",{class:"sf-email-meal-left",style:{width:"320px"}},r.a.createElement("p",null,e.name)),r.a.createElement("td",{class:"sf-email-meal-right",style:{width:"50px",textAlign:"center"}},r.a.createElement("p",null,e.price.toFixed(2).replace(".",",")," \u20ac"),r.a.createElement("img",{alt:"Meal Icon",style:{width:"20px"},src:(t=e.type,"vegetarian"===t?te:"vegan"===t?ee:"fish"===t?Z:X)}))));var t}),""))}),"")),r.a.createElement("div",{class:"sf-email-legend",style:{textAlign:"left"}},r.a.createElement("h4",{class:"sf-email-legend-title",style:{fontSize:"20px",marginBottom:"7px"}},"Legende"),r.a.createElement("table",{class:"sf-email-legend-points",style:{padding:"20px"}},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{alt:"cow",style:{width:"20px"},src:X})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Enth\xe4lt Fleisch"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:Z,alt:"fish"})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Enth\xe4lt Fisch"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:te})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Ist vegetarisch"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:ee})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Ist vegan")))))))}var re=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,null,r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/confirm"},r.a.createElement(R,null)),r.a.createElement(_.a,{path:"/cancel"},r.a.createElement(T,null)),r.a.createElement(_.a,{path:"/settings"},r.a.createElement(H,null)),r.a.createElement(_.a,{path:"/funnel"},r.a.createElement(M,null)),r.a.createElement(_.a,{path:"/canteens"},r.a.createElement(q,null)),r.a.createElement(_.a,{path:"/meals"},r.a.createElement(ae,null)))))},ce=document.getElementById("root");ce.hasChildNodes()?Object(Y.hydrate)(r.a.createElement(re,null),ce):Object(Y.render)(r.a.createElement(re,null),ce),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.7d414a44.chunk.js.map