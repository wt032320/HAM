import { itemInfo } from '../../data/data'
import { getNewsInfo } from '../../api/news'

Page({
    data: {
        itemInfo,
        isScroll: true,
        news_content: ""
    },
    onLoad() {
       
    },
    onShow() {
        getNewsInfo().then((res) => {
            if (res.status === 200) {
                this.setData({
                    news_content: res.result[0].content,
                    isScroll: true
                })
            } else if (res.status === 404){
                this.setData({
                    news_content: "暂无新闻～",
                    isScroll: false
                })
            }
        }) 
    }
})