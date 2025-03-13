# Performance Optimization

* 性能优化目的：更快的加载和响应速度、更稳定的功能表现、更简洁的代码与架构设计、更好用更人性化

## 1. 优化策略

* 前端加载性能：减少首屏加载时间和资源体积，优化用户体验。
* 运行时性能：提高页面渲染和交互的流畅性，降低资源占用。
* 稳定性和可靠性：确保在高并发或复杂场景下的性能表现一致。
* 代码维护性：通过简洁、高效的代码实现功能，降低技术债务和后续开发成本。

### 1.1. 加载 - 性能优化

#### 1.1.1 资源优化

1. 删除冗余代码
2. 按需加载（包含懒加载）
3. 细颗粒度的代码分割（利用缓存策略）
4. 开启gzip压缩
5. 图片体积优化

##### 1.1.1.1 删除冗余代码

* 方法一：Tree Shaking(是一种通过静态分析移除未使用代码的技术，通常用来优化前端项目中的 JavaScript 和 CSS 代码)。
  * 原理：Tree Shaking核心依赖于ES Module 规范(import/export)，ES Module 是静态的，可以在编译构建时分析出模块之间的依赖关系。（CommonJS(require/module.exports)是动态导入的，难以在编译时进行静态分析，不支持Tree Shaking）
  * **前端项目使用：**
    1. 使用ESM格式的模块：确保代码使用import/export,避免使用require/module.exports
    2. 使用打包工具支持：Webpack/vite等
    3. 静态导入：避免动态导入或在运行条件下选择模块
    4. 避免副作用(Side Effects)：如果模块导入时有副作用（如修改全局变量、执行代码等），打包工具会保留它，需要在`package.json`中配置`"sideEffects": false`，告诉打包工具可以安全地删除未使用的模块。
  * 针对模块级别的冗余代码删除，tree-shaking比较得心应手，但是更细颗粒度的删除，还需要依赖其他手段。
* 方法二：压缩插件优化删除
  * JavaScript的压缩和优化
    * 通过工具：UglifyJS、Terser、Babel等，可以删除未被引用的代码片段、简化表达式、内联变量等。
  * CSS的压缩和优化
    * 未使用的CSS选择器可以通过工具删除，如PurgeCSS、PurifyCSS等。

##### 1.1.1.2 按需加载

* 按需加载（On-demand Loading） 是前端优化的一种核心手段，指在应用运行过程中，仅在用户需要时动态加载特定资源（如JavaScript 代码、CSS 文件、组件、图片等），而非一次性加载所有资源。
* 核心思想：延迟加载非必要内容，类似于分批处理任务，通过减少初始加载量来提升性能。
* 主要体现：
  * 减少首屏加载时间
  * 优化性能
  * 节省带宽
  * 提升交互体验
* **前端项目使用：**
  * 代码层面的动态导入： 通过JavaScript动态导入(import())，在代码执行到某个逻辑时在加载对应的模块，而不是在页面加载时就全部加载，主要应用于大型前端项目，避免一次性加载全部JavaScript代码。使用场景：第三方库按需加载、大型组件加载、页面内嵌功能的动态加载等。
  * 组件级的懒加载：在React、Vue等前端框架中，可以使用 lazy、Suspense(React)、defineAsyncComponent(Vue)等方式实现组件的按需加载。React使用场景：大组件、弹窗、富文本编辑器等复杂组件的按需加载。Vue使用场景：Vue 组件按需加载，减少初始 bundle 体积。
  * 图片和静态资源的懒加载：对于图片等静态资源，可以使用 懒加载（Lazy Load） 技术，在用户 滚动到图片可见时才加载。
  * 路由级的懒加载：适用场景：大型单页应用（SPA）优化首屏加载速度
  * 数据的按需加载：在请求接口时，只加载当前需要的数据，减少不必要的请求和数据传输量。适用场景：表格分页、无限滚动、搜索结果分页。
* **实际如何使用以达到项目整体的按需加载**
  * 分析项目需求：找出哪些资源可以按需加载（JS 代码、组件、图片、路由、**数据等**）一般可以通过一些插件来分析打包的产物，看看哪些产物比较大且又是初始化的时候不需要加载的，可以单独抽出来按需加载。
  * 使用Webpack/Vite代码分割，通过import()进行动态加载
  * 优化图片加载
  * 使用路由懒加载
  * 合理进行数据加载优化

