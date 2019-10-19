// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    renderModulesInfo: [
      {"type": 1,"placeholder": "搜索" }, 
      {"type": 2,"tabArr": ['热门', '女装', '百货', '鞋包', '食品', '母婴'] },
      {"type": 3,imgArr: ["https://pages.c-ctrip.com/you/component-local/default.png", "https://pages.c-ctrip.com/you/component-local/default.png"]},
      {"type": 4, columnNum: 5,gridArr: [{ "text": '全球购', 'icon': '' }, { "text": '全球购', 'icon': '' }, { "text": '全球购', 'icon': '' }, { "text": '全球购', 'icon': '' }, { "text": '全球购', 'icon': '' }, { "text": '全球购', 'icon': '' }, { "text": '全球购', 'icon': '' }, { "text": '全球购', 'icon': '' }, { "text": '全球购', 'icon': '' }, { "text": '全球购', 'icon': '' }] },
      { "type": 5, columnNum: 2, gridArr: [{ "text": '商品描述', 'icon': '' }, { "text": '商品描述', 'icon': '' }, { "text": '商品描述', 'icon': '' }, { "text": '商品描述', 'icon': '' }, { "text": '商品描述', 'icon': '' }, { "text": '商品描述', 'icon': '' }, { "text": '商品描述', 'icon': '' }, { "text": '商品描述', 'icon': '' }, { "text": '商品描述', 'icon': '' }, { "text": '商品描述', 'icon': '' }] }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.renderModules(this.data.renderModulesInfo)
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