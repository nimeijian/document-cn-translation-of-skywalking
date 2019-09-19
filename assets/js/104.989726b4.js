(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{386:function(a,e,t){"use strict";t.r(e);var _=t(0),v=Object(_.a)({},function(){var a=this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"配置覆盖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置覆盖","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置覆盖")]),a._v(" "),t("p",[a._v("默认情况下，SkyWalking为agent提供了"),t("code",[a._v("agent.config")]),a._v("配置文件。")]),a._v(" "),t("p",[a._v("配置覆盖意味着用户可以通过系统属性或agent选项覆盖配置文件中的配置。")]),a._v(" "),t("h2",{attrs:{id:"系统属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统属性","aria-hidden":"true"}},[a._v("#")]),a._v(" 系统属性")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("skywalking.")]),a._v(" + 配置文件中的配置名 作为系统属性的配置名来覆盖配置文件中的值。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("为什么需要这个前缀？")]),a._v(" "),t("p",[a._v("因为agent系统属性是和目标应用共享的，加前缀是为了避免冲突。")])]),a._v(" "),t("li",[t("p",[a._v("例子")]),a._v(" "),t("p",[a._v("通过下面的系统属性覆盖"),t("code",[a._v("agent.application_code")]),a._v("。")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-Dskywalking.agent.application_code=31200\n")])])]),t("h2",{attrs:{id:"agent选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agent选项","aria-hidden":"true"}},[a._v("#")]),a._v(" agent选项")]),a._v(" "),t("p",[a._v("在JVM参数的agent路径后面添加选项。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-javaagent:/path/to/skywalking-agent.jar=[option1]=[value1],[option2]=[value2]\n")])])]),t("ul",[t("li",[t("p",[a._v("例子")]),a._v(" "),t("p",[a._v("通过下面的配置覆盖"),t("code",[a._v("agent.application_code``logging.level")]),a._v("。")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-javaagent:/path/to/skywalking-agent.jar=agent.application_code=31200,logging.level=debug\n")])])]),t("ul",[t("li",[t("p",[a._v("特殊字符")]),a._v(" "),t("p",[a._v("如果在选项或选项值中有分隔符("),t("code",[a._v(",")]),a._v("或者"),t("code",[a._v("=")]),a._v(")，应该用引号包起来。")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-javaagent:/path/to/skywalking-agent.jar=agent.ignore_suffix='.jpg,.jpeg'\n")])])]),t("h2",{attrs:{id:"系统环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统环境变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 系统环境变量")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("例子")]),a._v(" "),t("p",[a._v("通过下面的配置覆盖"),t("code",[a._v("agent.application_code")]),a._v("和"),t("code",[a._v("logging.level")]),a._v("。")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# The service name in UI\nagent.service_name=${SW_AGENT_NAME:Your_ApplicationName}\n\n# Logging level\nlogging.level=${SW_LOGGING_LEVEL:INFO}\n")])])]),t("p",[a._v("如果 "),t("code",[a._v("SW_AGENT_NAME")]),a._v(" 环境变量在你的操作系统中已存在，并且，它的值为 "),t("code",[a._v("skywalking-agent-demo")]),a._v("，那么这里的"),t("code",[a._v("agent.service_name")]),a._v("的值将会被覆写为\n"),t("code",[a._v("skywalking-agent-demo")]),a._v(", 否则, 它将会被设置成 "),t("code",[a._v("Your_ApplicationName")]),a._v("。")]),a._v(" "),t("p",[a._v("另外，占位符嵌套也是支持的，比如 "),t("code",[a._v("${SW_AGENT_NAME:${ANOTHER_AGENT_NAME:Your_ApplicationName}}")]),a._v("。\n在这种情况下，如果 "),t("code",[a._v("SW_AGENT_NAME")]),a._v(" 环境变量不存在，但是 "),t("code",[a._v("ANOTHER_AGENT_NAME")]),a._v(" 环境变量存在，并且它的值为 "),t("code",[a._v("skywalking-agent-demo")]),a._v(", 那么这里的"),t("code",[a._v("agent.service_name")]),a._v("的值将会被覆写为"),t("code",[a._v("skywalking-agent-demo")]),a._v(", 否则, 它将会被设置成 "),t("code",[a._v("Your_ApplicationName")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"覆盖优先级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#覆盖优先级","aria-hidden":"true"}},[a._v("#")]),a._v(" 覆盖优先级")]),a._v(" "),t("p",[a._v("agent选项 > 系统属性(-D) > 系统环境变量 > 配置文件")])])}],!1,null,null,null);e.default=v.exports}}]);