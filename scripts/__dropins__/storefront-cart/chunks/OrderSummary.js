/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsx as t,jsxs as g,Fragment as He}from"@dropins/tools/preact-jsx-runtime.js";import*as Fe from"@dropins/tools/preact-compat.js";import{useState as te,useEffect as ie,useCallback as Re,Fragment as Je}from"@dropins/tools/preact-compat.js";import{VComponent as W,classes as ze,Slot as ce}from"@dropins/tools/lib.js";import{events as Ge}from"@dropins/tools/event-bus.js";import{g as Ke}from"./persisted-data.js";import{s as Ve}from"./resetCart.js";import{g as Ye}from"./getEstimatedTotals.js";import{p as Me}from"./acdl.js";import{Accordion as Ze,AccordionSection as je,ProgressSpinner as et,Divider as tt,Price as d,Icon as Ue,Button as rt}from"@dropins/tools/components.js";/* empty css                 */import{O as v}from"./OrderSummaryLine.js";import{S as Qe}from"./ChevronDown.js";import{useText as qe,Text as Xe}from"@dropins/tools/i18n.js";import{S as nt}from"./Coupon.js";import{S as at}from"./GiftCard.js";const $e=F=>Fe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...F},Fe.createElement("path",{d:"M7.74512 14.132L12.0001 9.87701L16.2551 14.132",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),it=({className:F,children:j,variant:w="primary",heading:u,loading:z=!0,subTotal:S,shipping:p,discounts:T,taxTotal:h,taxesApplied:O,total:e,primaryAction:G,coupons:c,giftCards:B,totalSaved:b,appliedGiftCards:m,updateLineItems:r=f=>f,...E})=>{const[f,o]=te(!1),l=qe({checkout:"Cart.PriceSummary.checkout",discountedPrice:"Cart.CartItem.discountedPrice",download:"Cart.CartItem.download",heading:"Cart.Cart.heading",message:"Cart.CartItem.message",regularPrice:"Cart.CartItem.regularPrice",recipient:"Cart.CartItem.recipient",sender:"Cart.CartItem.sender",file:"Cart.CartItem.file",files:"Cart.CartItem.files",orderSummary:"Cart.PriceSummary.orderSummary",taxesBreakdownTitle:"Cart.PriceSummary.taxes.breakdown",taxTotal:"Cart.PriceSummary.taxes.total",taxEstimated:"Cart.PriceSummary.taxes.estimated",taxTotalOnly:"Cart.PriceSummary.taxes.totalOnly",showTaxBreakdown:"Cart.PriceSummary.taxes.showBreakdown",hideTaxBreakdown:"Cart.PriceSummary.taxes.hideBreakdown",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined",subtotalLabel:"Cart.PriceSummary.subTotal.label",subtotalWithTaxes:"Cart.PriceSummary.subTotal.withTaxes",subtotalWithoutTaxes:"Cart.PriceSummary.subTotal.withoutTaxes",totalEstimated:"Cart.PriceSummary.total.estimated",totalLabel:"Cart.PriceSummary.total.label",totalWithoutTax:"Cart.PriceSummary.total.withoutTax",totalSaved:"Cart.PriceSummary.total.saved",shippingLabel:"Cart.PriceSummary.shipping.label",zipPlaceholder:"Cart.PriceSummary.shipping.zipPlaceholder",editZipAction:"Cart.PriceSummary.shipping.editZipAction",shippingWithTaxes:"Cart.PriceSummary.shipping.withTaxes",shippingWithoutTaxes:"Cart.PriceSummary.shipping.withoutTaxes",shippingEstimated:"Cart.PriceSummary.shipping.estimated",shippingEstimatedByState:"Cart.PriceSummary.shipping.alternateField.state",shippingEstimatedByZip:"Cart.PriceSummary.shipping.alternateField.zip",destinationLinkAriaLabel:"Cart.PriceSummary.shipping.destinationLinkAriaLabel",applyButton:"Cart.PriceSummary.estimatedShippingForm.apply.label",countryField:"Cart.PriceSummary.estimatedShippingForm.country.placeholder",freeShipping:"Cart.PriceSummary.freeShipping",stateField:"Cart.PriceSummary.estimatedShippingForm.state.placeholder",zipField:"Cart.PriceSummary.estimatedShippingForm.zip.placeholder"}),N=m?t(v,{label:m==null?void 0:m.label,price:m==null?void 0:m.price,classSuffixes:["applied-gift-cards"],children:m==null?void 0:m.content}):null,C=S&&g(v,{label:l.subtotalLabel,price:S.price,classSuffixes:["subTotal"],children:[S.taxIncluded&&t("div",{"data-testid":"sub-total-tax-caption",className:"cart-order-summary__caption",children:t("span",{children:l.subtotalWithTaxes})}),S.taxExcluded?t("div",{"data-testid":"sub-total-tax-caption-excluded",className:"cart-order-summary__caption",children:g("span",{children:[S.priceExcludingTax," ",l.subtotalWithoutTaxes]})}):void 0]}),V=T&&T.length>0&&t(He,{children:T.map(i=>g(v,{label:i.label,price:i.price,classSuffixes:["discount"],children:[i.coupon&&t(W,{node:i.coupon,className:"cart-order-summary__coupon__code"}),i.caption&&t(W,{node:i.caption,className:"cart-order-summary__caption"})]}))}),Z=O&&O.length>0?t(Ze,{"data-testid":"tax-breakdown",className:"cart-order-summary__taxes",iconOpen:Qe,iconClose:$e,children:g(je,{title:l.taxesBreakdownTitle,secondaryText:!f&&h?t(W,{node:h.price,className:"cart-order-summary__price"}):void 0,renderContentWhenClosed:!1,onStateChange:o,children:[t("div",{className:"cart-order-summary__appliedTaxes",children:O.map(i=>t(v,{label:i.label,price:i.price,classSuffixes:["taxEntry"],labelClassSuffix:"muted"}))}),h&&t(v,{label:l.taxTotal,price:h.price,classSuffixes:["taxTotal"],labelClassSuffix:"muted"})]})}):h&&t(v,{label:h.estimated?l.taxEstimated:l.taxTotalOnly,price:h.price,classSuffixes:["taxTotal"],testId:"tax-total-only"}),x=[{key:"subTotalContent",sortOrder:100,content:C},...p?[{key:"shippingContent",sortOrder:200,content:t(W,{node:p,className:"cart-order-summary__shipping"})}]:[],{key:"discountsContent",sortOrder:300,content:V},{key:"appliedGiftCardsContent",sortOrder:400,content:N},{key:"taxContent",sortOrder:500,content:Z},...e?[{key:"taxContent",sortOrder:600,content:t(v,{label:e.estimated?l.totalEstimated:l.totalLabel,price:e.price,classSuffixes:["total","total--padded"],testId:"total-content",labelClassSuffix:"bold"})}]:[],...e!=null&&e.priceWithoutTax?[{key:"totalWithoutTaxContent",sortOrder:700,content:t(v,{label:l.totalWithoutTax,price:e.priceWithoutTax,classSuffixes:["totalWithoutTax"],testId:"total-without-tax",labelClassSuffix:"muted"})}]:[],...b?[{key:"totalSavedContent",sortOrder:800,content:t(v,{label:l.totalSaved,price:b,classSuffixes:["saved"],testId:"total-saved",labelClassSuffix:"muted"})}]:[],...G?[{key:"primaryActionContent",sortOrder:900,content:t("div",{className:ze(["cart-order-summary__entry","cart-order-summary__primaryAction"]),children:G})}]:[],...c?[{key:"couponsContent",sortOrder:1e3,content:t(W,{node:c,className:"cart-order-summary__coupons"})}]:[],...B?[{key:"giftCardsContent",sortOrder:1100,content:t(W,{node:B,className:"cart-order-summary__gift-cards"})}]:[]],y=r(x).sort((i,P)=>i.sortOrder-P.sortOrder);return g("div",{...E,className:ze(["cart-order-summary",["cart-order-summary--loading",z],[`cart-order-summary__${w}`,w],F]),children:[z&&t(et,{className:"cart-order-summary__spinner"}),g("div",{className:"cart-order-summary__heading",children:[u&&t(W,{node:u,className:"cart-order-summary__heading-text"}),t(tt,{variant:"primary",className:"cart-order-summary__divider-primary"})]}),t("div",{className:"cart-order-summary__content",children:y.map(i=>Array.isArray(i.content)?t(Ze,{className:i.className,actionIconPosition:"right",iconOpen:Qe,iconClose:$e,children:t(je,{defaultOpen:!1,title:i.title,renderContentWhenClosed:!1,children:i.content.map(P=>P.content)})},i.key):i.content)})]})},ct=()=>{const[F,j]=te(!1),[w,u]=te();return{handleEstimateTotals:(S,p)=>{j(!0);const{shippingCountry:T,shippingState:h="",shippingStateId:O,shippingZip:e=""}=S,G={countryCode:T,postcode:e,region:{region:h,id:O},shipping_method:{carrier_code:(p==null?void 0:p.carrier_code)||"",method_code:(p==null?void 0:p.method_code)||""}};Ye(G).then(c=>{var B,b,m,r,E,f,o,l,N,C,V,Z,x,y,i,P,re,ne,U,Q;c&&u({estimatedTaxTotal:{amount:(B=c.totalTax)==null?void 0:B.value,currency:(b=c.totalTax)==null?void 0:b.currency},estimatedSubTotal:{excludingTax:{amount:(r=(m=c.subtotal)==null?void 0:m.excludingTax)==null?void 0:r.value,currency:(f=(E=c.subtotal)==null?void 0:E.excludingTax)==null?void 0:f.currency},includingTax:{amount:(l=(o=c.subtotal)==null?void 0:o.includingTax)==null?void 0:l.value,currency:(C=(N=c.subtotal)==null?void 0:N.includingTax)==null?void 0:C.currency},includingDiscountOnly:{amount:(Z=(V=c.subtotal)==null?void 0:V.includingDiscountOnly)==null?void 0:Z.value,currency:(y=(x=c.subtotal)==null?void 0:x.includingDiscountOnly)==null?void 0:y.currency}},estimatedGrandTotalPrice:{includingTax:{amount:(i=c.total)==null?void 0:i.includingTax.value,currency:(P=c.total)==null?void 0:P.includingTax.currency},excludingTax:{amount:(re=c.total)==null?void 0:re.excludingTax.value,currency:(ne=c.total)==null?void 0:ne.excludingTax.currency}},estimatedAppliedTaxes:{taxes:(U=c.appliedTaxes)==null?void 0:U.map(s=>{var _,k;return{label:s.label,amount:{value:(_=s.amount)==null?void 0:_.value,currency:(k=s.amount)==null?void 0:k.currency}}})},estimatedItems:{items:(Q=c.items)==null?void 0:Q.map(s=>{var _,k,X,$,q,H,R,J,K,Y;return{uid:s.uid,price:{amount:(_=s.price)==null?void 0:_.value,currency:(k=s.price)==null?void 0:k.currency},taxedPrice:{amount:(X=s.taxedPrice)==null?void 0:X.value,currency:($=s.taxedPrice)==null?void 0:$.currency},rowTotal:{amount:(q=s.rowTotal)==null?void 0:q.value,currency:(H=s.rowTotal)==null?void 0:H.currency},rowTotalIncludingTax:{amount:(R=s.rowTotalIncludingTax)==null?void 0:R.value,currency:(J=s.rowTotalIncludingTax)==null?void 0:J.currency},regularPrice:{amount:(K=s.regularPrice)==null?void 0:K.value,currency:(Y=s.regularPrice)==null?void 0:Y.currency}}})}})}).finally(()=>{j(!1)})},estimatedTotals:w,setEstimatedTotals:u,loading:F}},ot=({children:F,initialData:j=null,routeCheckout:w,slots:u,errors:z,showTotalSaved:S,enableCoupons:p,enableGiftCards:T,updateLineItems:h=e=>e,...O})=>{var U,Q,s,_,k,X,$,q,H,R,J,K,Y,oe,ue,se,le,me,de,pe,xe,he,ye,ge,Se,Te,be,Ce,ve,fe,Pe,_e,ke,Ie,we,Oe,Be,Ee,Ne,De,Le,Ae;const[e,G]=te(j),[c,B]=te(!1),b=e==null?void 0:e.isVirtual;p=p??!0,T=T??!0;const{handleEstimateTotals:m,estimatedTotals:r,setEstimatedTotals:E,loading:f}=ct(),o=(U=Ve.config)==null?void 0:U.shoppingCartDisplaySetting,l=(o==null?void 0:o.subtotal)==="INCLUDING_TAX",N=(o==null?void 0:o.subtotal)==="INCLUDING_EXCLUDING_TAX",C=o==null?void 0:o.zeroTax,V=()=>e==null?void 0:e.appliedGiftCards.reduce((n,a)=>n+a.appliedBalance.value,0),Z=n=>{var I,M,ee;if(!(n!=null&&n.code))return null;const a=(I=n==null?void 0:n.currentBalance)==null?void 0:I.value,D=(M=n==null?void 0:n.appliedBalance)==null?void 0:M.value,L=a-D!==0?a-D:D,A=(ee=n==null?void 0:n.currentBalance)==null?void 0:ee.currency;return g(Je,{children:[g("span",{className:"cart-order-summary__coupon__code",children:[t(Ue,{source:at,size:"16"}),t("span",{children:n==null?void 0:n.code})]}),g("span",{className:"cart-order-summary__caption",children:[t(Xe,{id:"Cart.PriceSummary.giftCard.appliedGiftCards.remainingBalance"}),t(d,{className:"cart-order-summary__caption",weight:"normal",size:"small",amount:L,currency:A})]})]},n.code)};ie(()=>{const n=Ge.on("cart/data",a=>{var L,A,I;G(a);const D=(L=a==null?void 0:a.addresses)==null?void 0:L.shipping,ae=a==null?void 0:a.isVirtual;(D||ae)&&E(null),r==null&&E({estimatedTaxTotal:{amount:(A=a==null?void 0:a.totalTax)==null?void 0:A.value,currency:(I=a==null?void 0:a.totalTax)==null?void 0:I.currency}})},{eager:!0});return()=>{n==null||n.off()}},[]),ie(()=>{B(z)},[z]),ie(()=>{const n=Ge.on("shipping/estimate",a=>{var L,A,I,M,ee,We;const D={shippingCountry:(L=a==null?void 0:a.address)==null?void 0:L.countryCode,shippingState:(A=a==null?void 0:a.address)==null?void 0:A.region,shippingStateId:(I=a==null?void 0:a.address)==null?void 0:I.regionId,shippingZip:(M=a==null?void 0:a.address)==null?void 0:M.postCode},ae={carrier_code:((ee=a==null?void 0:a.shippingMethod)==null?void 0:ee.carrierCode)||"",method_code:((We=a==null?void 0:a.shippingMethod)==null?void 0:We.methodCode)||""};m(D,ae)});return()=>{n==null||n.off()}},[m]);const x=qe({checkout:"Cart.PriceSummary.checkout",free:"Cart.PriceSummary.total.free",orderSummary:"Cart.PriceSummary.orderSummary",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined"}),y=(e==null?void 0:e.hasOutOfStockItems)||c,i=Re(()=>{!y&&e&&Me(e,Ve.locale)},[y,e]),P=!b&&(u!=null&&u.EstimateShipping)?t(ce,{name:"EstimateShipping",slot:u.EstimateShipping},"estimateShippingId"):void 0;if(!Object.keys(e??{}).length||(e==null?void 0:e.totalQuantity)===0)return null;const re=p&&(u!=null&&u.Coupons)?t(ce,{name:"Coupons",slot:u.Coupons},"couponsId"):void 0,ne=T&&(u!=null&&u.GiftCards)?t(ce,{name:"GiftCards",slot:u.GiftCards},"giftCardId"):void 0;return t(it,{...O,"data-testid":"cart-order-summary",heading:t("div",{children:x.orderSummary}),shipping:P,coupons:re,giftCards:ne,loading:f,updateLineItems:h,appliedGiftCards:(Q=e==null?void 0:e.appliedGiftCards)!=null&&Q.length?{label:t(Xe,{id:"Cart.PriceSummary.giftCard.appliedGiftCards.label",plural:(s=e==null?void 0:e.appliedGiftCards)==null?void 0:s.length,fields:{count:(_=e==null?void 0:e.appliedGiftCards)==null?void 0:_.length}}),price:t(d,{className:"cart-order-summary__price",amount:-V(),currency:(X=(k=e==null?void 0:e.appliedGiftCards)==null?void 0:k[0])==null?void 0:X.appliedBalance.currency}),content:($=e==null?void 0:e.appliedGiftCards)==null?void 0:$.map(Z).filter(Boolean)}:void 0,subTotal:{taxIncluded:l&&!C,taxExcluded:N,zeroTaxSubtotal:C,priceExcludingTax:(q=r==null?void 0:r.estimatedSubTotal)!=null&&q.excludingTax?t(d,{"data-testid":"subtotal",...(H=r==null?void 0:r.estimatedSubTotal)==null?void 0:H.excludingTax}):t(d,{"data-testid":"subtotal",amount:(J=(R=e==null?void 0:e.subtotal)==null?void 0:R.excludingTax)==null?void 0:J.value,currency:(Y=(K=e==null?void 0:e.subtotal)==null?void 0:K.excludingTax)==null?void 0:Y.currency}),price:!C&&l||!C&&N?(oe=r==null?void 0:r.estimatedSubTotal)!=null&&oe.includingTax?t(d,{"data-testid":"subtotal",...(ue=r==null?void 0:r.estimatedSubTotal)==null?void 0:ue.includingTax}):t(d,{"data-testid":"subtotal",amount:(se=e==null?void 0:e.subtotal.includingTax)==null?void 0:se.value,currency:(le=e==null?void 0:e.subtotal.includingTax)==null?void 0:le.currency}):t(d,{"data-testid":"subtotal",amount:(de=(me=e==null?void 0:e.subtotal)==null?void 0:me.excludingTax)==null?void 0:de.value,currency:(xe=(pe=e==null?void 0:e.subtotal)==null?void 0:pe.excludingTax)==null?void 0:xe.currency})},discounts:(he=e==null?void 0:e.appliedDiscounts)==null?void 0:he.map(n=>{var a;return{label:n.label,price:t(d,{"data-testid":"summary-discount-total",amount:-n.amount.value,currency:n.amount.currency,sale:!0}),coupon:n!=null&&n.coupon?g("span",{children:[t(Ue,{source:nt,size:"16"}),(a=n==null?void 0:n.coupon)==null?void 0:a.code]}):void 0}}),taxTotal:b||r&&r.estimatedTaxTotal==null?{price:t("span",{"data-testid":"tax-total-tbd",children:x.taxToBeDetermined})}:{price:r!=null&&r.estimatedTaxTotal?t(d,{"data-testid":"tax-total-estimated",...r==null?void 0:r.estimatedTaxTotal}):t(d,{"data-testid":"tax-total-actual",amount:(ye=e==null?void 0:e.totalTax)==null?void 0:ye.value,currency:(ge=e==null?void 0:e.totalTax)==null?void 0:ge.currency}),estimated:(!r||!r.estimatedTaxTotal)&&!((Se=e==null?void 0:e.addresses)!=null&&Se.shipping)},taxesApplied:b?void 0:o!=null&&o.fullSummary?(be=((Te=r==null?void 0:r.estimatedAppliedTaxes)==null?void 0:Te.taxes)||(e==null?void 0:e.appliedTaxes))==null?void 0:be.map(n=>({label:n.label,price:t(d,{"data-testid":"applied-taxes",amount:n.amount.value,currency:n.amount.currency})})):void 0,total:{price:r!=null&&r.estimatedGrandTotalPrice?((ve=(Ce=r==null?void 0:r.estimatedGrandTotalPrice)==null?void 0:Ce.includingTax)==null?void 0:ve.amount)===0?t("span",{"data-testid":"total-including-tax",children:x.free}):t(d,{"data-testid":"total-including-tax-estimated",...(fe=r==null?void 0:r.estimatedGrandTotalPrice)==null?void 0:fe.includingTax}):((Pe=e==null?void 0:e.total)==null?void 0:Pe.includingTax.value)===0?t("span",{"data-testid":"total-including-tax",children:x.free}):t(d,{"data-testid":"total-including-tax-actual",amount:(_e=e==null?void 0:e.total)==null?void 0:_e.includingTax.value,currency:(ke=e==null?void 0:e.total)==null?void 0:ke.includingTax.currency}),estimated:(!r||!!(r!=null&&r.estimatedTaxTotal))&&!((Ie=e==null?void 0:e.addresses)!=null&&Ie.shipping),priceWithoutTax:o!=null&&o.grandTotal?r!=null&&r.estimatedAppliedTaxes?((Oe=(we=r==null?void 0:r.estimatedGrandTotalPrice)==null?void 0:we.excludingTax)==null?void 0:Oe.amount)===0?t("span",{"data-testid":"total-excluding-tax",children:x.free}):t(d,{"data-testid":"total-excluding-tax",...(Be=r==null?void 0:r.estimatedGrandTotalPrice)==null?void 0:Be.excludingTax}):((Ee=e==null?void 0:e.total)==null?void 0:Ee.excludingTax.value)===0?t("span",{"data-testid":"total-excluding-tax",children:x.free}):t(d,{"data-testid":"total-excluding-tax",amount:(Ne=e==null?void 0:e.total)==null?void 0:Ne.excludingTax.value,currency:(De=e==null?void 0:e.total)==null?void 0:De.excludingTax.currency}):void 0},primaryAction:w&&t(rt,{"data-testid":"checkout-button",variant:"primary",disabled:y,"aria-disabled":y,href:y?void 0:w({cartId:e.id}),onClick:i,children:x.checkout}),totalSaved:S?t(d,{amount:(Le=e==null?void 0:e.discount)==null?void 0:Le.value,currency:(Ae=e==null?void 0:e.total)==null?void 0:Ae.includingTax.currency}):void 0})};ot.getInitialData=async function(){return Ke()};export{ot as O};
