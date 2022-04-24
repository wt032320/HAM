// app.js
import { Event } from './utils/event'

App({
  onLaunch() {
    let event = new Event()
    wx.$emit = event.emit
    wx.$on = event.on
    wx.$off = event.off

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
