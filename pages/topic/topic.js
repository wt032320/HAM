// pages/topic/topic.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

import { getTopicList } from '../../api/exam'
import { addCollectTopic, addWrongTopic, removeCollectTopic, removeWrongTopic } from '../../api/user';
Page({
    /**
     * 页面的初始数据
     */
    data: {
        topicData: [],
        topicId: '',
        currentTab: 0,
        isDisabledOn: false,
        isDisabledNext: false,
        duduration: 1000,
        easing: 'linear',
        isCollection: false,
        fontName: 'shoucang',
        isWrongTopic: false,
        fontClass: 'cuotiji',
    },
    emitIdFun(e) {
        this.setData({ topicId: e.detail })
    },

    bindOnTap() {
        const i = this.data.currentTab - 1
        if (i < 0) {
            this.setData({
                isDisabledOn: true,
                isDisabledNext: false
            })
        } else {
            this.setData({
                currentTab: i,
                isDisabledNext: false,
                isCollection: false,
                isWrongTopic: false,
                fontClass: 'cuotiji',
                fontName: 'shoucang'
             })
        }
    },

    bindNextTap(e) {
        const i = this.data.currentTab + 1

        if (i > 4) {
            this.setData({
                isDisabledNext: true,
                isDisabledOn: false
            })
        } else {
            this.setData({
                currentTab: i,
                isDisabledOn: false,
                isCollection: false,
                isWrongTopic: false,
                fontClass: 'cuotiji',
                fontName: 'shoucang'
            })
        }
    },

    bindChange(e) {
        if (e.detail.source == 'touch') {
            this.setData({ currentTab: e.detail.current })
        }
    },

    colloectFun() {
        this.setData({
            isCollection: !this.data.isCollection,
            fontName: this.data.isCollection ? 'shoucang' : 'yishoucang'
        })
        
        if (this.data.isCollection === true) {
            const uid = wx.getStorageSync('CACHE_USERID')
            const data = {
                userId: uid,
                topicId: this.data.topicId
            }
            addCollectTopic(data).then((res) => {
                if (res.status === 200) {
                    Toast({
                        type: 'success',
                        message: '已加入收藏集',
                        duration: 800,
                    })
                } else {
                    Toast({
                        type: 'fail',
                        message: '加入收藏集失败',
                        duration: 800,
                    })
                }
            })  
        } else {
            const uid = wx.getStorageSync('CACHE_USERID')
            const data = {
                userId: uid,
                topicId: this.data.topicId
            }

            removeCollectTopic(data).then((res) => {
                if (res.status === 200) {
                    Toast({
                        type: 'success',
                        message: '已移出收藏集',
                        duration: 800,
                    })
                } else if (res.status === 404) {
                    Toast({
                        type: 'fail',
                        message: '取消收藏失败',
                        duration: 800,
                    })
                }
            })
            
        }
    },

    wrongTopicFun() {
        this.setData({
            isWrongTopic: !this.data.isWrongTopic,
            fontClass: this.data.isWrongTopic ? 'cuotiji' : 'yicuotiji'
        })
        if (this.data.isWrongTopic === true) {
            const uid = wx.getStorageSync('CACHE_USERID')
            const data = {
                userId: uid,
                topicId: this.data.topicId
            }
            addWrongTopic(data).then((res) => {
                if (res.status === 200) {
                    Toast({
                        type: 'success',
                        message: '已加入错题集',
                        duration: 800,
                    })
                } else {
                    Toast({
                        type: 'fail',
                        message: '加入错题集失败',
                        duration: 800,
                    })
                }
            })
            
        } else {
            const uid = wx.getStorageSync('CACHE_USERID')
            const data = {
                userId: uid,
                topicId: this.data.topicId
            }

            removeWrongTopic(data).then((res) => {
                if (res.status === 200) {
                    Toast({
                        type: 'success',
                        message: '已移出错题集',
                        duration: 800,
                    })
                } else if (res.status === 404) {
                    Toast({
                        type: 'fail',
                        message: '移出错题集失败',
                        duration: 800,
                    })
                }
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showLoading({
            title: '加载中～',
          })
          const tag = wx.getStorageSync('TITLE_TAG')
          const data = { startIndex: tag + 1 || 0 }
          getTopicList(data).then((res) => {
            let lists = []
            lists = res.lists
            lists.forEach((item, index) => {
                item.number = index + 1
            })
            this.setData({
                topicData: res.lists
            })
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