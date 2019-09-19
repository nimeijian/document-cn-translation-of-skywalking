(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{183:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"服务器端的跟踪采样"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器端的跟踪采样","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器端的跟踪采样")]),t._v(" "),e("p",[t._v("当我们运行一个分布式跟踪系统时，跟踪会给我们带来详细的信息，但在存储消耗很大。开放服务器端跟踪采样机制，服务度量、服务实例、端点和拓扑和以前一样，都是准确的，只是不把所有的跟踪数据存起来。")]),t._v(" "),e("p",[t._v("当然，即使您打开采样，跟踪也会尽可能保持一致。"),e("strong",[t._v("一致")]),t._v("意味着，一旦跟踪段已被agent收集并报告，Backend将尽力不破坏跟踪。查看"),e("a",{attrs:{href:"#%E6%8E%A8%E8%8D%90"}},[t._v("推荐")]),t._v("来了解我们称它为"),e("code",[t._v("as consistent as possible")]),t._v("和"),e("code",[t._v("do their best to don't break the trace")]),t._v("的原因。")]),t._v(" "),e("h2",{attrs:{id:"设定采样率"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设定采样率","aria-hidden":"true"}},[t._v("#")]),t._v(" 设定采样率")]),t._v(" "),e("p",[t._v("在"),e("strong",[t._v("receiver-trace")]),t._v("接受者中，你可以找到"),e("code",[t._v("sampleRate")]),t._v("设置。")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver-trace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ../trace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("buffer/  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Path to trace buffer files, suggest to use absolute path")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferOffsetMaxFileSize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100 ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unit is MB")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferDataMaxFileSize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500 ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unit is MB")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferFileCleanWhenRestart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sampleRate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_TRACE_SAMPLE_RATE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The sample rate precision is 1/10000. 10000 means 100% sample in default.")]),t._v("\n")])])]),e("p",[e("code",[t._v("sampleRate")]),t._v(" 可让你设置Backend的采样率。\n采样率精度为1/10000。10000表示默认为100%样本。")]),t._v(" "),e("h1",{attrs:{id:"推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推荐","aria-hidden":"true"}},[t._v("#")]),t._v(" 推荐")]),t._v(" "),e("p",[t._v("您可以给的不同的Backend实例设置不同的'sampleRate'值，但我们建议你设置成一样。")]),t._v(" "),e("p",[t._v("当你设置不同的值时，")]),t._v(" "),e("ul",[e("li",[t._v("Backend-Instance"),e("strong",[t._v("A")]),t._v(".sampleRate = 35")]),t._v(" "),e("li",[t._v("Backend-Instance"),e("strong",[t._v("B")]),t._v(".sampleRate = 55")])]),t._v(" "),e("p",[t._v("我们假设agent向Backend报告了所有跟踪段，然后，全局35%的跟踪将被收集并保存在一致/完整的存储中，所有跨度都是如此。报告给后端实例"),e("strong",[t._v("B")]),t._v(" *的20%跟踪段也将保存在存储器中，但可能会遗漏一些跟踪段， 因为它们被报告给后端实例"),e("strong",[t._v("A")]),t._v("并被忽略。")])])}],!1,null,null,null);a.default=n.exports}}]);