KISSY Gallery 工具正在开发过程中，**以下规范内容为过渡用**：

##目录规范

组件目录结构说明，这些目录暂时都需要手动建立，有了工具后会自动创建。

请手动创建一个名为<code>gallery</code>的目录，然后在其下创建组件目录（git版本控制）

拿 offline 举例，具体的可以参考[example](https://github.com/kissygalleryteam/offline "例子") :

```
offline           // 组件目录名, 小写, 多字符用 – 分隔
|          |-----1.0    // 版本名字, 两个数字表示 x.x
|          |         |---------demo                         // 用于存放demo的文件夹
|          |         |---------doc                          // 用于存放组件api文档的文件夹
|          |         |---------plugin                       // 用于存放组件的插件，可以没有
|          |         |---------build                       // 用于存放组件打包后的文件
|          |         |---------guide                        // 用于介绍组件入门的文件夹
|          |         |              |--------index.md       // 用于介绍组件入门的文档
|          |         |---------index.js                     // 组件入口文件
|          |         |---------module.js                    // 组件combo配置
|          |-----README.md                                  	// 用于介绍组件信息
|          |-----package.json                                 // 用于组件打包配置
```

### 规范说明

* 统一使用 UTF-8编码；
* 模块起始必须是gallery名，比如"gallery/offline/1.0/index"
* index.js为组件入口文件，必须存在
* package.json为组件构建配置，必须存在（有工具后会自动生成）
* 组件的教程放在<code>guide</code>目录下，必须是<code>md</code>文件，不能是静态html页面！
* 可以在package.json中指定打包发布模块
* 打包后的文件会放在<code>build</code>目录中，发布到cdn上的只是build目录下的文件
* module.js为组件combo配置，日后工具会自动生成
* README.md必须存在，简单介绍下组件信息！

## 组件打包临时方案

TODO:待补充

## 组件发布

我们需要把组件发布到淘宝cdn上，方便用户直接引用，kissy1.3配置了<code>gallery</code>包指向，淘宝cdn的地址，这样用户不需要额外配置gallery的包路径。

目前工具没搞好，组件发布，请单独联系承玉或剑平

## 组件调试

### 请将组件代码clone在自己创建的gallery目录下。

组件初始化脚本demo：

```javascript
    KISSY.use('gallery/offline/1.0/index',function (S,Offiline) {
        var a = new Offiline();
    });
```

<code>use()</code>加载的模块命名起始为gallery，缺少这个层级，在本地调试时就会报模块找不到的错误。

### 配置gallery包

```javascript
    KISSY.config({
      packages:[
        {
          name:"gallery",
          tag:"20111220",
          path:"../../../",  // 开发时目录, 发布到cdn上需要适当修改
          charset:"utf-8"
        }
      ]
    });
```

这样就可以使用本地源码文件进行调试了。

## 如何组织组件代码

一个组件模块代码如下

```javascript
/**
 * @fileoverview 文件用户
 * @author 作者的
 **/
KISSY.add('gallery/uploader/1.4/plugins/imageZoom/imageZoom',function(S, Node, Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * @name ImageZoom
     * @class 图片放大器
     * @since 1.4
     * @constructor
     * @extends Base
     */
    function ImageZoom(config) {
        var self = this;
        //调用父类构造函数
        ImageZoom.superclass.constructor.call(self, config);
    }
    S.extend(ImageZoom, Base, /** @lends ImageZoom.prototype*/{

    }, {ATTRS : /** @lends ImageZoom*/{

    }});
    return ImageZoom;
}, {requires : ['node','base']});
/**
 * changes:
 * 明河：1.4
 *           - XXXX
 */
```

use时

``` 
KISSY.use('gallery/uploader/1.4/plugins/imageZoom/imageZoom', function(S, ImageZoom) {
   new ImageZoom();
});
```

## 代码规范


  

