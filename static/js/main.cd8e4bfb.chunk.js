(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{170:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(24),r=n.n(i),a=n(91),s=n(38),j=n(175),o=n(8);var d=function(){return Object(o.jsx)("header",{children:Object(o.jsxs)("h1",{children:[Object(o.jsx)(j.a,{}),"To Do List"]})})};var l=function(){return Object(o.jsx)("footer",{children:Object(o.jsx)("p",{children:"Made with \u2764 by Siddharth Bihani"})})},u=n(176),b=n(90);var O=function(e){return Object(o.jsxs)("div",{className:"note",children:[Object(o.jsx)("h1",{children:e.title}),Object(o.jsx)("p",{children:e.description}),Object(o.jsx)(b.a,{onClick:function(){e.onDelete(e.id)},children:Object(o.jsx)(u.a,{})})]})},h=n(51),x=n(65),p=n(177),f=n(173),v=n(172),m=f.a.TextArea;var k=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)({title:"",description:""}),j=Object(s.a)(a,2),d=j[0],l=j[1];function u(e){var t=e.target,n=t.name,c=t.value;l((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(h.a)({},n,c))}))}return Object(o.jsx)("div",{children:Object(o.jsxs)(v.a,{className:"create-note",children:[i&&Object(o.jsx)(f.a,{name:"title",onChange:u,value:d.title,placeholder:"Add Task"}),Object(o.jsx)(m,{name:"description",onClick:function(){r(!0)},onChange:u,value:d.description,placeholder:i?"Add Task Description":"Add Task",rows:i?3:1}),Object(o.jsx)(b.a,{type:"primary",shape:"circle",onClick:function(t){e.onAdd(d),l({title:"",description:""}),t.preventDefault()},children:Object(o.jsx)(p.a,{})})]})})};var A=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1];function r(e){i((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsx)(k,{onAdd:function(e){i((function(t){return[].concat(Object(a.a)(t),[e])}))}}),n.map((function(e,t){return Object(o.jsx)(O,{id:t,title:e.title,description:e.description,onDelete:r},t)})),Object(o.jsx)(l,{})]})};r.a.render(Object(o.jsx)(A,{}),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.cd8e4bfb.chunk.js.map