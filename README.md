# flex

css flex

一面1.简单的自我介绍，与大体的了解我一面面试官非常不错，先问了下几个项目和用到的技术，会先对我懂的东西做一个大体的了解，比如webpack的单页面的多页面切换，webpack的按需加载，一些webpack的配置有哪些，问了有没有看vue源码，我说了一个vue的watch，大体问了问我框架方面的东西。2.promise的原理这个面试官最让人欣赏的就是不会去问你不了解的东西，一开始问了我promise，然后就让我用原生js写一个回调函数，其实就是问promise的原理了，js写一个。3.this指向这个是面试官手写了一道变态长以及绕的this指向题，可以自行百度js this指向面试题，看几道没有啥问题，需要关注的是其中也考了，argument，和apply(null)。以后想起来再写吧4.bind与函数柯里化也就是写个bind，这个红皮书高级函数（22章）有：1 function bind(fn, context){
3   return function(){
5     return fn.apply(context, arguments);
7   };
9 }
可以看下。不过还是得先理解bind的用法，返回一个函数，以及可以传递的参数。参数这里涉及到了函数柯里化。都是手写代码，而且最好写的整洁，因为我有些一笔带过，面试官都让我写完整，明确说要看我写代码水平5.==, isNaN, typeof问这个之前先问了我有几种数据类型，这里隐形的看你知不知道es6，symbol这个新出的类型。说出了symbol自然会问你这个类型有什么用。然后就写了好多个typeof，isNaN，==的问输出，这个就是基础题。6.知道什么http请求头？这个可以说的很多，说了几个，又主动说了下有关跨域请求头，之前项目用的cors，于是和他聊了一会，其实面试就是主动表现自己，把自己知道的都说出来，不然几个请求头说细不细，要问细了能把人问蒙了，最好把话题引到自己知道的地方。7.问了css问了css盒子并画出来，清除浮动与bfc，两列布局。8.说了一大堆其实就是想考我防抖面试完这个问我想问的问题，我直接问还有二面么？回答有的，又介绍了一会美团点评，说是后台是node，看来要求是前端也要有后台的知识喽。二面二面问的显然比一面深入很多：1.自我介绍，问项目针对项目问了不少，当时有一个支付行为的项目，于是问了很多安全方面的问题，蒙蒙的，完全不知道。第一个就很失败了。然后问了其他的项目，问了websocket。2.node的EventEmitter用js实现出来写出来了，但是可以看出来代码写的不规范，学长面试官表示看起来很乱。不过大约算是可以的，指出了几个问题，让我进行修改。（之后完善）3.虚拟dom其实vue中就有jsx，react的特点之一有jsx，虚拟dom和代码优化有点关系。先说下正常对dom的操作，在浏览器中分为渲染引擎和js引擎，现在浏览器内核一般都是渲染引擎（生成渲染树），因为js引擎越来越独立了（所谓的v8引擎？）然而你在js中获取dom元素的时候你必须要通过渲染引擎，这样两个线程之间的数据交换自然会很慢。所以在前端优化中总是要考虑减少dom操作这一项。包括获取dom元素变量储存起来。jsx是把dom元素变成了储存在内存中的数据结构。js很快，操作dom也很快。不过也存在缺点，目前的理解就这么点了。4.路由的实现原理5.node文件流，java的映射机制（记不太清楚）？差不多吧，很多都忘记了，也算一个自己跨专业，正好当时确认，我自己做了很多准备，每天现在都在看点前端知识。很多人其实纠结是自学还是培训，其实没必要纠结，培训能多认识以后做这行的一些朋友，自己学的话能锻炼自己的自律和解决问题能力，我当时选择培训的是因为我爸妈支持，而且当时比现在好很多前端环境。