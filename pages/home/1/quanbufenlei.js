// pages/home/1/quanbufenlei.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        switchTitle1: '最新发布',
        switchTitle2: '最多人看',
        itemTitle: '筛选',
        option1: [{
                text: '全部商品',
                value: 0
            },
            {
                text: '文具笔记',
                value: 1
            },
            {
                text: '闲置数码',
                value: 2
            },
            {
                text: '生活美妆',
                value: 3
            },
            {
                text: '闲置书籍',
                value: 4
            },
            {
                text: '绿植盆栽',
                value: 5
            },
            {
                text: '闲置家具',
                value: 6
            },
        ],
        value1: 0,
    },
    onConfirm() {
        this.selectComponent('#item').toggle();
    },
    onSwitch1Change({
        detail
    }) {
        this.setData({
            switch1: detail
        });
    },

    onSwitch2Change({
        detail
    }) {
        this.setData({
            switch2: detail
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})