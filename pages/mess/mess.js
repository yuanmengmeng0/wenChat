// pages/mess/mess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      {
        id: 1,
        img: '../../imgs/bg/1-2.jpg',
        url: '',
        name: '告别午高峰'
      },
      {
        id: 2,
        img: '../../imgs/bg/1-3.jpg',
        url: '',
        name: '金牌好店'
      }
    ],
    mess:[{
      id:0,
      title:"微信吗达克赛德打开的卡经济的反馈",
      date:"2019.10.23",
      img:"../../imgs/logo/m_1.jpg"
    }, {
        id: 1,
        title: "微信吗达克赛德打开的卡经济的反馈",
        date: "2019.10.24",
        img: "../../imgs/logo/m_2.jpg"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  mess_detail:function(e){
    var id = e.currentTarget.dataset.id;
    wx.setStorageSync("id", id);
    wx.navigateTo({
      url: '../../pages/mess/mess_detail/mess_detail?id='+id,
    })
  }
})