import Koa, { ParameterizedContext } from 'koa';

import axios, { AxiosRequestConfig } from 'axios';

import http from 'http';

import router from './router';

const baseURL = 'http://testadminloan2.518dai.com';

const app = new Koa();

const getList = function(options: any) {
  const promise = new Promise(function(resolve, reject) {
    console.log(2);
    let req = http.request(options);
    req.on('response', (res: any) => {
      let data = '';
      res.on('data', (chunk: any) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      })
    });
    req.end();
  });
  return promise;
}

app.use(async (ctx: ParameterizedContext, next) => {
  await next();
  const { status } = ctx;
  if (status == 404) {
    const { request } = ctx;
    request.path = 'http://testadminloan2.518dai.com' + request.url;
    // request.header.connection = 'keep-alive';
    console.log(request);
    // await axios({
    //   method: request.method,
    //   url: baseURL + request.url,
    //   headers: request.header
    // } as AxiosRequestConfig).then((res: any) => {
    //   ctx.body = res;
    // }).catch((e: any) => {
    //   // console.log(e.request.headers);
    //   // console.log(e.response);
    //   ctx.body = e;
    // });
    console.log(1);
    const req = await getList(request);
    // console.log(req);
    ctx.body = req;
  }
});
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888);
