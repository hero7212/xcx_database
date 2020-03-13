const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  addData: function(event) {
    wx.cloud.callFunction({
      name: 'addData'
    }).then(res => {
      console.log(res)
    })
    // console.log(event)
    // productsCollection.add({
    //   data: {
    //     title: "Product 1",
    //     image: 'http://placehold.it/400x200/',
    //     tags: ['tag1', 'tag2'],
    //     price: 120.12,
    //     color: 'red'
    //   }
    // }).then(console.log)
  }
})