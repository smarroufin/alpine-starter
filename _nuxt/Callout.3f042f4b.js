import m from"./ContentSlot.3e19deef.js";import{a as d,D as l,o as _,e as f,f as o,h as t,x as c,u as r,$ as v,a0 as h,O as C,m as g}from"./entry.69e973a5.js";/* empty css                    */const y={class:"summary"},V={class:"content"},w=d({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>l(!1)}},emits:["update:modelValue"],setup(s,{emit:u}){const e=l(s.modelValue),i=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(a,k)=>{const n=m,p=C;return _(),f("div",{class:c(["callout",[s.type]])},[o("span",{class:"preview",onClick:i},[o("span",y,[t(n,{use:a.$slots.summary},null,8,["use"])]),t(p,{name:"heroicons-outline:chevron-right",class:c(["icon",[r(e)&&"rotate"]])},null,8,["class"])]),v(o("div",V,[t(n,{use:a.$slots.content},null,8,["use"])],512),[[h,r(e)]])],2)}}}),D=g(w,[["__scopeId","data-v-961b73c7"]]);export{D as default};
