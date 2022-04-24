// components/RecordCard/RecordCard.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        recordItem: Object
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleToDetail() {
            wx.navigateTo({
              url: `/pages/details/details?id=${this.properties.recordItem._id}`,
            })
        }
    }
})
