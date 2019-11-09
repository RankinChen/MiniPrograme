//var Api = require("../../utils/api.js")
var ARR_NEWS_DATA = []
Page({
  data: {
    hidden: true,
    xinwen_list: [{
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
        "title": "tlt1",
        "id": "index4"
      },
      {
        "url": '../../assets/images/5.jpg',
        "title": "tlt2",
        "id": "index5"
      },
      {
        "url": '../../assets/images/6.jpg',
        "title": "tlt3",
        "id": "index6"
      }
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 2000,
    indicatordots: true,
    duration: 1000
  },

  onLoad: function() {
    // var that = this;
    // var videoUrl = Api.Url + "&isvideo=1"
    // Api.fetchGet(videoUrl, (err, res) => {
    //   for (var i = 0; i < 14; i++) {
    //     res.data[i].inputtime = Api.js_date_time(res.data[i].inputtime)
    //     ARR_NEWS_DATA.push(res.data[i])
    //   }
    //   that.setData({
    //     hidden: true,
    //     xinwen_list: ARR_NEWS_DATA,
    //   })
    // })
  },
  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.id;
    console.log("000")
    wx.navigateTo({
      //url: "../video/video-listdetails?id=" + postId
    })
  },

})