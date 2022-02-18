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
                        handleTap: ''
                    })
                } else {
                    this.setData({
                        isTureA: 'falseChose',
                        handleTap: ''
                    })
                }
            } else if (choseItem == 'B') {
                if ('B' == correct_option) {
                    this.setData({
                        isTrueB: 'trueChose',
                        handleTap: ''
                    })
                } else {
                    this.setData({
                        isTrueB: 'falseChose',
                        handleTap: ''
                    })
                }
            } else if (choseItem == 'C') {
                if ('C' == correct_option) {
                    this.setData({
                        isTrueC: 'trueChose',
                        handleTap: ''
                    })
                } else {
                    this.setData({
                        isTrueC: 'falseChose',
                        handleTap: ''
                    })
                }
            } else if (choseItem == 'D') {
                if ('D' == correct_option) {
                    this.setData({
                        isTrueD: 'trueChose',
                        handleTap: ''
                    })
                } else {
                    this.setData({
                        isTrueD: 'falseChose',
                        handleTap: ''
                    })
                }
            }
        }
    }
})
