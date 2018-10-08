# Wiki-2018-SYSU-Software

Wiki for 2018 SYSU Software

## 关于 Data

由于 wiki 不支持 json，采用了在 data.js 中声明变量后再引用变量

现在 index.html 中的 data 采用此方式加载

## Wiki的编辑方式

1. 创建js/css文件

在登录了iGem账号的情况下，访问诸如如下Url(这里演示创建/statics/css/sematic.min.css)

http://2018.igem.org/Template:SYSU-Software/statics/css/semantic.min.css

这时候会看到页面为空的提示，点击edit this page，在框内粘贴文件内容，点保存，即可通过以下方式获取

http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/css/semantic.min.css&action=raw&ctype=text/css

js的ctype是 [text/javascript]

2. 创建页面

http://2018.igem.org/Team:SYSU-Software/页面名

