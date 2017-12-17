//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    id:'',
    index:0,
    identification:false,
    array:['201706','AllCET'],
    resultData:''
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
  showToast:function(){
      var that = this;
      wx.request({
        url:'https://www.jackzhou.com.cn/Inquiry/inquiry.php',
        // url:'http://localhost/Inquiry/inquiry.php',
          data: {
            name: that.data.name,
            id: that.data.id,
            select:that.data.index
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
            // 'content-type':application/json
          },
          method: 'POST',
          dataType: '',
          success:function(res){
            that.data.identification=true;
            // console.log(res.data[0])
            //将获得的数据赋值给resultData数组进行渲染
            that.setData({
              resultData: res.data
            })
                if(res.data){
                  wx.showToast({
                    title: '成功',
                    icon: 'success',
                  });
                }else{
                  
                }
          },
          fail:function(){},
      })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})