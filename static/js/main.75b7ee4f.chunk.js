(this["webpackJsonpstudierendenfutter-frontend"]=this["webpackJsonpstudierendenfutter-frontend"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(4),u=n(3),o=n(8),s=n(5);function m(e){var t=e.title,n=e.children;return r.a.createElement("div",null,r.a.createElement("h1",null,t),n)}var d=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],h=["Gerichte mit Fleisch","Gerichte mit Fisch","Vegetarische Gerichte","Vegane Gerichte"],f={students:"Preis f\xfcr Studierende",employees:"Preis f\xfcr Besch\xe4ftigte der Universit\xe4t",other:"Preis f\xfcr Nichtstudierende"};function g(){var e=Object(a.useState)({email:"",days:[!0,!0,!0,!0,!0,!0],semesterBreak:!0,meals:[!0,!0,!0,!0],places:[!0,!0,!0],userGroup:"students",name:""}),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(0),g=Object(s.a)(c,2),k=g[0],E=g[1],p=function(){E(k+1)},b=function(e,t){i(Object(o.a)({},n,Object(u.a)({},e,t)))},v=function(e){var t=Object(l.a)(n.days);t[e]=!t[e],b("days",t)},w=function(e){var t=Object(l.a)(n.meals);t[e]=!t[e],b("meals",t)},y=r.a.createElement("button",{onClick:p},"Weiter");return r.a.createElement("div",null,0===k&&r.a.createElement(m,{title:"Hey lass uns loslegen! Wie m\xf6chtest du dich anmelden?"},r.a.createElement("button",{onClick:p},"In 7 Fragen schnell zum Individuellen Lunchletter"),r.a.createElement("button",{onClick:function(){E(99)}},"Direkt anmelden ohne individuelle Einstellungen")),1===k&&r.a.createElement(m,{title:"Alles klar: Verr\xe4tst du uns zuerst, an welche Mail-Adresse wir den Lunchletter schicken sollen?"},r.a.createElement("input",{type:"text",value:n.email,onChange:function(e){b("email",e.target.value)}}),y),2===k&&r.a.createElement(m,{title:"Perfekt du bekommst den Lunchletter an ".concat(n.email,"! An welchen Tagen m\xf6chtest du den Lunchletter haben?")},d.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",key:e,checked:n.days[t],onClick:function(){v(t)}})," ",r.a.createElement("label",{onClick:function(){v(t)}},e))})),y),3===k&&r.a.createElement(m,{title:"Auch in den Semesterferien?"},r.a.createElement("button",{onClick:function(){b("semesterBreak",!0),p()}},"ja"),r.a.createElement("button",{onClick:function(){b("semesterBreak",!1),p()}},"nein")),4===k&&r.a.createElement(m,{title:"Ist notiert. Welche Gerichte sollen wir in deinen pers\xf6nlichen Lunchletter aufnehmen?"},h.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",key:e,checked:n.meals[t],onClick:function(){w(t)}})," ",r.a.createElement("label",{onClick:function(){w(t)}},e))})),y),5===k&&r.a.createElement(m,{title:"Super, wir haben es fast geschafft. Jetzt m\xfcssen wir nur noch wissen, welchen Preis wir dir f\xfcr die Mittagsgerichte anzeigen sollen:"},Object.keys(f).map((function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"radio",key:e,checked:e===n.userGroup,onClick:function(){return b("userGroup",e)}}),r.a.createElement("label",{onClick:function(){return b("userGroup",e)}},f[e]))})),y),6===k&&r.a.createElement(m,{title:"Fertig, wir haben deinen Lunchletter konfiguriert. Sehr gerne w\xfcrden wir dich auch mit Namen ansprechen:"},r.a.createElement("input",{type:"text",placeholder:"Wie hei\xdft du?",onChange:function(e){return b("name",e.target.value)}}),r.a.createElement("label",null,"Wir verwenden deinen Namen ausschlie\xdflich f\xfcr die Personalisierung deiner Mails."),y),7===k&&r.a.createElement(m,{title:"Cool ".concat(n.name,"! Wir haben dir gerade eine Best\xe4tigungsmail gesendet. Bitte best\xe4tige den\n        Link um ab sofort den Lunchletter zu erhalten.")}),99===k&&r.a.createElement(m,{title:"Flott zu deinem Lunchletter: Dann ben\xf6tigen wir nur noch deine Mailadresse:"},r.a.createElement("input",{type:"text"})))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.75b7ee4f.chunk.js.map