const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname);

files.forEach(item => {
  if (item !== 'index.js') {
    const childRouter = require(`./${item}`);
    router.use(childRouter.routes(), childRouter.allowedMethods());
  }
});

const rule = require('./rule');


module.exports = router;
