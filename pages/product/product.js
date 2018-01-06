// pages/product/product.js

import { Product } from 'product-model.js';
var product = new Product();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    productCounts: 1,
    currentTabsIndex: 0
  },

  /**
   * 监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.data.id = id;
    this._loadData();
  },

  /*加载所有数据*/
  _loadData: function (callback) {
    var that = this;
    product.getDetailInfo(this.data.id, (data) => {
      that.setData({
        product: data
      });
      callback && callback();
    });
  },






  //选择购买数目
  bindPickerChange: function (event) {
    this.setData({
      productCounts: this.data.countsArray[event.detail.value],
    })
  },

  //切换详情面板
  onTabsItemTap: function (event) {
    var index = product.getDataSet(event, 'index');
    this.setData({
      currentTabsIndex: index
    });
  },

  
})