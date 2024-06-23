#### 项目初始化

```js
  pnpm init
```

#### 手动添加 pnpm-workspace.yaml 文件

```yaml
packages:
  - 'packages/**'
```

#### 命令行

```js
pnpm add moment -w // 全局安装
pnpm add @mono/component --filter @mono/app // 局部安装
```

#### .npmrc

安装工作区包时，会出现错误；这是因为 pnpm 直接去注册表（npm 源）获取安装包了，找不到安装包就会报错；我们需要再.npmrc 中奖 link-workspace-packages 设置为 true;这样 pnpm 会现在工作区内找安装包，如果找不到，就回去注册表中找；

```text
link-workspace-packages = true
```

也可以在 package.json 中用 workspace:指定包使用工作区内的包

```json
{
  // ...
  "dependencies": {
    "@mono/component": "workspace:1.0.0", // 指定使用工作区内的包
    "moment": "^2.30.1"
  }
  // ...
}
```

#### 参考文章：[pnpm 官网](https://pnpm.io/)

#### 工程化搭建

- ##### 安装 eslint

  ```
    pnpm add eslint -D -W
    npx eslint --init
    pnpm add @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D -w
  ```

- ##### 安装 prettier
  ```
    pnpm add prettier -D -W
    pnpm add eslint-plugin-prettier eslint-config-prettier -D -w
  ```
- ##### 安装tsc
  ```
    npm i typescript -g
    tsc --init
  ```

#### 项目搭建

- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge
- babel-loader
- @babel/core
- @babel/preset-typescript
- @babel/preset-react
- @babel/preset-env
- style-loader
- css-loader
- less-loader
- less
- postcss-loader
- postcss
- tailwindcss
- autoprefixer
- css-minimizer-webpack-plugin
- terser-webpack-plugin
- mini-css-extract-plugin
- html-webpack-plugin
- react
- react-dom
- react-router-dom
- @types/react
- @types/react-dom
- @types/react-router-dom

```js
pnpm add -D webpack webpack-cli webpack-dev-server webpack-merge babel-loader @babel/core @babel/preset-typescript @babel/preset-react @babel/preset-env style-loader css-loader less-loader less postcss-loader postcss autoprefixer css-minimizer-webpack-plugin terser-webpack-plugin mini-css-extract-plugin html-webpack-plugin @types/react @types/react-dom @types/react-router-dom
```

```js
pnpm add react react-dom react-router-dom tailwindcss
```

#### 遇到的问题

1. .prettierrc.json 未生效

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "rangeStart": 0,
  "rangeEnd": Infinite,
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "vueIndentScriptAndStyle": true,
  "endOfLine": "auto",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**"rangeEnd": Infinite,** 项配置错误， Infinite不识别，改为一个比较大的数值9999999999

2. react-router-dom V6 redirect

```js
  {
    path: "/",
    loader: () => {
      return redirect("/home");
    },
  },
```

需要使用方法 redirect， 不能再通过'redirect'字段进行配置；

3. react-router-dom V6 lazy typescript 问题

```ts
  {
    path: "/about",
    lazy: () => import("@/pages/About")
  },
```

在ts文件中，上述lazy配置类型校验无法通过， 可以使用React的lazy和Suspense

```ts
  import React, { lazy, Suspense } from "react";

  const About = lazy(() => import("@/pages/About"))

  {
    path: "/about",
     element: (
      <Suspense fallback={<div>Loading...</div>}>
        <About></About>
      </Suspense>
    ),
  }
```

4. css module 的使用

之前引入是这个样子：

```js
import styles from './index.module.less';
```

现在需要这个样子：

```js
import * as styles from './index.module.less';
```

css module 导出模块的 default 为 undefined, 所以需要这样使用；

5. 类型声明

项目中需要单独生命的类型可以在src下创建global.d.ts进行声明， 如下：

```ts
declare module '*.module.less';
declare module '*.module.css';
```
