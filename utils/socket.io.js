// import io from "../weapp.socket.io/lib/weapp.socket.io";

// let wsStatus = false;
// let onSocket = null;
// onSocket = io("http://127.0.0.1:3000", { transports: ['websocket'] })// 连接 socket

// export const connect = function (cb) { 

//   if (!onSocket) {
//     onSocket.on('broadcast', function (res) { // 监听socket 是否连接成功
//       cb(true, onSocket)
//       wsStatus = true
//     })
    
//     setTimeout(function () { // 超时10秒，返回false
//       if (!wsStatus) {
//         cb(false, onSocket)
//       }
//     }, 10000)
    
//   } else {
//     cb(true, onSocket)
//   }
// }