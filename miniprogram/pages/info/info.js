const db = wx.cloud.database()
const _ = db.command
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    productsCollection.doc(options.id).field({
      color: true,
      price: true,
      title: true,
      tags: true
    }).get().then(res => {
      this.setData({
        product: res.data,
        id: options.id
      })
    })
  },

  addtag(event) {  
    productsCollection.doc(this.data.id).update({
      data: {
        tags: _.push(['mini-program', 'cloud'])
      }
    }).then(res => {
      console.log(res)
    })
  },

  deltag() {
    // productsCollection.doc(this.data.id).update({
    //   data: {
    //     tags: _.shift()
    //   }
    // }).then(res => {
    //   console.log(res)
    // })
    productsCollection.doc(this.data.id).update({
      data: {
        tags: _.pop()
      }
    }).then(res => {
      console.log(res)
    })
  },
  update(event) {  
    productsCollection.doc(this.data.id).update({
      data: {
        title: '更新后的title'
      }
    }).then(res => {
      console.log(res)
    })
  },
})