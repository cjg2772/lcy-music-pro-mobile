# lcy-music-pro-mobile 常见问题

本文档已迁移到：<https://cjg2772.github.io/lx-music-doc/mobile/faq>

在阅读本常见问题后，仍然无法解决你的问题，请提交issue或者加企鹅群`830125506`反馈（无事勿加，入群先看群公告），反馈时请**注明**已阅读常见问题！

## LCY Music Pro中的音乐播放列表机制

1. 默认情况下，播放搜索列表、歌单列表、排行榜列表的歌曲时会自动将该歌曲添加到“我的列表”的试听列表后再播放，手动将歌曲添加到试听列表，再去试听列表找到这首歌点播放是等价的
2. 如果你想要播放多首歌曲，需要使用多选功能（若不知道如何多选请看常见问题）多选后，将歌曲这些歌曲添加到“我的列表”播放，或使用稍后播放功能播放
3. 第2条适用于搜索列表、歌单列表、排行榜列表、我的列表的歌曲
4. 对于歌单详情列表，除了可以使用第2条的方式播放外，你可以点击详情页上面的播放按钮临时播放当前歌单，或点击收藏将当前歌单收藏到“我的列表”后再去播放
5. 对于排行榜详情列表，除了可以使用第2条的方式播放外，你可以在长按排行榜名字后弹出的菜单中，播放或收藏整个排行榜，这与第四条的歌单中的播放、与收藏按钮功能一致
6. v0.11.0及之后新增了“双击列表里的歌曲时自动切换到当前列表播放”设置，默认关闭，此功能仅对歌单、排行榜有效
7. 将歌曲添加“稍后播放”后，它们会被放在一个优先级最高的特殊队列中，点击“下一曲”时会消耗该队列中的歌曲，并且无法通过“上一曲”功能播放该队列的上一首歌曲
8. 在切歌时若不是通过“上一曲”、“下一曲”功能切歌（例如直接点击“排行榜列表”、“我的列表”中的歌曲切歌），“稍后播放”队列将会被清空

## 歌曲无法试听与下载

### 所有歌曲都提示 `请求异常😮，可以多试几次，若还是不行就换一首吧。。。`

尝试更换网络，如切换到移动网络，若移动网络还是不行则尝试开关下手机的飞行模式后再试，<br>
若使用家庭网络的话，可尝试将光猫断电5分钟左右再通电联网后播放。

### 其他情况

尝试在在浏览器打开这个地址`http://ts.tempmusics.tk`，浏览器显示404是正常的，如果不是404那就证明所在网络无法访问接口服务器，对于此类情况请尝试切换其他网络。

### 通用解决方法

尝试按以下顺序解决：

1. 尝试更新到最新版本
2. 尝试切换其他歌曲（或直接搜索该歌曲），若全部歌曲都无法试听与下载则进行下一步
3. 尝试到 设置-音乐来源 切换到其他接口
4. 尝试切换网络，比如用手机开热点（所有歌曲都提示请求异常时可通过此方法解决，或等一两天后再试）
5. 若还不行请到这个链接查看详情：<https://github.com/cjg2772/lx-music-desktop/issues/5>
6. 若没有在第5条链接中的第一条评论中看到接口无法使用的说明，则应该是你网络无法访问接口服务器的问题，如果接口有问题我会在那里说明。

想要知道是不是自己网络的问题可以看看`http://ts.tempmusics.tk`能不能在浏览器打开，浏览器显示404是正常的，如果不是404那就证明所在网络无法访问接口服务器。
若网页无法打开或打来不是404，则应该是DNS的问题，可以尝试以下办法：

1. 将DNS改成自动获取试试
2. 手动把DNS改一下，不要用360的DNS，可以把DNS改成`223.6.6.6`、`8.8.8.8`

## 列表多选

长按列表将会进入多选模式。

- 例子一：想要选中1-5项，进入多选模式后，取消所有选中的内容，切换到区间，点击第一项，再点击第五项即可完成选择；
- 例子二：想要选中1项与第3项，进入多选模式后，点击第一项，再点击第三项即可完成选择；
- 例子三：想要选中当前列表的全部内容，进入多选模式后，点击全选即可完成选择（注：由于**在线列表**使用分页加载，全选只会选择目前已加载的内容，若要完整选择整个在线列表的内容则需要往下滑动将列表加载完毕再进行全选）。

注：选完后可用歌曲列表三个点的菜单操作已选的内容

## 无法打开外部歌单

不支持垮源打开歌单，请**确认**你需要打开的歌单平台是否与软件标签所写的**歌单源**对应（不一样的话请通过右上角切换歌单源）；<br>
对于分享出来的歌单，若打开失败，可尝试先在浏览器中打开后，再从浏览器地址栏复制URL地址到软件打开；<br>
或者如果你知道歌单 id 也可以直接输入歌单 id 打开。<br>

