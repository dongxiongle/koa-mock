import Router from 'koa-router';

const router = new Router();

router.get('/user', async (ctx: any) => {
  console.log('user');
  ctx.body = 'user';
});

export default router;
