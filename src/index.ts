import Koa, { ParameterizedContext } from 'koa';
import bodyParse from 'koa-bodyparser';
import proxy from './proxy/index';

import router from './router';

const app = new Koa();

app.proxy = true;

app.use(async (ctx: any, next: any) => {
  await next();
  const { status } = ctx;
  if (status == 404) {
    const { url, headers, method, body } = ctx.request;
    console.log(body);
    const res = await proxy({
      method,
      headers,
      data: body,
      url
    });
    // ctx.response.headers = res.headers;
    ctx.response.status = res.status;
    ctx.response.message = res.statusText;
    ctx.response.body = res.data;
  }
})
app.use(bodyParse());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888);