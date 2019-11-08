// pages/more/more.js
var WxParse=require('../../utils/wxParse/wxParse.js');
var TestHtml=require('../../html/test.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes:[{
      name:'div',
      attrs:{
        class:'div_class',
        style:'line-height:60px;'
      },
      children:[{
        type:'text',
        text:'Hello&nbsp;World!'
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var t = TestHtml.test;
    WxParse.wxParse("demo","html",t,this,0);
    var t2=TestHtml.test2;
    WxParse.wxParse('demo2','html',t2,this,0);
  
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

  },
  tap(){
    console.log('tap')
  }
})