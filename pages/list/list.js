// pages/list/list.js
var listDate = require("../../data/content.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isColl:false,
    zhanqu:['全部测试','测试一','测试二']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({index:0})
    const list = wx.getStorageSync("post_key");
    console.log(list)
    if(list.length>0){
      this.setData({
        post_key: list
      })
    }else{
      this.setData({
        post_key: listDate.postLists
      })
      wx.setStorageSync("post_key", this.data.post_key);
    }
   
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
    var postKey = wx.getStorageSync("post_key");
    this.setData({
      post_key:postKey
    })
   
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
    console.log("下拉")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
console.log("上拉")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onCollectionTip:function(e){
    var id=e.currentTarget.dataset.id-1;
    if (!this.data.post_key[id].isColl == true){
      this.data.post_key[id].isColl = true;
      this.setData({
        post_key: this.data.post_key
      })
    }else{
      this.data.post_key[id].isColl = false;
      this.setData({
        post_key: this.data.post_key
      })
    }
    wx.setStorageSync("post_key", this.data.post_key);
    //操作提示
    wx.showToast({
      title: this.data.post_key[id].isColl ? '收藏成功' : '取消成功',
      icon: 'success',
      duration: 1000
    })
  },
  // 滚动选择器
  bindPickerChange:function(e){
    var tid=e.detail.value;
    console.log(tid)
    var postArr=new Array();
    var array = listDate.postLists;
    if(tid ==0){
    
      this.setData({
        post_key: listDate.postLists
      })
    }else{
    for(var i=0;i<array.length;i++){
      if(array[i].id == tid){
        postArr.push(array[i]);
      }
    }
      this.setData({
        post_key: postArr
      })
    }
    this.setData({
      index:tid
    })
  },
  listDetail:(res)=>{
    var id=res.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../pages/list/list_detail/list_detail?id='+id,
    })
  },
  bindinput:function(e){
   var inputData=e.detail.value;
   var postData=new Array();
    var arr = listDate.postLists
   for(var i=0;i<arr.length;i++){
     var name= arr[i];
     if(name.name.indexOf(inputData)>=0){
       postData.push(name)
     }
   }
   this.setData({
     post_key:postData
   })
   this.setData({
     inData:inputData
   })
   wx.setStorageSync("inData", this.data.inData)
  },
  call:function(e){
    wx.makePhoneCall({
      phoneNumber: '12345678900',
      success(e) {
        console.log("成功")
      }
    })
  }

})