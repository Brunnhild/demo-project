const fs = require('fs')
const parse = require('csv-parse/lib/sync')
const path = require('path')

export const keyList = [
  '序号',
  '提交答卷时间',
  '所用时间',
  '来源',
  '来源详情',
  '来自IP',
  '性别',
  '年龄',
  '学历 ',
  '您的邮箱地址（请填写近期常用邮箱，便于后续联系）',
  '您的手机号码（请填写常用号码，便于后续联系）',
  '您平时更倾向于用哪种方式来调整自己（下面哪种类型的内容会给您带来更大的影响）',
  '心理地位 （下面的题目与您的心理地位有关，请您根据实际情况作答，不用过多思考）—我对自己感到骄傲，我是很优秀的',
  '我认为有些人的存在没有价值',
  '周围人的身上有很多值得学习的地方',
  '有人忽略我，我感到很委屈',
  '我对自己感到满意',
  '总体来说，我尊重每一个人',
  '我常常觉得别人做的不够好',
  '我认可自己的能力',
  '很多人都是浪得虚名，没什么真本事',
  '偶尔听到别人谈论我，我会想自己是不是做错了什么',
  '本题请选择“有点符合”',
  '我喜欢自己',
  '他人的言行常引起我的不满',
  '通常我认为他人的选择都值得尊重',
  '当事情偏离预期时，我总会觉得沮丧、慌乱',
  '我很容易感到快乐和满足',
  '请上传您的微信/QQ/微博 至少一个一周内使用过的头像 （每个选项均按时间顺序上传 [由当前到过去]，上限5张）',
  '微信头像',
  'QQ头像',
  '微博头像',
  '请上传其它社交平台中使用过的头像 (非必填项)',
  '网易云头像',
  '抖音头像',
  '知乎头像',
  '情绪状态测量 （以下各形容词是用来描述日常生活感受和体验的，请您根据最近一周的生活感受，选择相应的答案）—感兴趣的',
  '心烦的',
  '有精神的',
  '心神不宁的',
  '劲头足的',
  '内疚的',
  '恐惧的',
  '敌意的',
  '热情的',
  '自豪的',
  '易怒的',
  '警觉性高的',
  '害羞的',
  '备受鼓舞的',
  '紧张的',
  '意志坚定的',
  '注意力集中的',
  '坐立不安的',
  '有活力的',
  '害怕的'
]

export const avatar_key = [
  '微信头像',
  'QQ头像',
  '微博头像',
  '网易云头像',
  '抖音头像',
  '知乎头像'
]

export const progress_7_key = [
  '心理地位 （下面的题目与您的心理地位有关，请您根据实际情况作答，不用过多思考）—我对自己感到骄傲，我是很优秀的',
  '我认为有些人的存在没有价值',
  '周围人的身上有很多值得学习的地方',
  '有人忽略我，我感到很委屈',
  '我对自己感到满意',
  '总体来说，我尊重每一个人',
  '我常常觉得别人做的不够好',
  '我认可自己的能力',
  '很多人都是浪得虚名，没什么真本事',
  '偶尔听到别人谈论我，我会想自己是不是做错了什么',
  '本题请选择“有点符合”',
  '我喜欢自己',
  '他人的言行常引起我的不满',
  '通常我认为他人的选择都值得尊重',
  '当事情偏离预期时，我总会觉得沮丧、慌乱',
  '我很容易感到快乐和满足'
]

export const gauge_7 = [
  '非常不符合',
  '不符合',
  '不太符合',
  '不确定',
  '有点符合',
  '符合',
  '非常符合'
]

export const gauge_5 = [
  '几乎没有',
  '比较少',
  '中等程度',
  '比较多',
  '极其多'
]

export const progress_5_key = [
  '情绪状态测量 （以下各形容词是用来描述日常生活感受和体验的，请您根据最近一周的生活感受，选择相应的答案）—感兴趣的',
  '心烦的',
  '有精神的',
  '心神不宁的',
  '劲头足的',
  '内疚的',
  '恐惧的',
  '敌意的',
  '热情的',
  '自豪的',
  '易怒的',
  '警觉性高的',
  '害羞的',
  '备受鼓舞的',
  '紧张的',
  '意志坚定的',
  '注意力集中的',
  '坐立不安的',
  '有活力的',
  '害怕的'
]

const convertPhone = phone => {
  if (phone.length === 11) return phone.substr(0, 3) + '****' + phone.substr(7, 4)
}

// todo: Replace all urls of avatars to file locations for these urls cannot be accessed unless you login
const convertUrl = record => {
  return record
}

const input = path.join(__dirname, './data_1.csv')
const records = parse(fs.readFileSync(input, {
  encoding: 'utf8'
}), {
  columns: true,
  skip_empty_lines: true
})

export const getOneUser = () => {
  return convertUrl(records[2])
}

export const getUserList = () => {
  const userList = []
  for (const i of records) {
    const avatarList = []
    for (const j of avatar_key) if (i[j] !== '(跳过)') avatarList.push(...i[j].split(', '))
    userList.push({
      phone: convertPhone(i['您的手机号码（请填写常用号码，便于后续联系）']),
      avatar: avatarList[0]
    })
  }
  return userList
}
