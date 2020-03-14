const db = wx.cloud.database()
const _ = db.command
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  simple() {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  red() {
    productsCollection.where({
      color: 'red'
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  lt() {
    productsCollection.where({
      price: _.lt(50)
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  in() {
    productsCollection.where({
      price: _.in([4,5,6])
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  and(){
    productsCollection.where({
      price: _.gt(20).and(_.lt(50))
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  limit() {
    productsCollection.limit(10).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
})