##### 1.1.1.3 细颗粒度的代码分割

* 利用缓存策略：常见缓存策略是：html文件不缓存，每次都请求最新的html文件。静态资源文件时通过构建工具打了hash值的tag，只要资源文件发生变化就会生产新hash，从而命中不了缓存，达到获取新资源的目的。

##### 1.1.1.4 开启gzip压缩

* 常见的压缩资源方式，可以通过对HTTP响应内容进行压缩，减小文件的体积。在前端开发中，Gzip压缩主要应用于HTTP响应中传输的文本文件（如HTML、CSS、JavaScript等）

* 图片体积优化
  * 常见图片类型：JPG、PNG、GIF、SVG、WebP、AVIF
    * 根据图片格式可分为：传统图片格式 JPG、PNG、GIF、SVG；现代图片格式 WebP、AVIF
    * 根据功能和性能：体积 传统格式的图片文件普通较大。与JPG格式相比，WebP格式通常可以将文件提交减少约10%，而AVIF格式能减少超过40%的体积；性能 现代格式支持更多特性，如动态图片和无损压缩等，而传统格式的特性相对单一；兼容性 代格式的浏览器兼容性稍逊一筹，支持它们的浏览器数量相对较少。

  * **如何进行图片性能优化？**
    * 选择合适的图片格式：照片类优先使用JPG或WebP，图标和UI元素则使用SVG或WebP。对于需要透明度的图片，优先使用WebP或AVIF
    * 使用现在格式：尽可能使用WebP和AVIF等现代格式，结合 `<picture>` 元素
    * 调整图片质量与尺寸：在不显著影响视觉效果的前提下，降低图片的质量和尺寸
    * 图片懒加载：当图片即将进入视口时才会加载，减少初始页面加载的资源消耗
    * 使用CDN
    * 自动化优化工具：使用构建工具和图片处理工具自动化优化图片
    * 图像精灵：

#### 1.1.2 请求优化

* 在前端性能优化中，缓存是一个非常重要的手段，能够显著提高网页的加载速度，减少服务器请求，减轻网络压力，从而提升用户体验。通过合理使用缓存，我们可以在不同场景下存储数据和资源，避免重复加载和计算，提升响应速度。

* 缓存的类型：
  * 浏览器缓存（Client-side Cache）
  * DNS缓存
  * HTTP缓存（Server-side Cache）
  * CND缓存
  * 内存缓存
  * 本地存储（Local Storage/Session Storage）
  * Service Worker缓存

* **如何通过缓存来提升性能？**

##### 1.1.2.1 浏览器缓存

* 浏览器缓存：：是在用户浏览器中存储资源（如图片、CSS、JS文件等），以便在下一次访问同一页面时无需重新下载这些资源。可分为两个核心概念强缓存和协商缓存

1. 强缓存：最常见的缓存方式，会直接判断资源是否在缓存有效期内，如果在有效期内，则直接使用缓存资源，不再请求服务器。通过设置HTTP响应头中的Cache-Control和Expires字段来控制缓存策略。
2. 协商缓存（ETag、Last-Modified）:是一种浏览器与服务器之间的缓存机制，它依赖于浏览器和服务器的通信来确定资源是否有变化。如果资源没有变化，服务器会返回 304（Not Modified）响应，告诉浏览器继续使用缓存中的资源。通过设置HTTP响应头中的ETag和Last-Modified字段来控制缓存策略。

* **强缓存的变化过程**：
  * 首次请求：浏览器请求资源时，服务器会返回带有缓存控制头部的响应，浏览器根据 Cache-Control 或 Expires 判断是否缓存资源。
  * 有效缓存：如果缓存仍然有效，浏览器就会直接从缓存中加载资源，而不会向服务器发起请求。
  * 过期缓存：如果缓存已经过期，浏览器会再次向服务器发送请求，获取最新的资源。

* **Cache-Control 缓存策略**
  * max-age：指定资源在本地缓存的有效时间，单位为秒。例如：`Cache-Control: max-age=3600` 表示资源在本地缓存一小时。
  * public: 表示资源可以被任何缓存服务器缓存
  * private: 表示资源只能被客户端缓存，而不能被代理服务器缓存
  * no-cache: 表示资源需要先与服务器确认后，才能被缓存
  * no-store: 表示资源不应被缓存

