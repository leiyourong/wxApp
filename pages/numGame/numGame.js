const util = require('../../utils/util.js')

Page({
  data: {
    gameTip: '从小到大依次点击。看谁用时最短',
    time: 0,
    timeShow: '0',
    nums: [],
    curNum: 1,
    timeIns: null,
    bestScore: ''
  },
  onReady: function () { 
    const nums = []
    for (var i = 1; i <= 25; i++) {
      nums.push(i)
    }
    this.setData({
      nums: nums.sort(this.randomSort),
      bestScore: wx.getStorageSync('bestScore')
    })
  },
  onHide: function () {
    this.data.timeIns && clearInterval(timeIns)
  },
  onUnload: function() {
    this.data.timeIns && clearInterval(timeIns)
  },
  randomSort: function(a, b) {
    return Math.random() > 0.5 ? -1 : 1;
  },
  clickNum: function(e) {
    if (this.data.time === 0) {
      return
    }
    const clickId = e.target.id
    const curNum = this.data.curNum
    if (+clickId !== curNum) {
      console.log('gameover')
      return this.stopGame()
    }
    if (curNum === 25) {
      if (!this.data.bestScore || (this.data.time < +this.data.bestScore)) {
        const bestScore = util.formatNum(this.data.time)
        wx.setStorageSync('bestScore', bestScore)
        this.setData({
          bestScore
        })
      }
      return this.stopGame()
    }
    this.setData({
      curNum: curNum + 1
    })
  },
  startGame: function() {
    this.data.timeIns && clearInterval(this.data.timeIns)
    const timeIns = setInterval(() => {
      const time = this.data.time + 0.01
      this.setData({
        time,
        timeShow: util.formatNum(time)
      })
    }, 10)
    this.setData({
      timeIns,
      nums: this.data.nums.sort(this.randomSort),
      curNum: 1,
      time: 0,
      timeShow: '0'
    })
  },
  stopGame: function() {
    this.data.timeIns && clearInterval(this.data.timeIns)
  }
})
