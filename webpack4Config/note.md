### 说明
1. 这是一份非常基础的webpack4配置文档，包括：css分割 / sass编译 / postcss预编译 / html分割 / dist编译前清除 / 
   
2. package.json 相关代码：
   `"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production",
    "dev": "webpack --mode development"
  },`

3. .babelrc 相关代码：
    `// 独立balel，便于维护
    {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ],
      "plugins": [
        // "transform-runtime" // 生产环境引入
        "@babel/plugin-syntax-dynamic-import"
    ]
    }`
4. .gitignore 相关代码： 
    .DS_Store
    `node_modules/
    /dist/
    /build/
    /resource/
    /test/
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    /test/unit/coverage/
    /test/e2e/reports/
    selenium-debug.log
    package-lock.json
    /shan

    # Editor directories and files
    .idea
    .vscode
    *.suo
    *.ntvs*
    *.njsproj
    *.sln
    *.history`
  
  