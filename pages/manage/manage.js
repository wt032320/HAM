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
        const globalData = getApp().globalData
        const submitData = {
            id: globalData.userInfo.userId,
            data: {
                phone: this.data.newPhone,
                email: this.data.newEmail,
                sign: this.data.newSign
            }
        }
       updateUserInfo(submitData).then((res) => {
           if (res.result.Status === 200) {
            getApp().globalData.userInfo.email = submitData.data.email
            getApp().globalData.userInfo.phone = submitData.data.phone
            getApp().globalData.userInfo.sign = submitData.data.sign
            Toast({
              type: 'success',
              message: '修改成功～',
              duration: 800,
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
        if (wx.getStorageSync('CACHE_TOKEN')) {
            const globalData = getApp().globalData.userInfo
            const userInfo = globalData
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
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

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