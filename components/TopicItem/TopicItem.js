// components/TopicItem/TopicItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        topicData: Object
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
        handleTap: 'choseItem'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        choseItem: function(e) {
            const choseItem = e.currentTarget.dataset.choseitem,
                correct_option = this.properties.topicData.correct_option
            if (choseItem == 'A') {
                if ('A' == correct_option) {
                    this.setData({
                        isTrueA: 'trueChose',
                        handleTap: '', // 禁用点击事件
                        showResult: true,
                    })
                } else {
                    this.setData({
                        isTureA: 'falseChose',
                        handleTap: '',
                        showResult: true,
                    })
                }
            } else if (choseItem == 'B') {
                if ('B' == correct_option) {
                    this.setData({
                        isTrueB: 'trueChose',
                        handleTap: '',
                        showResult: true,
                    })
                } else {
                    this.setData({
                        isTrueB: 'falseChose',
                        handleTap: '',
                        showResult: true,
                    })
                }
            } else if (choseItem == 'C') {
                if ('C' == correct_option) {
                    this.setData({
                        isTrueC: 'trueChose',
                        handleTap: '',
                        showResult: true,
                    })
                } else {
                    this.setData({
                        isTrueC: 'falseChose',
                        handleTap: '',
                        showResult: true,
                    })
                }
            } else if (choseItem == 'D') {
                if ('D' == correct_option) {
                    this.setData({
                        isTrueD: 'trueChose',
                        handleTap: '',
                        showResult: true,
                    })
                } else {
                    this.setData({
                        isTrueD: 'falseChose',
                        handleTap: '',
                        showResult: true,
                    })
                }
            }
        }
    }
})
