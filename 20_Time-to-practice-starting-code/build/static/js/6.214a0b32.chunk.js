(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{39:function(e,t,c){e.exports={card:"Card_card__avqen"}},40:function(e,t,c){e.exports={form:"QuoteForm_form__1AsXi",loading:"QuoteForm_loading__1AAVk",control:"QuoteForm_control__3lSh-",actions:"QuoteForm_actions__3BiKV"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(2),s=c(35),r=c(39),a=c.n(r),u=c(1),i=function(e){return Object(u.jsx)("div",{className:a.a.card,children:e.children})},l=c(14),d=c(40),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),r=c[0],a=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(o.a,{when:r,message:function(e){return"Are you sure you want to leave? All your entered data will be lost"}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(33),f=c(34);t.default=function(){var e=Object(h.a)(f.b),t=e.sendRequest,c=e.status,s=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&s.push("/quotes")}),[c,s]);return Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e),s.push("/quotes")}})}}}]);
//# sourceMappingURL=6.214a0b32.chunk.js.map