* **协商缓存的变化过程：**
  * 首次请求：服务器返回资源并附带 ETag 或 Last-Modified，浏览器将其存储起来。
  * 后续请求：浏览器向服务器发送带有 If-None-Match 或 If-Modified-Since 的请求头，询问服务器资源是否有变化。
  * 服务器响应：如果资源没有变化，服务器返回 304 状态码，浏览器继续使用本地缓存。如果资源变化，服务器返回新的资源和新的 ETag 或 Last-Modified。
  * ETag：是服务器响应的一个唯一标识符，用于标识资源的版本。当资源发生变化时，ETag会发生变化，浏览器会向服务器发送`If-None-Match`请求头，携带上次请求返回的ETag值，服务器会根据ETag值判断资源是否有变化。
  * Last-Modified：是资源的最后修改时间，服务器会在响应头中返回资源的最后修改时间。浏览器会向服务器发送`If-Modified-Since`请求头，携带上次请求返回Last-Modified值，服务器会根据Last-Modified值判断资源是否有变化。

* **使用范围：**
  * 通过设置缓存过期时间（Cache-Control 或 Expires）来控制资源的存储期，缓存有效期内直接使用缓存，不与服务器交互。适用于静态且更新不频繁的资源。
  * 依赖 `ETag` 和 `Last-Modified`，通过与服务器的通信来验证缓存是否有效。适用于需要频繁更新且服务器内容不可预知的资源。

##### 1.1.2.2 DNS缓存

* DNS缓存是指在本地设备（如浏览器、操作系统、路由器等）中缓存DNS解析结果的机制。在首次访问某个域名时，DNS解析器会向域名的DNS服务器发起请求来获取域名的IP地址。为了避免每次都需要重新解析相同的域名，DNS结果会被缓存一段时间，这段时间被称为TTL
* **DNS缓存工作原理**
  * 首次申请：浏览器向DNS服务器发起查询请求，服务器返回域名对应的IP地址，并设置TTL。
  * 缓存存储：浏览器将返回的IP地址存储在DNS缓存中，并在TTL有效期内使用该IP地址。
  * 过期查询：TTL到期后，浏览器会再次发起DNS查询，获取最新的IP地址。
* **DNS缓存如何提升性能？**
  * 选择长期稳定的域名，并合理设置TTL值；
  * 减少跨域DNS查询，通过合并资源减少DNS解析次数；
  * 利用DNS预解析加速外部资源加载；
  * 使用HTTP/2协议优化多个资源加载；
  * 使用CDN加速静态资源加载，同时缓存DNS结果。

##### 1.1.2.3 HTTP缓存

* 是指在服务器与客户端之间通过HTTP协议进行的缓存处理。服务器会将请求的数据缓存下来，若下次相同请求到来，直接返回缓存的内容，而不再进行计算或查询。常见的缓存策略有：客户端缓存、代理缓存（如CDN缓存）、服务器缓存等。
* 版本控制资源和缓存失效
通过为静态资源文件（如JS、CSS、图片等）添加版本号或哈希值，可以确保文件更新时，浏览器能自动检测并加载新版本资源，而不被缓存旧版本。

##### 1.1.2.4 CDN缓存

* 是通过将静态资源（如图片、JS、CSS等）分发到全球各地的CDN节点，减少用户请求的响应时间。CDN缓存提高了静态资源加载的速度，并减轻了源服务器的压力。

* 利用CDN缓存加速资源加载
CDN通过将资源缓存到离用户更近的节点，使得静态资源可以从最近的服务器获取，从而加快加载速度并减轻源服务器的负担。使用CDN缓存可以显著提高网站的响应速度，尤其是对于跨地域的访问

##### 1.1.2.5 内存缓存

* 使用内存缓存提高访问速度
内存缓存（如Redis、Memcached）存储的是内存中的数据，访问速度极快。通常用于缓存数据库查询结果、API响应等高频次请求的数据，避免重复计算或重复查询数据库。

##### 1.1.2.6 本地缓存

* LocalStorage：浏览器提供的一种持久化存储方式，数据不会过期，适合存储不频繁变化的数据，如用户信息、设置等
* SessionStorage：与LocalStorage类似，但数据仅在当前会话期间有效。适用于存储会话级别的临时数据。

##### 1.1.2.7 Service Worker缓存

* 实现离线缓存
  * 使用Service Worker可以缓存页面的资源，甚至实现离线访问功能。当用户没有网络连接时，Service Worker可以从缓存中获取资源，使得应用仍然可以正常显示。
  
