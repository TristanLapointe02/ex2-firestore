(this["webpackJsonpex2-firestore"]=this["webpackJsonpex2-firestore"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(20),a=c.n(i),r=c(15),o=(c(41),c(13)),j=(c(42),c(43),c(34)),l=c.n(j),d=c(75),u=(c(44),c(2));function b(e){var t=function(e){var t={nbArticles:0,totalItems:0,st:0,tps:0,tvq:0,total:0};t.nbArticles=e.length,t.totalItems=e.reduce((function(e,t){return e+t.qte}),0);var c=e.reduce((function(e,t){return e+t.prix*t.qte}),0);t.st=c.toFixed(2);var n=.05*c;t.tps=n.toFixed(2);var s=.09975*c;return t.tvq=s.toFixed(2),t.total=(c+n+s).toFixed(2),t}(e.articles);return Object(u.jsxs)("div",{className:"SommairePanier",children:[Object(u.jsxs)("span",{children:["Articles diff\xe9rents : ",t.nbArticles]}),Object(u.jsxs)("span",{children:["Total # items : ",t.totalItems]}),Object(u.jsxs)("span",{children:["Sous-total : ",t.st]}),Object(u.jsxs)("span",{children:["TPS : ",t.tps]}),Object(u.jsxs)("span",{children:["TVQ : ",t.tvq]}),Object(u.jsxs)("span",{children:["Total : ",t.total]})]})}function x(e){var t=e.etatPanier,c=Object(o.a)(t,1)[0],s=Object.values(c),i=Object(n.useState)(!1),a=Object(o.a)(i,2),j=a[0],x=a[1];return Object(u.jsxs)("header",{className:"Entete",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)(r.b,{to:"/",children:"Magasin"})}),Object(u.jsxs)("ul",{className:"navPrincipale",children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.c,{to:"/nos-produits",activeClassName:"navActive",children:"Produits"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.c,{to:"/a-propos-de-nous",activeClassName:"navActive",children:"\xc0 propos de nous"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.c,{to:"/contactez-nous",activeClassName:"navActive",children:"Contactez-nous"})})]}),Object(u.jsxs)("ul",{className:"navUtilisateur",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)(d.a,{onClick:function(){return x(!j)},badgeContent:s.reduce((function(e,t){return e+t.qte}),0),color:"secondary",children:Object(u.jsx)(l.a,{})}),j&&Object(u.jsx)(b,{articles:s})]}),Object(u.jsx)("li",{children:"Mon compte"})]})]})}c(55),c(12),c(16),c(56);c(35),c(57);function O(e){return Object(n.useEffect)((function(){}),[]),Object(u.jsxs)("div",{className:"ListeProduits",children:[Object(u.jsx)("h2",{children:"Produits disponibles"}),Object(u.jsx)("ul",{})]})}function h(){return Object(u.jsxs)("div",{className:"Accueil",children:[Object(u.jsx)("h2",{children:"Magasin"}),Object(u.jsx)("p",{children:"Page d'accueil en construction"})]})}function p(){return Object(u.jsxs)("div",{className:"Apropos",children:[Object(u.jsx)("h2",{children:"\xc0 propos de nous"}),Object(u.jsx)("p",{children:"Patati et patata"})]})}function f(){return Object(u.jsxs)("div",{className:"Contact",children:[Object(u.jsx)("h2",{children:"Contactez-nous"}),Object(u.jsx)("p",{children:"Formulaire de contact \xe0 venir"})]})}c(58);var v=(new Date).getFullYear();function m(e){return Object(u.jsxs)("footer",{className:"PiedDePage",children:["\xa9",v," - TIM - Tous droits r\xe9serv\xe9s."]})}var N=c(3);function g(){var e=Object(n.useState)((function(){return window.localStorage.getItem("panier-4pa-ex2")?JSON.parse(window.localStorage.getItem("panier-4pa-ex2")):{}})),t=Object(o.a)(e,1)[0];return Object(n.useEffect)((function(){return window.localStorage.setItem("panier-4pa-ex2",JSON.stringify(t))}),[t]),Object(u.jsxs)("div",{className:"Appli",children:[Object(u.jsx)(x,{etatPanier:e}),Object(u.jsx)("section",{className:"contenuPrincipal",children:Object(u.jsxs)(N.c,{children:[Object(u.jsx)(N.a,{path:"/",component:h,exact:!0}),Object(u.jsx)(N.a,{path:"/nos-produits",children:Object(u.jsx)(O,{etatPanier:e,exact:!0})}),Object(u.jsx)(N.a,{path:"/a-propos-de-nous",exact:!0,children:Object(u.jsx)(p,{})}),Object(u.jsx)(N.a,{path:"/contactez-nous",component:f,exact:!0})]})}),Object(u.jsx)(m,{})]})}var P=-1!==window.location.href.search(/github\.io/)?"/".concat("iwra-ex2-firestore"):"";a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(r.a,{basename:P,children:Object(u.jsx)(g,{})})}),document.getElementById("racine"))}},[[60,1,2]]]);
//# sourceMappingURL=main.b0926335.chunk.js.map