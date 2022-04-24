// pages/articleDetail/articleDetail.js

import { getArticleDetail } from "../../api/bbs";
import { formatTime } from "../../utils/util";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        htmlSnip: '',
        title: '',
        author: '',
        time: '',
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showLoading({
          title: '加载中～',
          mask: true
        })
        getArticleDetail(options.id).then((res) => {
            if (res.status === 200) {
                this.setData({
                    htmlSnip: res.result.articleContent,
                    author: res.result.author,
                    title: res.result.title,
                    time: formatTime(new Date(res.result.createdAt))
                })
            }
            wx.hideLoading({
                success: (res) => {},
            })
        })
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