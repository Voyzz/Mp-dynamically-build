// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // renderModulesInfo: [
    //   {"type": 1,"placeholder": "搜索" }, 
    //   {"type": 2,"tabliest": ['热门', '女装', '百货', '鞋包', '食品', '母婴'] },
    //   {"type": 3,imgArr: ["https://pages.c-ctrip.com/you/component-local/default.png", "https://pages.c-ctrip.com/you/component-local/default.png"]},
    //   {"type": 4,columnNum: 5,gridArr:[]},
    //   {"type": 5,columnNum: 2,gridArr:[]},
    //   {"type": 6,gridArr:[]}
    //   ],
    renderModulesInfo: [
      {
        "type": 1,
        "placeholder": "请输入搜索关键字"
      }, 
      {
        "type": 2,
        "tabliest": [{
          "text": "导航1",
          "icon": "photo-o"
        }, {
          "text": "导航2",
          "icon": "photo-o"
        }, {
          "text": "导航3",
          "icon": "photo-o"
        }]
      }, 
      {
        "type": 3,
        "images": ["https://img.yzcdn.cn/vant/apple-1.jpg", "https://img.yzcdn.cn/vant/apple-2.jpg"],
        "height": 150
      }, 
      {
        "type": 4,
        "columnNum": 4,
        "columnList": [{
          "text": "酒店",
          "icon": "photo-o"
        }, {
          "text": "自由行",
          "icon": "photo-o"
        }, {
          "text": "跟团游",
          "icon": "photo-o"
        }, {
          "text": "租车",
          "icon": "photo-o"
        }, {
          "text": "车票",
          "icon": "photo-o"
        }, {
          "text": "火车票",
          "icon": "photo-o"
        }, {
          "text": "轮船",
          "icon": "photo-o"
        }, {
          "text": "其他",
          "icon": "photo-o"
        }]
      }, 
      {
        "type": 5,
        "goodList": [{
          "imageUrl": "https://img.yzcdn.cn/vant/apple-2.jpg",
          "text": "macbook pro 新款",
          "price": "22.3"
        }, {
          "imageUrl": "https://img.yzcdn.cn/vant/apple-2.jpg",
          "text": "iphone新款",
          "price": "22.8"
        }],
        "columnNum": 1
      }, 
      {
        "type": 6,
        "tabarList": [{
          "text": "主页",
          "icon": "photo-o"
        }, {
          "text": "朋友",
          "icon": "friends-o"
        }, {
          "text": "我的",
          "icon": "photo-o"
        }]
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.renderModules(this.data.renderModulesInfo)
    // this.fakeData({"text": '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述','imageUrl':'https://pages.c-ctrip.com/you/component-local/default.png',"price":'998'},10,5)
    // this.fakeData({ "text": '全球购', 'icon': '' }, 10, 4)
    // this.fakeData({ "text": '标签', 'icon': 'home-o'},4,6)
  },

  // 构造假数据
  fakeData: function (item,sum,type) {
    let that = this
    let _gridArr = []
    let _tmpObj = that.data.renderModulesInfo
    for (let index = 0; index < sum; index++) {
      _gridArr.push(item)
    }
    _tmpObj.forEach(e=>{
      if (e.type == type) {
        e.gridArr = _gridArr
      }
    })
    that.setData({
      renderModulesInfo:_tmpObj
    })
  },

  renderModules: function(res) {
    console.log(res);
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