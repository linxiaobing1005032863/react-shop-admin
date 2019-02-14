# 电商后台项目

React、Redux、React-Redux、React Router、Ant Design 简易电商后台项目

## 运行项目

- 项目根目录执行 `npm i` 安装依赖。依赖安装完毕之后，执行 `npm start` 运行项目。

- 在线 [demo](http://reactshopadmin.luohuidong.cn/)

## 电商后台模块

- [x] 登录
- [x] 用户列表
- [x] 商品
  - [x] 商品列表
  - [x] 商品页面
  - [x] 添加商品
  - [x] 编辑商品
  - [x] 商品详情
- [x] 品类
  - [x] 品类列表
  - [x] 新增品类
  - [x] 品类修改
- [x] 订单
  - [x] 订单详情
  - [x] 订单列表

## 目录结构

```
.
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── LICENCE.MD
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── public // 该文件夹定了 webpack HtmlWebpackPlugin 的模板
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── app.js
│   ├── component // 该文件夹存放着所有的复用组件
│   ├── index.js
│   ├── index.scss
│   ├── page // 该文件夹存放着所有的页面组件
│   ├── service // 该文件夹定义了各类别接口调取函数
│   ├── store.js // redux store 定义在这里
│   └── util // 该文件夹存放着工具类函数和全局配置
├── tsconfig.json
└── webpack 
    ├── loader
    ├── webpack.common.js
    ├── webpack.dev.js
    └── webpack.prod.js
```

### page 文件夹

```
.
├── 404 // 404 页面
│   ├── index.js
│   └── style.scss
├── category // 商品品类模块
│   ├── index.js // 模块对外接口
│   ├── list // 列表页面
│   ├── reducer.js // 模块中所有页面的 reducer
│   └── route.js // 模块中所有页面的 route
├── home // 首页
│   ├── actionTypes.js
│   ├── actions.js
│   ├── index.js // 首页对外接口
│   ├── reducer.js
│   └── view // 视图相关组件
├── index.js // page 文件夹对外接口
├── login // 登录页面
│   ├── actionTypes.js
│   ├── actions.js
│   ├── index.js
│   ├── reducer.js
│   └── view
├── order // 订单模块
│   ├── detail
│   ├── index.js
│   ├── list // 列表页面
│   ├── reducer.js
│   └── route.js
├── product // 商品模块
│   ├── detail // 详情页面
│   ├── editor // 新增、修改页面
│   ├── index.js
│   ├── list // 列表页面
│   ├── reducer.js
│   └── route.js
├── reducer.js // 所有页面的 reducer
├── route.js // 所有页面的 route
└── user // 用户列表模块
    ├── index.js
    ├── list // 列表页面
    ├── reducer.js
    └── route.js
```

## 项目依赖

- React 全家桶
  - [React](https://reactjs.org/)
  - [React Dom](https://www.npmjs.com/package/react-dom)
  - [Redux](https://redux.js.org/)：React 应用数据管理。
  - [React Redux](https://react-redux.js.org/)：让 Redux 在 React 上使用更方便。
  - [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
  - [React Thunk](https://github.com/reduxjs/redux-thunk)：异步 Actions 解决方案。

- [Ant Design](https://ant.design/docs/react/introduce-cn)：蚂蚁金服开源 React UI 框架

- [Axios](https://github.com/axios/axios)

- ESlint：JavsScript 代码检测
  - [ESlint](https://eslint.org/docs/user-guide/getting-started)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)：让 ESlint 识别 React 语法。
  - [babel-eslint](https://github.com/babel/babel-eslint)：让 ESlint 识别最新的 ES 语法。

- [classnames](https://github.com/JedWatson/classnames)：简单易用的 className 组合工具，实现了类似于 vue 中 class 绑定的对象语法与数组语法的功能。

- webpack
  - [webpack](https://webpack.js.org/)
  - webpack-cli
  - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md)：自动帮我们生成 index.html 文件，并且在代码中自动帮我们加入所有的资源。
  - [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)：每次打包之前，都会清空一下老的打包文件。
  - webpack-dev-server：提供一个简单的服务器，而且代码有修改之后，还会自动刷新。
  - webpack-merge：提取生产环境和开发环境相同的 webpack 配置，减少 webpack 配置代码的重复。
  - 样式处理
    - css-loader
    - style-loader
    - sass-loader
    - node-sass
  - babel
    - [babel-loader](https://webpack.js.org/loaders/babel-loader/)
    - [@babel/core](https://babeljs.io/docs/en/babel-core)
    - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
    - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
    - [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
    - [@babel/plugin-transform-arrow-functions](https://babeljs.io/docs/en/babel-plugin-transform-arrow-functions)
    - [@babel/plugin-transform-async-to-generator](https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator)
    - [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)
  - [React Hot Loader](https://github.com/gaearon/react-hot-loader)：用于 React 项目的热加载
  - mini-css-extract-plugin：打包时可将 css 提取到单独的文件。
