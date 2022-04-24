// components/DetailCard/DetailCard.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        detailItem: Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        isTrue: false,
        isFinished: false,
    },
    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
        attached: function () {
            const item = this.properties.detailItem

            if (item.currentOption === '') {
                this.setData({
                    isFinished: false,
                    isTrue: false
                })
            } else if (item.currentOption !== item.correctOption) {
                this.setData({
                    isTrue: false,
                    isFinished: true
                })
            } else if (item.currentOption === item.correctOption) {
                this.setData({
                    isFinished: true,
                    isTrue: true
                })
            }
        },
      },
    /**
     * 组件的方法列表
     */
    methods: {

    }
})
