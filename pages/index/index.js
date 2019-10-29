//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banners: [
      {
        id: 3,
        img: '../../imgs/bg/1-1.jpg',
        url: '',
        name: '百亿巨惠任你抢'
      },
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
    iconsF:[
      {
        id:1,
        img:'../../imgs/index/icon_1.jpg',
        url:'',
        name:'展商信息'
      }, {
        id: 2,
        img: '../../imgs/index/icon_2.jpg',
        url: '',
        name: '智能导航'
      },
      {
        id: 3,
        img: '../../imgs/index/icon_3.jpg',
        url: '',
        name: '信息资讯'
      }, {
        id: 4,
        img: '../../imgs/index/icon_4.jpg',
        url: '',
        name: '更多服务'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage:function(){

  },
  mess:function(e){
    if(e.currentTarget.dataset.id == 1){
      wx.switchTab({
        url: '../../pages/list/list',
      })
    } else if (e.currentTarget.dataset.id == 2) {
      wx.switchTab({
        url: '../../pages/map/map',
      })
    }else if (e.currentTarget.dataset.id == 3){
      wx.navigateTo({
        url: '../../pages/mess/mess',
      })
    } else if (e.currentTarget.dataset.id == 4) {
      wx.navigateTo({
        url: '../../pages/more/more',
      })
    }
  },
  intro:function(e){
   wx.showLoading({
     title: '加载中',
   })
   setTimeout(function(){
     wx.hideLoading();
     wx.navigateTo({
       url: '../../pages/index/intro/intro',
     })
   },2000)
  }
})
