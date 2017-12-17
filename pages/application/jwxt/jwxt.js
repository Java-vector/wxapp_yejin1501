// pages/application/jwxt/jwxt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  id:'',
  pwd:'',
  index:'0',
  array:['2015-2016-1','2015-2016-2','2016-2017-1','2016-2017-2','2017-2018-1'],    
  resultData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  //单列选择器
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //获取用户输入的学号
  bindName: function (e) {
    console.log(e.detail.value)
    this.data.id = e.detail.value
  },
  //获取用户输入的密码
  bindId: function (e) {
    console.log(e.detail.value)
    this.data.pwd = e.detail.value
  },
  //提交数据
  showToast: function () {
    var that = this;
    wx.request({
      url: 'https://www.jackzhou.com.cn/jiaowuguanli/test.php',
      // url:'http://localhost/jiaowuguanli/test.php',
      data: {
        pwd: that.data.pwd,
        user: that.data.id,
        term: that.data.index
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      dataType: '',
      success: function (res) {
        that.data.identification = true;
        console.log(res.data)
        //将获得的数据赋值给resultData数组进行渲染
        that.setData({
          resultData: res.data
        })
        if (res.data) {
          wx.showToast({
            title: '成功',
            icon: 'success',
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