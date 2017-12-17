
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    console(userInfo)
    wx.navigateBack({
      delta:1
    })
  },
  onLoad: function () {
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    if(app.globalData.userInfo){
        this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        })
    }
  },
  showModal:function(){
    var that = this
    // console(that.data.content)
    wx.showModal({
      title: '冶一冶一耶',
      content: '软件版本：v1.1.2\r\n更新日志：1.新增四六级历史查询；\r\n2.教务系统成绩查询等。',
      showCancel: true,
      cancelText: '',
      cancelColor: '',
      confirmText: '知道了',
      confirmColor: '#00FF00',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})