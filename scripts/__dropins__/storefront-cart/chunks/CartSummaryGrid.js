import{jsx as a,Fragment as l}from"@dropins/tools/preact-jsx-runtime.js";import{useState as y,useEffect as h}from"@dropins/tools/preact-compat.js";import{classes as d,VComponent as _}from"@dropins/tools/lib.js";/* empty css       */import{E as C}from"./EmptyCart.js";import{Image as v}from"@dropins/tools/components.js";import{events as N}from"@dropins/tools/event-bus.js";import{g as b}from"./persisted-data.js";const j=({className:m,children:i,emptyCart:n,products:e,...c})=>a("div",{...c,className:d(["cart-cart-summary-grid",m]),children:a(l,{children:a("div",{className:d(["cart-cart-summary-grid__content",["cart-cart-summary-grid__content--empty",!e]]),children:e||a(_,{node:n,className:"cart-cart-summary-grid__empty-cart"})})})}),D=({children:m,initialData:i=null,routeProduct:n,routeEmptyCartCTA:e,...c})=>{const[s,g]=y(i);h(()=>{const r=N.on("cart/data",t=>{g(t)},{eager:!0});return()=>{r==null||r.off()}},[]);const p=(r,t)=>{const f=r.selectedOptions?`${r.name}: ${Object.entries(r.selectedOptions).join("; ")}`:r.name,o=a(v,{"data-testid":"cart-grid-item-image",loading:t<4?"eager":"lazy",src:r.image.src,alt:r.image.alt,"aria-label":f,width:"100%"});return n?a("div",{className:"cart-cart-summary-grid__item-container",children:a("a",{href:n(r),children:o})},t):o},u=s&&a(l,{children:s.items.map((r,t)=>p(r,t))});return a(j,{...c,emptyCart:a(C,{ctaLinkURL:e?e():void 0}),products:u})};D.getInitialData=async function(){return b()};export{D as C};
