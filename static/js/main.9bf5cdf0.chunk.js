(this["webpackJsonpstudierendenfutter-frontend"]=this["webpackJsonpstudierendenfutter-frontend"]||[]).push([[0],{39:function(e,t,n){e.exports=n(78)},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(24),l=n(14),i=n(12),s=n(2);n(42);function u(e){var t=e.title,n=e.children;return r.a.createElement("div",{className:"sf-funnel-step"},r.a.createElement("h1",{className:"sf-funnel-step-title"},t),n)}n(43);function o(e){var t=e.percent,n=void 0===t?0:t;return r.a.createElement("div",{className:"sf-progress-bar-wrapper"},r.a.createElement("label",{className:"sf-progress-bar-label",style:{marginLeft:n/2+"%"}},n.toFixed(0)," %"),r.a.createElement("div",{className:"sf-progress-bar",style:{width:n+"%"}}))}n(44);function m(e){var t=e.label,n=e.inputProps,a=e.onClick;return r.a.createElement("label",{class:"sf-checkmark-container"},r.a.createElement("input",Object.assign({type:"sf-checkmark-checkbox"},n,{onClick:a})),r.a.createElement("span",{class:"sf-checkmark-checkmark"}),t)}var d=n(1),f=n.n(d),p=n(3),h=n(13),E=n.n(h);function b(e){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var v={BACKEND_URL:"https://api.studierendenfutter.de"},y=v.BACKEND_URL+"/userCategories";function k(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(y);case 2:if(t=e.sent,n={},t){e.next=7;break}return r({}),e.abrupt("return");case 7:for(a=0;a<t.length;a++)n[t[a].name]=t[a].id;r(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n}function x(e,t){return E.a.post(e,t)}var w=v.BACKEND_URL+"/users";function O(e){x(w,e)}function j(e){var t=Object.keys(e).map((function(t){return t+"="+e[t]})).join("&");return t?"?"+t:""}function C(e){var t=j(e);return b(v.BACKEND_URL+"/canteens"+t)}function N(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r}var F=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],D=["Gerichte mit Fleisch","Gerichte mit Fisch","Vegetarische Gerichte","Vegane Gerichte"],S={students:"Preis f\xfcr Studierende",employees:"Preis f\xfcr Besch\xe4ftigte der Universit\xe4t",other:"Preis f\xfcr Nichtstudierende"},z={canteen:"Mensen",other:"Andere",bistro:"Bistros"};n(63),n(64);function L(e){var t=e.label,n=e.inputProps,a=e.onClick;return r.a.createElement("label",{class:"sf-radio-button-container"},r.a.createElement("input",Object.assign({type:"sf-radio-button-checkbox"},n,{onClick:a})),r.a.createElement("span",{class:"sf-radio-button-checkmark"}),t)}function A(){var e=Object(a.useState)({email:"",days:[!0,!0,!0,!0,!0,!0],semesterBreaks:!0,meals:[!0,!0,!0,!0],places:[!0,!0,!0],userCategoryId:1,name:"",city:"M\xfcnster"}),t=Object(s.a)(e,2),n=t[0],d=t[1],f=N({city:n.city}),p=Object(a.useState)(!0),h=Object(s.a)(p,2),E=h[0],b=h[1],g=Object(a.useState)(!0),v=Object(s.a)(g,2),y=v[0],x=v[1],w=Object(a.useState)(!0),j=Object(s.a)(w,2),C=j[0],A=j[1];Object(a.useEffect)((function(){if(!n.canteens&&f){var e=f.reduce((function(e,t){return e[t.id]=!0,e}),{});d(Object(i.a)({},n,{canteens:e}))}}),[f,d]);var M=function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n.email).toLowerCase())},I=Object(a.useMemo)((function(){return f?f.reduce((function(e,t){var n=Object(i.a)({},e);return t.type?(n[t.type]||(n[t.type]=[]),n[t.type].push(t),n):e}),{}):{}}),[f]),B=k(),_=Object(a.useState)(0),P=Object(s.a)(_,2),W=P[0],R=P[1],U=Object(a.useState)(!1),K=Object(s.a)(U,2),V=K[0],T=K[1],G=function(){R(W+1)},H=function(e,t){d(Object(i.a)({},n,Object(l.a)({},e,t)))},J=r.a.createElement("button",{className:"sf-funnel-next-button",onClick:G},"Weiter"),Z=r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){R(W-1)}},"Zur\xfcck");return B?r.a.createElement("div",{className:"sf-funnel"},0===W&&r.a.createElement(u,{title:"Hey, lass uns loslegen! Wie m\xf6chtest du dich anmelden?"},r.a.createElement("div",{className:"sf-funnel-button-group"},r.a.createElement("button",{className:"sf-funnel-big-button",onClick:G},"In 7 Fragen schnell zum ",r.a.createElement("br",null),"individuellen Lunchletter"),r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){R(99)}},"Direkt anmelden ohne ",r.a.createElement("br",null),"individuelle Einstellungen"))),1===W&&r.a.createElement(u,{title:"Alles klar: Verr\xe4tst du uns zuerst, an welche Mail-Adresse wir den Lunchletter schicken sollen?"},r.a.createElement("input",{type:"text",value:n.email,onChange:function(e){H("email",e.target.value)},placeholder:"ich.habe@hunger.de"}),!E&&r.a.createElement("label",null,"Bitte gib eine echte E-Mail-Adresse ein."),r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(m,{inputProps:{type:"checkbox",checked:V},label:r.a.createElement("span",{style:{fontSize:"16px"}},"Ich bin damit einverstanden, den Lunchletter per Mail zu erhalten und stimme daf\xfcr der Verarbeitung meiner personenbezogenen Daten gem\xe4\xdf der"," ",r.a.createElement("a",{href:"https://studierendenfutter.de/datenschutzerklaerung",target:"_blank",rel:"noopener noreferrer"},"Datenschutzerkl\xe4rung")," ","zu."),onClick:function(e){return T(e.target.checked)}}),!y&&r.a.createElement("label",null,"Wir k\xf6nnen dich nur zum Lunchletter anmelden, wenn du der Verarbeitung deiner Daten zustimmst.")),r.a.createElement("div",null,Z,r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){M()?V?(G(),b(!0),x(!0)):x(!1):b(!1)}},"Weiter"))),2===W&&r.a.createElement(u,{title:"Perfekt, du bekommst den Lunchletter an ".concat(n.email,"! An welchen Tagen m\xf6chtest du den Lunchletter haben?")},r.a.createElement("div",null,F.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,onClick:function(){console.log("toggle"),function(e){var t=Object(c.a)(n.days);t[e]=!t[e],H("days",t)}(t)},inputProps:{type:"checkbox",key:e,checked:n.days[t]}}))}))),r.a.createElement("div",null,Z,J)),3===W&&r.a.createElement(u,{title:"Auch in den Semesterferien?"},r.a.createElement("div",null,r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){H("semesterBreaks",!0),G()},style:{marginRight:"2em"}},"Ja"),r.a.createElement("button",{className:"sf-funnel-big-button",onClick:function(){H("semesterBreaks",!1),G()}},"Nein")),Z),4===W&&r.a.createElement(u,{title:"Ist notiert. Welche Gerichte sollen wir in deinen pers\xf6nlichen Lunchletter aufnehmen?"},r.a.createElement("div",null,D.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,inputProps:{type:"checkbox",key:e,checked:n.meals[t]},onClick:function(){!function(e){var t=Object(c.a)(n.meals);t[e]=!t[e],H("meals",t)}(t)}}))}))),r.a.createElement("div",null,Z,J)),5===W&&r.a.createElement(u,{title:"Wunderbar. F\xfcr welche Orte m\xf6chtest du das Mittagsangebot angezeigt bekommen? Du kannst dies auch noch genauer festlegen:"},r.a.createElement("div",null,Object.keys(I).map((function(e){var t=I[e].reduce((function(e,t){return e||n.canteens&&n.canteens[t.id]}),!1);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m,{onClick:function(){return function(e,t){var a=n.canteens;for(var r in I[e])a[I[e][r].id]=t;d(Object(i.a)({},n,{canteens:a}))}(e,!t)},label:z[e],inputProps:{type:"checkbox",checked:t}})),r.a.createElement("div",{className:"sf-funnel-canteens-wrapper"},t&&I[e].map((function(e){return r.a.createElement("div",null,r.a.createElement(m,{inputProps:{type:"checkbox",checked:n.canteens&&n.canteens[e.id]},onClick:function(){return function(e,t){var a=n.canteens;a[e]=t,d(Object(i.a)({},n,{canteens:a}))}(e.id,!n.canteens[e.id])},label:e.name}))}))))}))),!C&&r.a.createElement("label",null,"Bitte w\xe4hle mindestens ein Lokal aus."),r.a.createElement("div",null,Z,r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){0!==Object.values(n.canteens).filter((function(e){return e})).length?(G(),A(!0)):A(!1)}},"Weiter"))),6===W&&r.a.createElement(u,{title:"Super, wir haben es fast geschafft. Jetzt m\xfcssen wir nur noch wissen, welchen Preis wir dir f\xfcr die Mittagsgerichte anzeigen sollen:"},r.a.createElement("div",null,Object.keys(S).map((function(e){return r.a.createElement("div",null,r.a.createElement(L,{inputProps:{type:"radio",key:e,checked:B[e]===n.userCategoryId},onClick:function(){return H("userCategoryId",B[e])},label:S[e]}))}))),r.a.createElement("div",null,Z,J)),7===W&&r.a.createElement(u,{title:"Fertig, wir haben deinen Lunchletter konfiguriert. Sehr gerne w\xfcrden wir dich auch mit Namen ansprechen:"},r.a.createElement("input",{type:"text",placeholder:"Wie hei\xdft du?",onChange:function(e){return H("name",e.target.value)}}),r.a.createElement("label",null,"Wir verwenden deinen Namen ausschlie\xdflich f\xfcr die Personalisierung deiner Mails."),r.a.createElement("div",null,Z,r.a.createElement("button",{onClick:function(){O(n),G()},className:"sf-funnel-next-button"},"Weiter"))),8===W&&r.a.createElement(u,{title:"Cool ".concat(n.name,"! Wir haben dir gerade eine Best\xe4tigungsmail gesendet. Bitte best\xe4tige den\n        Link um ab sofort den Lunchletter zu erhalten.")}),99===W&&r.a.createElement(u,{title:"Flott zu deinem Lunchletter: Dann ben\xf6tigen wir nur noch deine Mailadresse:"},r.a.createElement("input",{type:"text",value:n.email,onChange:function(e){H("email",e.target.value)},placeholder:"ich.habe@hunger.de"}),!E&&r.a.createElement("label",null,"Bitte gib eine echte E-Mail-Adresse ein."),r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(m,{inputProps:{type:"checkbox",checked:V},label:r.a.createElement("span",{style:{fontSize:"16px"}},"Ich bin damit einverstanden, den Lunchletter per Mail zu erhalten und stimme daf\xfcr der Verarbeitung meiner personenbezogenen Daten gem\xe4\xdf der"," ",r.a.createElement("a",{href:"https://studierendenfutter.de/datenschutzerklaerung",target:"_blank",rel:"noopener noreferrer"},"Datenschutzerkl\xe4rung")," ","zu."),onClick:function(e){return T(e.target.checked)}}),!y&&r.a.createElement("label",null,"Wir k\xf6nnen dich nur zum Lunchletter anmelden, wenn du der Verarbeitung deiner Daten zustimmst.")),r.a.createElement("div",null,r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){R(0)}},"Zur\xfcck"),r.a.createElement("button",{className:"sf-funnel-next-button",onClick:function(){M()?V?(O(n),R(8),b(!0),x(!0)):x(!1):b(!1)}},"Weiter"))),r.a.createElement("div",{style:{marginTop:"10px"}},W>0&&r.a.createElement(o,{percent:100*Math.min(8,W)/8}))):r.a.createElement("div",null)}var M=n(37),I=n(4);function B(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}function _(){var e=B("uId"),t=B("code");return Object(a.useEffect)((function(){!function(e,t){x(v.BACKEND_URL+"/users/"+e+"/confirm",{code:t})}(e,t)})),r.a.createElement("div",null,"Confirmed")}function P(e){var t=e.uId,n=e.code;return b(v.BACKEND_URL+"/users/"+t+"/settings?code="+n)}function W(e,t){var n=e.userId,a=e.code;!function(e,t){E.a.put(e,t)}(v.BACKEND_URL+"/users/"+n+"/settings",{code:a,settings:t})}function R(e,t){return b(v.BACKEND_URL+"/users/"+e+"/canteens?code="+t)}function U(e,t){var n=t.userId,a=t.code;return x(v.BACKEND_URL+"/users/"+n+"/canteens",{code:a,canteenId:e})}function K(e,t){return E.a.delete(e,{data:t})}function V(e,t){var n=t.userId,a=t.code;return K(v.BACKEND_URL+"/users/"+n+"/canteens",{code:a,canteenIds:e})}n(65);var T=["mondays","tuesdays","wednesdays","thursdays","fridays","saturdays"],G=["meat_meals","fish_meals","vegetarian_meals","vegan_meals"];function H(){var e=B("uId"),t=B("code"),n=function(e,t){var n=Object(a.useState)({}),r=Object(s.a)(n,2),c=r[0],l=r[1],i=Object(a.useState)(!0),u=Object(s.a)(i,2),o=u[0],m=u[1];return Object(a.useEffect)((function(){function n(){return(n=Object(p.a)(f.a.mark((function n(){var a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P({uId:e,code:t});case 2:a=n.sent,l(a),m(!1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),[c,function(n){function a(){return(a=Object(p.a)(f.a.mark((function a(){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(n),a.next=3,W({userId:e,code:t},n);case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}(),l(n)},o]}(e,t),c=Object(s.a)(n,3),o=c[0],d=c[1],h=c[2],E=function(e,t){var n=Object(a.useState)({}),r=Object(s.a)(n,2),c=r[0],l=r[1],i=function(){var n=Object(p.a)(f.a.mark((function n(){var a,r,c,i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R(e,t);case 2:if(a=n.sent,r={},a){n.next=7;break}return l({}),n.abrupt("return");case 7:for(c in a)i=a[c],r[i.canteen_id]=i;l(r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),[c,function(){var n=Object(p.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Array.isArray(a)||(a=[a]),n.next=3,U(a,{userId:e,code:t});case 3:i();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),function(){var n=Object(p.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Array.isArray(a)||(a=[a]),n.next=3,V(a,{userId:e,code:t});case 3:i();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()]}(e,t),b=Object(s.a)(E,3),g=b[0],v=b[1],y=b[2],x=N({city:"M\xfcnster"}),w=Object(a.useMemo)((function(){return x?x.reduce((function(e,t){var n=Object(i.a)({},e);return t.type?(n[t.type]||(n[t.type]=[]),n[t.type].push(t),n):e}),{}):{}}),[x]),O=k(),j=function(e,t){d(Object(i.a)({},o,Object(l.a)({},e,t)))},C=Object(a.useMemo)((function(){return T.map((function(e){return o[e]}))}),[o]),A=Object(a.useState)(!1),M=Object(s.a)(A,2),I=M[0],_=M[1];return h?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"sf-settings"},r.a.createElement(u,{title:"An welchen Tagen m\xf6chtest du den Lunchletter erhalten?"},r.a.createElement("div",null,F.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,onClick:function(){console.log("toggle"),function(e){d(Object(i.a)({},o,Object(l.a)({},T[e],!o[T[e]])))}(t)},inputProps:{type:"checkbox",key:e,checked:C[t]}}))})))),r.a.createElement(u,{title:"Welche Gerichte sollen wir in deinen pers\xf6nlichen Lunchletter aufnehmen?"},r.a.createElement("div",null,D.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(m,{label:e,inputProps:{type:"checkbox",key:e,checked:o[G[t]]},onClick:function(){!function(e){d(Object(i.a)({},o,Object(l.a)({},G[e],!o[G[e]])))}(t)}}))})))),r.a.createElement(u,{title:"F\xfcr welche Orte m\xf6chtest du das Mittagsangebot angezeigt bekommen?"},r.a.createElement("div",null,Object.keys(w).map((function(e){var t=w[e].reduce((function(e,t){return e||g&&!!g[t.id]}),!1);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m,{onClick:function(){return function(e,t){var n=[];for(var a in w[e])n.push(w[e][a].id);t?v(n):y(n)}(e,!t)},label:z[e],inputProps:{type:"checkbox",checked:t}})),r.a.createElement("div",{className:"sf-funnel-canteens-wrapper"},t&&w[e].map((function(e){return r.a.createElement("div",null,r.a.createElement(m,{inputProps:{type:"checkbox",checked:g&&!!g[e.id]},onClick:function(){return t=e.id,void(!g[e.id]?v(t):y(t));var t},label:e.name}))}))))})))),r.a.createElement(u,{title:"Welchen Preis sollen wir dir f\xfcr die Mittagsgerichte anzeigen?"},r.a.createElement("div",null,Object.keys(S).map((function(e){return r.a.createElement("div",null,r.a.createElement(L,{inputProps:{type:"radio",key:e,checked:O[e]===o.user_category_id},onClick:function(){return j("user_category_id",O[e])},label:S[e]}))})))),r.a.createElement(u,{title:"Willst du in den Semesterferien den Lunchletter erhalten?"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(L,{inputProps:{type:"radio",key:"ja",checked:o.semester_breaks},onClick:function(){return j("semester_breaks",!0)},label:"Ja"}),r.a.createElement(L,{inputProps:{type:"radio",key:"nein",checked:!o.semester_breaks},onClick:function(){return j("semester_breaks",!1)},label:"Nein"})))),r.a.createElement(u,{title:"Dein Name:"},r.a.createElement("input",{type:"text",placeholder:"Wie hei\xdft du?",onChange:function(e){return j("name",e.target.value)},value:o.name})),I&&r.a.createElement("div",{style:{textAlign:"center",color:"var(--primary-color)"}},r.a.createElement("label",null,"Deine Einstellungen wurden gespeichert.")),r.a.createElement("div",{className:"sf-settings-buttons"},r.a.createElement("button",{className:"sf-settings-button",onClick:function(){_(!0),setTimeout((function(){return _(!1)}),5e3)}},"Speichern"),r.a.createElement("a",{className:"sf-settings-cancel-link",href:"https://studierendenfutter.de/cancel?uId="+e+"&code="+t},"Abmelden")))}function J(){var e=B("uId"),t=B("code");return Object(a.useEffect)((function(){!function(e,t){K(v.BACKEND_URL+"/users/"+e,{code:t})}(e,t)})),r.a.createElement("div",null,"Canceled")}var Z=n(19);function $(e,t){var n=j(t);return b(v.BACKEND_URL+"/canteens/"+e+"/meals"+n)}function Y(e){return b(v.BACKEND_URL+"/canteens/"+e+"/lastMealDate")}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate();return t}function Q(){var e=q(),t=N({city:"M\xfcnster"}),n=Object(a.useState)({}),c=Object(s.a)(n,2),l=c[0],i=c[1],u=Object(a.useState)({}),o=Object(s.a)(u,2),m=o[0],d=o[1];return Object(a.useEffect)((function(){function n(){return(n=Object(p.a)(f.a.mark((function t(n){var a,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a={},t.t0=f.a.keys(n);case 2:if((t.t1=t.t0()).done){t.next=10;break}return r=t.t1.value,t.next=6,$(n[r].id,{date:e});case 6:c=t.sent,a[n[r].id]=c,t.next=2;break;case 10:i(a);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=Object(p.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},e.t0=f.a.keys(t);case 2:if((e.t1=e.t0()).done){e.next=10;break}return a=e.t1.value,e.next=6,Y(t[a].id);case 6:r=e.sent,n[t[a].id]=r.date,e.next=2;break;case 10:d(n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&(function(e){n.apply(this,arguments)}(t),function(e){a.apply(this,arguments)}(t))}),[t,e]),r.a.createElement("div",null,r.a.createElement("div",null,t&&t.map((function(e){var t=l[e.id]&&l[e.id].length>0;return r.a.createElement("div",null,r.a.createElement("h2",{style:{color:t?"green":"red"}},e.name," (",m[e.id]||"Noch kein Gericht in der Datenbank",")"),t?r.a.createElement("div",null,l[e.id].map((function(e){return r.a.createElement("div",null,e.name)}))):r.a.createElement("div",null,"Heute keine Gerichte verf\xfcgbar"))}))))}function X(e,t){return b(v.BACKEND_URL+"/users/"+e+"/meals?code="+t)}n(69);var ee="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Cow-2@2x.png",te="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Fish.png",ne="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegan.png",ae="http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegetarian.png";var re=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];function ce(){var e=B("uId"),t=B("code"),n=Object(a.useState)([]),c=Object(s.a)(n,2),l=c[0],i=c[1];return Object(a.useEffect)((function(){function n(){return(n=Object(p.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=i,n.next=3,X(e,t);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"sf-meals",style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{width:"400px"}},r.a.createElement("p",{style:{fontSize:"24px",fontFamily:'"Amatic SC Regular",garamond,sans-serif',textAlign:"center"}},"Hey,",r.a.createElement("br",null)," hier ist dein Mittagsmen\xfc ",r.a.createElement("br",null)," vom ",function(){var e=new Date;return e.getDate()+". "+re[e.getMonth()]}()),r.a.createElement("div",null,l&&l.length<=0&&r.a.createElement("div",null,"Heute gibt es leider keine Gerichte die deinen Kriterien entsprechen."),l.map((function(e){return r.a.createElement("div",{class:"sf-email-canteen",style:{textAlign:"left"}},r.a.createElement("h4",{class:"sf-email-canteen-card-header",style:{marginTop:"10px",fontSize:"20px",marginBottom:"7px"}},e.name),Object.values(e.meals).map((function(e){return r.a.createElement("table",{class:"sf-email-meal",style:{marginLeft:"20px",marginBottom:"10px"}},r.a.createElement("tr",null,r.a.createElement("td",{class:"sf-email-meal-left",style:{width:"320px"}},r.a.createElement("p",null,e.name)),r.a.createElement("td",{class:"sf-email-meal-right",style:{width:"50px",textAlign:"center"}},r.a.createElement("p",null,e.price.toFixed(2).replace(".",",")," \u20ac"),r.a.createElement("img",{alt:"Meal Icon",style:{width:"20px"},src:(t=e.type,"vegetarian"===t?ae:"vegan"===t?ne:"fish"===t?te:ee)}))));var t}),""))}),"")),r.a.createElement("div",{class:"sf-email-legend",style:{textAlign:"left"}},r.a.createElement("h4",{class:"sf-email-legend-title",style:{fontSize:"20px",marginBottom:"7px"}},"Legende"),r.a.createElement("table",{class:"sf-email-legend-points",style:{padding:"20px"}},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{alt:"cow",style:{width:"20px"},src:ee})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Enth\xe4lt Fleisch"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:te,alt:"fish"})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Enth\xe4lt Fisch"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:ae})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Ist vegetarisch"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"middle",height:"50"},r.a.createElement("img",{style:{width:"20px"},src:ne})),r.a.createElement("td",{align:"left",valign:"middle",height:"50",style:{paddingLeft:"10px"}},r.a.createElement("span",null,"Ist vegan")))))))}var le=n(79),ie=n(81),se=n(83),ue=n(85),oe=n(87),me=n(89),de=n(91),fe=n(93),pe=n(80),he=n(82),Ee=n(84),be=n(86),ge=n(88),ve=n(90),ye=n(92),ke=n(94);n(70);function xe(){var e={title:"Studierendenfutter",text:"Hey, mit dem Lunchletter von Studierendenfutter bekomme ich jeden Tag mein pers\xf6nliches Mittagsmen\xfc zugeschickt. Wenn du dich auch anmelden m\xf6chtest, kannst du das hier tun:",url:"https://www.studierendenfutter.de",style:{margin:"1em"}};Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("div",null,r.a.createElement(le.a,e,r.a.createElement(pe.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(ie.a,e,r.a.createElement(he.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(se.a,e,r.a.createElement(Ee.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(ue.a,e,r.a.createElement(be.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(oe.a,e,r.a.createElement(ge.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(me.a,e,r.a.createElement(ve.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(de.a,e,r.a.createElement(ye.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement(fe.a,e,r.a.createElement(ke.a,{size:115,round:!0,iconFillColor:"#FFFCDC"})),r.a.createElement("div",{className:"sf-copy-button",onClick:function(){var t=document.createElement("input"),n=e.text+" "+e.url;t.value=n,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),l(!0),setTimeout((function(){return l(!1)}),5e3)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"115",viewBox:"0 0 37 37",width:"115"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))),c&&r.a.createElement("div",{style:{textAlign:"center",color:"#FFFCDC"}},r.a.createElement("label",null,"In Zwischenablage kopiert.")))}function we(e){var t=e.onSubmit,n=Object(a.useState)(),c=Object(s.a)(n,2),l=c[0],i=c[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({password:l})}},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",value:l,onChange:function(e){i(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Login")))}var Oe=v.BACKEND_URL+"/stats";function je(e){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(Oe,{password:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var Ne=n(20),Fe=n.n(Ne);n(74);function De(){var e=Object(a.useState)(),t=Object(s.a)(e,2)[1],n=Object(a.useState)(),c=Object(s.a)(n,2),l=c[0],i=c[1],u=function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je(t);case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l?r.a.createElement("div",null,r.a.createElement("h1",{className:"sf-stats-title"},"Admin Panel"),r.a.createElement("div",{className:"sf-stats-big-numbers"},r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},l.activeUsers),r.a.createElement("span",null,"active users")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},l.emailsSend),r.a.createElement("span",null,"emails send")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},l.emailsOpened),r.a.createElement("span",null,"emails opened")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},l.emailsSendToday),r.a.createElement("span",null,"send today")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},l.emailsOpenedToday),r.a.createElement("span",null,"opened today")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},(l.emailsOpenedToday/l.emailsSendToday*100).toFixed(2)),r.a.createElement("span",null,"% opened today"))),r.a.createElement("div",null,r.a.createElement("h2",{className:"sf-stats-heading"},"Emails"),r.a.createElement(Fe.a,{options:{chart:{id:"sf-email-chart"},xaxis:{categories:l?l.emailsSendDaily.map((function(e){return q(new Date(e.date))})):[]}},series:[{name:"emails send",data:l?l.emailsOpenedDaily.map((function(e){return e.count})):[]},{name:"emails opened",data:l?l.emailsSendDaily.map((function(e){return e.count})):[]}],type:"line",width:"100%",height:320})),r.a.createElement("div",null,r.a.createElement("h2",{className:"sf-stats-heading"},"Users"),r.a.createElement(Fe.a,{options:{chart:{id:"sf-user-chart"},xaxis:{categories:l?l.userSignupsPerMonth.map((function(e){return e.year+"-"+e.month})):[]}},series:[{name:"signups",data:l?l.userSignupsPerMonth.map((function(e){return e.count})):[]}],type:"line",width:"100%",height:320}))):r.a.createElement(we,{onSubmit:function(e){var n=e.password;t(n),u(n)}})}var Se=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(M.a,null,r.a.createElement(I.c,null,r.a.createElement(I.a,{path:"/confirm"},r.a.createElement(_,null)),r.a.createElement(I.a,{path:"/cancel"},r.a.createElement(J,null)),r.a.createElement(I.a,{path:"/settings"},r.a.createElement(H,null)),r.a.createElement(I.a,{path:"/funnel"},r.a.createElement(A,null)),r.a.createElement(I.a,{path:"/canteens"},r.a.createElement(Q,null)),r.a.createElement(I.a,{path:"/meals"},r.a.createElement(ce,null)),r.a.createElement(I.a,{path:"/share"},r.a.createElement(xe,null)),r.a.createElement(I.a,{path:"/stats"},r.a.createElement(De,null)))))},ze=document.getElementById("root");ze.hasChildNodes()?Object(Z.hydrate)(r.a.createElement(Se,null),ze):Object(Z.render)(r.a.createElement(Se,null),ze),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.9bf5cdf0.chunk.js.map