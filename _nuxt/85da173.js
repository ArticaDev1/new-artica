(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4,6,7,16],{324:function(t,n,e){var content=e(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(59).default)("c98db6d6",content,!0,{sourceMap:!1})},325:function(t,n,e){"use strict";e.r(n);var o={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},d=e(22),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"project-next"},[e("div",{staticClass:"container"},[e("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),e("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+t.url+"/"}},[e("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[e("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),e("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[e("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);n.default=component.exports},326:function(t,n,e){"use strict";e(40),e(9),e(26);var o=e(32),d=["light-theme","dark-theme"];n.a={computed:{},preload:!0,watch:{isPreloaderFinished:function(){this.updateLoco()}},mounted:function(){var t,n=this;(t=document.documentElement.classList).remove.apply(t,d),document.documentElement.classList.add(this.landThemeClass);var e=this;this.$nextTick((function(){var t,o,d,l;document.querySelector(".parallax")&&(n.$device.isDesktop?null===(t=n.$parent)||void 0===t||null===(o=t.$parent)||void 0===o||null===(d=o.$parent.$refs)||void 0===d||null===(l=d.scroller)||void 0===l||l.locomotive.on("scroll",(function(t){e.parallax(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",e.parallax))})),setTimeout((function(){n.$nuxt.$emit("update-locomotive")}),900)},destroyed:function(){this.$device.isDesktop||document.querySelector(".mob-scroll").removeEventListener("scroll",this.parallax)},methods:{updateLoco:function(){var t,n,e,o,d;null===(t=this.$parent)||void 0===t||null===(n=t.$parent)||void 0===n||null===(e=n.$parent.$refs)||void 0===e||null===(o=e.scroller)||void 0===o||null===(d=o.locomotive)||void 0===d||d.update()},switchToggle:function(){var t,n,e,d,l=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&o.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$parent)||void 0===t||null===(n=t.$parent)||void 0===n||null===(e=n.$parent.$refs)||void 0===e||null===(d=e.scroller)||void 0===d||d.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){l.updateLoco(),o.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var n,e=window.innerHeight,o=document.querySelectorAll(".parallax");n=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,o.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,o=t-n-e;e>element.getBoundingClientRect().top&&n<2*element.clientHeight+t&&(element.style.transform="matrix(1, 0, 0, 1, 0, ".concat(t>e&&t?o/2*.3:-n/2*.3,")"))}))}}}},328:function(t,n,e){"use strict";e.r(n);var o={name:"LandDivider",props:{isVideo:{type:Boolean,default:!1},videoUrl:{type:String,default:"",required:!1},poster:{type:String,default:"",required:!1},bgImage:{type:String,default:"",required:!1}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},d=e(22),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"land-divider",attrs:{"data-parallax":"container"}},[e("div",{staticClass:"land-divider__content"},[e("div",{staticClass:"land-divider__inner"},[t.isVideo?e("video",{staticClass:"video lazyloaded",attrs:{muted:"",preload:"auto",playsinline:"","webkit-playsinline":"true",poster:t.poster},domProps:{muted:!0}},[e("source",{attrs:{src:t.videoUrl,type:"video/mp4"}})]):e("div",{staticClass:"parallax"},[e("img",{staticClass:"lazyload img-full",attrs:{"data-src":t.bgImage,alt:"img"}})])]),t._v(" "),e("LandPlayIcon",{class:{isVideo:t.isVideo}})],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{LandPlayIcon:e(334).default})},329:function(t,n,e){"use strict";e(324)},330:function(t,n,e){var o=e(58)(!1);o.push([t.i,".link-site svg{fill:inherit;transition:fill .5s ease}",""]),t.exports=o},332:function(t,n,e){"use strict";e.r(n);var o={name:"LandLink",props:{url:{type:String,required:!0}},data:function(){return{}},computed:{}},d=(e(329),e(22)),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{staticClass:"link-site",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[e("svg",{attrs:{width:"37",height:"37",viewBox:"0 0 37 37",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36ZM18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z"}}),t._v(" "),e("path",{attrs:{d:"M21.4028 24.2877L18.5199 27.1726C17.9504 27.7492 17.2724 28.2076 16.5249 28.5212C15.7775 28.8348 14.9754 28.9975 14.1647 29C13.3541 29.0024 12.551 28.8446 11.8017 28.5355C11.0523 28.2264 10.3716 27.7722 9.79859 27.199C9.2256 26.6258 8.7717 25.945 8.46303 25.1957C8.15435 24.4465 7.997 23.6436 8.00004 22.8333C8.00308 22.023 8.16645 21.2213 8.48073 20.4743C8.79502 19.7274 9.25401 19.05 9.83129 18.4812L12.7142 15.5962C12.9118 15.4055 13.1764 15.2999 13.4511 15.3023C13.7258 15.3047 13.9885 15.4148 14.1827 15.609C14.377 15.8031 14.4871 16.0658 14.4895 16.3403C14.4919 16.6149 14.3863 16.8794 14.1955 17.0769L11.3126 19.966C10.9345 20.3413 10.6345 20.7877 10.4297 21.2794C10.225 21.7711 10.1196 22.2985 10.1196 22.8311C10.1196 23.3637 10.225 23.891 10.4297 24.3827C10.6345 24.8744 10.9345 25.3208 11.3126 25.6961C12.0836 26.4323 13.1088 26.8431 14.1751 26.8431C15.2413 26.8431 16.2666 26.4323 17.0376 25.6961L19.9216 22.8112C20.1191 22.6204 20.3838 22.5149 20.6584 22.5173C20.9331 22.5196 21.1958 22.6298 21.3901 22.8239C21.5843 23.0181 21.6945 23.2807 21.6969 23.5553C21.6993 23.8298 21.5937 24.0944 21.4028 24.2919V24.2877ZM21.363 14.1543C21.4597 14.0543 21.5753 13.9745 21.7031 13.9196C21.8309 13.8647 21.9683 13.8358 22.1074 13.8346C22.2465 13.8334 22.3845 13.8599 22.5132 13.9126C22.642 13.9652 22.7589 14.043 22.8573 14.1413C22.9557 14.2396 23.0334 14.3565 23.0861 14.4852C23.1388 14.6139 23.1653 14.7518 23.1641 14.8909C23.1629 15.0299 23.134 15.1673 23.0791 15.2951C23.0242 15.4228 22.9444 15.5384 22.8443 15.635L15.637 22.8457C15.5403 22.9457 15.4247 23.0255 15.2969 23.0804C15.1691 23.1353 15.0317 23.1642 14.8926 23.1654C14.7535 23.1666 14.6155 23.1401 14.4868 23.0874C14.358 23.0348 14.2411 22.957 14.1427 22.8587C14.0443 22.7604 13.9666 22.6435 13.9139 22.5148C13.8612 22.3861 13.8347 22.2482 13.8359 22.1091C13.8371 21.9701 13.866 21.8327 13.9209 21.7049C13.9758 21.5772 14.0556 21.4616 14.1557 21.365L21.363 14.1543ZM27.1687 18.5199L24.2858 21.4038C24.0872 21.5961 23.8216 21.7036 23.5451 21.7036C23.2687 21.7036 23.003 21.5961 22.8045 21.4038C22.6081 21.2074 22.4978 20.9411 22.4978 20.6634C22.4978 20.3858 22.6081 20.1195 22.8045 19.9231L25.6874 17.034C26.0655 16.6587 26.3655 16.2123 26.5703 15.7206C26.775 15.2289 26.8804 14.7015 26.8804 14.1689C26.8804 13.6363 26.775 13.109 26.5703 12.6173C26.3655 12.1256 26.0655 11.6792 25.6874 11.3039C24.9164 10.5677 23.8912 10.1569 22.8249 10.1569C21.7587 10.1569 20.7334 10.5677 19.9624 11.3039L17.0784 14.193C16.8809 14.3838 16.6162 14.4893 16.3416 14.4869C16.0669 14.4845 15.8042 14.3744 15.6099 14.1803C15.4157 13.9861 15.3055 13.7235 15.3031 13.4489C15.3007 13.1743 15.4063 12.9098 15.5972 12.7123L18.4801 9.8274C19.0496 9.25076 19.7276 8.79244 20.4751 8.47882C21.2225 8.1652 22.0246 8.00248 22.8353 8.00003C23.6459 7.99758 24.449 8.15544 25.1983 8.46453C25.9477 8.77363 26.6284 9.22784 27.2014 9.80102C27.7744 10.3742 28.2283 11.055 28.537 11.8043C28.8456 12.5535 29.003 13.3564 29 14.1667C28.9969 14.977 28.8336 15.7787 28.5193 16.5257C28.205 17.2726 27.746 17.95 27.1687 18.5188V18.5199Z"}})])])}),[],!1,null,null,null);n.default=component.exports},334:function(t,n,e){"use strict";e.r(n);var o={name:"LandPlayIcon",props:{isDivider:{type:Boolean,required:!1,default:!0}},data:function(){return{isPlay:!1}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{playVideo:function(){var t,n=this,e=this.$refs.playIcon;if((t=this.isDivider?e.parentNode.parentNode:e.parentNode).querySelector(".video")){var video=t.querySelector(".video");video.play(),this.isPlay=!0,video.addEventListener("ended",(function(){n.isPlay=!1,video.load()}))}else this.isPlay=!0}}},d=e(22),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isDivider?e("div",{staticClass:"land-divider__play",class:{"d-none":t.isPlay}},[e("div",{ref:"playIcon",staticClass:"play-icon",attrs:{"data-cursor":""},on:{click:t.playVideo}}),t._v(" "),e("p",{staticClass:"land-text"},[t._v("\n    Посмотреть видео о сайте\n  ")])]):e("div",{ref:"playIcon",staticClass:"play-icon",class:{"d-none":t.isPlay},attrs:{"data-cursor":""},on:{click:t.playVideo}})}),[],!1,null,null,null);n.default=component.exports},338:function(t,n,e){t.exports=e.p+"img/back.8aeed89.jpg"},383:function(t,n,e){t.exports=e.p+"img/back.974e9d1.jpg"},384:function(t,n,e){t.exports=e.p+"img/forward.0edcff5.png"},395:function(t,n,e){t.exports=e.p+"img/BroswerWindow.06158ed.png"},396:function(t,n,e){t.exports=e.p+"img/BroswerWindow2.4493ae4.png"},397:function(t,n,e){t.exports=e.p+"img/BroswerWindow3.0574ddd.png"},398:function(t,n,e){t.exports=e.p+"img/IpadProHorizontal.d60de41.png"},399:function(t,n,e){t.exports=e.p+"img/azs.ed14aea.jpg"},401:function(t,n,e){t.exports=e.p+"img/iPadProLandscape.aa9817b.png"},402:function(t,n,e){t.exports=e.p+"img/iPhone11ProMax.222b003.png"},403:function(t,n,e){t.exports=e.p+"img/iPhone11ProMax2.07ae1bb.png"},404:function(t,n,e){t.exports=e.p+"img/iPhoneSE.5b25876.png"},405:function(t,n,e){t.exports=e.p+"img/ipadmini.de29b76.png"},406:function(t,n,e){t.exports=e.p+"img/iphones.700bbd8.png"},407:function(t,n,e){t.exports=e.p+"img/logo.f7d3d00.svg"},408:function(t,n,e){t.exports=e.p+"img/twonp-bg-video.e123fa4.jpg"},443:function(t,n,e){var content=e(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(59).default)("e103c5d0",content,!0,{sourceMap:!1})},504:function(t,n,e){t.exports=e.p+"videos/twonp-bg-video.d472553.mp4"},505:function(t,n,e){"use strict";e(443)},506:function(t,n,e){var o=e(58)(!1);o.push([t.i,'body.project-twonp{background-color:#2a2c31}body.project-twonp .header.active-bg{background-color:rgba(42,44,49,.6);transition:.2s linear}body.project-twonp .link-site{fill:rgba(34,34,34,.7)}body.project-twonp .link-site.hover,body.project-twonp .link-site.touch{fill:#222}body.project-twonp .nav{background-color:#2a2c31}body.project-twonp .nav.active-nav .nav-s-area__container:before{background:linear-gradient(0deg,#2a2c31,transparent 49%,transparent 51%,#2a2c31)}.twonp__main{background-position:50%;background-size:cover;background-repeat:no-repeat;padding-bottom:200px}@media screen and (max-width:767px){.twonp__main{padding-bottom:100px}}.twonp__main-logo{max-width:465px;margin-top:10%}@media screen and (max-width:1023px){.twonp__main-logo{max-width:352px}}@media screen and (max-width:767px){.twonp__main-logo{max-width:190px}}.twonp__main-inner{height:calc(100vh + 300px);height:calc(var(--vh, 1vh)*100 + 300px);max-height:1300px;min-height:680px}@media screen and (max-width:1023px){.twonp__main-inner{height:100vh;height:calc(var(--vh, 1vh)*100)}}@media screen and (max-width:767px){.twonp__main-inner{min-height:400px;padding-top:0;padding-bottom:0}}.twonp__main-text{margin-top:15%}@media screen and (max-width:767px){.twonp__main-text{margin-top:25%}}.twonp__block-light{background-color:#b8b8b8;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-top-left-radius:0;border-top-right-radius:0;margin-top:-100px}.twonp__solution .land-text,.twonp__solution .land-title{color:#242424}.twonp__solution .link-site{margin-top:32px}.twonp__solution-img{position:relative;margin-top:-100px;margin-bottom:50px;max-width:1250px;width:100%;overflow:visible}@media screen and (max-width:1023px){.twonp__solution-img{margin-bottom:0}}.twonp__easy{align-items:flex-start}.twonp__easy-img,.twonp__easy-text{max-width:50%;flex:0 0 100%;width:100%}@media screen and (max-width:767px){.twonp__easy-img,.twonp__easy-text{max-width:100%}}.twonp__easy img{max-width:410px;box-shadow:0 52px 161px rgba(0,0,0,.6);border-radius:48px}@media screen and (max-width:1023px){.twonp__easy img{max-width:340px;border-radius:40px}}@media screen and (max-width:767px){.twonp__easy img{max-width:190px;border-radius:20px}}@media screen and (max-width:767px){.twonp__easy-text{display:flex;align-items:center;flex-direction:column}}.twonp__easy-text .land-text,.twonp__easy-text .land-title{color:#242424}@media screen and (min-width:768px){.twonp__easy-text .land-text,.twonp__easy-text .land-title{padding:0;text-align:left}}.twonp__easy-img,.twonp__easy-text-img{position:relative;height:100px;width:100%}.twonp__easy-img img,.twonp__easy-text-img img{position:absolute;top:0;left:0}@media screen and (max-width:767px){.twonp__easy-img img,.twonp__easy-text-img img{left:auto;right:0}}@media screen and (max-width:767px){.twonp__easy{flex-direction:column}}@media screen and (max-width:767px){.twonp__easy-img{height:auto;padding-bottom:100px}.twonp__easy-img img{position:static}}.twonp__easy-img img{left:40px}@media screen and (max-width:1023px){.twonp__easy-img img{left:0}}.twonp__easy-text-img{margin-top:50px}.twonp__block-divider{position:relative;z-index:-1}.twonp__block-divider-bg{background-size:cover;background-repeat:no-repeat;background-position:50% 80%;mix-blend-mode:hard-light;height:150vh;max-height:1170px;min-height:1000px}@media screen and (max-width:1023px){.twonp__block-divider-bg{min-height:900px;height:100vh;height:calc(var(--vh, 1vh)*100)}}.twonp__block-divider:before{position:absolute;content:"";top:-100px;left:0;width:100%;height:calc(100% + 100px);z-index:-1;background-color:#070706}.twonp__comfort{background-color:#2a2c31;margin-top:-100px;position:relative;z-index:2}.twonp__comfort .land-border{background-color:#2a2c31;max-width:1177px;box-shadow:0 52px 161px rgba(0,0,0,.6)}.twonp__block-dark{background-color:#4c4f55;margin-top:-100px;padding-top:100px}@media screen and (max-width:767px){.twonp__block-dark{padding-bottom:0}}@media screen and (max-width:767px){.twonp__nav{padding-top:0}}.twonp__instrument img{box-shadow:0 52px 161px rgba(0,0,0,.6)}.twonp__fast{overflow:hidden;max-width:100%}.twonp__fast-inner{position:relative;z-index:8}@media screen and (max-width:767px){.twonp__fast-inner{padding-top:0}}.twonp__fast .land-circles:after{border-color:#bedecb}.twonp__fast .land-circles:before{border-color:#20c361}.twonp__fast-img{min-width:120%;margin-left:-10%}@media screen and (max-width:767px){.twonp__fast-img{min-width:160%;margin-left:-30%}}.twonp__fast-text{position:absolute;max-width:445px;width:100%;top:5%;right:2%}@media screen and (max-width:1023px){.twonp__fast-text{max-width:350px}}@media screen and (max-width:767px){.twonp__fast-text{max-width:100%;position:static;display:flex;align-items:center;flex-direction:column;padding-bottom:100px}}@media screen and (min-width:768px){.twonp__fast-text .land-text,.twonp__fast-text .land-title{padding:0;text-align:left}}@media screen and (max-width:1023px){.twonp__ui{padding-bottom:0}}.twonp__ui img{box-shadow:0 52px 161px rgba(0,0,0,.6);border-radius:5px}.twonp__ui-footer{display:flex;align-items:stretch}@media screen and (max-width:767px){.twonp__ui-footer{flex-direction:column;align-items:flex-start;margin-top:30px}}.twonp__ui-footer img{border-radius:30px}@media screen and (max-width:1023px){.twonp__ui-footer img{border-radius:14px}}@media screen and (max-width:767px){.twonp__ui-footer img{border-radius:10px}}.twonp__ui-about,.twonp__ui-img{flex:0 0 100%;width:100%;max-width:55%}@media screen and (max-width:767px){.twonp__ui-about,.twonp__ui-img{min-width:230px;max-width:80%}}.twonp__ui-about{max-width:45%;padding-left:50px;display:flex;flex-direction:column}@media screen and (max-width:767px){.twonp__ui-about{padding-left:0;min-width:190px;max-width:70%;margin-left:auto;margin-top:30px}}.twonp__ui-about .land-text,.twonp__ui-about .land-title{padding:0;text-align:left;max-width:445px}@media screen and (max-width:1023px){.twonp__ui-about .land-text,.twonp__ui-about .land-title{display:none}}.twonp__ui-about-img{margin-bottom:auto}.twonp__ui-about-img img{max-height:100%;width:auto;max-width:none}@media screen and (max-width:1023px){.twonp__ui-about-img img{border-radius:25px;max-height:80%}}@media screen and (max-width:767px){.twonp__ui-about-img img{height:100%;max-height:none;width:100%;max-width:100%;border-radius:27px}}.twonp__ui-text{display:none}@media screen and (max-width:1023px){.twonp__ui-text{padding-top:100px;display:flex;align-items:center;flex-direction:column}}.twonp .land-divider__content:before{background-color:#4c4f55}.twonp .land-divider__content:after{background-color:#2a2c31}',""]),t.exports=o},518:function(t,n,e){"use strict";e.r(n);var o={name:"ProjectTwonp",mixins:[e(326).a],data:function(){return{landThemeClass:"dark-theme"}},head:function(){return{title:"Проект - Twonp"}},mounted:function(){}},d=(e(505),e(22)),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"scrollable__container land"},[o("div",{staticClass:"twonp"},[o("div",{staticClass:"land__content twonp__content"},[o("div",{staticClass:"twonp__main fc",style:{backgroundImage:"url("+e(338)+")"}},[o("div",{staticClass:"twonp__main-inner container d-f-center column ptb"},[o("div",{staticClass:"twonp__main-logo w-100"},[o("img",{staticClass:"img-full lazyloaded",attrs:{src:e(407),alt:"twonp-logo"}})]),t._v(" "),t._m(0)])]),t._v(" "),o("div",{staticClass:"twonp__block-light br-block"},[o("div",{staticClass:"container"},[o("div",{staticClass:"twonp__solution d-f-center pb column"},[o("div",{staticClass:"twonp__solution-img"},[o("img",{staticClass:"img-full lazyloaded",attrs:{src:e(401),alt:"twonp-iPadProLandscape"}})]),t._v(" "),o("div",{staticClass:"twonp__solution-text d-f-center column pt"},[o("h2",{staticClass:"land-title"},[t._v("\n                Решение\n              ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n                Создать уникальный сайт для сети АЗС, который был бы не просто\n                корпоративной заглушкой, но и удобным инструментом ежедневного\n                использования как для бизнеса, так и для рядового покупателя\n              ")]),t._v(" "),o("LandLink",{attrs:{url:"https://twonp.ru"}})],1)]),t._v(" "),o("div",{staticClass:"twonp__easy d-f-center pb"},[o("div",{staticClass:"twonp__easy-img"},[o("img",{staticClass:"img-full lazyloaded",attrs:{src:e(402),alt:"twonp-iPhone11ProMax"}})]),t._v(" "),o("div",{staticClass:"twonp__easy-text"},[o("h2",{staticClass:"land-title"},[t._v("\n                Удобно\n              ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n                Сделали минималистичный сайт, который в интерактивной форме\n                презентует пользователю самую важную информацию о продукции\n                компании и ее возможностях.\n              ")]),t._v(" "),o("div",{staticClass:"twonp__easy-text-img"},[o("img",{staticClass:"img-full lazyloaded",attrs:{src:e(403),alt:"twonp-iPhone11ProMax2"}})])])])])]),t._v(" "),o("div",{staticClass:"twonp__block-divider"},[o("div",{staticClass:"twonp__block-divider-bg",style:{backgroundImage:"url("+e(399)+")"}})]),t._v(" "),o("div",{staticClass:"twonp__comfort br-block ptb"},[o("div",{staticClass:"container d-f-center column"},[o("h2",{staticClass:"land-title"},[t._v("\n            Удобно\n          ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n            Карта позволяет не только найти нужную АЗС но и увидеть связанные\n            с ней заводы производители и склады топлива для оптовых закупок\n          ")]),t._v(" "),o("div",{staticClass:"land__full-w d-f-center"},[o("div",{staticClass:"land-border"},[o("img",{staticClass:"lazyloaded img-full land-border__item",attrs:{src:e(398),alt:"IpadProHorizontal"}})])])])]),t._v(" "),o("div",{staticClass:"twonp__block-dark ptb"},[o("div",{staticClass:"twonp__instrument container d-f-center column ptb"},[o("h2",{staticClass:"land-title"},[t._v("\n            ИНСТРУМЕНТ ПРОДАЖ\n          ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n            Раздел “Закупить” позволяет прямо на сайте узнать нужную\n            информацию о топливе, посмотреть все необходимые документы и\n            сделать заказ\n          ")]),t._v(" "),o("div",{staticClass:"land__full-w d-f-center"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(395),alt:"BroswerWindow"}})])]),t._v(" "),o("div",{staticClass:"twonp__fast"},[o("div",{staticClass:"twonp__fast-inner ptb container"},[t._m(1),t._v(" "),o("div",{staticClass:"twonp__fast-img"},[o("div",{staticClass:"land-circles"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(406),alt:"iphones"}})])])])]),t._v(" "),o("div",{staticClass:"twonp__ui container pb"},[o("div",{staticClass:"twonp__ui-main d-f-center column"},[o("h2",{staticClass:"land-title"},[t._v("\n              Интерфейс логистики\n            ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n              Раздел “Закупить” позволяет прямо на сайте узнать нужную информацию о топливе,  посмотреть все необходимые документы и сделать заказ\n            ")]),t._v(" "),o("div",{staticClass:"land__full-w d-f-center"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(396),alt:"BroswerWindow2"}})])]),t._v(" "),o("div",{staticClass:"twonp__ui-footer"},[o("div",{staticClass:"twonp__ui-img"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(405),alt:"ipadmini"}})]),t._v(" "),o("div",{staticClass:"twonp__ui-about"},[o("div",{staticClass:"twonp__ui-about-img"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(404),alt:"iPhoneSE"}})]),t._v(" "),o("h2",{staticClass:"land-title"},[t._v("\n                Быстро\n              ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n                Заказ нужного вида топлива происходит\n                на одном и том же экране, без лишних переходов, что сокращает время\n                на принятие решения о покупке.\n              ")])])]),t._v(" "),t._m(2)])]),t._v(" "),o("LandDivider",{staticClass:"twonp__divider",attrs:{"is-video":"",poster:e(408),"video-url":e(504)}}),t._v(" "),o("div",{staticClass:"twonp__nav container pt d-f-center column"},[o("h2",{staticClass:"land-title"},[t._v("\n          Удобная навигация\n        ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n          Раздел “Закупить” позволяет прямо на сайте узнать нужную информацию о топливе,  посмотреть все необходимые документы и сделать заказ\n        ")]),t._v(" "),o("div",{staticClass:"twonp__nav-img pt"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(397),alt:"BroswerWindow3"}})])])],1)]),t._v(" "),o("LandNext",{staticClass:"project-next--route66",attrs:{url:"route66","back-image":e(383),"front-image":e(384)}})],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"twonp__main-text"},[e("h2",{staticClass:"land-title"},[t._v("\n              Задача\n            ")]),t._v(" "),e("p",{staticClass:"land-text"},[t._v("\n              Создать уникальный сайт для топливной компании, который был бы\n              не просто корпоративной заглушкой, но и удобным инструментом\n              ежедневного использования как для бизнеса, так и для рядового\n              покупателя\n            ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"twonp__fast-text"},[e("h2",{staticClass:"land-title"},[t._v("\n                Быстро\n              ")]),t._v(" "),e("p",{staticClass:"land-text"},[t._v("\n                Заказ нужного вида топлива происходит на одном и том же\n                экране, без лишних переходов, что сокращает время на\n                принятие решения о покупке.\n              ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"twonp__ui-text"},[e("h2",{staticClass:"land-title"},[t._v("\n              Быстро\n            ")]),t._v(" "),e("p",{staticClass:"land-text"},[t._v("\n              Заказ нужного вида топлива происходит\n              на одном и том же экране, без лишних переходов, что сокращает время\n              на принятие решения о покупке.\n            ")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{LandLink:e(332).default,LandDivider:e(328).default,LandNext:e(325).default})}}]);