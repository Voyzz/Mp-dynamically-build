// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    renderModulesInfo:[{"type":1,"title":"标题1"},{"type":2,"text":"文本内容"},{"type":3,"image":['','']},{"type":1,"title":"标题2"},{"type":1,"title":"hhh"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.renderModules(this.data.renderModulesInfo)
  },

  renderModules: function(res) {
    console.log('====================================');
    console.log(res);
    console.log('====================================');
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