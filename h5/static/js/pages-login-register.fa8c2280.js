(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register"],{"0085":function(t,a,e){"use strict";e.r(a);var n=e("e05c"),o=e("8de1");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("cef6");var c,r=e("f0c5"),l=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"697700ec",null,!1,n["a"],c);a["default"]=l.exports},3001:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{lefts:[{icon:"left",text:"返回",textSize:"ll"}],cur:!0,pwdNoVisible:!0,seconds:0,timer:null}},computed:{rightEye:function(){return this.pwdNoVisible?"eye":"eye-close"},codeHintText:function(){return 0===this.seconds?"获取验证码":"".concat(this.seconds,"s后重新获取")}},methods:{makeTimer:function(){this.seconds=60;var t=this;this.timer=setInterval((function(){t.seconds>=1?t.seconds=t.seconds-1:(t.seconds=0,clearInterval(t.timer),t.timer=null)}),1e3)},navBack:function(){uni.navigateBack({})},togglePwdVisible:function(){this.pwdNoVisible=!this.pwdNoVisible},toGetCode:function(){this.seconds>0||this.makeTimer()}}};a.default=n},"7c20":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.margin-b5[data-v-697700ec]{margin-bottom:%?5?%}.margin-b10[data-v-697700ec]{margin-bottom:%?10?%}.margin-b15[data-v-697700ec]{margin-bottom:%?15?%}.margin-b20[data-v-697700ec]{margin-bottom:%?20?%}.margin-b25[data-v-697700ec]{margin-bottom:%?25?%}.margin-b30[data-v-697700ec]{margin-bottom:%?30?%}.margin-b40[data-v-697700ec]{margin-bottom:%?40?%}.margin-b60[data-v-697700ec]{margin-bottom:%?60?%}.margin-b80[data-v-697700ec]{margin-bottom:%?80?%}.margin-b100[data-v-697700ec]{margin-bottom:%?100?%}.margin-r5[data-v-697700ec]{margin-right:%?5?%}.margin-r10[data-v-697700ec]{margin-right:%?10?%}.margin-r15[data-v-697700ec]{margin-right:%?15?%}.margin-r20[data-v-697700ec]{margin-right:%?20?%}.margin-r25[data-v-697700ec]{margin-right:%?25?%}.margin-r30[data-v-697700ec]{margin-right:%?30?%}.margin-r40[data-v-697700ec]{margin-right:%?40?%}.margin-r60[data-v-697700ec]{margin-right:%?60?%}.font-18[data-v-697700ec]{font-style:normal;font-size:%?18?%;font-family:Droid Sans Fallback}.font-20[data-v-697700ec]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-697700ec]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-697700ec]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-697700ec]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-697700ec]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-697700ec]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-697700ec]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-697700ec]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-697700ec]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-697700ec]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-697700ec]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-46[data-v-697700ec]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-50[data-v-697700ec]{font-style:normal;font-size:%?50?%;font-family:Droid Sans Fallback}.font-60[data-v-697700ec]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-80[data-v-697700ec]{font-style:normal;font-size:%?80?%;font-family:Droid Sans Fallback}.text-left[data-v-697700ec]{text-align:left}.text-center[data-v-697700ec]{text-align:center}.text-right[data-v-697700ec]{text-align:right}.color-white[data-v-697700ec]{color:#fff}.color-red[data-v-697700ec]{color:#dc0000}.color-black[data-v-697700ec]{color:#000}.color-black-3[data-v-697700ec]{color:#333}.color-black-6[data-v-697700ec]{color:#666}.color-black-9[data-v-697700ec]{color:#999}.font-weight-400[data-v-697700ec]{font-weight:400}.font-weight-500[data-v-697700ec]{font-weight:700}.spacing-20[data-v-697700ec]{width:%?750?%;height:%?20?%;background-color:#f8f8f8}.radius-10[data-v-697700ec]{border-radius:%?10?%}.radius-20[data-v-697700ec]{border-radius:%?20?%}.radius-30[data-v-697700ec]{border-radius:%?30?%}.radius-circle[data-v-697700ec]{border-radius:50%}.radius-height[data-v-697700ec]{border-radius:10000px}.vs-flex-item[data-v-697700ec]{flex:1}.vs-space-between[data-v-697700ec]{justify-content:space-between}.vs-space-around[data-v-697700ec]{justify-content:space-around}.vs-space-center[data-v-697700ec]{justify-content:center}.vs-space-end[data-v-697700ec]{justify-content:flex-end}.vs-row[data-v-697700ec]{flex-direction:row}.vs-column[data-v-697700ec]{flex-direction:column}.vs-align-end[data-v-697700ec]{align-items:flex-end}.vs-align-center[data-v-697700ec]{align-items:center}.vs-align-start[data-v-697700ec]{align-items:flex-start}.vs-item-hover[data-v-697700ec]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-697700ec]{opacity:.8}.color-base[data-v-697700ec]{color:#dd524d}.bg-color-base[data-v-697700ec]{background-color:#dd524d}.top[data-v-697700ec]{height:%?20?%}.title[data-v-697700ec]{height:%?100?%;align-items:center;justify-content:center}.title-name[data-v-697700ec]{font-size:%?40?%}.bi-margin[data-v-697700ec]{margin:0 %?32?%}.bi-code[data-v-697700ec]{color:#cfd0d1;font-size:%?28?%}.bi-code-active[data-v-697700ec]{color:#dd524d}',""]),t.exports=a},"8de1":function(t,a,e){"use strict";e.r(a);var n=e("3001"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},cef6:function(t,a,e){"use strict";var n=e("e5a6"),o=e.n(n);o.a},e05c:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var n={mypNavbar:e("066c").default,mypInput:e("37b2").default,mypFlex:e("e1c1").default,mypButton:e("0ed2").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("myp-navbar",{attrs:{bgType:"dark",lefts:t.lefts,title:"注册"},on:{leftAction:function(a){arguments[0]=a=t.$handleEvent(a),t.navBack.apply(void 0,arguments)}}}),e("div",{staticClass:"top"}),e("div",{staticClass:"title"},[e("v-uni-text",{staticClass:"title-name"},[t._v("请输入你的手机号码")])],1),e("v-uni-view",{staticClass:"bi-margin"},[e("myp-input",{attrs:{mode:"number",maxlength:11,label:" +86 ",labelSize:t.l,height:"l",placeholder:"手机号码",space:"20rpx",boxStyle:"padding-left:10rpx;padding-right:10rpx;"},model:{value:t.phone,callback:function(a){t.phone=a},expression:"phone"}}),e("myp-input",{attrs:{mode:"number",maxlength:4,icon:"lock",height:"l",placeholder:"四位验证码",space:"20rpx",boxStyle:"padding-left:10rpx;padding-right:10rpx;"},model:{value:t.code,callback:function(a){t.code=a},expression:"code"}},[e("v-uni-view",{attrs:{slot:"extra"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toGetCode.apply(void 0,arguments)}},slot:"extra"},[e("v-uni-text",{class:["bi-code",0===t.seconds&&"bi-code-active"]},[t._v(t._s(t.codeHintText))])],1)],1)],1),e("myp-flex",{attrs:{justify:"center",bgType:"main3",boxStyle:"height:140rpx"}},[e("myp-button",{attrs:{text:"下一步",textType:"inverse",border:"none",radius:"ll",boxStyle:"width:380rpx;height:76rpx;background-color:#00cd98;"},on:{buttonClicked:function(a){arguments[0]=a=t.$handleEvent(a),t.profileDone.apply(void 0,arguments)}}})],1)],1)},i=[]},e5a6:function(t,a,e){var n=e("7c20");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("2a809ac0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);