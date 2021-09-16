# vue3-web-cli

基于 Vue3 + Webpack 搭建的基础公用项目脚手架

### 项目结构

```
 |- public
 |- src  # 资源文件
     |- assets   # 静态资源
     |- components   # 公共组件
     |- App.vue
     |- main.js  # 项目入口
+ |- webpack.config.js    # webpack配置文件
```

项目是由 vue-cli 的 vue3 模板生成的

引入 webpack ，使用 webpack 构建项目，替换原有的 vue-cli-service

安装依赖

```
npm install
```

webpack 的配置变化

-   VueLoaderPlugin 的导入方式改变了
-   新增了 @vue/compiler-sfc 替换原来的 vue-template-compiler
