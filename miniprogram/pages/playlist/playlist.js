const MAX_LIMIT = 15
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperImgUrls: [{
        url: 'http://p1.music.126.net/FFlFT2hK14eW5Fuj52Mryg==/109951165100090270.jpg?imageView&quality=89',
      },
      {
        url: 'http://p1.music.126.net/-Rj_kyPhumGK7Y50Agh31g==/109951165099393644.jpg?imageView&quality=89',
      },
      {
        url: 'http://p1.music.126.net/-y5CryHf5Z1n0Ye2_gb7qQ==/109951165099388616.jpg?imageView&quality=89',
      },
      {
        url: 'http://p1.music.126.net/yLSSMUn-GwG3LKlkIrMVMw==/109951165099170900.jpg?imageView&quality=89',
      }
    ],
    playList: []
  },

  _getPlaylist() {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'music',
      data: {
        start: this.data.playList.length,
        count: MAX_LIMIT,
        $url: 'playlist'
      }
    }).then(res => {
      this.setData({
        playList: this.data.playList.concat(res.result.data)
      })
      wx.stopPullDownRefresh()
      wx.hideLoading()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getPlaylist()
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
    this.setData({
      playList: []
    })
    this._getPlaylist()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._getPlaylist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})