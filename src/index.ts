import Koa, { ParameterizedContext } from 'koa';

import http from 'http';

import router from './router';
import { resolve } from 'url';

const baseURL = 'testadminloan2.518dai.com';

const app = new Koa();

const proxy = function(options: any) {
  return new Promise<string>((resolve, reject) => {
    const httpRequest = http.request(options, (res: any) => {
      let _data = '';
      res.on('data', (chunk: any) => {
        _data += chunk;
      });
      res.on('end', () => {
        console.log(options);
        console.log(_data);
        resolve(_data);
      })
    })
    httpRequest.end();
  })
}

app.use(async (ctx: any, next: any) => {
  await next();
  const { status } = ctx;
  if (status == 404) {
    const options = {
      protocol: 'http:',
      host: baseURL,
      method: ctx.request.method,
      path: ctx.request.url,
      header: ctx.request.header
    };
    await proxy(options).then((res: any) => {
      ctx.response.body = res;
    });
  }
})
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888);