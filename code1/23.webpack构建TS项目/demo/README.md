tsc --init

npm init -y

新建 webpack.config.js

新建 index.html

新建 src

新建 src/main.ts

新建 src/App.vue

新建 src/shim.d.ts

修改 tsconfig.json
添加

```json
  "include": [
    "src/**/*"
  ]
```

npm i webpack webpack-cli -D
npm i webpack-dev-server -D

npm i ts-loader -D
npm i typescript -D

npm i vue
npm i vue-loader -D

npm i html-webpack-plugin -D

配置 webpack.config.js


//用于单独提取 CSS
npm install mini-css-extract-plugin -D