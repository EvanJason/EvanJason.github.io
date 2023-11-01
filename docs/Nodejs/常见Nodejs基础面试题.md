---
title: 常见Nodejs基础面试题

categories:
  - nodejs

tags:
  - nodejs

date: "2023-07-16"

author: 深海如梦

excerpt: 常见Nodejs基础面试题

---

# 常见Nodejs基础面试题

说到前端就不得不提到后端，我们给用户展示页面所需的数据正是从后端获取的，所以了解后端的运行原理和技术的实现很有必要。
 Node. js是一个不错的选择，它是基于JavaScript语法的一套服务器端（后端）语言。想要在企业中做得更好，开发者需要更多地了解它，并掌握它的有关用法。

## 1、你了解 Node. js吗？

Node. js是一个基于 Chrome v8引擎的服务器端 JavaScript运行环境；Node. js是一个事件驱动、非阻塞式I/O的模型，轻量而又高效；Node. js的包管理器npm是全球最大的开源库生态系统。
##  2、Node. js的使用场景是什么？
高并发、实时聊天、实时消息推送、客户端逻辑强大的SPA（单页面应用程序）。
## 3、为什么要用 Node. js？
原因如下。
（1）简单， Node. js用 JavaScript、JSON进行编码，简单好学。
（2）功能强大，非阻塞式I/O，在较慢的网络环境中，可以分块传输数据，事件驱动，擅长高并发访问。
（3）轻量级， Node. js本身既是代码又是服务器，前后端使用同一语言。
（4）可扩展，可以轻松应对多实例、多服务器架构，同时有海量的第三方应用组件。

## 4、Node. js有哪些全局对象？
global、 process, console、 module和 exports。
## 5、process有哪些常用方法？
process.stdin、 process.stdout、 process.stderr、process.on、 process.env、 process.argv、 process.arch、process.platform、 process.exit
## 6、console有哪些常用方法？
console.log/console. info、console.error/console.warning、console.time/console.timeEnd 、console.trace、console .table。
## 7、Node.js有哪些定时功能？
setTimeout/clearTimeout, setInterval/clearInterval、 setImmediate/clearImmediate、 process. nextTick。
## 8、Node. js中的事件循环是什么样的？
事件循环其实就是一个事件队列，先加入先执行，执行完一次队列，再次循环遍历看有没有新事件加入队列。
执行中的事件叫IO事件， setlmmediate在当前队列中立即执行，setTimout/setInterval把执行定时到下一个队列， process. nextTick在当前队列执行完，下次遍历前执行。所以总体顺序是：IO事件→ setImmediate→ setTimeout/setInterval→ process. nextTick。
## 9、如何应用 Node. js中的 Buffer？
Buffer是用来处理二进制数据的，比如图片、MP3、数据库文件等。Buffer支持各种编码解码、二进制字符串互转。
## 10、Node. js中的异步和同步如何理解？
Node.js是单线程的，异步是通过一次次的循环事件队列来实现的。同步则是阻塞式的IO，这在高并发环境中会是一个很大的性能问题，所以同步一般只在基础框架启动时使用，用来加载配置文件、初始化程序等。
## 11、通过哪些方法可以进行异步流程的控制？
通过以下方法可以进行异步流程的控制。
（1）多层嵌套回调。
（2）为每一个回调写单独的函数，函数里边再回调。
（3）用第三方框架，如 async、q、 promise等。
## 12、通过哪些常用方法可以防止程序崩溃？
通过以下方法可以防止程序崩溃。
（1） try-catch-finally。
（2） EventEmitter/Stream error事件处理。
（3） domain统一控制。
（4） jshint静态检查。
（5） jasmine/mocha单元测试。
## 13、怎样调试 Node. js程序？
用node-- debug app. js和 node-inspector。
## 14、Node .js的网络模块都有哪些？
Node. js全面支持各种网络服务器和客户端，包括TCP、HTP/ HTTPS、TCP 、UDP、DNS、tls/ssl等。
## 15、Noe.js是怎样支持 HTTPS、tls的？
主要通过以下几个步骤支持。
（1）使用 openssl生成公钥、私钥。
（2）服务器或客户端使用HTTPS替代HTTP。
（3）服务器或客户端加载公钥、私钥证书。
## 16、什么是 Node. js？
Node. js是一个 JavaScript的运行环境，是一个服务器端的“ JavaScript解释器”，用于方便高效地搭建一些响应速度快、易于扩展的网络应用。它采用事件驱动、异步编程方式，为网络服务而设计。
## 17、Node. js的优缺点是什么？
优点如下：
（1） Node. js是基于事件驱动和无阻塞的，非常适合处理并发请求，因此构建在 Node. js的代理服务器相比其他技术实现的服务器要好一点。
（2）与 Node. js代理服务器交互的客户端代码由 JavaScript语言编写，客户端与服务端都采用一种语言编写。
缺点如下：
（1） Node .js是一个相对新的开源项目，不太稳定，变化速度快。
（2）不适合CPU密集型应用，如果有长时间运行的计算（比如大循环），将会导致CPU时间片不能释放，使得后续I/O无法发起。
## 18、npm是什么？
npm是 Node. js中管理和分发包的工具，可用于安装、卸载、发布、查看包等。
## 19、npm的好处是什么？
通过ηpm，可以安装和管理项目的依赖，还可以指明依赖项的具体版本号。
## 20、Node. js中导入模块和导入 JavaScript文件在写法上有什么区别？
在 Node. js中要导入模块，直接使用名字导入即可，如下所示：
var express = require（"express"）；
要导入 JavaScript文件，需要使用文件的路径，如下所示：

