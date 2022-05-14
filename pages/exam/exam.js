// pages/exam/exam.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

import { getExamList, setExamRecord } from '../../api/exam';
import { formatTime, getCorrectNumber, getUnfinishedNumber } from '../../utils/util';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        examData: [],
        time: 60 * 60 * 1000,
        show: false,
        isCardShow: false,
        checked: false,
        currentTab: 0,
        isDisabledOn: false,
        isDisabledNext: false,
        isDisabled: true,
        isChoseList: [],
        answerList: [],
        startedAt: ''
    },
    emitIdFun(e) {
        let answerArray = this.data.answerList
        answerArray.forEach((item, index) => {
            if (e.detail.number === item.number) {
                item.currentOption = e.detail.currentOption
            }
        })
 
        let list = this.data.isChoseList
        list.push(e.detail.number) 
        this.setData({
            isChoseList: list,
            answerList: answerArray
        })

    },

    showCard() {
        this.setData({
            isCardShow: true
        })
    },

    onClose() {
        this.setData({ isCardShow: false });
    },

    onChange(event) {
        this.setData({
            checked: event.detail,
            isDisabled: !this.data.isDisabled
        });
    },
    startWork() {
        wx.showLoading({
          title: '发卷中～',
          mask: true
        })
        getExamList().then((res) => {
            let lists = res.result
            let arr = []
            lists.forEach((item, index) => {
                item.number = index + 1
                const answerItem = {
                    number: item.number,
                    correctOption: item.correctOption,
                    currentOption: '',
                    type: item.type,
                    question: item.question,
                    options: item.options
                }
                arr.push(answerItem)
            })
            this.setData({
                show: false,
                examData: lists,
                answerList: arr 
            });
            wx.hideLoading({
                success: (res) => {},
            })
            const time = new Date()
            this.setData({
                startedAt: formatTime(time)
            })
            const countDown = this.selectComponent('.control-count-down');
            countDown.start();
        })
    },
    toDetail(e) {
        const currentTab = e.currentTarget.dataset.item
        this.setData({
            currentTab: currentTab,
            isCardShow: false
        })
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
             })
        }
    },

    bindNextTap(e) {
        const i = this.data.currentTab + 1
        const maxLength = this.data.examData.length - 1
        if (i > maxLength) {
            this.setData({
                isDisabledNext: true,
                isDisabledOn: false
            })
        } else {
            this.setData({
                currentTab: i,
                isDisabledOn: false,
            })
        }
    },

    bindChange(e) {
        if (e.detail.source == 'touch') {
            this.setData({ currentTab: e.detail.current })
        }
    },


    handleSubmit() {
        if (this.data.isChoseList.length < this.data.answerList.length) {
            Dialog.confirm({
                title: '提示消息',
                message: '仍有题目尚未完成，是否确认交卷？',
            })
            .then(() => {
                wx.showLoading({
                    title: '交卷中～',
                })
                const userId = wx.getStorageSync('CACHE_USERID')
                const records = this.data.answerList
                const startedAt = this.data.startedAt
                const correctNumber = getCorrectNumber(this.data.answerList)
                const unfinishedNumber = getUnfinishedNumber(this.data.answerList)

                setExamRecord({
                    userId,
                    records,
                    correctNumber,
                    unfinishedNumber,
                    startedAt
                }).then((res) => {
                    if (res.status === 200) {
                        wx.hideLoading({
                            success: (res) => {},
                        })
                        Toast.success({
                            message: '交卷成功!',
                            duration: 1000,
                            mask: true,
                            forbidClick: true,
                            onClose: () => {
                                wx.redirectTo({
                                    url: '/pages/record/record',
                                })
                            },
                        });
                    }
                })  
            })
            .catch(() => {
                // on cancel
            });
    } else {
        Dialog.confirm({
            title: '提示消息',
            message: '考试时间仍有剩余，是否提前交卷？',
        })
            .then(() => {
                wx.showLoading({
                    title: '交卷中～',
                })
                const userId = wx.getStorageSync('CACHE_USERID')
                const records = this.data.answerList
                const startedAt = this.data.startedAt
                const correctNumber = getCorrectNumber(this.data.answerList)
                const unfinishedNumber = getUnfinishedNumber(this.data.answerList)

                setExamRecord({
                    userId,
                    records,
                    correctNumber,
                    unfinishedNumber,
                    startedAt
                }).then((res) => {
                    if (res.status === 200) {
                        wx.hideLoading({
                            success: (res) => {},
                        })
                        Toast.success({
                            message: '交卷成功!',
                            duration: 1000,
                            mask: true,
                            forbidClick: true,
                            onClose: () => {
                                wx.redirectTo({
                                    url: '/pages/record/record',
                                })
                            },
                        });
                    }
                })
            })
            .catch(() => {
                // on cancel
            });
        }
    },

    finished() {
        wx.showLoading({
            title: '交卷中～',
        })
        const userId = wx.getStorageSync('CACHE_USERID')
        const records = this.data.answerList
        const startedAt = this.data.startedAt
        const correctNumber = getCorrectNumber(this.data.answerList)
        const unfinishedNumber = getUnfinishedNumber(this.data.answerList)

        setExamRecord({
            userId,
            records,
            correctNumber,
            unfinishedNumber,
            startedAt
        }).then((res) => {
            if (res.status === 200) {
                wx.hideLoading({
                    success: (res) => {},
                })
                Toast.success({
                    message: '已自动交卷!',
                    duration: 1000,
                    mask: true,
                    forbidClick: true,
                    onClose: () => {
                        wx.redirectTo({
                            url: '/pages/record/record',
                        })
                    },
                });
            }
        })
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
        this.setData({
            show: true
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

// pages/swiper/swiper.js


