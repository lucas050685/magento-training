/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsxs as c,Fragment as I,jsx as t}from"@dropins/tools/preact-jsx-runtime.js";import{classes as xe}from"@dropins/tools/lib.js";import{Modal as je,Price as de,ContentGrid as Ke,ImageSwatch as Ze,Button as ne,Skeleton as Xe,SkeletonRow as Je,Field as K,Checkbox as ie,Input as ve,TextArea as Qe,Accordion as Pe,AccordionSection as Ne,Icon as X,Card as Me,ProgressSpinner as Ye}from"@dropins/tools/components.js";/* empty css                   */import*as J from"@dropins/tools/preact-compat.js";import{useState as P,useEffect as oe,useId as We,useCallback as j,useMemo as _e}from"@dropins/tools/preact-hooks.js";import{useText as Z}from"@dropins/tools/i18n.js";import{s as B}from"../chunks/resetCart.js";import{S as Ve}from"../chunks/ChevronUp.js";import{S as $e}from"../chunks/ChevronDown.js";import{events as De}from"@dropins/tools/event-bus.js";import{u as Ue}from"../chunks/updateProductsFromCart.js";import{s as et}from"../chunks/setGiftOptionsOnCart.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/persisted-data.js";import"../chunks/refreshCart.js";import"../fragments.js";import"../chunks/acdl.js";const U=e=>J.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},J.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),J.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.75 12.762L10.2385 15.75L17.25 9",stroke:"currentColor"})),se=e=>J.createElement("svg",{width:20,height:23,viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},J.createElement("path",{d:"M10 6L10 21.5M10 6H12.25C13.4926 6 14.5 4.99264 14.5 3.75C14.5 2.50736 13.4926 1.5 12.25 1.5C11.0074 1.5 10 2.50736 10 3.75M10 6V3.75M10 6H7.75C6.50736 6 5.5 4.99264 5.5 3.75C5.5 2.50736 6.50736 1.5 7.75 1.5C8.99264 1.5 10 2.50736 10 3.75M3.25 10.75H16.75C17.9926 10.75 19 9.74264 19 8.5C19 7.25736 17.9926 6.25 16.75 6.25H3.25C2.00736 6.25 1 7.25736 1 8.5C1 9.74264 2.00736 10.75 3.25 10.75ZM4.75 21.5H15.25C16.4926 21.5 17.5 20.4926 17.5 19.25V13.25C17.5 12.0074 16.4926 11 15.25 11H4.75C3.50736 11 2.5 12.0074 2.5 13.25V19.25C2.5 20.4926 3.50736 21.5 4.75 21.5Z",stroke:"currentColor",strokeWidth:1.5})),tt=({view:e,showModal:n,productName:d,giftWrappingConfig:l,setShowModal:r,updateGiftOptions:f})=>{var T;const g=Z({modalTitle:"Cart.GiftOptions.modal.title",defaultTitle:"Cart.GiftOptions.modal.defaultTitle",modalWrappingText:"Cart.GiftOptions.modal.wrappingText",modalWrappingSubText:"Cart.GiftOptions.modal.wrappingSubText",modalConfirmButton:"Cart.GiftOptions.modal.modalConfirmButton",modalCancelButton:"Cart.GiftOptions.modal.modalCancelButton"}),[o,p]=P();if(oe(()=>{const i=l.find(N=>N.selected)??l[0];p(i)},[l]),!n||!l.length)return null;const m=d?`${g.modalTitle} ${d}`:g.defaultTitle;return c(je,{"data-testid":`gift-option-modal-${e}`,className:"cart-gift-options-view__modal",size:"medium",title:c(I,{children:[t("span",{children:m}),o&&((T=o==null?void 0:o.price)==null?void 0:T.value)>0?t(de,{amount:o.price.value,currency:o.price.currency,weight:"normal"}):null]}),centered:!0,onClose:r,children:[c("div",{className:"cart-gift-options-view__modal-content",children:[t("span",{className:"cart-gift-options-view__modal-text",children:g.modalWrappingText}),t(Ke,{emptyGridContent:t(I,{}),maxColumns:6,columnWidth:"100px",className:"cart-gift-options-view__modal-grid",children:l.map(i=>t(Ze,{selected:(o==null?void 0:o.uid)===(i==null?void 0:i.uid),onValue:()=>{p(i)},name:"giftWrappingId",value:i.uid,src:i.image.url,alt:i.image.design,label:i.image.design,"data-testid":`gift-option-modal-image-${i.uid}`,className:"cart-gift-options-view__modal-grid-item"},i.uid))}),t("span",{className:"cart-gift-options-view__modal-sub-text",children:o==null?void 0:o.design})]}),t(ne,{"data-testid":"gift-option-modal-confirm-button",type:"button",onClick:()=>{f("giftWrappingId",o==null?void 0:o.uid,{isGiftWrappingSelected:!0}),r()},children:g.modalConfirmButton}),t(ne,{type:"button",variant:"secondary",onClick:r,"data-testid":"gift-option-modal-cancel-button",children:g.modalCancelButton})]})},rt=()=>t(Xe,{children:t(Je,{variant:"row",size:"small",fullWidth:!0,lines:1,multilineGap:"small"})}),it=({className:e,view:n,item:d,giftOptions:l,disabled:r,cartData:f,giftWrappingConfig:g,setShowModal:o,onInputChange:p,areGiftOptionsVisible:m})=>{var $,H,z,Q;const T=We(),i=Z({customize:`Cart.GiftOptions.${n}.customize`,giftReceiptIncludedTitle:`Cart.GiftOptions.${n}.giftReceiptIncluded.title`,giftReceiptIncludedText:`Cart.GiftOptions.${n}.giftReceiptIncluded.subtitle`,printedCardIncludedTitle:`Cart.GiftOptions.${n}.printedCardIncluded.title`,printedCardIncludedText:`Cart.GiftOptions.${n}.printedCardIncluded.subtitle`,giftOptionsWrapTitle:`Cart.GiftOptions.${n}.giftOptionsWrap.title`,giftOptionsWrapText:`Cart.GiftOptions.${n}.giftOptionsWrap.subtitle`,requiredFieldError:"Cart.GiftOptions.formText.requiredFieldError"}),N=d==null?void 0:d.productGiftWrapping,V=f==null?void 0:f.cartGiftWrapping,v=n==="product"?N:V,h=v==null?void 0:v.find(E=>E.uid===l.giftWrappingId),b=(h==null?void 0:h.design)??"",u=d==null?void 0:d.giftWrappingPrice,w=b?`${i.giftOptionsWrapText} ${b}`:"",_=+(((H=($=B.config)==null?void 0:$.printedCardPrice)==null?void 0:H.value)??0)>0?(z=B.config)==null?void 0:z.printedCardPrice:null;let M=null;u!=null&&u.value?M=u:(Q=h==null?void 0:h.price)!=null&&Q.value&&(M=h.price);const W=E=>E?c("span",{children:[" (+",t(de,{amount:E.value,currency:E.currency,weight:"normal"}),")"]}):null;return c("div",{className:xe([e,[`${e}--hidden`,!m.isGiftOptionsVisible]]),children:[m.isGiftReceiptVisible?t(K,{disabled:r,className:"cart-gift-options-view__field-gift-receipt",children:t(ie,{id:`giftReceiptIncluded-${T}`,disabled:r,name:"giftReceiptIncluded",checked:l.giftReceiptIncluded,placeholder:i.giftReceiptIncludedTitle,label:i.giftReceiptIncludedTitle,description:i.giftReceiptIncludedText,onChange:p})}):null,m.isPrintedCartVisible?t(K,{disabled:r,className:"cart-gift-options-view__field-printed-card",children:t(ie,{id:`printedCardIncluded-${T}`,disabled:r,name:"printedCardIncluded",checked:l.printedCardIncluded,placeholder:i.printedCardIncludedTitle,label:c(I,{children:[i.printedCardIncludedTitle,W(_)]}),description:i.printedCardIncludedText,onChange:p})}):null,m.isGiftWrappingVisible?c(I,{children:[t(K,{disabled:r,className:"cart-gift-options-view__field-gift-wrap",children:t(ie,{id:`giftOptionsWrap-${T}`,disabled:r,name:"isGiftWrappingSelected",checked:l.isGiftWrappingSelected,placeholder:i.giftOptionsWrapTitle,label:c(I,{children:[i.giftOptionsWrapTitle,W(M)]}),description:w,onChange:p})}),t(ne,{disabled:r||!g.length,type:"button","data-testid":`gift-option-customize-${n}`,variant:"tertiary",onClick:()=>o(!0),children:i.customize})]}):null]})},nt=({view:e,giftOptions:n,disabled:d,errorMessage:l,onInputChange:r,onBlur:f,isGiftMessageVisible:g})=>{const o=We(),p=Z({formTitle:`Cart.GiftOptions.${e}.formContent.formTitle`,formTo:`Cart.GiftOptions.${e}.formContent.formTo`,formFrom:`Cart.GiftOptions.${e}.formContent.formFrom`,giftMessageTitle:`Cart.GiftOptions.${e}.formContent.giftMessageTitle`,formToPlaceholder:`Cart.GiftOptions.${e}.formContent.formToPlaceholder`,formFromPlaceholder:`Cart.GiftOptions.${e}.formContent.formFromPlaceholder`,formMessagePlaceholder:`Cart.GiftOptions.${e}.formContent.formMessagePlaceholder`});return g?c(I,{children:[t("span",{children:p.formTitle}),c("div",{children:[t("span",{children:p.formTo}),t(K,{disabled:d,error:l.recipientName,children:t(ve,{id:`recipientName-${o}`,disabled:d,type:"text",name:"recipientName",value:n.recipientName,placeholder:p.formToPlaceholder,onChange:r,onBlur:f})})]}),c("div",{children:[t("span",{children:p.formFrom}),t(K,{disabled:d,error:l.senderName,children:t(ve,{id:`senderName-${o}`,disabled:d,type:"text",name:"senderName",value:n.senderName,placeholder:p.formFromPlaceholder,onChange:r,onBlur:f})})]}),c("div",{children:[t("span",{children:p.giftMessageTitle}),t(K,{disabled:d,children:t(Qe,{id:`message-${o}`,errorMessage:l.message,disabled:d,name:"message",value:n.message,label:p.formMessagePlaceholder,onChange:r,onBlur:f})})]})]}):null},ot=({view:e,giftOptions:n,giftWrappingConfig:d,readOnlyFormOrderView:l})=>{const r=Z({readOnlyProductTitle:"Cart.GiftOptions.product.readOnlyFormView.title",wrapping:"Cart.GiftOptions.product.readOnlyFormView.wrapping",recipient:"Cart.GiftOptions.product.readOnlyFormView.recipient",sender:"Cart.GiftOptions.product.readOnlyFormView.sender",message:"Cart.GiftOptions.product.readOnlyFormView.message",readOnlyOrderTitle:"Cart.GiftOptions.order.readOnlyFormView.title",readOnlyOrderGiftReceiptTitle:"Cart.GiftOptions.order.readOnlyFormView.giftReceipt",readOnlyOrderGiftReceiptText:"Cart.GiftOptions.order.readOnlyFormView.giftReceiptText",readOnlyOrderGiftPrintCardTitle:"Cart.GiftOptions.order.readOnlyFormView.printCard",readOnlyOrderGiftPrintCardText:"Cart.GiftOptions.order.readOnlyFormView.printCardText",readOnlyOrderGiftWrapTitle:"Cart.GiftOptions.order.readOnlyFormView.giftWrap",readOnlyOrderGiftWrapOptionsText:"Cart.GiftOptions.order.readOnlyFormView.giftWrapOptions",readOnlyOrderFormTitle:"Cart.GiftOptions.order.readOnlyFormView.formTitle",readOnlyOrderFormTo:"Cart.GiftOptions.order.readOnlyFormView.formTo",readOnlyOrderFormFrom:"Cart.GiftOptions.order.readOnlyFormView.formFrom",readOnlyOrderFormMessageTitle:"Cart.GiftOptions.order.readOnlyFormView.formMessageTitle"}),{recipientName:f,senderName:g,message:o,giftReceiptIncluded:p,printedCardIncluded:m,isGiftWrappingSelected:T}=n,i=d==null?void 0:d.find(({uid:u})=>u===(n==null?void 0:n.giftWrappingId)),N=!!f||!!g||!!o,V=i==null?void 0:i.design,v=p||m||(i==null?void 0:i.selected),h=[{id:1,title:r.wrapping,message:T?V:""},{id:2,title:r.recipient,message:f},{id:3,title:r.sender,message:g},{id:4,title:r.message,message:o}],b=h.every(({message:u})=>!u);if(e==="product"&&!b)return t(Pe,{"data-testid":"gift-options-product",iconClose:Ve,iconOpen:$e,actionIconPosition:"right",children:t(Ne,{title:r.readOnlyProductTitle,showIconLeft:!0,iconLeft:se,defaultOpen:!1,renderContentWhenClosed:!1,children:t("div",{children:h.filter(u=>u.message).map(u=>c("p",{children:[u.title," ",u.message]},u.id))})})});if(e==="order"&&(N||v)){const u=c("div",{className:"cart-gift-options-readonly__header",children:[t(X,{source:se,size:"24"}),t("span",{children:r.readOnlyOrderTitle})]}),w=c(I,{children:[p?c("div",{className:"cart-gift-options-readonly__checkboxes cart-gift-options-readonly__checkboxes--gift-receipt",children:[t(X,{source:U,size:"16"}),t("p",{children:r.readOnlyOrderGiftReceiptTitle}),t("p",{children:r.readOnlyOrderGiftReceiptText})]}):null,m?c("div",{className:"cart-gift-options-readonly__checkboxes cart-gift-options-readonly__checkboxes--print-card",children:[t(X,{source:U,size:"16"}),t("p",{children:r.readOnlyOrderGiftPrintCardTitle}),t("p",{children:r.readOnlyOrderGiftPrintCardText})]}):null,i!=null&&i.selected?c("div",{className:"cart-gift-options-readonly__checkboxes cart-gift-options-readonly__checkboxes--gift-wrap",children:[t(X,{source:U,size:"16"}),c("p",{children:[r.readOnlyOrderGiftWrapTitle," (+",t(de,{amount:i.price.value,currency:i.price.currency,weight:"normal"}),")"]}),t("p",{children:`${r.readOnlyOrderGiftWrapOptionsText} ${i==null?void 0:i.design}`})]}):null]}),_=N?c("div",{className:"cart-gift-options-readonly__form",children:[t("div",{children:r.readOnlyOrderFormTitle}),c("div",{children:[c("p",{children:[t("span",{children:r.readOnlyOrderFormTo}),t("span",{children:f})]}),c("p",{children:[t("span",{children:r.readOnlyOrderFormFrom}),t("span",{children:g})]})]}),c("div",{children:[t("p",{children:r.readOnlyOrderFormMessageTitle}),t("p",{children:o})]})]}):null;return c(Me,{variant:l,children:[u,w,_]})}return null},st=({item:e,view:n,loading:d,giftOptions:l,showModal:r,isEditable:f,errorsField:g,updateLoading:o,cartData:p,fieldsDisabled:m,isGiftOptionsApplied:T,giftWrappingConfig:i,readOnlyFormOrderView:N,isGiftMessageVisible:V,areGiftOptionsVisible:v,onBlur:h,setShowModal:b,updateGiftOptions:u,onInputChange:w,handleFormMouseLeave:_})=>{const M=Z({accordionHeading:`Cart.GiftOptions.${n}.accordionHeading`}),W=j($=>t(Pe,{"data-testid":"gift-options-product",iconClose:Ve,iconOpen:$e,actionIconPosition:"right",children:t(Ne,{title:c("div",{className:"cart-gift-options-view__icon--success",children:[t("span",{children:M.accordionHeading}),T?t(X,{source:U,size:"16"}):null]}),showIconLeft:!0,iconLeft:se,defaultOpen:T||$,renderContentWhenClosed:!1,children:c(I,{children:[t(it,{className:"cart-gift-options-view__top",view:n,item:e,giftOptions:l,disabled:m,onInputChange:w,cartData:p,giftWrappingConfig:i,setShowModal:b,areGiftOptionsVisible:v}),t("form",{className:"cart-gift-options-view__footer",onMouseLeave:_,children:t(nt,{view:n,giftOptions:l,disabled:m,errorMessage:g,onInputChange:w,onBlur:h,isGiftMessageVisible:V})})]})})}),[n,e,p,M,g,l,m,i,v,T,V,h,b,w,_]);return!v.isGiftOptionsVisible&&!V?null:c("div",{id:"cart-gift-options-view",className:xe(["cart-gift-options-view",`cart-gift-options-view--${n}`,["cart-gift-options-view--loading",o]]),children:[o?t(Ye,{className:"cart-gift-options-view__spinner"}):null,d?t(rt,{}):c(I,{children:[f?null:t("div",{className:"cart-gift-options-view--readonly",children:t(ot,{view:n,giftOptions:l,giftWrappingConfig:i,readOnlyFormOrderView:N})}),t(tt,{view:n,productName:(e==null?void 0:e.name)??"",showModal:r,giftWrappingConfig:i,setShowModal:()=>b(!1),updateGiftOptions:u}),n==="product"&&f?W(!1):null,n==="order"&&f?t(Me,{variant:"secondary",children:W(!0)}):null]})]})},D={recipientName:"",senderName:"",message:""},dt={giftReceiptIncluded:!1,printedCardIncluded:!1,isGiftWrappingSelected:!1},Re=(e,n)=>{var l,r;if(!n)return!!((l=B.config)!=null&&l.allowGiftMessageOnOrder);const d=((r=B.config)==null?void 0:r.allowGiftMessageOnOrderItems)??!1;return typeof(e==null?void 0:e.giftMessageAvailable)=="boolean"?e==null?void 0:e.giftMessageAvailable:!!d},lt=(e,n)=>{const{allowGiftWrappingOnOrder:d,allowGiftWrappingOnOrderItems:l,allowGiftMessageOnOrder:r,allowGiftMessageOnOrderItems:f,allowGiftReceipt:g,allowPrintedCard:o}=B.config||{};return e==="product"&&!f&&!l&&!Re(n,!0)||e==="order"&&!d&&!r&&!g&&!o},at=({item:e,view:n,dataSource:d,initialLoading:l,handleItemsLoading:r,handleItemsError:f,onItemUpdate:g})=>{var ae,ce,fe,pe,ue,ge;const o=n==="product",p=Z({requiredFieldError:"Cart.GiftOptions.formText.requiredFieldError"}),[m,T]=P(()=>l),[i,N]=P({isGiftReceiptVisible:!0,isPrintedCartVisible:!0,isGiftWrappingVisible:!0,isGiftOptionsVisible:!0}),[V,v]=P(!0),[h,b]=P(!1),[u,w]=P(!1),[_,M]=P(!1),[W,$]=P(!1),[H,z]=P(!1),[Q,E]=P([]),[O,ke]=P(null),[Se,ee]=P(D),[C,le]=P(()=>({giftWrappingId:"",...D,...dt})),te=((ae=C.recipientName)==null?void 0:ae.trim())&&((ce=C.senderName)==null?void 0:ce.trim())&&((fe=C.message)==null?void 0:fe.trim()),Y=!((pe=C.recipientName)!=null&&pe.trim())&&!((ue=C.senderName)!=null&&ue.trim())&&!((ge=C.message)!=null&&ge.trim()),R=j(async s=>{switch(b(n==="order"),w(!0),n){case"product":{r==null||r(e.uid,!0),f==null||f(e.uid);const{recipientName:a,senderName:y,message:G,giftWrappingId:x,isGiftWrappingSelected:F}=s,A={gift_message:{to:a,from:y,message:G},gift_wrapping_id:F?x:null};await Ue([{uid:e.uid,quantity:e.quantity,giftOptions:A}]).then(()=>{g==null||g({item:e})}).finally(()=>{r==null||r(e.uid,!1),w(!1),M(!1),b(!1)}).catch(k=>{console.warn(k)})}break;case"order":await et(s).finally(()=>{w(!1),M(!1),b(!1)});break;default:console.error('Incorrect "view" prop value provided for GiftOptions container (storefront-cart)');break}},[f,r,e,g,n]),re=j((s,a,y={})=>{le(G=>{const x=S=>S in G,F=S=>x(S)?G[S]:void 0;if(!(F(s)!==a||Object.keys(y).some(S=>F(S)!==y[S])))return G;const k={...G,[s]:a,...y};return!k.recipientName&&!k.senderName&&!k.message&&$(!0),(typeof a=="boolean"||["giftWrappingId","giftReceiptIncluded","printedCardIncluded"].includes(s))&&R(k),M(!0),k})},[R]),Ie=j(async()=>{u||(Y&&W&&(ee(D),$(!1),await R(C)),_&&te&&($(!0),await R(C)))},[R,C,_,Y,W,u]),Ae=j(async s=>{if(u)return;const{name:a,value:y}=s.target;ee(G=>({...G,[a]:y.trim()?"":p.requiredFieldError})),Y&&W&&(ee(D),$(!1),await R(C)),_&&te&&await R(C)},[u,Y,W,_,te,p,R,C]),Be=j(s=>{const a=s.target,y=a.name,G=a.type==="checkbox"?a.checked:a.value;re(y,G)},[re]);oe(()=>{if(o)return;const s=De.on(d==="cart"?"cart/data":"order/data",a=>{var x,F;ke(a);const y=(x=a==null?void 0:a.items)==null?void 0:x.every(({giftWrappingAvailable:A})=>A),G=(F=a==null?void 0:a.cartGiftWrapping)==null?void 0:F.some(A=>A.selected);!y&&G&&R({...C,giftWrappingId:"",isGiftWrappingSelected:!1})},{eager:!0});return()=>{s==null||s.off()}},[R,d,C,o]);const L=_e(()=>{var Ce,Ge,Te,ye,Fe,be;if(!O&&!e)return null;const s=o?(Ce=e==null?void 0:e.productGiftWrapping)==null?void 0:Ce.map(q=>{var we;return{...q,price:((we=e==null?void 0:e.giftWrappingPrice)==null?void 0:we.value)>0?e.giftWrappingPrice:q.price}}):(O==null?void 0:O.cartGiftWrapping)||[],a=s==null?void 0:s.find(q=>q.selected),y=(a==null?void 0:a.uid)??((Ge=s==null?void 0:s[0])==null?void 0:Ge.uid),G=!!a,x=o?e==null?void 0:e.giftMessage:O==null?void 0:O.giftMessage,F=O==null?void 0:O.printedCardIncluded,A=O==null?void 0:O.giftReceiptIncluded,k=Re(e,o),S=(Te=B.config)==null?void 0:Te.allowGiftWrappingOnOrder,He=(ye=B.config)==null?void 0:ye.allowGiftReceipt,ze=(Fe=B.config)==null?void 0:Fe.allowPrintedCard,Le=(be=O==null?void 0:O.items)==null?void 0:be.every(q=>q.giftWrappingAvailable),qe=e==null?void 0:e.giftWrappingAvailable,me=o?!1:He,Oe=o?!1:ze,he=o?!!qe&&!!s.length:S&&s.length&&Le;return N({isGiftReceiptVisible:me,isPrintedCartVisible:Oe,isGiftWrappingVisible:he,isGiftOptionsVisible:!(!me&&!Oe&&!he)}),v(k),{...e!=null&&e.uid?{itemId:e.uid}:{},...o?{}:{printedCardIncluded:F,giftReceiptIncluded:A},...x,giftWrappingId:y,isGiftWrappingSelected:G,giftWrappingOptions:s}},[O,e,o]);oe(()=>{if(!L)return;const{giftWrappingOptions:s}=L;le(a=>{const y=x=>x in a,G=Object.keys(L).reduce((x,F)=>y(F)&&a[F]!==L[F]?{...x,[F]:L[F]}:x,{});return Object.keys(G).length>0?{...a,...G}:a}),s!=null&&s.length&&E(s),T(!1)},[L]);const Ee=_e(()=>Object.entries(C).filter(([s])=>s!=="itemId"&&s!=="giftWrappingId").some(([,s])=>!!s),[C]);return{loading:m,giftOptions:C,showModal:H,errorsField:Se,updateLoading:h,cartData:O,fieldsDisabled:u,isGiftOptionsApplied:Ee,giftWrappingConfig:Q,setFieldsDisabled:w,handleFormMouseLeave:Ie,onInputChange:Be,updateGiftOptions:re,setShowModal:z,handleBlur:Ae,isGiftMessageVisible:V,areGiftOptionsVisible:i}},Pt=({item:e,view:n="order",readOnlyFormOrderView:d="primary",dataSource:l="cart",isEditable:r=!0,initialLoading:f=!0,handleItemsLoading:g,handleItemsError:o,onItemUpdate:p})=>{const{isGiftMessageVisible:m,areGiftOptionsVisible:T,loading:i,giftOptions:N,showModal:V,errorsField:v,updateLoading:h,cartData:b,isGiftOptionsApplied:u,fieldsDisabled:w,giftWrappingConfig:_,handleFormMouseLeave:M,updateGiftOptions:W,setShowModal:$,onInputChange:H,handleBlur:z}=at({item:e,view:n,dataSource:l,initialLoading:f,handleItemsLoading:g,handleItemsError:o,onItemUpdate:p});return!i&&lt(n,e)?null:t(st,{item:e,view:n,loading:i,onBlur:z,giftOptions:N,showModal:V,isEditable:r,errorsField:v,setShowModal:$,updateLoading:h,updateGiftOptions:W,cartData:b,isGiftOptionsApplied:u,fieldsDisabled:w,giftWrappingConfig:_,handleFormMouseLeave:M,readOnlyFormOrderView:d,onInputChange:H,isGiftMessageVisible:m,areGiftOptionsVisible:T})};export{Pt as GiftOptions,Pt as default};
