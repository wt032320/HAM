// components/HomeItem/HomeItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        itemInfo: Object
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
        bindViewTap(e) {
            const router = e.currentTarget.dataset.router
            console.log(router)
            wx.navigateTo({
              url: router,
            })
        },
    },

    lifetimes: {
        ready: function() {
            // console.log(this.properties.itemInfo)
        }
    }
})
