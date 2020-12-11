import Koa, { ParameterizedContext } from 'koa';
import bodyParse from 'koa-bodyparser';
import axios from './proxy/index';

import router from './router';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = new Koa();

// const getData = async function (config) {

// }

app.use(async (ctx: any, next: any) => {
  console.log(1);
  await next();
  const { status } = ctx;
  console.log(2);
  if (status == 404) {
    const { url, headers, method, body } = ctx.request;
    console.log(4);
    const res = await axios({url, method});
    console.log(res);
    ctx.body = res;
  }
})
app.use(bodyParse());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888);