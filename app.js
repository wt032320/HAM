// app.js
import { Event } from './utils/event'

App({
  onLaunch() {
    let event = new Event()
    wx.$emit = event.emit
    wx.$on = event.on
    wx.$off = event.off

  },
  globalData: {
    userInfo: null
  }
})
