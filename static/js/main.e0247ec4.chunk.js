(this["webpackJsonpmust-eat"]=this["webpackJsonpmust-eat"]||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-item":"CartMealItem_cart-item__3t_kl",summary:"CartMealItem_summary__3nqGG",price:"CartMealItem_price__3xugK",amount:"CartMealItem_amount__3Qr8y",actions:"CartMealItem_actions__sAU1h"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1720R",total:"Cart_total__3BbhP",actions:"Cart_actions__3z3DE","button-alt":"Cart_button-alt__1M5zk",order:"Cart_order__2w6u-"}},,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1Dlki",modal:"Modal_modal__-Lzj5","slide-down":"Modal_slide-down__1X255"}},function(e,t,n){e.exports={meal:"MealItem_meal__1YjS4",description:"MealItem_description__76nu5",price:"MealItem_price__5Fcoq"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__9mOQY",badge:"HeaderCartButton_badge__3jCcW",bump:"HeaderCartButton_bump__ONM7m"}},function(e,t,n){e.exports={header:"MainHeader_header__9I_u9","main-image":"MainHeader_main-image__3V4mI"}},,,function(e,t,n){e.exports={summary:"MealsSummary_summary__1wquv"}},function(e,t,n){e.exports={card:"Card_card__33Znh"}},function(e,t,n){e.exports={input:"Input_input__2LBmm"}},function(e,t,n){e.exports={form:"MealItemForm_form__3JxaQ"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3Nufg","meals-appear":"AvailableMeals_meals-appear__38VJT"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(14),r=n.n(c),s=(n(24),n(7)),o=n(13),l=n(2),m=i.a.createContext({mealItems:[],totalAmount:0,addMealItem:function(e){},removeMealItem:function(e){}}),u=n(0),d={mealItems:[],totalAmount:0},j=function(e,t){if("AddItem"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,i=e.mealItems.findIndex((function(e){return e.id===t.item.id})),c=e.mealItems[i];if(c){var r=Object(l.a)(Object(l.a)({},c),{},{amount:c.amount+t.item.amount});(n=Object(o.a)(e.mealItems))[i]=r}else n=e.mealItems.concat(t.item);return{mealItems:n,totalAmount:a}}if("RemoveItem"===t.type){var s,m=e.mealItems.findIndex((function(e){return e.id===t.item.id})),u=e.mealItems[m],j=e.totalAmount-u.price;if(1===u.amount)s=e.mealItems.filter((function(e){return e.id!==t.id}));else{var b=Object(l.a)(Object(l.a)({},u),{},{amount:u.amount-1});(s=Object(o.a)(e.mealItems))[m]=b}return{mealItems:s,totalAmount:j}}return d},b=function(e){var t=Object(a.useReducer)(j,d),n=Object(s.a)(t,2),i=n[0],c=n[1],r={mealItems:i.mealItems,totalAmount:i.totalAmount,addMealItem:function(e){c({type:"AddItem",item:e})},removeMealItem:function(e){c({type:"RemoveItem",item:e})}};return Object(u.jsx)(m.Provider,{value:r,children:e.children})},p=n(8),h=n.n(p),x=function(e){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("div",{className:h.a.backdrop,onClick:e.onHideCart}),Object(u.jsx)("div",{className:h.a.modal,children:Object(u.jsx)("div",{className:h.a.content,children:e.children})})]})},f=function(e){return Object(u.jsxs)("div",{className:e.outerClass,children:[Object(u.jsx)("button",{className:e.leftButtonClass,onClick:e.onLeftButton,children:e.leftButtonText}),Object(u.jsx)("button",{className:e.rightButtonClass,onClick:e.onRightButton,style:{display:e.onDisplayButton},children:e.rightButtonText})]})},_=n(3),O=n.n(_),C=function(e){return Object(u.jsxs)("li",{className:O.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:O.a.summary,children:[Object(u.jsx)("span",{className:O.a.price,children:e.price}),Object(u.jsxs)("span",{className:O.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsx)(f,{outerClass:O.a.actions,onLeftButton:e.onAdd,leftButtonText:"+",onRightButton:e.onRemove,rightButtonText:"\u2212"})]})},I=n(4),v=n.n(I),g=function(e){var t=Object(a.useContext)(m),n="\xa3".concat(t.totalAmount),i=t.mealItems.length>0;return Object(u.jsxs)(x,{onHideCart:e.onHideCart,children:[Object(u.jsx)("div",{className:v.a["cart-items"],children:t.mealItems.map((function(e){return Object(u.jsx)(C,{name:e.name,amount:e.amount,price:e.price,onAdd:function(){return function(e){t.addMealItem(Object(l.a)(Object(l.a)({},e),{},{amount:1}))}(e)},onRemove:function(){return function(e){t.removeMealItem(e)}(e)}},e.id)}))}),Object(u.jsxs)("div",{className:v.a.total,children:["Total amount: ",n]}),Object(u.jsx)(f,{outerClass:v.a.actions,leftButtonClass:v.a["button-alt"],onLeftButton:e.onHideCart,leftButtonText:"Close",rightButtonClass:v.a.order,rightButtonText:"Place Order",onDisplayButton:i?"inline-block":"none"})]})},y=n(11),M=n.n(y),B=function(e){var t=Object(a.useContext)(m).mealItems.reduce((function(e,t){return e+t.amount}),0);return Object(u.jsxs)("button",{className:M.a.button,onClick:e.onClick,children:[Object(u.jsx)("span",{children:"Cart: "}),Object(u.jsx)("span",{className:M.a.badge,children:t})]})},N=n.p+"static/media/headerImage.2971f633.jpg",A=n(12),k=n.n(A),w=function(e){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsxs)("header",{className:k.a.header,children:[Object(u.jsx)("h1",{children:"MustEat"}),Object(u.jsx)(B,{onClick:e.onDisplayCart})]}),Object(u.jsx)("div",{className:k.a["main-image"],children:Object(u.jsx)("img",{src:N,alt:"MustEat Header"})})]})},T=n(15),F=n.n(T),H=function(){return Object(u.jsxs)("section",{className:F.a.summary,children:[Object(u.jsx)("h2",{children:"Delivering delicious food To You"}),Object(u.jsx)("p",{children:"Choose from a wide selection of available meals"}),Object(u.jsx)("p",{children:"All our meals are prepared with high-quality ingredients by our experienced chefs!"})]})},D=n(16),R=n.n(D),L=function(e){return Object(u.jsx)("div",{className:R.a.card,children:e.children})},P=n(17),S=n.n(P),q=i.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:S.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(l.a)({ref:t},e.input))]})})),E=n(18),J=n.n(E),z=function(e){var t=Object(a.useRef)();return Object(u.jsxs)("form",{className:J.a.form,onSubmit:function(n){n.preventDefault();var a=Number(t.current.value);e.onAddMealItemToCart(a)},children:[Object(u.jsx)(q,{ref:t,label:"Amount",input:{id:"amount",type:"number",min:1,max:10,step:1,defaultValue:1}}),Object(u.jsx)("button",{children:"Add item"})]})},G=n(9),Q=n.n(G),V=function(e){var t=Object(a.useContext)(m);return Object(u.jsxs)("div",{className:Q.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsx)("p",{className:Q.a.description,children:e.description}),Object(u.jsxs)("p",{className:Q.a.price,children:["\xa3",e.price]})]}),Object(u.jsx)("div",{children:Object(u.jsx)(z,{onAddMealItemToCart:function(n){t.addMealItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},Y=n(19),K=n.n(Y),W=[{id:"1",name:"King Prawn Butterfly",description:"Delicalely seasoned king prawn in a crispy breaded coat",price:6.55},{id:"2",name:"Goan Masala",description:"Fresh curry cooked in a truly goat style with coconut powder",price:9.55},{id:"3",name:"Bombay Chicken",description:"With onions, peppers, tomatoes & fresh herbs, dry sauce with egg",price:10.55},{id:"4",name:"Biryani",description:"Biryanis is the imperial amongst all the rice dishes of India.",price:10.99}],U=function(){return Object(u.jsx)("section",{className:K.a.meals,children:Object(u.jsx)(L,{children:Object(u.jsx)("div",{children:W.map((function(e){return Object(u.jsx)(V,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}))})})})},X=function(){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(H,{}),Object(u.jsx)(U,{})]})};var Z=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(u.jsxs)(b,{children:[n&&Object(u.jsx)(g,{onHideCart:function(){i(!1)}})," ",Object(u.jsx)(w,{onDisplayCart:function(){i(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(X,{})})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root")),$()}],[[26,1,2]]]);
//# sourceMappingURL=main.e0247ec4.chunk.js.map