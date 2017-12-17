// pages/configure/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    id:'',
    tel:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  showToast:function(){
    var that = this;
    //判断提交的数据是否为空
    if (that.data.name != '' && that.data.id != '' && that.data.tel!=''){
      wx.request({
        url: 'https://www.jackzhou.com.cn/update.php',
        data: {
          name: that.data.name,
          id: that.data.id,
          telphone: that.data.tel
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        dataType: '',
        success: function (res) {
          if (res.data.id == '1') {
            //信息提交成功
            wx.showToast({
              title: res.data.information,
              icon: 'success',
              image: '',
              duration: 30000,
              mask: true,
              success: function (res) {
                wx.navigateBack({
                  delta:1
                })
              },
              fail: function (res) { },
              complete: function (res) { },
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '信息更新失败！',
              showCancel: true,
              cancelText: '',
              cancelColor: '',
              confirmText: '知道了',
              confirmColor: '#00FF00',
              success: function (res) { },
              fail: function (res) { },
              complete: function (res) { },
            })
          }
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请输入绑定信息！',
        showCancel: true,
        cancelText: '',
        cancelColor: '',
        confirmText: '知道了',
        confirmColor: '#00FF00',
        success: function (res) {
          wx.navigateTo({
            url: '../configure',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
         },
        fail: function (res) { },
        complete: function (res) {
          wx.navigateTo({
            url: '../configure',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        },
      })
    }
    
  },
  bindName:function(e){
    console.log(e.detail.value)
    this.data.name = e.detail.value
  },
  bindId:function(e){
    console.log(e.detail.value)
    this.data.id = e.detail.value
  },
  bindTel:function(e){
    console.log(e.detail.value)
    this.data.tel = e.detail.value
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