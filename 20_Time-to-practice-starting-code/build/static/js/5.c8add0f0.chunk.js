(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{47:function(e,t,c){e.exports={item:"QuoteItem_item__1RCWb"}},48:function(e,t,c){e.exports={list:"QuoteList_list__9ddfC",sorting:"QuoteList_sorting__3pEc-"}},49:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__2Yhb_"}},52:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),i=c(8),o=c(47),r=c.n(o),a=c(1),u=function(e){return Object(a.jsxs)("li",{className:r.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(i.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},d=c(48),j=c.n(d),l=function(e){var t,c,i=Object(n.h)(),o=Object(n.i)(),r="asc"===new URLSearchParams(o.search).get("sort"),d=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("div",{className:j.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){i.push({pathname:o.pathname,search:"?sort=".concat(r?"desc":"asc")})},children:["Sort ",r?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:j.a.list,children:d.map((function(e){return Object(a.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(33),h=c(34),x=c(14),O=c(49),p=c.n(O),f=function(){return Object(a.jsxs)("div",{className:p.a.noquotes,children:[Object(a.jsx)("p",{children:"No quotes found!"}),Object(a.jsx)(i.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})};t.default=function(){var e=Object(b.a)(h.d,!0),t=e.sendRequest,c=e.status,n=e.data,i=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(a.jsx)("div",{children:Object(a.jsx)(x.a,{})}):i?Object(a.jsx)("p",{className:"centered focused",children:i}):"completed"!==c||n&&0!=n.length?Object(a.jsx)(l,{quotes:n}):Object(a.jsx)(f,{})}}}]);
//# sourceMappingURL=5.c8add0f0.chunk.js.map