// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [{
        "url": '../../assets/images/1.jpg',
        "title": "tlt1"
      },
      {
        "url": '../../assets/images/2.jpg',
        "title": "tlt2"
      },
      {
        "url": '../../assets/images/3.jpg',
        "title": "tlt3"
      },
      {
        "url": '../../assets/images/4.jpg',
        "title": "tlt1"
      },
      {
        "url": '../../assets/images/5.jpg',
        "title": "tlt2"
      },
      {
        "url": '../../assets/images/6.jpg',
        "title": "tlt3"
      }
    ],
    list: [{
        "url": "http://abc.com/i1.png",
        "title": "tlt1"
      },
      {
        "url": "http://abc.com/i2.png",
        "title": "tlt2"
      },
      {
        "url": "http://abc.com/i3.png",
        "title": "tlt3"
      }
    ],
    toView: 'green'
  },
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  changePage() {
    wx.redirectTo({
      url: "../test/test"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("下拉")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("上拉")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})