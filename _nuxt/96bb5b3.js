(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,4,5,6,15,16,17],{364:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("c98db6d6",content,!0,{sourceMap:!1})},365:function(t,e,n){"use strict";n.r(e);var l={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-next"},[n("div",{staticClass:"container"},[n("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),n("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+t.url+"/"}},[n("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[n("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),n("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[n("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,n){"use strict";n(49),n(9),n(22);var l=n(43),r=["light-theme","dark-theme"];e.a={computed:{},preload:!0,watch:{isPreloaderFinished:function(){this.updateLoco()}},mounted:function(){var t,e=this;(t=document.documentElement.classList).remove.apply(t,r),document.documentElement.classList.add(this.landThemeClass);var n=this,l=document.querySelector(".mob-scroll"),o=document.querySelector(".project__link-main");o.classList.remove("active"),this.$gsap.to(o,{autoAlpha:0,duration:.15,ease:"power2.inOut"}),this.$nextTick((function(){var t,r,o,d;document.querySelector(".parallax")&&(e.$device.isDesktop?null===(t=e.$parent)||void 0===t||null===(r=t.$parent)||void 0===r||null===(o=r.$parent.$refs)||void 0===o||null===(d=o.scroller)||void 0===d||d.locomotive.on("scroll",(function(t){n.parallax(t),n.toggleMainLink(t)})):(l.addEventListener("scroll",n.parallax),l.addEventListener("scroll",n.toggleMainLink)))})),setTimeout((function(){e.$nuxt.$emit("update-locomotive")}),900)},destroyed:function(){this.$device.isDesktop||document.querySelector(".mob-scroll").removeEventListener("scroll",this.parallax)},methods:{updateLoco:function(){var t,e,n,l,r;null===(t=this.$parent)||void 0===t||null===(e=t.$parent)||void 0===e||null===(n=e.$parent.$refs)||void 0===n||null===(l=n.scroller)||void 0===l||null===(r=l.locomotive)||void 0===r||r.update()},switchToggle:function(){var t,e,n,r,o=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&l.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$parent)||void 0===t||null===(e=t.$parent)||void 0===e||null===(n=e.$parent.$refs)||void 0===n||null===(r=n.scroller)||void 0===r||r.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){o.updateLoco(),l.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var e,n=window.innerHeight,l=document.querySelectorAll(".parallax");e=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,l.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,l=t-e-n;n>element.getBoundingClientRect().top&&e<2*element.clientHeight+t&&(element.style.transform="matrix(1, 0, 0, 1, 0, ".concat(t>n&&t?l/2*.3:-e/2*.3,")"))}))},toggleMainLink:function(t){var e=document.querySelector(".project__link-main");(this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop)>1999?(e.classList.add("active"),this.$gsap.to(e,{autoAlpha:1,duration:.15,ease:"power2.inOut"})):(e.classList.remove("active"),this.$gsap.to(e,{autoAlpha:0,duration:.15,ease:"power2.inOut"}))}}}},367:function(t,e,n){"use strict";n.r(e);var l={name:"LandSwitcher",props:{isWeb:{type:Boolean,required:!0}},data:function(){return{}},computed:{switcherClass:function(){return this.isWeb?"land-switcher--webdesign":"land-switcher--identity"}},watch:{},mounted:function(){this.isWeb?this.$gsap.set(".land__content--style",{opacity:0,y:100,display:"none"}):this.$gsap.set(".land__content--web",{opacity:0,y:100,display:"none"})},methods:{}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-switcher",class:t.switcherClass},[n("div",{staticClass:"land-switcher__inner"},[n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#webdesign"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 187.3 109"}},[n("path",{attrs:{d:"M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"}})]),t._v(" "),n("span",[t._v("Сайт")])]),t._v(" "),n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#identity"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 13 109"}},[n("path",{attrs:{d:"M0,0h13v109H0V0z"}})]),t._v(" "),n("span",[t._v("Стиль")])])])])}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,n){"use strict";n.r(e);var l={name:"LandDivider",props:{isVideo:{type:Boolean,default:!1},videoUrl:{type:String,default:"",required:!1},poster:{type:String,default:"",required:!1},bgImage:{type:String,default:"",required:!1}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-divider",attrs:{"data-parallax":"container"}},[n("div",{staticClass:"land-divider__content"},[n("div",{staticClass:"land-divider__inner"},[n("div",{staticClass:"parallax"},[n("img",{staticClass:"lazyload img-full",attrs:{"data-src":t.bgImage,alt:"img"}})])]),t._v(" "),n("LandPlayIcon",{class:{isVideo:t.isVideo},attrs:{poster:t.poster,url:t.videoUrl}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandPlayIcon:n(374).default})},369:function(t,e,n){"use strict";n(364)},370:function(t,e,n){var l=n(70)(!1);l.push([t.i,".link-site svg{fill:inherit;transition:fill .5s ease}",""]),t.exports=l},371:function(t,e,n){"use strict";n.r(e);var l={name:"LandHeader",props:{headerText:{type:String,default:"",required:!0},isDual:{type:Boolean,default:!1,required:!1},isWeb:{type:Boolean,required:!1},url:{type:String,required:!0}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land__header d-f-center"},[n("p",{staticClass:"land__header-item land-text"},[t._v("\n    "+t._s(t.headerText)+"\n  ")]),t._v(" "),t.isDual?n("LandSwitcher",{staticClass:"land__header-item",attrs:{"is-web":t.isWeb},on:{switchToggle:function(e){return t.$emit("switchToggle")}}}):t._e(),t._v(" "),n("LandLink",{staticClass:"land__header-item",attrs:{url:t.url}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandSwitcher:n(367).default,LandLink:n(372).default})},372:function(t,e,n){"use strict";n.r(e);var l={name:"LandLink",props:{url:{type:String,required:!0}},data:function(){return{}},computed:{}},r=(n(369),n(33)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"link-site",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[n("svg",{attrs:{width:"37",height:"37",viewBox:"0 0 37 37",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36ZM18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z"}}),t._v(" "),n("path",{attrs:{d:"M21.4028 24.2877L18.5199 27.1726C17.9504 27.7492 17.2724 28.2076 16.5249 28.5212C15.7775 28.8348 14.9754 28.9975 14.1647 29C13.3541 29.0024 12.551 28.8446 11.8017 28.5355C11.0523 28.2264 10.3716 27.7722 9.79859 27.199C9.2256 26.6258 8.7717 25.945 8.46303 25.1957C8.15435 24.4465 7.997 23.6436 8.00004 22.8333C8.00308 22.023 8.16645 21.2213 8.48073 20.4743C8.79502 19.7274 9.25401 19.05 9.83129 18.4812L12.7142 15.5962C12.9118 15.4055 13.1764 15.2999 13.4511 15.3023C13.7258 15.3047 13.9885 15.4148 14.1827 15.609C14.377 15.8031 14.4871 16.0658 14.4895 16.3403C14.4919 16.6149 14.3863 16.8794 14.1955 17.0769L11.3126 19.966C10.9345 20.3413 10.6345 20.7877 10.4297 21.2794C10.225 21.7711 10.1196 22.2985 10.1196 22.8311C10.1196 23.3637 10.225 23.891 10.4297 24.3827C10.6345 24.8744 10.9345 25.3208 11.3126 25.6961C12.0836 26.4323 13.1088 26.8431 14.1751 26.8431C15.2413 26.8431 16.2666 26.4323 17.0376 25.6961L19.9216 22.8112C20.1191 22.6204 20.3838 22.5149 20.6584 22.5173C20.9331 22.5196 21.1958 22.6298 21.3901 22.8239C21.5843 23.0181 21.6945 23.2807 21.6969 23.5553C21.6993 23.8298 21.5937 24.0944 21.4028 24.2919V24.2877ZM21.363 14.1543C21.4597 14.0543 21.5753 13.9745 21.7031 13.9196C21.8309 13.8647 21.9683 13.8358 22.1074 13.8346C22.2465 13.8334 22.3845 13.8599 22.5132 13.9126C22.642 13.9652 22.7589 14.043 22.8573 14.1413C22.9557 14.2396 23.0334 14.3565 23.0861 14.4852C23.1388 14.6139 23.1653 14.7518 23.1641 14.8909C23.1629 15.0299 23.134 15.1673 23.0791 15.2951C23.0242 15.4228 22.9444 15.5384 22.8443 15.635L15.637 22.8457C15.5403 22.9457 15.4247 23.0255 15.2969 23.0804C15.1691 23.1353 15.0317 23.1642 14.8926 23.1654C14.7535 23.1666 14.6155 23.1401 14.4868 23.0874C14.358 23.0348 14.2411 22.957 14.1427 22.8587C14.0443 22.7604 13.9666 22.6435 13.9139 22.5148C13.8612 22.3861 13.8347 22.2482 13.8359 22.1091C13.8371 21.9701 13.866 21.8327 13.9209 21.7049C13.9758 21.5772 14.0556 21.4616 14.1557 21.365L21.363 14.1543ZM27.1687 18.5199L24.2858 21.4038C24.0872 21.5961 23.8216 21.7036 23.5451 21.7036C23.2687 21.7036 23.003 21.5961 22.8045 21.4038C22.6081 21.2074 22.4978 20.9411 22.4978 20.6634C22.4978 20.3858 22.6081 20.1195 22.8045 19.9231L25.6874 17.034C26.0655 16.6587 26.3655 16.2123 26.5703 15.7206C26.775 15.2289 26.8804 14.7015 26.8804 14.1689C26.8804 13.6363 26.775 13.109 26.5703 12.6173C26.3655 12.1256 26.0655 11.6792 25.6874 11.3039C24.9164 10.5677 23.8912 10.1569 22.8249 10.1569C21.7587 10.1569 20.7334 10.5677 19.9624 11.3039L17.0784 14.193C16.8809 14.3838 16.6162 14.4893 16.3416 14.4869C16.0669 14.4845 15.8042 14.3744 15.6099 14.1803C15.4157 13.9861 15.3055 13.7235 15.3031 13.4489C15.3007 13.1743 15.4063 12.9098 15.5972 12.7123L18.4801 9.8274C19.0496 9.25076 19.7276 8.79244 20.4751 8.47882C21.2225 8.1652 22.0246 8.00248 22.8353 8.00003C23.6459 7.99758 24.449 8.15544 25.1983 8.46453C25.9477 8.77363 26.6284 9.22784 27.2014 9.80102C27.7744 10.3742 28.2283 11.055 28.537 11.8043C28.8456 12.5535 29.003 13.3564 29 14.1667C28.9969 14.977 28.8336 15.7787 28.5193 16.5257C28.205 17.2726 27.746 17.95 27.1687 18.5188V18.5199Z"}})])])}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,n){"use strict";n.r(e);var l={name:"LandVideo",props:{isImg:{type:Boolean,default:!1,reqiured:!0},urlImg:{type:String,default:"",reqiured:!0},urlVideo:{type:String,default:"",reqiured:!0},loop:{type:Boolean,default:!0,reqiured:!0},autoplay:{type:Boolean,default:!0,reqiured:!0},videoClass:{type:String,default:"",reqiured:!0},preload:{type:String,default:"auto",reqiured:!0}},data:function(){return{}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-border",class:{"land-border--img":t.isImg}},[n("video",{staticClass:"video lazyloaded land-border__item",class:t.videoClass,attrs:{autoplay:t.autoplay,muted:"",preload:t.preload,loop:t.loop,playsinline:"","webkit-playsinline":"true"},domProps:{muted:!0}},[n("source",{attrs:{src:t.urlVideo,type:"video/mp4"}})]),t._v(" "),t.isImg?n("div",{staticClass:"land-border land-border--sm"},[n("img",{staticClass:"lazyloaded img-full land-border__item",attrs:{src:t.urlImg,alt:"concept"}})]):t._e()])}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,n){"use strict";n.r(e);n(50);var l={name:"LandPlayIcon",props:{isDivider:{type:Boolean,required:!1,default:!0},url:{type:String,required:!1,default:""},poster:{type:String,required:!1,default:""}},data:function(){return{isPlay:!1}},computed:{},mounted:function(){var t=this;this.$nextTick((function(){if(!document.querySelector(".modal-video")&&t.url){var e=document.createElement("div");e.className="modal-video d-f-center",e.innerHTML='<div class="modal-video__bg"></div>\n          <video poster=\''.concat(t.poster,'\' controls playsinline webkit-playsinline="true" preload="auto" class="video lazyloaded">\n            <source src="').concat(t.url,'" type="video/mp4">\n          </video>'),document.body.appendChild(e),t.closeModalVideo()}}))},beforeDestroy:function(){document.querySelector(".modal-video")&&document.querySelector(".modal-video").remove()},methods:{playVideo:function(){var t=this,e=this.$refs.playIcon,n=this.isDivider?e.parentNode.parentNode:e.parentNode;if(this.isDivider){var l=document.querySelector(".modal-video"),r=l.querySelector(".video");l.classList.add("active"),r.play(),this.isPlay=!0,r.addEventListener("ended",(function(){t.isPlay=!1,r.load(),l.classList.remove("active")}))}else if(n.querySelector(".video")){var video=n.querySelector(".video");video.play(),this.isPlay=!0,video.addEventListener("ended",(function(){t.isPlay=!1,video.load()}))}else this.isPlay=!0},closeModalVideo:function(){var t=this;document.querySelector(".modal-video__bg").addEventListener("click",(function(){var e=document.querySelector(".modal-video"),video=e.querySelector(".video");t.isPlay=!1,video.load(),e.classList.remove("active")}))}}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDivider?n("div",{staticClass:"land-divider__play",class:{"d-none":t.isPlay}},[n("div",{ref:"playIcon",staticClass:"play-icon",attrs:{"data-cursor":""},on:{click:t.playVideo}}),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n    Посмотреть видео о сайте\n  ")])]):n("div",{ref:"playIcon",staticClass:"play-icon",class:{"d-none":t.isPlay},attrs:{"data-cursor":""},on:{click:t.playVideo}})}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,n){t.exports=n.p+"img/3d.fe0ec7d.png"},390:function(t,e,n){t.exports=n.p+"img/centerbass-bg-video.dc9e42b.png"},392:function(t,e,n){t.exports=n.p+"img/land1.99a56d7.jpg"},393:function(t,e,n){t.exports=n.p+"img/nav.1bfb42e.png"},394:function(t,e,n){t.exports=n.p+"img/three.3b46e0e.png"},404:function(t,e,n){t.exports=n.p+"img/next-project-front.4c2fada.svg"},405:function(t,e,n){t.exports=n.p+"img/next-project.ad0ac8e.jpg"},494:function(t,e,n){var content=n(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("6b5a3c34",content,!0,{sourceMap:!1})},546:function(t,e,n){t.exports=n.p+"videos/1.a0b3028.mp4"},547:function(t,e,n){t.exports=n.p+"videos/2.24752b8.mp4"},548:function(t,e,n){t.exports=n.p+"videos/3.b2f276f.mp4"},549:function(t,e,n){t.exports=n.p+"videos/4.fa71e3a.mp4"},550:function(t,e,n){"use strict";n(494)},551:function(t,e,n){var l=n(70)(!1);l.push([t.i,"body.project-centerbass{background-color:#487f80}body.project-centerbass .header.active-bg{background-color:rgba(72,127,128,.6)}body.project-centerbass .nav{background-color:#487f80}body.project-centerbass .nav.active-nav .nav-s-area__container:before{background:linear-gradient(0deg,#487f80,transparent 49%,transparent 51%,#487f80)}body.project-centerbass .project-next{padding-top:50px}body.project-centerbass .project-next .js-3d-object__back{background-color:#487f80}.centerbass .land-border{border-color:#c1c1c1;background-color:#487f80}.centerbass .land-border,.centerbass .land-border__item{box-shadow:5px 20px 47px rgba(0,0,0,.25)}.centerbass .land-circles:after,.centerbass .land-circles:before{border-color:#c1c1c1}.centerbass__solution-content .land-border{border:none;padding:0;box-shadow:none}.centerbass__3d{background:linear-gradient(180deg,#66a4a5,rgba(102,164,165,0));border-bottom-right-radius:0;border-bottom-left-radius:0}.centerbass .land-divider__content:after,.centerbass .land-divider__content:before{background:#487f80}",""]),t.exports=l},575:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"land__block centerbass__goal d-f-center column container"},[l("h2",{staticClass:"land-title"},[t._v("\n          Задача\n        ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n          Создать удобный сайт, который максимально подробно и понятно\n          отображает технологии и преимущества компании.\n        ")]),t._v(" "),l("div",{staticClass:"land__full-w"},[l("div",{staticClass:"centerbass__goal-img"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(394),alt:"concepts"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",{staticClass:"land-title"},[t._v("\n            Решение\n          ")]),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n            Сделали минималистичный сайт, который в интерактивной форме\n            презентует пользователю самую важную информацию о продукции\n            компании и ее возможностях.\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land__block-item land__block-item--about"},[n("h2",{staticClass:"land-title"},[t._v("\n            цветовая палитра\n          ")]),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n            Блок с палитрой был реализован в удобном для просмотра формате – с изображениями цветов, яркими описаниями и ассоциациями.\n          ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"\n            land__block land__block--half land__block--reverse\n            d-f-center\n            centerbass__nav\n            container\n            pt\n          "},[l("div",{staticClass:"land__block-item land__block-item--about"},[l("h2",{staticClass:"land-title"},[t._v("\n            Понятная\n            навигация\n          ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n            На сайте так же была создана таблица просмотра и сравнения моделей. Пользователю доступна вся информация о продукции компании – внешний вид бассейнов и их технические характеристики.\n          ")])]),t._v(" "),l("div",{staticClass:"land__block-item"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(393),alt:"ui"}})])])}],r={name:"ProjectCenterbass",mixins:[n(366).a],data:function(){return{landThemeClass:"dark-theme"}},head:function(){return{title:"Проект - Centerbass"}}},o=(n(550),n(33)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"scrollable__container land"},[l("div",{staticClass:"land__inner centerbass"},[l("LandHeader",{attrs:{"header-text":"Сайт для компании Центр Бассейнов",url:"https://compasspools-centr.ru/"}}),t._v(" "),l("div",{staticClass:"land__content centerbass__content"},[l("div",{staticClass:"land__block align-i d-f-center column ptb container"},[l("LandVideo",{attrs:{"url-video":n(546),"is-img":!0,"url-img":n(392)}})],1),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"land__block centerbass__solution d-f-center column ptb"},[t._m(1),t._v(" "),l("div",{staticClass:"land__full-w centerbass__solution-content"},[l("div",{staticClass:"land-circles"},[l("LandVideo",{staticClass:"w-100",attrs:{"url-video":n(547)}})],1)])]),t._v(" "),l("div",{staticClass:"\n            land__block land__block--half\n            d-f-center\n            centerbass__palitr\n            container\n          "},[t._m(2),t._v(" "),l("div",{staticClass:"land__block-item land__block-item--content"},[l("LandVideo",{staticClass:"land-border--h",attrs:{"url-video":n(548)}})],1)]),t._v(" "),t._m(3),t._v(" "),l("div",{staticClass:"land__block ptb container d-f-center"},[l("div",{staticClass:"land__full-w"},[l("div",{staticClass:"land-circles"},[l("LandVideo",{staticClass:"w-100",attrs:{"url-video":n(549)}})],1)])]),t._v(" "),l("div",{staticClass:"land__block centerbass__3d ptb br-block"},[l("div",{staticClass:"container d-f-center column"},[l("h2",{staticClass:"land-title"},[t._v("\n            3D модель\n          ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n            Для полноценного понимания функционирования бассейнов, на сайте была создана 3D модель, которая демонстрирует пользователю устройство бассейнов и их технологические преимущества.\n          ")]),t._v(" "),l("div",{staticClass:"centerbass__3d-img w-100 pt"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(377),alt:"3d"}})])])]),t._v(" "),l("LandDivider",{staticClass:"centerbass__divider",attrs:{"bg-image":n(390)}})],1)],1),t._v(" "),l("LandNext",{staticClass:"project-next--dexsa",attrs:{url:"dexsa","back-image":n(405),"front-image":n(404)}})],1)}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{LandHeader:n(371).default,LandVideo:n(373).default,LandDivider:n(368).default,LandNext:n(365).default})}}]);