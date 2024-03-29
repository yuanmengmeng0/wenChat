//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 是否过期
    wx.checkSession({
      success:function(succ){
        console.log(succ)
      },
      fail:function(err){
        console.log(err)
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("用户"+res.code)
           if(res.code){
             wx.getUserInfo({
               success: function (e) {
                 // 可以将 res 发送给后台解码出 unionId
                 console.log("app获取信息："+e)
                 wx.request({
                   url: 'http://ymm.free.idcfengye.com/dnshosts/getUser',
                   data: {
                     userInfo: e.userInfo,
                     encryptedData:e.encryptedData,
                     iv:e.iv,
                     code:res.code
                   },
                   method: "GET",
                   header: {
                     'content-type': 'application/x-www-form-urlencoded'
                   },
                   success: function (e) {
                     console.log(e.data);
                   },
                   fail: function (res) {
                     console.log("Fail to connect")
                   }
                 })
           }  
             })
      }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  
})