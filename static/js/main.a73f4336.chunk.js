(this["webpackJsonpstudierendenfutter-frontend"]=this["webpackJsonpstudierendenfutter-frontend"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},110:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(76),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(52),l=n(24),i=n(19),s=n(5);n(77);function u(e){var t=e.title,n=e.children;return r.a.createElement("div",{className:"sf-funnel-step"},r.a.createElement("h1",{className:"sf-funnel-step-title"},t),n)}n(78);function o(e){var t=e.percent,n=void 0===t?0:t;return r.a.createElement("div",{className:"sf-progress-bar-wrapper"},r.a.createElement("label",{className:"sf-progress-bar-label",style:{marginLeft:n/2+"%"}},n.toFixed(0)," %"),r.a.createElement("div",{className:"sf-progress-bar",style:{width:n+"%"}}))}n(79);function m(e){var t=e.label,n=e.inputProps,a=e.onClick;return r.a.createElement("label",{className:"sf-checkmark-container"},r.a.createElement("input",Object.assign({type:"sf-checkmark-checkbox"},n,{onClick:a})),r.a.createElement("span",{className:"sf-checkmark-checkmark"}),t)}var d=n(4),f=n.n(d),h=n(6),p=n(23),E=n.n(p);function g(e){return b.apply(this,arguments)}function b(){return(b=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var v={BACKEND_URL:"https://api.studierendenfutter.de"},y=v.BACKEND_URL+"/userCategories";function k(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(y);case 2:if(t=e.sent,n={},t){e.next=7;break}return r({}),e.abrupt("return");case 7:for(a=0;a<t.length;a++)n[t[a].name]=t[a].id;r(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n}function w(e,t){return E.a.post(e,t)}var x=v.BACKEND_URL+"/users";function O(e){w(x,e)}function C(e){var t=Object.keys(e).map((function(t){return t+"="+e[t]})).join("&");return t?"?"+t:""}function j(e){var t=C(e);return g(v.BACKEND_URL+"/canteens"+t)}function N(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(h.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r}var S=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],D=["Gerichte mit Fleisch","Gerichte mit Fisch","Vegetarische Gerichte","Vegane Gerichte"],A={students:"Preis f\xfcr Studierende",employees:"Preis f\xfcr Besch\xe4ftigte der Universit\xe4t",other:"Preis f\xfcr Nichtstudierende"},z={canteen:"Mensen",other:"Andere",bistro:"Bistros"},F=n(34);n(100),n(101);function L(e){var t=e.label,n=e.inputProps,a=e.onClick;return r.a.createElement("label",{className:"sf-radio-button-container"},r.a.createElement("input",Object.assign({type:"sf-radio-button-checkbox"},n,{onClick:a})),r.a.createElement("span",{className:"sf-radio-button-checkmark"}),t)}function _(){var e=Object(a.useState)({email:"",days:[!0,!0,!0,!0,!0,!0],semesterBreaks:!0,meals:[!0,!0,!0,!0],places:[!0,!0,!0],userCategoryId:1,name:"",city:"M\xfcnster"}),t=Object(s.a)(e,2),n=t[0],d=t[1],f=N({city:n.city}),h=Object(a.useState)(!0),p=Object(s.a)(h,2),E=p[0],g=p[1],b=Object(a.useState)(!0),v=Object(s.a)(b,2),y=v[0],w=v[1],x=Object(a.useState)(!0),C=Object(s.a)(x,2),j=C[0],_=C[1],M=Object(a.useState)(),I=Object(s.a)(M,2),B=I[0],U=I[1];Object(a.useEffect)((function(){if(!n.canteens&&f){var e=f.reduce((function(e,t){return e[t.id]=!0,e}),{});d(Object(i.a)({},n,{canteens:e}))}}),[f,d]);var R=function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n.email).toLowerCase())},H=Object(a.useMemo)((function(){return f?f.reduce((function(e,t){var n=Object(i.a)({},e);return t.type?(n[t.type]||(n[t.type]=[]),n[t.type].push(t),n):e}),{}):{}}),[f]),V=k(),T=Object(a.useState)(0),P=Object(s.a)(T,2),K=P[0],W=P[1],G=function(e){F.a.pageview(window.location.pathname+"/step"+e+window.location.search),W(e)},J=Object(a.useState)(!1),Q=Object(s.a)(J,2),Z=Q[0],$=Q[1],Y=function(){G(K+1)},q=function(e,t){d(Object(i.a)({},n,Object(l.a)({},e,t)))},X=r.a.createElement("button",{className:"sf-funnel-next-button",onClick:Y},"Weiter"),ee=r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){G(K-1)}},"Zur\xfcck");return V?r.a.createElement("div",{className:"sf-funnel"},0===K&&r.a.createElement(u,{title:"Hier kannst du dich anmelden:"},r.a.createElement("div",{className:""},r.a.createElement("button",{className:"sf-funnel-big-button",onClick:Y},"In 7 Fragen schnell zum ",r.a.createElement("br",null),"individuellen Lunchletter"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){G(99)}},"Direkt anmelden ohne ",r.a.createElement("br",null),"individuelle Einstellungen"),r.a.createElement("br",null),r.a.createElement("br",null))),1===K&&r.a.createElement(u,{title:"Alles klar: An welchen Tagen m\xf6chtest du deinen Lunchletter denn erhalten?"},r.a.createElement("div",null,S.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,onClick:function(){console.log("toggle"),function(e){var t=Object(c.a)(n.days);t[e]=!t[e],q("days",t)}(t)},inputProps:{type:"checkbox",key:e,checked:n.days[t]}}))}))),r.a.createElement("div",null,ee,X)),2===K&&r.a.createElement(u,{title:"Auch in den Semesterferien?"},r.a.createElement("p",null,'Bis zum 7.10. sind noch Semesterferien. Wenn du den Lunchletter ab sofort erhalten m\xf6chtest, w\xe4hle hier "Ja" aus.'),r.a.createElement("div",null,r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){q("semesterBreaks",!0),Y()},style:{marginRight:"2em"}},"Ja"),r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){q("semesterBreaks",!1),Y()}},"Nein")),ee),3===K&&r.a.createElement(u,{title:"Ist notiert. Welche Gerichte sollen wir in deinen pers\xf6nlichen Lunchletter aufnehmen?"},r.a.createElement("div",null,D.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,inputProps:{type:"checkbox",key:e,checked:n.meals[t]},onClick:function(){!function(e){var t=Object(c.a)(n.meals);t[e]=!t[e],q("meals",t)}(t)}}))}))),r.a.createElement("div",null,ee,X)),4===K&&r.a.createElement(u,{title:"Wunderbar. F\xfcr welche Orte m\xf6chtest du das Mittagsangebot angezeigt bekommen? Du kannst dies auch noch genauer festlegen:"},r.a.createElement("div",null,Object.keys(H).map((function(e){var t=H[e].reduce((function(e,t){return e||n.canteens&&n.canteens[t.id]}),!1);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m,{onClick:function(){return function(e,t){var a=n.canteens;for(var r in H[e])a[H[e][r].id]=t;d(Object(i.a)({},n,{canteens:a}))}(e,!t)},label:z[e],inputProps:{type:"checkbox",checked:t}})),r.a.createElement("div",{className:"sf-funnel-canteens-wrapper"},t&&H[e].map((function(e){return r.a.createElement("div",null,r.a.createElement(m,{inputProps:{type:"checkbox",checked:n.canteens&&n.canteens[e.id]},onClick:function(){return function(e,t){var a=n.canteens;a[e]=t,d(Object(i.a)({},n,{canteens:a}))}(e.id,!n.canteens[e.id])},label:e.name}))}))))}))),!j&&r.a.createElement("label",null,"Bitte w\xe4hle mindestens ein Lokal aus."),r.a.createElement("div",null,ee,r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){0!==Object.values(n.canteens).filter((function(e){return e})).length?(Y(),_(!0)):_(!1)}},"Weiter"))),5===K&&r.a.createElement(u,{title:"Super, wir haben es fast geschafft. Jetzt m\xfcssen wir nur noch wissen, welchen Preis wir dir f\xfcr die Mittagsgerichte anzeigen sollen:"},r.a.createElement("div",null,Object.keys(A).map((function(e){return r.a.createElement("div",null,r.a.createElement(L,{inputProps:{type:"radio",key:e,checked:V[e]===n.userCategoryId},onClick:function(){return q("userCategoryId",V[e])},label:A[e]}))}))),r.a.createElement("div",null,ee,X)),6===K&&r.a.createElement(u,{title:"Fertig, wir haben deinen Lunchletter konfiguriert. Sehr gerne w\xfcrden wir dich auch mit Namen ansprechen:"},r.a.createElement("input",{type:"text",placeholder:"Wie hei\xdft du?",onChange:function(e){return q("name",e.target.value)}}),r.a.createElement("label",null,"Wir verwenden deinen Namen ausschlie\xdflich f\xfcr die Personalisierung deiner Mails."),r.a.createElement("div",null,ee,r.a.createElement("button",{onClick:function(){Y()},className:"sf-funnel-next-button"},"Weiter"))),7===K&&r.a.createElement(u,{title:"Zack".concat(n.name?" "+n.name:"",", das war's schon. Verr\xe4tst du uns noch, an welche Mail-Adresse wir deinen Lunchletter schicken sollen?")},r.a.createElement("input",{type:"text",value:n.email,onChange:function(e){q("email",e.target.value.replace(" ",""))},placeholder:"ich.habe@hunger.de"}),!E&&r.a.createElement("label",null,"Bitte gib eine echte E-Mail-Adresse ein."),r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(m,{inputProps:{type:"checkbox",checked:Z},label:r.a.createElement("span",{style:{fontSize:"16px"}},"Ich bin damit einverstanden, den Lunchletter per Mail zu erhalten und stimme daf\xfcr der Verarbeitung meiner personenbezogenen Daten gem\xe4\xdf der"," ",r.a.createElement("a",{href:"https://studierendenfutter.de/datenschutzerklaerung",target:"_blank",rel:"noopener noreferrer"},"Datenschutzerkl\xe4rung")," ","zu."),onClick:function(e){return $(e.target.checked)}}),!y&&r.a.createElement("label",null,"Wir k\xf6nnen dich nur zum Lunchletter anmelden, wenn du der Verarbeitung deiner Daten zustimmst.")),r.a.createElement("div",null,ee,r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){R()?Z?(U(K),Y(),g(!0),w(!0),O(n)):w(!1):g(!1)}},"Weiter"))),8===K&&r.a.createElement(u,{title:"Cool".concat(n.name?" "+n.name:"","! Wir haben dir gerade eine Best\xe4tigungsmail an ").concat(n.email," gesendet. Bitte best\xe4tige den\n        Link um ab sofort den Lunchletter zu erhalten.")},r.a.createElement("p",null,"Keine Best\xe4tigungsmail erhalten? Das kannst du tun:",r.a.createElement("ul",null,r.a.createElement("li",null,"Entdeckst du hier einen Tippfehler: ",n.email,"?"," ",r.a.createElement("button",{className:"sf-button-link",onClick:function(){return G(B)}},"Springe zur\xfcck")," ","und korrigiere ihn schnell."),r.a.createElement("li",null,"Die Mail k\xf6nnte in deinem Spamordner gelandet sein. Vielleicht hilft ein Blick dort hinein."),r.a.createElement("li",null,"Auch nicht im Spam gefunden? Schreib uns an"," ",r.a.createElement("a",{href:"mailto:moin@studierendenfutter.de"},"moin@studierendenfutter.de")," ","und wir helfen dir gerne weiter.")))),99===K&&r.a.createElement(u,{title:"Flott zu deinem Lunchletter: Dann ben\xf6tigen wir nur noch deine Mailadresse:"},r.a.createElement("input",{type:"text",value:n.email,onChange:function(e){q("email",e.target.value.replace(" ",""))},placeholder:"ich.habe@hunger.de"}),!E&&r.a.createElement("label",null,"Bitte gib eine echte E-Mail-Adresse ein."),r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(m,{inputProps:{type:"checkbox",checked:Z},label:r.a.createElement("span",{style:{fontSize:"16px"}},"Ich bin damit einverstanden, den Lunchletter per Mail zu erhalten und stimme daf\xfcr der Verarbeitung meiner personenbezogenen Daten gem\xe4\xdf der"," ",r.a.createElement("a",{href:"https://studierendenfutter.de/datenschutzerklaerung",target:"_blank",rel:"noopener noreferrer"},"Datenschutzerkl\xe4rung")," ","zu."),onClick:function(e){return $(e.target.checked)}}),!y&&r.a.createElement("label",null,"Wir k\xf6nnen dich nur zum Lunchletter anmelden, wenn du der Verarbeitung deiner Daten zustimmst.")),r.a.createElement("div",null,r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){G(0)}},"Zur\xfcck"),r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){R()?Z?(U(K),O(n),G(8),g(!0),w(!0)):w(!1):g(!1)}},"Weiter"))),r.a.createElement("div",{style:{marginTop:"10px"}},K>0&&r.a.createElement(o,{percent:100*Math.min(8,K)/8}))):r.a.createElement("div",null)}var M=n(70),I=n(7);function B(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}function U(){var e=B("uId"),t=B("code");return Object(a.useEffect)((function(){!function(e,t){w(v.BACKEND_URL+"/users/"+e+"/confirm",{code:t})}(e,t)})),r.a.createElement("div",null,"Confirmed")}function R(e){var t=e.uId,n=e.code;return g(v.BACKEND_URL+"/users/"+t+"/settings?code="+n)}function H(e,t){var n=e.userId,a=e.code;!function(e,t){E.a.put(e,t)}(v.BACKEND_URL+"/users/"+n+"/settings",{code:a,settings:t})}function V(e,t){return g(v.BACKEND_URL+"/users/"+e+"/canteens?code="+t)}function T(e,t){var n=t.userId,a=t.code;return w(v.BACKEND_URL+"/users/"+n+"/canteens",{code:a,canteenId:e})}function P(e,t){return E.a.delete(e,{data:t})}function K(e,t){var n=t.userId,a=t.code;return P(v.BACKEND_URL+"/users/"+n+"/canteens",{code:a,canteenIds:e})}n(102);var W=["mondays","tuesdays","wednesdays","thursdays","fridays","saturdays"],G=["meat_meals","fish_meals","vegetarian_meals","vegan_meals"];function J(){var e=B("uId"),t=B("code"),n=function(e,t){var n=Object(a.useState)({}),r=Object(s.a)(n,2),c=r[0],l=r[1],i=Object(a.useState)(!0),u=Object(s.a)(i,2),o=u[0],m=u[1];return Object(a.useEffect)((function(){function n(){return(n=Object(h.a)(f.a.mark((function n(){var a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R({uId:e,code:t});case 2:a=n.sent,l(a),m(!1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),[c,function(n){function a(){return(a=Object(h.a)(f.a.mark((function a(){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(n),a.next=3,H({userId:e,code:t},n);case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}(),l(n)},o]}(e,t),c=Object(s.a)(n,3),o=c[0],d=c[1],p=c[2],E=function(e,t){var n=Object(a.useState)({}),r=Object(s.a)(n,2),c=r[0],l=r[1],i=function(){var n=Object(h.a)(f.a.mark((function n(){var a,r,c,i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V(e,t);case 2:if(a=n.sent,r={},a){n.next=7;break}return l({}),n.abrupt("return");case 7:for(c in a)i=a[c],r[i.canteen_id]=i;l(r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),[c,function(){var n=Object(h.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Array.isArray(a)||(a=[a]),n.next=3,T(a,{userId:e,code:t});case 3:i();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),function(){var n=Object(h.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Array.isArray(a)||(a=[a]),n.next=3,K(a,{userId:e,code:t});case 3:i();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()]}(e,t),g=Object(s.a)(E,3),b=g[0],v=g[1],y=g[2],w=N({city:"M\xfcnster"}),x=Object(a.useMemo)((function(){return w?w.reduce((function(e,t){var n=Object(i.a)({},e);return t.type?(n[t.type]||(n[t.type]=[]),n[t.type].push(t),n):e}),{}):{}}),[w]),O=k(),C=function(e,t){d(Object(i.a)({},o,Object(l.a)({},e,t)))},j=Object(a.useMemo)((function(){return W.map((function(e){return o[e]}))}),[o]),F=Object(a.useState)(!1),_=Object(s.a)(F,2),M=_[0],I=_[1];return p?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"sf-settings"},r.a.createElement(u,{title:"An welchen Tagen m\xf6chtest du den Lunchletter erhalten?"},r.a.createElement("div",null,S.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,onClick:function(){console.log("toggle"),function(e){d(Object(i.a)({},o,Object(l.a)({},W[e],!o[W[e]])))}(t)},inputProps:{type:"checkbox",key:e,checked:j[t]}}))})))),r.a.createElement(u,{title:"Welche Gerichte sollen wir in deinen pers\xf6nlichen Lunchletter aufnehmen?"},r.a.createElement("div",null,D.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,inputProps:{type:"checkbox",key:e,checked:o[G[t]]},onClick:function(){!function(e){d(Object(i.a)({},o,Object(l.a)({},G[e],!o[G[e]])))}(t)}}))})))),r.a.createElement(u,{title:"F\xfcr welche Orte m\xf6chtest du das Mittagsangebot angezeigt bekommen?"},r.a.createElement("div",null,Object.keys(x).map((function(e){var t=x[e].reduce((function(e,t){return e||b&&!!b[t.id]}),!1);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m,{onClick:function(){return function(e,t){var n=[];for(var a in x[e])n.push(x[e][a].id);t?v(n):y(n)}(e,!t)},label:z[e],inputProps:{type:"checkbox",checked:t}})),r.a.createElement("div",{className:"sf-funnel-canteens-wrapper"},t&&x[e].map((function(e){return r.a.createElement("div",null,r.a.createElement(m,{inputProps:{type:"checkbox",checked:b&&!!b[e.id]},onClick:function(){return t=e.id,void(!b[e.id]?v(t):y(t));var t},label:e.name}))}))))})))),r.a.createElement(u,{title:"Welchen Preis sollen wir dir f\xfcr die Mittagsgerichte anzeigen?"},r.a.createElement("div",null,Object.keys(A).map((function(e){return r.a.createElement("div",null,r.a.createElement(L,{inputProps:{type:"radio",key:e,checked:O[e]===o.user_category_id},onClick:function(){return C("user_category_id",O[e])},label:A[e]}))})))),r.a.createElement(u,{title:"Willst du in den Semesterferien den Lunchletter erhalten?"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(L,{inputProps:{type:"radio",key:"ja",checked:o.semester_breaks},onClick:function(){return C("semester_breaks",!0)},label:"Ja"}),r.a.createElement(L,{inputProps:{type:"radio",key:"nein",checked:!o.semester_breaks},onClick:function(){return C("semester_breaks",!1)},label:"Nein"})))),r.a.createElement(u,{title:"Dein Name:"},r.a.createElement("input",{type:"text",placeholder:"Wie hei\xdft du?",onChange:function(e){return C("name",e.target.value)},value:o.name})),M&&r.a.createElement("div",{style:{textAlign:"center",color:"var(--primary-color)"}},r.a.createElement("label",null,"Deine Einstellungen wurden gespeichert.")),r.a.createElement("div",{className:"sf-settings-buttons"},r.a.createElement("a",{className:"sf-settings-cancel-link",href:"https://studierendenfutter.de/cancel?uId="+e+"&code="+t},"Abmelden"),r.a.createElement("button",{className:"sf-settings-button",onClick:function(){I(!0),setTimeout((function(){return I(!1)}),5e3)}},"Speichern")))}function Q(){var e=B("uId"),t=B("code");return Object(a.useEffect)((function(){!function(e,t){P(v.BACKEND_URL+"/users/"+e,{code:t})}(e,t)})),r.a.createElement("div",null,"Canceled")}var Z=n(27);function $(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=C(t),a=v.BACKEND_URL+"/canteens/"+e+"/meals"+n;return g(a)}function Y(e){return g(v.BACKEND_URL+"/canteens/"+e+"/lastMealDate")}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate();return t}function X(){var e=q(),t=N({city:"M\xfcnster"}),n=Object(a.useState)({}),c=Object(s.a)(n,2),l=c[0],i=c[1],u=Object(a.useState)({}),o=Object(s.a)(u,2),m=o[0],d=o[1];return Object(a.useEffect)((function(){function n(){return(n=Object(h.a)(f.a.mark((function t(n){var a,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a={},t.t0=f.a.keys(n);case 2:if((t.t1=t.t0()).done){t.next=10;break}return r=t.t1.value,t.next=6,$(n[r].id,{date:e});case 6:c=t.sent,a[n[r].id]=c,t.next=2;break;case 10:i(a);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=Object(h.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},e.t0=f.a.keys(t);case 2:if((e.t1=e.t0()).done){e.next=10;break}return a=e.t1.value,e.next=6,Y(t[a].id);case 6:r=e.sent,n[t[a].id]=r.date,e.next=2;break;case 10:d(n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&(function(e){n.apply(this,arguments)}(t),function(e){a.apply(this,arguments)}(t))}),[t,e]),r.a.createElement("div",null,r.a.createElement("div",null,t&&t.map((function(e){var t=l[e.id]&&l[e.id].length>0;return r.a.createElement("div",null,r.a.createElement("h2",{style:{color:t?"green":"red"}},e.name," (",m[e.id]||"Noch kein Gericht in der Datenbank",")"),t?r.a.createElement("div",null,l[e.id].map((function(e){return r.a.createElement("div",null,e.name)}))):r.a.createElement("div",null,"Heute keine Gerichte verf\xfcgbar"))}))))}function ee(e,t){return g(v.BACKEND_URL+"/users/"+e+"/meals?code="+t)}var te=function(e){return e.toFixed(2).replace(".",",")};n(106);function ne(e){var t=C(e);return g(v.BACKEND_URL+"/meals/detailed"+t)}var ae="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Cow-2@2x.png",re="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Fish.png",ce="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegan.png",le="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegetarian.png";var ie=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function se(){var e=B("uId"),t=B("code"),n=Object(a.useState)([]),c=Object(s.a)(n,2),l=c[0],i=c[1];return Object(a.useEffect)((function(){function n(){return(n=Object(h.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||!t||""===e||""===t){n.next=8;break}return n.t0=i,n.next=4,ee(e,t);case 4:n.t1=n.sent,(0,n.t0)(n.t1),n.next=13;break;case 8:return n.t2=i,n.next=11,ne({date:q()});case 11:n.t3=n.sent,(0,n.t2)(n.t3);case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),console.log(l),r.a.createElement("div",{className:"sf-meals",style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{width:"400px"}},r.a.createElement("div",{style:{height:"140px",background:"#004049"}},r.a.createElement("a",{href:"https://studierendenfutter.de"},r.a.createElement("img",{alt:"Kochm\xfctze mit gekreutzten Gabel und Messer.",style:{textAlign:"center",width:"100%","margin-top":"15px"},height:"115",src:"https://studierendenfutter.de/wp-content/uploads/2021/02/Header-Desktop-s.png"})),r.a.createElement("div",{style:{"border-top":"10px solid #004049","border-left":"200px solid #004049","border-right":"200px solid #ffffff","border-bottom":"10px solid #ffffff"}})),r.a.createElement("p",{style:{fontSize:"24px",fontFamily:'"Amatic SC Regular",garamond,sans-serif',textAlign:"center",margin:"20px"}},"Hey,",r.a.createElement("br",null)," hier ist dein Mittagsmen\xfc ",r.a.createElement("br",null)," vom ",function(){var e=new Date;return e.getDate()+". "+ie[e.getMonth()]}()),r.a.createElement("div",null,l&&l.length<=0&&r.a.createElement("div",null,"Heute gibt es leider keine Gerichte die deinen Kriterien entsprechen."),l.map((function(e){return r.a.createElement("div",{className:"sf-email-canteen",style:{textAlign:"left"}},r.a.createElement("h4",{className:"sf-email-canteen-card-header",style:{marginTop:"10px",fontSize:"20px",marginBottom:"7px"}},e.name),Object.values(e.meals).map((function(e){return r.a.createElement("table",{className:"sf-email-meal",style:{marginLeft:"20px",marginBottom:"10px"}},r.a.createElement("tr",null,r.a.createElement("td",{className:"sf-email-meal-left",style:{width:"320px"}},r.a.createElement("p",null,e.name)),r.a.createElement("td",{className:"sf-email-meal-right",style:{width:"50px",textAlign:"center"}},r.a.createElement("p",null,e.price?te(e.price)+" \u20ac":te(e.prices[0].price)+" \u20ac"),e.types.map((function(e){return r.a.createElement("img",{alt:"Meal Icon",style:{width:"20px"},src:(t=e.name,"vegetarian"===t?le:"vegan"===t?ce:"fish"===t?re:ae)});var t})))))}),""))}),"")),r.a.createElement("div",{className:"sf-email-legend",style:{textAlign:"left"}},r.a.createElement("h4",{className:"sf-email-legend-title",style:{fontSize:"20px",marginBottom:"7px"}},"Legende"),r.a.createElement("table",{className:"sf-email-legend-points",style:{padding:"20px"}},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{alt:"cow",style:{width:"20px"},src:ae})),r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:re,alt:"fish"})),r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:le})),r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:ce}))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50",style:{width:"100px"}},r.a.createElement("span",null,"Fleisch")),r.a.createElement("td",{align:"center",valign:"middle",height:"50",style:{width:"100px"}},r.a.createElement("span",null,"Fisch")),r.a.createElement("td",{align:"center",valign:"middle",height:"50",style:{width:"100px"}},r.a.createElement("span",null,"Vegetarisch")),r.a.createElement("td",{align:"center",valign:"middle",height:"50",style:{width:"100px"}},r.a.createElement("span",null,"Vegan")))))))}var ue=n(165),oe=n(167),me=n(169),de=n(171),fe=n(173),he=n(175),pe=n(177),Ee=n(179),ge=n(166),be=n(168),ve=n(170),ye=n(172),ke=n(174),we=n(176),xe=n(178),Oe=n(180);n(107);function Ce(){var e={title:"Hey, mit dem Lunchletter von Studierendenfutter bekomme ich jeden Tag mein pers\xf6nliches Mittagsmen\xfc zugeschickt. Wenn du dich auch anmelden m\xf6chtest, kannst du das hier tun:",url:"https://www.studierendenfutter.de",style:{margin:"1em"}};Object(a.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("div",null,r.a.createElement(ue.a,e,r.a.createElement(ge.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(oe.a,e,r.a.createElement(be.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(me.a,e,r.a.createElement(ve.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(de.a,e,r.a.createElement(ye.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(fe.a,e,r.a.createElement(ke.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(he.a,e,r.a.createElement(we.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(pe.a,e,r.a.createElement(xe.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(Ee.a,e,r.a.createElement(Oe.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement("div",{className:"sf-copy-button",onClick:function(){var t=document.createElement("input"),n=e.text+" "+e.url;t.value=n,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),l(!0),setTimeout((function(){return l(!1)}),5e3)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"115",viewBox:"0 0 37 37",width:"115"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))),c&&r.a.createElement("div",{style:{textAlign:"center",color:"#FFFCDC"}},r.a.createElement("label",null,"In Zwischenablage kopiert.")))}function je(e,t,n){g(v.BACKEND_URL+"/users/"+e+"/pause?code="+t+"&pauseEnd="+n)}var Ne=n(67),Se=n.n(Ne),De=n(71);n(108);function Ae(e){var t=e.children,n=Object(De.a)(e,["children"]);return r.a.createElement("button",Object.assign({className:"sf-big-button"},n),t)}n(109),n(110);function ze(){var e=B("uId"),t=B("code"),n=(Object(I.f)(),Object(a.useState)()),c=Object(s.a)(n,2),l=c[0],i=c[1],u=Object(a.useState)(!1),o=Object(s.a)(u,2),m=o[0],d=o[1];Object(a.useEffect)((function(){var e=new Date;e.setDate(e.getDate()+14),i(e)}),[]);var p=function(){var n=Object(h.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,je(e,t,l.toISOString());case 2:d(!0);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:"sf-pause-page"},m?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("strong",null,"Bis Bald"," ",r.a.createElement("span",{role:"img","aria-label":"Victory Emoji"},"\u270c\ufe0f"),"!")),r.a.createElement("p",{style:{textAlign:"center",marginBottom:"100px"}},"Alles klar, wir haben deinen Lunchletter pausiert. ",r.a.createElement("br",null),"Genie\xdf deine Zeit, wir freuen uns schon darauf, dich wiederzusehen.")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("strong",null,"Bereit f\xfcr Vacay?")),r.a.createElement("p",{style:{textAlign:"center"}},"Hier kannst du deinen Lunchletter pausieren. Bitte gib das Datum an, bis einschlie\xdflich dem du den Lunchletter pausieren m\xf6chtest."),r.a.createElement("div",{className:"sf-pause-wrapper"},r.a.createElement(Se.a,{value:l,selected:l,label:"Datum",dateFormat:"dd.MM.yyyy",name:"date",onChange:function(e){i(e)}}),r.a.createElement(Ae,{style:{marginTop:"1em"},onClick:p},"Best\xe4tigen")),r.a.createElement("p",{style:{textAlign:"center"}},"Du erh\xe4ltst den Lunchletter dann wieder ab dem, auf dem von dir angegebenen Datum folgenden, Tag wieder. Ist das von dir angegebene Datum an einem Wochenende, erh\xe4ltst du den Lunchletter am kommenden Montag wieder."),r.a.createElement("div",{style:{height:"200px"}})))}n(156);function Fe(){var e=Object(I.g)().canteenId,t=Object(a.useState)({}),n=Object(s.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(!1),u=Object(s.a)(i,2),o=u[0],m=u[1];var d=function(e){var t="Hey, ".concat(e.name," hat heute was Leckeres im Angebot. M\xf6chtest du mit mir hingehen?\n").concat(e.meals.map((function(e){return"- ".concat(e.name)})).join("\n"),"\n\nDas t\xe4gliche Mittagsmen\xfc gibt es im Lunchletter von Studierendenfutter. Jetzt kostenlos auf https://studierendenfutter.de");l({title:t,body:t,subject:"Hey, ".concat(e.name," hat heute was Leckeres im Angebot."),url:".",style:{margin:"1em"}})};return Object(a.useEffect)((function(){(function(){var t=Object(h.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$(e,{date:q()});case 2:n=t.sent,d(n[0]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"sf-share-meal-page-wrapper"},r.a.createElement("div",{className:"sf-share-meal-page-wrapper-inner"},r.a.createElement("div",{className:"sf-share-meals-header-img-wrapper"},r.a.createElement("img",{src:"https://studierendenfutter.de/wp-content/uploads/2021/03/Studierendenfutter-Logo-v2.-transparent-DUNKEL.png",alt:"Gekreuzte Messer und Gabel unter einem Bachelorhut",className:"sf-share-meals-header-img"})),r.a.createElement("div",null,r.a.createElement("h2",{style:{fontFamily:"Amatic SC",fontSize:"40px"}},"Gute Wahl!"),r.a.createElement("p",null,"Hier kannst du deinen Freund:innen das heutige Mittagsmen\xfc schicken.")),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},window.navigator.canShare&&r.a.createElement("div",{className:"sf-share-meals-native",onClick:function(){console.log(window.navigator.canShare),window.navigator.canShare&&window.navigator.share({title:"Studierendenfutter",text:c.title})}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"40",viewBox:"0 0 24 24",width:"40"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}))),r.a.createElement(ue.a,c,r.a.createElement(ge.a,{size:60,round:!0,iconFillColor:"#094249"})),r.a.createElement(oe.a,c,r.a.createElement(be.a,{size:60,round:!0,iconFillColor:"#094249"})),r.a.createElement(me.a,c,r.a.createElement(ve.a,{size:60,round:!0,iconFillColor:"#094249"})),r.a.createElement("div",{className:"sf-copy-button",onClick:function(){var e=document.createElement("input"),t=c.text;e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),m(!0),setTimeout((function(){return m(!1)}),5e3)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"60",viewBox:"0 0 37 37",width:"60"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))),o&&r.a.createElement("div",{style:{textAlign:"center",color:"#094249"}},r.a.createElement("label",null,"In Zwischenablage kopiert.")),r.a.createElement("div",null,r.a.createElement("h4",null,"Vorschau:"),r.a.createElement("div",{className:"sf-share-meal-text-box"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:c.title&&c.title.replace?c.title.split("\n").join("<br/>"):""}}))),r.a.createElement("h2",{style:{textAlign:"center",fontFamily:"Amatic SC",fontSize:"40px"}},"Guten Appetit euch!"),r.a.createElement("hr",null),r.a.createElement("p",{style:{margin:"40px 0"}},"Dir gef\xe4llt der Lunchletter und du m\xf6chtest uns unterst\xfctzen?",r.a.createElement("br",null)," Dann freuen wir uns sehr wenn du Freund:innen von uns erz\xe4hlst. Dies kannst du einfach hier tun:")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://studierendenfutter.de/share",className:"sf-share-meals-share-button"},"Teilen")),r.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap",rel:"stylesheet"}))}function Le(e){return g(v.BACKEND_URL+"/vouchers/"+e)}function _e(e,t,n){return Me.apply(this,arguments)}function Me(){return(Me=Object(h.a)(f.a.mark((function e(t,n,a){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v.BACKEND_URL+"/vouchers/"+t+"/users/"+n,e.next=3,w(r,{code:a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ie(){var e=Object(I.g)().voucherId,t=B("uId"),n=B("code"),c=Object(a.useState)(!1),l=Object(s.a)(c,2),i=l[0],u=l[1],o=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(h.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Le(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r}(e),d=Object(a.useState)("VOUCHER_REQUEST_NOT_SEND"),p=Object(s.a)(d,2),E=p[0],g=p[1];function b(){return(b=Object(h.a)(f.a.mark((function a(){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,g("VOUCHER_REQUEST_PENDING"),a.next=4,_e(e,t,n);case 4:a.sent,g("VOUCHER_REQUEST_SUCCESS"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),g("VOUCHER_REQUEST_FAILURE");case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))).apply(this,arguments)}return o?0===o.amountOfVoucherCodesAvailable?r.a.createElement("div",{style:{minHeight:"200px"}},r.a.createElement("p",null,"Leider sind keine Gutscheine mehr verf\xfcgbar.")):r.a.createElement("div",{style:{minHeight:"100px"}},"VOUCHER_REQUEST_NOT_SEND"===E&&r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(m,{inputProps:{type:"checkbox",checked:i},label:o.voucher.short_description,onClick:function(){return u(!i)}}),r.a.createElement(Ae,{onClick:function(){return b.apply(this,arguments)}},"GIMME THAT VOUCHER")),"VOUCHER_REQUEST_SUCCESS"===E&&r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement("p",{style:{textAlign:"center"}},"Alles klaro, Gutschein kommt. Viel Spa\xdf und guten Appetit bei Mach Mittag!")),"VOUCHER_REQUEST_FAILURE"===E&&r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement("p",{style:{textAlign:"center"}},"Ey shit. Da lief was schief. Probier es nochmal oder schreib uns ne Email."),r.a.createElement(Ae,{onClick:function(){return g("VOUCHER_REQUEST_NOT_SEND")}},"NOCHMAL"))):r.a.createElement("div",{style:{minHeight:"100px"}},r.a.createElement("p",null,"Hier solltest du eigentlich einen Gutschein bekommen. Leider funktioniert die Verbindung zum Server gerade nicht. Bitte versuche es sp\xe4ter erneut."))}F.a.initialize("UA-179039974-2");var Be=function(){return Object(a.useEffect)((function(){F.a.pageview(window.location.pathname+window.location.search)})),r.a.createElement(r.a.StrictMode,null,r.a.createElement(M.a,null,r.a.createElement(I.c,null,r.a.createElement(I.a,{path:"/confirm"},r.a.createElement(U,null)),r.a.createElement(I.a,{path:"/cancel"},r.a.createElement(Q,null)),r.a.createElement(I.a,{path:"/pause"},r.a.createElement(ze,null)),r.a.createElement(I.a,{path:"/settings"},r.a.createElement(J,null)),r.a.createElement(I.a,{path:"/funnel"},r.a.createElement(_,null)),r.a.createElement(I.a,{path:"/canteens"},r.a.createElement(X,null)),r.a.createElement(I.a,{path:"/meals"},r.a.createElement(se,null)),r.a.createElement(I.a,{exact:!0,path:"/share"},r.a.createElement(Ce,null)),r.a.createElement(I.a,{exact:!0,path:"/share/canteen/:canteenId/meals"},r.a.createElement(Fe,null)),r.a.createElement(I.a,{path:"/vouchers/:voucherId/funnel"},r.a.createElement(Ie,null)))))},Ue=document.getElementById("root");Ue.hasChildNodes()?Object(Z.hydrate)(r.a.createElement(Be,null),Ue):Object(Z.render)(r.a.createElement(Be,null),Ue),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,n){e.exports=n(157)},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.a73f4336.chunk.js.map