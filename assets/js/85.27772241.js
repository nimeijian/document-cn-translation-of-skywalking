(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{415:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},function(){var a=this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"backend的telemetry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backend的telemetry","aria-hidden":"true"}},[a._v("#")]),a._v(" Backend的telemetry")]),a._v(" "),e("p",[a._v("默认情况下, telemetry功能是关闭的，像这样：")]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("telemetry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("none")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n")])])]),e("h2",{attrs:{id:"prometheus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prometheus","aria-hidden":"true"}},[a._v("#")]),a._v(" Prometheus")]),a._v(" "),e("p",[a._v("Prometheus可做为telemetry功能的实现者。\n使用这个，prometheus可以从Skywalking的backend收集度量。")]),a._v(" "),e("p",[a._v("将"),e("code",[a._v("prometheus")]),a._v("设置为provider。端点在开放在"),e("code",[a._v("http://0.0.0.0:1234/")]),a._v("和"),e("code",[a._v("http://0.0.0.0:1234/metrics")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("telemetry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("prometheus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n")])])]),e("p",[a._v("根据需要设置主机和端口。")]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("telemetry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("prometheus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 127.0.0.1\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1543")]),a._v("\n")])])]),e("h3",{attrs:{id:"grafana可视化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grafana可视化","aria-hidden":"true"}},[a._v("#")]),a._v(" Grafana可视化")]),a._v(" "),e("p",[a._v("提供了两种grafana仪表盘的设置。")]),a._v(" "),e("ol",[e("li",[a._v("当SkyWalking 和追踪agent一起使用时，参考"),e("a",{attrs:{href:"telemetry/trace-mode-grafana.json"}},[a._v("SkyWalking trace-mode dashboard")]),a._v("。")]),a._v(" "),e("li",[a._v("当SkyWalking 和service mesh telemetry（包括istio和envoy）一起使用时，参考"),e("a",{attrs:{href:"telemetry/mesh-mode-grafana.json"}},[a._v("SkyWalking mesh-mode dashboard")]),a._v("。")])])])}],!1,null,null,null);t.default=r.exports}}]);