// pages/forum/forum.js
import { getExamRecord } from '../../api/exam'
import { recordInfo } from '../../data/data'
import { formatTime } from '../../utils/util'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasData: true,
        recordInfo: []
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
        const userId = wx.getStorageSync('CACHE_USERID')

        getExamRecord(userId).then((res) => {
            if (res.status === 404) {
                this.setData({
                    hasData: false
                })
            } else if (res.status === 200) {
                const lists = res.result
                lists.forEach((item, index) => {
                    let nums = item.totalNumber - item.correctNumber - item.unfinishedNumber;
                    item.wrongNumber = nums
                    if(item.unfinishedNumber > 0) {
                        item.status = false
                    } else {
                        item.status = true
                    }
                    item.createdAt = formatTime(new Date(item.createdAt))
                    item.title = `模拟考试${lists.length-index}`
                })
                this.setData({
                    recordInfo: lists
                })
            }
        })
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