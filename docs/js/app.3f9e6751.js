(function(t){function e(e){for(var a,o,n=e[0],c=e[1],l=e[2],d=0,p=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/myvuestore/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},"07ae":function(t,e,s){"use strict";var a=s("e542"),i=s.n(a);i.a},"12fd":function(t,e,s){t.exports=s.p+"img/black_shirt.76f92bd4.jpg"},"135e":function(t,e,s){t.exports=s.p+"img/bk_homepage02.f4e11549.jpg"},"1b14":function(t,e,s){},"2d87":function(t,e,s){t.exports=s.p+"img/thumb03.38f5c8f5.jpg"},"2f88":function(t,e,s){t.exports=s.p+"img/red_shirt.468823e6.jpg"},"30e6":function(t,e,s){t.exports=s.p+"img/green_shirt.104085a9.jpg"},"42fc":function(t,e,s){t.exports=s.p+"img/blue_shirt.556ec3c1.jpg"},"46bb":function(t,e,s){t.exports=s.p+"img/orange_shirt.a9b2ed85.jpg"},"513f":function(t,e,s){"use strict";var a=s("8eb5"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view",{on:{authenticated:t.setAuthenticated}})],1)],1)},r=[],o=(s("ac1f"),s("5319"),s("a4d3"),s("e01a"),s("a434"),s("2f62"));a["default"].use(o["a"]);var n=new o["a"].Store({state:{username:"alvisonhunter",password:"password2020",islogged:!1,cart:[],total:0,items:0,loginErrorMsg:""},mutations:{addNewItem:function(t,e){var s={title:e.title,description:e.description};this.state.cart.push(s)},removeItem:function(t,e){var s=e;this.state.cart.splice(s,1)}}}),c=n,l={name:"app",data:function(){return{storeState:(void 0).state,itemsInCart:(void 0).state.items,myCart:(void 0).state.cart,authenticated:!1,tmpCredentials:{username:(void 0).state.username,password:(void 0).state.password}}},mounted:function(){this.authenticated||this.$router.replace({name:"login"}),(void 0).countItemsInCart(0),this.itemsInCart=(void 0).state.items},methods:{resolve_img_url:function(t){var e=s("de0b");return e("./"+t)},setAuthenticated:function(t){this.authenticated=t}},computed:{add2Cart:function(){return(void 0).items}}},u=l,d=(s("034f"),s("2877")),p=Object(d["a"])(u,i,r,!1,null,null,null),m=p.exports,g=s("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[t._m(0),a("div",{staticClass:"row p-2 bg-warning"},[t._m(1),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-xl-5 text-right"},[a("h5",{staticClass:"text-white m-2 p-1"},[this.$store.state.isLogged?a("router-link",{attrs:{to:"/login",replace:""},nativeOn:{click:function(e){return t.logout()}}},[a("a",{staticClass:"text-white",attrs:{href:""}},[a("font-awesome-icon",{attrs:{icon:"user-circle"}}),t._v(" "+t._s(this.$store.state.username)+" - Logout ")],1)]):t._e(),t._v(" - "),a("a",{staticClass:"text-white",attrs:{href:""}},[a("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),t._v(" "+t._s(this.$store.state.cart.length)+" items - U$"+t._s(parseFloat(Math.round(100*this.$store.state.total)/100).toFixed(2))+" ")],1),t._v(" - "),a("router-link",{attrs:{to:"/checkout"}},[a("a",{staticClass:"text-white",attrs:{href:""}},[a("font-awesome-icon",{attrs:{icon:"arrow-alt-circle-right"}}),t._v(" Checkout ")],1)])],1)])]),a("About"),a("br"),a("div",[a("h1",{staticClass:"border-bottom text-uppercase mt-4 text-danger"},[t._v(" Deals and Promotions ")]),a("h4",[t._v("Shop Today’s Deals, Lightning Deals, and limited-time discounts")]),a("div",{staticClass:"row justify-content-center pb-4"},[a("div",{staticClass:"col-xl-3 m-4"},[a("div",{staticClass:"card m-4"},[a("div",{staticClass:"card-header bg-info text-white"},[t._v("DEAL OF THE DAY")]),a("img",{staticClass:"card-img-top mt-3",attrs:{src:s("bae2"),alt:"Go to the product page"}}),a("div",{staticClass:"card-body"},[t._m(2),a("p",{staticClass:"card-text"},[a("router-link",{attrs:{to:"/page2"}},[a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"}},[t._v(" See Details ")])])],1)])])]),a("div",{staticClass:"col-xl-3 m-4"},[a("div",{staticClass:"card m-4"},[a("div",{staticClass:"card-header bg-info text-white"},[t._v("DEAL OF THE DAY")]),a("img",{staticClass:"card-img-top mt-3",attrs:{src:s("e624"),alt:"Go to the product page"}}),a("div",{staticClass:"card-body"},[t._m(3),a("p",{staticClass:"card-text"},[a("router-link",{attrs:{to:"/page2"}},[a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"}},[t._v(" See Details ")])])],1)])])]),a("div",{staticClass:"col-xl-3 m-4"},[a("div",{staticClass:"card m-4"},[a("div",{staticClass:"card-header bg-info text-white"},[t._v("DEAL OF THE DAY")]),a("img",{staticClass:"card-img-top mt-3",attrs:{src:s("fe68"),alt:"Go to the product page"}}),a("div",{staticClass:"card-body"},[t._m(4),a("p",{staticClass:"card-text"},[a("router-link",{attrs:{to:"/page2"}},[a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"}},[t._v(" See Details ")])])],1)])])]),a("div",{staticClass:"col-xl-3 m-4"},[a("div",{staticClass:"card m-4"},[a("div",{staticClass:"card-header bg-info text-white"},[t._v("DEAL OF THE DAY")]),a("img",{staticClass:"card-img-top mt-3",attrs:{src:s("2d87"),alt:"Go to the product page"}}),a("div",{staticClass:"card-body"},[t._m(5),a("p",{staticClass:"card-text"},[a("router-link",{attrs:{to:"/page2"}},[a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"}},[t._v(" See Details ")])])],1)])])]),a("div",{staticClass:"col-xl-3 m-4"},[a("div",{staticClass:"card m-4"},[a("div",{staticClass:"card-header bg-info text-white"},[t._v("DEAL OF THE DAY")]),a("img",{staticClass:"card-img-top mt-3",attrs:{src:s("8fb6"),alt:"Go to the product page"}}),a("div",{staticClass:"card-body"},[t._m(6),a("p",{staticClass:"card-text"},[a("router-link",{attrs:{to:"/page2"}},[a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"}},[t._v(" See Details ")])])],1)])])]),a("div",{staticClass:"col-xl-3 m-4"},[a("div",{staticClass:"card m-4"},[a("div",{staticClass:"card-header bg-info text-white"},[t._v("DEAL OF THE DAY")]),a("img",{staticClass:"card-img-top mt-3",attrs:{src:s("bae2"),alt:"Go to the product page"}}),a("div",{staticClass:"card-body"},[t._m(7),a("p",{staticClass:"card-text"},[a("router-link",{attrs:{to:"/page2"}},[a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"}},[t._v(" See Details ")])])],1)])])])])])],1)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center mb-0"},[s("h6",{staticClass:"text-secondary p-2 bg-light w-100"},[s("b",[t._v("FREE")]),t._v(" shipping with $50 purchase. details "),s("b",[t._v("FREE")]),t._v(" store pickup today "),s("b",[t._v("TAKE AN EXTRA")]),t._v(" 30%, 2 5% or 20% off when you use a VueStore's Charge. "),s("a",{staticClass:"text-danger",attrs:{href:""}},[t._v("Click for more details & exclusions")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-xl-7 justify-content-between"},[s("form",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm pr-sm-0 mr-2"},[s("input",{staticClass:"form-control m-2",attrs:{type:"text",name:"search",id:"search",value:"What are you fetching today?",placeholder:"What are you fetching today?"}})]),s("div",{staticClass:"col-12 col-sm-auto pl-sm-0"},[s("input",{staticClass:"btn btn-primary m-2 btn-block",attrs:{type:"button",name:"commit",value:"Fetch it"}})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h6",{staticClass:"card-title text-uppercase"},[t._v(" Price: "),s("b",{staticClass:"text-danger"},[t._v("$29.99")]),t._v(" - "),s("s",{staticClass:"text-muted"},[t._v("$49.99")]),t._v(" (20% off) ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h6",{staticClass:"card-title text-uppercase"},[t._v(" Price: "),s("b",{staticClass:"text-danger"},[t._v("$22.99")]),t._v(" - "),s("s",{staticClass:"text-muted"},[t._v("$35.99")]),t._v(" (20% off) ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h6",{staticClass:"card-title text-uppercase"},[t._v(" Price: "),s("b",{staticClass:"text-danger"},[t._v("$25.99")]),t._v(" - "),s("s",{staticClass:"text-muted"},[t._v("$39.99")]),t._v(" (30% off) ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h6",{staticClass:"card-title text-uppercase"},[t._v(" Price: "),s("b",{staticClass:"text-danger"},[t._v("$12.99")]),t._v(" - "),s("s",{staticClass:"text-muted"},[t._v("$24.99")]),t._v(" (50% off) ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h6",{staticClass:"card-title text-uppercase"},[t._v(" Price: "),s("b",{staticClass:"text-danger"},[t._v("$19.99")]),t._v(" - "),s("s",{staticClass:"text-muted"},[t._v("$29.99")]),t._v(" (60% off) ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h6",{staticClass:"card-title text-uppercase"},[t._v(" Price: "),s("b",{staticClass:"text-danger"},[t._v("$29.99")]),t._v(" - "),s("s",{staticClass:"text-muted"},[t._v("$49.99")]),t._v(" (20% off) ")])}],f=(s("4de4"),s("5530")),b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-4"},[s("h2",{staticClass:"text-uppercase text-info mt-4 mb-1"},[t._v(" Welcome to vueStore ")]),s("p",{staticClass:"lead"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aliquam autem aspernatur fu placeat dignissimos pariatur molestias quod. Alias quas corporis vero natus? ")]),t._m(0),s("br"),s("p",{staticClass:"lead"},[t._v("Are you ready to start your shopping journey?")]),s("router-link",{attrs:{to:"/page2"}},[s("b-button",{attrs:{block:"",variant:"primary"}},[t._v("View our latest products")])],1)],1),s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-8"},[s("div",{staticClass:"m-4"},[s("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"480"}},[s("b-carousel-slide",{attrs:{caption:"","img-src":t.resolve_img_url("bk_homepage.jpg")}}),s("b-carousel-slide",{attrs:{caption:"","img-src":t.resolve_img_url("bk_homepage02.jpg")}}),s("b-carousel-slide",{attrs:{caption:"","img-src":t.resolve_img_url("bk_homepage03.jpg")}}),s("b-carousel-slide",{attrs:{caption:"","img-src":t.resolve_img_url("bk_homepage04.jpg")}}),s("b-carousel-slide",{attrs:{caption:"","img-src":t.resolve_img_url("bk_homepage00.jpg")}})],1)],1)])])])},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item active bg-danger text-white"},[t._v(" HOME SALE SAVING + STACK WITH OTHER OFFERS ")]),s("li",{staticClass:"list-group-item"},[t._v(" Dapibus ac facilisis in Morbi leo risus ")]),s("li",{staticClass:"list-group-item"},[t._v(" placeat dignissimos pariatur molestias quod ")]),s("li",{staticClass:"list-group-item"},[t._v("Vestibulum at eros")]),s("li",{staticClass:"list-group-item"},[t._v("Porta ac consectetur ac")]),s("li",{staticClass:"list-group-item"},[t._v(" autem aspernatur fuga magni exercitationem ")])])}],C={name:"About",methods:{resolve_img_url:function(t){var e=s("8188");return e("./"+t)}}},x=C,y=Object(d["a"])(x,b,_,!1,null,null,null),w=y.exports,k=s("dbb4"),j={name:"Page1",components:{About:w},methods:{resolve_img_url:function(t){var e=s("de0b");return e("./"+t)},logout:function(){this.authenticated=!1,this.$store.state.isLogged=!1,this.$store.state.loginErrorMsg=""}},computed:Object(f["a"])({},Object(o["b"])(["cart","total","islogged","items","user"]),{retrieveUser:function(){var t=JSON.parse(k),e=t.filter((function(t){return"alvisonhunter"===t}));return e}})},$=j,E=(s("6388"),Object(d["a"])($,h,v,!1,null,"054d3d45",null)),S=E.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"marginbottom"},[s("Product",{attrs:{productSummary:t.myCart,msg:"Derminpro Men’s Polo Shirts",description:"Short Sleeve Quick Dry Athletic Golf T-Shirts",picture_src:"black_shirt.jpg",price:"23.56",stars:"✭✭✭✭✭",color:"Black",countItem:"0.00",total:"0.00"}}),s("div",{staticClass:"mb-4 d-flex justify-content-end mr-4"})],1)},A=[],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row p-2"},[s("div",{staticClass:"col-xl-12 text-right"},[s("h5",{staticClass:"text-secondary m-2 p-1"},[this.$store.state.isLogged?s("router-link",{attrs:{to:"/login",replace:""},nativeOn:{click:function(e){return t.logout()}}},[s("b-button",{attrs:{variant:"link"}},[s("font-awesome-icon",{attrs:{icon:"user-circle"}}),t._v(" Logout ")],1)],1):t._e(),t._v(" - "),s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],attrs:{variant:"link"}},[s("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),t._v(" "+t._s(this.$store.state.cart.length)+" items - U$"+t._s(parseFloat(Math.round(100*this.$store.state.total)/100).toFixed(2))+" ")],1),t._v("- "),s("router-link",{attrs:{to:"/checkout"}},[s("b-button",{attrs:{variant:"link"}},[s("font-awesome-icon",{attrs:{icon:"arrow-alt-circle-right"}}),t._v(" Checkout ")],1)],1)],1)])]),s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-lg-5 col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h5",{staticClass:"text-uppercase"},[t._v("PRODUCT REVIEWS: "+t._s(t.stars))])]),s("div",{staticClass:"d-flex justify-content-center mt-3"},[s("div",{staticClass:"img-hover-zoom"},[s("img",{staticClass:"img-hover-zoom",attrs:{src:t.resolve_img_url(t.picture_src),alt:"Shop with us"}})])]),t._m(0)])]),s("div",{staticClass:"col-lg-7 col-12"},[s("h6",{staticClass:"display-4"},[t._v(t._s(t.msg))]),s("p",{staticClass:"lead text-uppercase"},[t._v(" "+t._s(t.description)+" - "),s("b",{staticClass:"text-danger"},[t._v("PRICE: "+t._s(t.price))])]),s("div",{staticClass:"d-flex justify-content-around mb-2 mt-2"},[s("a",{staticClass:"btn btn-dark m-2 btn-block text-white",on:{click:function(e){return t.selectedItem("black_shirt.jpg","23.99","✭✭✭✭✭✭","Black")}}},[t._v("BLACK")]),s("a",{staticClass:"btn btn-primary m-2 btn-block text-white",on:{click:function(e){return t.selectedItem("blue_shirt.jpg","20.99","✭✭✭✭✩✩","Blue")}}},[t._v("BLUE")]),s("a",{staticClass:"btn btn-danger m-2 btn-block text-white",on:{click:function(e){return t.selectedItem("red_shirt.jpg","14.99","✭✭✭✭✩✩","Red")}}},[t._v("RED")]),s("a",{staticClass:"btn btn-warning m-2 btn-block text-white",on:{click:function(e){return t.selectedItem("orange_shirt.jpg","16.99","✭✭✩✩✩✩","Orange")}}},[t._v("ORANGE")]),s("a",{staticClass:"btn btn-success m-2 btn-block text-white",on:{click:function(e){return t.selectedItem("green_shirt.jpg","11.99","✭✭✭✩✩✩","Green")}}},[t._v("GREEN")])]),s("div",{staticClass:"d-flex justify-content-center"},[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item bg-dark"},[s("h5",{staticClass:"text-white mt-2"},[t._v(" PRODUCT DETAILS - "),s("b",{staticClass:"small text-warning"},[t._v(" Total before Shipping & Tax: U$"+t._s(parseFloat(Math.round(100*t.total)/100).toFixed(2))+" ")])])]),s("li",{staticClass:"list-group-item"},[t._v("95% Polyester 5% Spandex")]),s("li",{staticClass:"list-group-item"},[t._v("Button closure & Machine wash")]),s("li",{staticClass:"list-group-item"},[t._v(" Quick Dry & Breathable Material --- High moisture wicking feature keeps your skin stay cool quickly after sweaty sport activities in hot summer ")]),s("li",{staticClass:"list-group-item"},[t._v(" Lightweight and Soft to the Touch --- Protect your sensitive skin in extreme comfort ")]),s("li",{staticClass:"list-group-item"},[t._v(" High Elasticity & Regular Fit--- Ensures you move well when playing golf, tennis or any vigorous exercises ")]),s("li",{staticClass:"list-group-item"},[t._v(" Basic Polo Design with 3 Buttons --- Look fashionable in any occasion; Matches with slacks, sport pants, beach shorts, or jeans ")]),s("li",{staticClass:"list-group-item"},[t._v(" Machine Wash/Hand Wash Recommended. Enjoy a stress-free Satisfaction Guarantee and free replacement for defective item ")]),s("li",{staticClass:"list-group-item bg-light"},[s("div",{staticClass:"d-flex justify-content-between"},[s("button",{staticClass:"btn display-4 btn-success btn-lg",on:{click:function(e){return t.addItem2Cart()}}},[s("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),t._v("Add to Cart ")],1),s("router-link",{attrs:{to:"/page1"}},[s("button",{staticClass:"btn btn-info btn-lg",attrs:{type:"button"}},[s("font-awesome-icon",{attrs:{icon:"home"}}),t._v("Back to Home ")],1)])],1)])])])])]),s("div",{staticClass:"row"},[s("b-modal",{attrs:{size:"xl",id:"modal-center","modal-cancel":"No",centered:"",title:"Items List"}},[t.cartAddedItems.length?t._e():s("p",{staticClass:"text-info text-center text-uppercase"},[t._v(" Your Shopping Cart is currently empty 😢 ")]),s("div",{staticClass:"row"},t._l(t.cartAddedItems,(function(e,a){return s("div",{key:a,staticClass:"col-sm-3 col-md-3 col-xl-3"},[s("div",{staticClass:"card m-4 justify-content-center"},[s("div",{staticClass:"card-header text-right"},[s("button",{staticClass:"close small",attrs:{type:"button","aria-label":"Close"},on:{click:function(s){return t.removeItemFromCart(a,e.price)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("img",{staticClass:"card-img-top mt-2",attrs:{src:t.resolve_img_url(e.img),alt:"item.color"}}),s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title text-center text-uppercase"},[s("b",[t._v("COLOR:")]),t._v(" "+t._s(e.color)+" ")]),s("h6",{staticClass:"card-subtitle mb-2 text-center text-success"},[s("b",[t._v("PRICE:")]),t._v(" U$"+t._s(e.price)+" ")]),s("h6",{staticClass:"card-text text-muted text-center"},[s("b",[t._v("STARS:")]),t._v(" "+t._s(e.stars)+" ")])])])])})),0)])],1)])])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text lead"},[t._v("Roll over image to zoom in.")])])}],P=s("2909"),D={name:"Product",data:function(){return{userId:"",cartAddedItems:Object(P["a"])(this.$store.state.cart)}},props:{msg:String,description:String,price:String,countItem:String,total:String,stars:String,cart:Array,color:String,picture_src:String},methods:{selectedItem:function(t,e,s,a){this.picture_src=t,this.price=e,this.stars=s,this.color=a},computed:Object(f["a"])({},Object(o["b"])(["cart","total","islogged","items","user"])),addItem2Cart:function(){this.countItem=+this.countItem+1,this.total=+this.total+ +this.price,this.$store.state.total=this.total,this.$store.state.items=this.countItem,this.cartAddedItems.push({img:this.picture_src,color:this.color,price:this.price,stars:this.stars}),this.$store.state.cart=Object(P["a"])(this.cartAddedItems)},removeItemFromCart:function(t,e){this.cartAddedItems.splice(t,1),this.countItem=this.countItem-1,this.total=+this.total-+e,this.$store.state.total=this.total,this.$store.state.items=this.countItem,this.$store.state.cart=Object(P["a"])(this.cartAddedItems)},resolve_img_url:function(t){var e=s("8188");return e("./"+t)},logout:function(){this.authenticated=!1,this.$store.state.isLogged=!1,this.$store.state.loginErrorMsg=""}}},L=D,F=(s("a17a"),Object(d["a"])(L,I,T,!1,null,"359c81ff",null)),M=F.exports,R={name:"Page2",components:{Product:M}},H=R,U=(s("b62a"),Object(d["a"])(H,O,A,!1,null,"270ec042",null)),N=U.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("Account")],1)},B=[],V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v(" THIS IS MY ACCOUNT ")])},Y=[],W={name:"Account",methods:{resolve_img_url:function(t){var e=s("8188");return e("./"+t)}}},q=W,z=Object(d["a"])(q,V,Y,!1,null,null,null),J=z.exports,K={name:"Page3",show:!1,components:{Account:J},methods:{resolve_img_url:function(t){var e=s("de0b");return e("./"+t)}}},Q=K,X=(s("513f"),Object(d["a"])(Q,G,B,!1,null,"b8d9fc36",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("Checkout")],1)},et=[],st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid margin-bottom"},[t._m(0),s("div",{staticClass:"row"},[s("b-table",{attrs:{"sticky-header":t.stickyHeader,hover:"",responsive:"","head-variant":"dark",items:t.cartAddedItems,fields:t.fields},scopedSlots:t._u([{key:"cell(img)",fn:function(e){return[s("b-img",{staticClass:"thumb",attrs:{src:t.resolve_img_url(e.value),fluid:"",alt:"pic"}})]}}])})],1),s("div",{staticClass:"row justify-content-between"},[s("div",{staticClass:"col-auto"},[s("router-link",{attrs:{to:"/page1"}},[s("button",{staticClass:"btn btn-info btn-lg mb-3",attrs:{type:"button"}},[s("font-awesome-icon",{attrs:{icon:"home"}}),t._v("Back to Home ")],1)])],1),s("div",{staticClass:"col-auto"},[s("h4",{staticClass:"text-primary text-uppercase"},[t._v(" Sub-Total: "),s("b",{staticClass:"text-secondary"},[t._v("U$"+t._s(t.shoppingCartSubTotal))])])]),s("div",{staticClass:"col-auto"},[s("h4",{staticClass:"text-primary text-uppercase"},[t._v(" VAT(15%): "),s("b",{staticClass:"text-danger"},[t._v("U$"+t._s(t.shoppingCartVAT))])])]),s("div",{staticClass:"col-auto"},[s("h4",{staticClass:"text-primary text-uppercase"},[t._v(" Total: "),s("b",{staticClass:"text-success"},[t._v("U$"+t._s((+t.shoppingCartSubTotal+ +t.shoppingCartVAT).toFixed(2)))])])])])])},at=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center"},[s("h3",{staticClass:"display-3 m-4 text-info"},[t._v("Shopping Cart Checkout")])])}],it=(s("a630"),s("b680"),s("3ca3"),{name:"Product",data:function(){return{userId:"",fields:[{key:"img",label:"ITEM"},{key:"color",label:"COLOR"},{key:"price",label:"PRICE"},{key:"stars",label:"STARS"}],cartAddedItems:Array.from(this.$store.state.cart),shoppingCartSubTotal:parseFloat(Math.round(100*this.$store.state.total)/100).toFixed(2),shoppingCartVAT:(.15*parseFloat(Math.round(100*this.$store.state.total)/100)).toFixed(2)}},computed:Object(f["a"])({},Object(o["b"])(["cart","total","islogged","items","user"])),methods:{selectedItem:function(t,e,s,a){this.picture_src=t,this.price=e,this.stars=s,this.color=a},resolve_img_url:function(t){var e=s("8188");return e("./"+t)}}}),rt=it,ot=(s("bd0b"),Object(d["a"])(rt,st,at,!1,null,"7d67ae95",null)),nt=ot.exports,ct={name:"Page4",components:{Checkout:nt},methods:{resolve_img_url:function(t){var e=s("de0b");return e("./"+t)}}},lt=ct,ut=Object(d["a"])(lt,tt,et,!1,null,"c8f9966c",null),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container h-100 p-4"},[s("div",{staticClass:"row h-100 justify-content-center align-items-center"},[s("b-card",{staticClass:"overflow-hidden my-4 mx-auto",staticStyle:{"margin-top":"16%!important","max-width":"640px"},attrs:{header:t.loginEror,"header-class":"myheader"}},[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{attrs:{md:"6"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:"https://picsum.photos/400/400/?image=20",alt:"Image"}})],1),s("b-col",{attrs:{md:"6"}},[s("b-card-body",{attrs:{title:"Welcome to VueStore","sub-title":t.userStatus}},[s("b-form",[s("b-form-group",{attrs:{id:"input-group-2",label:"Username:","label-for":"username"}},[s("b-form-input",{attrs:{id:"username",type:"text",name:"username",required:"",placeholder:"Joe Doe"},model:{value:t.input.username,callback:function(e){t.$set(t.input,"username",e)},expression:"input.username"}})],1),s("b-form-group",{attrs:{id:"input-group-3",label:"Password:","label-for":"password"}},[s("b-form-input",{attrs:{id:"password",type:"password",name:"password",required:"",placeholder:"Enter Password"},model:{value:t.input.password,callback:function(e){t.$set(t.input,"password",e)},expression:"input.password"}})],1),s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(e){return t.login()}}},[t._v("Login")])],1)],1)],1)],1)],1)],1)])},mt=[],gt={name:"LoginScreen",data:function(){return{input:{password:"",username:""}}},mounted:function(){this.makeToast()},methods:{makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$bvToast.toast("You must logon in order to access the website.",{title:"Welcome to VueStore",autoHideDelay:5e3,appendToast:t})},login:function(){""!=this.input.username&&""!=this.input.password?this.input.username==this.$store.state.username&&this.input.password==this.$store.state.password?(this.$emit("authenticated",!0),this.$store.state.isLogged=!0,this.$router.push({path:"/page1"})):this.$store.state.loginErrorMsg="The username and / or password is incorrect":this.$store.state.loginErrorMsg="A username and password must be present"}},computed:{userStatus:function(){var t=this.$store.state.isLogged?"You’re Logged In":"You’re Logged Out";return t},loginEror:function(){return this.$store.state.loginErrorMsg}}},ht=gt,vt=(s("07ae"),Object(d["a"])(ht,pt,mt,!1,null,"3680a3b4",null)),ft=vt.exports,bt=[{path:"/",redirect:{name:"login"}},{path:"/login",component:ft,name:"login"},{path:"/page1",component:S,name:"page1"},{path:"/page2",component:N,name:"Page2"},{path:"/page3",component:Z,name:"Page3"},{path:"/checkout",component:dt,name:"Page4"}],_t=bt,Ct=s("ecee"),xt=s("c074"),yt=s("ad3d"),wt=s("5f5b");s("f9e3"),s("2dd8");Ct["c"].add(xt["c"],xt["d"],xt["a"],xt["b"]),a["default"].component("font-awesome-icon",yt["a"]),a["default"].config.productionTip=!1,a["default"].use(g["a"]),a["default"].use(wt["a"]);var kt=new g["a"]({routes:_t});new a["default"]({el:"#app",render:function(t){return t(m)},store:c,router:kt})},5767:function(t,e,s){t.exports=s.p+"img/bk_homepage00.f9401303.jpg"},6388:function(t,e,s){"use strict";var a=s("e108"),i=s.n(a);i.a},6436:function(t,e,s){},"67b9":function(t,e,s){t.exports=s.p+"img/demibanner.63c820cd.jpg"},"789a":function(t,e,s){t.exports=s.p+"img/photo1.dd534d5b.jpg"},8188:function(t,e,s){var a={"./bk_homepage.jpg":"b6f6","./bk_homepage00.jpg":"5767","./bk_homepage02.jpg":"135e","./bk_homepage03.jpg":"8623","./bk_homepage04.jpg":"ae1d","./black_shirt.jpg":"12fd","./blue_shirt.jpg":"42fc","./demibanner.jpg":"67b9","./green_shirt.jpg":"30e6","./logo.png":"cf05","./orange_shirt.jpg":"46bb","./photo1.jpg":"789a","./red_shirt.jpg":"2f88"};function i(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="8188"},"85ec":function(t,e,s){},8623:function(t,e,s){t.exports=s.p+"img/bk_homepage03.bf5658a4.jpg"},"8eb5":function(t,e,s){},"8fb6":function(t,e,s){t.exports=s.p+"img/thumb04.0b045c98.jpg"},a17a:function(t,e,s){"use strict";var a=s("1b14"),i=s.n(a);i.a},ae1d:function(t,e,s){t.exports=s.p+"img/bk_homepage04.92528fdf.jpg"},b62a:function(t,e,s){"use strict";var a=s("6436"),i=s.n(a);i.a},b6f6:function(t,e,s){t.exports=s.p+"img/bk_homepage.e547aa90.jpg"},bae2:function(t,e,s){t.exports=s.p+"img/thumb01.4b3a64b9.jpg"},bd0b:function(t,e,s){"use strict";var a=s("f2d6"),i=s.n(a);i.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},dbb4:function(t){t.exports=JSON.parse('{"0":{"username":"alvisonhunter","password":"password2020","email":"alvisonhunter@alondelistore.com"},"1":{"username":"ernestogutierrez","password":"chapulin2020","email":"ernestogutierrez@alondelistore.com"},"2":{"username":"joedoe","password":"12345678","email":"joedoe@alondelistore.com"}}')},de0b:function(t,e,s){var a={"./thumb01.jpg":"bae2","./thumb02.jpg":"ec21","./thumb03.jpg":"2d87","./thumb04.jpg":"8fb6","./thumb05.jpg":"e624","./thumb06.jpg":"fe68"};function i(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="de0b"},e108:function(t,e,s){},e542:function(t,e,s){},e624:function(t,e,s){t.exports=s.p+"img/thumb05.6e712781.jpg"},ec21:function(t,e,s){t.exports=s.p+"img/thumb02.0b06651f.jpg"},f2d6:function(t,e,s){},fe68:function(t,e,s){t.exports=s.p+"img/thumb06.6e836204.jpg"}});
//# sourceMappingURL=app.3f9e6751.js.map