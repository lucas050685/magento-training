/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsx as r,jsxs as p,Fragment as xr}from"@dropins/tools/preact-jsx-runtime.js";import{useState as te,useEffect as ie,useCallback as pr,Fragment as Tr}from"@dropins/tools/preact-compat.js";import{VComponent as U,classes as ar,Slot as le}from"@dropins/tools/lib.js";import{events as cr}from"@dropins/tools/event-bus.js";import{g as gr}from"./persisted-data.js";import{s as ce}from"./resetCart.js";import{g as hr}from"./getEstimatedTotals.js";import{p as yr}from"./acdl.js";import"@dropins/tools/preact-hooks.js";import{Accordion as ir,AccordionSection as lr,ProgressSpinner as Cr,Divider as Sr,Price as u,Icon as ur,Button as Ir}from"@dropins/tools/components.js";/* empty css           */import{O as C}from"./OrderSummaryLine.js";import{S as or}from"./ChevronDown.js";import{S as sr}from"./ChevronUp.js";import{useText as dr,Text as mr}from"@dropins/tools/i18n.js";import{S as br}from"./Coupon.js";import{S as vr}from"./GiftCard.js";const _r=({className:ne,children:$,variant:w="primary",heading:m,loading:X=!0,subTotal:b,shipping:g,discounts:v,taxTotal:S,taxesApplied:A,total:e,primaryAction:z,coupons:o,giftCards:D,totalSaved:_,appliedGiftCards:d,printedCard:t,itemsGiftWrapping:x,orderGiftWrapping:T,updateLineItems:s=f=>f,...W})=>{const[f,P]=te(!1),l=dr({checkout:"Cart.PriceSummary.checkout",discountedPrice:"Cart.CartItem.discountedPrice",download:"Cart.CartItem.download",heading:"Cart.Cart.heading",message:"Cart.CartItem.message",regularPrice:"Cart.CartItem.regularPrice",recipient:"Cart.CartItem.recipient",sender:"Cart.CartItem.sender",file:"Cart.CartItem.file",files:"Cart.CartItem.files",orderSummary:"Cart.PriceSummary.orderSummary",taxesBreakdownTitle:"Cart.PriceSummary.taxes.breakdown",taxTotal:"Cart.PriceSummary.taxes.total",taxEstimated:"Cart.PriceSummary.taxes.estimated",taxTotalOnly:"Cart.PriceSummary.taxes.totalOnly",showTaxBreakdown:"Cart.PriceSummary.taxes.showBreakdown",hideTaxBreakdown:"Cart.PriceSummary.taxes.hideBreakdown",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined",subtotalLabel:"Cart.PriceSummary.subTotal.label",subtotalWithTaxes:"Cart.PriceSummary.subTotal.withTaxes",subtotalWithoutTaxes:"Cart.PriceSummary.subTotal.withoutTaxes",totalEstimated:"Cart.PriceSummary.total.estimated",totalLabel:"Cart.PriceSummary.total.label",totalWithoutTax:"Cart.PriceSummary.total.withoutTax",totalSaved:"Cart.PriceSummary.total.saved",shippingLabel:"Cart.PriceSummary.shipping.label",zipPlaceholder:"Cart.PriceSummary.shipping.zipPlaceholder",editZipAction:"Cart.PriceSummary.shipping.editZipAction",shippingWithTaxes:"Cart.PriceSummary.shipping.withTaxes",shippingWithoutTaxes:"Cart.PriceSummary.shipping.withoutTaxes",shippingEstimated:"Cart.PriceSummary.shipping.estimated",shippingEstimatedByState:"Cart.PriceSummary.shipping.alternateField.state",shippingEstimatedByZip:"Cart.PriceSummary.shipping.alternateField.zip",destinationLinkAriaLabel:"Cart.PriceSummary.shipping.destinationLinkAriaLabel",applyButton:"Cart.PriceSummary.estimatedShippingForm.apply.label",countryField:"Cart.PriceSummary.estimatedShippingForm.country.placeholder",freeShipping:"Cart.PriceSummary.freeShipping",stateField:"Cart.PriceSummary.estimatedShippingForm.state.placeholder",zipField:"Cart.PriceSummary.estimatedShippingForm.zip.placeholder",printedCardTitle:"Cart.PriceSummary.giftOptionsTax.printedCard.title",printedCardInclTax:"Cart.PriceSummary.giftOptionsTax.printedCard.inclTax",printedCardExclTax:"Cart.PriceSummary.giftOptionsTax.printedCard.exclTax",itemGiftWrappingTitle:"Cart.PriceSummary.giftOptionsTax.itemGiftWrapping.title",itemGiftWrappingInclTax:"Cart.PriceSummary.giftOptionsTax.itemGiftWrapping.inclTax",itemGiftWrappingExclTax:"Cart.PriceSummary.giftOptionsTax.itemGiftWrapping.exclTax",orderGiftWrappingTitle:"Cart.PriceSummary.giftOptionsTax.orderGiftWrapping.title",orderGiftWrappingInclTax:"Cart.PriceSummary.giftOptionsTax.orderGiftWrapping.inclTax",orderGiftWrappingExclTax:"Cart.PriceSummary.giftOptionsTax.orderGiftWrapping.exclTax"}),V=d?r(C,{label:d==null?void 0:d.label,price:d==null?void 0:d.price,classSuffixes:["applied-gift-cards"],children:d==null?void 0:d.content}):null,E=b&&p(C,{label:l.subtotalLabel,price:b.price,classSuffixes:["subTotal"],children:[b.taxIncluded&&r("div",{"data-testid":"sub-total-tax-caption",className:"cart-order-summary__caption",children:r("span",{children:l.subtotalWithTaxes})}),b.taxExcluded?r("div",{"data-testid":"sub-total-tax-caption-excluded",className:"cart-order-summary__caption",children:p("span",{children:[b.priceExcludingTax," ",l.subtotalWithoutTaxes]})}):void 0]}),B=v&&v.length>0&&r(xr,{children:v.map(i=>p(C,{label:i.label,price:i.price,classSuffixes:["discount"],children:[i.coupon&&r(U,{node:i.coupon,className:"cart-order-summary__coupon__code"}),i.caption&&r(U,{node:i.caption,className:"cart-order-summary__caption"})]}))}),n=A&&A.length>0?r(ir,{"data-testid":"tax-breakdown",className:"cart-order-summary__taxes",iconOpen:or,iconClose:sr,children:p(lr,{title:l.taxesBreakdownTitle,secondaryText:!f&&S?r(U,{node:S.price,className:"cart-order-summary__price"}):void 0,renderContentWhenClosed:!1,onStateChange:P,children:[r("div",{className:"cart-order-summary__appliedTaxes",children:A.map(i=>r(C,{label:i.label,price:i.price,classSuffixes:["taxEntry"],labelClassSuffix:"muted"}))}),S&&r(C,{label:l.taxTotal,price:S.price,classSuffixes:["taxTotal"],labelClassSuffix:"muted"})]})}):S&&r(C,{label:S.estimated?l.taxEstimated:l.taxTotalOnly,price:S.price,classSuffixes:["taxTotal"],testId:"tax-total-only"}),h=t!=null&&t.renderContent?p(C,{label:l.printedCardTitle,price:t.taxInclAndExcl||t.taxIncluded?t.priceInclTax:t.priceExclTax,classSuffixes:["printedCardContent"],children:[t.taxIncluded&&r("div",{"data-testid":"printed-card-incl",className:"cart-order-summary__caption",children:r("span",{children:l.printedCardInclTax})}),t.taxInclAndExcl?r("div",{"data-testid":"printed-card-incl-excl",className:"cart-order-summary__caption",children:p("span",{children:[t.priceExclTax," ",l.printedCardExclTax]})}):void 0]}):null,I=x!=null&&x.renderContent?p(C,{label:l.itemGiftWrappingTitle,price:x.taxInclAndExcl||x.taxIncluded?x.priceInclTax:x.priceExclTax,classSuffixes:["itemsGiftWrappingContent"],children:[x.taxIncluded?r("div",{"data-testid":"item-gift-wrapping-incl",className:"cart-order-summary__caption",children:r("span",{children:l.itemGiftWrappingInclTax})}):null,x.taxInclAndExcl?r("div",{"data-testid":"item-gift-wrapping-incl-excl",className:"cart-order-summary__caption",children:p("span",{children:[x.priceExclTax," ",l.itemGiftWrappingExclTax]})}):null]}):null,Z=T!=null&&T.renderContent?p(C,{label:l.orderGiftWrappingTitle,price:T.taxInclAndExcl||T.taxIncluded?T.priceInclTax:T.priceExclTax,classSuffixes:["orderGiftWrappingContent"],children:[T.taxIncluded&&r("div",{"data-testid":"order-gift-wrapping-incl",className:"cart-order-summary__caption",children:r("span",{children:l.orderGiftWrappingInclTax})}),T.taxInclAndExcl?r("div",{"data-testid":"order-gift-wrapping-incl-excl",className:"cart-order-summary__caption",children:p("span",{children:[T.priceExclTax," ",l.orderGiftWrappingExclTax]})}):void 0]}):null,j=[{key:"subTotalContent",sortOrder:100,content:E},{key:"printedCard",sortOrder:200,content:h},{key:"itemsGiftWrappingContent",sortOrder:300,content:I},{key:"orderGiftWrappingContent",sortOrder:400,content:Z},...g?[{key:"shippingContent",sortOrder:500,content:r(U,{node:g,className:"cart-order-summary__shipping"})}]:[],{key:"discountsContent",sortOrder:600,content:B},{key:"appliedGiftCardsContent",sortOrder:700,content:V},{key:"taxContent",sortOrder:800,content:n},...e?[{key:"taxContent",sortOrder:900,content:r(C,{label:e.estimated?l.totalEstimated:l.totalLabel,price:e.price,classSuffixes:["total","total--padded"],testId:"total-content",labelClassSuffix:"bold"})}]:[],...e!=null&&e.priceWithoutTax?[{key:"totalWithoutTaxContent",sortOrder:1e3,content:r(C,{label:l.totalWithoutTax,price:e.priceWithoutTax,classSuffixes:["totalWithoutTax"],testId:"total-without-tax",labelClassSuffix:"muted"})}]:[],..._?[{key:"totalSavedContent",sortOrder:1100,content:r(C,{label:l.totalSaved,price:_,classSuffixes:["saved"],testId:"total-saved",labelClassSuffix:"muted"})}]:[],...z?[{key:"primaryActionContent",sortOrder:1200,content:r("div",{className:ar(["cart-order-summary__entry","cart-order-summary__primaryAction"]),children:z})}]:[],...o?[{key:"couponsContent",sortOrder:1300,content:r(U,{node:o,className:"cart-order-summary__coupons"})}]:[],...D?[{key:"giftCardsContent",sortOrder:1400,content:r(U,{node:D,className:"cart-order-summary__gift-cards"})}]:[]],Q=s(j).sort((i,y)=>i.sortOrder-y.sortOrder);return p("div",{...W,className:ar(["cart-order-summary",["cart-order-summary--loading",X],[`cart-order-summary__${w}`,w],ne]),children:[X&&r(Cr,{className:"cart-order-summary__spinner"}),p("div",{className:"cart-order-summary__heading",children:[m&&r(U,{node:m,className:"cart-order-summary__heading-text"}),r(Sr,{variant:"primary",className:"cart-order-summary__divider-primary"})]}),r("div",{className:"cart-order-summary__content",children:Q.map(i=>Array.isArray(i.content)?r(ir,{className:i.className,actionIconPosition:"right",iconOpen:or,iconClose:sr,children:r(lr,{defaultOpen:!1,title:i.title,renderContentWhenClosed:!1,children:i.content.map(y=>y.content)})},i.key):i.content)})]})},fr=()=>{const[ne,$]=te(!1),[w,m]=te();return{handleEstimateTotals:(b,g)=>{$(!0);const{shippingCountry:v,shippingState:S="",shippingStateId:A,shippingZip:e=""}=b,z={countryCode:v,postcode:e,region:{region:S,id:A},shipping_method:{carrier_code:(g==null?void 0:g.carrier_code)||"",method_code:(g==null?void 0:g.method_code)||""}};hr(z).then(o=>{var D,_,d,t,x,T,s,W,f,P,l,V,E,B,n,h,I,Z,j,Q;o&&m({estimatedTaxTotal:{amount:(D=o.totalTax)==null?void 0:D.value,currency:(_=o.totalTax)==null?void 0:_.currency},estimatedSubTotal:{excludingTax:{amount:(t=(d=o.subtotal)==null?void 0:d.excludingTax)==null?void 0:t.value,currency:(T=(x=o.subtotal)==null?void 0:x.excludingTax)==null?void 0:T.currency},includingTax:{amount:(W=(s=o.subtotal)==null?void 0:s.includingTax)==null?void 0:W.value,currency:(P=(f=o.subtotal)==null?void 0:f.includingTax)==null?void 0:P.currency},includingDiscountOnly:{amount:(V=(l=o.subtotal)==null?void 0:l.includingDiscountOnly)==null?void 0:V.value,currency:(B=(E=o.subtotal)==null?void 0:E.includingDiscountOnly)==null?void 0:B.currency}},estimatedGrandTotalPrice:{includingTax:{amount:(n=o.total)==null?void 0:n.includingTax.value,currency:(h=o.total)==null?void 0:h.includingTax.currency},excludingTax:{amount:(I=o.total)==null?void 0:I.excludingTax.value,currency:(Z=o.total)==null?void 0:Z.excludingTax.currency}},estimatedAppliedTaxes:{taxes:(j=o.appliedTaxes)==null?void 0:j.map(i=>{var y,N;return{label:i.label,amount:{value:(y=i.amount)==null?void 0:y.value,currency:(N=i.amount)==null?void 0:N.currency}}})},estimatedItems:{items:(Q=o.items)==null?void 0:Q.map(i=>{var y,N,H,q,J,K,R,Y,G,M;return{uid:i.uid,price:{amount:(y=i.price)==null?void 0:y.value,currency:(N=i.price)==null?void 0:N.currency},taxedPrice:{amount:(H=i.taxedPrice)==null?void 0:H.value,currency:(q=i.taxedPrice)==null?void 0:q.currency},rowTotal:{amount:(J=i.rowTotal)==null?void 0:J.value,currency:(K=i.rowTotal)==null?void 0:K.currency},rowTotalIncludingTax:{amount:(R=i.rowTotalIncludingTax)==null?void 0:R.value,currency:(Y=i.rowTotalIncludingTax)==null?void 0:Y.currency},regularPrice:{amount:(G=i.regularPrice)==null?void 0:G.value,currency:(M=i.regularPrice)==null?void 0:M.currency}}})}})}).finally(()=>{$(!1)})},estimatedTotals:w,setEstimatedTotals:m,loading:ne}},Pr=({children:ne,initialData:$=null,routeCheckout:w,slots:m,errors:X,showTotalSaved:b,enableCoupons:g,enableGiftCards:v,updateLineItems:S=e=>e,...A})=>{var y,N,H,q,J,K,R,Y,G,M,ue,oe,se,me,de,xe,pe,Te,ge,he,ye,Ce,Se,Ie,be,ve,_e,fe,Pe,Ee,Ne,ke,we,Ae,De,We,Be,Le,Fe,Oe,Ue,Xe,ze,Ve,Ze,je,Qe,$e,He,qe,Je,Ke,Re,Ye,Ge,Me,er,rr,tr;const[e,z]=te($),[o,D]=te(!1),_=e==null?void 0:e.isVirtual;g=g??!0,v=v??!0;const{handleEstimateTotals:d,estimatedTotals:t,setEstimatedTotals:x,loading:T}=fr(),s=(y=ce.config)==null?void 0:y.shoppingCartDisplaySetting,W=(s==null?void 0:s.subtotal)==="INCLUDING_TAX",f=(s==null?void 0:s.subtotal)==="INCLUDING_EXCLUDING_TAX",P=s==null?void 0:s.zeroTax,l=()=>e==null?void 0:e.appliedGiftCards.reduce((a,c)=>a+c.appliedBalance.value,0),V=a=>{var k,ee,re;if(!(a!=null&&a.code))return null;const c=(k=a==null?void 0:a.currentBalance)==null?void 0:k.value,L=(ee=a==null?void 0:a.appliedBalance)==null?void 0:ee.value,F=c-L!==0?c-L:L,O=(re=a==null?void 0:a.currentBalance)==null?void 0:re.currency;return p(Tr,{children:[p("span",{className:"cart-order-summary__coupon__code",children:[r(ur,{source:vr,size:"16"}),r("span",{children:a==null?void 0:a.code})]}),p("span",{className:"cart-order-summary__caption",children:[r(mr,{id:"Cart.PriceSummary.giftCard.appliedGiftCards.remainingBalance"}),r(u,{className:"cart-order-summary__caption",weight:"normal",size:"small",amount:F,currency:O})]})]},a.code)},E=(N=ce.config)==null?void 0:N.cartGiftWrapping,B=(H=ce.config)==null?void 0:H.cartPrintedCard,n=e==null?void 0:e.totalGiftOptions;ie(()=>{const a=cr.on("cart/data",c=>{var F,O,k;z(c);const L=(F=c==null?void 0:c.addresses)==null?void 0:F.shipping,ae=c==null?void 0:c.isVirtual;(L||ae)&&x(null),t==null&&x({estimatedTaxTotal:{amount:(O=c==null?void 0:c.totalTax)==null?void 0:O.value,currency:(k=c==null?void 0:c.totalTax)==null?void 0:k.currency}})},{eager:!0});return()=>{a==null||a.off()}},[]),ie(()=>{D(X)},[X]),ie(()=>{const a=cr.on("shipping/estimate",c=>{var F,O,k,ee,re,nr;const L={shippingCountry:(F=c==null?void 0:c.address)==null?void 0:F.countryCode,shippingState:(O=c==null?void 0:c.address)==null?void 0:O.region,shippingStateId:(k=c==null?void 0:c.address)==null?void 0:k.regionId,shippingZip:(ee=c==null?void 0:c.address)==null?void 0:ee.postCode},ae={carrier_code:((re=c==null?void 0:c.shippingMethod)==null?void 0:re.carrierCode)||"",method_code:((nr=c==null?void 0:c.shippingMethod)==null?void 0:nr.methodCode)||""};d(L,ae)});return()=>{a==null||a.off()}},[d]);const h=dr({checkout:"Cart.PriceSummary.checkout",free:"Cart.PriceSummary.total.free",orderSummary:"Cart.PriceSummary.orderSummary",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined"}),I=(e==null?void 0:e.hasOutOfStockItems)||o,Z=pr(()=>{!I&&e&&yr(e,ce.locale)},[I,e]),j=!_&&(m!=null&&m.EstimateShipping)?r(le,{name:"EstimateShipping",slot:m.EstimateShipping},"estimateShippingId"):void 0;if(!Object.keys(e??{}).length||(e==null?void 0:e.totalQuantity)===0)return null;const Q=g&&(m!=null&&m.Coupons)?r(le,{name:"Coupons",slot:m.Coupons},"couponsId"):void 0,i=v&&(m!=null&&m.GiftCards)?r(le,{name:"GiftCards",slot:m.GiftCards},"giftCardId"):void 0;return r(_r,{...A,"data-testid":"cart-order-summary",heading:r("div",{children:h.orderSummary}),shipping:j,coupons:Q,giftCards:i,loading:T,updateLineItems:S,appliedGiftCards:(q=e==null?void 0:e.appliedGiftCards)!=null&&q.length?{label:r(mr,{id:"Cart.PriceSummary.giftCard.appliedGiftCards.label",plural:(J=e==null?void 0:e.appliedGiftCards)==null?void 0:J.length,fields:{count:(K=e==null?void 0:e.appliedGiftCards)==null?void 0:K.length}}),price:r(u,{className:"cart-order-summary__price",amount:-l(),currency:(Y=(R=e==null?void 0:e.appliedGiftCards)==null?void 0:R[0])==null?void 0:Y.appliedBalance.currency}),content:(G=e==null?void 0:e.appliedGiftCards)==null?void 0:G.map(V).filter(Boolean)}:void 0,printedCard:{renderContent:!!((M=n==null?void 0:n.printedCard)!=null&&M.value),taxIncluded:B==="INCLUDING_TAX",taxInclAndExcl:B==="INCLUDING_EXCLUDING_TAX",priceExclTax:r(u,{"data-testid":"printed-card",amount:(ue=n==null?void 0:n.printedCard)==null?void 0:ue.value,currency:(oe=n==null?void 0:n.printedCard)==null?void 0:oe.currency}),priceInclTax:r(u,{amount:(se=n==null?void 0:n.printedCardInclTax)==null?void 0:se.value,currency:(me=n==null?void 0:n.printedCardInclTax)==null?void 0:me.currency})},itemsGiftWrapping:{renderContent:!!((de=n==null?void 0:n.giftWrappingForItems)!=null&&de.value),taxIncluded:E==="INCLUDING_TAX",taxInclAndExcl:E==="INCLUDING_EXCLUDING_TAX",priceExclTax:r(u,{amount:(xe=n==null?void 0:n.giftWrappingForItems)==null?void 0:xe.value,currency:(pe=n==null?void 0:n.giftWrappingForItems)==null?void 0:pe.currency}),priceInclTax:r(u,{amount:(Te=n==null?void 0:n.giftWrappingForItemsInclTax)==null?void 0:Te.value,currency:(ge=n==null?void 0:n.giftWrappingForItemsInclTax)==null?void 0:ge.currency})},orderGiftWrapping:{renderContent:!!((he=n==null?void 0:n.giftWrappingForOrder)!=null&&he.value),taxIncluded:E==="INCLUDING_TAX",taxInclAndExcl:E==="INCLUDING_EXCLUDING_TAX",priceExclTax:r(u,{amount:(ye=n==null?void 0:n.giftWrappingForOrder)==null?void 0:ye.value,currency:(Ce=n==null?void 0:n.giftWrappingForOrder)==null?void 0:Ce.currency}),priceInclTax:r(u,{amount:(Se=n==null?void 0:n.giftWrappingForOrderInclTax)==null?void 0:Se.value,currency:(Ie=n==null?void 0:n.giftWrappingForOrderInclTax)==null?void 0:Ie.currency})},subTotal:{taxIncluded:W&&!P,taxExcluded:f,zeroTaxSubtotal:P,priceExcludingTax:(be=t==null?void 0:t.estimatedSubTotal)!=null&&be.excludingTax?r(u,{"data-testid":"subtotal",...(ve=t==null?void 0:t.estimatedSubTotal)==null?void 0:ve.excludingTax}):r(u,{"data-testid":"subtotal",amount:(fe=(_e=e==null?void 0:e.subtotal)==null?void 0:_e.excludingTax)==null?void 0:fe.value,currency:(Ee=(Pe=e==null?void 0:e.subtotal)==null?void 0:Pe.excludingTax)==null?void 0:Ee.currency}),price:!P&&W||!P&&f?(Ne=t==null?void 0:t.estimatedSubTotal)!=null&&Ne.includingTax?r(u,{"data-testid":"subtotal",...(ke=t==null?void 0:t.estimatedSubTotal)==null?void 0:ke.includingTax}):r(u,{"data-testid":"subtotal",amount:(we=e==null?void 0:e.subtotal.includingTax)==null?void 0:we.value,currency:(Ae=e==null?void 0:e.subtotal.includingTax)==null?void 0:Ae.currency}):r(u,{"data-testid":"subtotal",amount:(We=(De=e==null?void 0:e.subtotal)==null?void 0:De.excludingTax)==null?void 0:We.value,currency:(Le=(Be=e==null?void 0:e.subtotal)==null?void 0:Be.excludingTax)==null?void 0:Le.currency})},discounts:(Fe=e==null?void 0:e.appliedDiscounts)==null?void 0:Fe.map(a=>{var c;return{label:a.label,price:r(u,{"data-testid":"summary-discount-total",amount:-a.amount.value,currency:a.amount.currency,sale:!0}),coupon:a!=null&&a.coupon?p("span",{children:[r(ur,{source:br,size:"16"}),(c=a==null?void 0:a.coupon)==null?void 0:c.code]}):void 0}}),taxTotal:_||t&&t.estimatedTaxTotal==null?{price:r("span",{"data-testid":"tax-total-tbd",children:h.taxToBeDetermined})}:{price:t!=null&&t.estimatedTaxTotal?r(u,{"data-testid":"tax-total-estimated",...t==null?void 0:t.estimatedTaxTotal}):r(u,{"data-testid":"tax-total-actual",amount:(Oe=e==null?void 0:e.totalTax)==null?void 0:Oe.value,currency:(Ue=e==null?void 0:e.totalTax)==null?void 0:Ue.currency}),estimated:(!t||!t.estimatedTaxTotal)&&!((Xe=e==null?void 0:e.addresses)!=null&&Xe.shipping)},taxesApplied:_?void 0:s!=null&&s.fullSummary?(Ve=((ze=t==null?void 0:t.estimatedAppliedTaxes)==null?void 0:ze.taxes)||(e==null?void 0:e.appliedTaxes))==null?void 0:Ve.map(a=>({label:a.label,price:r(u,{"data-testid":"applied-taxes",amount:a.amount.value,currency:a.amount.currency})})):void 0,total:{price:t!=null&&t.estimatedGrandTotalPrice?((je=(Ze=t==null?void 0:t.estimatedGrandTotalPrice)==null?void 0:Ze.includingTax)==null?void 0:je.amount)===0?r("span",{"data-testid":"total-including-tax",children:h.free}):r(u,{"data-testid":"total-including-tax-estimated",...(Qe=t==null?void 0:t.estimatedGrandTotalPrice)==null?void 0:Qe.includingTax}):(($e=e==null?void 0:e.total)==null?void 0:$e.includingTax.value)===0?r("span",{"data-testid":"total-including-tax",children:h.free}):r(u,{"data-testid":"total-including-tax-actual",amount:(He=e==null?void 0:e.total)==null?void 0:He.includingTax.value,currency:(qe=e==null?void 0:e.total)==null?void 0:qe.includingTax.currency}),estimated:(!t||!!(t!=null&&t.estimatedTaxTotal))&&!((Je=e==null?void 0:e.addresses)!=null&&Je.shipping),priceWithoutTax:s!=null&&s.grandTotal?t!=null&&t.estimatedAppliedTaxes?((Re=(Ke=t==null?void 0:t.estimatedGrandTotalPrice)==null?void 0:Ke.excludingTax)==null?void 0:Re.amount)===0?r("span",{"data-testid":"total-excluding-tax",children:h.free}):r(u,{"data-testid":"total-excluding-tax",...(Ye=t==null?void 0:t.estimatedGrandTotalPrice)==null?void 0:Ye.excludingTax}):((Ge=e==null?void 0:e.total)==null?void 0:Ge.excludingTax.value)===0?r("span",{"data-testid":"total-excluding-tax",children:h.free}):r(u,{"data-testid":"total-excluding-tax",amount:(Me=e==null?void 0:e.total)==null?void 0:Me.excludingTax.value,currency:(er=e==null?void 0:e.total)==null?void 0:er.excludingTax.currency}):void 0},primaryAction:w&&r(Ir,{"data-testid":"checkout-button",variant:"primary",disabled:I,"aria-disabled":I,href:I?void 0:w({cartId:e.id}),onClick:Z,children:h.checkout}),totalSaved:b?r(u,{amount:(rr=e==null?void 0:e.discount)==null?void 0:rr.value,currency:(tr=e==null?void 0:e.total)==null?void 0:tr.includingTax.currency}):void 0})};Pr.getInitialData=async function(){return gr()};export{Pr as O};
