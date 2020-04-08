const Koa = require('koa');
const router = require('./router');
const app = new Koa();

app.use(async (ctx, next) => {
  // ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
  ctx.set('Access-Control-Max-Age', 3600 * 24);
  await next();
});

app.use(router.routes()); // 启动路由

app.use(router.allowedMethods());

app.listen(8888);