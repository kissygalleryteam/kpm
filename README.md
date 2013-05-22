## kpm

这个库主要用于创建issue

- [youtube演示视屏](http://youtu.be/quMgyoO8zB8) 无广告、高清，需要翻墙
- [youku演示视屏](http://v.youku.com/v_show/id_XNTYwMzgxNDI4.html)
- [快速入门](http://gallery.kissyui.com/quickstart)
- [目录规范](http://gallery.kissyui.com/guide)

## kissy gallery入住流程

1. 创建目录结构
1.1 安装yeoman和grunt `npm install yo grunt-cli -g`
1.2 安装generator-kissy-gallery `npm install generator-kissy-gallery -g`
1.3 初始化目录 `yo kissy-gallery 1.0`

2. 写代码和demo: http://gallery.kissyui.com/guide

3. 打包代码 `grunt` ,如果需要可以修改gruntfile.js配置文件

4. 代码提交到github上

5. kissygalleryteam/kpm/issues/new ，通知galleryteam fork你的代码库

6. galleryteam fork你的代码后，会发布代码，步骤5创建的issue会有消息回复

完成，有问题，请联系：承玉、剑平、翰文

## 升级过程

1. 修改代码

2. 打包 `grunt`

3. 提交到github

4. 发送pull request

pull request被merge后，会发布代码，上面的issue会有发布状态说明
如果没有收到，说明发布失败

![kissy gallery组件发布流程](http://img02.taobaocdn.com/tps/i2/T1dBKnXtNgXXaGUE2E-714-565.png)

### 流程关键点说明

在kpm下建一个issue的目的：

* 通知kissygalleryteam的管理员fork你的组件库
* 当你的组件发布成功后，系统会反馈发布消息到你建的issue上

issue的内容可以参考：[velocity组件](https://github.com/kissygalleryteam/kpm/issues/5)，正文带上你用户名下的组件库路径。

issue标题统一为:add module 组件名称。

发布成功后，系统返回的消息类似如下：

![发布消息](http://img03.taobaocdn.com/tps/i3/T1jc9mXpNiXXbmmmfY-272-368.png)

*你必须在组件的abc.json中写上author的name和email，不然会发布失败！*

### 旧组件迁移说明

旧的组件管理员已经在kissygalleryteam下创建好组件库，你只需要fork到自己的账户中，然后在kpm上建一个issue，后面流程保持一致。
