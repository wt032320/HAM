// components/CategoryItem/CategoryItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        examItemInfo: Object
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
        bindViewTap: function() {
            wx.navigateTo({
              url: '/pages/topic/topic',
            })
        }
    }
})