var demo = require（"./demo.js"）；

## 21、npm的作用是什么？

npm是同 Node .js一起安装的包管理工具，能解决 Node. js代码部署上的很多问题。常见的使用场景有以下几种。

（1）允许用户从npm服务器下载别人编写的第三方包到本地。

（2）允许用户从npm服务器下载并安装别人编写的命令行程序到本地。

（3）允许用户将自己编写的包或命令行程序上传到npm服务器供别人使用。

## 22、什么是 EventEmitter？

EventEmitter是 Node. js中一个实现观察者模式的类，主要功能是订阅和发布消息，用于解决多模块交互而产生的模块之间的耦合问题.

## 23、如何实现一个 EventEmitter？

可通过3步实现 EventEmitter定义一个子类，通过寄生组合式继承，继承 EventEmitter

父类，代码如下。

var Util= require('util' );
 var EventEmitter= require ('events' ) .EventEmitter；
function  IcktEmitter () {
    EventEmitter .apply(this, arguments)
}
Util.inherits(IcktEmitter, EventEmitter);

var ie = new IcktEmitter ( ) ;
   ie.on('icketang'， function（data）{
       console.log('接收到消息'，data )
})
ie.emit（' icketang'，'来自有课网的消息'）；

## 24、EventEmitter有哪些典型应用？

有以下应用。

（1）在模块间传递消息。

（2）在回调函数内外传递消息。

（3）处理流数据，因为流是在 EventEmitter的基础上实现的。

（4）运用观察者模式收发消息的相关应用。

## 25、如何捕获 EventEmitter的错误事件？

当发布error消息的时候，如果没有注册该事件，应用程序会抛出错误并中断执行。所以要监听error事件，代码如下。

var ie= new IcktEmitter ( );
 ie .on（'error '， function（err）{
 conso1e.1og ( '接收到错误的信息'，err )
})
ie.emit（' error'，'来自ie1的错误消息'）；

## 26、Node. js中的流是什么？

流(Stream)是基于 EventEmitter的数据管理模式，由各种不同的抽象接口组成，主要包括可写、可读、可读写、可转换等类型。

## 27、使用流有什么好处？

流是非阻塞式数据处理模式，可以提升效率，节省内存，有助于处理管道且可扩展等。

