import { itemInfo } from '../../data/data'
const socket = require("../../utils/socket.io");

Page({
    data: {
        itemInfo
    },
    onLoad() {
        // socket.connect((status,ws)=>{
        //     console.log(status)
        //     console.log(ws)
        //     if(status){
        //       console.log('00000')
        //       ws.on('res',(data)=>{
        //         console.log(data)
        //       })
        //     }
        // })
    }
})