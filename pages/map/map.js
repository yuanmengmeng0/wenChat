Page({
  data: {
    lat:'',
    lon:'',
    markers: [{
      iconPath: "",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }, {
        iconPath: "",
        id: 1,
        latitude: 39.0851,
        longitude: 117.19937,
        width: 50,
        height: 50
      }],
    polyline: [{
      points: [{
        longitude: 117.19937,
        latitude: 39.0851
      }, {
        longitude: 113.5555555,
        latitude: 23.21229
        }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: false
    }],
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
      success: function(res) {
        console.log(res)
        that.setData({
          lat:res.latitude,
          lon:res.longitude
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
  }
})