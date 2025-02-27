function d(o){const{cart:e,locale:t="en-US"}=o;return{id:e.id,items:g(e.items,t),prices:{subtotalExcludingTax:e.subtotal.excludingTax,subtotalIncludingTax:e.subtotal.includingTax},totalQuantity:e.totalQuantity,possibleOnepageCheckout:void 0,giftMessageSelected:void 0,giftWrappingSelected:void 0,source:void 0}}function g(o,e){return o.map(t=>{var n;return{canApplyMsrp:!1,formattedPrice:v(e,t.price.currency,t.price.value),id:t.uid,prices:{price:t.price},product:{productId:t.uid,name:t.name,sku:t.sku,topLevelSku:void 0,specialToDate:void 0,specialFromDate:void 0,newToDate:void 0,newFromDate:void 0,createdAt:void 0,updatedAt:void 0,manufacturer:void 0,countryOfManufacture:void 0,categories:t.url.categories,productType:void 0,pricing:{regularPrice:t.regularPrice.value,minimalPrice:void 0,maximalPrice:void 0,specialPrice:(n=t.discount)==null?void 0:n.value,tierPricing:void 0,currencyCode:t.regularPrice.currency},canonicalUrl:t.url.urlKey,mainImageUrl:t.image.src,image:{src:t.image.src,alt:t.image.alt}},configurableOptions:void 0,quantity:t.quantity}})}function v(o,e,t){const n=o.replace("_","-");return new Intl.NumberFormat(n,{style:"currency",currency:e}).format(t)}const r={SHOPPING_CART_CONTEXT:"shoppingCartContext",PRODUCT_CONTEXT:"productContext",CHANGED_PRODUCTS_CONTEXT:"changedProductsContext"},c={OPEN_CART:"open-cart",ADD_TO_CART:"add-to-cart",REMOVE_FROM_CART:"remove-from-cart",SHOPPING_CART_VIEW:"shopping-cart-view",INITIATE_CHECKOUT:"initiate-checkout"};function O(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function i(o,e){const t=O();t.push({[o]:null}),t.push({[o]:e})}function T(o,e){O().push(n=>{const C=n.getState?n.getState():{};n.push({event:o,eventInfo:{...C,...e}})})}function P(o,e,t){const n=d({cart:o,locale:t});i(r.SHOPPING_CART_CONTEXT,{...n}),T(c.OPEN_CART),g(e,t).forEach(u=>{i(r.PRODUCT_CONTEXT,u.product),p(n,[u],c.ADD_TO_CART)})}function D(o,e){const t=d({cart:o,locale:e});i(r.SHOPPING_CART_CONTEXT,{...t}),T(c.SHOPPING_CART_VIEW)}function p(o,e,t){const n={items:e};i(r.SHOPPING_CART_CONTEXT,{...o}),i(r.CHANGED_PRODUCTS_CONTEXT,{...n}),T(t)}function R(o,e,t){const n=d({cart:o,locale:t}),C=n.items,u=O(),E=u.getState?u.getState():{},{shoppingCartContext:{items:f=[]}={}}=E;e.forEach(_=>{const s=f.find(l=>l.id===_.uid),a=C.find(l=>l.id===_.uid);!a&&!s||(!s&&a?(i(r.PRODUCT_CONTEXT,a.product),p(n,[a],c.ADD_TO_CART)):s&&!a?(i(r.PRODUCT_CONTEXT,s.product),p(n,[s],c.REMOVE_FROM_CART)):a.quantity>s.quantity?(i(r.PRODUCT_CONTEXT,a.product),p(n,[a],c.ADD_TO_CART)):(i(r.PRODUCT_CONTEXT,a.product),p(n,[a],c.REMOVE_FROM_CART)))})}function h(o,e){const t=d({cart:o,locale:e});i(r.SHOPPING_CART_CONTEXT,{...t}),T(c.INITIATE_CHECKOUT)}export{D as a,h as b,P as c,R as p};
