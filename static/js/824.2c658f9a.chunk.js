"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[824],{3824:function(n,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t,i,o,s,a,d=r(885),l=r(2791),c=r(6731),x=r(470),p=r(5500),h=r(168),u=r(3842),g=u.Z.div(t||(t=(0,h.Z)(["\n  display: flex;\n  padding: 20px;\n  margin-top: 20px;\n  background-color: lightgray;\n  border-radius: 4px;\n  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.4);\n"]))),v=u.Z.div(i||(i=(0,h.Z)(["\n  padding-left: 40px;\n"]))),j=u.Z.img(o||(o=(0,h.Z)(["\n  height: 500px;\n  border-radius: 4px;\n"]))),f=r(184),b=function(n){var e=n.movie;return(0,f.jsxs)(g,{children:[(0,f.jsx)(j,{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"poster"}),(0,f.jsxs)(v,{children:[(0,f.jsxs)("h2",{children:[e.title," (",e.release_date.slice(0,4),")"]}),(0,f.jsxs)("p",{children:["User score: ",e.vote_average]}),(0,f.jsx)("h4",{children:"Overview:"}),(0,f.jsx)("p",{children:e.overview}),(0,f.jsx)("h4",{children:"Genres:"}),e.genres.map((function(n){return(0,f.jsxs)("p",{children:[" \u2611\ufe0f ",n.name]},n.id)}))]})]})},m=(0,u.Z)(c.rU)(s||(s=(0,h.Z)(["\n  padding: 8px;\n  background-color: lightgray;\n  border-radius: 4px;\n  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.4);\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: blue;\n  }\n"]))),w=function(n){var e=n.to,r=n.children;return(0,f.jsx)(m,{to:e,children:r})},k=u.Z.div(a||(a=(0,h.Z)(["\n  display: flex;\n  padding: 10px;\n  margin-top: 20px;\n  background-color: lightgray;\n  border-radius: 4px;\n  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.4);\n"]))),Z=function(){var n,e,r=(0,x.UO)().movieId,t=(0,l.useState)(null),i=(0,d.Z)(t,2),o=i[0],s=i[1],a=null!==(n=null===(e=(0,x.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,l.useEffect)((function(){(0,p.vq)(Number(r)).then((function(n){return s(n.data)}))}),[r]),o?(0,f.jsxs)("main",{children:[(0,f.jsx)(w,{to:a,children:"\u2b05\ufe0f Go back"}),(0,f.jsx)(b,{movie:o}),(0,f.jsx)(k,{children:(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(c.rU,{to:"cast",state:{from:a},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(c.rU,{to:"reviews",state:{from:a},children:"Reviews"})})]})}),(0,f.jsx)(l.Suspense,{children:(0,f.jsx)(x.j3,{})})]}):null}}}]);
//# sourceMappingURL=824.2c658f9a.chunk.js.map