## 28、流有哪些典型应用？

流在文件读写、网络请求、数据转换、音频、视频等方面有很广泛的应用。

## 29、如何捕获流的错误事件？

监听error事件，方法与订阅 EventEmitter的error事件相似。

## 30、有哪些常用 Stream流？分别什么时候使用？

Readable流为可读流，在作为输入数据源时使用；Writable流为可写流，在作为输岀源时使用；Duplex流为可读写流，它作为输岀源被写入，同时又作为输入源被后面的流读出。

Transform流和 Duplex流一样，都是双向流，区别是 Transfrom流只需要实现一个函数 _transfrom( chunk, encoding, callback)；而 Duplex流需要分别实现_read(size )函数和_write( chunk, encoding, callback ）函数。

## 31、如何实现一个 Writable流？

实现 Writable流分成3步

（1）引入 Writable模块。

（2）继承 Writable模块。

（3）实现 _write(chunk, encoding, callback )写入函数。

代码如下。

//引入 Writable模块
var Writable= require（'stream'）.Writable；
var Util = require（'util'）；
//继承 Writable模块
function IcktWritable( ) {
  Writable. apply(this, arguments ) ;
}
Util.inherits ( IcktWritable, Writable ) ;
//实现 write函数
IcktWritable. prototype. _write = function ( data, encoding, callback ) {
      console.log ('被写入的数据是：' ，data. toString ( ) )
callback ( )
}
var iw= new IcktWritable ( ) ；
for (var i=0；i< 5 ；i++ ) {
iw. write（'有课网'+i，'utf8"）
}
iw,end('学技能就上有课网' )；
## 32、内置的fs模块架构由哪几部分组成？

fs模块主要由下面几部分组成。

（1） POSIX文件 Wrapper，对应操作系统的原生文件操作。

（2）文件流，fs. createReadStream和 fs.createWriteStrean。

（3）同步文件读写， fs.readFileSync和fs.writeFileSync。

（4）异步文件读写， fs.readFile和fs.writeFile。

## 33、读写一个文件有多少种方法？

总体来说，有4种方法。

（1） POSIX式底层读写。

（2）流式读写。

（3）同步文件读写。

（4）异步文件读写。

## 34、如何读取JSON配置文件？

主要有两种方式。第一种是利用 Node. js内置的 require（ data.json！）机制，直接得到 Javascript对象；

第二种是读入文件内容，然后用JSON. parse（ content）转换成 JavaScript对象。

二者的区别是，对于第一种方式，如果多个模块都加载了同一个JSON文件，那么其中一个改变了 JavaScript对象，其他也跟着改变，这是由 Node.js模块的缓存机制造成的，缓存中只有一个 JavaScript模块对象；

第二种方式则可以随意改变加载后的JavaScript变量，而且各模块互不影响，因为它们都是独立的，存储的是多个 JavaScript对象。

## 35、fs.watch和 fs.watchFile有什么区别？

二者主要用来监听文件变动，fs.watch利用操作系统原生机制来监听，可能不适用网络文件系统；fs. watchFile则定期检查文件状态变更，适用于网络文件系统，但是与fs.watch相比有些慢，因为它不采用实时机制。

## 36、为什么需要子进程？

Node. js是异步非阻塞的，这对高并发非常有效。可是我们还有其他一些常用的需求，比如和操作系统 shell命令交互，调用可执行文件，创建子进程，进行阻塞式访问或高CPU计算等，子进程就是为满足这些需求而产生的。顾名思义，子进程就是把 Node. js阻塞的工作交给子进程去做。

## 37、exec、 execFile、 spawn和fork都是做什么用的？

它们的作用分别如下。

exec可以用操作系统原生的方式执行各种命令，如管道 cat ab. txt |  grep hello。

execFile用于执行一个文件。

spawn负责在流式和操作系统之间进行交互。

fork负责在两个 Node. js程序（ JavaScript）之间进行交互。

## 38、如何实现一个简单的命令行交互程序？

实现代码如下。

var cp = require (' child process )；
//执行指令
var child= cp .spawn（'echo', ['hello, ''] )；
// child.stdout是输入流， process. stdout是输出流
//子进程的输出流作为当前程序的输入流，然后重定向到当前程序的控制器输出
child. stdout. pipe（process. stdout）
## 39、两个 Node. js程序之间如何交互？

通过fork实现父子程序之间的交互。子程序用 process.on、 process. send访问父程序，父程序用 child.on、 child.send访问子程序。

关于 parent. JS的示例代码如下。

var cp = require (' child_process' ) ;
 var child= cp.fork ('./child. js' );
child .on（'message'， function（msg）{
 console.1og（'子程序发送的数据：'，msg )
})
child.send ( '来自父程序发送的数据' )
关于 child .js的示例代码如下。

process .on ( 'message' , function（msg）{
conso1e.1og ( '父程序发送的数据: ' , msg )
process.send ( '来自子程序发送的数据' )
## 40、如何让一个 JavaScript文件变得像 Linux命令一样可执行？

具体步骤如下。

（1）在文件头部加入#！/ bin/sh

如 icketang40.js
#！/bin/sh
echo'有课网— 技能学习就上有课网；
（2）用 chmod命令把名为 icketang40的 JavaScript文件改为可执行文件。

chmod + x  icketang40.js
（3）进入文件目录，在命令行输入 icketang40.js就相当于执行 node icketang40.js

$ ./icketang40.js
执行结果。

## 41、子进程和进程的 stdin、 stdout、 stderror是样的吗？

概念都是一样的。stdin、 stdout、 stderror分别是输入、输出、错误。三者都是流。区别是在父进程里，子进程的 stdout是输入流， stdin是输出流。

## 42、async都有哪些常用方法？分别怎么用？

async是一个 JavaScript类库，它的目的是解决 JavaScript中异常流程难以控制的问题。async不仅在 Node. js里适用，还可以用在浏览器中。其常用方法和用法如下。

具体代码如下所示。

var async = require（'async '）；
var date = Date .now ( )；
（1） async. parallel：并行执行完多个函数后，调用结束函数。不用等到前一个函数。执行完再执行下一个函数。

async .parallel ( [
     function ( callback ) {
        setTimeout (function () {
console. log（'process one'， Date. now ( ) - date)
callback（null, 'msg one'）
}，2000)
}，
function ( callback ){
setTimeout ( function () {
console. log（'process tow'， Date .now ( ) - date )
callback ( null, 'msg tow' )
}，1000)
}
]， function（err, result）{
  console. log（err, result, 'done ')
})
（2） async.series：串行执行完多个函数后，调用结束函数。前面一个函数执行完之后，就会立即执行下一个函数。

