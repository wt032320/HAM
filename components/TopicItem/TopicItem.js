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
        isTrue: false,
        // isRender: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindOptionTap: function(e) {
            console.log(e)
        }
    }
})
