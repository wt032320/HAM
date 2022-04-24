// components/StudyCard/StudyCard.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        infoItem: Object
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
        handleToArticle() {
            wx.navigateTo({
                url: `/pages/articleDetail/articleDetail?id=${this.properties.infoItem._id}`,
            })
        }
    }
})
