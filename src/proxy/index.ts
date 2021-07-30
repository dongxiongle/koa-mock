import httpProxy from 'http-proxy';

async function proxyMiddle(ctx: any, next: any) {
  await next();
  const proxy = httpProxy.createProxyServer({
    changeOrigin: true,
    preserveHeaderKeyCase: true
  });
  if (ctx.response.status == 404) {
    console.log(ctx.response.status);
    await new Promise((resolve, reject) => {
      console.log(ctx.req.url);
      setTimeout(() => {
        proxy.web(
          ctx.req,
          ctx.res,
          { target: 'https://www.jinrongbaguanv.com' },
          (e) => {
            console.log('e', e);
          }
        );
      }, 10000);
    });
  }
}
export default proxyMiddle;
