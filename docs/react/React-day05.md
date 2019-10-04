# React-day05

## 环境配置

### Java环境配置

- 安装 `jdk-8u161-windows-x64.exe` (32位系统请选择32位的版本) 安装到默认路径
- 添加系统环境变量 `JAVA_HOME` ,值为 `C:\Program Files\Java\jdk1.8.0_161`
- 修改系统环境变量`Path`, 在`Path` 之后新增`%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;` 
- 新建**系统环境变量** `CLASSPATH`, 值为 `.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`
- 保存所有的系统环境变量, 同时退出系统环境变量配置窗口, 然后运行cmd命令行工具, 输入`javac`, 如果能出现javac的命令选项, 就表示配置成功



### Node.js环境配置

(略过)



### C++环境配置

大多数情况下操作系统自带C++环境, 不需要手动安装C++环境(略过)

如果运行报错, 则需要手动安装visual studio中的C++环境



### 安装Git环境

Git安装完毕后, 会自动配置到系统环境变量中; 可以通过运行 `git --version` 来检查是否正确安装和配置了Git的环境变量



### 安装Python环境

1. 注意: 安装Python的时候, 只能安装2.x的版本, 注意勾选安装界面上的 `Add Python to path`, 这样才能自动将Python安装到系统环境变量中
2. 安装完毕后, 可以在命令行中运行 `python` , 检查是否成功安装了python



### Android环境配置

[离线下载地址1](http://mirrors.neusoft.edu.cn/android/repository/)

[离线下载地址2](http://mirrirs.zzu.edu.cn/android/repository/)

Android SDK Tools安装

- 安装 `installer_r24.4.1-windows.exe` 到 `c:\\Android`下面
- 打开安装的目录, 将`platform-23_r03`(react-native必须依赖这个)赋值到`platforms`文件夹下, 解压到当前文件夹下后, 删除压缩文件
- 解压`platform-tools_r27.0.1-windows`, 到`C:\\Android`下面
- 解压`build-tools_r23.0.1-windows.zip(react-native必须依赖这个)`,`build-tools_r26-windows.zip(weex必须依赖这个)`, 并将解压出来的文件夹, 分别改名为版本`23.0.1`, `26.0.0`; 在安装目录中新建文件夹`build-tools`, 并将改名为版本号之后的文件夹, 放到新创建出来的 `build-tools`文件夹下
- 在安装目录下, 新建`extras`文件夹, 在`extras`文件夹下新建`android`文件夹;解压`m2responsitory`文件夹, 放到新建的`extras ->android`文件夹下
- 打开Android SDK Manager 软件, 点开Android 8.0.0(API 26), 下载SDK Platform 26(因为网站上没有这个文件, 我们无法下载解压,只能在线安装)
- 配置安装环境变量: 在系统环境变量中新建`ANDROID_HOME`, 值为`C:\\Android`, 然后再系统环境变量`Path`中添加`%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;`



### React Native快速上手

- 安装完node后建议 设置npm镜像 以加速后面的进程(或者科学上网工具). 注意: 不要使用cnpm! cnpm安装的模块路径比较奇怪, packager不能正常识别

  `npm config set registry https://registry.npm.taobao.org --global`

  `npm config set disturl https://npm.taobao.org/dist --global`

- Yarn, React Native 的命令行工具(react-native-cli)

  Yarn是Facebook提供的替代npm的工具, 可以加速node模块的下载. React Native的命令行工具用于执行创建, 初始化, 更新项目, 运行打包服务(packager)等任务

  `npm install -g yarn react-native-cli`

  安装完yarn后同理也要设置镜像源

  ​	`yarn config set registry https://registry.npm.taobao.org --global`

  ​	`yarn config set disturl https://npm.baobao.org/dist --global`

- 运行`react-native init AwesomeProject`创建React-Native项目

- 运行`cd AwesomeProject`切换到项目根目录上, 运行`adb devices`来确保有设备连接到了电脑上

- 运行吓一跳命令之前, 要确保有设备连接到了电脑上, 可以运行`adb devices`查看当前接入的设备列表, 打包好的文件, 放到了想项目文件的`android\app\build\outputs\apk`目录下

- 运行`react-native run-android`打包编译安卓项目, 并部署到模拟器或开发机中



注意: AppRegistry是JS运行所有React Native应用的入口

通过StyleSheet.create创建的样式, 凡是设置宽度大小等, 不能加px单位, 只能写成数字

在react-native中默认flex布局, 并且flex-direction默认为column

Router能够让我们的整个应用程序拥有路由

Scene是一个场景, 专门用来渲染组件的, 每个场景都必须有一个key, 这个key是唯一标识场景用的. 将来我们这些key都会保存在Actions中, 然后我们可以通过Actions.key()跳转到相应的key对应的场景去

在react-native中不能使用html标签,比如div,p,span,h1...

我们只能使用react-native中帮我们封装的组件

(常用组件)

- View 
- Text 
- Button 
- TextInput 
- Image   网络图片需要设置宽高
- ScrollView   父容器组件需要给个固定的高度
- ListView 
- ActivityIndicator



#### 配置路由

react-native-flux

`npm i react-native-router-flux -s`



### Weex快速上手

- 安装依赖: Weex官方提供了weex-toolkit的脚手架工具来辅助开发和调试. 首先, 你需要最新稳定版的Node.js和Weex CLi
- 运行`npm install -g weex-tookit`安装Weex官方提供的`weex-toolkit`脚手架工具到全局环境中
- 运行`weex create project-name`初始化Weex项目
- 进入到项目的根目录中, 打开cmd窗口, 运行`weex platform add android`安装android模板, 首先安装模板时, 等待时间较长, 建议fq安装模板
- 打开`android studio`中的 安卓模拟器, 或者将启用USB调试的真机连接到电脑上, 运行`weex run android`, 打包部署weex项目
- 部署完成, 查看项目效果
- 打包之后的apk文件在项目的`platforms\android\apk\build\outputs\apk`目录下











































