(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{300:function(t,e,o){t.exports=o.p+"img/screen.bb8d927.png"},304:function(t,e,o){var content=o(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(81).default)("4c4c0d9c",content,!0,{sourceMap:!1})},310:function(t,e,o){t.exports=o.p+"img/eye1.11b853c.png"},311:function(t,e,o){t.exports=o.p+"img/eye.394eab9.png"},312:function(t,e,o){t.exports=o.p+"img/pc.69ebd1d.png"},313:function(t,e,o){t.exports=o.p+"img/play.9992946.png"},314:function(t,e,o){t.exports=o.p+"img/play2.6ab5274.png"},315:function(t,e,o){"use strict";o(304)},316:function(t,e,o){var n=o(80)(!1);n.push([t.i,".landing-container[data-v-6d182032]{position:relative;min-height:100vh}.landing-container .eye[data-v-6d182032]{position:absolute;width:15%}.eye.eye-1[data-v-6d182032]{top:50%;left:16px;width:25%}.eye.eye-2[data-v-6d182032]{top:20%;left:10;transform:rotate(-10deg)}.eye.eye-3[data-v-6d182032]{top:20%;left:80%;transform:rotate(10deg)}.screen[data-v-6d182032]{top:6.4%;left:36%;width:49.2%;z-index:-1}.play-button[data-v-6d182032]{top:30%;left:44%;width:6%}.play-button[data-v-6d182032]:hover{cursor:pointer}.play-button .play-text[data-v-6d182032]{top:-20%;left:-20%;width:140%;-webkit-animation:rotation-data-v-6d182032 10s linear infinite;animation:rotation-data-v-6d182032 10s linear infinite}@-webkit-keyframes rotation-data-v-6d182032{0%{transform:rotate(20deg)}to{transform:rotate(-340deg)}}@keyframes rotation-data-v-6d182032{0%{transform:rotate(20deg)}to{transform:rotate(-340deg)}}.play-button:hover .play-text[data-v-6d182032]{-webkit-animation-play-state:paused;animation-play-state:paused}",""]),t.exports=n},328:function(t,e,o){"use strict";o.r(e);o(112);var n=o(35),r=o(51),c=o(62),l=o(73),d=o(49),f=o(52),y=(o(14),o(55),o(84));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var v=function(t,e,o,desc){var n,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},h=function(t){Object(c.a)(o,t);var e=m(o);function o(){var t;return Object(n.a)(this,o),(t=e.apply(this,arguments)).playVideo=!1,t.eyeStateCounter=0,t.eyeImageSrc="eye1.png",t}return Object(r.a)(o,[{key:"playVideoTrigger",value:function(){this.playVideo=!0}},{key:"eyeState",value:function(){switch(this.eyeStateCounter%4){case 0:this.eyeImageSrc="eye1.png";break;case 1:this.eyeImageSrc="eye2.png";break;case 2:this.eyeImageSrc="eye3.png";break;default:this.eyeImageSrc="eye2.png"}this.eyeStateCounter++}},{key:"mounted",value:function(){var t=this;setInterval((function(){t.eyeState()}),800)}}]),o}(y.Vue),w=h=v([y.Component],h),_=(o(315),o(65)),component=Object(_.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"landing-container",attrs:{fluid:""}},[n("img",{staticClass:"eye eye-1",attrs:{src:"/"+t.eyeImageSrc}}),t._v(" "),n("img",{staticClass:"eye eye-2",attrs:{src:o(310)}}),t._v(" "),n("img",{staticClass:"eye eye-3",attrs:{src:o(311)}}),t._v(" "),n("div",{staticClass:"position-absolute text-center",staticStyle:{bottom:"-5%","z-index":"2"}},[n("b-img",{staticClass:"w-75",attrs:{src:o(312)}}),t._v(" "),t.playVideo?n("div",{staticClass:"position-absolute screen",staticStyle:{height:"59%"}},[n("iframe",{attrs:{frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",width:"100%",height:"100%",type:"text/html",src:"https://www.youtube.com/embed/qLWKNoYKHJg?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"}},[n("div",[n("small",[n("a",{attrs:{href:"https://youtubeembedcode.com/de/"}},[t._v("youtubeembedcode.com/de/")])])]),t._v(" "),n("div",[n("small",[n("a",{attrs:{href:"https://embedgooglemaps.com"}},[t._v("Google maps embed")])])]),t._v(" "),n("div",[n("small",[n("a",{attrs:{href:"https://youtubeembedcode.com/de/"}},[t._v("youtubeembedcode.com/de/")])])]),t._v(" "),n("div",[n("small",[n("a",{attrs:{href:"https://embedtwitterwidget.com"}},[t._v("Embed twitter feed")])])])])]):[n("b-img",{staticClass:"position-absolute screen",attrs:{src:o(300)}}),t._v(" "),n("div",{staticClass:"position-absolute play-button",on:{click:t.playVideoTrigger}},[n("b-img",{staticClass:"w-100",attrs:{src:o(313)}}),t._v(" "),n("b-img",{staticClass:"position-absolute play-text",attrs:{src:o(314)}})],1)]],2)])}),[],!1,null,"6d182032",null);e.default=component.exports}}]);