// 首页测试信息
export function queryWelcome () {
  return {
    // isOpen: false,
    url: '/queryWelcome',
    type: 'post',
    data: {
      ret: '0',
      description: '成功',
      total: 1,
      store: 'store test!',
      msg: 'welcom to home page!'
    }
  }
}
