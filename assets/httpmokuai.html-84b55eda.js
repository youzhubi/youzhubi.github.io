import{_ as n,p as s,q as a,Z as t}from"./framework-9675d465.js";const e={},p=t(`<h2 id="创建http服务" tabindex="-1"><a class="header-anchor" href="#创建http服务" aria-hidden="true">#</a> 创建HTTP服务</h2><blockquote><p>使用nodejs创建HTTP服务</p></blockquote><h3 id="_1-操作步骤" tabindex="-1"><a class="header-anchor" href="#_1-操作步骤" aria-hidden="true">#</a> 1.操作步骤</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1. 导入 http 模块</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2. 创建服务对象 create 创建 server 服务</span>
<span class="token comment">// request 意为请求. 是对请求报文的封装对象, 通过 request 对象可以获得请求报文的数据</span>
<span class="token comment">// response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Hello HTTP server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//3. 监听端口, 启动服务</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务已经启动, 端口 9000 监听中...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>http.createServer 里的回调函数的执行时机： 当接收到 HTTP 请求的时候，就会执行</p></blockquote><h3 id="_2-测试" tabindex="-1"><a class="header-anchor" href="#_2-测试" aria-hidden="true">#</a> 2.测试</h3><p>浏览器请求对应端口：127.0.0.1:9000</p><h3 id="_3-注意事项" tabindex="-1"><a class="header-anchor" href="#_3-注意事项" aria-hidden="true">#</a> 3.注意事项</h3><ol><li><p>响应内容中文乱码的解决办法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;text/html;charset=utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>端口号被占用</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>Error: listen EADDRINUSE: address already in use :::9000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>关闭当前正在运行监听端口的服务 （ 使用较多 ）</li><li>修改其他端口号</li></ul></li><li><p>HTTP 协议默认端口是 80 。HTTPS 协议的默认端口是 443, HTTP 服务开发常用端口有 3000，8080，8090，9000 等</p></li></ol><blockquote><p>如果端口被其他程序占用，可以使用 <code>资源监视器</code>找到占用端口的程序，然后使用 <code>任务管理器</code> 关闭 对应的程序</p></blockquote><h2 id="获取http请求报文" tabindex="-1"><a class="header-anchor" href="#获取http请求报文" aria-hidden="true">#</a> 获取HTTP请求报文</h2><blockquote><p>想要获取请求的数据，需要通过 request 对象</p></blockquote><table><thead><tr><th style="text-align:center;">含义</th><th style="text-align:left;">语法</th></tr></thead><tbody><tr><td style="text-align:center;">请求方法</td><td style="text-align:left;">request.method</td></tr><tr><td style="text-align:center;">请求版本</td><td style="text-align:left;">request.httpVersion</td></tr><tr><td style="text-align:center;">请求路径</td><td style="text-align:left;">request.url</td></tr><tr><td style="text-align:center;">URL 路径</td><td style="text-align:left;">require(&#39;url&#39;).parse(request.url).pathname</td></tr><tr><td style="text-align:center;">URL 查询字符串</td><td style="text-align:left;">require(&#39;url&#39;).parse(request.url, true).query</td></tr><tr><td style="text-align:center;">请求头</td><td style="text-align:left;">request.headers</td></tr><tr><td style="text-align:center;">请求体</td><td style="text-align:left;">request.on(&#39;data&#39;, function(chunk){ })<br>request.on(&#39;end&#39;, function(){ });</td></tr></tbody></table><p>注意事项：</p><ol><li>request.url 只能获取路径以及查询字符串，无法获取 URL 中的域名以及协议的内容</li><li>request.headers 将请求信息转化成一个对象，并将属性名都转化成了『小写』</li><li>关于路径：如果访问网站的时候，只填写了 IP 地址或者是域名信息，此时请求的路径为『 / 』</li><li>关于 favicon.ico：这个请求是属于浏览器自动发送的请求</li></ol><p><strong>获取请求路径以及查询字符串使用parse方法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//2. 解析 request.url</span>
    <span class="token comment">// console.log(request.url)</span>
    <span class="token comment">// 解析路径</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token comment">// 路径</span>
    <span class="token keyword">let</span> pathName <span class="token operator">=</span> res<span class="token punctuation">.</span>pathname
    <span class="token comment">// 查新字符串</span>
    <span class="token keyword">let</span> query <span class="token operator">=</span> res<span class="token punctuation">.</span>query
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;解析路径结果&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;路径名字&quot;</span><span class="token punctuation">,</span>pathName<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;查询字符串&quot;</span><span class="token punctuation">,</span>query<span class="token punctuation">)</span>
    <span class="token comment">// 响应</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 设置响应体</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/* 输出的内容
解析路径结果 Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: &#39;?keyword=1&#39;,
  query: [Object: null prototype] { keyword: &#39;1&#39; },
  pathname: &#39;/search&#39;,
  path: &#39;/search?keyword=1&#39;,
  href: &#39;/search?keyword=1&#39;
}
路径名字 /search
查询字符串 [Object: null prototype] { keyword: &#39;1&#39; }
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>获取请求路径以及查询字符串使用URL实例方法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 实例化url对象</span>
    <span class="token comment">// let url = new URL(&#39;http://127.0.0.1:9000&#39;)</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token string">&quot;http://127.0.0.1:9000&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// url 对象</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;查询字符串&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 响应</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;url new&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 设置响应体</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/*URL {
  href: &#39;http://127.0.0.1:9000/search?keyword=1&#39;,
  origin: &#39;http://127.0.0.1:9000&#39;,
  protocol: &#39;http:&#39;,
  username: &#39;&#39;,
  password: &#39;&#39;,
  host: &#39;127.0.0.1:9000&#39;,
  hostname: &#39;127.0.0.1&#39;,
  port: &#39;9000&#39;,
  pathname: &#39;/search&#39;,
  search: &#39;?keyword=1&#39;,
  searchParams: URLSearchParams { &#39;keyword&#39; =&gt; &#39;1&#39; },
  hash: &#39;&#39;
}
查询字符串 1
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取http请求报文练习" tabindex="-1"><a class="header-anchor" href="#获取http请求报文练习" aria-hidden="true">#</a> 获取HTTP请求报文练习</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>根据请求方法和请求地址来决定响应体结果
<span class="token comment">// 1.导入http模块</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 2.创建服务对象</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取请求方法</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> method <span class="token punctuation">}</span> <span class="token operator">=</span> request
    <span class="token comment">// 货啊u请求url路径</span>
    <span class="token keyword">let</span> pathName <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token string">&quot;http://127.0.0.1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">==</span> <span class="token string">&quot;GET&quot;</span> <span class="token operator">&amp;&amp;</span> pathName<span class="token punctuation">.</span>pathname <span class="token operator">==</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 解决中文乱码问题</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span>
        response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;登录页面&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">==</span> <span class="token string">&quot;GET&quot;</span> <span class="token operator">&amp;&amp;</span> pathName<span class="token punctuation">.</span>pathname <span class="token operator">==</span> <span class="token string">&quot;/reg&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span>
        response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;注册页面&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;practice&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 新建端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;服务已经启动3000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取http响应报文" tabindex="-1"><a class="header-anchor" href="#获取http响应报文" aria-hidden="true">#</a> 获取HTTP响应报文</h2><table><thead><tr><th>作用</th><th>语法</th></tr></thead><tbody><tr><td>设置响应状态码</td><td>response.statusCode</td></tr><tr><td>设置响应状态描述</td><td>response.statusMessage</td></tr><tr><td>设置响应头信息</td><td>response.setHeader(&#39;头名&#39;, &#39;头值&#39;)</td></tr><tr><td>设置响应体</td><td>response.write(&#39;xx&#39;)<br> response.end(&#39;xxx&#39;)</td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.设置响应状态码 默认200</span>
    <span class="token comment">// response.statusCode = 203</span>
    <span class="token comment">// 2.设置响应状态描述</span>
    <span class="token comment">// response.statusMessage = &quot;20333333&quot;</span>
    <span class="token comment">// 3.设置响应头</span>
    <span class="token comment">// response.setHeader(&quot;content-type&quot;, &quot;text/html;charset=utf-8&quot;)</span>
    <span class="token comment">// response.setHeader(&quot;Serve&quot;, &quot;node.js&quot;)</span>
    <span class="token comment">// response.setHeader(&quot;test&quot;, [&quot;a&quot;, &quot;b&quot;])  //  同名header设置 test: a test: b</span>
    <span class="token comment">// 4.响应体的设置</span>
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;love&quot;</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置资源类型-mime类型" tabindex="-1"><a class="header-anchor" href="#设置资源类型-mime类型" aria-hidden="true">#</a> 设置资源类型（mime类型）</h2><p>媒体类型（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>mime 类型结构：主类型 [type]/[subType] 子类型
例如： text/html text/css image/jpeg image/png application/json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>HTTP 服务可以设置响应头 Content-Type 来表明响应体的 MIME 类型，浏览器会根据该类型决定如何处理资源。</p><p>下面是常见文件对应的 mime 类型：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>html: &#39;text/html&#39;,
css: &#39;text/css&#39;,
js: &#39;text/javascript&#39;,
png: &#39;image/png&#39;,
jpg: &#39;image/jpeg&#39;,
gif: &#39;image/gif&#39;,
mp4: &#39;video/mp4&#39;,
mp3: &#39;audio/mpeg&#39;,
json: &#39;application/json&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>对于未知的资源类型，可以选择 <code>application/octet-stream</code> 类型，浏览器在遇到该类型的响应时，会对响应体内容进行独立存储，也就是我们常见的 <code>下载</code> 效果。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入http模块</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 声明一个变量</span>
<span class="token keyword">let</span> mimes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">&quot;text/html&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token string">&quot;text/css&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token string">&quot;text/javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">png</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jpg</span><span class="token operator">:</span> <span class="token string">&quot;image/jpeg&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gif</span><span class="token operator">:</span> <span class="token string">&quot;image/gif&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mp4</span><span class="token operator">:</span> <span class="token string">&quot;video/mp4&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mp3</span><span class="token operator">:</span> <span class="token string">&quot;audio/mpeg&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 创建服务对象</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取请求url的路径</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token string">&quot;http://127.0.0.1&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// 拼接文件路径</span>
    <span class="token keyword">let</span> filePath <span class="token operator">=</span> __dirname <span class="token operator">+</span> <span class="token string">&quot;/page&quot;</span> <span class="token operator">+</span> pathname
    <span class="token comment">// 读取文件 fs 异步 API</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 设置请求头</span>
            response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">// 设置响应状态码</span>
            response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">500</span>
            response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;文件读取失败&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 获取文件的后缀名</span>
        <span class="token keyword">let</span> ext <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token comment">// 获取对应的类型</span>
        <span class="token keyword">let</span> type <span class="token operator">=</span> mimes<span class="token punctuation">[</span>ext<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 匹配到了</span>
            response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> type <span class="token operator">+</span> <span class="token string">&quot;;charset=utf-8&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 对于未知的资源类型，可以选择 application/octet-stream 类型</span>
            response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 响应文件内容</span>
        response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;服务已经启动。。。。&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","httpmokuai.html.vue"]]);export{r as default};
