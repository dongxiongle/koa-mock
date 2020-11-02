import { mock } from 'mockjs';
// 查询签约渠道
const signChannel = mock({
  code: '200',
  'data|1-10': [
    {
      "bankCard": '@string("number", 16)',
      "channelId": '@string("number", 11)',
      "channelType": "string",
      "customName": "@cword(3)",
      "idCard": '@string("number", 18)',
      "isSigned": "@cword('YN')",
      "mobile": '@string("number", 11)',
      "needAgreement": "string",
      "sortNum": "string"
    }
  ]
});
// 签约申请
const signApply = mock({
  code: 200,
  data: '@string("number", 4)'
})

export {
  signChannel,
  signApply
}