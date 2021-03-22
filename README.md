# demo-project

> An electron-vue project

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[45a3e22](https://github.com/SimulatedGREG/electron-vue/tree/45a3e224e7bb8fc71909021ccfdcfec0f461f634) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

## Setup

Create a new electron-vue project with vue-cli:

```bash
vue init simulatedgreg/electron-vue my-project

cd my-project
yarn
yarn run dev
```

## To Use

```shell
# Make sure you have nodejs and npm in your computer
cd demo-project
# Install yarn globally
npm install -g yarn
# Install dependencies of the project
yarn
# Run the app
npm run serve

# If you want to test certain functions, import them in /src/static/test.js and run
npm run test:data
```

## Trivia

- [Element UI](https://element.eleme.io/#/zh-CN)

- List of encodings that Node.js supports:

    - ascii
    - base64
    - hex
    - ucs2/ucs-2/utf16le/utf-16le
    - utf8/utf-8
    - binary/latin1 (ISO8859-1, latin1 only in node 6.4.0+)

- Get the list of all keys of a js object

```js
Object.keys({})
```

- Set the font family

```sass
html
  font-family: "Microsoft YaHei",微软雅黑,"Microsoft JhengHei",华文细黑,STHeiti,MingLiu,serif
```

- Remove images in el-uploader

```vue
<template>
  <el-upload
          ref="uploader"
          action="#"
          list-type="picture-card"
          :auto-upload="false">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img class="el-upload-list__item-thumbnail" :src="file.url" alt=""/>
      <span class="el-upload-list__item-actions">
        <span class="el-upload-list__item-delete" @click="handleRemove(file)">
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
  </el-upload>
</template>

<script>
handleRemove(file) {
  const fileList = this.$refs.uploader.uploadFiles
  const index = fileList.findIndex( fileItem => {
    return fileItem.uid === file.uid
  })
  fileList.splice(index, 1)
}
</script>
```

## Bugs & Fix
- &lt;el-table&gt; doesn't work
```js
let whiteListedModules = ['vue', 'element-ui']
```

- Process is not defined
```js
// webpack.renderer.config.js
/*
// Replace below
new HtmlWebpackPlugin({
  // ...
})
 */

new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.resolve(__dirname, '../src/index.ejs'),
  minify: {
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true
  },
  templateParameters(compilation, assets, options) {
    return {
      compilation: compilation,
      webpack: compilation.getStats().toJson(),
      webpackConfig: compilation.options,
      htmlWebpackPlugin: {
        files: assets,
        options: options
      },
      process,
    };
  },
  nodeModules: process.env.NODE_ENV !== 'production'
    ? path.resolve(__dirname, '../node_modules')
    : false
})
```

```js
// webpack.web.config.js
/*
// Replace below
new HtmlWebpackPlugin({
  // ...
})
 */

new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.resolve(__dirname, '../src/index.ejs'),
  templateParameters(compilation, assets, options) {
    return {
      compilation: compilation,
      webpack: compilation.getStats().toJson(),
      webpackConfig: compilation.options,
      htmlWebpackPlugin: {
        files: assets,
        options: options
      },
      process,
    };
  },
  minify: {
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true
  },
  nodeModules: false
})
```

- @click not working with custom component

Event click was first passed to the child component. If it's not captured inside, it's gone. Register handler inside or use @click.native
