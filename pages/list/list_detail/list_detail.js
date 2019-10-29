// pages/list/list_detail/list_detail.js
var listDate = require("../../../data/content.js");
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
    var id=options.id;
    var key = wx.getStorageSync("post_key");
    if(key.length<=0){
      this.setData({
        detail: listDate.postLists[id-1]
      })
    }else{
      this.setData({
        detail: key[id - 1]
      })
      console.log(this.data.detail)
    }
   
    wx.setStorageSync('tid', id);

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
  onShareAppMessage: function (e) {
    console.log(e);
    wx.showShareMenu({
      withShareTicket:true
    })

  },
  back:function(e){
    wx.navigateBack({
     url:"../../"
    })
  },
  collect:function(e){
    var id = wx.getStorageSync('tid')-1;
    console.log(id)
    var post_key=wx.getStorageSync('post_key');
    console.log(post_key)
    var iscoll = post_key[id].isColl
     post_key[id].isColl = !iscoll;
     this.setData({
       detail: post_key[id]
     })

    wx.showToast({
      title: post_key[id].isColl ? '收藏成功' : '取消成功',
      icon: 'success',
      duration: 1000
    })
    console.log(post_key)
     wx.setStorageSync('post_key', post_key);

  }
})