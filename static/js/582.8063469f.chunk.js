"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[582],{4582:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var t,a,c,o,u,i,s,p=r(5861),f=r(9439),l=r(7757),d=r.n(l),x=r(2791),m=r(1087),h=r(7689),v=r(9014),g=r(1414),b=r(168),y=r(6444),Z=y.ZP.form(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),k=y.ZP.input(a||(a=(0,b.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  padding: 8px;\n  margin-right: 15px;\n  font-size: 16px;\n"]))),w=y.ZP.button(c||(c=(0,b.Z)(["\n  background-color: #9dc8f0;\n  border: 1px solid #0d57aa;\n  border-radius: 4px;\n  padding: 8px 18px;\n  font-size: 16px;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: #508cc5;\n    color: #ffffff;\n  }\n"]))),j=r(184),S=function(n){var e=n.onSubmit;return(0,j.jsxs)(Z,{onSubmit:function(n){n.preventDefault();var r=n.target.elements.query.value;r?(e(r),n.target.reset()):v.Am.error("Enter something in search line")},children:[(0,j.jsx)(k,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,j.jsx)(w,{type:"submit",children:"Search"})]})},_=y.ZP.section(o||(o=(0,b.Z)(["\n  padding: 0 40px 20px 40px;\n"]))),P=y.ZP.h2(u||(u=(0,b.Z)(["\n  margin-top: 25px;\n  margin-bottom: 30px;\n  font-size: 35px;\n  font-weight: 500;\n  text-align: center;\n"]))),q=y.ZP.ul(i||(i=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  list-style: none;\n"]))),A=(0,y.ZP)(m.rU)(s||(s=(0,b.Z)(["\n  color: #29557e;\n  font-size: 20px;\n  &:hover,\n  &:focus {\n    color: #0f71c7;\n    border-bottom: 2px solid #0f71c7;\n  }\n"]))),U=function(){var n=(0,x.useState)([]),e=(0,f.Z)(n,2),r=e[0],t=e[1],a=(0,m.lr)(),c=(0,f.Z)(a,2),o=c[0],u=c[1],i=(0,h.TH)();(0,x.useEffect)((function(){var n,e=null!==(n=o.get("query"))&&void 0!==n?n:"";if(e){var r=function(){var n=(0,p.Z)(d().mark((function n(){var r,a;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.E3)(e);case 3:r=n.sent,0===(a=r.results).length?(v.Am.dismiss(),v.Am.error("Sorry, there are no movies matching your search query."),t([])):t(a),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),v.Am.error(n.t0.message),t([]);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();r()}}),[o]);return(0,j.jsx)("main",{children:(0,j.jsxs)(_,{children:[(0,j.jsx)(P,{children:"Movies Page"}),(0,j.jsx)(S,{onSubmit:function(n){var e;n!==(null!==(e=o.get("query"))&&void 0!==e?e:"")?u({query:n}):v.Am.error("This word has already been searched for. Try another one.")}}),(0,j.jsx)(q,{children:r.map((function(n){var e=n.id,r=n.title;return(0,j.jsx)("li",{children:(0,j.jsx)(A,{to:"/movies/".concat(e),state:{from:i},children:r})},e)}))})]})})}},1414:function(n,e,r){r.d(e,{E3:function(){return p},Hx:function(){return d},Mc:function(){return l},_k:function(){return s},uV:function(){return f}});var t=r(5861),a=r(7757),c=r.n(a),o=r(1243),u="https://api.themoviedb.org/3",i="0bd052a36cb17fd9656e5b38bc680abf",s=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(e,"}/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=582.8063469f.chunk.js.map