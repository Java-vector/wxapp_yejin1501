// pages/application/application.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicator:true,
    autoplay:true,
    interval:5000,
    duration:500,
    width: '',
    height: '',
    imgUrls: [
      "http://123.207.73.116/yejin.jpg",
      "http://123.207.73.116/psb.jpg",
      "http://123.207.73.116/image.jpg"
    ],
    navItem:[
      {
        name:"班级电话簿",
        icon:"tel.png",
        url:'myTel/myTel',
      },
      {
        name:"常用电话",
        icon:"telphone.png",
        url:'telphone/telphone',
      },
      // {
      //   name:"我的图书馆",
      //   icon:"library.png",
      //   url:'myLibrary/myLibrary'
      // },
      {
        name:"四六级查询",
        icon:"english.png",
        url:'english/english'
      },
      // {
      //   name:"计算机成绩查询",
      //   icon:"computer.png",
      //   url:'computer/computer'
      // },
      {
        name: "考试成绩查询",
        icon: "jwxt.png",
        url: 'jwxt/jwxt'
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowWidth)
        that.setData({
          width: res.windowWidth,
          height: res.windowHeight
        })
      },
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