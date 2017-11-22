import lawService from '../../services/law.service'

Page({

  onLoad: function () {
    lawService.getLawTypes().then((res) => {
      this.setData({lawTypes: res.data})
    })
  },

  searchboxChange: function (event) {
    let val = event.detail.value
    console.log(val)
    wx.navigateTo({url: '../laws/laws?search=' + val})
  }

})
