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
            if (router === '/pages/study/study') {
                wx.navigateTo({
                    url: router,
                })
            } else {
                const token = wx.getStorageSync('CACHE_TOKEN')
                if (token) {
                    wx.navigateTo({
                        url: router,
                    })
                } else {
                    wx.setStorageSync('router', router)
                    wx.navigateTo({
                        url: '/pages/login/login',
                    })
                }
            }
        },
    },

    lifetimes: {
        ready: function() {
            // console.log(this.properties.itemInfo)
        }
    }
})
