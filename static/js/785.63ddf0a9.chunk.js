"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[785],{5244:function(n,e,t){t.d(e,{BI:function(){return o},KS:function(){return s},MN:function(){return p},cJ:function(){return v},r8:function(){return f}});var r=t(5861),a=t(4687),c=t.n(a),u=t(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="aaa12d4440cdf67f9c9c4c90ab823aeb",s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6785:function(n,e,t){t.r(e);var r=t(5861),a=t(9439),c=t(4687),u=t.n(c),i=t(2791),s=t(7689),o=t(5244),p=t(184);e.default=function(){var n=(0,i.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],f=(0,s.UO)().movieId;return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.cJ)(f);case 3:e=n.sent,c(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),alert("Error");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[f]),(0,p.jsxs)(p.Fragment,{children:[0===t.length&&(0,p.jsx)("p",{children:"We don't have any reviews for the movie"}),t.length>0&&(0,p.jsx)("div",{children:t.map((function(n){return(0,p.jsxs)("div",{children:[(0,p.jsxs)("h3",{children:["Author: ",n.author]}),(0,p.jsx)("p",{children:n.content})]},n.id)}))})]})}}}]);
//# sourceMappingURL=785.63ddf0a9.chunk.js.map