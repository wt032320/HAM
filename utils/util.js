const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const getCorrectNumber = (arr) => {
  let nums = 0
  arr.forEach((item) => {
    if (item.currentOption === item.correctOption) {
      nums++
    }
  })

  return nums
}

const getUnfinishedNumber = (arr) => {
  let nums = 0
  arr.forEach((item) => {
    if (item.currentOption === '') {
      nums++
    }
  })

  return nums
}

module.exports = {
  formatTime,
  getCorrectNumber,
  getUnfinishedNumber
}
