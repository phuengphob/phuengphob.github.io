(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{344:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(81).default)("1317528b",content,!0,{sourceMap:!1})},363:function(t,e,n){t.exports=n.p+"img/fb-button.48f7ed1.png"},364:function(t,e,n){t.exports=n.p+"img/twitter-button.0eb2593.png"},365:function(t,e,n){"use strict";n(344)},366:function(t,e,n){var r=n(80),c=n(224),o=n(367),l=r(!1),f=c(o);l.push([t.i,".review-container[data-v-5bac1d39]{padding:90px 0;min-height:100vh;display:flex;background-image:url("+f+");background-repeat:no-repeat;background-size:contain;background-origin:content-box;background-position:50%}.review-center[data-v-5bac1d39]{width:100%;height:100%}.content[data-v-5bac1d39]{max-height:2000px;box-sizing:border-box;transition:max-height 1s linear;overflow:hidden}.content.hide-content[data-v-5bac1d39]{max-height:0;border:0!important}",""]),t.exports=l},367:function(t,e,n){t.exports=n.p+"img/review-bg.aa2f7bb.png"},395:function(t,e,n){"use strict";n.r(e);n(112);var r=n(35),c=n(51),o=n(62),l=n(73),f=n(49),d=n(52),h=(n(14),n(55),n(313));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},w=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).changeContent="facebook",t.activeChangeContent=!1,t.contentSrc="/facebook-review.png",t}return Object(c.a)(n,[{key:"switchPlatform",value:function(t){var e=this;this.changeContent!==t&&(this.activeChangeContent=!0,setTimeout((function(){e.contentSrc="/".concat(t,"-review.png")}),1500),setTimeout((function(){e.activeChangeContent=!1}),2e3),this.changeContent=t)}}]),n}(h.Vue),y=w=m([h.Component],w),x=(n(365),n(65)),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-container",{staticClass:"review-container align-items-center justify-content-center"},[r("div",{staticClass:"text-center"},[r("h1",[t._v("บอกต่อความคิดถึง")]),t._v(" "),r("h5",[t._v("\n        ร่วมรีวิวสิ่งดีๆ ที่ได้รับจากบางน้ำผึ้ง ลุ้นรับ ร่มและมาก์สฟรี"),r("br"),t._v("\n        เพียงติด #คิดถึงบางน้ำผึ้ง #ผึ้งพบ\n      ")]),t._v(" "),r("b-img",{staticClass:"mr-2",staticStyle:{width:"2rem"},attrs:{src:n(225)}}),t._v(" "),r("b-img",{staticStyle:{width:"2rem"},attrs:{src:n(226)}})],1)]),t._v(" "),r("b-card",{staticClass:"review-content",staticStyle:{"border-top-left-radius":"200px","border-top-right-radius":"200px",padding:"60px 120px","background-color":"#f4f3e1"}},[r("b-card-body",[r("h1",{staticClass:"mb-5"},[t._v("\n        เรื่องเล่าทั้งหมด\n      ")]),t._v(" "),r("div",{staticClass:"d-flex justify-content-center position-relative",staticStyle:{"min-height":"100vh"}},[r("b-card",{staticClass:"content",class:{"hide-content":t.activeChangeContent},staticStyle:{"border-radius":"30px",width:"40%"}},[r("b-img",{staticClass:"w-100",attrs:{src:t.contentSrc}})],1),t._v(" "),r("div",{staticClass:"position-absolute d-flex",staticStyle:{top:"0",right:"0","flex-direction":"column"}},[r("b-img",{staticClass:"mb-3 border border-primary",staticStyle:{width:"3rem","border-radius":"50%",cursor:"pointer"},attrs:{src:n(363)},on:{click:function(e){return t.switchPlatform("facebook")}}}),t._v(" "),r("b-img",{staticStyle:{width:"3rem",cursor:"pointer"},attrs:{src:n(364)},on:{click:function(e){return t.switchPlatform("twitter")}}})],1)],1)])],1)],1)}),[],!1,null,"5bac1d39",null);e.default=component.exports}}]);