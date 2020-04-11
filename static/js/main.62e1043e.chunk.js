(this.webpackJsonpgithub=this.webpackJsonpgithub||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},21:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),l=a.n(c),u=(a(21),a(3)),s=a(2),o=a.n(s),i=a(5),m=a(4),h=function(e){return n.a.createElement("header",null,n.a.createElement("h1",null,n.a.createElement("span",{className:"highlight"},"Github Users")),"dark"===e.theme?n.a.createElement(m.a,{icon:"sun",size:"2x",color:"#dcba31",onClick:function(){return e.setTheme("light")}}):n.a.createElement(m.a,{icon:"moon",size:"2x",color:"#1c132d",onClick:function(){return e.setTheme("dark")}}))},p=function(e){return n.a.createElement("form",null,n.a.createElement("input",{type:"text",onChange:function(t){return e.setInputText(t.target.value)},value:e.search,placeholder:"username",name:"input"}))},f=a(15),d=function(e){var t=Object(r.useRef)(null),a=Object(r.useState)(!0),c=Object(u.a)(a,2),l=c[0],s=c[1];return Object(r.useEffect)((function(){e.repos.length>0?s(!1):s(!0)}),[e.repos]),Object(r.useEffect)((function(){f.a.to(t.current.children,{autoAlpha:1,stagger:.25})}),[e.repos]),n.a.createElement(n.a.Fragment,null,l&&n.a.createElement("p",{className:"noRepos"},"That's place for user repositories search for username and see user repos."),e.repos&&n.a.createElement("div",{className:"allRepos",ref:t},e.repos.map((function(t,a){return n.a.createElement("div",{className:"dark"===e.theme?"repoContainer":"repoContainer lightTheme",key:a},n.a.createElement("h3",null,t.name),n.a.createElement("p",null,"language - ",t.language,n.a.createElement("a",{className:"repoLink",target:"_blank",rel:"noopener noreferrer",disabled:!e.url,href:t.html_url},n.a.createElement(m.a,{color:"dark"===e.theme?"white":"black",icon:"link"}))))}))))},b=a(8),E=a(9),v=a(10);var g=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t));case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var j=function(e){var t=Object(r.useState)(e.url),a=Object(u.a)(t,2),c=a[0],l=(a[1],function(e,t){var a=Object(r.useState)(),n=Object(u.a)(a,2),c=n[0],l=n[1],s=Object(E.a)((function(){return Object(v.a)(g,300)})),m=Object(b.useAsync)(Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}return t.abrupt("return",[]);case 4:return t.abrupt("return",s(e));case 5:case"end":return t.stop()}}),t)}))),[e]);return Object(r.useEffect)((function(){!function(e){var t,a,r=[];if(e&&e.length>3)for(var n=e.length,c=0;c<=3;c++){var u=(t=0,a=n,t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t))+t);r.push(e[u])}l(r)}(m.result)}),[m.result]),{allRepos:m,reducedRepos:c}}(c)),s=l.allRepos,m=s.loading,h=s.error,p=s.result;return n.a.createElement("div",null,n.a.createElement("h2",null,"Repositories"),m&&n.a.createElement("div",null,"Loading"),h&&n.a.createElement("div",null,"Error: ",h.message),p&&n.a.createElement(d,{theme:e.theme,repos:l.reducedRepos}))},k=function(e){var t=e.search,a=t.loading,r=t.error,c=t.result;return n.a.createElement("div",null,a&&n.a.createElement("div",{className:"loadingDiv"},"Loading user data ... "),r&&n.a.createElement("div",null,"Error: ",r.message),c&&n.a.createElement("div",{className:"resultContainer"},n.a.createElement("div",{className:"resultLeft"},n.a.createElement("img",{src:0===c.length?"/Github-Users-API/img/default-user.png":c.avatar_url,alt:"Avatar"}),n.a.createElement("h2",null,0===c.length?"Enter username in input":c.name),n.a.createElement("p",{className:"bio"},c.bio),n.a.createElement("div",{className:"location"},n.a.createElement("span",null,n.a.createElement(m.a,{icon:"map-marker-alt"})),n.a.createElement("span",{className:"locationText"},0===c.length?"Somewhere in wonderfull world":c.location))),n.a.createElement("div",{className:"resultRight"},n.a.createElement(j,{theme:e.theme,url:c.repos_url}))))},O=a(6),w=a(7);O.b.add(w.d,w.c,w.b,w.a);var x=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function N(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(E.a)((function(){return Object(v.a)(x,300)})),l=Object(b.useAsync)(Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==a.length){e.next=4;break}return e.abrupt("return",[]);case 4:return e.abrupt("return",c(a));case 5:case"end":return e.stop()}}),e)}))),[a]);return{inputText:a,setInputText:n,search:l}}var T=function(){var e=Object(r.useState)("dark"),t=Object(u.a)(e,2),a=t[0],c=t[1],l=N(),s=(l.inputText,l.setInputText),o=l.search;return n.a.createElement("div",{className:"dark"===a?"App":"App light"},n.a.createElement(h,{theme:a,setTheme:c}),n.a.createElement(p,{setInputText:s}),n.a.createElement(k,{useSearchGithubUser:N,search:o,theme:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.62e1043e.chunk.js.map