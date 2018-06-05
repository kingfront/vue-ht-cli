const Mock = require('mockjs')
// 2.15获取渠道商任务列表
const taskList = () => {
  return {
    ret: '0',
    description: '成功',
    total: 1,
    list: [{
      seq: 1,
      flag: 1,
      ghName: '健康电视',
      taskName: '健康电视-任务',
      taskId: '001',
      startTime: '2018-01-27 08:00:00',
      endTime: '2018-02-16 23:59:59',
      totalTargetNum: 50000,
      totalCompletedNum: 20000,
      taskTargetNum: 1000,
      taskCompletedNum: 1
    }]
  }
}
Mock.mock('/queryTaskList', 'post', taskList)
