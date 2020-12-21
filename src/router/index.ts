import Router from 'koa-router';
import { signChannel, signApply } from '../mock/index';
import proxy from '../proxy/index';

// const { signChannel, signApply } = mock;

const router = new Router();

router.get('/', async (ctx: any) => {
  ctx.body = 'home';
});
router.get('/user', async (ctx: any) => {
  ctx.body = 'user';
});
router.get('/v1/loan/signChannel', async (ctx: any) => {
  ctx.response.body = signChannel;
});
router.post('/v1/loan/signApply', async (ctx: any) => {
  console.log(ctx.request.body);
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      ctx.response.body = signApply;
      resolve();
    }, 1000);
  })
});
router.get('/user/bindBankCardRecord/list/:pageNum', async (ctx: any) => {
  console.log(ctx.params.pageNum);
  ctx.response.body = {
    code: 200,
    body: {}
  };
});
router.get('*', async (ctx: any) => {
  await proxy.web(ctx.req, ctx.res);
});
router.post('*', async (ctx: any) => {
  await proxy.web(ctx.req, ctx.res);
});

export default router;
