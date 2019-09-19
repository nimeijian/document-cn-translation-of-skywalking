(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{179:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("为了让 Envoy 发送度量指标到 SkyWalking，我们需要给予 Envoy 一些包含 "),a("code",[t._v("stats_sinks")]),t._v(" 的配置，其中包括 "),a("code",[t._v("envoy.metrics_service")]),t._v("。\n"),a("code",[t._v("envoy.metrics_service")]),t._v(" 此配置应该作为 "),a("a",{attrs:{href:"https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/core/grpc_service.proto#envoy-api-msg-core-grpcservice",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("config.grpc_service")]),a("OutboundLink")],1),t._v(" 的一个配置项进行配置。")]),t._v(" "),a("p",[t._v("以下配置展示了其中比较有用的某些配置项：")]),t._v(" "),t._m(1),t._m(2),t._v(" "),a("p",[t._v("需要注意的是 Envoy 还可以进行通过 "),a("a",{attrs:{href:"https://github.com/envoyproxy/data-plane-api/blob/master/XDS_PROTOCOL.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("xDS Protocol"),a("OutboundLink")],1),t._v(" 进行动态配置。")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Envoy 的一些统计数据列在"),a("a",{attrs:{href:"https://www.envoyproxy.io/docs/envoy/latest/configuration/statistics",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个列表"),a("OutboundLink")],1),t._v("中，\n有一个示例数据包含了 identifier ，可以在"),a("a",{attrs:{href:"identify.json"}},[t._v("此处")]),t._v("找到，只包含指标的示例数据可以在"),a("a",{attrs:{href:"metrics.json"}},[t._v("此处")]),t._v("找到.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"配置-envoy-来向-skywalking-发送度量指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-envoy-来向-skywalking-发送度量指标","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置 Envoy 来向 SkyWalking 发送度量指标")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stats_sinks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" envoy.metrics_service\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("grpc_service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意: 我们也可以使用 google_grpc 实现")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("envoy_grpc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service_skywalking\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service_skywalking\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("connect_timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5s\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LOGICAL_DNS\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http2_protocol_options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns_lookup_family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" V4_ONLY\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lb_policy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ROUND_ROBIN\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("load_assignment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service_skywalking\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lb_endpoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("socket_address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" skywalking\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是 SkyWalking 为 Envoy 度量指标的 gRPC 服务流提供服务的端口")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port_value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11800")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("更完整的静态配置可以在"),s("a",{attrs:{href:"config.yaml"}},[this._v("此处")]),this._v("找到。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"度量指标数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#度量指标数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 度量指标数据")])}],!1,null,null,null);s.default=e.exports}}]);