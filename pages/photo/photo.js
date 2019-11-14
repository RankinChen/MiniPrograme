Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgList: [{
        "url": '../../assets/images/0.jpg',
        "title": "tlt0",
        "id": "index0"
      },
      {
        "url": '../../assets/images/1.jpg',
        "title": "tlt1",
        "id": "index1"
      },
      {
        "url": '../../assets/images/2.jpg',
        "title": "tlt2",
        "id": "index2"
      },
      {
        "url": '../../assets/images/3.jpg',
        "title": "tlt3",
        "id": "index3"
      },
      {
        "url": '../../assets/images/4.jpg',
        "title": "tlt4",
        "id": "index4"
      },
      {
        "url": '../../assets/images/5.jpg',
        "title": "tlt5",
        "id": "index5"
      },
      {
        "url": '../../assets/images/6.jpg',
        "title": "tlt6",
        "id": "index6"
      }
    ],
    tip: "下一页",
    tipEnd: "结束",
    toIndex: '',
    scrollHeight: ''
  },
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
   // console.log(e)
  },

  scrollToTop() {
    console.log("1111")
    this.setAction({
      scrollTop: 0
    })
  },

  skip(e) {
    console.log(e)
    let that = this;
    let index = e.currentTarget.dataset.index;
    index ++
    let id = "index" + index;
    console.log(id)
    that.setData({
      toIndex: id
    })
    if (index == that.data.imgList.length){
      that.setData({
        toIndex: "index0"
      })
    }
  },
  // changePage() {
  //   wx.redirectTo({
  //     url: "../test/test"
  //   })
  // },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //获取系统的参数，scrollHeight数值,微信必须要设置style:height才能监听滚动事件
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: parseInt(res.windowHeight) - 40
        })
      }
    });
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