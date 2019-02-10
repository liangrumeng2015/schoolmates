const Koa = require('koa');
const router = require('koa-simple-router');
const serve = require('koa-static');
const path = require('path');
const render = require('koa-swig');
const co = require('co');
const app = new Koa();


app.context.render = co.wrap(render({
    root: path.join(__dirname, './views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',        // 后缀为html
    writeBody: false
  }));

// app.use(ctx=>{
//     ctx.body = 'Hello koa2';
// });


app.use(router(_ =>{
    _.get('/',(ctx,next)=>{
        ctx.body = 'hello'
    })
    _.get('/index',async (ctx,next)=>{
        ctx.body = await ctx.render('index.html');
    })
}));

// 静态资源文件,默认取的是public下面的文件
app.use(serve(__dirname + '/public'));


// 启动服务
app.listen(3000,()=>{
    console.log('server is running');
});