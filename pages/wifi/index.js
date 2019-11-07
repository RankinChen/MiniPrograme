// pages/wifi/index.js
const {
  $Toast
} = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '一楼 WIFI',
    msg2: '二楼 WIFI',
    icon: '>',
    wifiError: '', //初始化错误提示
    system: '', //版本号
    platform: '', //系统 android
    ssid1: 'AlibabaCenter', //wifi1帐号(必填)
    pass1: 'ali888888', //wifi1密码(必填)
    ssid2: 'chen2', //wifi2帐号(必填)
    pass2: '123456789', //wifi2密码(必填)
  },
  //事件处理函数
  bindViewTap: function() {
    var _this = this;
    //连接wifi
    if (_this.data.wifiError) {
      $Toast({
        content: _this.data.wifiError,
        type: 'error'
      });
    }
    else{
      _this.startWifi(1, function(data) {
        if (_this.data.wifiError) {
          $Toast({
            content: _this.data.wifiError,
            type: 'error'
          });
        } else {
          $Toast({
            content: 'WIFI链接成功',
            type: 'success'
          });
        }
      });
    }
  },
  bindViewTap2: function() {
    var _this = this;
    //连接wifi
    if (_this.data.wifiError) {
      $Toast({
        content: _this.data.wifiError,
        type: 'error'
      });
    }
    else {
      _this.startWifi(2, function (data) {
        if (_this.data.wifiError) {
          $Toast({
            content: _this.data.wifiError,
            type: 'error'
          });
        } else {
          $Toast({
            content: 'WIFI链接成功',
            type: 'success'
          });
        }
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    //检测手机型号
    wx.getSystemInfo({
      success: function(res) {
        var system = '';
        if (res.platform == 'android') {
          system = parseInt(res.system.substr(8));
        }
        if (res.platform == 'ios') {
          system = parseInt(res.system.substr(4));
        }
        if (res.platform == 'android' && system < 6) {
          _this.setData({
            wifiError: '手机版本暂时不支持'
          });
          return
        }
        if (res.platform == 'ios' && system < 11) {
          _this.setData({
            wifiError: '手机版本暂时不支持'
          });
          return
        }
        _this.setData({
          platform: res.platform
        });
      }
    })
  },
  /**
   * 开始WIFI链接
   */
  startWifi: function(index, callback) {
    var _this = this;
    wx.startWifi({
      success: function() {
        _this.connected(index, callback);
      },
      fail: function(res) {
        _this.setData({
          wifiError: res.errMsg
        });
        if (callback && typeof callback == 'function') {
          callback(null);
        }
      }
    })
  },
  connected: function(index, callback) {
    var _this = this;
    var ssid = index == 1 ? _this.data.ssid1 : _this.data.ssid2;
    var pass = index == 1 ? _this.data.pass1 : _this.data.pass1;

    wx.connectWifi({
      SSID: ssid,
      password: pass,
      success: function(res) {
        _this.setData({
          wifiError: ''
        });
      },
      fail: function(res) {
        var message = "";
        if (res.errCode == 12001) {
          message = "当前系统不支持微信控制WIFI开关！";
        } else if (res.errCode == 12003) {
          message = "连接超时，当前连接人数太多，请稍后再试！";
        } else if (res.errCode == 12004) {
          message = "请勿重复连接 Wi-Fi！";
        } else if (res.errCode == 12005) {
          message = "请先打开手机WIFI开关，再尝试链接！";
        } else if (res.errCode == 12007) {
          message = "用户拒绝授权链接 Wi-Fi，考虑手动连接！";
        } else if (res.errCode == 12013) {
          message = "系统保存的 Wi-Fi 配置过期，建议忘记 Wi-Fi 后重试！";
        }
        else{
          message=res.errMsg;
        }

        _this.setData({
          wifiError: message
        });
        if (callback && typeof callback == 'function') {
          callback(null);
        }
      }
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})