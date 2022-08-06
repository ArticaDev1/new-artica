(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3,4,5,6,16,17,18],{374:function(t,e,l){"use strict";l.r(e);var n={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=l(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"project-next"},[l("div",{staticClass:"container"},[l("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),l("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:t.localePath("/project/"+t.url+"/")}},[l("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[l("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),l("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[l("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,l){"use strict";l(51),l(8),l(20);var n=l(47),o=["light-theme","dark-theme"];e.a={computed:{},preload:!0,watch:{},mounted:function(){var t,e=this;(t=document.documentElement.classList).remove.apply(t,o),document.documentElement.classList.add(this.landThemeClass);var l=this,n=document.querySelector(".mob-scroll"),r=document.querySelector(".project__link-main");r.classList.remove("active"),this.$gsap.to(r,{autoAlpha:0,duration:.15,ease:"power2.inOut"}),this.$nextTick((function(){var t,o,r,d;e.$device.isDesktop?null===(t=e.$parent)||void 0===t||null===(o=t.$parent)||void 0===o||null===(r=o.$parent.$refs)||void 0===r||null===(d=r.scroller)||void 0===d||d.locomotive.on("scroll",(function(t){document.querySelector(".parallax")&&l.parallax(t),l.toggleMainLink(t)})):(document.querySelector(".parallax")&&n.addEventListener("scroll",l.parallax),n.addEventListener("scroll",l.toggleMainLink))})),setTimeout((function(){e.$nuxt.$emit("update-locomotive")}),900)},destroyed:function(){this.$device.isDesktop||document.querySelector(".mob-scroll").removeEventListener("scroll",this.parallax)},methods:{updateLoco:function(){var t,e,l,n,o;null===(t=this.$parent)||void 0===t||null===(e=t.$parent)||void 0===e||null===(l=e.$parent.$refs)||void 0===l||null===(n=l.scroller)||void 0===n||null===(o=n.locomotive)||void 0===o||o.update()},switchToggle:function(){var t,e,l,o,r=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&n.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$parent)||void 0===t||null===(e=t.$parent)||void 0===e||null===(l=e.$parent.$refs)||void 0===l||null===(o=l.scroller)||void 0===o||o.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){r.updateLoco(),n.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var e,l=window.innerHeight,n=document.querySelectorAll(".parallax");e=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,n.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,n=t-e-l;l>element.getBoundingClientRect().top&&e<2*element.clientHeight+t&&(element.style.transform="matrix(1, 0, 0, 1, 0, ".concat(t>l&&t?n/2*.3:-e/2*.3,")"))}))},toggleMainLink:function(t){var e=document.querySelector(".project__link-main");(this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop)>1999?(e.classList.add("active"),this.$gsap.to(e,{autoAlpha:1,duration:.15,ease:"power2.inOut"})):(e.classList.remove("active"),this.$gsap.to(e,{autoAlpha:0,duration:.15,ease:"power2.inOut"}))}}}},376:function(t,e,l){var content=l(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(71).default)("c98db6d6",content,!0,{sourceMap:!1})},377:function(t,e,l){"use strict";l.r(e);var n={name:"LandDivider",props:{isVideo:{type:Boolean,default:!1},videoUrl:{type:String,default:"",required:!1},poster:{type:String,default:"",required:!1},bgImage:{type:String,default:"",required:!1}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=l(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"land-divider",attrs:{"data-parallax":"container"}},[l("div",{staticClass:"land-divider__content"},[l("div",{staticClass:"land-divider__inner"},[l("div",{staticClass:"parallax"},[l("img",{staticClass:"lazyload img-full",attrs:{"data-src":t.bgImage,alt:"img"}})])]),t._v(" "),l("LandPlayIcon",{class:{isVideo:t.isVideo},attrs:{poster:t.poster,url:t.videoUrl}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandPlayIcon:l(381).default})},378:function(t,e,l){"use strict";l.r(e);var n={name:"LandSwitcher",props:{isWeb:{type:Boolean,required:!0}},data:function(){return{}},computed:{switcherClass:function(){return this.isWeb?"land-switcher--webdesign":"land-switcher--identity"}},watch:{},mounted:function(){this.isWeb?this.$gsap.set(".land__content--style",{opacity:0,y:100,display:"none"}):this.$gsap.set(".land__content--web",{opacity:0,y:100,display:"none"})},methods:{}},o=l(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"land-switcher",class:t.switcherClass},[l("div",{staticClass:"land-switcher__inner"},[l("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#webdesign"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[l("svg",{staticClass:"icon",attrs:{viewBox:"0 0 187.3 109"}},[l("path",{attrs:{d:"M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"}})]),t._v(" "),l("span",[t._v("Сайт")])]),t._v(" "),l("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#identity"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[l("svg",{staticClass:"icon",attrs:{viewBox:"0 0 13 109"}},[l("path",{attrs:{d:"M0,0h13v109H0V0z"}})]),t._v(" "),l("span",[t._v("Стиль")])])])])}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,l){"use strict";l.r(e);var n={name:"LandHeader",props:{headerText:{type:String,default:"",required:!0},isDual:{type:Boolean,default:!1,required:!1},isWeb:{type:Boolean,required:!1},url:{type:String,required:!0}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},o=l(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"land__header d-f-center"},[l("p",{staticClass:"land__header-item land-text"},[t._v("\n    "+t._s(t.headerText)+"\n  ")]),t._v(" "),t.isDual?l("LandSwitcher",{staticClass:"land__header-item",attrs:{"is-web":t.isWeb},on:{switchToggle:function(e){return t.$emit("switchToggle")}}}):t._e(),t._v(" "),l("LandLink",{staticClass:"land__header-item",attrs:{url:t.url}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandSwitcher:l(378).default,LandLink:l(384).default})},380:function(t,e,l){"use strict";l.r(e);var n={name:"LandVideo",props:{isImg:{type:Boolean,default:!1,reqiured:!0},urlImg:{type:String,default:"",reqiured:!0},urlVideo:{type:String,default:"",reqiured:!0},loop:{type:Boolean,default:!0,reqiured:!0},autoplay:{type:Boolean,default:!0,reqiured:!0},videoClass:{type:String,default:"",reqiured:!0},preload:{type:String,default:"auto",reqiured:!0}},data:function(){return{}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{}},o=l(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"land-border",class:{"land-border--img":t.isImg}},[l("video",{staticClass:"video lazyloaded land-border__item",class:t.videoClass,attrs:{autoplay:t.autoplay,muted:"",preload:t.preload,loop:t.loop,playsinline:"","webkit-playsinline":"true"},domProps:{muted:!0}},[l("source",{attrs:{src:t.urlVideo,type:"video/mp4"}})]),t._v(" "),t.isImg?l("div",{staticClass:"land-border land-border--sm"},[l("img",{staticClass:"lazyloaded img-full land-border__item",attrs:{src:t.urlImg,alt:"concept"}})]):t._e()])}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,l){"use strict";l.r(e);l(49);var n={name:"LandPlayIcon",props:{isDivider:{type:Boolean,required:!1,default:!0},url:{type:String,required:!1,default:""},poster:{type:String,required:!1,default:""}},data:function(){return{isPlay:!1}},computed:{},mounted:function(){var t=this;this.$nextTick((function(){if(!document.querySelector(".modal-video")&&t.url){var e=document.createElement("div");e.className="modal-video d-f-center",e.innerHTML='<div class="modal-video__bg"></div>\n          <video poster=\''.concat(t.poster,'\' controls playsinline webkit-playsinline="true" preload="auto" class="video lazyloaded">\n            <source src="').concat(t.url,'" type="video/mp4">\n          </video>'),document.body.appendChild(e),t.closeModalVideo()}}))},beforeDestroy:function(){document.querySelector(".modal-video")&&document.querySelector(".modal-video").remove()},methods:{playVideo:function(){var t=this,e=this.$refs.playIcon,l=this.isDivider?e.parentNode.parentNode:e.parentNode;if(this.isDivider){var n=document.querySelector(".modal-video"),o=n.querySelector(".video");n.classList.add("active"),o.play(),this.isPlay=!0,o.addEventListener("ended",(function(){t.isPlay=!1,o.load(),n.classList.remove("active")}))}else if(l.querySelector(".video")){var video=l.querySelector(".video");video.play(),this.isPlay=!0,video.addEventListener("ended",(function(){t.isPlay=!1,video.load()}))}else this.isPlay=!0},closeModalVideo:function(){var t=this;document.querySelector(".modal-video__bg").addEventListener("click",(function(){var e=document.querySelector(".modal-video"),video=e.querySelector(".video");t.isPlay=!1,video.load(),e.classList.remove("active")}))}}},o=l(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.isDivider?l("div",{staticClass:"land-divider__play",class:{"d-none":t.isPlay}},[l("div",{ref:"playIcon",staticClass:"play-icon",attrs:{"data-cursor":""},on:{click:t.playVideo}}),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n    Посмотреть видео о сайте\n  ")])]):l("div",{ref:"playIcon",staticClass:"play-icon",class:{"d-none":t.isPlay},attrs:{"data-cursor":""},on:{click:t.playVideo}})}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,l){"use strict";l(376)},383:function(t,e,l){var n=l(70)(!1);n.push([t.i,".link-site svg{fill:inherit;transition:fill .5s ease}",""]),t.exports=n},384:function(t,e,l){"use strict";l.r(e);var n={name:"LandLink",props:{url:{type:String,required:!0}},data:function(){return{}},computed:{}},o=(l(382),l(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("a",{staticClass:"link-site",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[l("svg",{attrs:{width:"37",height:"37",viewBox:"0 0 37 37",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36ZM18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z"}}),t._v(" "),l("path",{attrs:{d:"M21.4028 24.2877L18.5199 27.1726C17.9504 27.7492 17.2724 28.2076 16.5249 28.5212C15.7775 28.8348 14.9754 28.9975 14.1647 29C13.3541 29.0024 12.551 28.8446 11.8017 28.5355C11.0523 28.2264 10.3716 27.7722 9.79859 27.199C9.2256 26.6258 8.7717 25.945 8.46303 25.1957C8.15435 24.4465 7.997 23.6436 8.00004 22.8333C8.00308 22.023 8.16645 21.2213 8.48073 20.4743C8.79502 19.7274 9.25401 19.05 9.83129 18.4812L12.7142 15.5962C12.9118 15.4055 13.1764 15.2999 13.4511 15.3023C13.7258 15.3047 13.9885 15.4148 14.1827 15.609C14.377 15.8031 14.4871 16.0658 14.4895 16.3403C14.4919 16.6149 14.3863 16.8794 14.1955 17.0769L11.3126 19.966C10.9345 20.3413 10.6345 20.7877 10.4297 21.2794C10.225 21.7711 10.1196 22.2985 10.1196 22.8311C10.1196 23.3637 10.225 23.891 10.4297 24.3827C10.6345 24.8744 10.9345 25.3208 11.3126 25.6961C12.0836 26.4323 13.1088 26.8431 14.1751 26.8431C15.2413 26.8431 16.2666 26.4323 17.0376 25.6961L19.9216 22.8112C20.1191 22.6204 20.3838 22.5149 20.6584 22.5173C20.9331 22.5196 21.1958 22.6298 21.3901 22.8239C21.5843 23.0181 21.6945 23.2807 21.6969 23.5553C21.6993 23.8298 21.5937 24.0944 21.4028 24.2919V24.2877ZM21.363 14.1543C21.4597 14.0543 21.5753 13.9745 21.7031 13.9196C21.8309 13.8647 21.9683 13.8358 22.1074 13.8346C22.2465 13.8334 22.3845 13.8599 22.5132 13.9126C22.642 13.9652 22.7589 14.043 22.8573 14.1413C22.9557 14.2396 23.0334 14.3565 23.0861 14.4852C23.1388 14.6139 23.1653 14.7518 23.1641 14.8909C23.1629 15.0299 23.134 15.1673 23.0791 15.2951C23.0242 15.4228 22.9444 15.5384 22.8443 15.635L15.637 22.8457C15.5403 22.9457 15.4247 23.0255 15.2969 23.0804C15.1691 23.1353 15.0317 23.1642 14.8926 23.1654C14.7535 23.1666 14.6155 23.1401 14.4868 23.0874C14.358 23.0348 14.2411 22.957 14.1427 22.8587C14.0443 22.7604 13.9666 22.6435 13.9139 22.5148C13.8612 22.3861 13.8347 22.2482 13.8359 22.1091C13.8371 21.9701 13.866 21.8327 13.9209 21.7049C13.9758 21.5772 14.0556 21.4616 14.1557 21.365L21.363 14.1543ZM27.1687 18.5199L24.2858 21.4038C24.0872 21.5961 23.8216 21.7036 23.5451 21.7036C23.2687 21.7036 23.003 21.5961 22.8045 21.4038C22.6081 21.2074 22.4978 20.9411 22.4978 20.6634C22.4978 20.3858 22.6081 20.1195 22.8045 19.9231L25.6874 17.034C26.0655 16.6587 26.3655 16.2123 26.5703 15.7206C26.775 15.2289 26.8804 14.7015 26.8804 14.1689C26.8804 13.6363 26.775 13.109 26.5703 12.6173C26.3655 12.1256 26.0655 11.6792 25.6874 11.3039C24.9164 10.5677 23.8912 10.1569 22.8249 10.1569C21.7587 10.1569 20.7334 10.5677 19.9624 11.3039L17.0784 14.193C16.8809 14.3838 16.6162 14.4893 16.3416 14.4869C16.0669 14.4845 15.8042 14.3744 15.6099 14.1803C15.4157 13.9861 15.3055 13.7235 15.3031 13.4489C15.3007 13.1743 15.4063 12.9098 15.5972 12.7123L18.4801 9.8274C19.0496 9.25076 19.7276 8.79244 20.4751 8.47882C21.2225 8.1652 22.0246 8.00248 22.8353 8.00003C23.6459 7.99758 24.449 8.15544 25.1983 8.46453C25.9477 8.77363 26.6284 9.22784 27.2014 9.80102C27.7744 10.3742 28.2283 11.055 28.537 11.8043C28.8456 12.5535 29.003 13.3564 29 14.1667C28.9969 14.977 28.8336 15.7787 28.5193 16.5257C28.205 17.2726 27.746 17.95 27.1687 18.5188V18.5199Z"}})])])}),[],!1,null,null,null);e.default=component.exports},418:function(t,e,l){t.exports=l.p+"img/3d.fe0ec7d.png"}}]);