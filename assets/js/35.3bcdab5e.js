(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{308:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"说说你对spa单页面的理解-它的优缺点分别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说你对spa单页面的理解-它的优缺点分别是什么"}},[a._v("#")]),a._v(" 说说你对SPA单页面的理解，它的优缺点分别是什么？")]),a._v(" "),t("p",[a._v("优点：服务器压力小 响应速度快\n缺点：SEO， 难以进行搜索引擎优化\n首屏打开速度很慢（因为要一次性加载多种依赖和包）")]),a._v(" "),t("h3",{attrs:{id:"spa单页面的实现方式有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spa单页面的实现方式有哪些"}},[a._v("#")]),a._v(" SPA单页面的实现方式有哪些？")]),a._v(" "),t("ul",[t("li",[a._v("在hash模式中，在window上监听hashchange事件（地址栏中hash变化触发）驱动界面变化；")]),a._v(" "),t("li",[a._v("在history模式中，在window上监听popstate事件（浏览器的前进或后退按钮的点击触发）驱动界面变化，监听a链接点击事件用history.pushState、history.replaceState方法驱动界面变化；")]),a._v(" "),t("li",[a._v("直接在界面用显示隐藏事件驱动界面变化。")])]),a._v(" "),t("h3",{attrs:{id:"说说你对mvc、mvp、mvvm模式的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说你对mvc、mvp、mvvm模式的理解"}},[a._v("#")]),a._v(" 说说你对MVC、MVP、MVVM模式的理解")]),a._v(" "),t("p",[a._v("modal view controller\n用户操作View，View发送指令到Control，完成业务逻辑处理后，要求Model处理相应的数据，将处理好的数据发送到View，要求View把这些数据展示给用户。\n缺点：Model、Control、View三者相互依赖，修改起来要兼顾其他两者，还是非常困难。")]),a._v(" "),t("p",[a._v("Presenter [prɪˈzentə(r)] 主持人\n当用户操作View，View发送指令到Presenter,完成业务逻辑处理后，要求Model处理相应的数据，将处理好的数据返回到Presenter中，Presenter将数据发送到View中，要求View把这些数据展示给用户\nMVP模式中，Presenter将View和Model完全隔离开，Presenter和View相互依赖，Presenter和Model相互依赖，优点：View和Model不再相互依赖，使代码耦合降低。\n缺点：因为Presenter和View相互依赖，这样Presenter就没办法单独做单元测试，非得等到View做好以后才行。所以对View分割一部分叫做View接口，Presenter只依赖View接口，这样Presenter不用依赖View就可以测试了，并且也增加了复用性，只要View实现了View接口部分，Presenter就可以大发神威。\n然而在MVP模式中，因为让Presenter发送数据到View,让View展示，仍然需要大量的、烦人的代码，这实在是一件不舒服的事情。 那么可不可以让View在Model变化时自动更新。")]),a._v(" "),t("p",[a._v("所以出现了MVVM模式来实现这个设想，其中"),t("strong",[a._v("VM代表ViewModel负责视图显示逻辑和监听视图变化")]),a._v("，M代表Model变成处理业务逻辑和数据。\n当用户操作View时，ViewModel监听到View的变化，会通知Model中对应的方法进行业务逻辑和数据处理，处理完毕后，ViewModel会监听到自动让View做出相应的更新。ViewModel可以对应多个View,具有很强的复用性。\n在Vue项目中。new Vue()就是一个ViewModel，View就是template模板。Model就是Vue的选项如data、methods等。在开发过程我们只关注View怎么展示，Model怎么处理业务逻辑和数据。不要去管处理业务逻辑和数据后怎么让View更新，View上有操作，怎么让Model处理这个操作，这些通通交给"),t("strong",[a._v("ViewModel")]),a._v("来实现，大大降低了开发成本。")]),a._v(" "),t("h3",{attrs:{id:"说说你对object-defineproperty的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说你对object-defineproperty的理解"}},[a._v("#")]),a._v(" 说说你对Object.defineProperty的理解")]),a._v(" "),t("h3",{attrs:{id:"vue的模板语法用的是哪个web模板引擎的吗-说说你对这模板引擎的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue的模板语法用的是哪个web模板引擎的吗-说说你对这模板引擎的理解"}},[a._v("#")]),a._v(" Vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解")]),a._v(" "),t("p",[a._v("采用的是Mustache的web模板引擎"),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjanl%2Fmustache.js%2Fblob%2Fmaster%2Fmustache.js",target:"_blank",rel:"noopener noreferrer"}},[a._v("mustache.js"),t("OutboundLink")],1),a._v("   [məˈstɑːʃ]")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("script type"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"text/javascript"')]),a._v(" src"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./mustache.js"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("script type"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"text/javascript"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" data "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"company"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Apple"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" tpl "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<h1>Hello {{company}}</h1>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" html "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Mustache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("tpl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"你认为vue的核心是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你认为vue的核心是什么"}},[a._v("#")]),a._v(" 你认为Vue的核心是什么？")]),a._v(" "),t("h3",{attrs:{id:"说说你对单向数据流和双向数据流的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说你对单向数据流和双向数据流的理解"}},[a._v("#")]),a._v(" 说说你对单向数据流和双向数据流的理解")]),a._v(" "),t("h3",{attrs:{id:"什么是双向绑定-原理是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是双向绑定-原理是什么"}},[a._v("#")]),a._v(" 什么是双向绑定？原理是什么？")]),a._v(" "),t("h3",{attrs:{id:"什么是虚拟dom-vue中如何实现一个虚拟dom-说说你的思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟dom-vue中如何实现一个虚拟dom-说说你的思路"}},[a._v("#")]),a._v(" 什么是虚拟DOM？Vue中如何实现一个虚拟DOM？说说你的思路")]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/interview/vue/VDOM.html"}},[a._v("什么是虚拟DOM？")])],1),a._v(" "),t("h3",{attrs:{id:"你了解vue的diff算法吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你了解vue的diff算法吗"}},[a._v("#")]),a._v(" 你了解Vue的diff算法吗？")]),a._v(" "),t("h3",{attrs:{id:"你知道nexttick的原理吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你知道nexttick的原理吗"}},[a._v("#")]),a._v(" 你知道nextTick的原理吗？")]),a._v(" "),t("h3",{attrs:{id:"vue的template编译的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue的template编译的理解"}},[a._v("#")]),a._v(" Vue的template编译的理解")]),a._v(" "),t("h3",{attrs:{id:"vue实例挂载的过程是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue实例挂载的过程是什么"}},[a._v("#")]),a._v(" Vue实例挂载的过程是什么？")]),a._v(" "),t("h3",{attrs:{id:"说下你对指令的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说下你对指令的理解"}},[a._v("#")]),a._v(" 说下你对指令的理解？")]),a._v(" "),t("h3",{attrs:{id:"vue为什么要求组件模板只能有一个根元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue为什么要求组件模板只能有一个根元素"}},[a._v("#")]),a._v(" Vue为什么要求组件模板只能有一个根元素？")]),a._v(" "),t("p",[a._v("当前的virtualDOM差异和diff算法在很大程度上依赖于每个子组件总是只有一个根元素")]),a._v(" "),t("h3",{attrs:{id:"你有用过事件总线-eventbus-吗-说说你的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你有用过事件总线-eventbus-吗-说说你的理解"}},[a._v("#")]),a._v(" 你有用过事件总线(EventBus)吗？说说你的理解")]),a._v(" "),t("h3",{attrs:{id:"使用vue后怎么针对搜索引擎做seo优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用vue后怎么针对搜索引擎做seo优化"}},[a._v("#")]),a._v(" 使用Vue后怎么针对搜索引擎做SEO优化？")]),a._v(" "),t("h3",{attrs:{id:"ssr解决了什么问题-服务器端渲染-有做过ssr吗-你是怎么做的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssr解决了什么问题-服务器端渲染-有做过ssr吗-你是怎么做的"}},[a._v("#")]),a._v(" SSR解决了什么问题（服务器端渲染）？有做过SSR吗？你是怎么做的")]),a._v(" "),t("p",[a._v("解决首屏渲染过长的问题\n更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。")]),a._v(" "),t("h3",{attrs:{id:"axios是什么-怎样使用它-怎么解决跨域的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios是什么-怎样使用它-怎么解决跨域的问题"}},[a._v("#")]),a._v(" axios是什么？怎样使用它？怎么解决跨域的问题？")]),a._v(" "),t("p",[a._v("axios 是一个基于 promise 的 HTTP 库，先封装在使用。")]),a._v(" "),t("p",[a._v("使用proxyTable配置解决跨域问题。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dev:{\n    proxyTable: {\n        '/api': {\n            target: 'http://172.16.13.205:9011', // 设置你调用的接口域名和端口号\n            secure: false,\n            changeOrigin: true,// 跨域\n            pathRewrite: {\n                '^/api': '' // 去掉标志\n            }\n        }\n    },\n}\n")])])]),t("h3",{attrs:{id:"ajax、fetch、axios这三都有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ajax、fetch、axios这三都有什么区别"}},[a._v("#")]),a._v(" ajax、fetch、axios这三都有什么区别？")]),a._v(" "),t("h3",{attrs:{id:"为何官方推荐使用axios而不用vue-resource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为何官方推荐使用axios而不用vue-resource"}},[a._v("#")]),a._v(" 为何官方推荐使用axios而不用vue-resource？")]),a._v(" "),t("h3",{attrs:{id:"你有封装过axios吗-主要是封装哪方面的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你有封装过axios吗-主要是封装哪方面的"}},[a._v("#")]),a._v(" 你有封装过axios吗？主要是封装哪方面的？")]),a._v(" "),t("h3",{attrs:{id:"vue开发过程你是怎么做接口管理的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue开发过程你是怎么做接口管理的"}},[a._v("#")]),a._v(" Vue开发过程你是怎么做接口管理的？")]),a._v(" "),t("h3",{attrs:{id:"如何中断axios的请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何中断axios的请求"}},[a._v("#")]),a._v(" 如何中断axios的请求？")]),a._v(" "),t("h3",{attrs:{id:"如果将axios异步请求同步化处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果将axios异步请求同步化处理"}},[a._v("#")]),a._v(" 如果将axios异步请求同步化处理？")]),a._v(" "),t("h3",{attrs:{id:"你了解axios的原理吗-有看过它的源码吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你了解axios的原理吗-有看过它的源码吗"}},[a._v("#")]),a._v(" 你了解axios的原理吗？有看过它的源码吗？")]),a._v(" "),t("h3",{attrs:{id:"说说你对vue组件的设计原则的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说你对vue组件的设计原则的理解"}},[a._v("#")]),a._v(" 说说你对Vue组件的设计原则的理解")]),a._v(" "),t("h3",{attrs:{id:"写出多种定义组件模板的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写出多种定义组件模板的方法"}},[a._v("#")]),a._v(" 写出多种定义组件模板的方法")]),a._v(" "),t("h3",{attrs:{id:"你有使用过render函数吗-有什么好处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你有使用过render函数吗-有什么好处"}},[a._v("#")]),a._v(" 你有使用过render函数吗？有什么好处？")]),a._v(" "),t("h3",{attrs:{id:"你了解什么是函数式组件吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你了解什么是函数式组件吗"}},[a._v("#")]),a._v(" 你了解什么是函数式组件吗？")]),a._v(" "),t("h3",{attrs:{id:"你有使用过jsx吗-说说你对jsx的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你有使用过jsx吗-说说你对jsx的理解"}},[a._v("#")]),a._v(" 你有使用过JSX吗？说说你对JSX的理解？")]),a._v(" "),t("p",[a._v("JSX就是Javascript和XML结合的一种格式。React发明了JSX，利用HTML语法来创建虚拟DOM。当遇到<，JSX就当HTML解析，遇到{就当JavaScript解析。")]),a._v(" "),t("h3",{attrs:{id:"如果想扩展某个现有的vue组件时-怎么做呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果想扩展某个现有的vue组件时-怎么做呢"}},[a._v("#")]),a._v(" 如果想扩展某个现有的Vue组件时，怎么做呢？")]),a._v(" "),t("h3",{attrs:{id:"你了解什么是高阶组件吗-可否举个例子说明下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你了解什么是高阶组件吗-可否举个例子说明下"}},[a._v("#")]),a._v(" 你了解什么是高阶组件吗？可否举个例子说明下？")]),a._v(" "),t("h3",{attrs:{id:"怎么在vue中使用插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎么在vue中使用插件"}},[a._v("#")]),a._v(" 怎么在Vue中使用插件？")]),a._v(" "),t("h3",{attrs:{id:"组件和插件有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件和插件有什么区别"}},[a._v("#")]),a._v(" 组件和插件有什么区别？")]),a._v(" "),t("h3",{attrs:{id:"为什么vue使用异步更新组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么vue使用异步更新组件"}},[a._v("#")]),a._v(" 为什么Vue使用异步更新组件？")]),a._v(" "),t("h3",{attrs:{id:"你有看过vue推荐的风格指南吗-列举出你知道的几条"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你有看过vue推荐的风格指南吗-列举出你知道的几条"}},[a._v("#")]),a._v(" 你有看过Vue推荐的风格指南吗？列举出你知道的几条")]),a._v(" "),t("h3",{attrs:{id:"如何优化首页的加载速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何优化首页的加载速度"}},[a._v("#")]),a._v(" 如何优化首页的加载速度？")]),a._v(" "),t("h3",{attrs:{id:"vue渲染大量数据时应该怎么优化-说下你的思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue渲染大量数据时应该怎么优化-说下你的思路"}},[a._v("#")]),a._v(" Vue渲染大量数据时应该怎么优化？说下你的思路！")]),a._v(" "),t("h3",{attrs:{id:"你有使用过babel-polyfill模块吗-主要是用来做什么的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你有使用过babel-polyfill模块吗-主要是用来做什么的"}},[a._v("#")]),a._v(" 你有使用过babel-polyfill模块吗？主要是用来做什么的？")]),a._v(" "),t("p",[a._v("Babel默认只转换新的JavaScript语法（syntax），如箭头函数等，而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码；因此我们需要polyfill；\n"),t("a",{attrs:{href:"https://www.cnblogs.com/Jeely/p/11231530.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.cnblogs.com/Jeely/p/11231530.html"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"为什么我们写组件的时候可以写在-vue里呢-可以是别的文件名后缀吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么我们写组件的时候可以写在-vue里呢-可以是别的文件名后缀吗"}},[a._v("#")]),a._v(" 为什么我们写组件的时候可以写在.vue里呢？可以是别的文件名后缀吗？")]),a._v(" "),t("h3",{attrs:{id:"vue-loader是什么-它有什么作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-loader是什么-它有什么作用"}},[a._v("#")]),a._v(" vue-loader是什么？它有什么作用")]),a._v(" "),t("p",[a._v("vue-loader是一个webpack的loader，是一个模块转换器，用于把模块原内容按照需求转换成新内容。\n它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件。可以解析和转换 .vue 文件，提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版 template，再分别把它们交给对应的loader去处理。")]),a._v(" "),t("h3",{attrs:{id:"分析下vue项目本地开发完成后部署到服务器后报404是什么原因呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析下vue项目本地开发完成后部署到服务器后报404是什么原因呢"}},[a._v("#")]),a._v(" 分析下Vue项目本地开发完成后部署到服务器后报404是什么原因呢？")]),a._v(" "),t("h3",{attrs:{id:"vue首页白屏是什么问题引起的-如何解决呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue首页白屏是什么问题引起的-如何解决呢"}},[a._v("#")]),a._v(" Vue首页白屏是什么问题引起的？如何解决呢？")]),a._v(" "),t("h3",{attrs:{id:"vue打包成最终的文件有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue打包成最终的文件有哪些"}},[a._v("#")]),a._v(" vue打包成最终的文件有哪些？")]),a._v(" "),t("h3",{attrs:{id:"如何解决vue打包vendor过大的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何解决vue打包vendor过大的问题"}},[a._v("#")]),a._v(" 如何解决vue打包vendor过大的问题？")]),a._v(" "),t("h3",{attrs:{id:"vue部署上线前需要做哪些准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue部署上线前需要做哪些准备工作"}},[a._v("#")]),a._v(" vue部署上线前需要做哪些准备工作？")]),a._v(" "),t("h3",{attrs:{id:"说说你觉得认为的vue开发规范有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说你觉得认为的vue开发规范有哪些"}},[a._v("#")]),a._v(" 说说你觉得认为的Vue开发规范有哪些")]),a._v(" "),t("h3",{attrs:{id:"webpack打包vue速度太慢怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包vue速度太慢怎么办"}},[a._v("#")]),a._v(" webpack打包vue速度太慢怎么办？")]),a._v(" "),t("p",[a._v('"打包慢"，是一个综合的因素，和vue关系不大。')]),a._v(" "),t("ol",[t("li",[a._v("loader范围缩小到src项目文件！一些不必要的loader能关就关了吧 include")]),a._v(" "),t("li",[a._v("happypack多进程进行 webpack4")]),a._v(" "),t("li",[a._v("eslint代码校验其实是一个很费时间的一个步奏。 ：可以把eslint的范围缩小到src,且只检查*.js 和 *.vue ：生产环境不开启lint，使用pre-commit或者husky在提交前校验")]),a._v(" "),t("li",[a._v("DllReferencePlugin 如果项目上了 webpack 4，再使用 dll 收益并不大。我拿实际项目的代码试了一下，加入 dll 可能会有 1-2 s 的速度提升，对于整体打包时间可以说可以忽略不计\n| DLL | 缓存 |\n| --- | --- |\n| 1.把公共代码打包为 DLL 文件存到硬盘里 | 1.把常用文件存到硬盘/内存里 |\n| 2.第二次打包时动态链接 DLL 文件，不重新打包 | 2.第二次加载时直接读取缓存，不重新请求 |\n| 3.打包时间缩短 | 3.加载时间缩短 |")])]),a._v(" "),t("p",[a._v("AutoDllPlugin\nHardSourceWebpackPlugin 直接引入plugin中使用即可 性能yyds")]),a._v(" "),t("h3",{attrs:{id:"你有使用过vue开发多语言项目吗-说说你的做法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你有使用过vue开发多语言项目吗-说说你的做法"}},[a._v("#")]),a._v(" 你有使用过Vue开发多语言项目吗？说说你的做法？")]),a._v(" "),t("h3",{attrs:{id:"用vue怎么实现一个换肤的功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用vue怎么实现一个换肤的功能"}},[a._v("#")]),a._v(" 用vue怎么实现一个换肤的功能？")]),a._v(" "),t("h3",{attrs:{id:"对于即将到来的vue3-0特性你有什么了解的吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对于即将到来的vue3-0特性你有什么了解的吗"}},[a._v("#")]),a._v(" 对于即将到来的vue3.0特性你有什么了解的吗？")]),a._v(" "),t("h3",{attrs:{id:"说说你对proxy的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说你对proxy的理解"}},[a._v("#")]),a._v(" 说说你对Proxy的理解")]),a._v(" "),t("h3",{attrs:{id:"object-defineproperty和proxy的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty和proxy的区别"}},[a._v("#")]),a._v(" Object.defineProperty和Proxy的区别")])])}),[],!1,null,null,null);t.default=r.exports}}]);