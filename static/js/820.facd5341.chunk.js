"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{429:function(e,t,n){n.d(t,{O:function(){return c}});var r=n(689),a=n(87),u=n(184),c=function(e){var t=e.movies,n=(0,r.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{to:"/movies/".concat(e.id),state:{from:n},children:(0,u.jsx)("h2",{children:e.title})})},e.id)}))})}},820:function(e,t,n){n.r(t);var r=n(439),a=n(429),u=n(791),c=n(87),s=n(589),i=n(184);t.default=function(){var e=(0,u.useState)(""),t=(0,r.Z)(e,2),n=t[0],o=t[1],p=(0,c.lr)(),f=(0,r.Z)(p,2),l=f[0],h=f[1],d=(0,u.useState)([]),v=(0,r.Z)(d,2),m=v[0],g=v[1];(0,u.useEffect)((function(){var e=l.get("query");e&&(console.log(e),(0,s.Wf)(e).then(g).finally((function(){return e(e)})))}),[l]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.dir(e.target),l&&h({query:n})},children:[(0,i.jsx)("div",{children:"Movies"}),(0,i.jsx)("input",{type:"text",name:"query",value:n,onChange:function(e){o(e.target.value)}}),(0,i.jsx)("button",{type:"submit",children:" Search"})]}),(0,i.jsx)(a.O,{movies:m})]})}},589:function(e,t,n){n.d(t,{Wf:function(){return p},fh:function(){return l},q5:function(){return m},wr:function(){return i},yo:function(){return d}});var r=n(861),a=n(757),u=n.n(a),c=n(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="e146a7a5146c0f8a3c3cd99167c5b659";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/week?",{params:{api_key:s,page:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.Z.get("/search/movie?&language=en-US&query=".concat(t,"&page=1&include_adult=false"),{params:{api_key:s,page:1}}),e.next=3,n;case 3:return e.abrupt("return",e.sent.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.Z.get("/movie/".concat(t,"?&language=en-US"),{params:{api_key:s}}),e.next=3,n;case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.Z.get("/movie/".concat(t,"/credits?&language=en-US"),{params:{api_key:s}}),e.next=3,n;case 3:return e.abrupt("return",e.sent.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.Z.get("/movie/".concat(t,"/reviews?&language=en-US"),{params:{api_key:s}}),e.next=3,n;case 3:return e.abrupt("return",e.sent.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=820.facd5341.chunk.js.map