```javascript
 self.addEventListener('install', event => {
   event.waitUntil(
     caches.open('my-cache').then(cache => {
       return cache.addAll([
         '/index.html',
         '/style.css',
         '/app.js',
         '/logo.png'
       ]);
     })
   );
 });

 self.addEventListener('fetch', event => {
   event.respondWith(
     caches.match(event.request).then(response => {
       return response || fetch(event.request);
     })
   );
 });

```

### 1.2 渲染 - 性能优化

#### 1.2.1 SSR服务端渲染

* SSR（Server-Side Rendering） 是一种网页内容渲染技术，其中网页的 HTML 内容由服务器在用户请求时预先渲染生成，而不是由浏览器端的 JavaScript 渲染。也就是说，服务端渲染的网页会在用户首次请求时返回完整的 HTML 文件，浏览器接收到 HTML 后，直接呈现页面，而不需要等待 JavaScript 完全加载和执行才能显示内容

* **SSR的本质原理**
  * 请求到达服务器：用户通过浏览器访问网站时，发起 HTTP 请求到服务器。
  * 服务器渲染页面：服务器接收到请求后，生成页面的 HTML 内容。对于动态页面，服务器会执行 JavaScript 代码，获取数据并将其与模板结合，生成完整的 HTML 页面。
  * 返回完整的 HTML 页面：服务器将渲染好的 HTML 页面返回给浏览器，浏览器接收到后直接渲染页面，展示给用户
  * 客户端接管：一旦 HTML 渲染完毕，客户端的 JavaScript 会接管页面，启用页面中的交互功能，比如动态加载的内容、事件绑定等。此时，浏览器变为一个 SPA（单页应用）。

* 常用的库和框架有 Next.js（React）、Nuxt.js（Vue）等，它们通过服务器端渲染来提高首屏加载速度和 SEO 性能。主流的服务端渲染框架主要都是基于2个东西：
  * renderToString(element)：把我们写的组件渲染成HTML字符串返回给浏览器直接渲染
  * hydrate(element, container):在浏览器端激活，使得我们的事件等交互激活，变成一个SPA应用

* **SSR用来做什么？**
  * 提高 SEO（搜索引擎优化）
  * 提高首屏渲染速度
  * 提高性能

#### 1.2.3 CSS优化

* CSS优化是前端性能优化的重要一环，通过合理的CSS编写和优化，可以提高页面的渲染速度和交互体验。主要实现方式有：
  * 内联首屏关键CSS
  * 异步加载CSS
  * 资源压缩
  * 合理使用选择器
  * 减少使用昂贵的属性：
    * 避免使用 box-shadow 和 text-shadow 等过于复杂的属性，尤其是在多层嵌套的元素上。这些属性会增加页面渲染的复杂性。
    * 使用 will-change 来优化动画：当你知道某个元素即将进行动画变化时，可以使用 will-change 来告知浏览器优化该元素。
  * 不要使用@import
  * 减少不必要的 CSS 重绘和重排
    * 减少 DOM 元素的更改：尽量避免频繁地修改元素的布局或样式。例如，不要在动画过程中频繁改变 width、height、margin 等会导致重排的属性。
    * 使用 transform 和 opacity 代替 top、left 等属性：这些 CSS 属性不会触发重排，浏览器可以通过 GPU 加速动画。

#### 1.2.4 JavaScript优化

* JavaScript 性能优化是前端开发中重要的部分，直接影响页面的速度、交互响应速度以及整体用户体验。JS 优化可以从代码优化、渲染优化、执行优化、加载优化、内存管理 等方面进行性能优化

##### 1.2.4.1 代码优化

* 避免使用全局变量
* 避免不必要的计算

##### 1.2.4.2 渲染优化

* 避免重排和重绘 (Reflow & Repaint)
  * 触发重排和重绘：一是修改 DOM 树的结构，移动增删等，二是修改dom元素的几何属性，宽高之类的，三是获取offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight
  * **如何避免?**
  * 缓存位置的值如：offsetTop，不要老访问
  * 使用 DocumentFragment 进行批量 DOM 操作，减少回流次数。
  * 避免逐个修改样式，而是使用 classList 统一修改。
* 使用 Virtual DOM: 直接操作 DOM 可能会触发大量的重排和重绘。 使用 React / Vue 这样的框架，利用 Virtual DOM 进行高效的 DOM 更新。
* 加载优化
  * 延迟加载 JavaScript

