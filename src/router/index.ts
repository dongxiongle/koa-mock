import Router from 'koa-router';
import { mock } from 'mockjs';
import { signChannel, signApply } from '../mock/index';

const router = new Router();

router.get('/', async (ctx: any) => {
  ctx.body = 'home';
});

router.get('/user', async (ctx: any) => {
  ctx.body = 'user';
});
router.get('/v1/loan/signChannel', async (ctx: any) => {
  ctx.response.body = mock(signChannel);
});
router.post('/v1/loan/signApply', async (ctx: any) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      ctx.response.body = mock(signApply);
      resolve('');
    }, 1000);
  })
});
router.get('/user/bindBankCardRecord/list/:pageNum', async (ctx: any) => {
  ctx.response.body = {
    code: 200,
    body: {
      pageNum: ctx.params.pageNum
    }
  };
});
// router.get('*', async (ctx: any) => {
//   await proxy.web(ctx.req, ctx.res);
// });
// router.post('*', async (ctx: any) => {
//   await proxy.web(ctx.req, ctx.res);
// });

export default router;
