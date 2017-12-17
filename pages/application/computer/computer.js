// pages/application/computer/computer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  //获取用户输入的姓名
  bindName: function (e) {
    console.log(e.detail.value)
    this.data.name = e.detail.value
  },
  //获取用户输入的准考证号
  bindId: function (e) {
    console.log(e.detail.value)
    this.data.id = e.detail.value
  },
  //提交数据
  showToast: function () {
    var that = this;
    wx.request({
      url: '',
      data: {
        name: that.data.name,
        id: that.data.id,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      dataType: '',
      success: function (res) {
        that.data.identification = true;
        //将获得的数据赋值给resultData数组进行渲染
        that.data.resultData = res.data;
        if (res.data) {
          wx.showToast({
            title: '加载中',
            icon: 'loading',
          });
        } else {

        }
      },
      fail: function () { },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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