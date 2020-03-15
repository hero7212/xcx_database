// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = wx.cloud.database()
const productsCollection = db.collection('products')
// 云函数入口函数
exports.main = async (event, context) => {
  return await productsCollection.where({
    color: 'red'
  }).remove()
}