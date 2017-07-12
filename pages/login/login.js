// pages/login/login.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '',
    disabled:false,
    plain:false,
    loading:false,
  },

  call:function(){
    wx.makePhoneCall({
      phoneNumber: '028-86051215',
    })

  },

  phoneInput:function(e){
    this.setData({
      phone:e.detail.value
    })
  },

  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      // wx.request({
      //   url: 'http://60.205.161.252/index.php/Api/Business/login',
      //   data:{
      //     shop_account:this.data.phone,
      //     shop_password:this.data.password
      //   },
      //   method: 'POST',
      //   success: function(res){
      //     if(res.statusCode  != '0') {
      wx.switchTab({
        url: "../orderManage/orderManage"
      })
      //       }else {
      //          wx.showToast({  
      //           title: res.errMsg,  
      //           icon: 'loading',  
      //           duration: 2000  
      //         })
      //       }
      //     },
      //   })
    }
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      app.getUserInfo(function(userInfo){
        that.setData({
          imageWidth: app.globalData.screenWidth,
          imageHeight: app.globalData.screenHightScale * 650,
          inputViewWidth: app.globalData.screenWidth,
          inputViewHeight: app.globalData.screenHightScale * 88,
          inputWidth: app.globalData.screenWidth,
          inputHeight: app.globalData.screenHightScale * 177
        }

        )
      }

      )
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