(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{581:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(16),r(61),r(236),r(36),r(125)),c=r.n(o),l=r(47),d={name:"IndexPage",components:{Logo:c.a},transition:{name:"home",appear:!0,css:!1,enter:function(t,e){this.$store.getters["preloader/isFinished"]?t.classList.contains("home-content")&&l.d.init().then((function(){l.d.enterAnimation.play().then((function(){e()}))})):e()},leave:function(t,e){l.d.enterAnimation?(l.d.enterAnimation.reverse(0).then((function(){e()})),l.d.destroy()):e()}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.getters["projects/projects"]){e.next=4;break}return t.$store.commit("projects/setProjectsActiveCat","all"),e.next=4,t.$store.dispatch("projects/fetchByCat","all");case 4:case"end":return e.stop()}}),e)})))()},computed:{isPreloaderFinished:function(){return this.$store.getters["preloader/isFinished"]},categories:function(){return this.$store.getters["categories/categoriesViewSlider"]},projects:function(){return this.$store.getters["projects/projectsViewSlider"]}},watch:{isPreloaderFinished:function(t){l.d.preloaderDelay=this.$store.getters["preloader/preloaderDelay"],l.d.preloaderDurationFinal=this.$store.getters["preloader/preloaderDurationFinal"],l.d.init().then((function(){l.d.enterAnimation.play(),l.d.isAppInit=t}))},"$i18n.locale":function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t===e){n.next=3;break}return n.next=3,r.$store.dispatch("projects/fetchByCat","all");case 3:case"end":return n.stop()}}),n)})))()}},beforeMount:function(){},mounted:function(){var t;l.d.isAppInit=this.isPreloaderFinished,l.d.isDesktop=this.$device.isDesktop,this.$splitting(),this.$animateFake3d();var e=null!==(t=this.$route)&&void 0!==t&&t.hash?this.$route.hash.replace(/^\D+/g,""):0;(e=e?Number(e):0)>=0&&e<=9&&(l.d.slideIndex=e)}},_=r(35),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"content home-content"},[r("div",{staticClass:"m-slider"},[r("section",{staticClass:"home m-slider-slide"},[r("div",{staticClass:"container container_display"},[r("Logo",{staticClass:"home-logo"})],1)]),t._v(" "),r("section",{staticClass:"fast-categories m-slider-slide"},[r("div",{staticClass:"container container_display"},[r("div",{staticClass:"fast-categories__container row"},t._l(t.categories,(function(e,n){return r("div",{key:n,staticClass:"fast-categories-block col-lg-4 col-6"},[e.partner_link?r("a",{staticClass:"fast-categories-block__container js-3d-object",attrs:{href:e.partner_link,"data-cursor":"reversed",rel:"noopener noreferrer",target:"_blank"}},[r("span",{staticClass:"fast-categories-block__bg js-3d-object__back",attrs:{"data-rotation":"10"}}),t._v(" "),r("div",{staticClass:"label-item js-3d-object__forward",attrs:{"data-rotation":"20","data-move":"10"}},[r("span",{domProps:{innerHTML:t._s(e.logo)}}),t._v(" "),r("div",{staticClass:"label-item__title splitted",attrs:{"data-splitting":""},domProps:{innerHTML:t._s(e.view_name)}})])]):r("NuxtLink",{staticClass:"fast-categories-block__container js-3d-object",attrs:{to:"/category/"+(e.is_active?e.slug:"all")+"/","data-cursor":"reversed"}},[r("span",{staticClass:"fast-categories-block__bg js-3d-object__back",attrs:{"data-rotation":"15"}}),t._v(" "),r("div",{staticClass:"label-item js-3d-object__forward",attrs:{"data-rotation":"20","data-move":"10"}},[r("span",{domProps:{innerHTML:t._s(e.logo)}}),t._v(" "),r("div",{staticClass:"label-item__title splitted",attrs:{"data-splitting":""},domProps:{innerHTML:t._s(e.view_name)}})])])],1)})),0)])]),t._v(" "),t._l(t.projects,(function(e,n){return r("section",{key:n,staticClass:"project-preview m-slider-slide",class:e.slug+"-preview"},[r("div",{staticClass:"container container_display"},[r("div",{staticClass:"project-preview__container row"},[r("div",{staticClass:"project-preview__content col-lg-5 order-lg-1 order-2"},[r("h2",{staticClass:"project-preview__title splitted",attrs:{"data-splitting":""},domProps:{innerHTML:t._s(e.name)}}),t._v(" "),r("span",{staticClass:"project-preview__line"}),t._v(" "),r("p",{staticClass:"project-preview__text",attrs:{"data-splitting":""}},[t._v("\n              "+t._s(e.description)+"\n            ")]),t._v(" "),e.is_released?r("a",{staticClass:"project-preview__link",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer","data-splitting":""}},[t._v("\n              "+t._s(e.url)+"\n              "),r("span",{staticClass:"line"})]):t._e()]),t._v(" "),r("div",{staticClass:"project-preview__image col-lg-7 order-lg-2"},[r("NuxtLink",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+e.slug}},[r("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[r("img",{staticClass:"lazyload",attrs:{"data-src":e.slider_background,alt:"bg"}})]),t._v(" "),r("div",{staticClass:"image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[r("img",{staticClass:"lazyload",attrs:{"data-src":e.slider_logo,alt:"bg"}})])])],1)])])])}))],2),t._v(" "),r("div",{staticClass:"m-slider-pagination"},[r("div",{staticClass:"container"},[r("div",{staticClass:"m-slider-pagination__container"},[r("span",{staticClass:"m-slider-pagination__item"}),t._v(" "),t._l(t.projects.length+2,(function(i,t){return r("a",{key:t,staticClass:"m-slider-pagination__link",attrs:{href:"#"+t}})}))],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);