// components/TopoicCard/TopicCard.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        itemInfo: Object
    },
    lifetimes: {
        attached: function() {

        },
        detached: function() {
          // 在组件实例被从页面节点树移除时执行
        },
    },
    pageLifetimes: {
        show: function() {
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        activeNames: [1]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event) {
            this.setData({
                activeNames: event.detail
            })
        }
    }
})