async .series ( [
function ( callback ) {
setTimeout ( function () {
console. log ( 'process one ', Date. now ( ) - date )
callback ( null, ' msg one'  )
}，2000 )
},
function ( callback )  {
setTimeout ( function () {
console. log ( 'process tow'， Date. now ( ) - date )
callback ( null, 'msg tow ' )
}，1000 )
   }
] ， function (err, result ) {
console. log（err, result, 'done'）
})
（3） async. waterfall：依次执行多个函数，前一个函数的执行结果作为后一个函数执行时的参数。

async .waterfall ( [
function ( callback ) {
setTimeout ( function () {
console. log（'process one, Date. now（）- date）
callback（null, 'msg one'）
}，2000）
},
function（argl, callback）{
 setTimeout （function（）{
console. log（'process tow, Date. now  ( ) - date, argl )
callback（null, 'msg tow'）
}，1000)
}
] , function（err, result）{
console. log（err, result, 'done '）
})
## 43、express项目的目录大致是什么结构的？

首先，执行安装 express的指令：npm install express-generator-g。

然后，通过 express指令创建项目：express icketang。

创建的项目目录结构如下。

./app.js  应用核心配置文件（入口文件）

./bin  存放启动项目的脚本文件

./ package.json  存储项目的信息及模块依赖

