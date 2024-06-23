#### 项目初始化

```js
  pnpm init
```

#### 手动添加 pnpm-workspace.yaml 文件

```yaml
packages:
  - "packages/**"
```

#### 命令行

```js
pnpm add moment -w // 全局暗转
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
#### 参考文章：

[pnpm 官网](https://pnpm.io/)

#### 工程化搭建

- ##### 安装 eslint
    pnpm add eslint -D -W
    npx eslint --init
    pnpm add @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D -w

- ##### 安装 prettier
    pnpm add prettier -D -W
    pnpm add eslint-plugin-prettier eslint-config-prettier -D -w
    
- ##### 安装tsc
    npm i typescript -g
    tsc --init

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
pnpm add -D webpack webpack-cli webpack-dev-server webpack-merge babel-loader @babel/core @babel/preset-typescript @babel/preset-react @babel/preset-env style-loader css-loader less-loader less postcss-loader postcss tailwindcss autoprefixer css-minimizer-webpack-plugin terser-webpack-plugin mini-css-extract-plugin html-webpack-plugin @types/react @types/react-dom @types/react-router-dom
```

```js
pnpm add react react-dom react-router-dom
```