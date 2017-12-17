// pages/index/phone/phone.js
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed:false,
    inputVal:"",
    phone_number:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      phone_number: util.phone_number
    })
  },
  showInput:function(){
    this.setData({
      inputShowed:true
    });
  },
  hideInput:function(){
    this.setData({
        inputVal:"",
        inputShowed:false,
    });
  },
  clearInput:function(){
    this.setData({
      inputVal: "",
    });
  },
  inputTyping:function(e){
       this.setData({
         inputVal:e.detail.value
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
  callphone:function(event){
    //获取点击的电话号码
    var phone_number = event.target.dataset.hi;
    console.log(event.target.dataset.hi);
    wx:wx.makePhoneCall({
      phoneNumber: phone_number,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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