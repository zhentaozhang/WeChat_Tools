// // pages/message/message.js

// import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast' //导入vant的提示
// const DB = wx.cloud.database().collection("list")
// let url = ""
// Page({
//     data: {
//         fileList: [],
//     },

//     addData() {
//         const {
//             fileList = []
//         } = this.data;
//         if (fileList.length == 0 || fileList[0].status == "uploading") {
//             Toast.fail("图片正在上传，请等待~");
//         } else {
//             var fileID = this.data.fileID
//             Toast.success("上传成功");
//             DB.add({
//                 data: {
//                     url: url,
//                     fileID: fileID
//                 },
//                 success(res) {
//                     console.log("添加成功", res)
//                 },
//                 fail() {
//                     console.log("添加失败", res)
//                 }
//             })
//         }
//     },
//     //点击上传图片后的状态
//     afterRead(event) {
//         const {
//             file
//         } = event.detail;
//         const {
//             fileList = []
//         } = this.data;
//         fileList.push({})
//         fileList[0].status = 'uploading'
//         this.setData({
//             fileList
//         });
//         this.uploadImage(file.url);
//     },
//     //上传到云开发的存储中
//     uploadImage(fileURL) {
//         var that = this
//         wx.cloud.uploadFile({
//             cloudPath: new Date().getTime() + ".png",
//             filePath: fileURL,
//             success: res => {
//                 that.addImagePath(res.fileID)
//                 that.setData({
//                     fileID: res.fileID
//                 })
//             },
//             fail: console.error
//         })
//     },

//     //点击预览的x号，将图片删除
//     deleteImg(event) {
//         const delIndex = event.detail.index
//         const {
//             fileList
//         } = this.data
//         fileList.splice(delIndex, 1)
//         this.setData({
//             fileList
//         })

//         //在云存储中删除
//         var fileID = this.data.fileID;
//         this.remove(fileID)
//     },

//     /**
//      * 生命周期函数--监听页面加载
//      */
//     onLoad(options) {

//     },

//     /**
//      * 生命周期函数--监听页面初次渲染完成
//      */
//     onReady() {

//     },

//     /**
//      * 生命周期函数--监听页面显示
//      */
//     onShow() {

//     },

//     /**
//      * 生命周期函数--监听页面隐藏
//      */
//     onHide() {

//     },

//     /**
//      * 生命周期函数--监听页面卸载
//      */
//     onUnload() {

//     },

//     /**
//      * 页面相关事件处理函数--监听用户下拉动作
//      */
//     onPullDownRefresh() {

//     },

//     /**
//      * 页面上拉触底事件的处理函数
//      */
//     onReachBottom() {

//     },

//     /**
//      * 用户点击右上角分享
//      */
//     onShareAppMessage() {

//     }
// })

Page({
  data: {
    show: false,
    actions: [
      {
        name: '选项',
      },
      {
        name: '选项',
      },
      {
        name: '选项',
        subname: '描述信息',
        openType: 'share',
      },
    ],
  },

  onClose() {
    this.setData({ show: false });
  },

  onSelect(event) {
    console.log(event.detail);
  },
});
