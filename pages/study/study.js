// pages/study/study.js
import { getArticleList } from '../../api/bbs';
import { authLogin } from "../../utils/authLogin.js"
import { formatTime } from '../../utils/util';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '',
        studyInfo: []
    },

    onChange(e) {
        this.setData({
          value: e.detail,
        });
    },

    onSearch() {
        console.log(this.data.value)
    },

    onClick() {
        console.log('ss')
    },

    handleToPage() {
        const token = wx.getStorageSync('CACHE_TOKEN')
        if (token) {
            wx.navigateTo({
                url: '/pages/newblog/newblog',
            })
        } else {
            wx.getUserProfile({
                lang: 'zh_CN',
                desc: "微信授权登录",
                success: (res) => {
                    authLogin(res.userInfo.nickName)
                    wx.navigateTo({
                        url: '/pages/newblog/newblog',
                    })
                }
            })
        }
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
        if (this.data.studyInfo.length === 0) {
            wx.showLoading({
                title: '加载中～',
                mask: true
            })

            getArticleList().then((res) => {
                if (res.status === 200) {
                    const lists = res.result
                    lists.forEach((item) => {
                        item.createdAt = formatTime(new Date(item.createdAt))
                    })
                    this.setData({
                        studyInfo: lists
                    })
                    wx.hideLoading({
                        success: (res) => {},
                    })
                }
            })
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