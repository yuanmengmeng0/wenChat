// pages/mess/mess_detail/mess_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[
      {
        id:0,
        fid:0,
        sources:"来源：天津日报",
        title:"快看｜微信支付新增功能：可直接向手机号转账",
        content: "近日，有网友发现微信支付新增了'向手机号转账'的功能。用户在用微信支付转账时，可以通过输入对方手机号的方式进行转账。值得注意的是，微信支付近日还悄然上线了一项新服务：银行储蓄。详情页显示，这是微信与工商银行联合推出的功能，用户点击银行储蓄便直接跳转至工商银行的存款产品，同意协议后自动开通存款账户",
        url:"https://mp.weixin.qq.com/"
      },{
        id: 1,
        fid: 1,
        sources: "来源：天津日报",
        title: "微信小程序介绍\n",
        content: "近日，有网友发现微信支付新增了'向手机号转账'的功能。用户在用微信支付转账时，可以通过输入对方手机号的方式进行转账。值得注意的是，微信支付近日还悄然上线了一项新服务：银行储蓄。详情页显示，这是微信与工商银行联合推出的功能，用户点击银行储蓄便直接跳转至工商银行的存款产品，同意协议后自动开通存款账户",
        url:"https://map.baidu.com/"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tid=options.id; //这个id 是mess这个页面传过来的
    console.log(tid)
    for(var i=0;i<this.data.banners.length;i++){
      if (this.data.banners[i].fid == tid){
        this.setData({
          url: this.data.banners[i].url
        })
      }
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