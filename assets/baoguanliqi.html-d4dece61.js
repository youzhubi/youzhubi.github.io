import{_ as e,p as i,q as p,s as n,R as a,t as l,Z as t,n as o}from"./framework-9675d465.js";const c="/nodejsImages/包管理器1.png",d="/nodejsImages/包管理器2.png",r="/nodejsImages/包管理器3.png",u="/nodejsImages/包管理器4.png",m={},v=n("h2",{id:"包管理器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#包管理器","aria-hidden":"true"},"#"),a(" 包管理器")],-1),b=n("h3",{id:"_1-npm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-npm","aria-hidden":"true"},"#"),a(" 1.npm")],-1),h=n("p",null,"node中的包管理局叫做npm（node package manage），npm是世界上最大的包管理库。作为开发人员，我们可以将自己开发的包上传到npm中共别人使用，也可以直接从npm中下载别人开发好的包，在自家项目中使用。",-1),k=n("p",null,"npm由以下三个部分组成：",-1),g={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},x=n("li",null,"npm CLI（Command Line Interface 即 命令行）（通过npm的命令行，可以在计算机中操作npm中的各种包（下载和上传等））",-1),f=n("li",null,"仓库（仓库用来存储包以及包相关的各种信息）",-1),y=t(`<p>npm在安装node时已经一起安装，所以只有你的node正常安装了，npm自然就可以直接使用了。可以在命令行中输入<code>npm -v</code>来查看npm是否安装成功。</p><p>例子：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>D:<span class="token punctuation">\\</span>htmlCssJs学习<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>04_包管理器<span class="token operator">&gt;</span> <span class="token function">npm</span> <span class="token parameter variable">-v</span>
<span class="token number">8.19</span>.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-package-json" tabindex="-1"><a class="header-anchor" href="#_2-package-json" aria-hidden="true">#</a> 2.package.json</h3><blockquote><p>包是一组编写好的代码，可以直接引入到项目中使用。具体来说，包其实就是一个文件夹，文件夹中会包含一个或多个js文件，这些js文件就是包中存放的各种代码。除了必要的代码外，包中还有一个东西是必须的，它叫做包的描述文件 —— package.json</p></blockquote><p>package.json顾名思义，它就是一个用来描述包的json文件。它里边需要一个json格式的数据（json对象），在json文件中通过各个属性来描述包的基本信息，像包名、版本、依赖等包相关的一切信息。它大概长成这个样子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-awesome-package&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Your Name &lt;email@example.com&gt;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>package.json是包的描述文件</li><li>node中通过该文件对项目进行描述</li><li>每一个node项目必须有package.json</li></ul><p>package.json中包含有哪些字段呢？我们来研究一下：</p><p>name（必备）</p><ul><li>包的名称，可以包含小写字母、_和-</li></ul><p>version（必备）</p><ul><li>包的版本，需要遵从x.x.x的格式</li><li>规则： <ul><li>版本从1.0.0开始</li><li>修复错误，兼容旧版（补丁）1.0.1、1.0.2</li><li>添加功能，兼容旧版（小更新）1.1.0</li><li>更新功能，影响兼容（大更新）2.0.0</li></ul></li></ul><p>author</p><ul><li>包的作者，格式：Your Name <a href="mailto:email@example.com">email@example.com</a></li></ul><p>description</p><ul><li>包的描述</li></ul><p>repository</p><ul><li>仓库地址（git）</li></ul><p>scripts</p><ul><li>自动脚本</li><li>可以自定义一些</li><li>定义以后可以直接通过npm来执行这些命令</li><li>start 和 test 可以直接通过 npm start npm test执行</li><li>其他命名需要通过npm run xxx 执行</li></ul><p>除了上述的字段外，package.json中还有一些其他字段由于暂时还未涉及，所以我们遇到的时在详细说明。</p><p>通常情况下，我们的自己创建的每一个node项目，都可以被认为是一个包。都应该为其创建package.json描述文件。同时，npm可以帮助我们快速的创建package.json文件。只需要进入项目并输入<code>npm init</code>即可进入npm的交互界面，只需根据提示输入相应信息即可。输入后根据提示输入相应信息即可：</p><p><img src="`+c+'" alt=""></p><p>也可以直接通过<code>npm init -y</code>直接通过默认选项来创建package.json：</p><p><img src="'+d+'" alt=""></p><p>总之，项目中需要一个package.json来对项目进行描述，无论你是通过何种方式（手动或命令行）在你的项目下创建一个即可。</p><h3 id="_3-安装包" tabindex="-1"><a class="header-anchor" href="#_3-安装包" aria-hidden="true">#</a> 3.安装包</h3><p>npm的最常用的功能就是包的安装，包安装就是将npm仓库中的包下载到本地中使用。安装的命令为<code>npm install &lt;包名&gt;</code>，比如，我们想在项目中安装lodash这个包，可以在项目目录下执行以下的命令：</p><p><code>npm install lodash</code></p><p><img src="'+r+`" alt=""></p><p>调用后，npm会自动联网下载包，根据网络状况不同需要等待的时间也会有所不同。安装完毕后简单看一下打印的信息，added 1 package 表示安装了一个包，audited 2 packages表示检查了两个包的安全漏洞，found 0 vulnerabilities表示发现了0个漏洞，简单说，安装成功了，这个包已经可以正常使用了。可以编写一个js文件测试一下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">//1. 在当前文件夹下 node_modules 中寻找同名的文件夹</span>
<span class="token comment">//2. 在上级目录中下的 node_modules 中寻找同名的文件夹，直至找到磁盘根目录</span>
<span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lodash&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;孙悟空&quot;</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;孙悟空&quot;</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们来看看<code>npm install lodash</code>这个命令到底做了什么：</p><p>首先我们看到的，调用后它会自动连接npm服务器，将最新的loadsh包下载到项目的node_modules目录下，如果目录不存在下载包时会自动创建。</p><p>第二，它会修改package.json文件，在dependencies字段中将刚刚下载的包设置为依赖项。第三依赖项会自动修改package-lock.json文件，帮助加速npm下载的，不用动他（发给别人的时候有这个就行了）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;lodash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.17.21&quot;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package.json中的dependencies表示当前包的依赖包，也就意味着我们的包必须有这些包才能够正常的运行。设置依赖项后，当我们在项目中执行<code>npm install</code>后，依赖项中的包会自动下载到当前项目中。设置依赖项时<code>&quot;lodash&quot;: &quot;^4.17.21&quot;</code>前边的loadsh表示包的名字，后边是包的版本。<code>&quot;^4.17.21&quot;</code>表示匹配最新的4.x.x的版本，也就是如果后期lodash包更新到了4.18.1，我们的包也会一起更新，但是如果更新到了5.0.0，我们的包是不会随之更新的。如果是<code>&quot;~4.17.21&quot;</code>，~表示匹配最小依赖，也就是4.17.x。如果是<code>&quot;*&quot;</code>则表示匹配最新版本，即x.x.x（不建议使用）。当然也可以不加任何前缀，这样只会匹配到当前版本。</p><p>也可以在安装时直接指定，要安装的包的版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> lodash@3.2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> lodash@<span class="token string">&quot;&gt; 3.2.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果不希望，包出现在package.json的依赖中，可以添加–no-save指令禁止：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> lodash --no-save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者，也可以通过-D或–save-dev，将其添加到开发依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> lodash <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第三，安装包后项目中会自动生成package.lock.json文件，这个文件主要是用来记录当前项目的下包的结构和版本的，提升重新下载包的速度，以及确保包的版本正确。</p><p>###5.生产环境与开发环境</p><ul><li>开发环境是程序员<code>专门用来写代码</code>的环境，一般是指程序员的电脑，开发环境的项目一般 <code>只能程序员自己访问</code>。</li><li>生产环境是项目<code>代码正式运行</code>的环境，一般是指正式的服务器电脑，生产环境的项目一般 <code>每个客户都可以访问</code>。</li></ul><h3 id="_6-生产依赖与开发依赖" tabindex="-1"><a class="header-anchor" href="#_6-生产依赖与开发依赖" aria-hidden="true">#</a> 6.生产依赖与开发依赖</h3><p>我们可以在安装时设置选项来区分<code>依赖的类型</code>，目前分为两类：</p><table><thead><tr><th>类型</th><th>命令</th><th><div style="width:300px;">补充</div></th></tr></thead><tbody><tr><td>生产依赖</td><td>npm i -S uniq <br> npm i --save uniq</td><td>-S 等效于 --save， <code>-S 是默认选项</code><br> 包信息保存在 package.json 中 <code>dependencies</code> 属性</td></tr><tr><td>开发依赖</td><td>npm i -D less <br> npm i --save-dev less</td><td>-D 等效于 --save-dev <br> 包信息保存在 package.json 中 <code>devDependencies</code> 属性</td></tr></tbody></table><h3 id="_7-全局安装" tabindex="-1"><a class="header-anchor" href="#_7-全局安装" aria-hidden="true">#</a> 7.全局安装</h3><p>全局安装指，直接将包安装到计算机本地，通常全局安装的都是一些命令行工具，全局安装后工具使用起来也会更加便利。全局安装只需要在执行install指令时添加-g指令即可。比如，现在我们尝试全局安装laughs组件：</p><p><img src="`+u+`" alt=""></p><p>上例中安装的是一个命令行工具，安装成功后只需要在命令行中输入ha即可在命令行中显示一个英文的笑话，当然这是一个纯粹为了演示而安装的组件。</p><p>所有的组件可以通过<code>npm uninstall xxx</code>来完成卸载。</p><blockquote><p>说明：</p><ul><li>全局安装的命令不受工作目录位置影响。</li><li>可以通过 npm root -g 可以查看全局安装包的位置。</li><li>不是所有的包都适合全局安装 ， 只有全局类的工具才适合，可以通过 查看包的官方文档来确定安装方式。</li></ul></blockquote><h3 id="_8-配置命令别名" tabindex="-1"><a class="header-anchor" href="#_8-配置命令别名" aria-hidden="true">#</a> 8.配置命令别名</h3><p>通过配置命令别名可以更简单的执行命令。</p><p>配置 package.json 中的 scripts 属性：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token comment">// 。。。</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node server.js&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node index.js&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// 。。。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成之后，可以使用别名执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run server
<span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>不过 start 别名比较特别，使用时可以省略 run，直接npm start。</p><blockquote><p>补充说明： npm start 是项目中常用的一个命令，一般用来启动项目。 npm run 有自动向上级目录查找的特性，跟 require 函数也一样。 对于陌生的项目，我们可以通过查看 scripts 属性来参考项目的一些操作。</p></blockquote><h3 id="_9-npm镜像" tabindex="-1"><a class="header-anchor" href="#_9-npm镜像" aria-hidden="true">#</a> 9.npm镜像</h3><ul><li><p>npm的仓库的服务器位于国外，有时候并不是那么的好使</p></li><li><p>为了解决这个问题，可以在我们的npm中配置一个镜像服务器</p></li><li><p>镜像的配置:</p><ul><li><p>在系统中安装cnpm（不太推荐）</p><p>​ npm install -g cnpm --registry=https://registry.npmmirror.com</p></li><li><p>彻底修改npm仓库地址（推荐）</p><p>​ npm set registry https://registry.npmmirror.com</p><ul><li><p>还原到原版仓库</p><p>​ npm config delete registry</p></li></ul></li></ul></li></ul><h2 id="其他包管理器" tabindex="-1"><a class="header-anchor" href="#其他包管理器" aria-hidden="true">#</a> 其他包管理器</h2><blockquote><p>早期的npm存在有很多问题，所以有很多的厂商尝试着开发了一些代替npm的工具，比如 yarn、pnpm。在之前，这些第三方的工具相较于npm具有很多的优势，但是随着时间的推进，npm也在进行不断的迭代，所以到今天npm和其他工具相比差距并不是非常的大，yarn下载包的速度会快一些。</p></blockquote><h3 id="_1-yarn-yet-another-resource-navigator" tabindex="-1"><a class="header-anchor" href="#_1-yarn-yet-another-resource-navigator" aria-hidden="true">#</a> 1.yarn(Yet Another Resource Navigator）</h3><blockquote><p>yarn 是由 Facebook 在 2016 年推出的新的 Javascript 包管理工具，官方网址：https://yarnpkg.com/</p></blockquote><p>特点：yarn 官方宣称的一些特点</p><ul><li>速度超快：yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。</li><li>超级安全：在执行代码之前，yarn 会通过算法校验每个安装包的完整性。</li><li>超级可靠：使用详细、简洁的锁文件格式和明确的安装算法，yarn 能够保证在不同系统上无差异的工作。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token function">yarn</span> <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在新版本的node中，可以通过corepack直接安装。首先执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换yarn版本，最新版：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>corepack prepare yarn@stable <span class="token parameter variable">--activate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换为1.x.x的版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>corepack prepare yarn@1 <span class="token parameter variable">--activate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token parameter variable">-v</span>
<span class="token function">yarn</span> init （初始化，创建package.json）
<span class="token function">yarn</span> <span class="token function">add</span> xxx（添加依赖）
<span class="token function">yarn</span> <span class="token function">add</span> xxx -D（添加开发依赖）
<span class="token function">yarn</span> remove xxx（移除包）
yarn（自动安装依赖）
<span class="token function">yarn</span> run（执行自定义脚本）
<span class="token function">yarn</span> <span class="token operator">&lt;</span>指令<span class="token operator">&gt;</span>（执行自定义脚本）
<span class="token function">yarn</span> global add（全局安装）
<span class="token function">yarn</span> global remove（全局移除）
<span class="token function">yarn</span> global bin（全局安装目录）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-yarn镜像" tabindex="-1"><a class="header-anchor" href="#_2-yarn镜像" aria-hidden="true">#</a> 2.yarn镜像</h3><p>配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>恢复：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> config delete registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-pnpm" tabindex="-1"><a class="header-anchor" href="#_3-pnpm" aria-hidden="true">#</a> 3.pnpm</h3><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> init（初始化项目，添加package.json）

<span class="token function">pnpm</span> <span class="token function">add</span> xxx（添加依赖）

<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> xxx（添加开发依赖）

<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-G</span> xxx（添加全局包）

<span class="token function">pnpm</span> install（安装依赖）

<span class="token function">pnpm</span> remove xxx（移除包）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-pnpm镜像配置" tabindex="-1"><a class="header-anchor" href="#_4-pnpm镜像配置" aria-hidden="true">#</a> 4.Pnpm镜像配置</h3><p>配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>恢复：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> config delete registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,96);function _(q,j){const s=o("ExternalLinkIcon");return i(),p("div",null,[v,b,h,k,n("ol",null,[n("li",null,[a("npm网站 （通过npm网站可以查找包，也可以管理自己开发提交到npm中的包。"),n("a",g,[a("https://www.npmjs.com/"),l(s)]),a("）")]),x,f]),y])}const D=e(m,[["render",_],["__file","baoguanliqi.html.vue"]]);export{D as default};
