// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    renderModulesInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    // 读取配置文件
    wx.getFileSystemManager().readFile({
      filePath: './configInfo.txt', //源文件
      encoding: 'utf-8',
      success: res => {
        that.setData({
          renderModulesInfo: JSON.parse(res.data)
        })
        that.renderModules(that.data.renderModulesInfo)
      },
      fail: console.error		//复制失败返回error
    })
  },

  click:function(e){
    console.log(e)
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