import{c as d,a as m}from"./convertCase.js";const a=s=>{let o=[];for(const e of s)if(!(e.frontend_input!=="MULTILINE"||e.multiline_count<2))for(let n=2;n<=e.multiline_count;n++){const c={...e,name:`${e.code}_${n}`,code:`${e.code}_${n}`,id:`${e.code}_${n}`};o.push(c)}return o},f=s=>{var u;const o=s||[];if(!o.length)return[];const e=(u=o.filter(t=>{var r;return!((r=t.frontend_input)!=null&&r.includes("HIDDEN"))}))==null?void 0:u.map(({code:t,...r})=>{const i=t!=="country_id"?t:"country_code";return{...r,name:i,id:i,code:i}}),n=a(e);return e.concat(n).map(t=>{const r=d(t.code);return m({...t,customUpperCode:r},"camelCase",{frontend_input:"fieldType",frontend_class:"className",is_required:"required",sort_order:"orderNumber"})}).sort((t,r)=>t.orderNumber-r.orderNumber)};export{f as t};
