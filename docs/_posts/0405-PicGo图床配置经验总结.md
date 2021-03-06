---
title: PicGo图床配置经验总结
date: 2022-04-26 02:47:47
permalink: /pages/268489/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: TommyZeng
  link: https://github.com/tommyzeng777
---

## 前言
picgo是一款开源的图片上传软件，专门负责连通客户与其存储图片的服务器，不过可惜的是picgo的稳定性并不是很强，配置过程中也有很多误区和奇怪的错误，这篇文章就来分享一下我的配置经验，给想要配的人一个参考
<!--more-->

::: danger
最近不知道因为什么原因，防火墙似乎有变动，会导致Git和PicGo等软件无法链接GitHub，造成各种因为链接不通畅而产生的错误，解决方法很简单

1. 访问[IPaddress](https://ipaddress.com/website/github.com)查询ip

2. 把`140.82.112.4 github.com`字段添加进电脑的`Host`文件，即可正常使用
:::

<br>

直接安装[软件下载地址](https://github.com/Molunerfinn/PicGo)

## 配置教程

### 预准备

安装完软件后建议先先安装`picgo-plugin-github-plus`插件
> 这个插件非常猛,可以双向同步GitHub仓库的图片,原版的只能存图不能删图

安装方法: 使用git bash客户端输入npm代码安装,源根据自己网络情况而定

```bash
cnpm install picgo-plugin-github-plus --save --registry=https://registry.npm.taobao.org
```
```bash
npm install picgo-plugin-github-plus --save
```

安装完成后即可在picgo里找到github plus插件
<img src="https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021841288.png" style="zoom: 50%;" />

在picgo设置里找到并勾选,就会显示在图床设置中了
<img src="https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021843374.png" style="zoom: 50%;" />

### 图床配置

<img src="https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021840122.png" style="zoom:50%;" />
可以看到依次有六个选项

#### repo
repo是repository的缩写也就是仓库路径,首先是要去GitHub建立一个仓库
<img src="https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021848249.png" style="zoom:33%;" />

记得一定要选择public选项, 不然没法使用里面的图片
> (所以这意味着所有图片别人都可以从你的仓库访问, 一定要注意上传的图片的脱敏性, 预防隐私泄露)

![](https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021850915.png)

新建好仓库后repo填写`"你的Githubid"/"仓库名"`即可

#### branch
注意:这里再2020年之后就必须填成`main`, 因为GitHub把默认分支名字改了(因为master这个名字被网友喷了???)
<img src="https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021903260.png" style="zoom: 67%;" />



#### token

这个是重点,到GitHub设置里,点击头像找到setting
<img src="https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021906838.png" style="zoom: 50%" />



**左侧往下找到开发者设置**
<img src="https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021905192.png" style="zoom: 50%;" />



**自己新建一个token密钥**

<img src="https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021910648.png" style="zoom: 50%;" />

只需要注意这几个选项即可

<img src="https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021912757.png" style="zoom: 50%;" />

随后点击最下方`generate token`即可生成

> 注意代码只会显示一次, 所以最好备份好, 否则只能再建一个token



#### path

这个是存照片的路径, 这里有个报错天坑,网上没什么人提到

一定要事前通过Git把要的文件夹创建好(不能是空的, GitHub空文件夹=不存在,赛个txt也好)

具体教程参考这篇文章[Git版本管理软件使用心得 - Tommy's Blog (tommyzeng.com)](https://tommyzeng.com/2022/03/05/Git版本管理软件使用心得/)



当建好后img文件夹后, 就可以写上,这样才能上传成功,否则一直报错,PicGo没权限建文件夹

> 反正原版GitHub插件不可以,这个plus插件理论上权限更多,还没测试,反正多做一步省的报错

```
img/
```



#### CustomUrl

这个是自定义图片连接的, 推荐使用jsdeliver的CDN服务加速, 能大幅提高大陆的访问速度

```
https://testingcf.jsdelivr.net/gh/"你的GitHubid"/"仓库名字"
```



#### origin

选择你的图床平台即可, 这里不推荐使用gitee作为图床,gitee个人版不能上传`1mb`以上的图片,这平台实在是有点坑





## 插件安装

app内安装插件大概率会卡安装中,建议使用npm指令安装



`picgo-plugin-github-plus` Github插件

```bash
cnpm install picgo-plugin-github-plus --save --registry=https://registry.npm.taobao.org
```

`picgo-plugin-compress`图片压缩插件

```bash
cnpm install picgo-plugin-compress --save --registry=https://registry.npm.taobao.org
```



## 推荐设置

### 常规设置

<img src="https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021922821.png" style="zoom: 50%;" />

推荐把更新助手关了,这个貌似会重置配置文件, 导致突然自己的配置文件没了

时间戳重命名推荐打开, 因为时间久了不可避免会有名字重复的图片,这样子引用图片会出bug

自启开着无妨,速度也不会被拖慢

> 底下有个上传后自动复制url的功能也推荐打开, 非常实用



<img src="https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021924363.png" style="zoom: 50%;" />

修改快捷键自己可以设置一个, 很多人第一次可能不懂这个快捷键怎么用,确实有点阴间,这个是上传剪贴板内的图片的,当图片位于剪贴板第一位时按下即可上传并自动复制url



### 配置文件路径

```
C:\Users\'你的用户名'\AppData\Roaming\picgo
```

找到文件名叫`data.json`就是配置文件,建议自己设置好设置后复制一份放好, 实测picgo有时会莫名其妙重置图床设置

