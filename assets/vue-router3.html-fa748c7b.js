import{_ as n,p as s,q as a,Z as t}from"./framework-9675d465.js";const e={},p=t(`<h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><ol><li>理解： 一个路由（route）就是一组映射关系（key - value），多个路由需要路由器（router）进行管理。</li><li>前端路由：key是路径，value是组件。</li></ol><h3 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用" aria-hidden="true">#</a> 1.基本使用</h3><ol><li><p>安装vue-router，命令：<code>npm i vue-router@3</code></p></li><li><p>应用插件：<code>Vue.use(VueRouter)</code></p></li><li><p>编写router配置项:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入VueRouter</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token comment">//引入Luyou 组件</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;../components/About&#39;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;../components/Home&#39;</span>

<span class="token comment">//创建router实例对象，去管理一组一组的路由规则</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">component</span><span class="token operator">:</span>About
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">component</span><span class="token operator">:</span>Home
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//暴露router</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>实现切换（active-class可配置高亮样式）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>link active<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;active&quot;</span> to<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定展示位置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_2-几个注意点" tabindex="-1"><a class="header-anchor" href="#_2-几个注意点" aria-hidden="true">#</a> 2.几个注意点</h3><ol><li>路由组件通常存放在<code>pages (views)</code>文件夹，一般组件通常存放在<code>components</code>文件夹。</li><li>通过切换，<strong>隐藏</strong>了的路由组件，默认是被销毁掉的，需要的时候再去挂载。</li><li>每个组件都有自己的<code>$route</code>属性，里面存储着自己的路由信息。</li><li>整个应用只有一个router，可以通过组件的<code>$router</code>属性获取到。</li></ol><h3 id="_3-多级路由-多级路由" tabindex="-1"><a class="header-anchor" href="#_3-多级路由-多级路由" aria-hidden="true">#</a> 3.多级路由（多级路由）</h3><ol><li><p>配置路由规则，使用children配置项：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">component</span><span class="token operator">:</span>About<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">component</span><span class="token operator">:</span>Home<span class="token punctuation">,</span>
		<span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span> <span class="token comment">//通过children配置子级路由</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span> <span class="token comment">//此处一定不要写：/news</span>
				<span class="token literal-property property">component</span><span class="token operator">:</span>News
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span><span class="token comment">//此处一定不要写：/message</span>
				<span class="token literal-property property">component</span><span class="token operator">:</span>Message
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>跳转（要写完整路径）：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">&quot;/home/news&quot;</span><span class="token operator">&gt;</span>News<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_4-路由的query参数" tabindex="-1"><a class="header-anchor" href="#_4-路由的query参数" aria-hidden="true">#</a> 4.路由的query参数</h3><ol><li><p>传递参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 跳转并携带query参数，to的字符串写法 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;/home/message/detail?id=666&amp;title=你好&quot;</span><span class="token operator">&gt;</span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
				
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 跳转并携带query参数，to的对象写法 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link 
	<span class="token operator">:</span>to<span class="token operator">=</span>&quot;<span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home/message/detail&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span>
		   <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">666</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;你好&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>&quot;
<span class="token operator">&gt;</span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>接收参数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id
$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_5-命名路由" tabindex="-1"><a class="header-anchor" href="#_5-命名路由" aria-hidden="true">#</a> 5.命名路由</h3><ol><li><p>作用：可以简化路由的跳转。</p></li><li><p>如何使用</p><ol><li><p>给路由命名：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/demo&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">component</span><span class="token operator">:</span>Demo<span class="token punctuation">,</span>
	<span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">component</span><span class="token operator">:</span>Test<span class="token punctuation">,</span>
			<span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
                      		     <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;hello&#39;</span> <span class="token comment">//给路由命名</span>
					<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;welcome&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">component</span><span class="token operator">:</span>Hello<span class="token punctuation">,</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>简化跳转：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>简化前，需要写完整的路径 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">&quot;/demo/test/welcome&quot;</span><span class="token operator">&gt;</span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>简化后，直接通过名字跳转 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;{name:&#39;hello&#39;}&quot;</span><span class="token operator">&gt;</span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>简化写法配合传递参数 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link 
	<span class="token operator">:</span>to<span class="token operator">=</span>&quot;<span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span>
		   <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">666</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;你好&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>&quot;
<span class="token operator">&gt;</span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h3 id="_6-路由的params参数" tabindex="-1"><a class="header-anchor" href="#_6-路由的params参数" aria-hidden="true">#</a> 6.路由的params参数</h3><ol><li><p>配置路由，声明接收params参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">component</span><span class="token operator">:</span>Home<span class="token punctuation">,</span>
	<span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">component</span><span class="token operator">:</span>News
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">component</span><span class="token operator">:</span>Message<span class="token punctuation">,</span>
			<span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;detail/:id/:title&#39;</span><span class="token punctuation">,</span> <span class="token comment">//使用占位符声明接收params参数</span>
					<span class="token literal-property property">component</span><span class="token operator">:</span>Detail
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>传递参数</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 跳转并携带params参数，to的字符串写法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/message/detail/666/你好<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
				
<span class="token comment">&lt;!-- 跳转并携带params参数，to的对象写法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> 
	<span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
		name:&#39;xiangqing&#39;,
		params:{
		   id:666,
                  title:&#39;你好&#39;
		}
	}<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！</p></blockquote></li><li><p>接收参数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id
$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如何指定params参数可传可不传？</p><p>在配置路由的时候，在占位的后面加上一个**？**即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/search/:keyword?&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>params参数可以传递也可以不传递，但如果传递的是空串，如何解决？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//使用undefined解决</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">keyword</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span> <span class="token operator">||</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//当传递为空串时候，加个undefined</span>
		<span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">k</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>keyword<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_7-路由的props配置" tabindex="-1"><a class="header-anchor" href="#_7-路由的props配置" aria-hidden="true">#</a> 7.路由的props配置</h3><p>作用：让路由组件更方便的收到参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">component</span><span class="token operator">:</span>Detail<span class="token punctuation">,</span>

	<span class="token comment">//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件</span>
	<span class="token comment">// props:{a:900}</span>

	<span class="token comment">//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件</span>
	<span class="token comment">// props:true</span>
	
	<span class="token comment">//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件</span>
	<span class="token function">props</span><span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">id</span><span class="token operator">:</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
			<span class="token literal-property property">title</span><span class="token operator">:</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>title
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-router-link-的replace属性" tabindex="-1"><a class="header-anchor" href="#_8-router-link-的replace属性" aria-hidden="true">#</a> 8.<code>&lt;router-link&gt;</code>的replace属性</h3><ol><li>作用：控制路由跳转时操作浏览器历史记录的模式</li><li>浏览器的历史记录有两种写入方式：分别为<code>push</code>和<code>replace</code>，<code>push</code>是追加历史记录，<code>replace</code>是替换当前记录。路由跳转时候默认为<code>push</code></li><li>如何开启<code>replace</code>模式：<code>&lt;router-link replace .......&gt;News&lt;/router-link&gt;</code></li></ol><h3 id="_9-编程式路由导航" tabindex="-1"><a class="header-anchor" href="#_9-编程式路由导航" aria-hidden="true">#</a> 9.编程式路由导航</h3><ol><li><p>作用：不借助<code>&lt;router-link&gt; </code>实现路由跳转，让路由跳转更加灵活</p></li><li><p>具体编码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//$router的两个API</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token literal-property property">id</span><span class="token operator">:</span>xxx<span class="token punctuation">,</span>
			<span class="token literal-property property">title</span><span class="token operator">:</span>xxx
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token literal-property property">id</span><span class="token operator">:</span>xxx<span class="token punctuation">,</span>
			<span class="token literal-property property">title</span><span class="token operator">:</span>xxx
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//前进</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//后退</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//可前进也可后退</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_10-缓存路由组件" tabindex="-1"><a class="header-anchor" href="#_10-缓存路由组件" aria-hidden="true">#</a> 10.缓存路由组件</h3><ol><li><p>作用：让不展示的路由组件保持挂载，不被销毁。</p></li><li><p>具体编码：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--&lt;keep-alive :include=&quot;[&#39;组件名&#39;,&#39;组件名&#39;,&#39;组件名&#39;]&quot;&gt;  缓存多个组件--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>组件名中的name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_11-两个新的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#_11-两个新的生命周期钩子" aria-hidden="true">#</a> 11.两个新的生命周期钩子</h3><ol><li>作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。</li><li>具体名字： <ol><li><code>activated</code>路由组件被激活时触发。</li><li><code>deactivated</code>路由组件失活时触发。</li></ol></li></ol><h3 id="_12-路由守卫" tabindex="-1"><a class="header-anchor" href="#_12-路由守卫" aria-hidden="true">#</a> 12.路由守卫</h3><ol><li><p>作用：对路由进行权限控制</p></li><li><p>分类：全局守卫、独享守卫、组件内守卫</p></li><li><p>全局守卫:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//全局前置守卫：初始化时执行、每次路由切换前执行</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// to:获取到你要跳转到哪个路由的信息</span>
    <span class="token comment">// from:获取到你从哪个路由而来的信息</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeEach&#39;</span><span class="token punctuation">,</span>to<span class="token punctuation">,</span>from<span class="token punctuation">)</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>isAuth<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//判断当前路由是否需要进行权限控制</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;atguigu&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//权限控制的具体规则</span>
			<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//放行</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;暂无权限查看&#39;</span><span class="token punctuation">)</span>
			<span class="token comment">// next({name:&#39;guanyu&#39;})</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//放行</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//全局后置守卫：初始化时执行、每次路由切换后执行</span>
router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span><span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;afterEach&#39;</span><span class="token punctuation">,</span>to<span class="token punctuation">,</span>from<span class="token punctuation">)</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">{</span> 
		document<span class="token punctuation">.</span>title <span class="token operator">=</span> to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title <span class="token comment">//修改网页的title</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;vue_test&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>独享守卫:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;xinwen&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;news&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span> News<span class="token punctuation">,</span>
                    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">isAuth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;新闻&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token function">beforeEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>isAuth<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//判断当前路由是否需要进行权限控制</span>
                           <span class="token comment">// ...</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件内守卫：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//进入守卫：通过路由规则，进入该组件时被调用</span>
<span class="token function">beforeRouteEnter</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">//离开守卫：通过路由规则，离开该组件时被调用</span>
<span class="token function">beforeRouteLeave</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_13-路由器的两种工作模式" tabindex="-1"><a class="header-anchor" href="#_13-路由器的两种工作模式" aria-hidden="true">#</a> 13.路由器的两种工作模式</h3><ol><li>对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值。</li><li>hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。</li><li>hash模式： <ol><li>地址中永远带着#号，不美观 。</li><li>若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。</li><li>兼容性较好。</li></ol></li><li>history模式： <ol><li>地址干净，美观 。</li><li>兼容性和hash模式相比略差。</li><li>应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。</li></ol></li></ol>`,29),o=[p];function l(i,c){return s(),a("div",null,o)}const u=n(e,[["render",l],["__file","vue-router3.html.vue"]]);export{u as default};
