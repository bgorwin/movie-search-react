(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),s=c(5),i=c.n(s),l=(c(12),c(3)),o=c.n(l),u=c(6),j=c(4);function d(e){var t=e.movie;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(n.jsxs)("div",{className:"card--content",children:[Object(n.jsx)("h3",{className:"card--title",children:t.title}),Object(n.jsx)("p",{children:Object(n.jsxs)("small",{children:["RELEASE DATE: ",t.release_date]})}),Object(n.jsx)("p",{children:Object(n.jsxs)("small",{children:["RATING: ",t.vote_average]})}),Object(n.jsx)("p",{className:"card--desc",children:t.overview})]})]})}function b(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)([]),i=Object(j.a)(s,2),l=i[0],b=i[1],h=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=".concat("38df82f0fadfdd08107804965cfbb21e","&language=en-US&query=").concat(c,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,b(r.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{className:"form",onSubmit:h,children:[Object(n.jsx)("label",{htmlFor:"query",className:"label",children:"Movie Name"}),Object(n.jsx)("input",{className:"input",name:"query",placeholder:"i.e. Broad City",value:c,onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(n.jsx)("div",{className:"card-list",children:l.filter((function(e){return e.poster_path})).map((function(e){return Object(n.jsx)(d,{movie:e},e.id)}))})]})}c(14);var h=function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"title",children:"React Movie Search"}),Object(n.jsx)(b,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.5886a6e7.chunk.js.map