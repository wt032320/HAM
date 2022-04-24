import { authLogin } from "../../utils/authLogin.js"
Page({
  data:{
    show: true,
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  getUserProfile() {
    wx.getUserProfile({
      lang: 'zh_CN',
      desc: "微信授权登录",
      success: async (res) => {
        authLogin(res.userInfo.nickName)
        this.setData({ show: false });
        wx.navigateBack({
          delta: 0,
        })
  
        wx.reLaunch({
          url: wx.getStorageSync('router'),
        })
      },
      fail: (res)  => {
        if (res.errMsg) {
          this.onClose()
        }
      }
    })
  },
  onClose() {
    this.setData({ show: false });
    wx.navigateBack({
      delta: 0,
    })
  },
})
