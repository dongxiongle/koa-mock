const router = require('koa-router')();
const Mock = require('mockjs');
const Random = Mock.Random;

// 规则组列表
router.get('/ruleGroup/verifyList/:currentPage', async (ctx, next) => {
  const currentPage = ctx.params.currentPage;
  const pageSize = ctx.params.pageSize;
  const ruleList = Mock.mock({
    "totalPage": 0,
    "totalCount|10-100": 1,
    "pageSize": pageSize,
    "currentPage": currentPage,
    'dataList|10': [
      {
        "ruleGroupVerifyId|100-1000": 100,
        "ruleGroupName": Mock.mock('@word(10, 30)'),
        "score|0-100": 0,
        "enable|1": ['是', '否'],
        "createTime": Mock.mock('@datetime(yyyy-MM-dd HH:mm:ss)'),
        "updateTime": Mock.mock('@datetime(yyyy-MM-dd HH:mm:ss)')
      }
    ]
  });
  ctx.response.body = ruleList;
  next();
});
// 规则组获取规则列表
router.get('/rule/ruleList', async (ctx, next) => {
  const ruleList = Mock.mock({
    'dataList|10': [
      {
        "ruleName": Mock.mock('@word(10, 30)'),
        "ruleId|100-1000": 100
      }
    ]
  });
  ctx.response.body = ruleList.dataList;
  next();
});

module.exports = router;
