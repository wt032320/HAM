import { setNewArticle } from "../../api/bbs";

import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

// pages/newblog/newblog.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '知识分享',
        option: [
            { text: '知识分享', value: '知识分享' },
            { text: '心得体会', value: '心得体会' },
            { text: '学习交流', value: '学习交流' },
            { text: '新闻事件', value: '新闻事件' },
        ],
        fileList: [],
        pictureUrl: '',
        paragraph: '',
        title: '',
        articleContent: '', //文章正文
        formats: {},
        readOnly: false,
        placeholder: '开始输入...',
        editorHeight: 300,
        keyboardHeight: 0,
        isIOS: false
    },
    handleSubmit() {
        const author = JSON.parse(wx.getStorageSync('CACHE_USERINFO')).username
        const data = {
            author: author,
            category: this.data.value,
            pictureUrl: this.data.pictureUrl,
            title: this.data.title,
            paragraph: this.data.paragraph,
            articleContent: this.data.articleContent
        }

        if (data.title === '' && data.paragraph === '' && data.articleContent === '') {
            Toast({
                type: 'fail',
                message: '请完善必要的信息～',
                duration: 800,
            })
        } else {
            setNewArticle(data).then((res) => {
                if (res.status === 200) {
                    Toast({
                        type: 'success',
                        message: '发布成功～',
                        duration: 800,
                        mask: true,
                        onClose: () => {
                            wx.navigateBack({
                                delta: 1,
                            })
                        },
                    })
                }
            })
        }
    },

    afterRead(event) {
        const { file } = event.detail;
        console.log(file)
        const fileList = []
        fileList.push({ url: file.url })
        this.setData({
            fileList: fileList,
            pictureUrl: fileList[0].url
        })
    },

    getEditorValue(e) {
        this.setData({
          articleContent: e.detail.html
        })
    },
    readOnlyChange() {
        this.setData({
          readOnly: !this.data.readOnly
        })
    },

    onLoad() {
        const platform = wx.getSystemInfoSync().platform
        const isIOS = platform === 'ios'
        this.setData({ isIOS})
        const that = this
        this.updatePosition(0)
        let keyboardHeight = 0
        wx.onKeyboardHeightChange(res => {
          if (res.height === keyboardHeight) return
          const duration = res.height > 0 ? res.duration * 1000 : 0
          keyboardHeight = res.height
          setTimeout(() => {
            wx.pageScrollTo({
              scrollTop: 0,
              success() {
                that.updatePosition(keyboardHeight)
                that.editorCtx.scrollIntoView()
              }
            })
          }, duration)
    
        })
    },

    updatePosition(keyboardHeight) {
        const toolbarHeight = 50
        const { windowHeight, platform } = wx.getSystemInfoSync()
        let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
        this.setData({ editorHeight, keyboardHeight })
    },

    calNavigationBarAndStatusBar() {
        const systemInfo = wx.getSystemInfoSync()
        const { statusBarHeight, platform } = systemInfo
        const isIOS = platform === 'ios'
        const navigationBarHeight = isIOS ? 44 : 48
        return statusBarHeight + navigationBarHeight
    },

    onEditorReady() {
        const that = this
        wx.createSelectorQuery().select('#editor').context(function (res) {
          that.editorCtx = res.context
        }).exec()
    },

    blur() {
        this.editorCtx.blur()
    },

    format(e) {
        let { name, value } = e.target.dataset
        if (!name) return
        // console.log('format', name, value)
        this.editorCtx.format(name, value)
    
    },

    onStatusChange(e) {
        const formats = e.detail
        this.setData({ formats })
    },

    insertDivider() {
        this.editorCtx.insertDivider({
          success: function () {
            console.log('insert divider success')
          }
        })
    },

    clear() {
        this.editorCtx.clear({
          success: function (res) {
            console.log("clear success")
          }
        })
    },

    removeFormat() {
        this.editorCtx.removeFormat()
    },

    insertDate() {
        const date = new Date()
        const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        this.editorCtx.insertText({
          text: formatDate
        })
    },

    insertImage() {
        const that = this
        wx.chooseImage({
          count: 1,
          success: function (res) {
            that.editorCtx.insertImage({
              src: res.tempFilePaths[0],
              data: {
                id: 'abcd',
                role: 'god'
              },
              width: '80%',
              success: function () {
                console.log('insert image success')
              }
            })
          }
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