import Router from 'koa-router';
import { signChannel, signApply } from '../mock/index';

// const { signChannel, signApply } = mock;

const router = new Router();

router.get('/', async (ctx: any) => {
  console.log('user');
  ctx.body = 'home';
});
router.get('/user', async (ctx: any) => {
  ctx.body = 'user';
});
router.get('/v1/loan/signChannel', async (ctx: any) => {
  ctx.response.body = signChannel;
});
router.post('/v1/loan/signApply', async (ctx: any) => {
  ctx.response.body = signApply;
});
router.post('/v1/loan/signConfirm', async (ctx: any) => {
  console.log(ctx.request.body);
  ctx.response.body = {
    code: 200,
    body: {}
  };
});

export default router;
