//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    phone_number: [],
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.jackzhou.com.cn/ceshi.php',
      data: '',
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log(res.data)
        that.setData({
          phone_number: res.data,
        })
      }
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false,
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: "",
    });
  },
  //获取搜索框输入的内容
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
    console.log(e.detail.value);
    //  console.log(inputVal);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //点击拨打电话事件
  callphone: function (event) {
    //获取点击的电话号码
    var phone_number = event.target.dataset.hi;
    console.log(event.target.dataset.hi);
    wx: wx.makePhoneCall({
      phoneNumber: phone_number,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this;
    wx.request({
      url: 'https://www.jackzhou.com.cn/ceshi.php',
      data: '',
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log(res.data)
        that.setData({
          phone_number: res.data,
        })
      },
      fail: function (res) { },
      complete: function (res) { 
        wx.showToast({
          title:'加载中',
          icon:'loading',
          duration: 1500,
          mask: true,
        })
        wx.stopPullDownRefresh()
      },
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
