import h from"./DocumentDrivenEmpty.9f064565.js";import L from"./ContentRenderer.51f11957.js";import C from"./DocumentDrivenNotFound.60a29d5e.js";import{R as H,a as m,ap as x,a7 as R,aq as k,b as g,u as o,ar as d,as as N,at as i,T as j,X as B,ag as D,a8 as E,o as c,e as T,h as p,j as l,c as _}from"./entry.69e973a5.js";import"./ContentRendererMarkdown.57d06af4.js";/* empty css                                   */const q=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const a=await d[s.name]().then(e=>e.default||e);return()=>B(a,t.attrs,t.slots)}}),w=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const a=x("_route"),e=a===R()?k():a,n=g(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=n.value&&n.value in d,r=e.meta.layoutTransition??N;return i(j,u&&r,{default:()=>i(q,u&&{key:n.value,name:n.value,...t.attrs},t.slots).default()}).default()}}}),A={class:"document-driven-page"},P=m({__name:"document-driven",setup(s){const{page:t,layout:a}=D();return t.value,E(t),(e,n)=>{const u=h,r=L,f=C,y=w;return c(),T("div",A,[p(y,{name:o(a)||"default"},{default:l(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:l(({value:v})=>[p(u,{value:v},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{P as default};
