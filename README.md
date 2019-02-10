# schoolmates
schoolMates
# 安装koa
>npm install koa --save
#启动服务
>node app.js
supervisor app.js

`安装路由`
npm install koa-simple-router --save
const router = require('koa-simple-router');
app.use(router(_ =>{
    _.get('/',(ctx,next)=>{
        ctx.body = 'hello'
    })
}))

`静态资源文件`
npm install koa-static --save
const server = require('koa-static');

`静态资源存放的位置`
app.use(serve(__dirname + '/public'));

`将koa1的文件转换，转换器   koa-convert`
npm install koa-convert
const convert = require('koa-convert');

`模板渲染`
npm install koa-swig
npm install co
const render = require('koa-swig');
const co = require('co');

