(this["webpackJsonpmovie-finder"]=this["webpackJsonpmovie-finder"]||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(18),a=c.n(r),i=(c(24),c(2)),o=c(10),j=c.n(o),u=c(12),b=c(7),l=c(1),h="https://www.omdbapi.com/?apikey=".concat("ff02321d"),O=s.a.createContext(),d=function(e){var t=e.children,c=Object(n.useState)(!0),s=Object(b.a)(c,2),r=s[0],a=s[1],i=Object(n.useState)({show:!1,msg:""}),o=Object(b.a)(i,2),d=o[0],m=o[1],f=Object(n.useState)([]),x=Object(b.a)(f,2),v=x[0],p=x[1],g=Object(n.useState)("batman"),w=Object(b.a)(g,2),N=w[0],S=w[1],y=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:"True"===(n=e.sent).Response?(p(n.Search),m({show:!1,msg:""})):m({show:!0,msg:n.Error}),a(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y("".concat(h,"&s=").concat(N))}),[N]),Object(l.jsx)(O.Provider,{value:{isLoading:r,error:d,movies:v,query:N,setQuery:S},children:t})},m=function(){return Object(n.useContext)(O)},f=function(){var e=m(),t=e.query,c=e.setQuery,n=e.error;return Object(l.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault()},children:[Object(l.jsx)("h2",{children:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(l.jsx)("input",{type:"text",className:"form-input",value:t,onChange:function(e){c(e.target.value)}}),n.show&&Object(l.jsx)("div",{className:"error",children:n.msg})]})},x=c(8),v=function(){var e=m(),t=e.movies;return e.isLoading?Object(l.jsx)("div",{className:"loading"}):Object(l.jsx)("section",{className:"movies",children:t.map((function(e){var t=e.imdbID,c=e.Poster,n=e.Title,s=e.Year;return Object(l.jsx)(x.b,{to:"/movies/".concat(t),className:"movie",children:Object(l.jsxs)("article",{children:[Object(l.jsx)("img",{src:"N/A"===c?"https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png":c,alt:n}),Object(l.jsxs)("div",{className:"movie-info",children:[Object(l.jsx)("h4",{className:"title",children:n}),Object(l.jsx)("p",{children:s})]})]})},t)}))})},p=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)(f,{}),Object(l.jsx)(v,{})]})},g=function(){var e=Object(i.f)().id,t=Object(n.useState)({}),c=Object(b.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(!0),o=Object(b.a)(a,2),O=o[0],d=o[1],m=Object(n.useState)({show:!1,msg:""}),f=Object(b.a)(m,2),v=f[0],p=f[1],g=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:"False"===(n=e.sent).Response?(p({show:!0,msg:n.error}),d(!1)):(r(n),d(!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){g("".concat(h,"&i=").concat(e))}),[e]),O)return Object(l.jsx)("div",{className:"loading"});if(v.show)return Object(l.jsxs)("div",{className:"page-error",children:[Object(l.jsx)("h1",{children:v.msg}),Object(l.jsx)(x.b,{to:"/",className:"btn",children:"\ub3cc\uc544\uac00\uae30"})]});var w=s.Poster,N=s.Title,S=s.Plot,y=s.Year;return Object(l.jsxs)("section",{className:"single-movie",children:[Object(l.jsx)("img",{src:w,alt:N}),Object(l.jsxs)("div",{className:"single-movie-info",children:[Object(l.jsx)("h2",{children:N}),Object(l.jsx)("p",{children:S}),Object(l.jsx)("h4",{children:y}),Object(l.jsx)(x.b,{to:"/",className:"btn",children:"\ub3cc\uc544\uac00\uae30"})]})]})};var w=function(){return Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",exact:!0,children:Object(l.jsx)(p,{})}),Object(l.jsx)(i.a,{path:"/movies/:id",children:Object(l.jsx)(g,{})})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d,{children:Object(l.jsx)(x.a,{children:Object(l.jsx)(w,{})})})}),document.getElementById("root")),N()}},[[32,1,2]]]);
//# sourceMappingURL=main.ac3659c0.chunk.js.map