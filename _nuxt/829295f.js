(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,4,5,6,16,17,18],{366:function(t,e,n){"use strict";n.r(e);var o={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},l=n(35),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-next"},[n("div",{staticClass:"container"},[n("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),n("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+t.url+"/"}},[n("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[n("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),n("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[n("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,n){"use strict";n(51),n(9),n(21);var o=n(43),l=["light-theme","dark-theme"];e.a={computed:{},preload:!0,watch:{isPreloaderFinished:function(){this.updateLoco()}},mounted:function(){var t,e=this;(t=document.documentElement.classList).remove.apply(t,l),document.documentElement.classList.add(this.landThemeClass);var n=this,o=document.querySelector(".mob-scroll"),r=document.querySelector(".project__link-main");r.classList.remove("active"),this.$gsap.to(r,{autoAlpha:0,duration:.15,ease:"power2.inOut"}),this.$nextTick((function(){var t,l,r,d;e.$device.isDesktop?null===(t=e.$parent)||void 0===t||null===(l=t.$parent)||void 0===l||null===(r=l.$parent.$refs)||void 0===r||null===(d=r.scroller)||void 0===d||d.locomotive.on("scroll",(function(t){document.querySelector(".parallax")&&n.parallax(t),n.toggleMainLink(t)})):(document.querySelector(".parallax")&&o.addEventListener("scroll",n.parallax),o.addEventListener("scroll",n.toggleMainLink))})),setTimeout((function(){e.$nuxt.$emit("update-locomotive")}),900)},destroyed:function(){this.$device.isDesktop||document.querySelector(".mob-scroll").removeEventListener("scroll",this.parallax)},methods:{updateLoco:function(){var t,e,n,o,l;null===(t=this.$parent)||void 0===t||null===(e=t.$parent)||void 0===e||null===(n=e.$parent.$refs)||void 0===n||null===(o=n.scroller)||void 0===o||null===(l=o.locomotive)||void 0===l||l.update()},switchToggle:function(){var t,e,n,l,r=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&o.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$parent)||void 0===t||null===(e=t.$parent)||void 0===e||null===(n=e.$parent.$refs)||void 0===n||null===(l=n.scroller)||void 0===l||l.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){r.updateLoco(),o.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var e,n=window.innerHeight,o=document.querySelectorAll(".parallax");e=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,o.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,o=t-e-n;n>element.getBoundingClientRect().top&&e<2*element.clientHeight+t&&(element.style.transform="matrix(1, 0, 0, 1, 0, ".concat(t>n&&t?o/2*.3:-e/2*.3,")"))}))},toggleMainLink:function(t){var e=document.querySelector(".project__link-main");(this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop)>1999?(e.classList.add("active"),this.$gsap.to(e,{autoAlpha:1,duration:.15,ease:"power2.inOut"})):(e.classList.remove("active"),this.$gsap.to(e,{autoAlpha:0,duration:.15,ease:"power2.inOut"}))}}}},368:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("c98db6d6",content,!0,{sourceMap:!1})},369:function(t,e,n){"use strict";n.r(e);var o={name:"LandDivider",props:{isVideo:{type:Boolean,default:!1},videoUrl:{type:String,default:"",required:!1},poster:{type:String,default:"",required:!1},bgImage:{type:String,default:"",required:!1}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},l=n(35),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-divider",attrs:{"data-parallax":"container"}},[n("div",{staticClass:"land-divider__content"},[n("div",{staticClass:"land-divider__inner"},[n("div",{staticClass:"parallax"},[n("img",{staticClass:"lazyload img-full",attrs:{"data-src":t.bgImage,alt:"img"}})])]),t._v(" "),n("LandPlayIcon",{class:{isVideo:t.isVideo},attrs:{poster:t.poster,url:t.videoUrl}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandPlayIcon:n(373).default})},370:function(t,e,n){"use strict";n.r(e);var o={name:"LandSwitcher",props:{isWeb:{type:Boolean,required:!0}},data:function(){return{}},computed:{switcherClass:function(){return this.isWeb?"land-switcher--webdesign":"land-switcher--identity"}},watch:{},mounted:function(){this.isWeb?this.$gsap.set(".land__content--style",{opacity:0,y:100,display:"none"}):this.$gsap.set(".land__content--web",{opacity:0,y:100,display:"none"})},methods:{}},l=n(35),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-switcher",class:t.switcherClass},[n("div",{staticClass:"land-switcher__inner"},[n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#webdesign"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 187.3 109"}},[n("path",{attrs:{d:"M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"}})]),t._v(" "),n("span",[t._v("Сайт")])]),t._v(" "),n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#identity"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 13 109"}},[n("path",{attrs:{d:"M0,0h13v109H0V0z"}})]),t._v(" "),n("span",[t._v("Стиль")])])])])}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,n){"use strict";n.r(e);var o={name:"LandHeader",props:{headerText:{type:String,default:"",required:!0},isDual:{type:Boolean,default:!1,required:!1},isWeb:{type:Boolean,required:!1},url:{type:String,required:!0}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},l=n(35),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land__header d-f-center"},[n("p",{staticClass:"land__header-item land-text"},[t._v("\n    "+t._s(t.headerText)+"\n  ")]),t._v(" "),t.isDual?n("LandSwitcher",{staticClass:"land__header-item",attrs:{"is-web":t.isWeb},on:{switchToggle:function(e){return t.$emit("switchToggle")}}}):t._e(),t._v(" "),n("LandLink",{staticClass:"land__header-item",attrs:{url:t.url}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandSwitcher:n(370).default,LandLink:n(376).default})},372:function(t,e,n){"use strict";n.r(e);var o={name:"LandVideo",props:{isImg:{type:Boolean,default:!1,reqiured:!0},urlImg:{type:String,default:"",reqiured:!0},urlVideo:{type:String,default:"",reqiured:!0},loop:{type:Boolean,default:!0,reqiured:!0},autoplay:{type:Boolean,default:!0,reqiured:!0},videoClass:{type:String,default:"",reqiured:!0},preload:{type:String,default:"auto",reqiured:!0}},data:function(){return{}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{}},l=n(35),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-border",class:{"land-border--img":t.isImg}},[n("video",{staticClass:"video lazyloaded land-border__item",class:t.videoClass,attrs:{autoplay:t.autoplay,muted:"",preload:t.preload,loop:t.loop,playsinline:"","webkit-playsinline":"true"},domProps:{muted:!0}},[n("source",{attrs:{src:t.urlVideo,type:"video/mp4"}})]),t._v(" "),t.isImg?n("div",{staticClass:"land-border land-border--sm"},[n("img",{staticClass:"lazyloaded img-full land-border__item",attrs:{src:t.urlImg,alt:"concept"}})]):t._e()])}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,n){"use strict";n.r(e);n(49);var o={name:"LandPlayIcon",props:{isDivider:{type:Boolean,required:!1,default:!0},url:{type:String,required:!1,default:""},poster:{type:String,required:!1,default:""}},data:function(){return{isPlay:!1}},computed:{},mounted:function(){var t=this;this.$nextTick((function(){if(!document.querySelector(".modal-video")&&t.url){var e=document.createElement("div");e.className="modal-video d-f-center",e.innerHTML='<div class="modal-video__bg"></div>\n          <video poster=\''.concat(t.poster,'\' controls playsinline webkit-playsinline="true" preload="auto" class="video lazyloaded">\n            <source src="').concat(t.url,'" type="video/mp4">\n          </video>'),document.body.appendChild(e),t.closeModalVideo()}}))},beforeDestroy:function(){document.querySelector(".modal-video")&&document.querySelector(".modal-video").remove()},methods:{playVideo:function(){var t=this,e=this.$refs.playIcon,n=this.isDivider?e.parentNode.parentNode:e.parentNode;if(this.isDivider){var o=document.querySelector(".modal-video"),l=o.querySelector(".video");o.classList.add("active"),l.play(),this.isPlay=!0,l.addEventListener("ended",(function(){t.isPlay=!1,l.load(),o.classList.remove("active")}))}else if(n.querySelector(".video")){var video=n.querySelector(".video");video.play(),this.isPlay=!0,video.addEventListener("ended",(function(){t.isPlay=!1,video.load()}))}else this.isPlay=!0},closeModalVideo:function(){var t=this;document.querySelector(".modal-video__bg").addEventListener("click",(function(){var e=document.querySelector(".modal-video"),video=e.querySelector(".video");t.isPlay=!1,video.load(),e.classList.remove("active")}))}}},l=n(35),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDivider?n("div",{staticClass:"land-divider__play",class:{"d-none":t.isPlay}},[n("div",{ref:"playIcon",staticClass:"play-icon",attrs:{"data-cursor":""},on:{click:t.playVideo}}),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n    Посмотреть видео о сайте\n  ")])]):n("div",{ref:"playIcon",staticClass:"play-icon",class:{"d-none":t.isPlay},attrs:{"data-cursor":""},on:{click:t.playVideo}})}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,n){"use strict";n(368)},375:function(t,e,n){var o=n(70)(!1);o.push([t.i,".link-site svg{fill:inherit;transition:fill .5s ease}",""]),t.exports=o},376:function(t,e,n){"use strict";n.r(e);var o={name:"LandLink",props:{url:{type:String,required:!0}},data:function(){return{}},computed:{}},l=(n(374),n(35)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"link-site",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[n("svg",{attrs:{width:"37",height:"37",viewBox:"0 0 37 37",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36ZM18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z"}}),t._v(" "),n("path",{attrs:{d:"M21.4028 24.2877L18.5199 27.1726C17.9504 27.7492 17.2724 28.2076 16.5249 28.5212C15.7775 28.8348 14.9754 28.9975 14.1647 29C13.3541 29.0024 12.551 28.8446 11.8017 28.5355C11.0523 28.2264 10.3716 27.7722 9.79859 27.199C9.2256 26.6258 8.7717 25.945 8.46303 25.1957C8.15435 24.4465 7.997 23.6436 8.00004 22.8333C8.00308 22.023 8.16645 21.2213 8.48073 20.4743C8.79502 19.7274 9.25401 19.05 9.83129 18.4812L12.7142 15.5962C12.9118 15.4055 13.1764 15.2999 13.4511 15.3023C13.7258 15.3047 13.9885 15.4148 14.1827 15.609C14.377 15.8031 14.4871 16.0658 14.4895 16.3403C14.4919 16.6149 14.3863 16.8794 14.1955 17.0769L11.3126 19.966C10.9345 20.3413 10.6345 20.7877 10.4297 21.2794C10.225 21.7711 10.1196 22.2985 10.1196 22.8311C10.1196 23.3637 10.225 23.891 10.4297 24.3827C10.6345 24.8744 10.9345 25.3208 11.3126 25.6961C12.0836 26.4323 13.1088 26.8431 14.1751 26.8431C15.2413 26.8431 16.2666 26.4323 17.0376 25.6961L19.9216 22.8112C20.1191 22.6204 20.3838 22.5149 20.6584 22.5173C20.9331 22.5196 21.1958 22.6298 21.3901 22.8239C21.5843 23.0181 21.6945 23.2807 21.6969 23.5553C21.6993 23.8298 21.5937 24.0944 21.4028 24.2919V24.2877ZM21.363 14.1543C21.4597 14.0543 21.5753 13.9745 21.7031 13.9196C21.8309 13.8647 21.9683 13.8358 22.1074 13.8346C22.2465 13.8334 22.3845 13.8599 22.5132 13.9126C22.642 13.9652 22.7589 14.043 22.8573 14.1413C22.9557 14.2396 23.0334 14.3565 23.0861 14.4852C23.1388 14.6139 23.1653 14.7518 23.1641 14.8909C23.1629 15.0299 23.134 15.1673 23.0791 15.2951C23.0242 15.4228 22.9444 15.5384 22.8443 15.635L15.637 22.8457C15.5403 22.9457 15.4247 23.0255 15.2969 23.0804C15.1691 23.1353 15.0317 23.1642 14.8926 23.1654C14.7535 23.1666 14.6155 23.1401 14.4868 23.0874C14.358 23.0348 14.2411 22.957 14.1427 22.8587C14.0443 22.7604 13.9666 22.6435 13.9139 22.5148C13.8612 22.3861 13.8347 22.2482 13.8359 22.1091C13.8371 21.9701 13.866 21.8327 13.9209 21.7049C13.9758 21.5772 14.0556 21.4616 14.1557 21.365L21.363 14.1543ZM27.1687 18.5199L24.2858 21.4038C24.0872 21.5961 23.8216 21.7036 23.5451 21.7036C23.2687 21.7036 23.003 21.5961 22.8045 21.4038C22.6081 21.2074 22.4978 20.9411 22.4978 20.6634C22.4978 20.3858 22.6081 20.1195 22.8045 19.9231L25.6874 17.034C26.0655 16.6587 26.3655 16.2123 26.5703 15.7206C26.775 15.2289 26.8804 14.7015 26.8804 14.1689C26.8804 13.6363 26.775 13.109 26.5703 12.6173C26.3655 12.1256 26.0655 11.6792 25.6874 11.3039C24.9164 10.5677 23.8912 10.1569 22.8249 10.1569C21.7587 10.1569 20.7334 10.5677 19.9624 11.3039L17.0784 14.193C16.8809 14.3838 16.6162 14.4893 16.3416 14.4869C16.0669 14.4845 15.8042 14.3744 15.6099 14.1803C15.4157 13.9861 15.3055 13.7235 15.3031 13.4489C15.3007 13.1743 15.4063 12.9098 15.5972 12.7123L18.4801 9.8274C19.0496 9.25076 19.7276 8.79244 20.4751 8.47882C21.2225 8.1652 22.0246 8.00248 22.8353 8.00003C23.6459 7.99758 24.449 8.15544 25.1983 8.46453C25.9477 8.77363 26.6284 9.22784 27.2014 9.80102C27.7744 10.3742 28.2283 11.055 28.537 11.8043C28.8456 12.5535 29.003 13.3564 29 14.1667C28.9969 14.977 28.8336 15.7787 28.5193 16.5257C28.205 17.2726 27.746 17.95 27.1687 18.5188V18.5199Z"}})])])}),[],!1,null,null,null);e.default=component.exports},380:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"header":"こんにちは、世界!","task":"こんにちは、世界!","decision":"こんにちは、世界!","nav":"こんにちは、世界!","uiUx":"こんにちは、世界!","details":"こんにちは、世界!"},"ru":{"header":"Cайт для компании, создающей бассейны премиум-класса нового поколения.","task":"Создать лучший в отрасли сайт. И через 4 концепта  рассказать клиентам не только о технических характеристиках продукции, но и про ощущения от обладания таким бассейном, то есть подарить клиенту эмоции. Показать конкурентные преимущества компании, в частности, новейшие технологии, использующиеся в технологическом цикле, обосновав тем самым высокую цену бассейнов.","decision":"Создали стильный сайт, который лаконично презентует пользователю основную идею при помощи уникального и сложного в проектировании слайдера. Незаметный, но удобный интерфейс позволяет погрузиться в атмосферу роскошных, технологичных бассейнов не задумываясь о поиске необходимой информации.","nav":"Меню разработано таким образом, чтобы пользователь мог чётко отделить общие страницы сайта от страниц‑концепций. «Концептуальные» кнопки дублируются на главных экранах всех соответствующих страниц, чтобы обеспечить удобный переход между ними.","uiUx":"Блок наглядно демонстрирует основное преимущество бассейнов INPOOLCONCEPT– интеллектуальную систему управления. Нажимая на кнопки, можно увидеть часть функций в работе.","details":"Нам было крайне важно четко отделить одну концепцию от другой и объяснить пользователю их различия. Мы добились этого путём создания системы шаблонов с уникальными иконками и атмосферными фотографиями."}}'),delete t.options._Ctor}},395:function(t,e,n){var content=n(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("6c7c4ac6",content,!0,{sourceMap:!1})},470:function(t,e,n){t.exports=n.p+"videos/1.6145a1d.mp4"},471:function(t,e,n){t.exports=n.p+"img/land1.fa88127.jpg"},472:function(t,e,n){t.exports=n.p+"videos/2.9900d84.mp4"},473:function(t,e,n){t.exports=n.p+"videos/3.ee887cf.mp4"},474:function(t,e,n){t.exports=n.p+"img/ui.2713e9e.jpg"},475:function(t,e,n){t.exports=n.p+"img/inpool-bg-video.dcadab0.png"},476:function(t,e,n){t.exports=n.p+"img/main-concept.60cb001.png"},477:function(t,e,n){t.exports=n.p+"img/back.dbf480d.png"},478:function(t,e,n){t.exports=n.p+"img/forward.f36f56d.png"},479:function(t,e,n){t.exports=n.p+"img/concepts.798a526.png"},480:function(t,e,n){"use strict";n(395)},481:function(t,e,n){var o=n(70)(!1);o.push([t.i,"body.project-inpool-concept{background-color:#2a2a2a}body.project-inpool-concept .header.active-bg{background-color:rgba(42,42,42,.6)}body.project-inpool-concept .link-site,body.project-inpool-concept .link-site.hover,body.project-inpool-concept .link-site.touch{fill:#767676}body.project-inpool-concept .nav{background-color:#2a2a2a}body.project-inpool-concept .nav.active-nav .nav-s-area__container:before{background:linear-gradient(0deg,#2a2a2a,transparent 49%,transparent 51%,#2a2a2a)}body.project-inpool-concept .project-next .js-3d-object__back{background-color:#2a2a2a}.inpool{color:#9f9f9f}.inpool .land-divider__content:after,.inpool .land-divider__content:before{background-color:#2a2a2a}.inpool .land-text{color:#9f9f9f}.inpool .land-title{color:#e8e8e8}.inpool .land-border{border-color:#848484;background-color:#2a2a2a}.inpool .land-border__item{box-shadow:5px 20px 47px rgba(0,0,0,.2)}.inpool__goal-img{position:relative}.inpool__goal-img span{font-size:14px;position:absolute;bottom:0;left:0;max-width:390px;transform:translateY(-100%)}@media screen and (max-width:1023px){.inpool__goal-img span{font-size:12px;max-width:291px}}@media screen and (max-width:767px){.inpool__goal-img span{font-size:10px;max-width:161px;transform:translateY(0)}}.inpool__nav .land__block-item--about{max-width:45%}@media screen and (max-width:1023px){.inpool__nav .land__block-item--about{max-width:600px}}.inpool .land-circles{margin-top:250px}@media screen and (max-width:1023px){.inpool .land-circles{margin-top:110px}}.inpool .land-circles:before{width:calc(80% + 2px);border-color:#484848;padding-bottom:80%}.inpool .land-circles:after{width:calc(70% + 2px);border-color:#6a6a6a;padding-bottom:70%}@media screen and (max-width:767px){.inpool .land__block--reverse .land__block-item:nth-child(2){min-width:100vw}}",""]),t.exports=o},482:function(t,e,n){"use strict";var o=n(380),l=n.n(o);e.default=l.a},559:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"land__full-w"},[o("div",{staticClass:"inpool__goal-img"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:n(479),alt:"concepts"}}),t._v(" "),o("span",[t._v("\n              Для каждой концепции были созданы свои посадочные страницы\n            ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"land-title"},[t._v("\n            Удобная "),n("br"),t._v("\n            навигация\n          ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"land-title"},[t._v("\n            Интерфейс "),n("br"),t._v("\n            управления\n          ")])}],l={name:"ProjectInpool",mixins:[n(367).a],data:function(){return{landThemeClass:"dark-theme"}},head:function(){return{title:"Проект - InpooL"}}},r=(n(480),n(35)),d=n(482),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"scrollable__container land"},[o("div",{staticClass:"land__inner inpool"},[o("LandHeader",{attrs:{"header-text":t.$t("header"),url:"https://inpoolconcept.ru"}}),t._v(" "),o("div",{staticClass:"land__content inpool__content"},[o("div",{staticClass:"land__block align-i d-f-center column ptb container"},[o("LandVideo",{attrs:{"url-video":n(470),"is-img":!0,"url-img":n(471)}})],1),t._v(" "),o("div",{staticClass:"land__block inpool__goal d-f-center column container"},[o("h2",{staticClass:"land-title"},[t._v("\n          Задача\n        ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n          "+t._s(t.$t("task"))+"\n        ")]),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"land__block inpool__solution d-f-center column ptb container"},[o("h2",{staticClass:"land-title"},[t._v("\n          Решение\n        ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n          "+t._s(t.$t("decision"))+"\n        ")]),t._v(" "),o("div",{staticClass:"land__full-w"},[o("LandVideo",{attrs:{"url-video":n(472)}})],1)]),t._v(" "),o("div",{staticClass:"\n            land__block land__block--half land__block--reverse\n            d-f-center\n            inpool__nav\n            container\n          "},[o("div",{staticClass:"land__block-item land__block-item--about"},[t._m(1),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n            "+t._s(t.$t("nav"))+"\n          ")])]),t._v(" "),o("div",{staticClass:"land__block-item"},[o("LandVideo",{attrs:{"url-video":n(473)}})],1)]),t._v(" "),o("div",{staticClass:"\n            land__block land__block--half\n            d-f-center\n            ptb\n            inpool__ui\n            container\n          "},[o("div",{staticClass:"land__block-item land__block-item--about"},[t._m(2),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n            "+t._s(t.$t("uiUx"))+"\n          ")])]),t._v(" "),o("div",{staticClass:"land__block-item land__block-item--content"},[o("div",{staticClass:"land-border land-border--h"},[o("img",{staticClass:"lazyloaded img-full land-border__item",attrs:{src:n(474),alt:"ui"}})])])]),t._v(" "),o("LandDivider",{staticClass:"inpool__divider",attrs:{"bg-image":n(475)}}),t._v(" "),o("div",{staticClass:"land__block inpool__details pt"},[o("div",{staticClass:"container d-f-center column"},[o("h2",{staticClass:"land-title"},[t._v("\n            детальная проработка\n          ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n            "+t._s(t.$t("details"))+"\n          ")])]),t._v(" "),o("div",{staticClass:"land-circles"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:n(476),alt:"img"}})])])],1)],1),t._v(" "),o("LandNext",{staticClass:"project-next--nce",attrs:{url:"nce","back-image":n(477),"front-image":n(478)}})],1)}),o,!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports;installComponents(component,{LandHeader:n(371).default,LandVideo:n(372).default,LandDivider:n(369).default,LandNext:n(366).default})}}]);