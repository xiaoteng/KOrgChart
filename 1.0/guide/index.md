## 综述

KOrgChart是模拟office组织型图表的组件，不一样的树，更多的空间。

* 版本：1.0
* 作者：腾骁
* 标签：组织、图表、树
* demo：[http://gallery.kissyui.com/KOrgChart/1.0/demo/index.html](http://gallery.kissyui.com/KOrgChart/1.0/demo/index.html)

## 组件特色
此组件由Jquery版（感谢Wesley Nolte）经过深度优化而来。

* 代码中有一个Jquery的适配层，使得我们即可以在Kissy下使用此文件也可以在简单修改后即可运行于Jquery下。
* 兼容IE6+，FF,Chrome，Safari等浏览器。
* 可以通过拖拽来移动节点，并且可以通过单击父节点来折叠节点。
* 支持动态的添加，移除节点。
* 支持节点选中事件，甚至是每个节点事件的自定义。
* 完全可自定义的节点样式。

## 初始化组件
 <pre style="background:#222;">
  <code style="color:#fff;font-size:16px;background:#222;">
    S.use('gallery/KOrgChart/1.0/index', function (S) {
         $(chartId).jOrgChart(config[,callback]);
    })
  </code>
 </pre>
 
## API说明
### 属性配置 config
nodeData [array]

* 节点集合数据，数据类型为JSON对象
* 单个节点配置
 * nodeContent [string]，节点的内容，可以是html片段。
 * collapsed [bool]，布尔值，表示是否收起节点。
 * eleStyle [string]，节点个性化的样式。
 * clientFn [fuction]，参数为当前节点，可以通过它，为节点添加事件，或者做特殊处理。
 * nodes [array]，包含的子节点对象。

chartElement [string]

* 图表元素的Id，如#chart。

dragAndDrop [bool]

* 是否支持拖放，如果要支持请在回调函数中实现拖拽，默认已实现。

preventDefault [bool]

* 是否关闭默认事件，指点击折叠节点。

onselect [function]

* 节点被选中时的回调事件，参数event,node

callback [function]

* 当拖拽设为true时的回调函数，参数Util

### 事件 events 由Util对象管理和调用
* Util.add(node)，添加节点。
* Util.remove(node)，删除节点，包括子节点。
* Util.refresh([node])，刷新指定节点，不指定参数则刷新整颗树。

##Dom结构

非常简单，只需要添加下面一行标记就OK了
 <pre style="background:#222;"><code style="color:#fff;font-size:16px;background:#222;">&lt;div id="chart"></div> </code></pre>

 