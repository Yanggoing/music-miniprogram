//app.js
App({
  onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'experiment-m8szt',
        traceUser: true,
      })
    }

    this.globalData = {
      playinMusicId: -1
    }
  },

  setPlayingMusicId(musicId) {
    this.globalData.playinMusicId = musicId
  },
  getPlayingMusicId() {
    return this.globalData.playinMusicId
  }
})