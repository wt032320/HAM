// components/ExamItem/ExamItem.js
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
        isChoseA: '',
        isChoseB: '',
        isChoseC: '',
        isChoseD: '',
        handleTap: 'choseItem',
        current_option: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        choseItem(e) {
            const number = this.properties.topicData.number
            const currentOption = e.currentTarget.dataset.choseitem
            this.setData({
                current_option: currentOption
            })
            this.triggerEvent('emitIdFun', {
                number,
                currentOption: this.data.current_option 
            })
            if (currentOption === 'A') {
                this.setData({
                    isChoseA: 'isChose',
                    isChoseB: '',
                    isChoseC: '',
                    isChoseD: ''
                })
            } else if (currentOption === 'B') {
                this.setData({
                    isChoseB: 'isChose',
                    isChoseC: '',
                    isChoseD: '',
                    isChoseA: ''
                })
            } else if (currentOption === 'C') {
                this.setData({
                    isChoseC: 'isChose',
                    isChoseA: '',
                    isChoseB: '',
                    isChoseD: ''
                })
            } else if (currentOption === 'D') {
                this.setData({
                    isChoseD: 'isChose',
                    isChoseA: '',
                    isChoseB: '',
                    isChoseC: ''
                })
            }
        }
    }
})
