"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,a,c,o,u,i,p,s,x=e(5861),f=e(9439),d=e(7757),l=e.n(d),h=e(2791),g=e(7689),v=e(1414),m=e(168),w=e(6444),Z=w.ZP.div(r||(r=(0,m.Z)(["\n  margin-top: 30px;\n  padding: 0 80px 40px 80px;\n"]))),b=w.ZP.h3(a||(a=(0,m.Z)(["\n  font-size: 30px;\n  font-weight: 500;\n  text-align: center;\n  text-transform: uppercase;\n"]))),k=w.ZP.ul(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px;\n  align-items: center;\n  margin-top: 30px;\n"]))),y=w.ZP.li(o||(o=(0,m.Z)(["\n  width: calc((100% - 4 * 50px) / 5);\n  height: 400px;\n  word-wrap: break-word;\n"]))),_=w.ZP.div(u||(u=(0,m.Z)(["\n  margin-top: 24px;\n  max-width: 200px;\n"]))),j=w.ZP.h3(i||(i=(0,m.Z)(["\n  margin-bottom: 12px;\n"]))),P=w.ZP.p(p||(p=(0,m.Z)(["\n  margin: 30px auto 0 auto;\n  padding: 20px;\n  max-width: 500px;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  background-color: #f8f8f8;\n  text-align: center;\n"]))),S=w.ZP.img(s||(s=(0,m.Z)(["\n  border-radius: 3px;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),U=e(184),C=function(){var n=(0,h.useState)([]),t=(0,f.Z)(n,2),e=t[0],r=t[1],a=(0,g.UO)().movieId;return(0,h.useEffect)((function(){var n=function(){var n=(0,x.Z)(l().mark((function n(){var t,e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.uV)(a);case 3:t=n.sent,e=t.cast,r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,U.jsxs)(Z,{children:[(0,U.jsx)(b,{children:"Cast"}),e.length?(0,U.jsx)(k,{children:e.map((function(n){var t=n.profile_path,e=n.id,r=n.name,a=n.character;return(0,U.jsxs)(y,{className:"cast-card",children:[t?(0,U.jsx)(S,{src:"".concat("https://image.tmdb.org/t/p/w200").concat(t),alt:"".concat(r," profile")}):(0,U.jsx)(S,{src:"".concat("https://via.placeholder.com/200x300?text=No+Image"),alt:"".concat(r," profile")}),(0,U.jsxs)(_,{children:[(0,U.jsx)(j,{children:r}),(0,U.jsx)("p",{children:a})]})]},e)}))}):(0,U.jsx)(P,{children:"We don't have any information about the cast."})]})}},1414:function(n,t,e){e.d(t,{E3:function(){return s},Hx:function(){return d},Mc:function(){return f},_k:function(){return p},uV:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),o=e(1243),u="https://api.themoviedb.org/3",i="0bd052a36cb17fd9656e5b38bc680abf",p=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"}/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.849cba83.chunk.js.map