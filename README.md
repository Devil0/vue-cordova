# vue-cordova

A vue project include cordova

Vue 项目内嵌Cordova搭建安卓平台的hybrid App实现demo

### 项目启动运行

1. 项目根目录下安装vue依赖
```
npm install
```

2. cordovaDemo目录下安装相关依赖
```
npm install cordova -g
cordova prepare
npm install
```
3. vue项目打包到Cordova项目www目录下
```
npm run build
```
4. cordovaDemo目录下打包生成安卓apk
```
cordova build android
```

### 配置热更新
1. 切换到cordovaDemo目录下，安装热更新：
```
npm install
```
2. 生成配置默认热更新文件,启动热更新服务
```
cordova-hcp server
```
3. 修改热更新检测URI，配置config.xml
```html
<chcp>
    <config-file url="你的项目地址/chcp.json" />
</chcp>
```
4. 打包apk并安装

```
cordova build android
```
5. 修改vue项目并重新打包上线，重启apk实现更改


项目搭建教程请参阅https://devil0.github.io/2018/07/10/Vue%E9%A1%B9%E7%9B%AE%E5%86%85%E5%B5%8CCordova/
