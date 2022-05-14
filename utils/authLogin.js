const { login } = require("../api/user");

export async function authLogin(data) {

    wx.login({
      success: async (res) => {
        if (res.code) {
          await loginMain(res.code, data)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
  //调用 token 和 储存用户token等信息
async function loginMain(code, username) {
    const loginRes = await login({ code, username })
    console.log(loginRes)
    wx.setStorageSync('CACHE_USERID', loginRes.result.userId)
    wx.setStorageSync('CACHE_TOKEN', loginRes.result.token)
    wx.setStorageSync('TITLE_TAG', loginRes.result.titleTag)
    wx.setStorageSync('CACHE_TOKEN_TIME', (new Date()).getTime())
    wx.setStorageSync('CACHE_USERINFO', JSON.stringify(loginRes.result))
    const globalData = getApp().globalData
    globalData.userInfo = loginRes.result || {}
    return loginRes
}