# SwaggerDemo
> 一个可以直接使用的swagger demo，很省事地使用swagger

## 使用步骤
> 前提：存在node.js环境，如果没有请下载安装配置 https://nodejs.cn/download/
### 创建文件夹
1. 创建一个空文件夹，在文件夹中打开控制台，运行命令 `npm init -y`
2. 安装依赖 `npm install express swagger-ui-dist`
> 这两步之后，文件夹中会自动生成 `package.json` 和 `package-lock.json` 两个文件
4. 将本项目中的 `index.js` 导入到你的文件夹中
5. 将本项目的 `api.yaml` 导入到你的文件夹中。该文件是真正包含了API的定义的文件，将其内容换成你的API内容即可
### 运行
6. 在控制台运行命令 `node index.js`
7. 浏览器访问路径：`http://localhost:3000/docs`
