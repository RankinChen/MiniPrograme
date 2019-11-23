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
      }
    ],
    tip: "下一页",
    tipEnd: "结束",
    toIndex: '',
    index: 0,
    scrollTop: '',
    scrollHeight: '',
    animation: '',
    classList: ["bounce", "flash", "pulse", "rubberBand", "shake", "headShake", "swing", "tada", "wobble", "jello", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "hinge", "jackInTheBox", "rollIn", "rollOut", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp", "slideInDown", "slideInLeft", "slideInRight", "slideInUp", "slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp", "heartBeat"]
  },
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    //console.log(e)
    let i = e.detail.scrollTop
    let a = i / this.data.scrollHeight
    // console.log(a)
    if (this.isInteger(a)) {
      this.changeClass()
      this.setData({
        scrollTop: this.data.scrollHeight * a
      })
    } else {
      this.setData({
        scrollTop: this.data.scrollHeight * parseInt(a)
      })
    }
  },
  //js判断是否是正整数
  isInteger(number) {
    return number > 0 && String(number).split('.')[1] == undefined
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  skip(e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    index++
    let id = "index" + index;

    that.changeClass()
    // console.log(id)
    that.setData({
      toIndex: id
    })
    if (index == that.data.imgList.length) {
      that.setData({
        toIndex: "index0",
      })
    }
  },
  changeClass() {
    const max = this.data.classList.length
    // parseInt(Math.random() * (max + 1), 10);
    let a = Math.floor(Math.random() * (max + 1)); //取随机数
    let _class = this.data.classList[a] + ' 2s infinite';
    this.setData({
      animation: _class
    })
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
    that.changeClass()
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