```javascript
<!-- 不推荐 -->
<script src="app.js"></script>

<!-- 推荐 -->
<script src="app.js" async></script>
```

##### 1.2.4.3 内存管理

* 避免内存泄漏
  * 及时清除定时器
  * 避免 DOM 引用未释放：
* 使用 IndexedDB 进行本地存储:localStorage 仅支持字符串存储，性能较差。使用 IndexedDB 存储大量结构化数据，提高访问效率

##### 1.2.4.4 使用 Web Worker 进行异步计算

##### 1.2.4.5 其他

* 使用事件委托，将事件绑定在父元素上：利用事件冒泡机制处理子元素事件。
* 避免数组、对象的深拷贝：使用 JSON 进行深拷贝，或者 lodash.cloneDeep()，会导致大量的对象克隆，影响性能。应当使用结构共享方法，如 Object.assign() 或 ...。
* 使用 Map 和 Set 替代 Object 和 Array:普通对象和数组在大规模数据操作时，Map 和 Set 有更高的性能。当键值对存储较多时，使用 Map，当去重查找时，使用 Set。

* 当页面加载大佬JavaScript资源时可以使用：
  * 使用 Webpack 代码分割 (import() 进行动态加载)。
  * 使用 async / defer 加载外部脚本。
  * 使用 IndexedDB 存储大量数据，而非 localStorage。
  * 使用 Web Worker 处理复杂计算，避免主线程阻塞。
  * 使用 Service Worker 进行离线缓存，提高页面可用性。

#### 1.2.5 Vue项目优化

* 从数据管理、组件优化、事件处理、网络优化、渲染优化等维度进行优化

##### 1.2.5.1 数据管理优化

* 数据管理是 Vue 性能优化的关键，因为 Vue 依赖响应式数据系统进行 DOM 更新，避免不必要的响应式追踪可以提高性能

* **如何实现Vue数据管理优化：**
  * 避免不必要的响应式数据：如果某些数据不会变更，可以使用 shallowRef() 或 shallowReactive() 降低 Vue 的响应式追踪成本
  * 避免 watch 监听深层对象：仅监听必要属性值
  * 避免 computed 修改数据：computed 计算属性应该是纯函数，不应修改任何状态，否则会触发 Vue 的无限依赖追踪，导致性能问题

##### 1.2.5.2 组件优化

* Vue 组件的合理拆分和优化可以减少不必要的渲染，提高页面流畅度
  * 使用 v-once 进行静态渲染: 如果一个元素的内容不会变更，可以使用 v-once，让 Vue 只渲染一次，避免额外的 DOM 计算。
  * 使用key 提高 v-for 效率
  * 组件懒加载：使用 defineAsyncComponent 实现组件按需加载，减少首屏加载时间。
  * 避免 v-if 和 v-for 同时使用:v-if + v-for 会导致每次渲染都执行判断，影响性能。应先用 computed 过滤数据。一般在外层套个template在套vif或者如下面代码所示
  * 使用 v-show 替代 v-if：v-show 仅切换 display 属性，而 v-if 会添加和删除 DOM 元素，适用于频繁切换的组件。
  * 使用 computed 代替 methods：computed 是基于依赖的缓存计算结果，而 methods 每次调用都会重新计算。

##### 1.2.5.3 事件优化

* 防止不必要的事件触发：使用事件修饰符（如 .stop、.prevent）来优化事件处理。
* 使用防抖（debounce）和节流（throttle）：防抖适用于搜索框等场景，减少输入时的频繁请求；节流适用于`scroll、resize`事件，减少高频触发。

##### 1.2.5.4 网络优化

* 代码分割: 使用 import() 进行懒加载
* 开启gzip压缩

##### 1.2.5.5 渲染优化

* 使用 keep-alive 缓存组件: keep-alive 避免重复销毁和创建，提高性能。
* 延迟图片加载 使用 LazyLoad 使图片懒加载

##### 63 函数式组件

* 在 Vue 中，函数式组件（Functional Components）是一种没有实例、没有生命周期钩子、没有响应式数据的组件，它们通常被用于呈现简单的 UI，而不需要 Vue 的响应式系统的支持。函数式组件因其简单性和效率，通常能够带来性能优化，尤其在渲染大量静态组件时。所以合理使用函数式组件能带来性能的提升
* 组件特点：
  * 无状态
  * 无生命周期
  * 更快的渲染性能
