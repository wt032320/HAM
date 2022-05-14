// pages/manage/manage.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

import { updateUserInfo } from "../../api/user";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        isLogin: false,
        isEmail: false,
        isPhone: false,
        isSign: false,
        email: '',
        phone: '',
        sign: '',
        newEmail: '',
        newPhone: '',
        newSign: ''
    },

    dialog() {
        this.setData({
            show: true,
        })
    },

    setUserInfo () {
      const userInfo = JSON.parse(wx.getStorageSync('CACHE_USERINFO'))
        const submitData = {
            id: userInfo.userId,
            data: {
                phone: this.data.newPhone,
                email: this.data.newEmail,
                sign: this.data.newSign
            }
        }
       updateUserInfo(submitData).then((res) => {
          console.log(res)
           if (res.result.Status === 200) {
            Toast({
              type: 'success',
              message: '修改成功～',
              duration: 800,
            })
            wx.setStorageSync('CACHE_USERINFO', JSON.stringify(res.result.userData))
            this.setData({
              email: this.data.newEmail,
              phone: this.data.newPhone,
              sign: this.data.newSign,
            })
          }
       })
        
    },

    onClose() {
        this.setData({ show: false })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      if (wx.getStorageSync('CACHE_TOKEN')) {
        const userInfo = JSON.parse(wx.getStorageSync('CACHE_USERINFO'))
        if (userInfo.email) {
          this.setData({
            isEmail: true,
            email: userInfo.email,
            newEmail: userInfo.email
          })
        }
        if (userInfo.phone) {
          this.setData({
            isPhone: true,
            phone: userInfo.phone,
            newPhone: userInfo.phone
          })
        }
        if (userInfo.sign) {
          this.setData({
            isSign: true,
            sign: userInfo.sign,
            newSign: userInfo.sign
          })
        }
      }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})