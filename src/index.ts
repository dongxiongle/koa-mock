import Koa, { ParameterizedContext } from 'koa';
import bodyParse from 'koa-bodyparser';
import { createProxyMiddleware } from 'http-proxy-middleware';

import router from './router';
import { resolve } from 'url';

const target = 'https://testadmin03.518dai.com';

const app = new Koa();

app.use(async (ctx: any, next: any) => {
  await next();
  const { status } = ctx;
  console.log(status);
  if (status == 404) {
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    })
  }
})
app.use(bodyParse());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888);