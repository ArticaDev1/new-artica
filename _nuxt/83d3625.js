(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,5,6,16],{374:function(t,e,o){"use strict";o.r(e);var n={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},r=o(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-next"},[o("div",{staticClass:"container"},[o("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),o("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:t.localePath("/project/"+t.url+"/")}},[o("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[o("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),o("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[o("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,o){"use strict";o(51),o(8),o(20);var n=o(47),r=["light-theme","dark-theme"];e.a={computed:{},preload:!0,watch:{},mounted:function(){var t,e=this;(t=document.documentElement.classList).remove.apply(t,r),document.documentElement.classList.add(this.landThemeClass);var o=this,n=document.querySelector(".mob-scroll"),l=document.querySelector(".project__link-main");l.classList.remove("active"),this.$gsap.to(l,{autoAlpha:0,duration:.15,ease:"power2.inOut"}),this.$nextTick((function(){var t,r,l,d;e.$device.isDesktop?null===(t=e.$parent)||void 0===t||null===(r=t.$parent)||void 0===r||null===(l=r.$parent.$refs)||void 0===l||null===(d=l.scroller)||void 0===d||d.locomotive.on("scroll",(function(t){document.querySelector(".parallax")&&o.parallax(t),o.toggleMainLink(t)})):(document.querySelector(".parallax")&&n.addEventListener("scroll",o.parallax),n.addEventListener("scroll",o.toggleMainLink))})),setTimeout((function(){e.$nuxt.$emit("update-locomotive")}),900)},destroyed:function(){this.$device.isDesktop||document.querySelector(".mob-scroll").removeEventListener("scroll",this.parallax)},methods:{updateLoco:function(){var t,e,o,n,r;null===(t=this.$parent)||void 0===t||null===(e=t.$parent)||void 0===e||null===(o=e.$parent.$refs)||void 0===o||null===(n=o.scroller)||void 0===n||null===(r=n.locomotive)||void 0===r||r.update()},switchToggle:function(){var t,e,o,r,l=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&n.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$parent)||void 0===t||null===(e=t.$parent)||void 0===e||null===(o=e.$parent.$refs)||void 0===o||null===(r=o.scroller)||void 0===r||r.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){l.updateLoco(),n.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var e,o=window.innerHeight,n=document.querySelectorAll(".parallax");e=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,n.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,n=t-e-o;o>element.getBoundingClientRect().top&&e<2*element.clientHeight+t&&(element.style.transform="matrix(1, 0, 0, 1, 0, ".concat(t>o&&t?n/2*.3:-e/2*.3,")"))}))},toggleMainLink:function(t){var e=document.querySelector(".project__link-main");(this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop)>1999?(e.classList.add("active"),this.$gsap.to(e,{autoAlpha:1,duration:.15,ease:"power2.inOut"})):(e.classList.remove("active"),this.$gsap.to(e,{autoAlpha:0,duration:.15,ease:"power2.inOut"}))}}}},376:function(t,e,o){var content=o(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(71).default)("c98db6d6",content,!0,{sourceMap:!1})},377:function(t,e,o){"use strict";o.r(e);var n={name:"LandDivider",props:{isVideo:{type:Boolean,default:!1},videoUrl:{type:String,default:"",required:!1},poster:{type:String,default:"",required:!1},bgImage:{type:String,default:"",required:!1}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},r=o(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"land-divider",attrs:{"data-parallax":"container"}},[o("div",{staticClass:"land-divider__content"},[o("div",{staticClass:"land-divider__inner"},[o("div",{staticClass:"parallax"},[o("img",{staticClass:"lazyload img-full",attrs:{"data-src":t.bgImage,alt:"img"}})])]),t._v(" "),o("LandPlayIcon",{class:{isVideo:t.isVideo},attrs:{poster:t.poster,url:t.videoUrl}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandPlayIcon:o(381).default})},381:function(t,e,o){"use strict";o.r(e);o(49);var n={name:"LandPlayIcon",props:{isDivider:{type:Boolean,required:!1,default:!0},url:{type:String,required:!1,default:""},poster:{type:String,required:!1,default:""}},data:function(){return{isPlay:!1}},computed:{},mounted:function(){var t=this;this.$nextTick((function(){if(!document.querySelector(".modal-video")&&t.url){var e=document.createElement("div");e.className="modal-video d-f-center",e.innerHTML='<div class="modal-video__bg"></div>\n          <video poster=\''.concat(t.poster,'\' controls playsinline webkit-playsinline="true" preload="auto" class="video lazyloaded">\n            <source src="').concat(t.url,'" type="video/mp4">\n          </video>'),document.body.appendChild(e),t.closeModalVideo()}}))},beforeDestroy:function(){document.querySelector(".modal-video")&&document.querySelector(".modal-video").remove()},methods:{playVideo:function(){var t=this,e=this.$refs.playIcon,o=this.isDivider?e.parentNode.parentNode:e.parentNode;if(this.isDivider){var n=document.querySelector(".modal-video"),r=n.querySelector(".video");n.classList.add("active"),r.play(),this.isPlay=!0,r.addEventListener("ended",(function(){t.isPlay=!1,r.load(),n.classList.remove("active")}))}else if(o.querySelector(".video")){var video=o.querySelector(".video");video.play(),this.isPlay=!0,video.addEventListener("ended",(function(){t.isPlay=!1,video.load()}))}else this.isPlay=!0},closeModalVideo:function(){var t=this;document.querySelector(".modal-video__bg").addEventListener("click",(function(){var e=document.querySelector(".modal-video"),video=e.querySelector(".video");t.isPlay=!1,video.load(),e.classList.remove("active")}))}}},r=o(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isDivider?o("div",{staticClass:"land-divider__play",class:{"d-none":t.isPlay}},[o("div",{ref:"playIcon",staticClass:"play-icon",attrs:{"data-cursor":""},on:{click:t.playVideo}}),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n    Посмотреть видео о сайте\n  ")])]):o("div",{ref:"playIcon",staticClass:"play-icon",class:{"d-none":t.isPlay},attrs:{"data-cursor":""},on:{click:t.playVideo}})}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,o){"use strict";o(376)},383:function(t,e,o){var n=o(70)(!1);n.push([t.i,".link-site svg{fill:inherit;transition:fill .5s ease}",""]),t.exports=n},384:function(t,e,o){"use strict";o.r(e);var n={name:"LandLink",props:{url:{type:String,required:!0}},data:function(){return{}},computed:{}},r=(o(382),o(35)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{staticClass:"link-site",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[o("svg",{attrs:{width:"37",height:"37",viewBox:"0 0 37 37",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36ZM18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z"}}),t._v(" "),o("path",{attrs:{d:"M21.4028 24.2877L18.5199 27.1726C17.9504 27.7492 17.2724 28.2076 16.5249 28.5212C15.7775 28.8348 14.9754 28.9975 14.1647 29C13.3541 29.0024 12.551 28.8446 11.8017 28.5355C11.0523 28.2264 10.3716 27.7722 9.79859 27.199C9.2256 26.6258 8.7717 25.945 8.46303 25.1957C8.15435 24.4465 7.997 23.6436 8.00004 22.8333C8.00308 22.023 8.16645 21.2213 8.48073 20.4743C8.79502 19.7274 9.25401 19.05 9.83129 18.4812L12.7142 15.5962C12.9118 15.4055 13.1764 15.2999 13.4511 15.3023C13.7258 15.3047 13.9885 15.4148 14.1827 15.609C14.377 15.8031 14.4871 16.0658 14.4895 16.3403C14.4919 16.6149 14.3863 16.8794 14.1955 17.0769L11.3126 19.966C10.9345 20.3413 10.6345 20.7877 10.4297 21.2794C10.225 21.7711 10.1196 22.2985 10.1196 22.8311C10.1196 23.3637 10.225 23.891 10.4297 24.3827C10.6345 24.8744 10.9345 25.3208 11.3126 25.6961C12.0836 26.4323 13.1088 26.8431 14.1751 26.8431C15.2413 26.8431 16.2666 26.4323 17.0376 25.6961L19.9216 22.8112C20.1191 22.6204 20.3838 22.5149 20.6584 22.5173C20.9331 22.5196 21.1958 22.6298 21.3901 22.8239C21.5843 23.0181 21.6945 23.2807 21.6969 23.5553C21.6993 23.8298 21.5937 24.0944 21.4028 24.2919V24.2877ZM21.363 14.1543C21.4597 14.0543 21.5753 13.9745 21.7031 13.9196C21.8309 13.8647 21.9683 13.8358 22.1074 13.8346C22.2465 13.8334 22.3845 13.8599 22.5132 13.9126C22.642 13.9652 22.7589 14.043 22.8573 14.1413C22.9557 14.2396 23.0334 14.3565 23.0861 14.4852C23.1388 14.6139 23.1653 14.7518 23.1641 14.8909C23.1629 15.0299 23.134 15.1673 23.0791 15.2951C23.0242 15.4228 22.9444 15.5384 22.8443 15.635L15.637 22.8457C15.5403 22.9457 15.4247 23.0255 15.2969 23.0804C15.1691 23.1353 15.0317 23.1642 14.8926 23.1654C14.7535 23.1666 14.6155 23.1401 14.4868 23.0874C14.358 23.0348 14.2411 22.957 14.1427 22.8587C14.0443 22.7604 13.9666 22.6435 13.9139 22.5148C13.8612 22.3861 13.8347 22.2482 13.8359 22.1091C13.8371 21.9701 13.866 21.8327 13.9209 21.7049C13.9758 21.5772 14.0556 21.4616 14.1557 21.365L21.363 14.1543ZM27.1687 18.5199L24.2858 21.4038C24.0872 21.5961 23.8216 21.7036 23.5451 21.7036C23.2687 21.7036 23.003 21.5961 22.8045 21.4038C22.6081 21.2074 22.4978 20.9411 22.4978 20.6634C22.4978 20.3858 22.6081 20.1195 22.8045 19.9231L25.6874 17.034C26.0655 16.6587 26.3655 16.2123 26.5703 15.7206C26.775 15.2289 26.8804 14.7015 26.8804 14.1689C26.8804 13.6363 26.775 13.109 26.5703 12.6173C26.3655 12.1256 26.0655 11.6792 25.6874 11.3039C24.9164 10.5677 23.8912 10.1569 22.8249 10.1569C21.7587 10.1569 20.7334 10.5677 19.9624 11.3039L17.0784 14.193C16.8809 14.3838 16.6162 14.4893 16.3416 14.4869C16.0669 14.4845 15.8042 14.3744 15.6099 14.1803C15.4157 13.9861 15.3055 13.7235 15.3031 13.4489C15.3007 13.1743 15.4063 12.9098 15.5972 12.7123L18.4801 9.8274C19.0496 9.25076 19.7276 8.79244 20.4751 8.47882C21.2225 8.1652 22.0246 8.00248 22.8353 8.00003C23.6459 7.99758 24.449 8.15544 25.1983 8.46453C25.9477 8.77363 26.6284 9.22784 27.2014 9.80102C27.7744 10.3742 28.2283 11.055 28.537 11.8043C28.8456 12.5535 29.003 13.3564 29 14.1667C28.9969 14.977 28.8336 15.7787 28.5193 16.5257C28.205 17.2726 27.746 17.95 27.1687 18.5188V18.5199Z"}})])])}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,o){t.exports=o.p+"img/iPadProLandscape.aa9817b.png"},392:function(t,e,o){t.exports=o.p+"img/IpadProHorizontal.d60de41.png"},393:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"task":"Сreate a unique web-site for a fuel company, not only a “corporate visit card” but a convenient tool for daily use as for business and for customers as well.","decision":"We created a corporate web site well-done as a sales’ tool. It allows a user to get info about gas station  locations, fuel producers and oil depots.  Using the site you can find out about the availability of fuel, its prices and certificates and even to make an order.","comfort":"The interface is totally adapted and usable for any devices.","enteractiveMap":"We developed a unique site tool – a scalable interactive map. It allows a user to get detailed info about gas stations’ exact locations and moreover plants connecting with: fuel producers,   gas and oil depots especially suitable for wholesale purchases.","saleTool":"“Order” pattern allows a user to get necessary information about a fuel, to look through official documents and to make an order.","uiLogic":"The scalable interactive map shows a price of a delivery depending on the route.","doOrder":"To leave an order it needs to select a type of a car to deliver and a required amount of fuel.","nav":"Now the site allows customers to get info not only about sale tools but about gas stations as convenient places and the company’s services. All info is inside and at one place without being tired of the interface.","title_task":"Task","title_decision":"Task Achievement","title_comfort":"Convenience","title_enteractiveMap":"Interactive Map","title_saleTool":"Sale Tool","title_uiLogic":"Logistics Interface","title_doOrder":"Order Processing","title_nav":"Attention To Details"},"ru":{"task":"Разработать уникальный сайт для топливной компании, который был бы не только корпоративной «заглушкой», но и удобным инструментом ежедневного пользования как для бизнеса, так и для рядового покупателя.","decision":"Создали не только корпоративный сайт, но и удобный инструмент продаж, который позволяет пользователю узнавать о местонахождении АЗС, о конкретных производителях и нефтебазах. Прямо на сайте можно узнать о наличии, стоимости и сертификатах топлива, а так же сделать заказ.","comfort":"Интерфейс полностью адаптивен и годен для использования на любом устройстве.","enteractiveMap":"Мы создали уникальный инструмент работы с сайтом – масштабируемую интерактивную карту, которая позволяет не только найти нужную АЗС по точным координатам, но и увидеть связанные с ней предприятия – заводы-производители и склады топлива для оптовых закупок.","saleTool":"Раздел «Закупить» позволяет прямо на сайте узнать нужную информацию о топливе, посмотреть все необходимые документы и сделать заказ.","uiLogic":"На карте отображается стоимость доставки в зависимости от расстояния.","doOrder":"Чтобы оставить заявку, достаточно выбрать марку автомобиля и объем топлива.","nav":"Сайт был спроектирован так, чтобы клиенты могли узнать не только о функционале инструментах продаж, но и о комфорте заправок и услугах компании не покидая сайт и не уставая от интерфейса.","title_task":"Задача","title_decision":"Решение","title_comfort":"Удобство","title_enteractiveMap":"Интерактивная карта","title_saleTool":"Инструмент продаж","title_uiLogic":"Интерфейс логистики","title_doOrder":"Работа с заказом","title_nav":"Внимание к деталям"}}'),delete t.options._Ctor}},397:function(t,e,o){t.exports=o.p+"img/back.8aeed89.jpg"},408:function(t,e,o){t.exports=o.p+"img/twonp-bg-video.4057d47.jpg"},409:function(t,e,o){t.exports=o.p+"img/iPhone11ProMax2.07ae1bb.png"},410:function(t,e,o){t.exports=o.p+"img/azs.ed14aea.jpg"},411:function(t,e,o){t.exports=o.p+"img/iphones.700bbd8.png"},412:function(t,e,o){t.exports=o.p+"img/BroswerWindow2.4493ae4.png"},413:function(t,e,o){t.exports=o.p+"img/ipadmini.de29b76.png"},414:function(t,e,o){t.exports=o.p+"img/iPhoneSE.5b25876.png"},415:function(t,e,o){t.exports=o.p+"img/BroswerWindow3.0574ddd.png"},416:function(t,e,o){var content=o(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(71).default)("e103c5d0",content,!0,{sourceMap:!1})},529:function(t,e,o){t.exports=o.p+"img/logo.f7d3d00.svg"},530:function(t,e,o){t.exports=o.p+"videos/twonp-bg-video.d472553.mp4"},531:function(t,e,o){t.exports=o.p+"img/back.974e9d1.jpg"},532:function(t,e,o){t.exports=o.p+"img/forward.0edcff5.png"},533:function(t,e,o){t.exports=o.p+"img/iPadProLandscape.08aec41.webp"},534:function(t,e,o){t.exports=o.p+"img/iPhone11ProMax.23c5c5e.webp"},535:function(t,e,o){t.exports=o.p+"img/iPhone11ProMax.222b003.png"},536:function(t,e,o){t.exports=o.p+"img/iPhone11ProMax2.c5757a5.webp"},537:function(t,e,o){t.exports=o.p+"img/azs.a783f64.webp"},538:function(t,e,o){t.exports=o.p+"img/IpadProHorizontal.8d3fe12.webp"},539:function(t,e,o){t.exports=o.p+"img/BroswerWindow.51eaf20.webp"},540:function(t,e,o){t.exports=o.p+"img/BroswerWindow.06158ed.png"},541:function(t,e,o){t.exports=o.p+"img/iphones.ab21100.webp"},542:function(t,e,o){t.exports=o.p+"img/BroswerWindow2.f6be15c.webp"},543:function(t,e,o){t.exports=o.p+"img/ipadmini.6c8a9f7.webp"},544:function(t,e,o){t.exports=o.p+"img/iPhoneSE.f338a6c.webp"},545:function(t,e,o){t.exports=o.p+"img/BroswerWindow3.8070377.webp"},546:function(t,e,o){"use strict";o(416)},547:function(t,e,o){var n=o(70)(!1);n.push([t.i,'body.project-twonp{background-color:#2a2c31}body.project-twonp .header.active-bg{background-color:rgba(42,44,49,.6);transition:.2s linear}body.project-twonp .link-site{fill:rgba(34,34,34,.7)}body.project-twonp .link-site.hover,body.project-twonp .link-site.touch{fill:#222}body.project-twonp .nav{background-color:#2a2c31}body.project-twonp .nav.active-nav .nav-s-area__container:before{background:linear-gradient(0deg,#2a2c31,transparent 49%,transparent 51%,#2a2c31)}.twonp__main{background-position:50%;background-size:cover;background-repeat:no-repeat;padding-bottom:200px}@media screen and (max-width:767px){.twonp__main{padding-bottom:100px}}.twonp__main-logo{max-width:465px;margin-top:10%}@media screen and (max-width:1023px){.twonp__main-logo{max-width:352px}}@media screen and (max-width:767px){.twonp__main-logo{max-width:190px}}.twonp__main-inner{height:calc(100vh + 300px);height:calc(var(--vh, 1vh)*100 + 300px);max-height:1300px;min-height:680px}@media screen and (max-width:1023px){.twonp__main-inner{height:100vh;height:calc(var(--vh, 1vh)*100)}}@media screen and (max-width:767px){.twonp__main-inner{min-height:400px;padding-top:0;padding-bottom:0}}.twonp__main-text{margin-top:15%}@media screen and (max-width:767px){.twonp__main-text{margin-top:25%}}.twonp__block-light{background-color:#b8b8b8;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-top-left-radius:0;border-top-right-radius:0;margin-top:-100px}.twonp__solution .land-text,.twonp__solution .land-title{color:#242424}.twonp__solution .link-site{margin-top:32px}.twonp__solution-img{position:relative;margin-top:-100px;margin-bottom:50px;max-width:1250px;width:100%;overflow:visible}@media screen and (max-width:1023px){.twonp__solution-img{margin-bottom:0}}.twonp__easy{align-items:flex-start}.twonp__easy-img,.twonp__easy-text{max-width:50%;flex:0 0 100%;width:100%}@media screen and (max-width:767px){.twonp__easy-img,.twonp__easy-text{max-width:100%}}.twonp__easy img{max-width:410px;box-shadow:0 52px 161px rgba(0,0,0,.6);border-radius:48px}@media screen and (max-width:1023px){.twonp__easy img{max-width:340px;border-radius:40px}}@media screen and (max-width:767px){.twonp__easy img{max-width:190px;border-radius:20px}}@media screen and (max-width:767px){.twonp__easy-text{display:flex;align-items:center;flex-direction:column}}.twonp__easy-text .land-text,.twonp__easy-text .land-title{color:#242424}@media screen and (min-width:768px){.twonp__easy-text .land-text,.twonp__easy-text .land-title{padding:0;text-align:left}}.twonp__easy-img,.twonp__easy-text-img{position:relative;height:100px;width:100%}.twonp__easy-img img,.twonp__easy-text-img img{position:absolute;top:0;left:0}@media screen and (max-width:767px){.twonp__easy-img img,.twonp__easy-text-img img{left:auto;right:0}}@media screen and (max-width:767px){.twonp__easy{flex-direction:column}}@media screen and (max-width:767px){.twonp__easy-img{height:auto;padding-bottom:100px}.twonp__easy-img img{position:static}}.twonp__easy-img img{left:40px}@media screen and (max-width:1023px){.twonp__easy-img img{left:0}}.twonp__easy-text-img{margin-top:50px}.twonp__block-divider{position:relative;z-index:-1}.twonp__block-divider-bg{-o-object-position:50% 80%;object-position:50% 80%;-o-object-fit:cover;object-fit:cover;mix-blend-mode:hard-light;height:150vh;max-height:1170px;min-height:1000px}@media screen and (max-width:1023px){.twonp__block-divider-bg{min-height:900px;height:100vh;height:calc(var(--vh, 1vh)*100)}}.twonp__block-divider:before{position:absolute;content:"";top:-100px;left:0;width:100%;height:calc(100% + 100px);z-index:-1;background-color:#070706}.twonp__comfort{background-color:#2a2c31;margin-top:-100px;position:relative;z-index:2}.twonp__comfort .land-border{background-color:#2a2c31;max-width:1177px;box-shadow:0 52px 161px rgba(0,0,0,.6)}.twonp__block-dark{background-color:#4c4f55;margin-top:-100px;padding-top:100px}@media screen and (max-width:767px){.twonp__block-dark{padding-bottom:0}}@media screen and (max-width:767px){.twonp__nav{padding-top:0}}.twonp__instrument img{box-shadow:0 52px 161px rgba(0,0,0,.6)}.twonp__fast{overflow:hidden;max-width:100%}.twonp__fast-inner{position:relative;z-index:8}@media screen and (max-width:767px){.twonp__fast-inner{padding-top:0}}.twonp__fast .land-circles:after{border-color:#bedecb}.twonp__fast .land-circles:before{border-color:#20c361}.twonp__fast-img{min-width:120%;margin-left:-10%}@media screen and (max-width:767px){.twonp__fast-img{min-width:160%;margin-left:-30%}}.twonp__fast-text{position:absolute;max-width:445px;width:100%;top:5%;right:2%}@media screen and (max-width:1023px){.twonp__fast-text{max-width:350px}}@media screen and (max-width:767px){.twonp__fast-text{max-width:100%;position:static;display:flex;align-items:center;flex-direction:column;padding-bottom:100px}}@media screen and (min-width:768px){.twonp__fast-text .land-text,.twonp__fast-text .land-title{padding:0;text-align:left}}@media screen and (max-width:1023px){.twonp__ui{padding-bottom:0!important}}.twonp__ui img{box-shadow:0 52px 161px rgba(0,0,0,.6);border-radius:3px}.twonp__ui-footer{display:flex;align-items:stretch}@media screen and (max-width:767px){.twonp__ui-footer{flex-direction:column;align-items:flex-start;margin-top:30px}}.twonp__ui-footer img{border-radius:30px}@media screen and (max-width:1023px){.twonp__ui-footer img{border-radius:14px}}@media screen and (max-width:767px){.twonp__ui-footer img{border-radius:10px}}.twonp__ui-about,.twonp__ui-img{flex:0 0 100%;width:100%;max-width:55%}@media screen and (max-width:767px){.twonp__ui-about,.twonp__ui-img{min-width:230px;max-width:80%}}.twonp__ui-about{max-width:45%;padding-left:50px;display:flex;flex-direction:column}@media screen and (max-width:767px){.twonp__ui-about{padding-left:0;min-width:190px;max-width:70%;margin-left:auto;margin-top:30px}}.twonp__ui-about .land-text,.twonp__ui-about .land-title{padding:0;text-align:left;max-width:445px}@media screen and (max-width:1023px){.twonp__ui-about .land-text,.twonp__ui-about .land-title{display:none}}.twonp__ui-about-img{margin-bottom:auto}.twonp__ui-about-img img{max-height:100%;width:auto;max-width:none}@media screen and (max-width:1023px){.twonp__ui-about-img img{border-radius:25px;max-height:80%}}@media screen and (max-width:767px){.twonp__ui-about-img img{height:100%;max-height:none;width:100%;max-width:100%;border-radius:22px}}.twonp__ui-text{display:none}@media screen and (max-width:1023px){.twonp__ui-text{padding-top:100px;display:flex;align-items:center;flex-direction:column}}.twonp .land-divider__content:before{background-color:#4c4f55}.twonp .land-divider__content:after{background-color:#2a2c31}.twonp__divider .parallax img{-o-object-position:75%;object-position:75%}@media screen and (max-width:1023px){.twonp__divider .parallax img{-o-object-position:66%;object-position:66%}}',""]),t.exports=n},548:function(t,e,o){"use strict";var n=o(393),r=o.n(n);e.default=r.a},570:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twonp__solution-img"},[n("picture",[n("source",{attrs:{srcset:o(533),type:"image/webp"}}),t._v(" "),n("source",{attrs:{srcset:o(391),type:"image/png"}}),t._v(" "),n("img",{staticClass:"img-full lazyloaded",attrs:{src:o(391),alt:"twonp-iPadProLandscape"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twonp__easy-img"},[n("picture",[n("source",{attrs:{srcset:o(534),type:"image/webp"}}),t._v(" "),n("source",{attrs:{srcset:o(535),type:"image/png"}}),t._v(" "),n("img",{staticClass:"img-full lazyloaded",attrs:{src:o(391),alt:"twonp-iPhone11ProMax"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twonp__easy-text-img"},[n("picture",[n("source",{attrs:{srcset:o(536),type:"image/webp"}}),t._v(" "),n("source",{attrs:{srcset:o(409),type:"image/png"}}),t._v(" "),n("img",{staticClass:"img-full lazyloaded",attrs:{src:o(409),alt:"twonp-iPhone11ProMax2"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twonp__block-divider"},[n("picture",[n("source",{attrs:{srcset:o(537),type:"image/webp"}}),t._v(" "),n("source",{attrs:{srcset:o(410),type:"image/jpg"}}),t._v(" "),n("img",{staticClass:"img-full lazyloaded twonp__block-divider-bg",attrs:{src:o(410),alt:"twonp-azs"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land__full-w d-f-center"},[n("div",{staticClass:"land-border"},[n("picture",[n("source",{attrs:{srcset:o(538),type:"image/webp"}}),t._v(" "),n("source",{attrs:{srcset:o(392),type:"image/png"}}),t._v(" "),n("img",{staticClass:"img-full lazyloaded land-border__item",attrs:{src:o(392),alt:"twonp-IpadProHorizontal"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land__full-w d-f-center"},[n("picture",[n("source",{attrs:{srcset:o(539),type:"image/webp"}}),t._v(" "),n("source",{attrs:{srcset:o(540),type:"image/png"}}),t._v(" "),n("img",{staticClass:"img-full lazyloaded",attrs:{src:o(392),alt:"twonp-BroswerWindow"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twonp__fast"},[n("div",{staticClass:"twonp__fast-inner ptb container"},[n("div",{staticClass:"twonp__fast-img"},[n("div",{staticClass:"land-circles"},[n("picture",[n("source",{attrs:{srcset:o(541),type:"image/webp"}}),t._v(" "),n("source",{attrs:{srcset:o(411),type:"image/png"}}),t._v(" "),n("img",{staticClass:"img-full lazyloaded",attrs:{src:o(411),alt:"twonp-iphones"}})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land__full-w d-f-center"},[n("picture",[n("source",{attrs:{srcset:o(542),type:"image/webp"}}),t._v(" "),n("source",{attrs:{srcset:o(412),type:"image/png"}}),t._v(" "),n("img",{staticClass:"img-full lazyloaded",attrs:{src:o(412),alt:"twonp-BroswerWindow2"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twonp__ui-img"},[n("picture",[n("source",{attrs:{srcset:o(543),type:"image/webp"}}),t._v(" "),n("source",{attrs:{srcset:o(413),type:"image/png"}}),t._v(" "),n("img",{staticClass:"img-full lazyloaded",attrs:{src:o(413),alt:"twonp-ipadmini"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twonp__ui-about-img"},[n("picture",[n("source",{attrs:{srcset:o(544),type:"image/webp"}}),t._v(" "),n("source",{attrs:{srcset:o(414),type:"image/png"}}),t._v(" "),n("img",{staticClass:"img-full lazyloaded",attrs:{src:o(414),alt:"twonp-iPhoneSE"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twonp__nav-img pt"},[n("picture",[n("source",{attrs:{srcset:o(545),type:"image/webp"}}),t._v(" "),n("source",{attrs:{srcset:o(415),type:"image/png"}}),t._v(" "),n("img",{staticClass:"img-full lazyloaded",attrs:{src:o(415),alt:"twonp-BroswerWindow3"}})])])}],r={name:"ProjectTwonp",mixins:[o(375).a],data:function(){return{landThemeClass:"dark-theme"}},head:function(){return{title:"Проект - Twonp"}},mounted:function(){}},l=(o(546),o(35)),d=o(548),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scrollable__container land"},[n("div",{staticClass:"twonp"},[n("div",{staticClass:"land__content twonp__content"},[n("div",{staticClass:"twonp__main fc",style:{backgroundImage:"url("+o(397)+")"}},[n("div",{staticClass:"twonp__main-inner container d-f-center column ptb"},[n("div",{staticClass:"twonp__main-logo w-100"},[n("img",{staticClass:"img-full lazyloaded",attrs:{src:o(529),alt:"twonp-logo"}})]),t._v(" "),n("div",{staticClass:"twonp__main-text"},[n("h2",{staticClass:"land-title"},[t._v("\n              Задача\n            ")]),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n              "+t._s(t.$t("task"))+"\n            ")])])])]),t._v(" "),n("div",{staticClass:"twonp__block-light br-block"},[n("div",{staticClass:"container"},[n("div",{staticClass:"twonp__solution d-f-center pb column"},[t._m(0),t._v(" "),n("div",{staticClass:"twonp__solution-text d-f-center column pt"},[n("h2",{staticClass:"land-title"},[t._v("\n                Решение\n              ")]),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n                "+t._s(t.$t("decision"))+"\n              ")]),t._v(" "),n("LandLink",{attrs:{url:"https://twonp.ru"}})],1)]),t._v(" "),n("div",{staticClass:"twonp__easy d-f-center pb"},[t._m(1),t._v(" "),n("div",{staticClass:"twonp__easy-text"},[n("h2",{staticClass:"land-title"},[t._v("\n                Удобство\n              ")]),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n                "+t._s(t.$t("comfort"))+"\n              ")]),t._v(" "),t._m(2)])])])]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"twonp__comfort br-block ptb"},[n("div",{staticClass:"container d-f-center column"},[n("h2",{staticClass:"land-title"},[t._v("\n            Интерактивная карта\n          ")]),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n            "+t._s(t.$t("enteractiveMap"))+"\n          ")]),t._v(" "),t._m(4)])]),t._v(" "),n("div",{staticClass:"twonp__block-dark ptb"},[n("div",{staticClass:"twonp__instrument container d-f-center column ptb"},[n("h2",{staticClass:"land-title"},[t._v("\n            ИНСТРУМЕНТ ПРОДАЖ\n          ")]),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n            "+t._s(t.$t("saleTool"))+"\n          ")]),t._v(" "),t._m(5)]),t._v(" "),t._m(6),t._v(" "),n("div",{staticClass:"twonp__ui container pb"},[n("div",{staticClass:"twonp__ui-main d-f-center column"},[n("h2",{staticClass:"land-title"},[t._v("\n              Интерфейс логистики\n            ")]),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n              "+t._s(t.$t("uiLogic"))+"\n            ")]),t._v(" "),t._m(7)]),t._v(" "),n("div",{staticClass:"twonp__ui-footer"},[t._m(8),t._v(" "),n("div",{staticClass:"twonp__ui-about"},[t._m(9),t._v(" "),n("h2",{staticClass:"land-title"},[t._v("\n                Работа с заказом\n              ")]),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n                "+t._s(t.$t("doOrder"))+"\n              ")])])])])]),t._v(" "),n("LandDivider",{staticClass:"twonp__divider",attrs:{"is-video":"","bg-image":o(408),poster:o(408),"video-url":o(530)}}),t._v(" "),n("div",{staticClass:"twonp__nav container pt d-f-center column"},[n("h2",{staticClass:"land-title"},[t._v("\n          Внимание к деталям\n        ")]),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n          "+t._s(t.$t("nav"))+"\n        ")]),t._v(" "),t._m(10)])],1)]),t._v(" "),n("LandNext",{staticClass:"project-next--route-66",attrs:{url:"route-66","back-image":o(531),"front-image":o(532)}})],1)}),n,!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports;installComponents(component,{LandLink:o(384).default,LandDivider:o(377).default,LandNext:o(374).default})}}]);