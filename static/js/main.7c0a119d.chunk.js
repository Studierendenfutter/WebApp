(this["webpackJsonpstudierendenfutter-frontend"]=this["webpackJsonpstudierendenfutter-frontend"]||[]).push([[0],{41:function(e,t,n){e.exports=n(79)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(43),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(26),l=n(17),i=n(15),u=n(2);n(44);function s(e){var t=e.title,n=e.children;return r.a.createElement("div",{className:"sf-funnel-step"},r.a.createElement("h1",{className:"sf-funnel-step-title"},t),n)}n(45);function o(e){var t=e.percent,n=void 0===t?0:t;return r.a.createElement("div",{className:"sf-progress-bar-wrapper"},r.a.createElement("label",{className:"sf-progress-bar-label",style:{marginLeft:n/2+"%"}},n.toFixed(0)," %"),r.a.createElement("div",{className:"sf-progress-bar",style:{width:n+"%"}}))}n(46);function m(e){var t=e.label,n=e.inputProps,a=e.onClick;return r.a.createElement("label",{class:"sf-checkmark-container"},r.a.createElement("input",Object.assign({type:"sf-checkmark-checkbox"},n,{onClick:a})),r.a.createElement("span",{class:"sf-checkmark-checkmark"}),t)}var d=n(1),f=n.n(d),h=n(4),p=n(16),E=n.n(p);function b(e){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var v={BACKEND_URL:"https://api.studierendenfutter.de"},k=v.BACKEND_URL+"/userCategories";function y(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(k);case 2:if(t=e.sent,n={},t){e.next=7;break}return r({}),e.abrupt("return");case 7:for(a=0;a<t.length;a++)n[t[a].name]=t[a].id;r(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n}function w(e,t){return E.a.post(e,t)}var x=v.BACKEND_URL+"/users";function C(e){w(x,e)}function j(e){var t=Object.keys(e).map((function(t){return t+"="+e[t]})).join("&");return t?"?"+t:""}function O(e){var t=j(e);return b(v.BACKEND_URL+"/canteens"+t)}function z(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(h.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r}var N=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],F=["Gerichte mit Fleisch","Gerichte mit Fisch","Vegetarische Gerichte","Vegane Gerichte"],D={students:"Preis f\xfcr Studierende",employees:"Preis f\xfcr Besch\xe4ftigte der Universit\xe4t",other:"Preis f\xfcr Nichtstudierende"},S={canteen:"Mensen",other:"Andere",bistro:"Bistros"},A=n(20);n(67),n(68);function L(e){var t=e.label,n=e.inputProps,a=e.onClick;return r.a.createElement("label",{class:"sf-radio-button-container"},r.a.createElement("input",Object.assign({type:"sf-radio-button-checkbox"},n,{onClick:a})),r.a.createElement("span",{class:"sf-radio-button-checkmark"}),t)}function M(){var e=Object(a.useState)({email:"",days:[!0,!0,!0,!0,!0,!0],semesterBreaks:!0,meals:[!0,!0,!0,!0],places:[!0,!0,!0],userCategoryId:1,name:"",city:"M\xfcnster"}),t=Object(u.a)(e,2),n=t[0],d=t[1],f=z({city:n.city}),h=Object(a.useState)(!0),p=Object(u.a)(h,2),E=p[0],b=p[1],g=Object(a.useState)(!0),v=Object(u.a)(g,2),k=v[0],w=v[1],x=Object(a.useState)(!0),j=Object(u.a)(x,2),O=j[0],M=j[1],B=Object(a.useState)(),I=Object(u.a)(B,2),_=I[0],P=I[1];Object(a.useEffect)((function(){if(!n.canteens&&f){var e=f.reduce((function(e,t){return e[t.id]=!0,e}),{});d(Object(i.a)({},n,{canteens:e}))}}),[f,d]);var V=function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n.email).toLowerCase())},K=Object(a.useMemo)((function(){return f?f.reduce((function(e,t){var n=Object(i.a)({},e);return t.type?(n[t.type]||(n[t.type]=[]),n[t.type].push(t),n):e}),{}):{}}),[f]),R=y(),U=Object(a.useState)(0),W=Object(u.a)(U,2),H=W[0],G=W[1],T=function(e){A.a.pageview(window.location.pathname+"/step"+e+window.location.search),G(e)},J=Object(a.useState)(!1),Z=Object(u.a)(J,2),$=Z[0],Y=Z[1],q=function(){T(H+1)},Q=function(e,t){d(Object(i.a)({},n,Object(l.a)({},e,t)))},X=r.a.createElement("button",{className:"sf-funnel-next-button",onClick:q},"Weiter"),ee=r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){T(H-1)}},"Zur\xfcck");return R?r.a.createElement("div",{className:"sf-funnel"},0===H&&r.a.createElement(s,{title:"Hier kannst du dich anmelden:"},r.a.createElement("div",{className:""},r.a.createElement("button",{className:"sf-funnel-big-button",onClick:q},"In 7 Fragen schnell zum ",r.a.createElement("br",null),"individuellen Lunchletter"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){T(99)}},"Direkt anmelden ohne ",r.a.createElement("br",null),"individuelle Einstellungen"),r.a.createElement("br",null),r.a.createElement("br",null))),1===H&&r.a.createElement(s,{title:"Alles klar: An welchen Tagen m\xf6chtest du deinen Lunchletter denn erhalten?"},r.a.createElement("div",null,N.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,onClick:function(){console.log("toggle"),function(e){var t=Object(c.a)(n.days);t[e]=!t[e],Q("days",t)}(t)},inputProps:{type:"checkbox",key:e,checked:n.days[t]}}))}))),r.a.createElement("div",null,ee,X)),2===H&&r.a.createElement(s,{title:"Auch in den Semesterferien?"},r.a.createElement("div",null,r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){Q("semesterBreaks",!0),q()},style:{marginRight:"2em"}},"Ja"),r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){Q("semesterBreaks",!1),q()}},"Nein")),ee),3===H&&r.a.createElement(s,{title:"Ist notiert. Welche Gerichte sollen wir in deinen pers\xf6nlichen Lunchletter aufnehmen?"},r.a.createElement("div",null,F.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,inputProps:{type:"checkbox",key:e,checked:n.meals[t]},onClick:function(){!function(e){var t=Object(c.a)(n.meals);t[e]=!t[e],Q("meals",t)}(t)}}))}))),r.a.createElement("div",null,ee,X)),4===H&&r.a.createElement(s,{title:"Wunderbar. F\xfcr welche Orte m\xf6chtest du das Mittagsangebot angezeigt bekommen? Du kannst dies auch noch genauer festlegen:"},r.a.createElement("div",null,Object.keys(K).map((function(e){var t=K[e].reduce((function(e,t){return e||n.canteens&&n.canteens[t.id]}),!1);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m,{onClick:function(){return function(e,t){var a=n.canteens;for(var r in K[e])a[K[e][r].id]=t;d(Object(i.a)({},n,{canteens:a}))}(e,!t)},label:S[e],inputProps:{type:"checkbox",checked:t}})),r.a.createElement("div",{className:"sf-funnel-canteens-wrapper"},t&&K[e].map((function(e){return r.a.createElement("div",null,r.a.createElement(m,{inputProps:{type:"checkbox",checked:n.canteens&&n.canteens[e.id]},onClick:function(){return function(e,t){var a=n.canteens;a[e]=t,d(Object(i.a)({},n,{canteens:a}))}(e.id,!n.canteens[e.id])},label:e.name}))}))))}))),!O&&r.a.createElement("label",null,"Bitte w\xe4hle mindestens ein Lokal aus."),r.a.createElement("div",null,ee,r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){0!==Object.values(n.canteens).filter((function(e){return e})).length?(q(),M(!0)):M(!1)}},"Weiter"))),5===H&&r.a.createElement(s,{title:"Super, wir haben es fast geschafft. Jetzt m\xfcssen wir nur noch wissen, welchen Preis wir dir f\xfcr die Mittagsgerichte anzeigen sollen:"},r.a.createElement("div",null,Object.keys(D).map((function(e){return r.a.createElement("div",null,r.a.createElement(L,{inputProps:{type:"radio",key:e,checked:R[e]===n.userCategoryId},onClick:function(){return Q("userCategoryId",R[e])},label:D[e]}))}))),r.a.createElement("div",null,ee,X)),6===H&&r.a.createElement(s,{title:"Fertig, wir haben deinen Lunchletter konfiguriert. Sehr gerne w\xfcrden wir dich auch mit Namen ansprechen:"},r.a.createElement("input",{type:"text",placeholder:"Wie hei\xdft du?",onChange:function(e){return Q("name",e.target.value)}}),r.a.createElement("label",null,"Wir verwenden deinen Namen ausschlie\xdflich f\xfcr die Personalisierung deiner Mails."),r.a.createElement("div",null,ee,r.a.createElement("button",{onClick:function(){q()},className:"sf-funnel-next-button"},"Weiter"))),7===H&&r.a.createElement(s,{title:"Zack".concat(n.name?" "+n.name:"",", das war's schon. Verr\xe4tst du uns noch, an welche Mail-Adresse wir deinen Lunchletter schicken sollen?")},r.a.createElement("input",{type:"text",value:n.email,onChange:function(e){Q("email",e.target.value.replace(" ",""))},placeholder:"ich.habe@hunger.de"}),!E&&r.a.createElement("label",null,"Bitte gib eine echte E-Mail-Adresse ein."),r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(m,{inputProps:{type:"checkbox",checked:$},label:r.a.createElement("span",{style:{fontSize:"16px"}},"Ich bin damit einverstanden, den Lunchletter per Mail zu erhalten und stimme daf\xfcr der Verarbeitung meiner personenbezogenen Daten gem\xe4\xdf der"," ",r.a.createElement("a",{href:"https://studierendenfutter.de/datenschutzerklaerung",target:"_blank",rel:"noopener noreferrer"},"Datenschutzerkl\xe4rung")," ","zu."),onClick:function(e){return Y(e.target.checked)}}),!k&&r.a.createElement("label",null,"Wir k\xf6nnen dich nur zum Lunchletter anmelden, wenn du der Verarbeitung deiner Daten zustimmst.")),r.a.createElement("div",null,ee,r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){V()?$?(P(H),q(),b(!0),w(!0),C(n)):w(!1):b(!1)}},"Weiter"))),8===H&&r.a.createElement(s,{title:"Cool".concat(n.name?" "+n.name:"","! Wir haben dir gerade eine Best\xe4tigungsmail an ").concat(n.email," gesendet. Bitte best\xe4tige den\n        Link um ab sofort den Lunchletter zu erhalten.")},r.a.createElement("p",null,"Keine Best\xe4tigungsmail erhalten? Das kannst du tun:",r.a.createElement("ul",null,r.a.createElement("li",null,"Entdeckst du hier einen Tippfehler: ",n.email,"?"," ",r.a.createElement("button",{className:"sf-button-link",onClick:function(){return T(_)}},"Springe zur\xfcck")," ","und korrigiere ihn schnell."),r.a.createElement("li",null,"Die Mail k\xf6nnte in deinem Spamordner gelandet sein. Vielleicht hilft ein Blick dort hinein."),r.a.createElement("li",null,"Auch nicht im Spam gefunden? Schreib uns an"," ",r.a.createElement("a",{href:"mailto:moin@studierendenfutter.de"},"moin@studierendenfutter.de")," ","und wir helfen dir gerne weiter.")))),99===H&&r.a.createElement(s,{title:"Flott zu deinem Lunchletter: Dann ben\xf6tigen wir nur noch deine Mailadresse:"},r.a.createElement("input",{type:"text",value:n.email,onChange:function(e){Q("email",e.target.value.replace(" ",""))},placeholder:"ich.habe@hunger.de"}),!E&&r.a.createElement("label",null,"Bitte gib eine echte E-Mail-Adresse ein."),r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(m,{inputProps:{type:"checkbox",checked:$},label:r.a.createElement("span",{style:{fontSize:"16px"}},"Ich bin damit einverstanden, den Lunchletter per Mail zu erhalten und stimme daf\xfcr der Verarbeitung meiner personenbezogenen Daten gem\xe4\xdf der"," ",r.a.createElement("a",{href:"https://studierendenfutter.de/datenschutzerklaerung",target:"_blank",rel:"noopener noreferrer"},"Datenschutzerkl\xe4rung")," ","zu."),onClick:function(e){return Y(e.target.checked)}}),!k&&r.a.createElement("label",null,"Wir k\xf6nnen dich nur zum Lunchletter anmelden, wenn du der Verarbeitung deiner Daten zustimmst.")),r.a.createElement("div",null,r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){T(0)}},"Zur\xfcck"),r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){V()?$?(P(H),C(n),T(8),b(!0),w(!0)):w(!1):b(!1)}},"Weiter"))),r.a.createElement("div",{style:{marginTop:"10px"}},H>0&&r.a.createElement(o,{percent:100*Math.min(8,H)/8}))):r.a.createElement("div",null)}var B=n(40),I=n(3);function _(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}function P(){var e=_("uId"),t=_("code");return Object(a.useEffect)((function(){!function(e,t){w(v.BACKEND_URL+"/users/"+e+"/confirm",{code:t})}(e,t)})),r.a.createElement("div",null,"Confirmed")}function V(e){var t=e.uId,n=e.code;return b(v.BACKEND_URL+"/users/"+t+"/settings?code="+n)}function K(e,t){var n=e.userId,a=e.code;!function(e,t){E.a.put(e,t)}(v.BACKEND_URL+"/users/"+n+"/settings",{code:a,settings:t})}function R(e,t){return b(v.BACKEND_URL+"/users/"+e+"/canteens?code="+t)}function U(e,t){var n=t.userId,a=t.code;return w(v.BACKEND_URL+"/users/"+n+"/canteens",{code:a,canteenId:e})}function W(e,t){return E.a.delete(e,{data:t})}function H(e,t){var n=t.userId,a=t.code;return W(v.BACKEND_URL+"/users/"+n+"/canteens",{code:a,canteenIds:e})}n(69);var G=["mondays","tuesdays","wednesdays","thursdays","fridays","saturdays"],T=["meat_meals","fish_meals","vegetarian_meals","vegan_meals"];function J(){var e=_("uId"),t=_("code"),n=function(e,t){var n=Object(a.useState)({}),r=Object(u.a)(n,2),c=r[0],l=r[1],i=Object(a.useState)(!0),s=Object(u.a)(i,2),o=s[0],m=s[1];return Object(a.useEffect)((function(){function n(){return(n=Object(h.a)(f.a.mark((function n(){var a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V({uId:e,code:t});case 2:a=n.sent,l(a),m(!1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),[c,function(n){function a(){return(a=Object(h.a)(f.a.mark((function a(){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(n),a.next=3,K({userId:e,code:t},n);case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}(),l(n)},o]}(e,t),c=Object(u.a)(n,3),o=c[0],d=c[1],p=c[2],E=function(e,t){var n=Object(a.useState)({}),r=Object(u.a)(n,2),c=r[0],l=r[1],i=function(){var n=Object(h.a)(f.a.mark((function n(){var a,r,c,i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R(e,t);case 2:if(a=n.sent,r={},a){n.next=7;break}return l({}),n.abrupt("return");case 7:for(c in a)i=a[c],r[i.canteen_id]=i;l(r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),[c,function(){var n=Object(h.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Array.isArray(a)||(a=[a]),n.next=3,U(a,{userId:e,code:t});case 3:i();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),function(){var n=Object(h.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Array.isArray(a)||(a=[a]),n.next=3,H(a,{userId:e,code:t});case 3:i();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()]}(e,t),b=Object(u.a)(E,3),g=b[0],v=b[1],k=b[2],w=z({city:"M\xfcnster"}),x=Object(a.useMemo)((function(){return w?w.reduce((function(e,t){var n=Object(i.a)({},e);return t.type?(n[t.type]||(n[t.type]=[]),n[t.type].push(t),n):e}),{}):{}}),[w]),C=y(),j=function(e,t){d(Object(i.a)({},o,Object(l.a)({},e,t)))},O=Object(a.useMemo)((function(){return G.map((function(e){return o[e]}))}),[o]),A=Object(a.useState)(!1),M=Object(u.a)(A,2),B=M[0],I=M[1];return p?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"sf-settings"},r.a.createElement(s,{title:"An welchen Tagen m\xf6chtest du den Lunchletter erhalten?"},r.a.createElement("div",null,N.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,onClick:function(){console.log("toggle"),function(e){d(Object(i.a)({},o,Object(l.a)({},G[e],!o[G[e]])))}(t)},inputProps:{type:"checkbox",key:e,checked:O[t]}}))})))),r.a.createElement(s,{title:"Welche Gerichte sollen wir in deinen pers\xf6nlichen Lunchletter aufnehmen?"},r.a.createElement("div",null,F.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,inputProps:{type:"checkbox",key:e,checked:o[T[t]]},onClick:function(){!function(e){d(Object(i.a)({},o,Object(l.a)({},T[e],!o[T[e]])))}(t)}}))})))),r.a.createElement(s,{title:"F\xfcr welche Orte m\xf6chtest du das Mittagsangebot angezeigt bekommen?"},r.a.createElement("div",null,Object.keys(x).map((function(e){var t=x[e].reduce((function(e,t){return e||g&&!!g[t.id]}),!1);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m,{onClick:function(){return function(e,t){var n=[];for(var a in x[e])n.push(x[e][a].id);t?v(n):k(n)}(e,!t)},label:S[e],inputProps:{type:"checkbox",checked:t}})),r.a.createElement("div",{className:"sf-funnel-canteens-wrapper"},t&&x[e].map((function(e){return r.a.createElement("div",null,r.a.createElement(m,{inputProps:{type:"checkbox",checked:g&&!!g[e.id]},onClick:function(){return t=e.id,void(!g[e.id]?v(t):k(t));var t},label:e.name}))}))))})))),r.a.createElement(s,{title:"Welchen Preis sollen wir dir f\xfcr die Mittagsgerichte anzeigen?"},r.a.createElement("div",null,Object.keys(D).map((function(e){return r.a.createElement("div",null,r.a.createElement(L,{inputProps:{type:"radio",key:e,checked:C[e]===o.user_category_id},onClick:function(){return j("user_category_id",C[e])},label:D[e]}))})))),r.a.createElement(s,{title:"Willst du in den Semesterferien den Lunchletter erhalten?"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(L,{inputProps:{type:"radio",key:"ja",checked:o.semester_breaks},onClick:function(){return j("semester_breaks",!0)},label:"Ja"}),r.a.createElement(L,{inputProps:{type:"radio",key:"nein",checked:!o.semester_breaks},onClick:function(){return j("semester_breaks",!1)},label:"Nein"})))),r.a.createElement(s,{title:"Dein Name:"},r.a.createElement("input",{type:"text",placeholder:"Wie hei\xdft du?",onChange:function(e){return j("name",e.target.value)},value:o.name})),B&&r.a.createElement("div",{style:{textAlign:"center",color:"var(--primary-color)"}},r.a.createElement("label",null,"Deine Einstellungen wurden gespeichert.")),r.a.createElement("div",{className:"sf-settings-buttons"},r.a.createElement("a",{className:"sf-settings-cancel-link",href:"https://studierendenfutter.de/cancel?uId="+e+"&code="+t},"Abmelden"),r.a.createElement("button",{className:"sf-settings-button",onClick:function(){I(!0),setTimeout((function(){return I(!1)}),5e3)}},"Speichern")))}function Z(){var e=_("uId"),t=_("code");return Object(a.useEffect)((function(){!function(e,t){W(v.BACKEND_URL+"/users/"+e,{code:t})}(e,t)})),r.a.createElement("div",null,"Canceled")}var $=n(23);function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=j(t),a=v.BACKEND_URL+"/canteens/"+e+"/meals"+n;return b(a)}function q(e){return b(v.BACKEND_URL+"/canteens/"+e+"/lastMealDate")}function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate();return t}function X(){var e=Q(),t=z({city:"M\xfcnster"}),n=Object(a.useState)({}),c=Object(u.a)(n,2),l=c[0],i=c[1],s=Object(a.useState)({}),o=Object(u.a)(s,2),m=o[0],d=o[1];return Object(a.useEffect)((function(){function n(){return(n=Object(h.a)(f.a.mark((function t(n){var a,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a={},t.t0=f.a.keys(n);case 2:if((t.t1=t.t0()).done){t.next=10;break}return r=t.t1.value,t.next=6,Y(n[r].id,{date:e});case 6:c=t.sent,a[n[r].id]=c,t.next=2;break;case 10:i(a);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=Object(h.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},e.t0=f.a.keys(t);case 2:if((e.t1=e.t0()).done){e.next=10;break}return a=e.t1.value,e.next=6,q(t[a].id);case 6:r=e.sent,n[t[a].id]=r.date,e.next=2;break;case 10:d(n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&(function(e){n.apply(this,arguments)}(t),function(e){a.apply(this,arguments)}(t))}),[t,e]),r.a.createElement("div",null,r.a.createElement("div",null,t&&t.map((function(e){var t=l[e.id]&&l[e.id].length>0;return r.a.createElement("div",null,r.a.createElement("h2",{style:{color:t?"green":"red"}},e.name," (",m[e.id]||"Noch kein Gericht in der Datenbank",")"),t?r.a.createElement("div",null,l[e.id].map((function(e){return r.a.createElement("div",null,e.name)}))):r.a.createElement("div",null,"Heute keine Gerichte verf\xfcgbar"))}))))}function ee(e,t){return b(v.BACKEND_URL+"/users/"+e+"/meals?code="+t)}var te=function(e){return e.toFixed(2).replace(".",",")};n(73);function ne(e){var t=j(e);return b(v.BACKEND_URL+"/meals/detailed"+t)}var ae="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Cow-2@2x.png",re="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Fish.png",ce="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegan.png",le="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegetarian.png";var ie=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function ue(){var e=_("uId"),t=_("code"),n=Object(a.useState)([]),c=Object(u.a)(n,2),l=c[0],i=c[1];return Object(a.useEffect)((function(){function n(){return(n=Object(h.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||!t||""===e||""===t){n.next=8;break}return n.t0=i,n.next=4,ee(e,t);case 4:n.t1=n.sent,(0,n.t0)(n.t1),n.next=13;break;case 8:return n.t2=i,n.next=11,ne({date:Q()});case 11:n.t3=n.sent,(0,n.t2)(n.t3);case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),console.log(l),r.a.createElement("div",{className:"sf-meals",style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{width:"400px"}},r.a.createElement("div",{style:{height:"140px",background:"#004049"}},r.a.createElement("a",{href:"https://studierendenfutter.de"},r.a.createElement("img",{alt:"Kochm\xfctze mit gekreutzten Gabel und Messer.",style:{textAlign:"center",width:"100%","margin-top":"15px"},height:"115",src:"https://studierendenfutter.de/wp-content/uploads/2021/02/Header-Desktop-s.png"})),r.a.createElement("div",{style:{"border-top":"10px solid #004049","border-left":"200px solid #004049","border-right":"200px solid #ffffff","border-bottom":"10px solid #ffffff"}})),r.a.createElement("p",{style:{fontSize:"24px",fontFamily:'"Amatic SC Regular",garamond,sans-serif',textAlign:"center",margin:"20px"}},"Hey,",r.a.createElement("br",null)," hier ist dein Mittagsmen\xfc ",r.a.createElement("br",null)," vom ",function(){var e=new Date;return e.getDate()+". "+ie[e.getMonth()]}()),r.a.createElement("div",null,l&&l.length<=0&&r.a.createElement("div",null,"Heute gibt es leider keine Gerichte die deinen Kriterien entsprechen."),l.map((function(e){return r.a.createElement("div",{class:"sf-email-canteen",style:{textAlign:"left"}},r.a.createElement("h4",{class:"sf-email-canteen-card-header",style:{marginTop:"10px",fontSize:"20px",marginBottom:"7px"}},e.name),Object.values(e.meals).map((function(e){return r.a.createElement("table",{class:"sf-email-meal",style:{marginLeft:"20px",marginBottom:"10px"}},r.a.createElement("tr",null,r.a.createElement("td",{class:"sf-email-meal-left",style:{width:"320px"}},r.a.createElement("p",null,e.name)),r.a.createElement("td",{class:"sf-email-meal-right",style:{width:"50px",textAlign:"center"}},r.a.createElement("p",null,e.price?te(e.price)+" \u20ac":te(e.prices[0].price)+" \u20ac"),e.types.map((function(e){return r.a.createElement("img",{alt:"Meal Icon",style:{width:"20px"},src:(t=e.name,"vegetarian"===t?le:"vegan"===t?ce:"fish"===t?re:ae)});var t})))))}),""))}),"")),r.a.createElement("div",{class:"sf-email-legend",style:{textAlign:"left"}},r.a.createElement("h4",{class:"sf-email-legend-title",style:{fontSize:"20px",marginBottom:"7px"}},"Legende"),r.a.createElement("table",{class:"sf-email-legend-points",style:{padding:"20px"}},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{alt:"cow",style:{width:"20px"},src:ae})),r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:re,alt:"fish"})),r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:le})),r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:ce}))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50",style:{width:"100px"}},r.a.createElement("span",null,"Fleisch")),r.a.createElement("td",{align:"center",valign:"middle",height:"50",style:{width:"100px"}},r.a.createElement("span",null,"Fisch")),r.a.createElement("td",{align:"center",valign:"middle",height:"50",style:{width:"100px"}},r.a.createElement("span",null,"Vegetarisch")),r.a.createElement("td",{align:"center",valign:"middle",height:"50",style:{width:"100px"}},r.a.createElement("span",null,"Vegan")))))))}var se=n(80),oe=n(82),me=n(84),de=n(86),fe=n(88),he=n(90),pe=n(92),Ee=n(94),be=n(81),ge=n(83),ve=n(85),ke=n(87),ye=n(89),we=n(91),xe=n(93),Ce=n(95);n(74);function je(){var e={title:"Hey, mit dem Lunchletter von Studierendenfutter bekomme ich jeden Tag mein pers\xf6nliches Mittagsmen\xfc zugeschickt. Wenn du dich auch anmelden m\xf6chtest, kannst du das hier tun:",url:"https://www.studierendenfutter.de",style:{margin:"1em"}};Object(a.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("div",null,r.a.createElement(se.a,e,r.a.createElement(be.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(oe.a,e,r.a.createElement(ge.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(me.a,e,r.a.createElement(ve.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(de.a,e,r.a.createElement(ke.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(fe.a,e,r.a.createElement(ye.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(he.a,e,r.a.createElement(we.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(pe.a,e,r.a.createElement(xe.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(Ee.a,e,r.a.createElement(Ce.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement("div",{className:"sf-copy-button",onClick:function(){var t=document.createElement("input"),n=e.text+" "+e.url;t.value=n,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),l(!0),setTimeout((function(){return l(!1)}),5e3)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"115",viewBox:"0 0 37 37",width:"115"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))),c&&r.a.createElement("div",{style:{textAlign:"center",color:"#FFFCDC"}},r.a.createElement("label",null,"In Zwischenablage kopiert.")))}function Oe(){var e=_("uId"),t=_("code");return Object(a.useEffect)((function(){!function(e,t){b(v.BACKEND_URL+"/users/"+e+"/pause?code="+t)}(e,t)})),r.a.createElement("div",null,"Paused")}n(75);function ze(){var e=Object(I.f)().canteenId,t=Object(a.useState)({}),n=Object(u.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(!1),s=Object(u.a)(i,2),o=s[0],m=s[1];var d=function(e){var t="Hey, ".concat(e.name," hat heute was Leckeres im Angebot. M\xf6chtest du mit mir hingehen?\n").concat(e.meals.map((function(e){return"- ".concat(e.name)})).join("\n"),"\n\nDas t\xe4gliche Mittagsmen\xfc gibt es im Lunchletter von Studierendenfutter. Jetzt kostenlos auf https://studierendenfutter.de");l({title:t,body:t,subject:"Hey, ".concat(e.name," hat heute was Leckeres im Angebot."),url:".",style:{margin:"1em"}})};return Object(a.useEffect)((function(){(function(){var t=Object(h.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y(e,{date:Q()});case 2:n=t.sent,d(n[0]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"sf-share-meal-page-wrapper"},r.a.createElement("div",{className:"sf-share-meal-page-wrapper-inner"},r.a.createElement("div",{className:"sf-share-meals-header-img-wrapper"},r.a.createElement("img",{src:"https://studierendenfutter.de/wp-content/uploads/2021/03/Studierendenfutter-Logo-v2.-transparent-DUNKEL.png",alt:"Gekreuzte Messer und Gabel unter einem Bachelorhut",className:"sf-share-meals-header-img"})),r.a.createElement("div",null,r.a.createElement("h2",{style:{fontFamily:"Amatic SC",fontSize:"40px"}},"Gute Wahl!"),r.a.createElement("p",null,"Hier kannst du deinen Freund:innen das heutige Mittagsmen\xfc schicken.")),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},window.navigator.canShare&&r.a.createElement("div",{className:"sf-share-meals-native",onClick:function(){console.log(window.navigator.canShare),window.navigator.canShare&&window.navigator.share({title:"Studierendenfutter",text:c.title})}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"40",viewBox:"0 0 24 24",width:"40"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}))),r.a.createElement(se.a,c,r.a.createElement(be.a,{size:60,round:!0,iconFillColor:"#094249"})),r.a.createElement(oe.a,c,r.a.createElement(ge.a,{size:60,round:!0,iconFillColor:"#094249"})),r.a.createElement(me.a,c,r.a.createElement(ve.a,{size:60,round:!0,iconFillColor:"#094249"})),r.a.createElement("div",{className:"sf-copy-button",onClick:function(){var e=document.createElement("input"),t=c.text;e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),m(!0),setTimeout((function(){return m(!1)}),5e3)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"60",viewBox:"0 0 37 37",width:"60"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))),o&&r.a.createElement("div",{style:{textAlign:"center",color:"#094249"}},r.a.createElement("label",null,"In Zwischenablage kopiert.")),r.a.createElement("div",null,r.a.createElement("h4",null,"Vorschau:"),r.a.createElement("div",{className:"sf-share-meal-text-box"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:c.title&&c.title.replace?c.title.split("\n").join("<br/>"):""}}))),r.a.createElement("h2",{style:{textAlign:"center",fontFamily:"Amatic SC",fontSize:"40px"}},"Guten Appetit euch!"),r.a.createElement("hr",null),r.a.createElement("p",{style:{margin:"40px 0"}},"Dir gef\xe4llt der Lunchletter und du m\xf6chtest uns unterst\xfctzen?",r.a.createElement("br",null)," Dann freuen wir uns sehr wenn du Freund:innen von uns erz\xe4hlst. Dies kannst du einfach hier tun:")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://studierendenfutter.de/share",className:"sf-share-meals-share-button"},"Teilen")),r.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap",rel:"stylesheet"}))}A.a.initialize("UA-179039974-2");var Ne=function(){return Object(a.useEffect)((function(){A.a.pageview(window.location.pathname+window.location.search)})),r.a.createElement(r.a.StrictMode,null,r.a.createElement(B.a,null,r.a.createElement(I.c,null,r.a.createElement(I.a,{path:"/confirm"},r.a.createElement(P,null)),r.a.createElement(I.a,{path:"/cancel"},r.a.createElement(Z,null)),r.a.createElement(I.a,{path:"/pause"},r.a.createElement(Oe,null)),r.a.createElement(I.a,{path:"/settings"},r.a.createElement(J,null)),r.a.createElement(I.a,{path:"/funnel"},r.a.createElement(M,null)),r.a.createElement(I.a,{path:"/canteens"},r.a.createElement(X,null)),r.a.createElement(I.a,{path:"/meals"},r.a.createElement(ue,null)),r.a.createElement(I.a,{exact:!0,path:"/share"},r.a.createElement(je,null)),r.a.createElement(I.a,{exact:!0,path:"/share/canteen/:canteenId/meals"},r.a.createElement(ze,null)))))},Fe=document.getElementById("root");Fe.hasChildNodes()?Object($.hydrate)(r.a.createElement(Ne,null),Fe):Object($.render)(r.a.createElement(Ne,null),Fe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.7c0a119d.chunk.js.map