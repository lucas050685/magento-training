/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as a,jsxs as P}from"@dropins/tools/preact-jsx-runtime.js";import{Card as h,Header as x}from"@dropins/tools/components.js";import"../chunks/OrderCancel.js";import{classes as q}from"@dropins/tools/lib.js";import{useState as g,useEffect as L,useMemo as R}from"@dropins/tools/preact-hooks.js";import{events as T}from"@dropins/tools/event-bus.js";import{s as S}from"../chunks/setTaxStatus.js";import{g as b}from"../chunks/getStoreConfig.js";import{Fragment as N}from"@dropins/tools/preact.js";import"@dropins/tools/preact-compat.js";import{a as Q}from"../chunks/OrderLoaders.js";import{C as k}from"../chunks/CartSummaryItem.js";import{useText as v}from"@dropins/tools/i18n.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";const w=({orderData:s})=>{const[o,r]=g(!0),[d,n]=g(s),[t,i]=g({taxIncluded:!1,taxExcluded:!1});return L(()=>{b().then(e=>{if(e){const c=S(e==null?void 0:e.shoppingCartDisplayPrice);i(c)}}).finally(()=>{r(!1)})},[]),L(()=>{const e=T.on("order/data",c=>{n(c)},{eager:!0});return()=>{e==null||e.off()}},[]),{loading:o,taxConfig:t,order:d}},G=s=>{const o=(s==null?void 0:s.items)??[],r=o.filter(t=>(t==null?void 0:t.eligibleForReturn)&&(t==null?void 0:t.quantityReturnRequested)).map(t=>({...t,totalQuantity:t.quantityReturnRequested})),d=new Map(r.map(t=>[t.id,t])),n=o.map(t=>{const i=d.get(t==null?void 0:t.id);if(i){const e=t.totalQuantity-i.quantityReturnRequested;return e===0?null:{...t,totalQuantity:e}}return t}).filter(t=>t!==null);return{returnedList:r,canceledItems:n==null?void 0:n.filter(t=>t.quantityCanceled),nonCanceledItems:n==null?void 0:n.filter(t=>!t.quantityCanceled)}},I=({loading:s,taxConfig:o,order:r=null,withHeader:d=!0,showConfigurableOptions:n,routeProductDetails:t})=>{const i=!!(r!=null&&r.returnNumber),e=v({cancelled:"Order.OrderProductListContent.cancelledTitle",allOrders:"Order.OrderProductListContent.allOrdersTitle",returned:"Order.OrderProductListContent.returnedTitle",refunded:"Order.OrderProductListContent.refundedTitle",sender:"Order.OrderProductListContent.GiftCard.sender",recipient:"Order.OrderProductListContent.GiftCard.recipient",message:"Order.OrderProductListContent.GiftCard.message",outOfStock:"Order.OrderProductListContent.stockStatus.outOfStock",downloadableCount:"Order.OrderProductListContent.downloadableCount"}),c=R(()=>{var m,p;if(!r)return[];if(!i){const{returnedList:u,canceledItems:f,nonCanceledItems:C}=G(r);return[{type:"returned",list:u,title:e.returned},{type:"cancelled",list:f,title:e.cancelled},{type:"allItems",list:C,title:e.allOrders}].filter(O=>{var y;return((y=O==null?void 0:O.list)==null?void 0:y.length)>0})}return[{type:"returned",list:((p=(m=r.returns.find(u=>u.returnNumber===(r==null?void 0:r.returnNumber)))==null?void 0:m.items)==null?void 0:p.map(u=>({...u,totalQuantity:u.requestQuantity})))??[],title:e.returned}]},[r,i,e]);return r?c.every(l=>l.list.length===0)?null:a(h,{variant:"secondary",className:"order-order-product-list-content",children:c.map((l,m)=>{var u;const p=l.list.reduce((f,{totalQuantity:C})=>C+f,0);return P(N,{children:[d?a(x,{title:`${l.title} (${p})`}):null,a("ul",{className:"order-order-product-list-content__items",children:(u=l.list)==null?void 0:u.map(f=>a("li",{"data-testid":"order-product-list-content-item",children:a(k,{loading:s,product:f,itemType:l.type,taxConfig:o,translations:e,showConfigurableOptions:n,routeProductDetails:t})},f.id))})]},m)})}):a(Q,{})},W=({className:s,orderData:o,withHeader:r,showConfigurableOptions:d,routeProductDetails:n})=>{const{loading:t,taxConfig:i,order:e}=w({orderData:o});return a("div",{className:q(["order-order-product-list",s]),children:a(I,{loading:t,taxConfig:i,order:e,withHeader:r,showConfigurableOptions:d,routeProductDetails:n})})};export{W as OrderProductList,W as default};
