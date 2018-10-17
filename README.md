# Wiki-2018-SYSU-Software

Wiki for 2018 SYSU Software
## 确定不改的内容
- Collaboration
- 

## Wiki的编辑方式

1. 创建js/css/html文件

在登录了iGem账号的情况下，访问诸如如下Url(这里演示创建/statics/css/sematic.min.css)

http://2018.igem.org/Template:SYSU-Software/statics/css/semantic.min.css

这时候会看到页面为空的提示，点击edit this page，在框内粘贴文件内容，点保存，即可通过以下方式获取

http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/css/semantic.min.css&action=raw&ctype=text/css

js的ctype是 [text/javascript]

http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/html/a.html&action=raw&ctype=text/html

[text/html]
2. 创建页面

http://2018.igem.org/Team:SYSU-Software/页面名

## 子页面的书写格式

最外层为一个带有page-container样式的div，其余自便

``` html
<div class="page-container xxxx">
    内容
    <div class="next-page-identify" data-value="2"></div> <!-- 这个是跳页标记 -->
</div>
```

## 本地测试的小trick
因为chrome不允许ajax访问文件系统，可以运行
``` python
python3 -m http.server
```
临时建立一个后端

## 可以搬运的文字内容

**Attenion: Collaboration 部分XJTU-China取代原本的SYSU-China!!!**
**Background有新版本! 但还没有在共享文档中更新! **

- Project(~~Description, Design, Contribution, feature~~, imporve)
- Model(Overview, Recommendation System)
- Collaboration(~~XMU-China, SCUT-China, WHU-China~~, XJTU-China)
- Medal(~~Overview, Bronze, Silver, Gold~~)
- Team (~~Overview~~, Team members, advisors, instructors, ~~Notebooks~~)
- Attributions(~~Overview, Group structure, Attribution in project, Acknowledgement~~)
- Safety(~~wet-lab safety, dry-lab safety~~)
- Human Practice(~~All~~)
- Validation(All)


## 已经搬运的文字内容

- Project(Description, Design, Contribution)
- Collaboration(~~XMU-China, SCUT-China, WHU-China, ~~）
- Medal(Overview, Bronze, Silver, Gold)
- Team (Overview,Notebooks)
- Attributions(Overview, Group structure, Attribution in project, Acknowledgement)
- Safety(wet-lab safety, dry-lab safety)
- Human Practice(All)


## 已审查
- Project(Description, Design, Feature, Technique, Contribution, Improvement, Validation)
- Model(Overview, Recommendation System, Simulation for Circuit, EA, Ref)
- HP(Overview, silver, gold, public engagement)
- Collaboration(XMU, SCUT, WHU, XJTU)
- Interlab(all)
- Team(overview)
- Safety(all)
- Attribution(all)
- Team( ** Except Team members **)