./public 静态文件（css、js、img等）

./routes 路由文件（MVC中的 contro1ler）

./views 页面文件（jade模板）

## 44、express常用函数有哪些？

常用函数有以下几个

express .Router—路由组件

app.get—路由定向。

app. configure——配置。

app.set一设定参数。

app.use——使用中间件。

## 45、express中如何获取路由的参数？

执行的命令如下

/users/：name
使用 req.params.name来获取；使用req.body.username来获得表单传入参数 username；express的路由支持常用通配符有？、+、*、( )。

## 46、express  response有哪些常用方法？

常用方法有以下几个。

res. download( )，弹出文件下载。

res.end ( )，结束响应。

res.json( )，返回json。

res.jsonp( )，返回 jsonp。

res .redirect ( )，重定向请求。

res .render ( )，渲染模板。

res.send ( )，返回多种形式数据。

res.sendFile  ( )，返回文件。

res.sendStatus( )，返回状态。

## 47、mongodb有哪些常用优化措施？

常用优化措施如下。

（1）优化预读。

（2）禁用NUMA。

（3）不要记录访问时间等。

## 48、Redis的主要特点是什么？

主要特点如下。

（1） Redis支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载和使用。

（2） Redis不仅支持简单的键-值类型的数据，同时还提供list、set、zset、hash等数据结构的存储。

（3） Redis支持数据的备份，即主-从模式的数据备份。

## 49、Nginx和 Apache有什么区别？

Nginx是轻量级的，同样的Web服务在 nginx中会占用更少的内存和资源。Nginx抗并发，处理请求的方式是异步非阻塞的，负载能力比 Apache高很多，而 Apache则是阻塞型的。

在高并发下 Nginx能保持低资源、低消耗、高性能，并且处理静态文件比 Apache好。 

Nginx的设计高度模块化，编写模块相对简单，配置简洁。作为负載均衡服务器，支持7层负载均衡，是一个反向代理服务器。

社区活跃，各种高性能模块出品迅速。Apache的 rewrite比 Nginx强大，模块丰富。Apache发展得更为成熟，Bug很少,更加稳定。

Apache对PHP的支持比较简单， Nginx需要配合其他后端使用。Apache处理动态请求有优势，拥有丰富的特性、成熟的技术和开发社区。

## 50、说说线程与进程的区别。

（1）一个程序至少有一个进程，一个进程至少有一个线程

（2）线程的划分尺度小于进程，使得多线程程序的并发性高。

（3）进程在执行过程中拥有独立的内存单元，而多个线程共享内存，极大地提高了程序的运行效率。

（4）线程在执行过程中与进程有区别。每个独立的线程都有程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。

（5）从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看作多个独立的应用来实现进程的调度、管理和资源分配。这是进程和线程的主要区别。

## 51、你知道哪些 Node.js核心模块？

EventEmitter 、Stream、FS、Net和全局对象等。

## 52、说说 MySQL和 MongoDB的区别。

（1） MySQL是传统的关系型数据库， MongoDB则是非关系型数据库。

（2） MongoDB以BSON结构进行存储，在存储海量数据方面有着很明显的优势。

（3）与传统关系型数据库相比， NoSQL有着非常显著的性能和扩展性优势。

（4）与传统的关系型数据库（如与 MySQL）相比， MongoDB的优点如下。

弱一致性（最终一致），更能保证用户的访问速度。

使用文档结构的存储方式，能够更便捷地获取数据。

## 53、谈谈栈和堆的区别。

区别如下：

（1）栈（ stack）区由编译器自动分配和释放，存放函数的参数值、局部变量的值等。

堆（heap）区一般由程序员分配和释放，若程序员不释放，程序结束时可能由OS回收。

（2）堆（数据结构）可以被看成一棵树，如堆排序。栈（数据结构）是一种先进后出的数据结构。