注：网易源的“我喜欢”歌单无法在未登录的情况下打开，所以你需要手动创建一个歌单后将“我喜欢”里的歌曲移动到该歌单打开

## 播放整个歌单或排行榜

播放在线列表内的歌曲需要将它们都添加到我的列表才能播放，你可以全选列表内的歌曲然后添加到现有列表或者新创建的列表，然后去播放该列表内的歌曲。

## 桌面歌词启用后不显示

安卓6及更高的版本需要给予LCY Music Pro显示悬浮窗的权限才能使用桌面歌词功能，请确认是否授予此权限（不懂怎么授予的话请自行百度“开启悬浮窗权限”）。

## 下载功能

移动端暂不支持歌曲下载功能。

## 同步功能的使用（实验性，首次使用前建议先备份一次列表）

**注意：由于同步传输时的数据是明文传输，请在受信任的网络下使用此功能！**<br>
此功能需要配合PC端使用，移动端与PC端处在同一个局域网（路由器的网络）下时，可以多端实时同步歌曲列表，使用方法：

1. 在PC端的设置-数据同步开启同步功能（这时如果出现安全软件、防火墙等提示网络连接弹窗时需要点击允许）
2. 在移动端的设置-同步-同步服务器地址输入PC端显示的同步服务器地址（如果显示可以多个，则输入与**移动端上显示的本机地址**最相似的那个），端口号与PC端的同步端口一致（**输入完毕后需要按一下键盘上的回车键使输入的内容生效**）
3. 输入完这两项后点击“启动同步”
4. 若连接成功，对于首次同步时，若两边的设备的列表不为空，则PC端会弹出选择列表同步方式的弹窗，同步方式的说明弹窗下面有介绍

#### 关于同步弹窗的说明

对于首次同步时，若两边的设备的列表不为空，则PC端会弹出选择列表同步方式的弹窗，此弹窗内的同步方式仅针对**首次同步**，<br>
第一次同步成功后，以后再同步时将会自动根据两边设备的列表内容合并同步，不信你可以在同步完成后断开两边的连接，然后在两边增删一些歌曲或列表后再同步试试看~😉

#### 连接同步服务失败的可能原因

- 此功能需要PC端与移动端都连接在同一个路由器下的网络才能使用
- 检查防火墙是否拦截了PC端的服务端口
- 路由器若开启了AP隔离，则此功能无法使用

#### 连接同步服务失败的检查

1. 确保PC端的同步服务已启用成功（若连接码、同步服务地址没有内容，则证明服务启动失败，此时看启用同步功能复选框后面的错误信息自行解决，另外若你不知道端口号是什么意思就不要乱改，或不要改得太大与太小）
2. 在手机浏览器地址栏输入`http://x.x.x.x:23332/hello` **（注：将`x.x.x.x`换成PC端显示的同步服务地址，`23332`为PC端的端口号）** 后回车，若此地址可以打开并显示 `Hello~::^-^::`则证明移动端与PC端网络已互通，
3. 若移动端无法打开第2步的地址，则在PC端的浏览器地址栏输入并打开该地址，若可以打开，则要么是被LCY Music Pro PC端被电脑防火墙拦截，要么PC端与移动端不在同一个网络下，或者路由器开启了AP隔离（一般在公共网络下会出现这种情况）

## 更新已收藏的在线歌单

该功能仅对直接从歌单详情页点“收藏”按钮收藏的歌单有效，可右击已收藏的列表名从弹出的菜单中选择“更新”使用该功能，

需要注意的是：这将会覆盖本地的目标列表，歌曲将被替换成最新的在线列表。

## 杀毒软件提示有病毒或恶意行为

本人只能保证我写的代码不包含任何**恶意代码**、**收集用户信息**的行为，并且软件代码已开源，请自行查阅，软件安装包也是由CI拉取源代码构建，构建日志：[GitHub Actions](https://github.com/cjg2772/lcy-music-pro-mobile/actions)<br>
尽管如此，但这不意味着软件是100%安全的，由于软件使用了第三方依赖，当这些依赖存在恶意行为时（[供应链攻击](https://docs.microsoft.com/zh-cn/windows/security/threat-protection/intelligence/supply-chain-malware)），软件也将会受到牵连，所以我只能尽量选择使用较多人用、信任度较高的依赖。<br>
当然，以上说明建立的前提是在你所用的安装包是从**本项目主页上写的链接**下载的，或者有相关能力者还可以下载源代码自己构建安装包。

最后，若出现杀毒软件报毒、存在恶意行为，请自行判断选择是否继续使用本软件！