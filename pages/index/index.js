import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

import { authLogin } from "../../utils/authLogin.js"
// 获取应用实例
const app = getApp()

Page({
  data: {
    show: false,
    isLogin: false,
    isEmail: false,
    isPhone: false,
    isSign: false,
    email: '',
    phone: '',
    sign: '',
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  onLoad() {
    
  },

  onShow() {
    if (wx.getStorageSync('CACHE_TOKEN')) {
      const userInfo = JSON.parse(wx.getStorageSync('CACHE_USERINFO'))
      if (userInfo.email) {
        this.setData({
          isEmail: true,
          email: userInfo.email
        })
      }
      if (userInfo.phone) {
        this.setData({
          isPhone: true,
          phone: userInfo.phone
        })
      }
      if (userInfo.sign) {
        this.setData({
          isSign: true,
          sign: userInfo.sign
        })
      }

      this.setData({
        isLogin: true
      })
    }
  },

  userLogin() {
    wx.getUserProfile({
      lang: 'zh_CN',
      desc: "微信授权登录",
      success: (res) => {
        authLogin(res.userInfo.nickName)
        const userInfo = JSON.stringify(wx.getStorageSync('CACHE_USERINFO'))
        if (userInfo.email) {
          this.setData({
            isEmail: true,
            email: userInfo.email
          })
        }
        if (userInfo.phone) {
          this.setData({
            isPhone: true,
            phone: userInfo.phone
          })
        }
        if (userInfo.sign) {
          this.setData({
            isSign: true,
            sign: userInfo.sign
          })
        }
        this.setData({
          isLogin: true
        })
      }
    })
  },

  dialog() {
    this.setData({
      show: true
    })
  },

  logOut() {
    this.setData({ isLogin: false })
    try {
      wx.clearStorageSync()
      Toast({
        type: 'success',
        message: '已退出登录～',
        duration: 800,
      })
      
    } catch(e) {
      if (e) {
        Toast({
          type: 'fail',
          message: '退出登录失败',
          duration: 800,
        })
      }
    }
  },

  onClose() {
    this.setData({ show: false });
  }
})
