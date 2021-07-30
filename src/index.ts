import Koa, { ParameterizedContext } from 'koa';
import bodyParse from 'koa-bodyparser';
import cors from '@koa/cors';

import proxy from './proxy/index';

import router from './router';

const app = new Koa();

app.use(cors({
  origin: '*',
  exposeHeaders: ['Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type, Authorization', 'Accept', 'Origin', 'X-Requested-With']
}));
app.use(async (ctx: any, next: any) => {
  if (ctx.method === 'OPTIONS') {
    ctx.body = '';
  }
  await next();
})
app.use(proxy);
app.use(bodyParse());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888);