* 优点：
  * 更少的内存开销
  * 更少的渲染开销
  * 避免不必要的渲染

* **如何实现Vue的函数式组件**

1. 在 Vue 2 中，函数式组件的实现比较简单，只需要将 functional: true 设置为组件的选项即可。
2. 在 Vue 3 中，函数式组件的创建方式更简洁，直接通过渲染函数（render()）来定义组件。这里的 setup() 语法糖与传统的函数式组件结合使用时，可以更加清晰和高效。
3. 对于更高级的渲染函数，可以手动使用`h()`来返回虚拟DOM

```vue
<!-- vue2 -->
<template functional>
  <div>
    <h1>{{ props.title }}</h1>
    <p>{{ props.content }}</p>
  </div>
</template>

<script>
export default {
  functional: true, // 声明该组件为函数式组件
  props: {
    title: String,
    content: String
  }
};
</script>
```

```VUE
<!-- vue3 -->
<script setup>
defineProps({
  title: String,
  content: String
});
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>
```

```javascript
import { h } from 'vue';
export default {
  functional: true,
  render() {
    return h('div', [
      h('h1', this.title),
      h('p', this.content)
    ]);
  }
};
```

* **使用函数式组件常见？**
  * 用于渲染静态内容：函数式组件适用于渲染静态内容，不需要响应式数据和生命周期钩子。
  * 高效的列表渲染： 如果你需要渲染一个包含大量简单静态内容的列表（如卡片、条目等），可以使用函数式组件，这样可以避免每个列表项都拥有自己的 Vue 实例，从而减少内存和性能开销。
  * 减少不必要的复杂性： 对于非常简单、无状态的组件，使用函数式组件可以避免使用 Vue 的响应式系统和生命周期钩子，这样组件会更简单、更易于维护。

##### 1.2.5.7 第三方组件的按需引入

* 在 Vue 项目中，使用第三方 UI 组件库（如 Element Plus、Ant Design Vue 等）可以加速开发，提高 UI 质量。然而，直接全量引入组件库会导致项目体积增大、加载时间变长、性能下降。因此，按需引入组件库成为提升 Vue 项目性能的一个关键优化策略。

#### 1.2.6 React项目优化

* React 提供了强大的声明式 UI 开发能力，但如果不注意优化，应用可能会遇到渲染性能瓶颈、状态管理问题、资源加载缓慢等问题。以下是 React 项目中的性能优化策略，涵盖组件渲染优化、状态管理优化、资源优化等多个方面，并结合实际代码示例。

##### 1.2.6.1 避免不必要的组件渲染

* 使用 `React.memo` 避免不必要的组件渲染
  * 是一个高阶组件（HOC），用于缓存组件的渲染结果，避免因父组件重新渲染导致子组件重复渲染。
  * 适用场景：组件渲染成本较高，且 props 不常变化的情况下。
  * 注意：React.memo 只对纯组件有效，如果 props 是对象或函数，每次渲染都会创建新的引用，可能导致 React.memo 失效

```jsx
import React from 'react';
// 普通组件，每次父组件更新都会重新渲染
const Button = ({ label, onClick }) => {
  console.log('Button Rendered');
  return <button onClick={onClick}>{label}</button>;
};
// 使用 React.memo 缓存组件，只有 props 变化时才重新渲染
const MemoizedButton = React.memo(Button);
export default MemoizedButton;
```

* 使用 `PureComponent` 优化类组件
  * 对于类组件，可以使用 React.PureComponent 代替 React.Component，它会自动进行浅层比较，避免不必要的更新。
  * 适用于类组件，并且 props 和 state 只包含基本类型
  * 注意：PureComponent 只进行浅比较，如果 props 传递的是引用类型（对象、数组），需要配合 useMemo 或 useCallback

```jsx
import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  render() {
    console.log('Counter Rendered');
    return <h1>Count: {this.props.count}</h1>;
  }
}

export default Counter;
```

* shouldComponentUpdate：控制类组件是否重新渲染
  * useCallback 和 useMemo 主要用于缓存不变的函数和计算结果，避免在子组件中因函数重新创建而触发不必要的渲染

##### 1.2.6.2 使用 `useCallback` 和 `useMemo` 缓存函数和计算结果

* 使用 `useCallback` 缓存回调函数
