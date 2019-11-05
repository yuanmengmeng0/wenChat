var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: '7EKBZ-TVQK5-2GPIA-QNLBR-F55HO-KTFMN' // 必填
});
Page({
  data: {
    show:true,
    latitude:'',
    longitude:'',
    
    controls: [{
      id: 1,
      iconPath: '',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onLoad:function(res){
    var that=this
    wx.getLocation({
      type:'wgs84',
      isHighAccuracy: true,
      highAccuracyExpireTime: 4000,
      success: function(res) {
        console.log(res)
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude,
          locaLat: res.latitude,
          locaLon: res.longitude
        })
      },
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  getsuggest:function(e){
    console.log(e)
    var _this=this;
    _this.setData({
      backfill:e.detail.value,
      show:true
    })
    qqmapsdk.search({
      keyword:e.detail.value,
      
      success:function(res){
        console.log(res)
        var sear=[];
        for(var i=0;i<res.data.length;i++){
         sear.push({
           title: res.data[i].title,
           id: res.data[i].id,
           addr: res.data[i].address,
           city: res.data[i].city,
           district: res.data[i].district,
           latitude: res.data[i].location.lat,
           longitude: res.data[i].location.lng
         });
        }
        _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
          suggestion: sear
        });
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },
  backfill: function (e) {
    console.log(e)
    var id = e.currentTarget.id;
    for (var i = 0; i < this.data.suggestion.length; i++) {
      if (i == id) {
        this.setData({
          backfill: this.data.suggestion[i].title,
          show:false
        });
       
      }
    }
  },
  formSubmit:function(e){
    console.log(e);
    var _this=this;
    //调用地址解析接口
    qqmapsdk.geocoder({
      //获取表单传入地址
      address:e.detail.value.geocoder,//地址参数
      success:function(res){
        console.log(res);
        var res=res.result;
        var latitude=res.location.lat;
        var longitude=res.location.lng;
        //根据地址解析在地图上标记解析地址位置
        _this.setData({//获取返回结果，放到markers及poi中，并在地图显示
          latitude: latitude,
          longitude: longitude,
         markers:[{
           id: 0,
           title: res.title,
           latitude: latitude,
           longitude: longitude,
           callout: { //可根据需求是否展示经纬度
             content: latitude + ',' + longitude,
             color: '#000',
             display: 'ALWAYS'
           }
         }],
          polyline:[{
            points: [{
              latitude: latitude,
              longitude: longitude,
            }],
            color: "#FF0000DD",
            width: 2,
            dottedLine: false
          }],
        })
      }
    })
  },
  local:function(res){
    this.setData({
      latitude:this.data.locaLat,
      longitude:this.data.locaLon
    })
  },
  route: function (e) {
    var _this=this;
    qqmapsdk.direction({
      mode: 'driving',//可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行），不填默认：'driving',可不填
      from:_this.data.locaLat+","+_this.data.locaLon,
      to:_this.data.markers[0].latitude+","+_this.data.markers[0].longitude,
      success:function(res){
        console.log(_this.data.locaLat + "," + _this.data.locaLon)
        console.log(_this.data.markers[0].latitude+","+_this.data.markers[0].longitude)
        console.log(res);
        var ret=res;
        var coors=ret.result.routes[0].polyline,pl=[];
        //坐标解压（返回的点串坐标，通过前向差分进行压缩）
        var kr=1000000;
        for(var i=2;i<coors.length;i++){
          coors[i]=Number(coors[i-2])+Number(coors[i])/kr;
        }
        //将解压后的坐标放入点串数组pl中
        for(var i=0;i<coors.length;i+=2){
          pl.push({ latitude: coors[i], longitude:coors[i+1]})
        }
        console.log(pl)
         //设置polyline属性，将路线显示出来,将解压坐标第一个数据作为起点
         _this.setData({
           latitude: pl[0].latitude,
           longitude: pl[0].longitude,
           polyline: [{
             points: pl,
             color: '#FF0000DD',
             width: 4
           }]
         })
      },
      fail:function(err){
        console.log(err)
      }
    })
  }
})