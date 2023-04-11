(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["pages-index-index"], {
		"04b7": function(t, e, i) {
			"use strict";
			var n = i("9268"),
				a = i.n(n);
			a.a
		},
		"919c": function(t, e, i) {
			"use strict";
			i("7a82"), Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = void 0, i("ac1f"), i("466d");
			var n = {
				data: function() {
					return {
						title: "AZN-Dating app for America Asian"
					}
				},
				onLoad: function() {
					this.down()
				},
				methods: {
					down: function() {
						var t = window.navigator.userAgent.toLowerCase();
						if (console.log("weixin://"), "micromessenger" == t.match(
							/MicroMessenger/i)) {
							var e = document.getElementById("wx1"),
								i = document.getElementById("wx2");
							e.innerHTML = "点击右上角", i.innerHTML = "选择在默认浏览器中打开"
						} else if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
							var n = new Date;
							location.href = "weixin://", setTimeout((function() {
								var t = new Date;
								t - n > 800 && (location.href =
									"https://apps.apple.com/us/app/%E8%B1%86%E8%8D%9A%E7%9B%B8%E4%BA%B2-%E5%8D%8E%E4%BA%BA%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E7%9B%B8%E4%BA%B2%E4%BA%A4%E5%8F%8B%E5%B9%B3%E5%8F%B0-%E5%85%AC%E6%B5%8B%E4%B8%AD/id1600606899"
									)
							}), 1e3)
						} else if (navigator.userAgent.match(/android/i)) {
							n = new Date;
							location.href = "weixin://", setTimeout((function() {
								location.href =
									"https://play.google.com/store/apps/details?id=uni.UNIA84D763"
							}), 200)
						}
					}
				}
			};
			e.default = n
		},
		9268: function(t, e, i) {
			var n = i("df1a");
			n.__esModule && (n = n.default), "string" === typeof n && (n = [
				[t.i, n, ""]
			]), n.locals && (t.exports = n.locals);
			var a = i("4f06").default;
			a("74f9968e", n, !0, {
				sourceMap: !1,
				shadowMode: !1
			})
		},
		df1a: function(t, e, i) {
			var n = i("24fb");
			e = n(!1), e.push([t.i,
				".register_title[data-v-621e62f9]{width:%?750?%;height:%?100?%;position:fixed;bottom:%?0?%;display:flex;justify-content:center;align-items:center;flex-direction:row}.register_title_text[data-v-621e62f9]{font-family:Arial;font-style:normal;font-weight:400;font-size:%?26?%;line-height:%?30?%;overflow:hidden;text-overflow:ellipsis;color:#08122d}.content[data-v-621e62f9]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-621e62f9]{height:70px;width:70px;margin-top:%?300?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-621e62f9]{display:flex;justify-content:center}.title[data-v-621e62f9]{font-size:%?36?%;color:#08122d;font-weight:700}.text-area2[data-v-621e62f9]{display:flex;justify-content:center;align-items:center;width:%?550?%;height:%?150?%;border-radius:%?75?%;background-color:#08122d;position:fixed;bottom:%?100?%}.title2[data-v-621e62f9]{font-size:%?46?%;color:#fff}",
				""
			]), t.exports = e
		},
		e54a: function(t, e, i) {
			"use strict";
			i.d(e, "b", (function() {
				return n
			})), i.d(e, "c", (function() {
				return a
			})), i.d(e, "a", (function() {}));
			var n = function() {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("v-uni-view", {
						staticClass: "content"
					}, [i("v-uni-image", {
						staticClass: "logo",
						attrs: {
							src: "/static/logo.png"
						}
					}), i("v-uni-view", {
						staticClass: "text-area"
					}, [i("v-uni-text", {
						staticClass: "title"
					}, [t._v(t._s(t.title))])], 1), i("v-uni-view", {
						staticClass: "text-area2",
						on: {
							click: function(e) {
								arguments[0] = e = t.$handleEvent(e), t.down()
							}
						}
					}, [i("v-uni-text", {
						staticClass: "title2"
					}, [t._v("Get The App")])], 1), i("div", {
						staticClass: "register_title"
					}, [i("v-uni-text", {
						staticClass: "register_title_text"
					}, [t._v("Privacy Policy")])], 1)], 1)
				},
				a = []
		},
		f0a6: function(t, e, i) {
			"use strict";
			i.r(e);
			var n = i("919c"),
				a = i.n(n);
			for (var o in n)["default"].indexOf(o) < 0 && function(t) {
				i.d(e, t, (function() {
					return n[t]
				}))
			}(o);
			e["default"] = a.a
		},
		f787: function(t, e, i) {
			"use strict";
			i.r(e);
			var n = i("e54a"),
				a = i("f0a6");
			for (var o in a)["default"].indexOf(o) < 0 && function(t) {
				i.d(e, t, (function() {
					return a[t]
				}))
			}(o);
			i("04b7");
			var r = i("f0c5"),
				s = Object(r["a"])(a["default"], n["b"], n["c"], !1, null, "621e62f9", null, !1, n["a"],
					void 0);
			e["default"] = s.exports
		}
	}
]);