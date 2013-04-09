KISSY Gallery 工具正在开发过程中，在此介绍 **过渡的gallery组件开发规范和注意事项**：


0) **assets 统一使用 UTF-8**;

1) github上 Gallery 目录结构说明，这些目录暂时都需要手动建立:

gallery 根目录下, 提交各个组件目录, 拿 offline 举例，具体的可以参考[example](https://github.com/kissygalleryteam/offline "例子") :


```
offline  //组件名
|        gallery
|        | -- offline           // 组件目录名, 小写, 多字符用 – 分隔
|        |          |-----1.0    // 版本名字, 两个数字表示 x.x
|        |          |         |---------demo                         // 用于存放demo的文件夹
|        |          |         |---------doc                          // 用于存放组件api文档的文件夹
|        |          |         |---------plugin                       // 用于存放组件的插件，可以没有
|        |          |         |---------guide                        // 用于介绍组件入门的文件夹
|        |          |         |              |--------index.md       // 用于介绍组件入门的文档
|        |          |         |---------index.js                     // 组件入口文件
|        |          |-----README.md                                  	// 用于介绍组件信息
|        |          |-----build.json                                 // 用于组件打包配置
```
开发时写的demo, 需要头部配置:

    <script>
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
    </script>


add时,

```
KISSY.add('gallery/pagination/1.0/offline', function(S, Template) {
},{requires:["template"]});
```

use时, 

``` 
KISSY.use('gallery/pagination/1.0/offline', function(S, P) {
});
```


3)	还有几个注意点:

  3.0) gallery-build 打包目录;
  
  3.1) 打包规则:

  - 由于工具还没开发完成，暂时还是使用之前的ant打包，所以各个组件里目前还需要编写个build.xml文件来操作，可以参考[example](https://github.com/kissygalleryteam/offline/blob/master/1.0/build.xml "例子")

  3.2) 提交新组件时:
  
  - 务必gallery 中组件使用 1.2.0 Loader 的写法。
  - 提交到 KISSY Gallery 请参考上面的目录结构。
  

