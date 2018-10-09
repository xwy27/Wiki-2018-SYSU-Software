# Wiki-2018-SYSU-Software

Wiki for 2018 SYSU Software

## Wiki的编辑方式

1. 创建js/css文件

在登录了iGem账号的情况下，访问诸如如下Url(这里演示创建/statics/css/sematic.min.css)

http://2018.igem.org/Template:SYSU-Software/statics/css/semantic.min.css

这时候会看到页面为空的提示，点击edit this page，在框内粘贴文件内容，点保存，即可通过以下方式获取

http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/css/semantic.min.css&action=raw&ctype=text/css

js的ctype是 [text/javascript]

2. 创建页面

http://2018.igem.org/Team:SYSU-Software/页面名

3. 已创建的文件

**semantic.min.css** http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/css/semantic.min.css&action=raw&ctype=text/css
> 显然吧

**jquery.min.js** http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/js/jquery.min.js&action=raw&ctype=text/javascript
> 显然吧


## 子页面的书写格式

最外层为一个带有page-container样式的div，其余自便

``` html
<div class="page-container xxxx">
内容
</div>
```

## 本地测试的小trick
因为chrome不允许ajax访问文件系统，可以运行
``` python
python3 -m http.server
```
临时建立一个后端