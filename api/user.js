import request from "../utils/request"

//这些接口都不是真实的，只是演示怎么使用
//小程序用户登录
export function login(data) {
  return request.post("login", data, {
    noAuth: true
  });
}

//更新用户信息
export function updateUserInfo(data) {
  return request.post("user/infos", data);
}

export function addCollectTopic(data) {
  return request.post("user/collects", data);
}

export function removeCollectTopic(data) {
  return request.post("user/undock", data);
}

export function addWrongTopic(data) {
  return request.post("user/collects/wrong", data)
}

export function removeWrongTopic(data) {
  return request.post("user/undock/wrong", data)
}

export function getCollectList(id) {
  return request.get(`user/collects/lists/${id}`)
}

export function getWrongList(id) {
  return request.get(`user/wrong/lists/${id}`)
}