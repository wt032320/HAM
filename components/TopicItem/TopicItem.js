// components/TopicItem/TopicItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        topicData: Object,
    },
    lifetimes: {
        attached: function() {
            // 在组件实例进入页面节点树时执行
            // let topicId = this.properties.topicData._id
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        isTrueA: '',
        isTrueB: '',
        isTrueC: '',
        isTrueD: '',
        showResult: false,
        handleTap: 'choseItem',
    },
    
    /**
     * 组件的方法列表
     */
    methods: {
        choseItem: function(e) {
            const topicId = e.currentTarget.dataset.topicid

            this.triggerEvent('emitIdFun', topicId)

            const tag = e.currentTarget.dataset.titletag + 1
            wx.setStorageSync('TITLE_TAG', tag)
            const choseItem = e.currentTarget.dataset.choseitem,
                correct_option = this.properties.topicData.correctOption
            // console.log(correct_option, choseItem)
            if (choseItem === "A") {
                if (correct_option === choseItem) {
                    this.setData({
                        isTrueA: 'trueChose',
                        showResult: true,
                        handleTap: '', // 禁用点击事件
                    })
                } else {
                    this.setData({
                        isTrueA: 'falseChose',
                        showResult: true,
                        handleTap: '',
                    })
                }
            } else if (choseItem === 'B') {
                if (choseItem === correct_option) {
                    this.setData({
                        isTrueB: 'trueChose',
                        showResult: true,
                        handleTap: '',
                    })
                } else {
                    this.setData({
                        isTrueB: 'falseChose',
                        showResult: true,
                        handleTap: '',
                    })
                }
            } else if (choseItem === 'C') {
                if (choseItem === correct_option) {
                    this.setData({
                        isTrueC: 'trueChose',
                        showResult: true,
                        handleTap: '',
                    })
                } else {
                    this.setData({
                        isTrueC: 'falseChose',
                        showResult: true,
                        handleTap: '',
                    })
                }
            } else if (choseItem === 'D') {
                if (choseItem === correct_option) {
                    this.setData({
                        isTrueD: 'trueChose',
                        showResult: true,
                        handleTap: '',
                    })
                } else {
                    this.setData({
                        isTrueD: 'falseChose',
                        showResult: true,
                        handleTap: '',
                    })
                }
            }
        }
    }
})
